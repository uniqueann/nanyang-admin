import{_ as e,E as t,U as a,D as l,T as i,p as s,S as o,K as n,m as u,o as r,c as d,w as m,i as c,a as f,d as p,t as h,b as _,f as g,g as b,u as x,I as y,a6 as w,H as k,y as C}from"./index.1c5e976d.js";import{_ as j}from"./uni-forms-item.0adb67f4.js";import{_ as D}from"./uni-file-picker.d1cf5463.js";import{_ as v}from"./uni-data-picker.d3a4411d.js";import{_ as V}from"./uni-forms.1f46fdd1.js";import{E as T}from"./editor.139f40eb.js";import{v as E}from"./uni-cms-articles.881ab579.js";import"./uni-load-more.f55f2cfa.js";import"./uni-easyinput.2a636516.js";import"./uni-tooltip.2cb79701.js";import"./uni-dateformat.9c185026.js";import"./uni-link.0a0a8e69.js";const P=t.database();P.command;function R(e){let t={};for(let a in E)e.includes(a)&&(t[a]=E[a]);return t}const S=e({components:{EditorComponent:T},data(){let e={user_id:"",category_id:"",title:"",content:{},excerpt:"",article_status:0,is_sticky:null,is_essence:null,comment_status:null,thumbnail:""};return{formData:e,formOptions:{comment_status_localdata:[{value:0,text:"关闭"},{value:1,text:"开放"}]},rules:{...R(Object.keys(e))},formats:{},wordCount:null,thumbnailPreview:{}}},onReady(){this.$refs.form.setRules(this.rules)},methods:{uploadSuccess(e){this.formData.thumbnail=e.tempFilePaths[0],this.thumbnailPreview={extname:"jpg",url:e.tempFilePaths[0]}},onTextChange(e){this.wordCount=e.detail},onEditorReady(e){e&&(this.editorCtx=e)},submit(e){if(!this.formData.title)return a(),l({icon:"none",title:"文章标题必填"});this.$refs.form.validate().then((t=>{this.editorCtx.getContents({success:a=>{this.submitForm({...t,article_status:e,title:this.formData.title.trim(),content:a.delta,publish_date:Date.now()})}})})).catch((e=>{console.error(e)}))},submitForm(e){return i({mask:!0}),P.collection("uni-cms-articles").add(e).then((t=>{l({icon:"none",title:0===e.article_status?"保存成功":"发布成功"});try{this.getOpenerEventChannel().emit("refreshData")}catch(a){}setTimeout((()=>{0===e.article_status?s({url:"/uni_modules/uni-cms/pages/article/edit/edit?id="+t.result.id}):o()}),500)})).catch((e=>{n({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{a()}))},navigateBack(){u().length>1?o(-1):s({url:"/uni_modules/uni-cms/pages/article/list/list"})}}},[["render",function(e,t,a,l,i,s){const o=g(b("uni-icons"),C),n=x,u=c,T=y,E=w("editor-component"),P=g(b("uni-forms-item"),j),R=g(b("uni-file-picker"),D),S=g(b("uni-data-picker"),v),U=k,F=g(b("uni-forms"),V);return r(),d(u,{class:"uni-container"},{default:m((()=>[f(u,{class:"header"},{default:m((()=>[f(u,{class:"back"},{default:m((()=>[f(u,{onClick:s.navigateBack,style:{"margin-left":"15px",display:"flex","align-items":"center"}},{default:m((()=>[f(o,{type:"back",size:"24"}),f(n,null,{default:m((()=>[p("返回")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1}),f(F,{ref:"form","label-width":90,model:i.formData,validateTrigger:"bind","err-show-type":"toast"},{default:m((()=>[f(u,{class:"edit-box"},{default:m((()=>[f(u,{class:"title"},{default:m((()=>[f(T,{class:"uni-input",modelValue:i.formData.title,"onUpdate:modelValue":t[0]||(t[0]=e=>i.formData.title=e),"auto-height":"",placeholder:"文章标题"},null,8,["modelValue"])])),_:1}),f(E,{onTextchange:s.onTextChange,onReady:s.onEditorReady,imageSecCheck:!0},null,8,["onTextchange","onReady"]),f(u,{class:"settings"},{default:m((()=>[f(P,{name:"excerpt",label:"文章摘要"},{default:m((()=>[f(T,{class:"excerpt",placeholder:"文章摘要","auto-height":"",modelValue:i.formData.excerpt,"onUpdate:modelValue":t[1]||(t[1]=e=>i.formData.excerpt=e)},null,8,["modelValue"])])),_:1}),f(P,{name:"thumbnail",label:"封面",required:""},{default:m((()=>[f(R,{modelValue:i.thumbnailPreview,"onUpdate:modelValue":t[2]||(t[2]=e=>i.thumbnailPreview=e),"file-mediatype":"image",mode:"grid","file-extname":"png,jpg",limit:1,"return-type":"object","image-styles":{width:"150px",height:"150px"},onSuccess:s.uploadSuccess},null,8,["modelValue","onSuccess"]),f(u,{style:{color:"#999","font-size":"13px","margin-top":"10px"}},{default:m((()=>[f(n,null,{default:m((()=>[p("为了保证最佳效果展示；请上传16:9的封面图片")])),_:1})])),_:1})])),_:1}),f(P,{name:"user_id",label:"作者",required:""},{default:m((()=>[f(S,{modelValue:i.formData.user_id,"onUpdate:modelValue":t[3]||(t[3]=e=>i.formData.user_id=e),style:{width:"200px"},collection:"uni-id-users",where:"role=='uni-cms-author'",field:"nickname as text, _id as value"},null,8,["modelValue"])])),_:1}),f(P,{name:"category_id",label:"分类"},{default:m((()=>[f(S,{modelValue:i.formData.category_id,"onUpdate:modelValue":t[4]||(t[4]=e=>i.formData.category_id=e),style:{width:"200px"},collection:"uni-cms-categories",field:"name as text, _id as value"},null,8,["modelValue"])])),_:1})])),_:1}),f(u,{class:"uni-button-group m",style:{"padding-bottom":"50px"}},{default:m((()=>[f(U,{class:"uni-button",style:{width:"100px","margin-right":"10px"},onClick:t[5]||(t[5]=e=>s.submit(0))},{default:m((()=>[p("存为草稿")])),_:1}),f(U,{type:"primary",class:"uni-button",style:{width:"100px"},onClick:t[6]||(t[6]=e=>s.submit(1))},{default:m((()=>[p("发布")])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]),f(u,{class:"footer"},{default:m((()=>[f(u,{class:"wrap"},{default:m((()=>[f(u,{class:"left"},{default:m((()=>[null!==i.wordCount?(r(),d(n,{key:0,class:"word-count"},{default:m((()=>[p("共 "+h(i.wordCount)+" 字",1)])),_:1})):_("",!0)])),_:1}),f(u,{class:"right"},{default:m((()=>[f(u,{class:"uni-button-group"},{default:m((()=>[f(U,{class:"uni-button",style:{width:"100px","margin-right":"10px"},onClick:t[7]||(t[7]=e=>s.submit(0))},{default:m((()=>[p("存为草稿")])),_:1}),f(U,{type:"primary",class:"uni-button",style:{width:"100px"},onClick:t[8]||(t[8]=e=>s.submit(1))},{default:m((()=>[p("发布")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-f6c88fed"]]);export{S as default};