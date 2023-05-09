import{_ as e,E as a,n as s,S as o,o as r,c as t,w as l,i,a as m,d as u,G as n,u as d,f as c,g as f,H as p}from"./index.96d04c0c.js";import{_ as g}from"./uni-match-media.3f5060e7.js";import{_ as h}from"./uni-easyinput.7901bb4b.js";import{_ as w}from"./uni-forms-item.bfe7bb69.js";import{_ as b}from"./uni-id-pages-email-form.af53a830.js";import{_}from"./uni-id-pages-agreements.75638bc2.js";import{_ as k}from"./uni-forms.3e282eac.js";import"./validator.a63cac0f.js";import{m as V}from"./login-page.mixin.0a663c38.js";import{p as D}from"./password.f6abd227.js";import"./uni-captcha.cff8d81d.js";import"./uni-popup-dialog.e660f77e.js";const y=a.importObject("uni-id-co");const x=e({mixins:[V],data:()=>({formData:{email:"",nickname:"",password:"",password2:"",code:""},rules:{email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(e,a,s,o){return(/^1\d{10}$/.test(a)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a))&&o("昵称不能是：手机号或邮箱"),/^\d+$/.test(a)&&o("昵称不能为纯数字"),!0}}],label:"昵称"},...D.getPwdRules(),code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"邮箱验证码不正确"}]}},focusEmail:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}),onReady(){this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=e=>{var a=e||window.event;a&&13==a.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((e=>{if(this.needAgreements&&!this.agree)return this.$refs.agreements.popup((()=>{this.submitForm(e)}));this.submitForm(e)})).catch((e=>{let a=e[0].key;a=a.replace(a[0],a[0].toUpperCase()),this["focus"+a]=!0}))},submitForm(e){y.registerUserByEmail(this.formData).then((e=>{s({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:e=>{}})})).catch((e=>{console.log(e.message)}))},navigateBack(){o()},toLogin(){s({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByUserName(){s({url:"/uni_modules/uni-id-pages/pages/register/register"})}}},[["render",function(e,a,s,o,V,D){const y=n,x=i,j=d,B=c(f("uni-match-media"),g),v=c(f("uni-easyinput"),h),C=c(f("uni-forms-item"),w),U=c(f("uni-id-pages-email-form"),b),P=c(f("uni-id-pages-agreements"),_),$=p,L=c(f("uni-forms"),k);return r(),t(x,{class:"uni-content"},{default:l((()=>[m(B,{"min-width":690},{default:l((()=>[m(x,{class:"login-logo"},{default:l((()=>[m(y,{src:V.logo},null,8,["src"])])),_:1}),m(j,{class:"title title-box"},{default:l((()=>[u("邮箱验证码注册")])),_:1})])),_:1}),m(L,{ref:"form",value:V.formData,rules:V.rules,"validate-trigger":"submit","err-show-type":"toast"},{default:l((()=>[m(C,{name:"email",required:""},{default:l((()=>[m(v,{inputBorder:!1,focus:V.focusEmail,onBlur:a[0]||(a[0]=e=>V.focusEmail=!1),class:"input-box",placeholder:"请输入邮箱",modelValue:V.formData.email,"onUpdate:modelValue":a[1]||(a[1]=e=>V.formData.email=e),trim:"both"},null,8,["focus","modelValue"])])),_:1}),m(C,{name:"nickname"},{default:l((()=>[m(v,{inputBorder:!1,focus:V.focusNickname,onBlur:a[2]||(a[2]=e=>V.focusNickname=!1),class:"input-box",placeholder:"请输入用户昵称",modelValue:V.formData.nickname,"onUpdate:modelValue":a[3]||(a[3]=e=>V.formData.nickname=e),trim:"both"},null,8,["focus","modelValue"])])),_:1}),m(C,{name:"password",modelValue:V.formData.password,"onUpdate:modelValue":a[6]||(a[6]=e=>V.formData.password=e),required:""},{default:l((()=>[m(v,{inputBorder:!1,focus:V.focusPassword,onBlur:a[4]||(a[4]=e=>V.focusPassword=!1),class:"input-box",maxlength:"20",placeholder:"请输入"+("weak"==e.config.passwordStrength?"6":"8")+"-16位密码",type:"password",modelValue:V.formData.password,"onUpdate:modelValue":a[5]||(a[5]=e=>V.formData.password=e),trim:"both"},null,8,["focus","placeholder","modelValue"])])),_:1},8,["modelValue"]),m(C,{name:"password2",modelValue:V.formData.password2,"onUpdate:modelValue":a[9]||(a[9]=e=>V.formData.password2=e),required:""},{default:l((()=>[m(v,{inputBorder:!1,focus:V.focusPassword2,onBlur:a[7]||(a[7]=e=>V.focusPassword2=!1),class:"input-box",placeholder:"再次输入密码",maxlength:"20",type:"password",modelValue:V.formData.password2,"onUpdate:modelValue":a[8]||(a[8]=e=>V.formData.password2=e),trim:"both"},null,8,["focus","modelValue"])])),_:1},8,["modelValue"]),m(C,{name:"code"},{default:l((()=>[m(U,{ref:"shortCode",email:V.formData.email,type:"register",modelValue:V.formData.code,"onUpdate:modelValue":a[10]||(a[10]=e=>V.formData.code=e)},null,8,["email","modelValue"])])),_:1}),m(P,{scope:"register",ref:"agreements"},null,512),m($,{class:"uni-btn",type:"primary",onClick:D.submit},{default:l((()=>[u("注册")])),_:1},8,["onClick"]),m($,{onClick:D.navigateBack,class:"register-back"},{default:l((()=>[u("返回")])),_:1},8,["onClick"]),m(B,{"min-width":690},{default:l((()=>[m(x,{class:"link-box"},{default:l((()=>[m(j,{class:"link",onClick:D.registerByUserName},{default:l((()=>[u("用户名密码注册")])),_:1},8,["onClick"]),m(j,{class:"link",onClick:D.toLogin},{default:l((()=>[u("已有账号？点此登录")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["value","rules"])])),_:1})}],["__scopeId","data-v-6ac98dd5"]]);export{x as default};
