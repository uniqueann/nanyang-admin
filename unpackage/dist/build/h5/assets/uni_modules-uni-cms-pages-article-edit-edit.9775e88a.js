import{_ as t,E as e,T as a,K as s,U as i,D as l,S as o,m as n,p as u,o as r,c,w as d,i as m,a as f,d as p,b as h,t as _,f as b,g,u as y,I as x,a6 as k,H as D,y as C}from"./index.1c5e976d.js";import{_ as w}from"./uni-forms-item.0adb67f4.js";import{_ as v}from"./uni-file-picker.d1cf5463.js";import{_ as j}from"./uni-data-picker.d3a4411d.js";import{_ as V}from"./uni-forms.1f46fdd1.js";import{E as P}from"./editor.139f40eb.js";import{v as T}from"./uni-cms-articles.881ab579.js";import"./uni-load-more.f55f2cfa.js";import"./uni-easyinput.2a636516.js";import"./uni-tooltip.2cb79701.js";import"./uni-dateformat.9c185026.js";import"./uni-link.0a0a8e69.js";function E(t){let e=t.match(/\[[^\[\]\(\)]*?]\([^\[\]\(\)]*\)/g),a=[];if(!e)return a.push({type:"text",value:t}),a;for(let s=0;s<e.length;s++){const i=e[s],[l,o,n]=i.match(/\[(.*)]\((.*)\)/),u=t.indexOf(i);0===s&&u>0&&a.push({type:"text",value:t.substring(0,u)}),a.push({type:"link",value:o,href:n});const r=e[s+1];if(!r)continue;const c=t.indexOf(r),d=u+i.length;a.push({type:"text",value:t.substring(d,c)})}return a}function R(t){var e,a;let s=[];for(const i of t.ops)if("string"!=typeof i.insert)if(i.insert.image){"unlockContent"===(null!=(a=null==(e=null==i?void 0:i.attributes)?void 0:e["data-custom"])?a:"").split("&").reduce(((t,e)=>{const[a,s]=e.split("=");return t[a]=s,t}),{}).type?s.push({insert:{unlockContent:!0}}):s.push(i)}else s.push(i);else{const t=E(i.insert);i.attributes&&i.attributes.backgroundColor&&(i.attributes.background=i.attributes.backgroundColor);for(const e of t)switch(e.type){default:case"text":s.push({attributes:i.attributes||{},insert:e.value});break;case"link":s.push({attributes:{...i.attributes||{},link:e.href},insert:e.value})}}return{ops:s}}const U=e.database();U.command;const I="uni-cms-articles";function O(t){let e={};for(let a in T)t.includes(a)&&(e[a]=T[a]);return e}const S=t({components:{EditorComponent:P},data(){let t={user_id:"",category_id:"",title:"",content:null,excerpt:"",article_status:0,is_sticky:null,is_essence:null,comment_status:null,thumbnail:"",publish_date:null};return{formDataId:"",formData:t,formOptions:{comment_status_localdata:[{value:0,text:"关闭"},{value:1,text:"开放"}]},rules:{...O(Object.keys(t))},formats:{},wordCount:null,thumbnailPreview:{}}},onReady(){this.$refs.form.setRules(this.rules)},onLoad(t){if(t.id){const e=t.id;this.formDataId=e,this.getDetail(e)}},methods:{getDetail(t){a({mask:!0}),U.collection(I).doc(t).field("user_id,category_id,title,content,excerpt,article_status,is_sticky,is_essence,comment_status,thumbnail,publish_date").get().then((t=>{const e=t.result.data[0];e&&(this.formData=e,this.formData.thumbnail&&(this.thumbnailPreview={extname:"jpg",url:this.formData.thumbnail}),this.setContents())})).catch((t=>{s({content:t.message||"请求服务失败",showCancel:!1})})).finally((()=>{i()}))},onEditorReady(t){t&&(this.editorCtx=t,this.setContents())},setContents(){if(this.editorCtx&&this.formData.content){const t=this.formData.content;this.editorCtx.setContents({delta:t})}},submit(t){if(!this.formData.title)return i(),l({icon:"none",title:"文章标题必填"});this.$refs.form.validate().then((e=>{this.editorCtx.getContents({success:a=>{this.submitForm({...e,article_status:t,title:this.formData.title,content:R(a.delta),publish_date:this.formData.publish_date?this.formData.publish_date:Date.now()})}})})).catch((t=>{console.error(t)}))},submitForm(t){return a({mask:!0}),U.collection(I).doc(this.formDataId).update(t).then((()=>{l({icon:"none",title:0===t.article_status?"保存成功":0===this.formData.article_status?"发布成功":"更新成功"});try{this.getOpenerEventChannel().emit("refreshData")}catch(e){}setTimeout((()=>{1===t.article_status&&o()}),500)})).catch((t=>{s({content:t.message||"请求服务失败",showCancel:!1})})).finally((()=>{i()}))},uploadSuccess(t){this.formData.thumbnail=t.tempFilePaths[0],this.thumbnailPreview={extname:"jpg",url:t.tempFilePaths[0]}},onTextChange(t){this.wordCount=t.detail},navigateBack(){n().length>1?o(-1):u({url:"/uni_modules/uni-cms/pages/article/list/list"})}}},[["render",function(t,e,a,s,i,l){const o=b(g("uni-icons"),C),n=y,u=m,P=x,T=k("editor-component"),E=b(g("uni-forms-item"),w),R=b(g("uni-file-picker"),v),U=b(g("uni-data-picker"),j),I=D,O=b(g("uni-forms"),V);return r(),c(u,{class:"uni-container"},{default:d((()=>[f(u,{class:"header"},{default:d((()=>[f(u,{class:"back"},{default:d((()=>[f(u,{onClick:l.navigateBack,style:{"margin-left":"15px",display:"flex","align-items":"center"}},{default:d((()=>[f(o,{type:"back",size:"24"}),f(n,null,{default:d((()=>[p("返回")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1}),f(O,{ref:"form","label-width":90,model:i.formData,validateTrigger:"bind","err-show-type":"toast"},{default:d((()=>[f(u,{class:"edit-box"},{default:d((()=>[f(u,{class:"title"},{default:d((()=>[f(P,{class:"uni-input",modelValue:i.formData.title,"onUpdate:modelValue":e[0]||(e[0]=t=>i.formData.title=t),"auto-height":"",placeholder:"文章标题"},null,8,["modelValue"])])),_:1}),f(T,{onTextchange:l.onTextChange,onReady:l.onEditorReady},null,8,["onTextchange","onReady"]),f(u,{class:"settings"},{default:d((()=>[f(E,{name:"excerpt",label:"文章摘要"},{default:d((()=>[f(P,{class:"excerpt",placeholder:"文章摘要","auto-height":"",modelValue:i.formData.excerpt,"onUpdate:modelValue":e[1]||(e[1]=t=>i.formData.excerpt=t)},null,8,["modelValue"])])),_:1}),f(E,{name:"thumbnail",label:"封面",required:""},{default:d((()=>[f(R,{modelValue:i.thumbnailPreview,"onUpdate:modelValue":e[2]||(e[2]=t=>i.thumbnailPreview=t),"file-mediatype":"image",mode:"grid","file-extname":"png,jpg",limit:1,"return-type":"object","image-styles":{width:"150px",height:"150px"},onSuccess:l.uploadSuccess},null,8,["modelValue","onSuccess"]),f(u,{style:{color:"#999","font-size":"13px","margin-top":"10px"}},{default:d((()=>[f(n,null,{default:d((()=>[p("为了保证最佳效果展示；请上传16:9的封面图片")])),_:1})])),_:1})])),_:1}),f(E,{name:"user_id",label:"作者",required:""},{default:d((()=>[f(U,{modelValue:i.formData.user_id,"onUpdate:modelValue":e[3]||(e[3]=t=>i.formData.user_id=t),style:{width:"200px"},collection:"uni-id-users",where:"role=='uni-cms-author'",field:"nickname as text, _id as value"},null,8,["modelValue"])])),_:1}),f(E,{name:"category_id",label:"分类"},{default:d((()=>[f(U,{modelValue:i.formData.category_id,"onUpdate:modelValue":e[4]||(e[4]=t=>i.formData.category_id=t),style:{width:"200px"},collection:"uni-cms-categories",field:"name as text, _id as value"},null,8,["modelValue"])])),_:1})])),_:1}),f(u,{class:"uni-button-group m",style:{"padding-bottom":"50px"}},{default:d((()=>[0===i.formData.article_status?(r(),c(I,{key:0,class:"uni-button",style:{width:"100px","margin-right":"10px"},onClick:e[5]||(e[5]=t=>l.submit(0))},{default:d((()=>[p("保存")])),_:1})):h("",!0),f(I,{type:"primary",class:"uni-button",style:{width:"100px"},onClick:e[6]||(e[6]=t=>l.submit(1))},{default:d((()=>[p("更新")])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]),f(u,{class:"footer"},{default:d((()=>[f(u,{class:"wrap"},{default:d((()=>[f(u,{class:"left"},{default:d((()=>[null!==i.wordCount?(r(),c(n,{key:0,class:"word-count"},{default:d((()=>[p("共 "+_(i.wordCount)+" 字",1)])),_:1})):h("",!0)])),_:1}),f(u,{class:"right"},{default:d((()=>[f(u,{class:"uni-button-group"},{default:d((()=>[0===i.formData.article_status?(r(),c(I,{key:0,class:"uni-button",style:{width:"100px","margin-right":"10px"},onClick:e[7]||(e[7]=t=>l.submit(0))},{default:d((()=>[p("保存")])),_:1})):h("",!0),f(I,{type:"primary",class:"uni-button",style:{width:"100px"},onClick:e[8]||(e[8]=t=>l.submit(1))},{default:d((()=>[p(_(0===i.formData.article_status?"发布":"更新"),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-1b681d64"]]);export{S as default};