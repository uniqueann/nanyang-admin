import{_ as o,E as e,D as s,o as t,c as a,w as n,i,a as c,d as p,G as u,u as l,f as d,g as r,H as m}from"./index.96d04c0c.js";import{_ as h}from"./uni-id-pages-sms-form.dbd8a0ea.js";import{_ as f}from"./uni-forms.3e282eac.js";import{_ as g}from"./uni-popup-captcha.4f0f8478.js";import{m as b}from"./login-page.mixin.0a663c38.js";import"./uni-captcha.cff8d81d.js";import"./uni-easyinput.7901bb4b.js";const _=o({mixins:[b],data:()=>({code:"",phone:"",captcha:"",logo:"/static/logo.png"}),computed:{tipText(){return"验证码已通过短信发送至"+this.phone}},onLoad({phoneNumber:o}){this.phone=o},onShow(){document.onkeydown=o=>{var e=o||window.event;e&&13==e.keyCode&&this.submit()}},methods:{submit(){const o=e.importObject("uni-id-co",{errorOptions:{type:"toast"}});if(6!=this.code.length)return this.$refs.smsCode.focusSmsCodeInput=!0,s({title:"验证码不能为空",icon:"none",duration:3e3});o.loginBySms({mobile:this.phone,code:this.code,captcha:this.captcha}).then((o=>{this.loginSuccess(o)})).catch((o=>{"uni-id-captcha-required"==o.errCode?this.$refs.popup.open():console.log(o.errMsg)})).finally((o=>{this.captcha=""}))}}},[["render",function(o,e,s,b,_,y){const C=u,j=i,V=l,w=d(r("uni-id-pages-sms-form"),h),x=m,k=d(r("uni-forms"),f),S=d(r("uni-popup-captcha"),g);return t(),a(j,{class:"uni-content"},{default:n((()=>[c(j,{class:"login-logo"},{default:n((()=>[c(C,{src:_.logo},null,8,["src"])])),_:1}),c(V,{class:"title"},{default:n((()=>[p("请输入验证码")])),_:1}),c(V,{class:"tip"},{default:n((()=>[p("先输入图形验证码，再获取短信验证码")])),_:1}),c(k,null,{default:n((()=>[c(w,{focusCaptchaInput:"",modelValue:_.code,"onUpdate:modelValue":e[0]||(e[0]=o=>_.code=o),type:"login-by-sms",ref:"smsCode",phone:_.phone},null,8,["modelValue","phone"]),c(x,{class:"uni-btn send-btn",type:"primary",onClick:y.submit},{default:n((()=>[p("登录")])),_:1},8,["onClick"])])),_:1}),c(S,{onConfirm:y.submit,modelValue:_.captcha,"onUpdate:modelValue":e[1]||(e[1]=o=>_.captcha=o),scene:"login-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-93225fe2"]]);export{_ as default};
