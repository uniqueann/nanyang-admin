import{_ as e,E as a,T as l,D as o,S as t,K as n,U as s,o as i,c as m,w as r,i as d,a as u,a6 as c,d as p,t as f,f as b,g as _,ae as h,H as D,an as V,a3 as g,O as x}from"./index.96d04c0c.js";import{_ as k}from"./uni-easyinput.7901bb4b.js";import{_ as y}from"./uni-forms-item.bfe7bb69.js";import{_ as U}from"./uni-link.41ad7512.js";import{_ as w}from"./uni-data-checkbox.d7d038d3.js";import{_ as j}from"./uni-forms.3e282eac.js";import{v as I}from"./opendb-admin-menus.28269d01.js";import v from"./pages-demo-icons-icons.50559349.js";import"./uni-load-more.b58ece14.js";const C=a.database();C.command;const P="opendb-admin-menus";function L(e){let a={};for(let l in I)e.includes(l)&&(a[l]=I[l]);return a}const $=e({components:{Icons:v},data:()=>({formData:{menu_id:"",name:"",icon:"",url:"",sort:"",parent_id:"",permission:[],enable:null},rules:{...L(["menu_id","name","icon","url","sort","parent_id","permission","enable"])}}),onLoad(e){const a=e.id;this.formDataId=a,this.getDetail(a)},methods:{submitForm(e){this.$refs.form.submit()},submit(e){const{value:a,errors:i}=e.detail;i||(l({title:"修改中...",mask:!0}),C.collection(P).doc(this.formDataId).update(a).then((e=>{o({title:"修改成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>t()),500)})).catch((e=>{n({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{s()})))},getDetail(e){l({mask:!0}),C.collection(P).where({_id:e}).get().then((e=>{const a=e.result.data[0];a&&(this.formData=a)})).catch((e=>{n({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{s()}))},showIconPopup(){this.$refs.iconPopup.open()}}},[["render",function(e,a,l,o,t,n){const s=b(_("uni-easyinput"),k),I=b(_("uni-forms-item"),y),v=b(_("uni-link"),U),C=b(_("uni-data-checkbox"),w),P=d,L=h,$=D,R=V,S=g("Icons"),T=b(_("uni-popup"),x),q=b(_("uni-forms"),j);return i(),m(P,{class:"uni-container"},{default:r((()=>[u(q,{labelWidth:"80",ref:"form",modelValue:t.formData,"onUpdate:modelValue":a[9]||(a[9]=e=>t.formData=e),rules:t.rules,validateTrigger:"bind",onSubmit:n.submit},{default:r((()=>[u(I,{name:"menu_id",label:"标识",required:""},{default:r((()=>[u(s,{modelValue:t.formData.menu_id,"onUpdate:modelValue":a[0]||(a[0]=e=>t.formData.menu_id=e),clearable:!1,placeholder:"请输入菜单项的ID，不可重复"},null,8,["modelValue"])])),_:1}),u(I,{name:"name",label:"显示名称",required:""},{default:r((()=>[u(s,{modelValue:t.formData.name,"onUpdate:modelValue":a[1]||(a[1]=e=>t.formData.name=e),clearable:!1,placeholder:"请输入菜单名称"},null,8,["modelValue"])])),_:1}),u(I,{name:"icon",label:"图标 class",style:{"margin-bottom":"40px"}},{default:r((()=>[u(s,{modelValue:t.formData.icon,"onUpdate:modelValue":a[3]||(a[3]=e=>t.formData.icon=e),clearable:!1,placeholder:"请输入菜单图标css样式类名"},{default:r((()=>[c("span",{slot:"right",style:{color:"#007aff",cursor:"pointer","padding-right":"10px"},onClick:a[2]||(a[2]=(...e)=>n.showIconPopup&&n.showIconPopup(...e))},"内置图标")])),_:1},8,["modelValue"]),u(v,{"font-size":"12",href:"https://uniapp.dcloud.net.cn/uniCloud/admin?id=icon-%e5%9b%be%e6%a0%87",text:"如何使用自定义图标？",class:"uni-form-item-tips"})])),_:1}),u(I,{name:"url",label:"页面URL"},{default:r((()=>[u(s,{modelValue:t.formData.url,"onUpdate:modelValue":a[4]||(a[4]=e=>t.formData.url=e),clearable:!1,placeholder:"URL必须是/开头，URL为空代表是目录而不是叶子节点"},null,8,["modelValue"])])),_:1}),u(I,{name:"sort",label:"序号"},{default:r((()=>[u(s,{modelValue:t.formData.sort,"onUpdate:modelValue":a[5]||(a[5]=e=>t.formData.sort=e),clearable:!1,placeholder:"请输入菜单序号（越大越靠后）"},null,8,["modelValue"])])),_:1}),u(I,{name:"parent_id",label:"父菜单标识"},{default:r((()=>[u(s,{modelValue:t.formData.parent_id,"onUpdate:modelValue":a[6]||(a[6]=e=>t.formData.parent_id=e),clearable:!1,placeholder:"请输入父级菜单标识, 一级菜单不需要填写"},null,8,["modelValue"])])),_:1}),u(I,{name:"permission",label:"权限列表",class:"flex-center-x"},{default:r((()=>[u(C,{multiple:!0,modelValue:t.formData.permission,"onUpdate:modelValue":a[7]||(a[7]=e=>t.formData.permission=e),collection:"uni-id-permissions","page-size":500,field:"permission_name as text, permission_id as value"},null,8,["modelValue"]),u(P,{class:"uni-form-item-tips"},{default:r((()=>[p(" 当用户拥有以上被选中的权限时，可以访问此菜单。建议仅对子菜单配置权限，父菜单会自动包含。如不选择权限，意味着仅超级管理员可访问本菜单 ")])),_:1})])),_:1}),u(I,{name:"enable",label:"是否启用"},{default:r((()=>[u(L,{onChange:a[8]||(a[8]=a=>e.binddata("enable",a.detail.value)),checked:t.formData.enable},null,8,["checked"])])),_:1}),u(P,{class:"uni-button-group"},{default:r((()=>[u($,{type:"primary",class:"uni-button",onClick:n.submitForm,style:{width:"100px"}},{default:r((()=>[p(f(e.$t("common.button.submit")),1)])),_:1},8,["onClick"]),u(R,{"open-type":"navigateBack",style:{"margin-left":"15px"}},{default:r((()=>[u($,{class:"uni-button",style:{width:"100px"}},{default:r((()=>[p(f(e.$t("common.button.back")),1)])),_:1})])),_:1})])),_:1}),u(T,{class:"icon-modal-box",ref:"iconPopup",type:"center"},{default:r((()=>[u(P,{class:"icon-modal icon-modal-pc"},{default:r((()=>[u(S,{tag:!1,"fix-window":!1})])),_:1})])),_:1},512)])),_:1},8,["modelValue","rules","onSubmit"])])),_:1})}],["__scopeId","data-v-44dcf2da"]]);export{$ as default};
