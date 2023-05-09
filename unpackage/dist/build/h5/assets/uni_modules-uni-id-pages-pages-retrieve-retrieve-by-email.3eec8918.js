import{_ as a,E as e,n as o,p as s,o as t,c as r,w as i,i as l,a as d,d as u,G as m,u as n,f as c,g as p,H as f}from"./index.96d04c0c.js";import{_ as h}from"./uni-match-media.3f5060e7.js";import{_ as w}from"./uni-easyinput.7901bb4b.js";import{_ as b}from"./uni-forms-item.bfe7bb69.js";import{_ as g}from"./uni-id-pages-email-form.af53a830.js";import{_}from"./uni-forms.3e282eac.js";import{_ as D}from"./uni-popup-captcha.4f0f8478.js";import{m as k}from"./login-page.mixin.0a663c38.js";import{p as y}from"./password.f6abd227.js";import"./uni-captcha.cff8d81d.js";const C=e.importObject("uni-id-co",{errorOptions:{type:"toast"}});const V=a({mixins:[k],data:()=>({lock:!1,focusEmail:!0,focusPassword:!1,focusPassword2:!1,formData:{email:"",code:"",password:"",password2:"",captcha:""},rules:{email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"请输入6位验证码"}]},...y.getPwdRules()},logo:"/static/logo.png"}),computed:{isEmail(){return/@/.test(this.formData.email)},isPwd(){return/^.{6,20}$/.test(this.formData.password)},isCode(){return/^\d{6}$/.test(this.formData.code)}},onLoad(a){a&&a.emailNumber&&(this.formData.email=a.emailNumber,a.lock&&(this.lock=a.lock,this.focusEmail=!0))},onReady(){this.formData.email&&this.$refs.shortCode.start(),this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=a=>{var e=a||window.event;e&&13==e.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((a=>{let{email:e,password:s,captcha:t,code:r}=this.formData;C.resetPwdByEmail({email:e,code:r,password:s,captcha:t}).then((a=>{o({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:a=>{}})})).catch((a=>{"uni-id-captcha-required"==a.errCode&&this.$refs.popup.open()})).finally((a=>{this.formData.captcha=""}))})).catch((a=>{let e=a[0].key;if("code"==e)return this.$refs.shortCode.focusSmsCodeInput=!0;e=e.replace(e[0],e[0].toUpperCase()),this["focus"+e]=!0}))},retrieveByPhone(){o({url:"/uni_modules/uni-id-pages/pages/retrieve/retrieve"})},backLogin(){s({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})}}},[["render",function(a,e,o,s,k,y){const C=m,V=l,j=n,P=c(p("uni-match-media"),h),v=c(p("uni-easyinput"),w),x=c(p("uni-forms-item"),b),B=c(p("uni-id-pages-email-form"),g),$=f,E=c(p("uni-forms"),_),U=c(p("uni-popup-captcha"),D);return t(),r(V,{class:"uni-content"},{default:i((()=>[d(P,{"min-width":690},{default:i((()=>[d(V,{class:"login-logo"},{default:i((()=>[d(C,{src:k.logo},null,8,["src"])])),_:1}),d(j,{class:"title title-box"},{default:i((()=>[u("通过邮箱验证码找回密码")])),_:1})])),_:1}),d(E,{ref:"form",value:k.formData,"err-show-type":"toast"},{default:i((()=>[d(x,{name:"email"},{default:i((()=>[d(v,{focus:k.focusEmail,onBlur:e[0]||(e[0]=a=>k.focusEmail=!1),class:"input-box",disabled:k.lock,inputBorder:!1,modelValue:k.formData.email,"onUpdate:modelValue":e[1]||(e[1]=a=>k.formData.email=a),placeholder:"请输入邮箱"},null,8,["focus","disabled","modelValue"])])),_:1}),d(x,{name:"code"},{default:i((()=>[d(B,{ref:"shortCode",email:k.formData.email,type:"reset-pwd-by-email",modelValue:k.formData.code,"onUpdate:modelValue":e[2]||(e[2]=a=>k.formData.code=a)},null,8,["email","modelValue"])])),_:1}),d(x,{name:"password"},{default:i((()=>[d(v,{focus:k.focusPassword,onBlur:e[3]||(e[3]=a=>k.focusPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:k.formData.password,"onUpdate:modelValue":e[4]||(e[4]=a=>k.formData.password=a),placeholder:"请输入新密码"},null,8,["focus","modelValue"])])),_:1}),d(x,{name:"password2"},{default:i((()=>[d(v,{focus:k.focusPassword2,onBlur:e[5]||(e[5]=a=>k.focusPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:k.formData.password2,"onUpdate:modelValue":e[6]||(e[6]=a=>k.formData.password2=a),placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),d($,{class:"uni-btn send-btn-box",type:"primary",onClick:y.submit},{default:i((()=>[u("提交")])),_:1},8,["onClick"]),d(P,{"min-width":690},{default:i((()=>[d(V,{class:"link-box"},{default:i((()=>[d(j,{class:"link",onClick:y.retrieveByPhone},{default:i((()=>[u("通过手机验证码找回密码")])),_:1},8,["onClick"]),d(V),d(j,{class:"link",onClick:y.backLogin},{default:i((()=>[u("返回登录")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["value"]),d(U,{onConfirm:y.submit,modelValue:k.formData.captcha,"onUpdate:modelValue":e[7]||(e[7]=a=>k.formData.captcha=a),scene:"reset-pwd-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-b2bc532c"]]);export{V as default};
