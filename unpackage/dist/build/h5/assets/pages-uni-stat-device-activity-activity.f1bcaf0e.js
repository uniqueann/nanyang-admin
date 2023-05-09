import{_ as e,E as t,o as a,c as i,w as n,i as s,a as o,d as r,q as l,b as c,f as u,g as d,aC as h}from"./index.96d04c0c.js";import{_ as p}from"./uni-stat-breadcrumb.532397ab.js";import{_ as m}from"./uni-data-select.77e53882.js";import{_ as g}from"./uni-stat-tabs.66b03f23.js";import{_}from"./qiun-data-charts.36b855f8.js";import{_ as f}from"./uni-stat-table.ecfa63b6.js";import{_ as b}from"./uni-pagination.1c4c12cb.js";import{e as y,s as D,d as C,g as v,a as q,b as w,h as T,m as k}from"./util.9a87b1b0.js";import"./uni-tooltip.2bdb2fa0.js";const x=[{title:"日期",field:"start_time",tooltip:"",formatter:"-"},{title:"日活",field:"active_device_count",tooltip:"选中日期当天的访问用户数"},{title:"周活",field:"week_active_device_count",tooltip:"选中日期所在自然周（包括选中日期在内）的访问用户数"},{title:"日活/周活",field:"active_device_count/week_active_device_count",computed:"active_device_count/week_active_device_count",tooltip:"选中日期的访问用户数占周访问用户数的百分比",formatter:"%"},{title:"月活",field:"month_active_device_count",tooltip:"选中日期所在自然月（包括选中日期在内）的访问用户数"},{title:"日活/月活",field:"active_device_count/month_active_device_count",computed:"active_device_count/month_active_device_count",tooltip:"选中日期的访问用户数占月访问用户数的百分比",formatter:"%"}];const M=e({data:()=>({tableName:"uni-stat-result",fieldsMap:x,query:{dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:0,currentChartTab:"day",tableData:[],chartData:{},channelData:[],tabName:"日活",errorMessage:""}),computed:{chartTabs(){const e=[{_id:"day",name:"日活"},{_id:"week",name:"周活"},{_id:"month",name:"月活"}];return y(this.query.start_time,7)&&e.forEach(((e,t)=>{"month"===e._id?e.disabled=!0:e.disabled=!1})),e},channelQuery(){const e=this.query.platform_id;return D({platform_id:e})},versionQuery(){const{appid:e,uni_platform:t}=this.query;return D({appid:e,uni_platform:t})}},created(){this.debounceGet=C((()=>{this.getAllData(this.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler(e){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker(){this.currentDateTab=-1},changeAppid(e){this.getChannelData(e,!1)},changePlatform(e,t,a,i){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange(e,t){this.currentDateTab=t;let a,i;a=v(e),i=e?v(0)-1:v(0)+864e5-1,this.query.start_time=[a,i]},changePageCurrent(e){this.options.pageCurrent=e.current,this.getTabelData(this.query)},changePageSize(e){this.options.pageSize=e,this.options.pageCurrent=1,this.getTabelData(this.query)},changeChartTab(e,t,a){this.currentChartTab=e,this.tabName=a,this.getChartData(this.query,e,a)},getAllData(e){e.appid?(this.errorMessage="",this.getChartData(e,this.currentChartTab,this.tabName),this.getTabelData(e)):this.errorMessage="请先选择应用"},getChartData(e,a,i="日活",n="active_device_count"){this.chartData={};const s={categories:[],series:[{name:i,data:[]}]};e=D(e,!1,["uni_platform"]);const o=t.database();"day"===a?o.collection(this.tableName).where(e).field(`${q(x,n)}, start_time`).groupBy("start_time").groupField(w(x,n)).orderBy("start_time","asc").get({getCount:!0}).then((e=>{const{count:t,data:a}=e.result;this.chartData=[];for(const i of a){const e=T(i.start_time,"day"),t=i[n];s.series[0].data.push(t),s.categories.push(e)}this.chartData=s})).catch((e=>{console.error(e)})):this.getRangeCountData(e,a).then((e=>{const t=a;"week"===a&&(a="isoWeek");const{count:i,data:o}=e.result;this.chartData=[];for(const r of o){const e=+new Date(r.year,0)+(6048e5*Number(r[a])-1),i=T(e,t),o=r[a+"_"+n];o&&(s.series[0].data.push(o),s.categories.push(i))}this.chartData=s}))},getTabelData(e,a="active_device_count"){const{pageCurrent:i}=this.options;let n=D(e);this.loading=!0;t.database().collection(this.tableName).where(n).field(`${q(x,a)}, start_time`).groupBy("start_time").groupField(w(x,a)).orderBy("start_time","desc").skip((i-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((t=>{const{count:a,data:i}=t.result;let n=i,s=a,o=[],r=[],l=JSON.parse(JSON.stringify(e));l.dimension="week",this.getRangeCountData(D(l),"week").then((t=>{const{count:a,data:i}=t.result;o=i;let l=JSON.parse(JSON.stringify(e));l.dimension="month",this.getRangeCountData(D(l),"month").then((e=>{const{count:t,data:a}=e.result;r=a;const i=this.mapWithWeekAndMonth(n,o,r);for(const n of i)k(x,n,n);this.tableData=[],this.options.total=s,this.tableData=i})).finally((()=>{this.loading=!1}))}))})).catch((e=>{console.error(e)}))},getRangeCountData(e,a,i="active_device_count"){"week"===a&&(a="isoWeek"),this.options;return t.database().collection(this.tableName).where(e).field(`${i}, start_time, ${a}(add(new Date(0),start_time), "Asia/Shanghai") as ${a},year(add(new Date(0),start_time), "Asia/Shanghai") as year`).groupBy(`year, ${a}`).groupField(`sum(${i}) as ${a}_${i}`).orderBy(`year asc, ${a} asc`).get({getCount:!0})},mapWithWeekAndMonth(e,t,a,i="active_device_count"){for(const n of e){const e=new Date(n.start_time),s=e.getUTCFullYear(),o=e.getMonth()+1,r=this.getWeekNumber(e);for(const a of t)a.isoWeek===r&&a.year===s&&(n[`week_${i}`]=a[`isoWeek_${i}`]);for(const t of a)t.month===o&&t.year===s&&(n[`month_${i}`]=t[`month_${i}`])}return e},getWeekNumber(e){(e=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))).setUTCDate(e.getUTCDate()+4-(e.getUTCDay()||7));var t=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e-t)/864e5+1)/7)},getChannelData(e,a){this.query.channel_id="";const i=t.database(),n={};(e=e||this.query.appid)&&(n.appid=e),(a=a||this.query.platform_id)&&(n.platform_id=a);let s=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),o=i.collection("uni-stat-app-channels").where(n).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(o,s).orderBy("platform_id","asc").get().then((e=>{let t=e.result.data,a=[];if(t.length>0){let e;for(let i in t)e=t[i].channel_name?t[i].channel_name:"默认",t[i].platform_id.length>0&&(e=t[i].platform_id[0].name+"-"+e),a.push({value:t[i]._id,text:e})}this.channelData=a})).catch((e=>{console.error(e)})).finally((()=>{}))}}},[["render",function(e,t,y,D,C,v){const q=u(d("uni-stat-breadcrumb"),p),w=s,T=u(d("uni-data-select"),m),k=u(d("uni-stat-tabs"),g),x=u(d("uni-datetime-picker"),h),M=u(d("qiun-data-charts"),_),S=u(d("uni-stat-table"),f),V=u(d("uni-pagination"),b);return a(),i(w,{class:"fix-top-window"},{default:n((()=>[o(w,{class:"uni-header"},{default:n((()=>[o(q,{class:"uni-stat-breadcrumb-on-phone"}),o(w,{class:"uni-group"},{default:n((()=>[o(w,{class:"uni-sub-title hide-on-phone"},{default:n((()=>[r("用户活跃度分析")])),_:1})])),_:1})])),_:1}),o(w,{class:"uni-container"},{default:n((()=>[o(w,{class:"uni-stat--x flex p-1015"},{default:n((()=>[o(T,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",onChange:v.changeAppid,modelValue:C.query.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>C.query.appid=e),clear:!1},null,8,["onChange","modelValue"]),o(T,{collection:"opendb-app-versions",where:v.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:C.query.version_id,"onUpdate:modelValue":t[1]||(t[1]=e=>C.query.version_id=e)},null,8,["where","modelValue"])])),_:1}),o(w,{class:"uni-stat--x flex"},{default:n((()=>[o(k,{label:"日期选择",current:C.currentDateTab,mode:"date",yesterday:!1,onChange:v.changeTimeRange},null,8,["current","onChange"]),o(x,{type:"daterange",end:(new Date).getTime(),modelValue:C.query.start_time,"onUpdate:modelValue":t[2]||(t[2]=e=>C.query.start_time=e),returnType:"timestamp",clearIcon:!1,class:l(["uni-stat-datetime-picker",{"uni-stat__actived":C.currentDateTab<0&&!!C.query.start_time.length}]),onChange:v.useDatetimePicker},null,8,["end","modelValue","class","onChange"])])),_:1}),o(w,{class:"uni-stat--x"},{default:n((()=>[o(k,{label:"平台选择",type:"boldLine",mode:"platform",modelValue:C.query.platform_id,"onUpdate:modelValue":t[3]||(t[3]=e=>C.query.platform_id=e),onChange:v.changePlatform},null,8,["modelValue","onChange"]),C.query.platform_id&&-1===C.query.platform_id.indexOf("==")?(a(),i(T,{key:0,ref:"version-select",collection:"uni-stat-app-channels",where:v.channelQuery,class:"p-channel",field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择",modelValue:C.query.channel_id,"onUpdate:modelValue":t[4]||(t[4]=e=>C.query.channel_id=e)},null,8,["where","modelValue"])):c("",!0)])),_:1}),o(w,{class:"uni-stat--x p-m"},{default:n((()=>[o(w,{class:"label-text mb-l"},{default:n((()=>[r(" 趋势图 ")])),_:1}),o(k,{type:"box",tabs:v.chartTabs,class:"mb-l",onChange:v.changeChartTab},null,8,["tabs","onChange"]),o(w,{class:"uni-charts-box"},{default:n((()=>[o(M,{type:"area",chartData:C.chartData,echartsH5:"",echartsApp:"",errorMessage:C.errorMessage},null,8,["chartData","errorMessage"])])),_:1})])),_:1}),o(w,{class:"uni-stat--x p-m"},{default:n((()=>[o(S,{data:C.tableData,filedsMap:C.fieldsMap,loading:C.loading,tooltip:""},null,8,["data","filedsMap","loading"]),o(w,{class:"uni-pagination-box"},{default:n((()=>[o(V,{"show-icon":"","show-page-size":"","page-size":C.options.pageSize,current:C.options.pageCurrent,total:C.options.total,onChange:v.changePageCurrent,onPageSizeChange:v.changePageSize},null,8,["page-size","current","total","onChange","onPageSizeChange"])])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{M as default};
