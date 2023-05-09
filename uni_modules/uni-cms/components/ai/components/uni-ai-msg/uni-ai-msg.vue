<template>
	<view class="rich-text-box" :class="{'show-cursor':showCursor}" ref="rich-text-box">
		<rich-text v-if="nodes&&nodes.length" space="nbsp" :nodes="nodes"></rich-text>
		<!-- #ifdef H5 -->
		<view class="copy-box" :style="{left,top}">
			<text class="copy" @click="copy">复制</text>
			<!-- <view v-if="left != '-100px'" class="copy-mask" @click="left = '-100px'"></view> -->
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import parseHtml from './html-parser.js';
	import MarkdownIt from '../../static/markdown-it.min';
	import hljs from '../../static/highlight.min'

	const md = new MarkdownIt({
		html: true,
		highlight: function(str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return '<pre class="hljs" style="padding: 5px 8px;margin: 5px 0;overflow: auto;"><code>' +
						hljs.highlight(lang, str, true).value +
						'</code></pre>';
				} catch (__) {}
			}

			return '<pre class="hljs" style="padding: 5px 8px;margin: 5px 0;overflow: auto;"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
		}
	})
	export default {
		name: "msg",
		data() {
			return {
				left:"-100px",
				top:"-100px"
			};
		},
		mounted() {
			// #ifdef H5
			// web端限制不选中文字时出现系统右键菜单
			let richTextBox = this.$refs['rich-text-box']
			if (richTextBox) {
				richTextBox.$el.addEventListener('contextmenu', (e) => {
					if (!document.getSelection().toString()) {
						console.log(e);
						this.top = e.y+'px'
						this.left = e.x+'px'

						console.log(e.x);
						console.log(e.y);
						e.preventDefault()
					}
				})
			}

			document.addEventListener('click',()=>{
				this.left = "-100px"
			})

			// #endif
		},
		props: {
			md: {
				type: String,
				default () {
					return ''
				}
			},
			showCursor: {
				type: [Boolean, Number],
				default () {
					return false
				}
			}
		},
		computed: {
			html() {
				let html = md.render(this.md + '<span class="cursor">|</span>')
				return html
			},
			nodes() {
				return parseHtml(this.html)
			}
		},
		methods:{
			// #ifdef H5
			copy(){
				uni.setClipboardData({
					data:this.md,
					showToast:false,
				})
				this.left = "-100px"
			}
			// #endif
		}
	}
</script>

<style lang="scss">
	@import "../../static/highlight.agate.css";

	/* #ifndef APP-NVUE */
	.rich-text-box ::v-deep pre.hljs{
		padding: 5px 8px;
		margin: 5px 0;
		overflow: auto;
	}

	.cursor{
		display: none;
	}
	.show-cursor .cursor {
		display: inline-block;
		color: blue;
		font-weight: bold;
		animation: blinking 1s infinite;
	}

	@keyframes blinking {
		from {
			opacity: 1.0;
		}

		to {
			opacity: 0.0;
		}
	}
	/* #endif */

	/* #ifdef H5 */
	.copy-box{
		position: fixed;
	}
	// .copy-mask{
	// 	background-color: rgba(255,255,255,0.5);
	// 	width: 100vw;
	// 	height: 100vh;
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	z-index: 9;
	// }
	.copy{
		position: fixed;
		background-color: #fff;
		box-shadow: 0 0 3px #aaa;
		padding: 5px;
		border-radius: 5px;
		z-index: 999;
		cursor: pointer;
		font-size: 14px;
		color: #222;
	}
	.copy:hover{
		color: #00a953;
	}
	/* #endif */
</style>
