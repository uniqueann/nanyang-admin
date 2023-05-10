import{_ as s,E as a,ao as e,N as o,D as t,K as r,W as n,o as d,c as i,w as l,i as u,a as c,d as m,b as p,G as f,u as w,f as h,g,H as P}from"./index.1c5e976d.js";import{_}from"./uni-match-media.b1a4c014.js";import{_ as b}from"./uni-easyinput.2a636516.js";import{_ as y}from"./uni-forms-item.0adb67f4.js";import{_ as D}from"./uni-id-pages-sms-form.880966a9.js";import{_ as k}from"./uni-forms.1f46fdd1.js";import{_ as C}from"./uni-popup-captcha.2e17db60.js";import{p as I}from"./password.9cabe053.js";import"./uni-captcha.6541f6df.js";const V=a.importObject("uni-id-co",{customUI:!0});const U=s({name:"set-pwd.vue",data:()=>({uniIdRedirectUrl:"",loginType:"",logo:"/static/logo.png",focusNewPassword:!1,focusNewPassword2:!1,allowSkip:!1,formData:{code:"",captcha:"",newPassword:"",newPassword2:""},rules:I.getPwdRules("newPassword","newPassword2")}),computed:{userInfo:()=>e.userInfo},onReady(){this.$refs.form.setRules(this.rules)},onLoad(s){var a;this.uniIdRedirectUrl=s.uniIdRedirectUrl,this.loginType=s.loginType,o.setPasswordAfterLogin&&(null==(a=o.setPasswordAfterLogin)?void 0:a.allowSkip)&&(this.allowSkip=!0)},methods:{submit(){if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsCode.focusSmsCodeInput=!0,t({title:"验证码格式不正确",icon:"none"});this.$refs.form.validate().then((s=>{V.setPwd({password:this.formData.newPassword,code:this.formData.code,captcha:this.formData.captcha}).then((s=>{r({content:"密码设置成功",showCancel:!1,success:()=>{n.loginBack({uniIdRedirectUrl:this.uniIdRedirectUrl,loginType:this.loginType})}})})).catch((s=>{r({content:s.message,showCancel:!1})}))})).catch((s=>{"uni-id-captcha-required"==s.errCode?this.$refs.popup.open():console.log(s.errMsg)})).finally((s=>{this.formData.captcha=""}))},skip(){n.loginBack(this.uniIdRedirectUrl)}}},[["render",function(s,a,e,o,t,r){const n=f,I=u,V=w,U=h(g("uni-match-media"),_),j=h(g("uni-easyinput"),b),R=h(g("uni-forms-item"),y),v=h(g("uni-id-pages-sms-form"),D),N=P,x=h(g("uni-forms"),k),B=h(g("uni-popup-captcha"),C);return d(),i(I,{class:"uni-content"},{default:l((()=>[c(U,{"min-width":690},{default:l((()=>[c(I,{class:"login-logo"},{default:l((()=>[c(n,{src:t.logo},null,8,["src"])])),_:1}),c(V,{class:"title title-box"},{default:l((()=>[m("设置密码")])),_:1})])),_:1}),c(x,{class:"set-password-form",ref:"form",value:t.formData,"err-show-type":"toast"},{default:l((()=>[c(V,{class:"tip"},{default:l((()=>[m("输入密码")])),_:1}),c(R,{name:"newPassword"},{default:l((()=>[c(j,{focus:t.focusNewPassword,onBlur:a[0]||(a[0]=s=>t.focusNewPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:t.formData.newPassword,"onUpdate:modelValue":a[1]||(a[1]=s=>t.formData.newPassword=s),placeholder:"请输入密码"},null,8,["focus","modelValue"])])),_:1}),c(V,{class:"tip"},{default:l((()=>[m("再次输入密码")])),_:1}),c(R,{name:"newPassword2"},{default:l((()=>[c(j,{focus:t.focusNewPassword2,onBlur:a[2]||(a[2]=s=>t.focusNewPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:t.formData.newPassword2,"onUpdate:modelValue":a[3]||(a[3]=s=>t.formData.newPassword2=s),placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),c(v,{modelValue:t.formData.code,"onUpdate:modelValue":a[4]||(a[4]=s=>t.formData.code=s),type:"set-pwd-by-sms",ref:"smsCode",phone:r.userInfo.mobile},null,8,["modelValue","phone"]),c(I,{class:"link-box"},{default:l((()=>[c(N,{class:"uni-btn send-btn",type:"primary",onClick:r.submit},{default:l((()=>[m("确认")])),_:1},8,["onClick"]),t.allowSkip?(d(),i(N,{key:0,class:"uni-btn send-btn",type:"default",onClick:r.skip},{default:l((()=>[m("跳过")])),_:1},8,["onClick"])):p("",!0)])),_:1})])),_:1},8,["value"]),c(B,{onConfirm:r.submit,modelValue:t.formData.captcha,"onUpdate:modelValue":a[5]||(a[5]=s=>t.formData.captcha=s),scene:"set-pwd-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-48ed0c26"]]);export{U as default};
