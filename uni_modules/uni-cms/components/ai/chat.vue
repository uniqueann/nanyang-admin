<template>
	<view class="page">
		<view class="container">
			<text class="noData" v-if="msgList.length === 0">没有对话记录</text>
			<scroll-view :scroll-into-view="scrollIntoView" scroll-y="true" class="msg-list" :enable-flex="true">
				<view v-for="(msg,index) in msgList"  class="msg-item" :key="index">
					<view class="create_time-box">
						<uni-dateformat class="create_time" :date="msg.create_time" format="MM/dd hh:mm:ss"></uni-dateformat>
					</view>
					<view :class="{reverse:!msg.isAi}">
						<view class="userInfo">
              <image class="avatar" v-if="msg.isAi" src="./static/uni-ai.png" mode="widthFix"></image>
              <image class="avatar" v-else src="./static/avatar.png" mode="widthFix"></image>
						</view>
						<view class="content">
							<!-- <text class="copy" @click="copy">复制</text> -->
							<uni-ai-msg :md="msg.content" :show-cursor="index == msgList.length-1 && msg.isAi && sseIndex"></uni-ai-msg>
						</view>
						<uni-icons v-if="index == msgList.length-1 && !msg.isAi && msg.state != 100 && msgStateIcon(msg)"
							@click="msg.state == -100 ? retriesSendMsg() : ''" :color="msg.state===0?'#999':'#d22'"
							:type="msgStateIcon(msg)" class="msgStateIcon">
						</uni-icons>
					</view>
				</view>
				<view class="tip-ai-ing" v-if="msgList.length && msgList.length%2 !== 0">
					<text>uni-ai正在思考中...</text>
					<view v-if="NODE_ENV == 'development' && !stream">
						如需提速，请开通<uni-link class="uni-link" href="https://uniapp.dcloud.net.cn/uniCloud/uni-ai-chat.html" text="[流式响应]"></uni-link>
					</view>
				</view>
				<view id="last-msg-item"></view>
			</scroll-view>

			<view class="foot-box">
				<view class="menu" v-if="isWidescreen">
					<view class="trash menu-item">
						<image @click="clear" src="./static/remove.png" mode="heightFix"></image>
					</view>
				</view>

				<view class="foot-box-content">
					<view v-if="!isWidescreen" class="trash">
						<uni-icons @click="clear" type="trash" size="24" color="#888"></uni-icons>
					</view>
					<view class="textarea-box">
						<textarea v-model="content" class="textarea" :auto-height="!isWidescreen" :disabled="inputBoxDisabled"
							:placeholder="placeholderText" :maxlength="-1" placeholder-class="input-placeholder"></textarea>
					</view>
					<view class="send-btn-box">
						<text v-if="isWidescreen" class="send-btn-tip">↵ 发送 / shift + ↵ 换行</text>
						<button @click="beforeSendMsg" :disabled="inputBoxDisabled || !content" class="send" type="primary">发送</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniAiMsg from "./components/uni-ai-msg/uni-ai-msg.vue";
	export default {
    components: {
      uniAiMsg
    },
		data() {
			return {
				scrollIntoView: "",
				msgList: [],
				content: "",
				sseIndex: 0,
				stream:true,
				isWidescreen:false
			}
		},
		computed: {
			inputBoxDisabled() {
				if (this.sseIndex !== 0) {
					return true
				}
				return !!(this.msgList.length && this.msgList.length%2 !== 0)
			},
			placeholderText() {
				if (this.inputBoxDisabled) {
					return 'uni-ai正在回复中'
				} else {
					// #ifdef H5
					return window.innerWidth > 960 ? '请输入内容，ctrl + enter 发送' : '请输入要发给uni-ai的内容'
					// #endif
					return '请输入要发给uni-ai的内容'
				}
			},
			NODE_ENV(){
				return process.env.NODE_ENV
			}
		},
		watch: {
			msgList:{
				handler(msgList) {
					uni.setStorageSync('uni-ai-msg', msgList)
				},
				deep:true
			}
		},
		async mounted() {
			// for (let i = 0; i < 15; i++) {
			// 	this.msgList.push({
			// 		isAi: i % 2 == true,
			// 		content: "1-" + i
			// 	})
			// }

			this.msgList = uni.getStorageSync('uni-ai-msg') || []

			// this.msgList.pop()
			// console.log('this.msgList', this.msgList);
			this.showLastMsg()

			// #ifdef H5
			//获得消息输入框对象
			let adjunctKeydown = false
			const textareaDom = document.querySelector('.textarea-box textarea');
			if (textareaDom) {
				//键盘按下时
				textareaDom.onkeydown = e => {
					// console.log('onkeydown', e.keyCode)
					if ([16, 17, 18, 93].includes(e.keyCode)) {
						//按下了shift ctrl alt windows键
						adjunctKeydown = true;
					}
					if (e.keyCode == 13 && !adjunctKeydown) {
						this.beforeSendMsg();
					}
				};
				textareaDom.onkeyup = e => {
					//松开adjunct键
					if ([16, 17, 18, 93].includes(e.keyCode)) {
						adjunctKeydown = false;
					}
				};
			}
			// #endif

			// 添加惰性函数，检查是否开通uni-push;决定是否启用stream

			// #ifdef H5
			uni.createMediaQueryObserver(this).observe({
				minWidth: 650,
			}, matches => {
				this.isWidescreen = matches;
			})
			// #endif
		},
		methods: {
			//检查是否开通uni-push;决定是否启用stream
			async checkIsOpenPush(){
        return new Promise(resolve => {
          uni.getPushClientId({
            fail: () => {
              this.stream = false
            },
            complete: () => {
              this.checkIsOpenPush = ()=>{}
              resolve()
            }
          })
        })
			},
			async retriesSendMsg() {
				// 检查是否开通uni-push;决定是否启用stream
				await this.checkIsOpenPush()
				this.send()
			},
			async beforeSendMsg() {
				// 检查是否开通uni-push;决定是否启用stream
				await this.checkIsOpenPush()

				if(!this.content){
					return uni.showToast({
						title: '内容不能为空',
						icon: 'none'
					});
				}

				this.msgList.push({
					isAi: false,
					content: this.content,
					state: 0,
					create_time: Date.now()
				})
				this.showLastMsg()
				// 清空文本内容
				this.$nextTick(() => {
					this.content = ''
				})
				this.send()
			},
			async send() {
				let messages = []
				// 复制一份，消息列表数据
				let msgs = JSON.parse(JSON.stringify(this.msgList))
				// 带总结的消息 index
				let findIndex = [...msgs].reverse().findIndex(item => item.summarize)
				// console.log('findIndex', findIndex)
				if (findIndex != -1) {
					let aiSummaryIndex = msgs.length - findIndex - 1
					// console.log('aiSummaryIndex', aiSummaryIndex)
					msgs[aiSummaryIndex].content = msgs[aiSummaryIndex].summarize
					// 拿最后一条带直接的消息作为与ai对话的msg body
					msgs = msgs.splice(aiSummaryIndex, msgs.length - 1)
				} else {
					// 如果未总结过就直接从末尾拿10条
					msgs = msgs.splice(-10)
				}

				messages = msgs.map(item => {
					let role = "user"
					if (item.isAi) {
						role = item.summarize ? 'system' : 'assistant'
					}
					return {
						content: item.content,
						role
					}
				})

				console.log('send to ai messages:', messages);


				let SSEChannel = false;
				if(this.stream){
					SSEChannel = new uniCloud.SSEChannel() // 创建消息通道
					// console.log('SSEChannel',SSEChannel);
					SSEChannel.on('message', (message) => { // 监听message事件
						// console.log('on message', message);
						if (this.sseIndex === 0) {
							this.msgList.push({
								isAi: true,
								content: message,
								create_time: Date.now()
							})
							this.showLastMsg()
						} else {
							let length = this.msgList.length,
								lastMsg = this.msgList[length - 1]
							lastMsg.content +=  "\n" + message
							this.msgList.splice(length - 1, 1, lastMsg)
							this.showLastMsg()
						}
						this.sseIndex++
					})
					SSEChannel.on('end', (e) => { // 监听end事件，如果云端执行end时传了message，会在客户端end事件内收到传递的消息
						// console.log('on end', e);
						if(e && e.summarize){
							let length = this.msgList.length,
								lastMsg = this.msgList[length - 1]
							lastMsg.summarize = e.summarize
							this.msgList.splice(length - 1, 1, lastMsg)
						}
						this.sseIndex = 0
						this.showLastMsg()
					})
					await SSEChannel.open() // 等待通道开启
				}


				const uniAiChat = uniCloud.importObject("uni-ai-chat",{
					customUI:true
				})
				uniAiChat.send({
					messages,
					SSEChannel
				})
				.then(res => {
					let index = this.msgList.length - 1
					let lastItem = this.msgList[index]
					lastItem.state = 100
					this.msgList.splice(index, 1, lastItem)

					if (!SSEChannel) {
						// console.log(res, res.reply);
						this.msgList.push({
							isAi: true,
							content: res.data.reply,
							summarize: res.data.summarize,
							create_time: Date.now()
						})
						this.showLastMsg()
					}
				})
				.catch(e => {
					console.log(e);
					let index = this.msgList.length - 1
					let lastItem = this.msgList[index]
					lastItem.state = -100
					this.msgList.splice(index, 1, lastItem)

					uni.showModal({
						content: JSON.stringify(e.message),
						showCancel: false
					});
				})
			},
			showLastMsg() {
				this.$nextTick(() => {
					this.scrollIntoView = "last-msg-item"
					this.$nextTick(() => {
						this.scrollIntoView = ""
					})
				})
			},
			msgStateIcon(msg) {
				switch (msg.state) {
					case 0:
						//	发送中
						return 'spinner-cycle'
						break;
					case -100:
						//	发送失败
						return 'refresh-filled'
						break;
					case -200:
						//	禁止发送（内容不合法）
						return 'info-filled'
						break;
					default:
						return false
						break;
				}
			},
			clear() {
				uni.showModal({
					title: "确认要清空聊天记录？",
					content: '本操作不可撤销',
					complete: (e) => {
						if (e.confirm) {
							this.msgList = []
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	view,
	textarea,
	button,
	.page
	{
		display: flex;
		box-sizing: border-box;
	}
	/* #endif */


	/* #ifndef APP-NVUE */
	page,
	/* #endif */
	.page,
	.container {
		background-color: #efefef;

		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */

		/* #ifndef APP-NVUE */
		height: 100vh;
		/* #endif */

		/* #ifdef H5 */
		height: calc(100vh - 44px);
		/* #endif */

		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* #ifndef APP-NVUE */
	.container {
		background-color: #FAFAFA;
	}
	/* #endif */

	.foot-box {
		width: 750rpx;
		display: flex;
		flex-direction: column;
		padding: 10px 0px;
		background-color: #FFF;
	}
	.foot-box-content{
		justify-content: space-around;
	}

	.textarea-box {
		padding: 8px 10px;
		background-color: #f9f9f9;
		border-radius: 5px;
	}

	.textarea-box .textarea {
		max-height: 100px;
		font-size: 14px;
		/* #ifndef APP-NVUE */
		overflow: auto;
		/* #endif */
		width: 450rpx;
	}

	/* #ifdef H5 */
	/*隐藏滚动条*/
	.textarea-box .textarea::-webkit-scrollbar {
		width: 0;
	}
	/* #endif */

	.input-placeholder {
		color: #bbb;
	}

	.trash,
	.send {
		width: 50px;
		height: 30px;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
	}

	.trash {
		width: 30rpx;
		margin-left: 10rpx;
	}

	.send {
		color: #FFF;
		border-radius: 4px;
		display: flex;
		margin: 0;
		padding: 0;
		font-size: 14px;
		margin-right: 20rpx;
	}

	/* #ifndef APP-NVUE */
	.send::after {
		display: none;
	}
	/* #endif */


	.msg-list {
		flex: 1;
		height: 1px;
		width: 750rpx;
	}

	.userInfo {
		flex-direction: column;
	}

	.msg-item {
		position: relative;
		width: 750rpx;
		flex-direction: column;
		padding: 0 15px;
		padding-bottom: 15px;
	}

	.msgStateIcon {
		position: relative;
		top: 5px;
		right: 5px;
		align-self: center;
	}

	.avatar {
		width: 40px;
    height: 40px;
		border-radius: 2px;
	}

	.create_time {
		font-size: 12px;
		padding: 5px 0;
		padding-top: 0;
		color: #aaa;
		text-align: center;
		width:750rpx;
		/* #ifdef MP */
		display: flex;
		/* #endif */
	}

	.content {
		/* #ifndef APP-NVUE */
		max-width: 550rpx;
		/* #endif */
		background-color: #FFF;
		border-radius: 5px;
		padding: 12px 10px;
		margin-left: 10px;
		/* #ifndef APP-NVUE */
		word-break: break-all;
		user-select: text;
		cursor: text;
		/* #endif */
	}

	/* #ifndef APP-NVUE */
	.content {
		display: inline;
	}

	.content ::v-deep rich-text{
		max-width: 550rpx;
		overflow: auto;
	}
	/* #endif */

	/* #ifdef H5 */
	.content * {
		display: inline;
	}
	/* #endif */

	.reverse {
		flex-direction: row-reverse;
	}

	.reverse .content {
		margin-left: 0;
		margin-right: 10px;
	}

	.reverse-align {
		align-items: flex-end;
	}

	.noData {
		margin-top: 15px;
		text-align: center;
		width: 750rpx;
		color: #aaa;
		font-size: 12px;
		justify-content: center;
	}

	.tip-ai-ing {
		align-items: center;
		flex-direction: column;
		font-size: 14px;
		color: #919396;
		padding: 15px 0;
	}

	.uni-link {
		margin-left: 5px;
		line-height: 20px;
	}

	/* #ifdef H5 */
	@media screen and (min-width:650px){
		.foot-box{
			border-top: solid 1px #dde0e2;
		}
		.page{
			width: 100vw;
			flex-direction: row;
		}
		.page * {
			max-width: 950px;
		}

		.container, {
			box-shadow: 0 0 5px #e0e1e7;
			margin-top: 44px;
			border-radius: 10px;
			overflow: hidden;
		}

		.container .header{
			height: 44px;
			line-height: 44px;
			border-bottom: 1px solid #F0F0F0;
			width: 100vw;
			justify-content: center;
			font-weight: 500;
		}

		.content {
			background-color: #f9f9f9;
			position: relative;
		}
		// .copy {
		// 	color: #888888;
		// 	position: absolute;
		// 	right: 8px;
		// 	top: 8px;
		// 	font-size: 12px;
		// 	cursor:pointer;
		// }
		// .copy :hover{
		// 	color: #4b9e5f;
		// }

		.foot-box,
		.foot-box-content,
		.msg-list,
		.msg-item,
		// .create_time,
		.noData,
		.textarea-box,
		.textarea,
		textarea-box {
			width: 100% !important;
		}

		.create_time-box {
			margin-top: 15px;
			justify-content: center;
		}

		.textarea-box,
		.textarea,
		textarea,
		textarea-box {
			height: 120px;
		}

		.container,
		.foot-box,
		.textarea-box {
			background-color: #FFF;
		}

		.foot-box-content{
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;
			padding-bottom: 0;
		}

		.menu {
			padding:0 10px;
		}
		.menu-item{
			height:20px;
			justify-content: center;
			align-items: center;
			align-content: center;
			display: flex;
			margin-right: 10px;
			cursor: pointer;
		}
		.trash {
			opacity: 0.8;
		}
		.trash image{
			height: 15px;
		}


		.textarea-box,.textarea-box *{
			// border: 1px solid #000;
		}

		.send-btn-box .send-btn-tip{
			color: #919396;
			margin-right: 8px;
			font-size: 12px;
			line-height: 28px;
		}
	}
	/* #endif */

</style>
