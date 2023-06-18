import{_ as e,D as t,s as a,y as i,K as n,o as l,c as s,w as o,i as r,a as u,X as d,e as p,r as c,F as h,f as m,g,d as f,t as _,b as y,aH as b,h as C,j as v,H as D,k as q,l as T,a2 as x}from"./index-52dd6894.js";import{_ as O}from"./uni-stat-breadcrumb.0684f73d.js";import{_ as V}from"./uni-link.7568b248.js";import{_ as k}from"./uni-data-select.0a6d800a.js";import{_ as w}from"./uni-stat-tabs.3a120567.js";import{_ as S}from"./uni-stat-panel.275c833c.js";import{_ as P}from"./qiun-data-charts.f94dccb3.js";import{_ as j}from"./uni-pagination.229b82d6.js";import{_ as z}from"./uni-popup-dialog.01792593.js";import{s as M,e as $,d as U,g as A,a as B,b as I,m as N,h as E,c as F}from"./util.456774f8.js";import"./uni-tooltip.36348de7.js";const J=[{title:"渠道值",field:"channel_code",tooltip:"",formatter:""},{title:"渠道名称",field:"channel_name",tooltip:"",formatter:""},{title:"新增设备",field:"new_device_count",tooltip:"首次访问应用的设备数（以设备为判断标准，去重）",value:0},{title:"活跃设备",field:"active_device_count",tooltip:"访问过应用内任意页面的总设备数（去重）",value:0},{title:"访问次数",field:"page_visit_count",tooltip:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问",value:0},{title:"启动次数",field:"app_launch_count",tooltip:"设备从打开应用到主动关闭应用或超时退出计为一次启动",value:0},{title:"次均停留时长",field:"avg_device_session_time",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0},{title:"设备平均停留时长 ",field:"avg_device_time",formatter:":",tooltip:"平均每个设备停留在应用内的总时长，即应用停留总时长/活跃设备",value:0},{title:"跳出率",field:"bounceRate",computed:"bounce_times/app_launch_count",formatter:"%",tooltip:"只浏览一个页面便离开应用的次数占总启动次数的百分比",value:0,contrast:0,fix:2},{title:"总设备数",field:"total_devices",tooltip:"从添加统计到当前选择时间的总设备数（去重）",value:0}];const H=e({data:()=>({fieldsMap:J,query:{dimension:"day",appid:"",uni_platform:"android",platform_id:"",version_id:"",start_time:[]},paginationOptions:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,days:0,tableData:[],panelData:J.filter((e=>e.hasOwnProperty("value"))),chartData:{},chartTab:"new_device_count",queryId:"",updateValue:"",errorMessage:""}),computed:{chartTabs(){const e=[];return J.forEach((t=>{const{field:a,title:i}=t,n=t.hasOwnProperty("value");a&&i&&n&&e.push({_id:a,name:i})})),e},queryStr(){return M(this.query,!0)},dimension(){return $(this.query.start_time,1)?"hour":"day"},versionQuery(){const{appid:e,uni_platform:t}=this.query;return M({appid:e,uni_platform:t,type:"native_app"})}},created(){this.debounceGet=U((()=>{this.getAllData(this.queryStr)}),300)},watch:{query:{deep:!0,handler(e){this.paginationOptions.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker(){this.currentDateTab=-1},changePlatform(e,t,a,i){this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange(e,t){this.currentDateTab=t;let a,i;a=A(e),i=e?A(0)-1:A(0)+864e5-1,this.query.start_time=[a,i]},changePageCurrent(e){this.paginationOptions.pageCurrent=e.current,this.getTableData()},changePageSize(e){this.paginationOptions.pageSize=e,this.paginationOptions.pageCurrent=1,this.getTableData()},changeChartTab(e,t,a){this.getChartData(e,a)},getAllData(e){-1!==e.indexOf("appid")?(this.errorMessage="",this.getPanelData(),this.getChartData(),this.getTableData()):this.errorMessage="请先选择应用"},getChartData(e=this.chartTab){let a=M(this.query,!1,["uni_platform"]);this.paginationOptions;t.database().collection("uni-stat-result").where(a).field(`${B(J,e)}, start_time, channel_id`).groupBy("channel_id,start_time").groupField(I(J,e)).orderBy("start_time","asc").get({getCount:!0}).then((t=>{const{count:a,data:i}=t.result,n={categories:[],series:[{name:"暂无数据",data:[]}]},l=n.categories;if("hour"===this.dimension)for(let e=0;e<24;++e){const t=e<10?"0"+e:e,a=`${t}:00 ~ ${t}:59`;l.push(a)}const s=[];i.forEach((e=>{s.indexOf(e.channel_id)<0&&s.push(e.channel_id)}));let o=[];this.getChannels().then((e=>{o=e.result.data})).finally((()=>{s.forEach(((t,a)=>{const s=o.find((e=>e._id===t)),r=n.series[a]={name:s&&s.channel_name||"未知",data:[]};if("hour"===this.dimension)for(let e=0;e<24;++e)r.data[e]=0;let u=J.filter((t=>t.field===e));u=JSON.parse(JSON.stringify(u)),delete u[0].value,u[0].formatter="";for(const n of i){N(u,n,n);let a=n.start_time;const i=E(a,this.dimension);let s=n[e];const o=l.indexOf(i);t===n.channel_id&&(o<0?(l.push(i),r.data.push(s)):r.data[o]=s)}})),n.series=n.series.sort(((e,t)=>e.name.localeCompare(t.name))),this.chartData=n}))})).catch((e=>{console.error(e)})).finally((()=>{}))},getChannels(){return t.database().collection("uni-stat-app-channels").where(M({appid:this.query.appid,platform_id:this.query.platform_id})).get()},getTableData(){const e=M(this.query,!1,["uni_platform"]),{pageCurrent:a}=this.paginationOptions;this.loading=!0;t.database().collection("uni-stat-result").where(e).field(`${B(J)},appid, channel_id`).groupBy("appid, channel_id").groupField(I(J)).orderBy("new_device_count","desc").skip((a-1)*this.paginationOptions.pageSize).limit(this.paginationOptions.pageSize).get({getCount:!0}).then((e=>{const{count:t,data:a}=e.result;this.getChannels().then((e=>{const t=e.result.data;for(const i of a)t.forEach((e=>{i.channel_id===e._id&&(i.channel_code=e.channel_code,i.channel_name=e.channel_name)}))})).finally((()=>{for(const e of a)N(J,e,e,"total_");this.tableData=[],this.paginationOptions.total=t,this.tableData=a,this.loading=!1}))})).catch((e=>{console.error(e),this.loading=!1}))},createStr(e,t,a="total_"){const i=[];return e.forEach((e=>{if(field.hasOwnProperty("value")){const n=e.field;i.push(`${t}(${n}) as ${a+n}`)}})),i.join()},getPanelData(){let e=JSON.parse(JSON.stringify(this.query));e.dimension="day";let a=M(e,!1,["uni_platform"]);t.database().collection("uni-stat-result").where(a).field(B(J)).groupBy("appid").groupField(I(J)).orderBy("start_time","desc").get().then((t=>{const a=t.result.data[0];a&&(a.total_devices=0),F.call(this,e),this.panelData=[],this.panelData=N(J,a)}))},inputDialogToggle(e,t){this.queryId=e,this.updateValue=t,this.$refs.inputDialog.open()},editName(e){t.database().collection("uni-stat-app-channels").where({channel_code:this.queryId}).update({channel_name:e}).then((e=>{a({title:"修改成功"}),this.getTableData()})).catch((e=>{i({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{n()}))}}},[["render",function(e,t,a,i,n,M){const $=m(g("uni-stat-breadcrumb"),O),U=m(g("uni-link"),V),A=r,B=m(g("uni-data-select"),k),I=m(g("uni-stat-tabs"),w),N=m(g("uni-datetime-picker"),b),E=m(g("uni-stat-panel"),S),F=m(g("qiun-data-charts"),P),J=m(g("uni-th"),C),H=m(g("uni-tr"),v),Q=m(g("uni-icons"),D),R=m(g("uni-td"),q),G=m(g("uni-table"),T),K=m(g("uni-pagination"),j),L=m(g("uni-popup-dialog"),z),X=m(g("uni-popup"),x);return l(),s(A,{class:"fix-top-window"},{default:o((()=>[u(A,{class:"uni-header"},{default:o((()=>[u($,{class:"uni-stat-breadcrumb-on-phone"}),u(A,{class:"uni-group"},{default:o((()=>[u(A,{class:"uni-sub-title hide-on-phone"},{default:o((()=>[u(U,{href:"https://ask.dcloud.net.cn/article/35974",text:"支持Android App多渠道统计。设置App渠道包的方法，请参考 https://ask.dcloud.net.cn/article/35974。"})])),_:1})])),_:1})])),_:1}),u(A,{class:"uni-container"},{default:o((()=>[u(A,{class:"uni-stat--x flex p-1015"},{default:o((()=>[u(B,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",modelValue:n.query.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>n.query.appid=e),clear:!1},null,8,["modelValue"]),u(B,{collection:"opendb-app-versions",storage:!1,where:M.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:n.query.version_id,"onUpdate:modelValue":t[1]||(t[1]=e=>n.query.version_id=e)},null,8,["where","modelValue"]),u(I,{label:"平台选择",type:"boldLine",mode:"platform-channel",all:!1,modelValue:n.query.platform_id,"onUpdate:modelValue":t[2]||(t[2]=e=>n.query.platform_id=e),onChange:M.changePlatform},null,8,["modelValue","onChange"])])),_:1}),u(A,{class:"uni-stat--x flex"},{default:o((()=>[u(I,{label:"日期选择",current:n.currentDateTab,mode:"date",onChange:M.changeTimeRange},null,8,["current","onChange"]),u(N,{type:"daterange",end:(new Date).getTime(),modelValue:n.query.start_time,"onUpdate:modelValue":t[3]||(t[3]=e=>n.query.start_time=e),returnType:"timestamp",clearIcon:!1,class:d(["uni-stat-datetime-picker",{"uni-stat__actived":n.currentDateTab<0&&!!n.query.start_time.length}]),onChange:M.useDatetimePicker},null,8,["end","modelValue","class","onChange"])])),_:1}),u(A,{class:"uni-stat--x",style:{padding:"15px 0"}},{default:o((()=>[u(E,{items:n.panelData,class:"uni-stat-panel"},null,8,["items"]),u(I,{type:"box",modelValue:n.chartTab,"onUpdate:modelValue":t[4]||(t[4]=e=>n.chartTab=e),tabs:M.chartTabs,class:"mb-l",onChange:M.changeChartTab},null,8,["modelValue","tabs","onChange"]),u(A,{class:"uni-charts-box"},{default:o((()=>[u(F,{type:"area",chartData:n.chartData,echartsH5:"",echartsApp:"",tooltipFormat:"tooltipCustom",errorMessage:n.errorMessage},null,8,["chartData","errorMessage"])])),_:1})])),_:1}),u(A,{class:"uni-stat--x p-m"},{default:o((()=>[u(A,{class:"mb-m"},{default:o((()=>[u(U,{color:"",href:"https://ask.dcloud.net.cn/article/35974",text:"如何自定义渠道包?"})])),_:1}),u(G,{loading:n.loading,border:"",stripe:"",emptyText:e.$t("common.empty")},{default:o((()=>[u(H,null,{default:o((()=>[(l(!0),p(h,null,c(n.fieldsMap.slice(0,n.fieldsMap.length-1),((e,t)=>(l(),p(h,{key:t},[e.title?(l(),s(J,{key:t,align:"center"},{default:o((()=>[f(_(e.title),1)])),_:2},1024)):y("",!0)],64)))),128))])),_:1}),(l(!0),p(h,null,c(n.tableData,((e,t)=>(l(),s(H,{key:t},{default:o((()=>[(l(!0),p(h,null,c(n.fieldsMap.slice(0,n.fieldsMap.length-1),((t,a)=>(l(),p(h,{key:a},[t.title&&1===a?(l(),s(R,{key:t.field,class:"uni-stat-edit--x"},{default:o((()=>[f(_(e[t.field]?e[t.field]:"-")+" ",1),u(Q,{type:"compose",color:"#2979ff",size:"25",class:"uni-stat-edit--btn",onClick:t=>M.inputDialogToggle(e.channel_code,e.channel_name)},null,8,["onClick"])])),_:2},1024)):(l(),s(R,{key:t.field,align:"center"},{default:o((()=>[f(_(void 0!==e[t.field]?e[t.field]:"-"),1)])),_:2},1024))],64)))),128))])),_:2},1024)))),128))])),_:1},8,["loading","emptyText"]),u(A,{class:"uni-pagination-box"},{default:o((()=>[u(K,{"show-icon":"","show-page-size":"","page-size":n.paginationOptions.pageSize,current:n.paginationOptions.pageCurrent,total:n.paginationOptions.total,onChange:M.changePageCurrent,onPageSizeChange:M.changePageSize},null,8,["page-size","current","total","onChange","onPageSizeChange"])])),_:1})])),_:1})])),_:1}),u(X,{ref:"inputDialog",type:"dialog",maskClick:!0},{default:o((()=>[u(L,{ref:"inputClose",mode:"input",title:"请编辑名称",modelValue:n.updateValue,"onUpdate:modelValue":t[5]||(t[5]=e=>n.updateValue=e),placeholder:"请输入内容",onConfirm:M.editName},null,8,["modelValue","onConfirm"])])),_:1},512)])),_:1})}],["__scopeId","data-v-4a203e6f"]]);export{H as default};