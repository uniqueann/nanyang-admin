import{_ as e,D as t,f as s,g as a,O as o,o as l,c,w as n,a as u,d as i,t as f,u as p,i as d}from"./index.96d04c0c.js";import{_ as r}from"./uni-captcha.cff8d81d.js";const m=e({data:()=>({focus:!1}),props:{modelValue:String,value:String,scene:{type:String,default:()=>""},title:{type:String,default:()=>""}},computed:{val:{get(){return this.value||this.modelValue},set(e){this.$emit("update:modelValue",e)}}},methods:{open(){this.focus=!0,this.val="",this.$refs.popup.open()},close(){this.focus=!1,this.$refs.popup.close()},confirm(){if(!this.val)return t({title:"请填写验证码",icon:"none"});this.close(),this.$emit("confirm")}}},[["render",function(e,t,m,h,_,v){const g=p,V=s(a("uni-captcha"),r),b=d,k=s(a("uni-popup"),o);return l(),c(k,{ref:"popup",type:"center"},{default:n((()=>[u(b,{class:"popup-captcha"},{default:n((()=>[u(b,{class:"content"},{default:n((()=>[u(g,{class:"title"},{default:n((()=>[i(f(m.title),1)])),_:1}),u(V,{focus:_.focus,scene:m.scene,modelValue:v.val,"onUpdate:modelValue":t[0]||(t[0]=e=>v.val=e)},null,8,["focus","scene","modelValue"])])),_:1}),u(b,{class:"button-box"},{default:n((()=>[u(b,{onClick:v.close,class:"btn"},{default:n((()=>[i("取消")])),_:1},8,["onClick"]),u(b,{onClick:v.confirm,class:"btn confirm"},{default:n((()=>[i("确认")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},512)}],["__scopeId","data-v-f0f3582f"]]);export{m as _};
