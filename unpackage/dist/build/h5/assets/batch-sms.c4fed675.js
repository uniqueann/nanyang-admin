import{_ as e,o as s,c as t,w as a,d as l,t as n,X as i,C as o,b as d,p as r,D as m,y as u,aE as c,f as p,g as f,H as h,a2 as g,a as y,e as _,F as C,E as v,r as k,i as T,P as D,R as S,q as b}from"./index-52dd6894.js";import{_ as w}from"./uni-data-select.0a6d800a.js";import{_ as M}from"./uni-forms-item.4e6b57d7.js";import{_ as P}from"./uni-easyinput.cff98e18.js";import{_ as x}from"./uni-forms.9d63b157.js";const V=e({name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes(){const{type:e,disabled:s,inverted:t,circle:a,mark:l,size:n,isTrue:i}=this;return["uni-tag--"+e,"uni-tag--"+n,i(s)?"uni-tag--disabled":"",i(t)?"uni-tag--"+e+"--inverted":"",i(a)?"uni-tag--circle":"",i(l)?"uni-tag--mark":"",i(t)?"uni-tag--inverted uni-tag-text--"+e:"","small"===n?"uni-tag-text--small":""].join(" ")}},methods:{isTrue:e=>!0===e||"true"===e,onClick(){this.isTrue(this.disabled)||this.$emit("click")}}},[["render",function(e,m,u,c,p,f){const h=r;return u.text?(s(),t(h,{key:0,class:i(["uni-tag",f.classes]),style:o(u.customStyle),onClick:f.onClick},{default:a((()=>[l(n(u.text),1)])),_:1},8,["class","style","onClick"])):d("",!0)}],["__scopeId","data-v-6751c3c1"]]),U=m.importObject("uni-sms-co");const $=e({name:"batchSms",props:{toType:String,receiver:{type:Array,default:()=>[]},condition:{type:Object,default:()=>({})}},data:()=>({smsTemplateLoading:!1,smsPresetList:[{value:"all",text:"全部用户"},{value:"7-day-offline-users",text:"7天内未登录用户"},{value:"15-day-offline-users",text:"15天内未登录用户"},{value:"30-day-offline-users",text:"30天内未登录用户"}],smsTemplate:[],smsTemplateDataErrorMessage:"",smsDataModel:{name:"",templateId:"",templateData:[],smsPreset:"",filtered:!1},smsTemplateContent:"",smsPreviewContent:[],smsSendUserCount:0}),computed:{isSelectedReceiver(){return!!this.receiver.length},sendAll(){return"all"===this.smsDataModel.smsPreset||"userTags"===this.toType},hasCondition(){return!!Object.keys(this.condition).length}},watch:{smsDataModel:{handler(e){if(!e.templateId)return"";const s=this.smsTemplate.find((s=>s.value===e.templateId));let t=e.templateData.reduce(((e,s)=>{const t=new RegExp(`\\$\\{${s.field}\\}`);return e.replace(t,(e=>s.value||e))}),s.content);this.smsTemplateContent=`【${s.sign}】${t}`},deep:!0}},methods:{smsFilteredChange(){this.smsDataModel.filtered=!this.smsDataModel.filtered},popupChange(e){e.show||this.reset()},open(){this.$refs.smsPopup.open(),this.loadSmsTemplate()},close(){this.reset(),this.$refs.smsPopup.close()},async loadSmsTemplate(){if(!(this.smsTemplate.length>0||this.smsTemplateLoading)){this.smsTemplateLoading=!0;try{const e=m.importObject("uni-sms-co",{customUI:!0}),s=await e.template();this.smsTemplate=s.map((e=>({...e,value:e._id,text:e.name})))}finally{this.smsTemplateLoading=!1}}},onSmsTemplateSelected(e){const s=this.smsTemplate.find((s=>s.value===e));if(!s)return;const t=new RegExp(/\$\{(.*?)\}/g);let a,l=[];for(;a=t.exec(s.content);){const e=a[1];e&&l.push({field:e,value:""})}this.smsDataModel.templateData=l},async sendSms(e=!1){const s=await this.$refs.smsForm.validate(),t=this.receiver;for(const l of this.smsDataModel.templateData)if(!l.value)return void(this.smsTemplateDataErrorMessage="字段/值不可为空");this.smsTemplateDataErrorMessage="";const a={type:this.toType,receiver:t};if((this.smsDataModel.filtered||this.smsDataModel.smsPreset)&&(a.condition=this.smsDataModel.smsPreset||this.condition),e){const e=await U.preview(a,s.templateId,this.smsDataModel.templateData);if(0===e.errCode)return this.smsPreviewContent=e.list,this.$refs.previewPopup.open(),void(this.smsSendUserCount=e.total)}u({title:"发送确认",content:`短信${this.sendAll?"将发送给所有用户":this.smsSendUserCount?`预计发送${this.smsSendUserCount}人`:"将发送给符合条件的用户"}，确定发送？`,success:async e=>{if(this.smsSendUserCount=0,e.cancel)return;(await U.createSmsTask(a,s.templateId,this.smsDataModel.templateData,{taskName:s.name})).taskId&&u({content:"短信任务已提交，您可在DCloud开发者后台查看短信发送记录",confirmText:"立即查看",cancelText:"关闭",success:e=>{e.cancel?(this.reset(),this.$refs.smsPopup.close()):(window.open("https://dev.dcloud.net.cn/#/pages/sms/sendLog","_blank"),this.reset(),this.$refs.smsPopup.close())}})}})},chooseFile(){void 0!==window.FileReader?c({count:1,extension:[".json"],success:({tempFiles:e})=>{if(e.length<=0)return;const[s]=e,t=new FileReader;t.readAsText(s),t.onload=()=>this.parserFileJson(null,t.result),t.onerror=()=>this.parserFileJson(t.error)},fail:()=>{u({content:"打开选择文件框失败",showCancel:!1})}}):u({content:"当前浏览器不支持文件上传，请升级浏览器重试",showCancel:!1})},async parserFileJson(e,s){if(e)return console.error(e),void u({content:"文件读取失败，请重新上传文件",showCancel:!1});let t=[];try{t=JSON.parse(s)}catch(a){return console.error(a),void u({content:"短信模板解析失败，请检查模板格式",showCancel:!1})}0===(await U.updateTemplates(t)).errCode&&u({content:"短信模板更新成功",showCancel:!1,success:()=>{this.loadSmsTemplate()}})},reset(){this.smsDataModel.name="",this.smsDataModel.smsPreset="",this.smsDataModel.templateId="",this.smsDataModel.templateData=[],this.smsPreviewContent=[],this.smsTemplateContent="",this.smsSendUserCount=0}}},[["render",function(e,i,o,m,u,c){const V=T,U=p(f("uni-data-select"),w),$=p(f("uni-forms-item"),M),F=D,I=S,j=p(f("uni-easyinput"),P),R=r,E=b,L=p(f("uni-forms"),x),q=p(f("uni-icons"),h),z=p(f("uni-popup"),g);return s(),t(V,null,{default:a((()=>[y(z,{ref:"smsPopup",type:"center",onChange:c.popupChange,"is-mask-click":!1},{default:a((()=>[y(V,{class:"sms-manager"},{default:a((()=>[y(V,{class:"sms-manager--header mb"},{default:a((()=>[l("群发短信")])),_:1}),y(L,{"label-width":100,modelValue:u.smsDataModel,ref:"smsForm"},{default:a((()=>["user"!==o.toType||c.isSelectedReceiver?"user"===o.toType&&c.isSelectedReceiver?(s(),t($,{key:1,label:"目标对象"},{default:a((()=>[y(V,null,{default:a((()=>[l("当前已选择"+n(o.receiver.length)+"人",1)])),_:1})])),_:1})):"userTags"===o.toType?(s(),t($,{key:2,label:"目标对象"},{default:a((()=>[y(V,null,{default:a((()=>[l("当前已选择"+n(o.receiver.length)+"个标签",1)])),_:1}),y(V,{class:"sms-data-tip"},{default:a((()=>[l("如标签关联的用户没有绑定手机号，将不会发送短信。")])),_:1})])),_:1})):d("",!0):(s(),t($,{key:0,label:"目标对象",name:"smsPreset",rules:[{required:!0,errorMessage:"请选择目标对象"}],required:""},{default:a((()=>[y(U,{class:"type m",placeholder:"预设条件",size:"mini",clear:!1,localdata:u.smsPresetList,modelValue:u.smsDataModel.smsPreset,"onUpdate:modelValue":i[0]||(i[0]=e=>u.smsDataModel.smsPreset=e)},null,8,["localdata","modelValue"]),y(V,{class:"sms-data-tip"},{default:a((()=>[l("如需给指定用户发送，请在列表选择要发送的用户。")])),_:1})])),_:1})),c.isSelectedReceiver&&c.hasCondition?(s(),t($,{key:3,label:"跨分页选择"},{default:a((()=>[y(I,{onChange:c.smsFilteredChange},{default:a((()=>[y(F,{style:{transform:"scale(.9)"},checked:u.smsDataModel.filtered},null,8,["checked"])])),_:1},8,["onChange"]),y(V,{class:"sms-data-tip"},{default:a((()=>[l("对用户进行了筛选后，可能存在分页无法全部选中时，请勾选跨分页选中")])),_:1})])),_:1})):d("",!0),y($,{label:"任务名称",name:"name",required:"",rules:[{required:!0,errorMessage:"请输入任务名称"}]},{default:a((()=>[y(j,{modelValue:u.smsDataModel.name,"onUpdate:modelValue":i[1]||(i[1]=e=>u.smsDataModel.name=e),placeholder:"请输入任务名称，例如 “7日内未登录用户召回”"},null,8,["modelValue"])])),_:1}),y($,{required:"",label:"短信模板",name:"templateId",rules:[{required:!0,errorMessage:"请选择短信模板"}]},{default:a((()=>[u.smsTemplateLoading?(s(),_(C,{key:1},[l(" 模板加载中... ")],64)):(s(),_(C,{key:0},[u.smsTemplate.length?(s(),t(V,{key:0},{default:a((()=>[y(U,{class:"type m",placeholder:"请选择短信模板",size:"mini",clear:!1,localdata:u.smsTemplate,modelValue:u.smsDataModel.templateId,"onUpdate:modelValue":i[2]||(i[2]=e=>u.smsDataModel.templateId=e),onChange:c.onSmsTemplateSelected},null,8,["localdata","modelValue","onChange"]),y(V,{class:"sms-data-tip"},{default:a((()=>[l(" 导入短信模版参考"),v("a",{class:"a-link",href:"https://uniapp.dcloud.net.cn/uniCloud/admin.html#群发短信",target:"_blank"},"教程"),l("；若有新的短信模版，可 "),y(R,{onClick:c.chooseFile,class:"a-link"},{default:a((()=>[l("点此导入 ")])),_:1},8,["onClick"])])),_:1})])),_:1})):(s(),t(V,{key:1},{default:a((()=>[y(E,{onClick:c.chooseFile,type:"primary",style:{width:"120px"},size:"mini"},{default:a((()=>[l("上传短信模板 ")])),_:1},8,["onClick"]),y(V,{class:"sms-data-tip"},{default:a((()=>[l("当前未导入短信模板，请从dev.dcloud.net.cn的短信-"),v("a",{href:"https://dev.dcloud.net.cn/pages/sms/template",target:"_blank"},"模板配置"),l("中导出短信模版，并在此导入。教程"),v("a",{href:"https://uniapp.dcloud.net.cn/uniCloud/admin.html#batch-sms",target:"_blank"},"详见")])),_:1})])),_:1}))],64))])),_:1}),u.smsTemplateContent?(s(),t($,{key:4,label:"短信内容"},{default:a((()=>[y(V,{class:"form-item-flex-center"},{default:a((()=>[l(n(u.smsTemplateContent),1)])),_:1})])),_:1})):d("",!0),u.smsDataModel.templateData.length?(s(),t($,{key:5,label:"模板变量配置","error-message":u.smsTemplateDataErrorMessage},{default:a((()=>[(s(!0),_(C,null,k(u.smsDataModel.templateData,((e,l)=>(s(),t(V,{class:"sms-data-item",key:e.field},{default:a((()=>[y(j,{class:"field m",modelValue:e.field,"onUpdate:modelValue":s=>e.field=s,placeholder:"字段",clearable:!1,disabled:!0,style:{width:"120px",flex:"none"}},null,8,["modelValue","onUpdate:modelValue"]),y(j,{class:"value m",modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,placeholder:"例 {uni-id-users.username}",clearable:!1},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)))),128)),y(V,{class:"sms-data-tip"},{default:a((()=>[l(" 短信变量支持固定值和数据表查询两种方式；固定值如：各位同事，数据表查询如：{uni-id-users.username}；请注意，若使用数据表查询方式，目前仅支持查询 uni-id-users 表；并注意确保数据库中查询字段值不为空，否则短信将发送失败。 ")])),_:1})])),_:1},8,["error-message"])):d("",!0)])),_:1},8,["modelValue"]),y(V,{class:"uni-group"},{default:a((()=>[y(E,{onClick:i[3]||(i[3]=e=>c.sendSms(!0)),class:"uni-button"},{default:a((()=>[l("预览")])),_:1}),y(E,{onClick:i[4]||(i[4]=e=>c.sendSms()),class:"uni-button",type:"primary"},{default:a((()=>[l("提交")])),_:1})])),_:1})])),_:1}),y(q,{type:"closeempty",size:"24",class:"close",onClick:c.close},null,8,["onClick"])])),_:1},8,["onChange"]),y(z,{ref:"previewPopup",type:"center","is-mask-click":!1},{default:a((()=>[y(V,{class:"sms-manager preview"},{default:a((()=>[y(V,{class:"sms-manager--header mb"},{default:a((()=>[y(V,null,{default:a((()=>[l("短信预览")])),_:1}),y(V,{class:"sub-title"},{default:a((()=>[l("仅预览第一条短信内容")])),_:1}),y(V,{class:"sub-title"},{default:a((()=>[l("预计送达 "),y(R,{style:{color:"red"}},{default:a((()=>[l(n(u.smsSendUserCount),1)])),_:1}),l(" 位用户")])),_:1})])),_:1}),y(V,{class:"content"},{default:a((()=>[(s(!0),_(C,null,k(u.smsPreviewContent,((e,i)=>(s(),t(V,{key:i},{default:a((()=>[l(n(e),1)])),_:2},1024)))),128)),y(V,{class:"length"},{default:a((()=>[l("短信字数： "),y(R,{class:"num"},{default:a((()=>[l(n(u.smsPreviewContent.length?u.smsPreviewContent[0].length:0),1)])),_:1}),l(" 字 ")])),_:1})])),_:1}),y(V,{class:"tip"},{default:a((()=>[y(V,null,{default:a((()=>[l("说明：")])),_:1}),y(V,null,{default:a((()=>[l("若从数据表中查询，字段内容长度会影响总字数，短信字数＝短信签名字数+短信内容字数。")])),_:1}),y(V,null,{default:a((()=>[l("短信长度不超过70个字，按照一条短信计费；超过70个字，按照67字/条拆分成多条计费。")])),_:1})])),_:1}),y(V,{class:"uni-group"},{default:a((()=>[y(E,{onClick:i[5]||(i[5]=s=>e.$refs.previewPopup.close()),class:"uni-button"},{default:a((()=>[l("关闭")])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})}],["__scopeId","data-v-36ed2c31"]]);export{V as _,$ as a};