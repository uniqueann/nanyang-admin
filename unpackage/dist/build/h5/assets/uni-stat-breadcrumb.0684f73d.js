import{_ as a,ac as t,x as r,n as e,o as s,c as u,w as o,a as n,X as c,a0 as d,e as i,d as l,t as p,i as m,p as b,z as f,f as _,g as h,F as v,r as g}from"./index-52dd6894.js";const y=a({data:()=>({currentPage:""}),options:{virtualHost:!0},props:{to:{type:String,default:""},replace:{type:Boolean,default:!1}},inject:{uniBreadcrumb:{from:"uniBreadcrumb",default:null}},created(){const a=t(),r=a[a.length-1];r&&(this.currentPage=`/${r.route}`)},computed:{separator(){return this.uniBreadcrumb.separator},separatorClass(){return this.uniBreadcrumb.separatorClass}},methods:{navTo(){const{to:a}=this;a&&this.currentPage!==a&&(this.replace?r({url:a}):e({url:a}))}}},[["render",function(a,t,r,e,f,_){const h=m,v=b;return s(),u(h,{class:"uni-breadcrumb-item"},{default:o((()=>[n(h,{class:c({"uni-breadcrumb-item--slot":!0,"uni-breadcrumb-item--slot-link":r.to&&f.currentPage!==r.to}),onClick:_.navTo},{default:o((()=>[d(a.$slots,"default",{},void 0,!0)])),_:3},8,["class","onClick"]),_.separatorClass?(s(),i("i",{key:0,class:c(["uni-breadcrumb-item--separator",_.separatorClass])},null,2)):(s(),u(v,{key:1,class:"uni-breadcrumb-item--separator"},{default:o((()=>[l(p(_.separator),1)])),_:1}))])),_:3})}],["__scopeId","data-v-cdf21a5f"]]);const C=a({options:{virtualHost:!0},props:{separator:{type:String,default:"/"},separatorClass:{type:String,default:""}},provide(){return{uniBreadcrumb:this}}},[["render",function(a,t,r,e,n,c){const i=m;return s(),u(i,{class:"uni-breadcrumb"},{default:o((()=>[d(a.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-cb9222f6"]]);const k=a({name:"uni-stat-breadcrumb",data:()=>({}),computed:{...f("app",["routes"])}},[["render",function(a,t,r,e,c,d){const b=_(h("uni-breadcrumb-item"),y),f=_(h("uni-breadcrumb"),C),k=m;return s(),u(k,{class:"uni-breadcrumb-x"},{default:o((()=>[n(f,{separator:"/"},{default:o((()=>[(s(!0),i(v,null,g(a.routes,((a,t)=>(s(),u(b,{key:t,to:a.to&&a.to.path||""},{default:o((()=>[l(p(a.name),1)])),_:2},1032,["to"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-463d2f38"]]);export{k as _};
