import{_ as a,E as t,o as e,c as i,w as o,i as s,a as n,f as r,g as p}from"./index.96d04c0c.js";import{_ as l}from"./uni-stat-table.ecfa63b6.js";import{_ as g}from"./uni-pagination.1c4c12cb.js";import{s as u,p as c}from"./util.9a87b1b0.js";import{p as h}from"./fieldsMap.f0afc8f5.js";import"./uni-tooltip.2bdb2fa0.js";const d=a({data:()=>({popupFieldsMap:h,options:{pageSize:20,pageCurrent:1,total:0},query:{error_hash:"",create_time:[]},loading:!1,tableData:[]}),onLoad(a){let{error_hash:t,create_time:e}=a;t&&(e=Number(e),this.query.error_hash=t,this.query.create_time=[e,e+864e5],this.getTableData(u(this.query)))},methods:{changePageCurrent(a){this.options.pageCurrent=a.current,this.getTableData(u(this.query))},changePageSize(a){this.options.pageSize=a,this.options.pageCurrent=1,this.getTableData(u(this.query))},getTableData(a){const{pageCurrent:e}=this.options;this.loading=!0;t.database().collection("uni-stat-error-logs").where(a).orderBy("create_time","desc").skip((e-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((a=>{const{count:t,data:e}=a.result;this.options.total=t;for(const i of e)i.create_time=c(i.create_time,"dateTime");this.tableData=e})).finally((()=>{this.loading=!1}))}}},[["render",function(a,t,u,c,h,d){const f=r(p("uni-stat-table"),l),m=r(p("uni-pagination"),g),b=s;return e(),i(b,{class:"fix-top-window"},{default:o((()=>[n(b,{class:"uni-container"},{default:o((()=>[n(f,{data:h.tableData,filedsMap:h.popupFieldsMap,loading:h.loading},null,8,["data","filedsMap","loading"]),n(b,{class:"uni-pagination-box"},{default:o((()=>[n(m,{"show-icon":"","show-page-size":"","page-size":h.options.pageSize,current:h.options.pageCurrent,total:h.options.total,onChange:d.changePageCurrent,onPageSizeChange:d.changePageSize},null,8,["page-size","current","total","onChange","onPageSizeChange"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-d581af0c"]]);export{d as default};