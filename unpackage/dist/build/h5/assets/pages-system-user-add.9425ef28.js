import{_ as a,E as e,n as l,T as t,D as o,S as s,K as n,U as m,o as u,c as r,w as d,i,a as c,a6 as f,d as p,t as b,f as h,g,ae as V,H as _,an as D}from"./index.96d04c0c.js";import{_ as k}from"./uni-easyinput.7901bb4b.js";import{_ as x}from"./uni-forms-item.bfe7bb69.js";import{_ as v}from"./uni-data-checkbox.d7d038d3.js";import{_ as y}from"./uni-forms.3e282eac.js";import{v as U}from"./uni-id-users.580260c7.js";import"./uni-load-more.b58ece14.js";const w=e.database();function A(a){let e={};for(let l in U)a.includes(l)&&(e[l]=U[l]);return e}w.command;const C=a({data:()=>({formData:{username:"",nickname:"",password:"",role:[],authorizedApp:[],tags:[],mobile:void 0,email:void 0,status:!0},rules:{...A(["username","password","role","mobile","email"]),status:{rules:[{format:"bool"}]}},roles:[]}),onLoad(){this.loadroles()},methods:{gotoAppList(){l({url:"../app/list"})},gotoTagList(){l({url:"../tag/list"})},gotoTagAdd(){l({url:"../tag/add",events:{refreshCheckboxData:()=>{this.$refs.checkbox.loadData()}}})},submitForm(){this.$refs.form.submit()},submit(a){const{value:e,errors:l}=a.detail;l||(t({title:"提交中...",mask:!0}),"boolean"==typeof e.status&&(e.status=Number(!e.status)),this.$request("addUser",e).then((()=>{o({title:"新增成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>s()),500)})).catch((a=>{n({content:a.message||"请求服务失败",showCancel:!1})})).finally((a=>{m()})))},loadroles(){w.collection("uni-id-roles").limit(500).get().then((a=>{const e=[];this.roles=a.result.data.map((a=>(e.push(a.role_id),{value:a.role_id,text:a.role_name}))),-1===e.indexOf("admin")&&this.roles.unshift({value:"admin",text:"超级管理员"})})).catch((a=>{n({title:"提示",content:a.message,showCancel:!1})}))}}},[["render",function(a,e,l,t,o,s){const n=h(g("uni-easyinput"),k),m=h(g("uni-forms-item"),x),U=h(g("uni-data-checkbox"),v),w=V,A=_,C=D,T=i,j=h(g("uni-forms"),y);return u(),r(T,{class:"uni-container"},{default:d((()=>[c(j,{ref:"form",modelValue:o.formData,"onUpdate:modelValue":e[12]||(e[12]=a=>o.formData=a),rules:o.rules,validateTrigger:"bind",onSubmit:s.submit},{default:d((()=>[c(m,{name:"username",label:"用户名",required:""},{default:d((()=>[c(n,{modelValue:o.formData.username,"onUpdate:modelValue":e[0]||(e[0]=a=>o.formData.username=a),clearable:!1,placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),c(m,{name:"nickname",label:"用户昵称",required:""},{default:d((()=>[c(n,{modelValue:o.formData.nickname,"onUpdate:modelValue":e[1]||(e[1]=a=>o.formData.nickname=a),clearable:!1,placeholder:"请输入用户昵称"},null,8,["modelValue"])])),_:1}),c(m,{name:"password",label:"初始密码",required:""},{default:d((()=>[c(n,{modelValue:o.formData.password,"onUpdate:modelValue":e[2]||(e[2]=a=>o.formData.password=a),clearable:!1,placeholder:"请输入初始密码"},null,8,["modelValue"])])),_:1}),c(m,{name:"role",label:"角色列表",class:"flex-center-x"},{default:d((()=>[c(U,{multiple:"",localdata:o.roles,modelValue:o.formData.role,"onUpdate:modelValue":e[3]||(e[3]=a=>o.formData.role=a)},null,8,["localdata","modelValue"])])),_:1}),c(m,{name:"tags",label:"用户标签",labelWidth:"100",class:"flex-center-x"},{default:d((()=>[c(U,{ref:"checkbox",multiple:!0,modelValue:o.formData.tags,"onUpdate:modelValue":e[4]||(e[4]=a=>o.formData.tags=a),collection:"uni-id-tag",field:"tagid as value, name as text"},null,8,["modelValue"]),f("span",{class:"link-btn",onClick:e[5]||(e[5]=(...a)=>s.gotoTagAdd&&s.gotoTagAdd(...a))},"新增"),f("span",{class:"link-btn",onClick:e[6]||(e[6]=(...a)=>s.gotoTagList&&s.gotoTagList(...a)),style:{"margin-left":"10px"}},"管理")])),_:1}),c(m,{name:"authorizedApp",label:"可登录应用",labelWidth:"100",class:"flex-center-x"},{default:d((()=>[c(U,{multiple:!0,modelValue:o.formData.authorizedApp,"onUpdate:modelValue":e[7]||(e[7]=a=>o.formData.authorizedApp=a),collection:"opendb-app-list",field:"appid as value, name as text"},null,8,["modelValue"]),f("span",{class:"link-btn",onClick:e[8]||(e[8]=(...a)=>s.gotoAppList&&s.gotoAppList(...a))},"管理")])),_:1}),c(m,{name:"mobile",label:"手机号"},{default:d((()=>[c(n,{modelValue:o.formData.mobile,"onUpdate:modelValue":e[9]||(e[9]=a=>o.formData.mobile=a),clearable:!1,placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),c(m,{name:"email",label:"邮箱"},{default:d((()=>[c(n,{modelValue:o.formData.email,"onUpdate:modelValue":e[10]||(e[10]=a=>o.formData.email=a),clearable:!1,placeholder:"请输入邮箱"},null,8,["modelValue"])])),_:1}),c(m,{name:"status",label:"是否启用"},{default:d((()=>[c(w,{onChange:e[11]||(e[11]=e=>a.binddata("status",e.detail.value)),checked:o.formData.status},null,8,["checked"])])),_:1}),c(T,{class:"uni-button-group"},{default:d((()=>[c(A,{style:{width:"100px"},type:"primary",class:"uni-button",onClick:s.submitForm},{default:d((()=>[p(b(a.$t("common.button.submit")),1)])),_:1},8,["onClick"]),c(C,{"open-type":"navigateBack",style:{"margin-left":"15px"}},{default:d((()=>[c(A,{style:{width:"100px"},class:"uni-button"},{default:d((()=>[p(b(a.$t("common.button.back")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","rules","onSubmit"])])),_:1})}],["__scopeId","data-v-089b2c03"]]);export{C as default};
