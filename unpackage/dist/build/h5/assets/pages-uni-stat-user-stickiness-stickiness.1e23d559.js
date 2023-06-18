import{_ as e,D as t,o as a,c as i,w as s,i as l,a as n,d as r,X as o,b as d,f as u,g as p,aH as c}from"./index-52dd6894.js";import{_ as h}from"./uni-stat-breadcrumb.0684f73d.js";import{_ as m}from"./uni-data-select.0a6d800a.js";import{_}from"./uni-stat-tabs.3a120567.js";import{_ as f}from"./qiun-data-charts.f94dccb3.js";import{_ as g}from"./uni-stat-table.a74a8443.js";import{s as y,d as b,g as v,m as D}from"./util.456774f8.js";import"./uni-tooltip.36348de7.js";const q=[{title:"名称",field:"name",tooltip:"",formatter:""},{title:"访问人数",field:"visit_users",tooltip:"访问人数（活跃用户数）：访问过应用内任意页面的总用户数（去重）",value:0},{title:"访问人数占比",field:"visit_users/total_visit_users",computed:"visit_users/total_visit_users",formatter:"%"},{title:"访问次数",field:"visit_times",tooltip:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问",value:0},{title:"访问次数占比",field:"visit_times/total_visit_times",computed:"visit_times/total_visit_times",formatter:"%",tooltip:""}];const x=e({data:()=>({fieldsMap:q,query:{appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},loading:!1,currentDateTab:1,tableData:[],panelData:q.filter((e=>e.hasOwnProperty("value"))),chartData:{},type:"visit_depth_data",types:[{_id:"visit_depth_data",name:"访问页数"},{_id:"duration_data",name:"访问时长"}],field:"visit_users",fields:[{_id:"visit_users",name:"访问人数"},{_id:"visit_times",name:"访问次数"}],options:{visit_depth_data:{prefix:"p",title:"页",value:[1,2,3,4,5,10]},duration_data:{prefix:"s",title:"秒",value:[0,3,6,11,21,31,51,100]}},channelData:[],errorMessage:""}),computed:{fieldName(){return this.fields.forEach((e=>{if(e._id===this.field)return e.name}))},channelQuery(){const e=this.query.platform_id;return y({platform_id:e})},versionQuery(){const{appid:e,uni_platform:t}=this.query;return y({appid:e,uni_platform:t})}},created(){this.debounceGet=b((()=>{this.getAllData(this.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler(e){this.debounceGet()}},type(){this.debounceGet()},field(){this.debounceGet()}},methods:{useDatetimePicker(){this.currentDateTab=-1},changeAppid(e){this.getChannelData(e,!1)},changePlatform(e,t,a,i){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange(e,t){this.currentDateTab=t;const a=v(e),i=v(0)-1;this.query.start_time=[a,i]},createStr(e,t="visit_depth_data"){const a=e.length,i=this.options[t].prefix;return this.options[t].value.map((s=>e.map((e=>`sum(${t}.${e}.${i+"_"+s}) as ${a>1?e+"_"+i+"_"+s:i+"_"+s}`)))).join()},parseChars(e){e=e.split("_");const t=this.options[this.type];let a=t.title;return t.value.forEach(((i,s)=>{const l=t.value[s+1];i===Number(e[e.length-1])&&(a=l?i+1===l?i+a:i+"-"+(l-1)+a:i+"+"+a)})),a},getAllData(e){e.appid?(this.errorMessage="",this.getChartData(e,this.field,this.fieldName),this.getTabelData(e)):this.errorMessage="请先选择应用"},getChartData(e,a=this.field,i=this.fields.find((e=>e._id===this.field)).name){e=y(e,null,["uni_platform"]);const s=this.createStr([a],this.type);t.database().collection("uni-stat-loyalty-result").where(e).groupBy("appid").groupField(s).orderBy("start_time","asc").get({getCount:!0}).then((e=>{let{count:t,data:a}=e.result;a=a[0];const i={series:[{data:[]}]};for(const s in a)if("appid"!==s){const e=this.parseChars(s),t=a[s];i.series[0].data.push({name:e,value:t})}this.chartData=i})).catch((e=>{console.error(e)})).finally((()=>{this.loading=!1}))},getTabelData(e){e=y(e,null,["uni_platform"]);const a=this.createStr(["visit_users","visit_times"],this.type);this.fieldsMap[0].title=this.types.find((e=>e._id===this.type)).name,this.loading=!0;t.database().collection("uni-stat-loyalty-result").where(e).groupBy("appid").groupField(a).orderBy("start_time","asc").get({getCount:!0}).then((e=>{const{count:t,data:a}=e.result,i=this.type,s=[];let l=this.options[i].prefix;l=`_${l}_`;for(const p of a)for(const e in p)if("appid"!==e){const t={},a=e.split(l);t.name=a[1],t[a[0]]=p[e],s.push(t)}const n=[],r={},o=(e,t)=>e+t;let d=s.filter((e=>e.visit_users)).map((e=>e.visit_users));d=d.length?d.reduce(o):0;let u=s.filter((e=>e.visit_times)).map((e=>e.visit_times));u=u.length?u.reduce(o):0,r.visit_times=u,r.visit_users=d,this.options[i].value.forEach((e=>{const t={};t.name=e+"p",s.forEach((a=>{if(Number(a.name)===e)for(const e in a)e!==name&&(t[e]=a[e],t["total_"+e]=r[e])})),t.name=this.parseChars(String(e)),n.push(t)}));for(const p of n)D(q,p,p);this.tableData=[],this.tableData=n})).catch((e=>{console.error(e)})).finally((()=>{this.loading=!1}))},getChannelData(e,a){this.query.channel_id="";const i=t.database(),s={};(e=e||this.query.appid)&&(s.appid=e),(a=a||this.query.platform_id)&&(s.platform_id=a);let l=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),n=i.collection("uni-stat-app-channels").where(s).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(n,l).orderBy("platform_id","asc").get().then((e=>{let t=e.result.data,a=[];if(t.length>0){let e;for(let i in t)e=t[i].channel_name?t[i].channel_name:"默认",t[i].platform_id.length>0&&(e=t[i].platform_id[0].name+"-"+e),a.push({value:t[i]._id,text:e})}this.channelData=a})).catch((e=>{console.error(e)})).finally((()=>{}))}}},[["render",function(e,t,y,b,v,D){const q=u(p("uni-stat-breadcrumb"),h),x=l,C=u(p("uni-data-select"),m),V=u(p("uni-stat-tabs"),_),w=u(p("uni-datetime-picker"),c),T=u(p("qiun-data-charts"),f),M=u(p("uni-stat-table"),g);return a(),i(x,{class:"fix-top-window"},{default:s((()=>[n(x,{class:"uni-header"},{default:s((()=>[n(q,{class:"uni-stat-breadcrumb-on-phone"}),n(x,{class:"uni-group"},{default:s((()=>[n(x,{class:"uni-sub-title hide-on-phone"},{default:s((()=>[r("用户忠诚度用户对您应用的访问深度及访问频次情况。助您了解用户对应用的粘度，尤其在对内容改进后，效果是否有所提升")])),_:1})])),_:1})])),_:1}),n(x,{class:"uni-container"},{default:s((()=>[n(x,{class:"uni-stat--x flex p-1015"},{default:s((()=>[n(C,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",onChange:D.changeAppid,modelValue:v.query.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>v.query.appid=e),clear:!1},null,8,["onChange","modelValue"]),n(C,{collection:"opendb-app-versions",where:D.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:v.query.version_id,"onUpdate:modelValue":t[1]||(t[1]=e=>v.query.version_id=e)},null,8,["where","modelValue"])])),_:1}),n(x,{class:"uni-stat--x flex"},{default:s((()=>[n(V,{label:"日期选择",current:v.currentDateTab,mode:"date",onChange:D.changeTimeRange},null,8,["current","onChange"]),n(w,{type:"daterange",end:(new Date).getTime(),modelValue:v.query.start_time,"onUpdate:modelValue":t[2]||(t[2]=e=>v.query.start_time=e),returnType:"timestamp",clearIcon:!1,class:o(["uni-stat-datetime-picker",{"uni-stat__actived":v.currentDateTab<0&&!!v.query.start_time.length}]),onChange:D.useDatetimePicker},null,8,["end","modelValue","class","onChange"])])),_:1}),n(x,{class:"uni-stat--x"},{default:s((()=>[n(V,{label:"平台选择",type:"boldLine",mode:"platform",modelValue:v.query.platform_id,"onUpdate:modelValue":t[3]||(t[3]=e=>v.query.platform_id=e),onChange:D.changePlatform},null,8,["modelValue","onChange"]),v.query.platform_id&&-1===v.query.platform_id.indexOf("==")?(a(),i(C,{key:0,ref:"version-select",collection:"uni-stat-app-channels",where:D.channelQuery,class:"p-channel",field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择",modelValue:v.query.channel_id,"onUpdate:modelValue":t[4]||(t[4]=e=>v.query.channel_id=e)},null,8,["where","modelValue"])):d("",!0)])),_:1}),n(x,{class:"uni-stat--x mb-l",style:{"padding-top":"0"}},{default:s((()=>[n(x,{class:"mb-m line-bottom"},{default:s((()=>[n(V,{type:"boldLine",tabs:v.types,modelValue:v.type,"onUpdate:modelValue":t[5]||(t[5]=e=>v.type=e),style:{"line-height":"40px","margin-bottom":"-17px"}},null,8,["tabs","modelValue"])])),_:1}),n(x,{class:"p-m"},{default:s((()=>[n(x,{class:"uni-charts-box"},{default:s((()=>[n(T,{type:"pie",chartData:v.chartData,echartsH5:"",echartsApp:"",errorMessage:v.errorMessage},null,8,["chartData","errorMessage"])])),_:1})])),_:1})])),_:1}),n(x,{class:"uni-stat--x p-m"},{default:s((()=>[n(M,{data:v.tableData,filedsMap:v.fieldsMap,loading:v.loading},null,8,["data","filedsMap","loading"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-f324f059"]]);export{x as default};