import{E as e,_ as t,f as a,g as l,o as s,c as i,w as n,a as d,e as o,F as r,r as h,q as c,d as u,t as p,b as g,u as f,i as m,a2 as _,y,a3 as v,s as b,a4 as x,v as w,S as k,n as C,a5 as D,K as S,z as I,a6 as $,a7 as V,J as T,H as A,h as N,j as L,k as F,l as M}from"./index.96d04c0c.js";import{_ as j}from"./uni-load-more.b58ece14.js";import{_ as B}from"./uni-dateformat.f8d51689.js";import{_ as P}from"./uni-pagination.1c4c12cb.js";import{_ as z}from"./unicloud-db.9bbe4b24.js";import{a as O,e as E,d as R,b as W}from"./utils.391283b9.js";const U={props:{localdata:{type:[Array,Object],default:()=>[]},spaceInfo:{type:Object,default:()=>({})},collection:{type:String,default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String],default:!1},manual:{type:Boolean,default:!1},value:{type:[Array,String,Number],default:()=>[]},modelValue:{type:[Array,String,Number],default:()=>[]},preload:{type:Boolean,default:!1},stepSearh:{type:Boolean,default:!0},selfField:{type:String,default:""},parentField:{type:String,default:""},multiple:{type:Boolean,default:!1},map:{type:Object,default:()=>({text:"text",value:"value"})}},data(){return{loading:!1,errorMessage:"",loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},dataList:[],selected:[],selectedIndex:0,page:{current:this.pageCurrent,size:this.pageSize,count:0}}},computed:{isLocaldata(){return!this.collection.length},postField(){let e=[this.field];return this.parentField&&e.push(`${this.parentField} as parent_value`),e.join(",")},dataValue(){return(Array.isArray(this.modelValue)?this.modelValue.length>0:null!==this.modelValue||void 0!==this.modelValue)?this.modelValue:this.value},hasValue(){return"number"==typeof this.dataValue||null!=this.dataValue&&this.dataValue.length>0}},created(){this.$watch((()=>{var e=[];return["pageCurrent","pageSize","spaceInfo","value","modelValue","localdata","collection","action","field","orderby","where","getont","getcount","gettree"].forEach((t=>{e.push(this[t])})),e}),((e,t)=>{for(let a=2;a<e.length&&e[a]==t[a];a++);e[0]!=t[0]&&(this.page.current=this.pageCurrent),this.page.size=this.pageSize,this.onPropsChange()})),this._treeData=[]},methods:{onPropsChange(){this._treeData=[]},getCommand(t={}){let a=e.database(this.spaceInfo);const l=t.action||this.action;l&&(a=a.action(l));const s=t.collection||this.collection;a=a.collection(s);const i=t.where||this.where;i&&Object.keys(i).length&&(a=a.where(i));const n=t.field||this.field;n&&(a=a.field(n));const d=t.orderby||this.orderby;d&&(a=a.orderBy(d));const o=void 0!==t.pageCurrent?t.pageCurrent:this.page.current,r=void 0!==t.pageSize?t.pageSize:this.page.size,h={getCount:void 0!==t.getcount?t.getcount:this.getcount,getTree:void 0!==t.gettree?t.gettree:this.gettree};return t.getTreePath&&(h.getTreePath=t.getTreePath),a=a.skip(r*(o-1)).limit(r).get(h),a},getNodeData(e){this.loading||(this.loading=!0,this.getCommand({field:this.postField,where:this._pathWhere()}).then((t=>{this.loading=!1,this.selected=t.result.data,e&&e()})).catch((e=>{this.loading=!1,this.errorMessage=e})))},getTreePath(e){this.loading||(this.loading=!0,this.getCommand({field:this.postField,getTreePath:{startWith:`${this.selfField}=='${this.dataValue}'`}}).then((t=>{this.loading=!1;let a=[];this._extractTreePath(t.result.data,a),this.selected=a,e&&e()})).catch((e=>{this.loading=!1,this.errorMessage=e})))},loadData(){this.isLocaldata?this._processLocalData():null==this.dataValue?this.stepSearh?this._loadNodeData((e=>{this._treeData=e,this._updateBindData()})):this._loadAllData((e=>{this._treeData=[],this._extractTree(e,this._treeData,null),this._updateBindData()})):this._loadNodeData((e=>{this._treeData=e,this._updateBindData(),this._updateSelected()}))},_loadAllData(e){this.loading||(this.loading=!0,this.getCommand({field:this.postField,gettree:!0,startwith:`${this.selfField}=='${this.dataValue}'`}).then((t=>{this.loading=!1,e(t.result.data),this.onDataChange()})).catch((e=>{this.loading=!1,this.errorMessage=e})))},_loadNodeData(e,t){this.loading||(this.loading=!0,this.getCommand({field:this.postField,where:t||this._postWhere(),pageSize:500}).then((t=>{this.loading=!1,e(t.result.data),this.onDataChange()})).catch((e=>{this.loading=!1,this.errorMessage=e})))},_pathWhere(){let e=[],t=this._getParentNameByField();return t&&e.push(`${t} == '${this.dataValue}'`),this.where?`(${this.where}) && (${e.join(" || ")})`:e.join(" || ")},_postWhere(){let e=[],t=this.selected,a=this.parentField;if(a&&e.push(`${a} == null || ${a} == ""`),t.length)for(var l=0;l<t.length-1;l++)e.push(`${a} == '${t[l].value}'`);let s=[];return this.where&&s.push(`(${this.where})`),e.length&&s.push(`(${e.join(" || ")})`),s.join(" && ")},_nodeWhere(){let e=[],t=this.selected;return t.length&&e.push(`${this.parentField} == '${t[t.length-1].value}'`),this.where?`(${this.where}) && (${e.join(" || ")})`:e.join(" || ")},_getParentNameByField(){const e=this.field.split(",");let t=null;for(let a=0;a<e.length;a++){const l=e[a].split("as");if(!(l.length<2)&&"value"===l[1].trim()){t=l[0].trim();break}}return t},_isTreeView(){return this.parentField&&this.selfField},_updateSelected(){var e=this.dataList,t=this.selected;let a=this.map.text,l=this.map.value;for(var s=0;s<t.length;s++)for(var i=t[s].value,n=e[s],d=0;d<n.length;d++){var o=n[d];if(o[l]===i){t[s].text=o[a];break}}},_updateBindData(e){const{dataList:t,hasNodes:a}=this._filterData(this._treeData,this.selected);let l=!1===this._stepSearh&&!a;return e&&(e.isleaf=l),this.dataList=t,this.selectedIndex=t.length-1,!l&&this.selected.length<t.length&&this.selected.push({value:null,text:"请选择"}),{isleaf:l,hasNodes:a}},_filterData(e,t){let a=[],l=!0;a.push(e.filter((e=>null===e.parent_value||void 0===e.parent_value||""===e.parent_value)));for(let n=0;n<t.length;n++){var s=t[n].value,i=e.filter((e=>e.parent_value===s));i.length?a.push(i):l=!1}return{dataList:a,hasNodes:l}},_extractTree(e,t,a){let l=this.map.value;for(let s=0;s<e.length;s++){let i=e[s],n={};for(let e in i)"children"!==e&&(n[e]=i[e]);null!=a&&""!==a&&(n.parent_value=a),t.push(n);let d=i.children;d&&this._extractTree(d,t,i[l])}},_extractTreePath(e,t){for(let a=0;a<e.length;a++){let l=e[a],s={};for(let e in l)"children"!==e&&(s[e]=l[e]);t.push(s);let i=l.children;i&&this._extractTreePath(i,t)}},_findNodePath(e,t,a=[]){let l=this.map.text,s=this.map.value;for(let i=0;i<t.length;i++){let n=t[i],d=n.children,o=n[l],r=n[s];if(a.push({value:r,text:o}),r===e)return a;if(d){const t=this._findNodePath(e,d,a);if(t.length)return t}a.pop()}return[]},_processLocalData(){this._treeData=[],this._extractTree(this.localdata,this._treeData);var e=this.dataValue;void 0!==e&&(Array.isArray(e)&&"object"==typeof(e=e[e.length-1])&&e[this.map.value]&&(e=e[this.map.value]),this.selected=this._findNodePath(e,this.localdata))}}};const q=t({name:"UniDataPicker",emits:["popupopened","popupclosed","nodeclick","input","change","update:modelValue"],mixins:[U],components:{DataPickerView:t({name:"UniDataPickerView",emits:["nodeclick","change","datachange","update:modelValue"],mixins:[U],props:{managedMode:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!0}},data:()=>({}),created(){this.managedMode||this.$nextTick((()=>{this.load()}))},methods:{onPropsChange(){this._treeData=[],this.selectedIndex=0,this.load()},load(){this.isLocaldata?this.loadData():this.dataValue.length&&this.getTreePath((e=>{this.loadData()}))},handleSelect(e){this.selectedIndex=e},handleNodeClick(e,t,a){if(e.disable)return;const l=this.dataList[t][a],s=l[this.map.text],i=l[this.map.value];if(t<this.selected.length-1?(this.selected.splice(t,this.selected.length-t),this.selected.push({text:s,value:i})):t===this.selected.length-1&&this.selected.splice(t,1,{text:s,value:i}),l.isleaf)return void this.onSelectedChange(l,l.isleaf);const{isleaf:n,hasNodes:d}=this._updateBindData();(this._isTreeView()||d)&&(!this.isLocaldata||d&&!n)?n||d?this.onSelectedChange(l,!1):this._loadNodeData((e=>{e.length?(this._treeData.push(...e),this._updateBindData(l)):l.isleaf=!0,this.onSelectedChange(l,l.isleaf)}),this._nodeWhere()):this.onSelectedChange(l,!0)},updateData(e){this._treeData=e.treeData,this.selected=e.selected,this._treeData.length?this._updateBindData():this.loadData()},onDataChange(){this.$emit("datachange")},onSelectedChange(e,t){t&&this._dispatchEvent(),e&&this.$emit("nodeclick",e)},_dispatchEvent(){this.$emit("change",this.selected.slice(0))}}},[["render",function(e,t,y,v,b,x){const w=f,k=m,C=_,D=a(l("uni-load-more"),j);return s(),i(k,{class:"uni-data-pickerview"},{default:n((()=>[d(C,{class:"selected-area","scroll-x":"true","scroll-y":"false","show-scrollbar":!1},{default:n((()=>[d(k,{class:"selected-list"},{default:n((()=>[(s(!0),o(r,null,h(e.selected,((t,a)=>(s(),o(r,{key:a},[t.text?(s(),i(k,{key:0,class:c(["selected-item",{"selected-item-active":a==e.selectedIndex,"selected-item-text-overflow":y.ellipsis}]),onClick:e=>x.handleSelect(a)},{default:n((()=>[d(w,{class:""},{default:n((()=>[u(p(t.text),1)])),_:2},1024)])),_:2},1032,["class","onClick"])):g("",!0)],64)))),128))])),_:1})])),_:1}),d(k,{class:"tab-c"},{default:n((()=>[(s(!0),o(r,null,h(e.dataList,((t,a)=>(s(),o(r,{key:e.index},[a==e.selectedIndex?(s(),i(C,{class:"list",key:a,"scroll-y":!0},{default:n((()=>[(s(!0),o(r,null,h(t,((t,l)=>(s(),i(k,{class:c(["item",{"is-disabled":!!t.disable}]),key:l,onClick:e=>x.handleNodeClick(t,a,l)},{default:n((()=>[d(w,{class:"item-text item-text-overflow"},{default:n((()=>[u(p(t[e.map.text]),1)])),_:2},1024),e.selected.length>a&&t[e.map.value]==e.selected[a].value?(s(),i(k,{key:0,class:"check"})):g("",!0)])),_:2},1032,["class","onClick"])))),128))])),_:2},1024)):g("",!0)],64)))),128)),e.loading?(s(),i(k,{key:0,class:"loading-cover"},{default:n((()=>[d(D,{class:"load-more",contentText:e.loadMore,status:"loading"},null,8,["contentText"])])),_:1})):g("",!0),e.errorMessage?(s(),i(k,{key:1,class:"error-message"},{default:n((()=>[d(w,{class:"error-text"},{default:n((()=>[u(p(e.errorMessage),1)])),_:1})])),_:1})):g("",!0)])),_:1})])),_:1})}],["__scopeId","data-v-bae1831b"]])},props:{options:{type:[Object,Array],default:()=>({})},popupTitle:{type:String,default:"请选择"},placeholder:{type:String,default:"请选择"},heightMobile:{type:String,default:""},readonly:{type:Boolean,default:!1},clearIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!0},split:{type:String,default:"/"},ellipsis:{type:Boolean,default:!0}},data:()=>({isOpened:!1,inputSelected:[]}),created(){this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this)),this.$nextTick((()=>{this.load()}))},methods:{clear(){this.inputSelected.splice(0),this._dispatchEvent([])},onPropsChange(){this._treeData=[],this.selectedIndex=0,this.load()},load(){this.readonly?this._processReadonly(this.localdata,this.dataValue):this.isLocaldata?(this.loadData(),this.inputSelected=this.selected.slice(0)):this.parentField||this.selfField||!this.hasValue?this.hasValue&&this.getTreePath((()=>{this.inputSelected=this.selected.slice(0)})):this.getNodeData((()=>{this.inputSelected=this.selected.slice(0)}))},getForm(e="uniForms"){let t=this.$parent,a=t.$options.name;for(;a!==e;){if(t=t.$parent,!t)return!1;a=t.$options.name}return t},show(){this.isOpened=!0,setTimeout((()=>{this.$refs.pickerView.updateData({treeData:this._treeData,selected:this.selected,selectedIndex:this.selectedIndex})}),200),this.$emit("popupopened")},hide(){this.isOpened=!1,this.$emit("popupclosed")},handleInput(){this.readonly||this.show()},handleClose(e){this.hide()},onnodeclick(e){this.$emit("nodeclick",e)},ondatachange(e){this._treeData=this.$refs.pickerView._treeData},onchange(e){this.hide(),this.$nextTick((()=>{this.inputSelected=e})),this._dispatchEvent(e)},_processReadonly(e,t){if(e.findIndex((e=>e.children))>-1){let e;return Array.isArray(t)?(e=t[t.length-1],"object"==typeof e&&e.value&&(e=e.value)):e=t,void(this.inputSelected=this._findNodePath(e,this.localdata))}if(!this.hasValue)return void(this.inputSelected=[]);let a=[];for(let i=0;i<t.length;i++){var l=t[i],s=e.find((e=>e.value==l));s&&a.push(s)}a.length&&(this.inputSelected=a)},_filterForArray(e,t){var a=[];for(let i=0;i<t.length;i++){var l=t[i],s=e.find((e=>e.value==l));s&&a.push(s)}return a},_dispatchEvent(e){let t={};if(e.length){for(var a=new Array(e.length),l=0;l<e.length;l++)a[l]=e[l].value;t=e[e.length-1]}else t.value="";this.formItem&&this.formItem.setValue(t.value),this.$emit("input",t.value),this.$emit("update:modelValue",t.value),this.$emit("change",{detail:{value:e}})}}},[["render",function(e,t,w,k,C,D){const S=f,I=a(l("uni-load-more"),j),$=m,V=_,T=a(l("uni-icons"),y),A=v("data-picker-view");return s(),i($,{class:"uni-data-tree"},{default:n((()=>[d($,{class:"uni-data-tree-input",onClick:D.handleInput},{default:n((()=>[b(e.$slots,"default",{options:w.options,data:C.inputSelected,error:e.errorMessage},(()=>[d($,{class:c(["input-value",{"input-value-border":w.border}])},{default:n((()=>[e.errorMessage?(s(),i(S,{key:0,class:"selected-area error-text"},{default:n((()=>[u(p(e.errorMessage),1)])),_:1})):e.loading&&!C.isOpened?(s(),i($,{key:1,class:"selected-area"},{default:n((()=>[d(I,{class:"load-more",contentText:e.loadMore,status:"loading"},null,8,["contentText"])])),_:1})):C.inputSelected.length?(s(),i(V,{key:2,class:"selected-area","scroll-x":"true"},{default:n((()=>[d($,{class:"selected-list"},{default:n((()=>[(s(!0),o(r,null,h(C.inputSelected,((e,t)=>(s(),i($,{class:"selected-item",key:t},{default:n((()=>[d(S,{class:"text-color"},{default:n((()=>[u(p(e.text),1)])),_:2},1024),t<C.inputSelected.length-1?(s(),i(S,{key:0,class:"input-split-line"},{default:n((()=>[u(p(w.split),1)])),_:1})):g("",!0)])),_:2},1024)))),128))])),_:1})])),_:1})):(s(),i(S,{key:3,class:"selected-area placeholder"},{default:n((()=>[u(p(w.placeholder),1)])),_:1})),w.clearIcon&&!w.readonly&&C.inputSelected.length?(s(),i($,{key:4,class:"icon-clear",onClick:x(D.clear,["stop"])},{default:n((()=>[d(T,{type:"clear",color:"#c0c4cc",size:"24"})])),_:1},8,["onClick"])):g("",!0),w.clearIcon&&C.inputSelected.length||w.readonly?g("",!0):(s(),i($,{key:5,class:"arrow-area"},{default:n((()=>[d($,{class:"input-arrow"})])),_:1}))])),_:1},8,["class"])]),!0)])),_:3},8,["onClick"]),C.isOpened?(s(),i($,{key:0,class:"uni-data-tree-cover",onClick:D.handleClose},null,8,["onClick"])):g("",!0),C.isOpened?(s(),i($,{key:1,class:"uni-data-tree-dialog"},{default:n((()=>[d($,{class:"uni-popper__arrow"}),d($,{class:"dialog-caption"},{default:n((()=>[d($,{class:"title-area"},{default:n((()=>[d(S,{class:"dialog-title"},{default:n((()=>[u(p(w.popupTitle),1)])),_:1})])),_:1}),d($,{class:"dialog-close",onClick:D.handleClose},{default:n((()=>[d($,{class:"dialog-close-plus","data-id":"close"}),d($,{class:"dialog-close-plus dialog-close-rotate","data-id":"close"})])),_:1},8,["onClick"])])),_:1}),d(A,{class:"picker-view",ref:"pickerView",modelValue:e.dataValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dataValue=t),localdata:e.localdata,preload:e.preload,collection:e.collection,field:e.field,orderby:e.orderby,where:e.where,"step-searh":e.stepSearh,"self-field":e.selfField,"parent-field":e.parentField,"managed-mode":!0,map:e.map,ellipsis:w.ellipsis,onChange:D.onchange,onDatachange:D.ondatachange,onNodeclick:D.onnodeclick},null,8,["modelValue","localdata","preload","collection","field","orderby","where","step-searh","self-field","parent-field","map","ellipsis","onChange","onDatachange","onNodeclick"])])),_:1})):g("",!0)])),_:3})}],["__scopeId","data-v-fc53b656"]]),H=e.database(),K=H.command,J=["name","title","stable_publish","type"];function X(e={}){return{create_env:K.neq("uni-stat"),...e}}const Y=t({data:()=>({backButtonHover:!1,appVersionListDbName:O,currentAppid:"",currentAppName:"",query:"",where:"",orderby:"stable_publish desc,create_date desc",selectedIndexs:[],options:{pageSize:20,pageCurrent:1,...E},imageStyles:{width:64,height:64},loaded:!1,containerTop:{},appList:[],showAppIndex:0}),async onLoad({appid:e}){await this.getAppList(),this.appList.length?(this.loaded=!0,this.appList.forEach(((t,a)=>{(t.appid===e||R)&&(this.showAppIndex=a)})),this.setAppInfo(this.showAppIndex),this.where=X({appid:this.currentAppid})):this.showModalToAppManager()},computed:{...w("app",["appid"]),appNameList(){return this.appList.map((e=>e.name))}},watch:{showAppIndex(e){this.setAppInfo(e),this.where=X({appid:this.currentAppid})}},onReady(){this.containerTop.height=`${document.documentElement?document.documentElement.clientHeight:window.innerHeight}px`},methods:{setAppInfo(e){this.currentAppid=this.appList[e].appid,this.currentAppName=this.appList[e].name},navigateBack(){k()},getWhere(){const e=this.query.trim();if(!e)return"";const t=new RegExp(e,"i");return J.map((e=>t+".test("+e+")")).join(" || ")},search(){const e=this.getWhere(),t=e===this.where;this.where=e,this.where&&(this.where=`(${this.where}) && `),this.where+=`${new RegExp(this.currentAppid,"i")}.test(appid)`,t&&this.loadData()},loadData(e=!0){this.$refs.udb.loadData({clear:e})},onPageChanged(e){this.$refs.udb.loadData({current:e.current})},navigateTo(e,t){C({url:e,events:{refreshData:()=>{this.loadData(t)}}})},selectedItems(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((t=>e[t]._id))},delTable(){this.$refs.udb.remove(this.selectedItems())},selectionChange(e){this.selectedIndexs=e.detail.index},confirmDelete(e){this.$refs.udb.remove(e)},publish(e){const{top:t,left:a,width:l,height:s}=document.querySelector(".uni-button.publish").getBoundingClientRect(),i=Object.keys(this.options.type_valuetotext);D({itemList:Object.values(this.options.type_valuetotext),popover:{top:t+s,left:a,width:l},success:async e=>{this.navigateTo(`./add?appid=${this.currentAppid}&name=${this.currentAppName}&type=${i[e.tapIndex]}`)}})},async getAppList(){try{const{result:e}=await H.collection(W).get();e&&e.data&&e.data.length>0?this.appList=e.data.filter((e=>e.appid!==this.appid)):this.showModalToAppManager()}catch(e){-1===["TOKEN_INVALID_TOKEN_EXPIRED","TOKEN_INVALID_ANONYMOUS_USER"].indexOf(e.code)&&this.showModalToAppManager()}},showModalToAppManager(){let e=null,t=3;function a(){C({url:"/pages/system/app/list"}),clearInterval(e)}e=setInterval((()=>{--t<=0&&a()}),1e3),S({title:"请先添加应用",content:"即将跳转至应用管理……",showCancel:!1,confirmText:"立即跳转",success:e=>a()})},store_list_key(e){const t=e?e.filter((e=>e.enable)):[];return t.length?t.sort(((e,t)=>t.priority-e.priority)).map((e=>e.name)).join(","):"-"}}},[["render",function(e,t,c,g,_,v){const b=m,x=a(l("uni-icons"),y),w=V,k=T,C=A,D=a(l("uni-th"),N),S=a(l("uni-tr"),L),j=a(l("uni-td"),F),O=f,E=a(l("uni-data-picker"),q),R=a(l("uni-dateformat"),B),W=a(l("uni-table"),M),U=a(l("uni-pagination"),P),H=a(l("unicloud-db"),z);return s(),i(b,{class:"main"},{default:n((()=>[_.loaded?(s(),i(b,{key:0},{default:n((()=>[d(b,{class:"uni-header"},{default:n((()=>[d(b,{class:"uni-group"},{default:n((()=>[d(b,{class:"uni-sub-title"},{default:n((()=>[u("当前应用：")])),_:1}),d(b,{class:"uni-title app-list"},{default:n((()=>[d(w,{onChange:t[0]||(t[0]=e=>_.showAppIndex=e.detail.value),value:_.showAppIndex,range:v.appNameList},{default:n((()=>[d(b,{class:"uni-input",style:{"font-size":"14px"}},{default:n((()=>[u(p(v.appNameList[_.showAppIndex])+" ",1),d(x,{type:"bottom"})])),_:1})])),_:1},8,["value","range"])])),_:1})])),_:1}),d(b,{class:"uni-group"},{default:n((()=>[d(k,{class:"uni-search",type:"text",modelValue:_.query,"onUpdate:modelValue":t[1]||(t[1]=e=>_.query=e),onConfirm:v.search,placeholder:"请输入搜索内容"},null,8,["modelValue","onConfirm"]),d(C,{class:"uni-button",type:"default",size:"mini",onClick:v.search},{default:n((()=>[u("搜索")])),_:1},8,["onClick"]),d(C,{class:"uni-button publish",type:"primary",size:"mini",onClick:v.publish},{default:n((()=>[u("发布新版")])),_:1},8,["onClick"]),d(C,{class:"uni-button",type:"warn",size:"mini",disabled:!_.selectedIndexs.length,onClick:v.delTable},{default:n((()=>[u("批量删除")])),_:1},8,["disabled","onClick"])])),_:1})])),_:1}),d(b,{class:"uni-container"},{default:n((()=>[d(H,{ref:"udb",collection:_.appVersionListDbName,field:"store_list,appid,contents,platform,type,version,min_uni_version,url,stable_publish,create_date,title,name",where:_.where,"page-data":"replace",orderby:_.orderby,getcount:!0,"page-size":_.options.pageSize,"page-current":_.options.pageCurrent,options:_.options},{default:n((({data:e,pagination:t,loading:a,error:l,options:c})=>[d(W,{style:{"overflow-y":"hidden"},loading:a,emptyText:l.message||"没有更多数据",border:"",stripe:"",type:"selection",onSelectionChange:v.selectionChange},{default:n((()=>[d(S,null,{default:n((()=>[d(D,{align:"center"},{default:n((()=>[u("AppID")])),_:1}),d(D,{align:"center"},{default:n((()=>[u("更新标题")])),_:1}),d(D,{align:"center"},{default:n((()=>[u("安装包类型")])),_:1}),d(D,{align:"center"},{default:n((()=>[u("平台")])),_:1}),d(D,{align:"center"},{default:n((()=>[u("已上架应用市场")])),_:1}),d(D,{align:"center"},{default:n((()=>[u("版本号")])),_:1}),d(D,{align:"center"},{default:n((()=>[u("安装包状态")])),_:1}),d(D,{align:"center"},{default:n((()=>[u("上传时间")])),_:1}),d(D,{align:"center"},{default:n((()=>[u("操作")])),_:1})])),_:1}),(s(!0),o(r,null,h(e,((e,t)=>(s(),i(S,{key:t,disabled:e.stable_publish},{default:n((()=>[d(j,{align:"center"},{default:n((()=>[u(p(e.appid),1)])),_:2},1024),d(j,{align:"center"},{default:n((()=>[u(p(e.title||"-"),1)])),_:2},1024),d(j,{align:"center"},{default:n((()=>[d(O,{style:I({padding:"5px 8px",backgroundColor:"wgt"===e.type?"#f0f9eb":"#ecf5ff",color:"wgt"===e.type?"#67c23a":"#409eff",border:"1px solid "+("wgt"===e.type?"#e1f3d8":"#d9ecff"),borderRadius:"4px"})},{default:n((()=>[u(p(c.type_valuetotext[e.type]),1)])),_:2},1032,["style"])])),_:2},1024),d(j,{align:"center"},{default:n((()=>[d(E,{localdata:c.platform_valuetotext,value:e.platform,border:!1,readonly:!0,split:","},null,8,["localdata","value"])])),_:2},1024),d(j,{align:"center"},{default:n((()=>[d(O,null,{default:n((()=>[u(p(v.store_list_key(e.store_list)),1)])),_:2},1024)])),_:2},1024),d(j,{align:"center"},{default:n((()=>[u(p(e.version),1)])),_:2},1024),d(j,{align:"center"},{default:n((()=>[u(p(1==e.stable_publish?"已上线":"已下线"),1)])),_:2},1024),d(j,{align:"center"},{default:n((()=>[d(R,{format:"yyyy-MM-dd hh:mm:ss",date:e.create_date,threshold:[0,0]},null,8,["date"])])),_:2},1024),d(j,{align:"center"},{default:n((()=>[d(C,{onClick:t=>v.navigateTo("./detail?id="+e._id,!1),class:"uni-button",size:"mini",type:"primary"},{default:n((()=>[u("详情")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1032,["disabled"])))),128))])),_:2},1032,["loading","emptyText","onSelectionChange"]),d(b,{class:"uni-pagination-box"},{default:n((()=>[d(U,{"show-icon":"","page-size":t.size,modelValue:t.current,"onUpdate:modelValue":e=>t.current=e,total:t.count,onChange:v.onPageChanged},null,8,["page-size","modelValue","onUpdate:modelValue","total","onChange"])])),_:2},1024)])),_:1},8,["collection","where","orderby","page-size","page-current","options"])])),_:1})])),_:1})):(s(),i(b,{key:1,class:"page-loading",style:I(_.containerTop)},{default:n((()=>[$("i",{class:"uni-icon_toast uni-loading"})])),_:1},8,["style"]))])),_:1})}],["__scopeId","data-v-a55f3636"]]);export{Y as default};