import{_ as e,x as t,f as o,y as i,g as n,o as a,c as l,w as s,b as r,a as c,q as u,z as h,d,t as m,u as p,i as y}from"./index.96d04c0c.js";const b=e({name:"UniNoticeBar",emits:["click","getmore","close"],props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#FFF9EA"},speed:{type:Number,default:100},color:{type:String,default:"#FF9A43"},fontSize:{type:Number,default:14},moreColor:{type:String,default:"#FF9A43"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:()=>({textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,elIdBox:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}),computed:{isShowGetMore(){return!0===this.showGetMore||"true"===this.showGetMore},isShowClose(){return!(!0!==this.showClose&&"true"!==this.showClose||!1!==this.showGetMore&&"false"!==this.showGetMore)}},mounted(){this.$nextTick((()=>{this.initSize()}))},methods:{initSize(){if(this.scrollable){let e=[],o=new Promise(((e,o)=>{t().in(this).select(`#${this.elId}`).boundingClientRect().exec((t=>{this.textWidth=t[0].width,e()}))})),i=new Promise(((e,o)=>{t().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((t=>{this.boxWidth=t[0].width,e()}))}));e.push(o),e.push(i),Promise.all(e).then((()=>{this.animationDuration=this.textWidth/this.speed+"s",this.animationDelay=`-${this.boxWidth/this.speed}s`,setTimeout((()=>{this.animationPlayState="running"}),1e3)}))}},loopAnimation(){},clickMore(){this.$emit("getmore")},close(){this.show=!1,this.$emit("close")},onClick(){this.$emit("click")}}},[["render",function(e,t,b,w,f,S){const _=o(n("uni-icons"),i),g=p,x=y;return f.show?(a(),l(x,{key:0,class:"uni-noticebar",style:h({backgroundColor:b.backgroundColor}),onClick:S.onClick},{default:s((()=>[!0===b.showIcon||"true"===b.showIcon?(a(),l(_,{key:0,class:"uni-noticebar-icon",type:"sound",color:b.color,size:1.5*b.fontSize},null,8,["color","size"])):r("",!0),c(x,{ref:"textBox",class:u(["uni-noticebar__content-wrapper",{"uni-noticebar__content-wrapper--scrollable":b.scrollable,"uni-noticebar__content-wrapper--single":!b.scrollable&&(b.single||b.moreText)}]),style:h({height:b.scrollable?1.5*b.fontSize+"px":"auto"})},{default:s((()=>[c(x,{id:f.elIdBox,class:u(["uni-noticebar__content",{"uni-noticebar__content--scrollable":b.scrollable,"uni-noticebar__content--single":!b.scrollable&&(b.single||b.moreText)}])},{default:s((()=>[c(g,{id:f.elId,ref:"animationEle",class:u(["uni-noticebar__content-text",{"uni-noticebar__content-text--scrollable":b.scrollable,"uni-noticebar__content-text--single":!b.scrollable&&(b.single||b.showGetMore)}]),style:h({color:b.color,fontSize:b.fontSize+"px",lineHeight:1.5*b.fontSize+"px",width:f.wrapWidth+"px",animationDuration:f.animationDuration,"-webkit-animationDuration":f.animationDuration,animationPlayState:f.webviewHide?"paused":f.animationPlayState,"-webkit-animationPlayState":f.webviewHide?"paused":f.animationPlayState,animationDelay:f.animationDelay,"-webkit-animationDelay":f.animationDelay})},{default:s((()=>[d(m(b.text),1)])),_:1},8,["id","class","style"])])),_:1},8,["id","class"])])),_:1},8,["class","style"]),S.isShowGetMore?(a(),l(x,{key:1,class:"uni-noticebar__more uni-cursor-point",onClick:S.clickMore},{default:s((()=>[b.moreText.length>0?(a(),l(g,{key:0,style:h({color:b.moreColor,fontSize:b.fontSize+"px"})},{default:s((()=>[d(m(b.moreText),1)])),_:1},8,["style"])):(a(),l(_,{key:1,type:"right",color:b.moreColor,size:1.1*b.fontSize},null,8,["color","size"]))])),_:1},8,["onClick"])):r("",!0),S.isShowClose?(a(),l(x,{key:2,class:"uni-noticebar-close uni-cursor-point"},{default:s((()=>[c(_,{type:"closeempty",color:b.color,size:1.1*b.fontSize,onClick:S.close},null,8,["color","size","onClick"])])),_:1})):r("",!0)])),_:1},8,["style","onClick"])):r("",!0)}],["__scopeId","data-v-69ae3424"]]);export{b as _};
