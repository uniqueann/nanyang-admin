import{_ as s,E as o,Y as a,B as e,p as r,K as d,o as t,c as l,w as n,i as u,a as i,d as m,G as w,u as f,f as c,g as p,H as P}from"./index.96d04c0c.js";import{_}from"./uni-match-media.3f5060e7.js";import{_ as h}from"./uni-easyinput.7901bb4b.js";import{_ as b}from"./uni-forms-item.bfe7bb69.js";import{_ as g}from"./uni-forms.3e282eac.js";import{m as y}from"./login-page.mixin.0a663c38.js";import{p as x}from"./password.f6abd227.js";const D=o.importObject("uni-id-co",{customUI:!0});const V=s({mixins:[y],data:()=>({focusOldPassword:!1,focusNewPassword:!1,focusNewPassword2:!1,formData:{oldPassword:"",newPassword:"",newPassword2:""},rules:{oldPassword:{rules:[{required:!0,errorMessage:"请输入新密码"},{pattern:/^.{6,20}$/,errorMessage:"密码为6 - 20位"}]},...x.getPwdRules("newPassword","newPassword2")},logo:"/static/logo.png"}),onReady(){this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=s=>{var o=s||window.event;o&&13==o.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((s=>{let{oldPassword:o,newPassword:t}=this.formData;D.updatePwd({oldPassword:o,newPassword:t}).then((s=>{a("uni_id_token"),e("uni_id_token_expired",0),r({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})})).catch((s=>{d({content:s.message,showCancel:!1})}))})).catch((s=>{let o=s[0].key;o=o.replace(o[0],o[0].toUpperCase()),this["focus"+o]=!0}))}}},[["render",function(s,o,a,e,r,d){const y=w,x=u,D=f,V=c(p("uni-match-media"),_),j=c(p("uni-easyinput"),h),k=c(p("uni-forms-item"),b),B=P,v=c(p("uni-forms"),g);return t(),l(x,{class:"uni-content"},{default:n((()=>[i(V,{"min-width":690},{default:n((()=>[i(x,{class:"login-logo"},{default:n((()=>[i(y,{src:r.logo},null,8,["src"])])),_:1}),i(D,{class:"title title-box"},{default:n((()=>[m("修改密码")])),_:1})])),_:1}),i(v,{ref:"form",value:r.formData,"err-show-type":"toast"},{default:n((()=>[i(k,{name:"oldPassword"},{default:n((()=>[i(j,{focus:r.focusOldPassword,onBlur:o[0]||(o[0]=s=>r.focusOldPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.oldPassword,"onUpdate:modelValue":o[1]||(o[1]=s=>r.formData.oldPassword=s),placeholder:"请输入旧密码"},null,8,["focus","modelValue"])])),_:1}),i(k,{name:"newPassword"},{default:n((()=>[i(j,{focus:r.focusNewPassword,onBlur:o[2]||(o[2]=s=>r.focusNewPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.newPassword,"onUpdate:modelValue":o[3]||(o[3]=s=>r.formData.newPassword=s),placeholder:"请输入新密码"},null,8,["focus","modelValue"])])),_:1}),i(k,{name:"newPassword2"},{default:n((()=>[i(j,{focus:r.focusNewPassword2,onBlur:o[4]||(o[4]=s=>r.focusNewPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.newPassword2,"onUpdate:modelValue":o[5]||(o[5]=s=>r.formData.newPassword2=s),placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),i(B,{class:"uni-btn send-btn-box",type:"primary",onClick:d.submit},{default:n((()=>[m("提交")])),_:1},8,["onClick"])])),_:1},8,["value"])])),_:1})}],["__scopeId","data-v-310f3ac4"]]);export{V as default};
