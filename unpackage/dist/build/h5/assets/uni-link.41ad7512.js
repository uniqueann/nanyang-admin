import{_ as e,aA as t,o as i,e as s,s as n,d as o,t as l,q as r,z as a,c as d,w as h,u}from"./index.96d04c0c.js";const f=e({name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created(){this._isH5=null},methods:{isMail(){return this.href.startsWith("mailto:")},isTel(){return this.href.startsWith("tel:")},openURL(){window.open(this.href)},makePhoneCall(e){t({phoneNumber:e})}}},[["render",function(e,t,f,p,c,w){const S=u;return w.isShowA?(i(),s("a",{key:0,class:r(["uni-link",{"uni-link--withline":!0===f.showUnderLine||"true"===f.showUnderLine}]),href:f.href,style:a({color:f.color,fontSize:f.fontSize+"px"}),download:f.download},[n(e.$slots,"default",{},(()=>[o(l(f.text),1)]),!0)],14,["href","download"])):(i(),d(S,{key:1,class:r(["uni-link",{"uni-link--withline":!0===f.showUnderLine||"true"===f.showUnderLine}]),style:a({color:f.color,fontSize:f.fontSize+"px"}),onClick:w.openURL},{default:h((()=>[n(e.$slots,"default",{},(()=>[o(l(f.text),1)]),!0)])),_:3},8,["class","style","onClick"]))}],["__scopeId","data-v-44511933"]]);export{f as _};
