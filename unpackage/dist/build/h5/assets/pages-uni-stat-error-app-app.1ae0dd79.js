import{_ as e,E as t,A as a,o as i,c as r,w as o,i as l,a as s,d as n,q as d,e as c,r as p,F as u,f as _,g as m,H as f,z as h,C as g,t as y,b as v,aC as b,y as x,h as D,j as k,k as w,l as z}from"./index.96d04c0c.js";import{_ as q}from"./uni-stat-breadcrumb.532397ab.js";import{_ as C}from"./uni-data-select.77e53882.js";import{_ as T}from"./uni-stat-tabs.66b03f23.js";import{_ as A}from"./uni-stat-panel.0d2930ae.js";import{_ as V}from"./qiun-data-charts.36b855f8.js";import{_ as E}from"./download-excel.2e32d901.js";import{_ as j}from"./uni-tooltip.2bdb2fa0.js";import{_ as S}from"./uni-dateformat.f8d51689.js";import{_ as P}from"./uni-pagination.1c4c12cb.js";import{_ as $}from"./unicloud-db.9bbe4b24.js";import{s as F,d as B,g as L,m as M,j as O,h as U}from"./util.9a87b1b0.js";const I=[{title:"报错时间",field:"create_time",tooltip:"",formatter:"",filter:"timestamp"},{title:"错误信息",field:"error_msg",formatter:"",filter:"search"},{title:"原生应用包名",field:"package_name",formatter:"",filter:"search"},{title:"用户端上报的应用版本号",field:"version",formatter:"",tooltip:"manifest.json中的versionName的值",filter:"search"},{title:"平台",field:"platform",formatter:"",tooltip:"用户端上报的平台code",filter:"search"},{title:"渠道",field:"channel",formatter:"",tooltip:"用户端上报的渠道code场景值",filter:"search"},{title:"基础库版本号",field:"sdk_version",formatter:"",tooltip:"",filter:"search"},{title:"设备标识",field:"device_id",formatter:"",tooltip:"客户端携带的设备标识",filter:"search"},{title:"设备网络型号",field:"device_net",formatter:"",tooltip:"设备网络型号wifi/3G/4G/",filter:"search"},{title:"系统版本",field:"device_os",formatter:"",tooltip:"iOS平台为系统版本号，如15.1；Android平台为API等级，如30",filter:"search"},{title:"系统版本名称",field:"device_os_version",formatter:"",tooltip:"iOS平台与os字段一致；Android平台为版本名称，如5.1.1",filter:"search"},{title:"设备供应商",field:"device_vendor",formatter:"",tooltip:"",filter:"search"},{title:"设备型号",field:"device_model",formatter:"",tooltip:"",filter:"search"},{title:"是否root",field:"device_is_root",formatter:"",tooltip:"1表示root；0表示未root",filter:"range"},{title:"系统名称",field:"device_os_name",formatter:"",tooltip:"用于区别Android和鸿蒙，仅Android支持",filter:"search"},{title:"设备电池电量",field:"device_batt_level",formatter:"",tooltip:"取值范围0-100，仅Android支持",filter:"range"},{title:"电池温度",field:"device_batt_temp",formatter:"",tooltip:"仅Android支持",filter:"search"},{title:"系统已使用内存",field:"device_memory_use_size",formatter:"",tooltip:"单位为Byte，仅Android支持",filter:"range"},{title:"系统总内存",field:"device_memory_total_size",formatter:"",tooltip:"单位为Byte，仅Android支持",filter:"range"},{title:"系统磁盘已使用大小",field:"device_disk_use_size",formatter:"",tooltip:"单位为Byte，仅Android支持",filter:"range"},{title:"系统磁盘总大小",field:"device_disk_total_size",formatter:"",tooltip:"单位为Byte，仅Android支持",filter:"range"},{title:"设备支持的CPU架构",field:"device_abis",formatter:"",tooltip:"多个使用,分割，如arm64-v8a,armeabi-v7a,armeabi，仅Android支持",filter:"search"},{title:"运行的app个数",field:"app_count",formatter:"",tooltip:"包括运行的uni小程序数目，独立App时值为1",filter:"range"},{title:"APP使用的内存量",field:"app_use_memory_size",formatter:"",tooltip:"单位为Byte",filter:"range"},{title:"运行应用的个数",field:"app_count",formatter:"",filter:"range"},{title:"打开 Webview 的个数",field:"app_webview_count",formatter:"",filter:"range"},{title:"APP使用时长",field:"app_use_duration",formatter:"",tooltip:"单位为s",filter:"range"},{title:"是否前台运行",field:"app_run_fore",formatter:"",tooltip:"1表示前台运行，0表示后台运行",filter:"search"},{title:"原生应用版本名称",field:"package_version",formatter:"",tooltip:"Android的apk版本名称；iOS的ipa版本名称",filter:"search"},{title:"页面url",field:"page_url",formatter:"",filter:"search"}],Q={};const R=[{title:"崩溃总数",field:"count",value:0,formatter:",",tooltip:"指原生应用在某个时间段内出现崩溃的总数"},{title:"崩溃率",field:"count/app_launch_count",computed:"count/app_launch_count",formatter:"%",value:0,tooltip:"时间范围内的总崩溃数/原生应用启动次数，如果小于0.01%，默认显示为0"}],G=t.database(),N=[],W={ascending:"asc",descending:"desc"};const H=e({data(){return{fieldsMap:I,query:{type:"crash",dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",start_time:[]},loading:!1,popupLoading:!1,currentDateTab:0,tableData:[],popupTableData:[],panelData:JSON.parse(JSON.stringify(R)),chartData:{},chartTab:"errorCount",chartTabs:[{_id:"errorCount",name:"崩溃次数"},{_id:"errorRate",name:"崩溃率"}],collectionList:"uni-stat-app-crash-logs",schemaQuery:"",where:this.tableData,orderby:"create_time desc",orderByFieldName:"",selectedIndexs:[],options:{pageCurrent:1,total:0,pageSizeIndex:0,pageSizeRange:[10,20,50,100],pageSize:20,pageCurrent:1,filterData:{},...Q},errorMessage:"",exportExcel:{filename:"uni-stat-app-crash-logs.xls",type:"xls",fields:{appid:"appid",version:"version",platform:"platform",channel:"channel",sdk_version:"sdk_version",device_id:"device_id",device_net:"device_net",device_os:"device_os",device_os_version:"device_os_version",device_vendor:"device_vendor",device_model:"device_model",device_is_root:"device_is_root",device_os_name:"device_os_name",device_batt_level:"device_batt_level",device_batt_temp:"device_batt_temp",device_memory_use_size:"device_memory_use_size",device_memory_total_size:"device_memory_total_size",device_disk_use_size:"device_disk_use_size",device_disk_total_size:"device_disk_total_size",device_abis:"device_abis",app_count:"app_count",app_use_memory_size:"app_use_memory_size",app_webview_count:"app_webview_count",app_use_duration:"app_use_duration",app_run_fore:"app_run_fore",package_name:"package_name",package_version:"package_version",page_url:"page_url",error_msg:"error_msg",create_time:"create_time"}},exportExcelData:[]}},computed:{queryStr(){return F(this.query)},tableQuery(){const{appid:e,platform_id:t,version_id:a,start_time:i}=this.query,r=this.getPlatform(t),o=this.getVersion(a);return F({appid:e,create_time:i,platform:r,version:o})},versionQuery(){const{appid:e,uni_platform:t}=this.query;return F({appid:e,uni_platform:t,type:"native_app"})}},created(){this.debounceGet=B((()=>{this.getAllData(this.queryStr),this.where=this.tableQuery,this.$nextTick((()=>{this.$refs.udb&&this.$refs.udb.loadData()}),200)}),300),this.debounceGet()},watch:{query:{deep:!0,handler(e){this.options.pageCurrent=1,this.debounceGet()}},chartTab(e){this.getChartData(this.queryStr)}},onLoad(){this._filter={}},methods:{onqueryload(e){this.exportExcelData=e,this.tableData=e},getWhere(){const e=this.schemaQuery.trim();if(!e)return"";const t=new RegExp(e,"i");return N.map((e=>t+".test("+e+")")).join(" || ")},loadData(e=!0){this.$refs.udb.loadData({clear:e})},onPageChanged(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},sortChange(e,t){this.orderByFieldName=t,e.order?this.orderby=t+" "+W[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((()=>{this.$refs.udb.loadData()}))},filterChange(e,t){this._filter[t]={type:e.filterType,value:e.filter};let a=function(e,t){let a={};for(let i in e){let{type:r,value:o}=e[i];switch(r){case"search":"string"==typeof o&&o.length&&(a[i]=new RegExp(o));break;case"select":if(o.length){let e=[];for(let a of o)e.push(t.eq(a));a[i]=t.or(e)}break;case"range":if(o.length){let e=o[0],r=o[1];a[i]=t.and([t.gte(e),t.lte(r)])}break;case"date":if(o.length){let[e,r]=o,l=new Date(e),s=new Date(r);a[i]=t.and([t.gte(l),t.lte(s)])}break;case"timestamp":if(o.length){let[e,r]=o;a[i]=t.and([t.gte(e),t.lte(r)])}}}return a}(this._filter,G.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((()=>{this.$refs.udb.loadData()}))},useDatetimePicker(){this.currentDateTab=-1},changePlatform(e,t,a,i){this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange(e,t){this.currentDateTab=t;const a=L(e),i=L(0)-1;this.query.start_time=[a,i]},getPlatform(e){const t=a("uni-admin-statTabsData")["platform-channel"],i=Array.isArray(t)&&t.find((t=>t._id===e));return i&&i.code||""},getVersion(e){let t=[];this.$refs["app-versions"]&&"function"==typeof this.$refs["app-versions"].getLoadData&&(t=this.$refs["app-versions"].getLoadData());const a=Array.isArray(t)&&t.find((t=>t._id===e));return a&&a.text||""},getAllData(e){-1!==e.indexOf("appid")?(this.errorMessage="",this.getPanelData(e),this.getChartData(e)):this.errorMessage="请先选择应用"},getPanelData(e){let a=F(this.query,!1,["uni_platform"]);t.database().collection("uni-stat-error-result").where(a).field("count as temp_count, app_launch_count as temp_app_launch_count, appid").groupBy("appid").groupField("sum(temp_count) as count, sum(temp_app_launch_count) as app_launch_count").get({getCount:!0}).then((e=>{e.result;const t=e.result.data[0]||{count:0,app_launch_count:0};let a=Object.assign({},this.query);delete a.type,this.getTotalLaunch(F(a,!1,["uni_platform"])).then((e=>{const a=e.result.data[0];if(t){let e=a&&a.total_app_launch_count;t.app_launch_count=e,this.panelData=M(R,t)}}))}))},getTotalLaunch:e=>t.database().collection("uni-stat-result").where(e).groupBy("appid").groupField("sum(app_launch_count) as total_app_launch_count").get(),getChartData(e,a="day_count"){let i=F(this.query,!1,["uni_platform"]);this.chartData={},this.options;const r=t.database(),[o,l]=this.query.start_time,s=O(new Date(o),new Date(l));r.collection("uni-stat-error-result").where(i).field("count as temp_count, app_launch_count as temp_app_launch_count, start_time").groupBy("start_time").groupField("sum(temp_count) as count, sum(temp_app_launch_count) as app_launch_count").orderBy("start_time","asc").get({getCount:!0}).then((e=>{const{count:t,data:a}=e.result;let i=[];s.forEach((e=>{let t=a.find((t=>t.start_time===e));t?i.push(t):i.push({app_launch_count:0,count:0,start_time:e})}));const r={categories:[],series:[{name:"暂无数据",data:[]}]};if("errorCount"===this.chartTab){const e=r.series[0]={name:"崩溃次数",data:[]},t=r.categories;for(const a of i){let i=a.start_time;const r=U(i,"day"),o=a.count;t.push(r),e.data.push(o)}this.chartData=r}else{const e=r.series[0]={name:"崩溃率(%)",data:[],lineStyle:{color:"#EE6666",width:1},itemStyle:{borderWidth:1,borderColor:"#EE6666",color:"#EE6666"},areaStyle:{color:{colorStops:[{offset:0,color:"#EE6666"},{offset:1,color:"#FFFFFF"}]}}},t=r.categories;for(const a of i){const{count:i,app_launch_count:r}=a;let o=a.start_time;const l=U(o,"day");t.push(l);let s=i/r;s=s?s.toFixed(2):0,e.data.push(s)}this.chartData=r}})).finally((()=>{}))}}},[["render",function(e,t,a,F,B,L){const M=_(m("uni-stat-breadcrumb"),q),O=l,U=_(m("uni-data-select"),C),I=_(m("uni-stat-tabs"),T),Q=_(m("uni-datetime-picker"),b),R=_(m("uni-stat-panel"),A),G=_(m("qiun-data-charts"),V),N=f,W=_(m("download-excel"),E),H=_(m("uni-icons"),x),J=_(m("uni-tooltip"),j),K=_(m("uni-th"),D),X=_(m("uni-tr"),k),Y=_(m("uni-td"),w),Z=_(m("uni-dateformat"),S),ee=_(m("uni-table"),z),te=_(m("uni-pagination"),P),ae=_(m("unicloud-db"),$);return i(),r(O,{class:"fix-top-window"},{default:o((()=>[s(O,{class:"uni-header"},{default:o((()=>[s(M,{class:"uni-stat-breadcrumb-on-phone"}),s(O,{class:"uni-group hide-on-phone"},{default:o((()=>[s(O,{class:"uni-sub-title"},{default:o((()=>[n("开发者可以在这里快速查询原生应用最近出现的具体崩溃内容，了解崩溃概况信息，以便快速修复问题")])),_:1})])),_:1})])),_:1}),s(O,{class:"uni-container"},{default:o((()=>[s(O,{class:"uni-stat--x flex p-1015"},{default:o((()=>[s(U,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",modelValue:B.query.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>B.query.appid=e),clear:!1},null,8,["modelValue"]),s(U,{ref:"app-versions",collection:"opendb-app-versions",where:L.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:B.query.version_id,"onUpdate:modelValue":t[1]||(t[1]=e=>B.query.version_id=e)},null,8,["where","modelValue"]),s(I,{label:"平台选择",type:"boldLine",all:!1,mode:"platform-channel",modelValue:B.query.platform_id,"onUpdate:modelValue":t[2]||(t[2]=e=>B.query.platform_id=e),onChange:L.changePlatform},null,8,["modelValue","onChange"])])),_:1}),s(O,{class:"uni-stat--x flex"},{default:o((()=>[s(I,{label:"日期选择",current:B.currentDateTab,yesterday:!1,mode:"date",onChange:L.changeTimeRange},null,8,["current","onChange"]),s(Q,{type:"daterange",end:(new Date).getTime(),modelValue:B.query.start_time,"onUpdate:modelValue":t[3]||(t[3]=e=>B.query.start_time=e),returnType:"timestamp",clearIcon:!1,class:d(["uni-stat-datetime-picker",{"uni-stat__actived":B.currentDateTab<0&&!!B.query.start_time.length}]),onChange:L.useDatetimePicker},null,8,["end","modelValue","class","onChange"])])),_:1}),s(O,{class:"uni-stat--x",style:{padding:"15px 0"}},{default:o((()=>[s(R,{items:B.panelData,class:"uni-stat-panel"},null,8,["items"]),s(I,{type:"box",modelValue:B.chartTab,"onUpdate:modelValue":t[4]||(t[4]=e=>B.chartTab=e),tabs:B.chartTabs,class:"mb-l"},null,8,["modelValue","tabs"]),s(O,{class:"uni-charts-box"},{default:o((()=>[s(G,{type:"area",chartData:B.chartData,eopts:{notMerge:!0},echartsH5:"",echartsApp:"",tooltipFormat:"tooltipCustom",errorMessage:B.errorMessage},null,8,["chartData","errorMessage"])])),_:1})])),_:1}),s(O,{class:"uni-stat--x p-m"},{default:o((()=>[s(O,{class:"flex-between"},{default:o((()=>[s(O,{class:"uni-stat-card-header"},{default:o((()=>[n("信息列表")])),_:1}),s(O,{class:"uni-group"},{default:o((()=>[s(W,{class:"hide-on-phone",fields:B.exportExcel.fields,data:B.exportExcelData,type:B.exportExcel.type,name:B.exportExcel.filename},{default:o((()=>[s(N,{class:"uni-button",type:"primary",size:"mini"},{default:o((()=>[n("导出 Excel")])),_:1})])),_:1},8,["fields","data","type","name"])])),_:1})])),_:1}),s(ae,{ref:"udb",collection:B.collectionList,field:"appid,version,platform,channel,sdk_version,device_id,device_net,device_os,device_os_version,device_vendor,device_model,device_is_root,device_os_name,device_batt_level,device_batt_temp,device_memory_use_size,device_memory_total_size,device_disk_use_size,device_disk_total_size,device_abis,app_count,app_use_memory_size,app_webview_count,app_use_duration,app_run_fore,package_name,package_version,page_url,error_msg,create_time",where:B.where,"page-data":"replace",orderby:B.orderby,getcount:!0,"page-size":B.options.pageSize,"page-current":B.options.pageCurrent,loadtime:"manual",options:B.options,onLoad:L.onqueryload},{default:o((({data:t,pagination:a,loading:l,error:d,options:_})=>[s(ee,{ref:"table",loading:l,border:"",stripe:"",emptyText:e.$t("common.empty"),style:{"overflow-y":"scroll"}},{default:o((()=>[s(X,null,{default:o((()=>[(i(!0),c(u,null,p(B.fieldsMap,((e,t)=>(i(),c(u,{key:t},[e.title?(i(),r(K,{key:t,align:"center",style:h({minWidth:15*e.title.length+80+"px"})},{default:o((()=>[s(J,null,g({default:o((()=>[n(y(e.title)+" ",1),e.tooltip?(i(),r(H,{key:0,type:"help",color:"#666"})):v("",!0)])),_:2},[e.tooltip?{name:"content",fn:o((()=>[s(O,{class:"uni-stat-tooltip-s"},{default:o((()=>[n(y(e.tooltip),1)])),_:2},1024)])),key:"0"}:void 0]),1024)])),_:2},1032,["style"])):v("",!0)],64)))),128))])),_:1}),(i(!0),c(u,null,p(B.tableData,((e,t)=>(i(),r(X,{key:t},{default:o((()=>[(i(!0),c(u,null,p(B.fieldsMap,((t,a)=>(i(),c(u,{key:a},["error_msg"===t.field?(i(),r(Y,{key:t.field,align:"left",style:{"min-width":"500px"}},{default:o((()=>[s(J,null,g({default:o((()=>[n(y(e.error_msg?e.error_msg.substring(0,100)+"...":"")+" ",1),e.error_msg?(i(),r(H,{key:0,type:"help",color:"#666"})):v("",!0)])),_:2},[e.error_msg?{name:"content",fn:o((()=>[s(O,{class:"uni-stat-tooltip-l"},{default:o((()=>[n(y(e.error_msg),1)])),_:2},1024)])),key:"0"}:void 0]),1024)])),_:2},1024)):"create_time"===t.field?(i(),r(Y,{key:t.field,align:"center"},{default:o((()=>[s(Z,{threshold:[0,0],date:e.create_time},null,8,["date"])])),_:2},1024)):(i(),r(Y,{key:t.field,align:"center"},{default:o((()=>[n(y(void 0!==e[t.field]?e[t.field]:"-"),1)])),_:2},1024))],64)))),128))])),_:2},1024)))),128))])),_:2},1032,["loading","emptyText"]),s(O,{class:"uni-pagination-box"},{default:o((()=>[s(te,{"show-icon":"","page-size":a.size,modelValue:a.current,"onUpdate:modelValue":e=>a.current=e,total:a.count,onChange:L.onPageChanged},null,8,["page-size","modelValue","onUpdate:modelValue","total","onChange"])])),_:2},1024)])),_:1},8,["collection","where","orderby","page-size","page-current","options","onLoad"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-5e849582"]]);export{H as default};
