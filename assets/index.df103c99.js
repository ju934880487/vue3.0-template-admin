var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,n=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&d(e,t,a[t]);if(l)for(var t of l(a))s.call(a,t)&&d(e,t,a[t]);return e},r=(e,l)=>a(e,t(l));import{_ as u}from"./lodash.43692fab.js";import{r as i,_ as c}from"./index.14b06000.js";import{y as p,d as m,j as f,e as _,c as b,s as k,m as v,k as y,v as j,I as w,g as I,r as g,A as V,w as T,i as x,F as L,t as P,n as h,aK as M,p as S,f as C}from"./vendor.c9ee9e3e.js";const U={class:"task-table"},O={key:1},N={key:1},E={key:1},z=w("保存"),D=w("编辑"),A=w("删除"),$={class:"task-table__add"},q=w("+ 新增任务");var B=c(m({props:{data:null,status:null},emits:["updateTask","modifyTaskEdit","addProjectTask","deleteProjectTask"],setup(e,{emit:a}){function t(){a("addProjectTask")}return(l,o)=>{const s=f("el-input"),d=f("el-table-column"),u=f("el-option"),i=f("el-select"),c=f("el-tag"),p=f("el-button"),m=f("el-popconfirm"),g=f("el-table");return _(),b("div",U,[k(g,{data:e.data,style:{width:"100%"}},{default:v((()=>[k(d,{prop:"taskName",label:"任务名称"},{default:v((e=>[e.row.edit?(_(),y(s,{key:0,modelValue:e.row.taskName,"onUpdate:modelValue":a=>e.row.taskName=a},null,8,["modelValue","onUpdate:modelValue"])):(_(),b("span",O,j(e.row.taskName),1))])),_:1}),k(d,{prop:"developTime",label:"开发工时"},{default:v((e=>[e.row.edit?(_(),y(s,{key:0,modelValue:e.row.developTime,"onUpdate:modelValue":a=>e.row.developTime=a},null,8,["modelValue","onUpdate:modelValue"])):(_(),b("span",N,j(e.row.developTime),1))])),_:1}),k(d,{prop:"developMember",label:"开发人"},{default:v((e=>[e.row.edit?(_(),y(s,{key:0,modelValue:e.row.developMember,"onUpdate:modelValue":a=>e.row.developMember=a},null,8,["modelValue","onUpdate:modelValue"])):(_(),b("span",E,j(e.row.developMember),1))])),_:1}),k(d,{prop:"taskStatus",label:"任务状态"},{default:v((a=>{var t;return[a.row.edit?(_(),y(i,{key:0,modelValue:a.row.taskStatus,"onUpdate:modelValue":e=>a.row.taskStatus=e,placeholder:"选择任务状态"},{default:v((()=>[k(u,{label:"准备阶段",value:"preparation"}),k(u,{label:"开发中",value:"development"}),k(u,{label:"开发完成",value:"completed"}),k(u,{label:"测试阶段",value:"test"}),k(u,{label:"待发布",value:"released"})])),_:2},1032,["modelValue","onUpdate:modelValue"])):(_(),y(c,{key:1,type:null==(t=e.status.get(`${a.row.taskStatus}`))?void 0:t.type},{default:v((()=>{var t;return[w(j(null==(t=e.status.get(`${a.row.taskStatus}`))?void 0:t.text),1)]})),_:2},1032,["type"]))]})),_:1}),k(d,{label:"操作",width:"200"},{default:v((e=>[e.row.edit?(_(),y(p,{key:0,size:"mini",type:"success",icon:"el-icon-check",onClick:t=>function(e){console.log(e);const t=e.taskId;a("updateTask",t,r(n({},e),{edit:!1}))}(e.row)},{default:v((()=>[z])),_:2},1032,["onClick"])):(_(),y(p,{key:1,size:"mini",icon:"el-icon-edit",onClick:t=>function(e){console.log(e);const t=e.taskId;a("modifyTaskEdit",t,!0)}(e.row)},{default:v((()=>[D])),_:2},1032,["onClick"])),k(m,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:t=>function(e){const t=e.taskId;a("deleteProjectTask",t)}(e.row)},{reference:v((()=>[k(p,{size:"mini",icon:"el-icon-delete",type:"danger"},{default:v((()=>[A])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),I("div",$,[k(p,{onClick:t},{default:v((()=>[q])),_:1})])])}}}),[["__scopeId","data-v-2f66a94a"]]);const F=e=>(S("data-v-10a2a584"),e=e(),C(),e),K={class:"board"},G={class:"board__info"},H=w("项目看板"),J=F((()=>I("span",null,"项目看板主要应用场景：项目的任务管理，任务进度管理等。",-1))),Q={class:"board__project"},R=F((()=>I("div",{class:"board__project-title"},"项目概览",-1))),W={class:"board__project-list"},X=["onClick"],Y={class:"board__detail"},Z=F((()=>I("div",{class:"board__detail-title"},"项目详情",-1))),ee={key:0,class:"board__detail-empty"},ae={key:1,class:"board__detail-content"},te={class:"board__detail-head"},le=F((()=>I("span",{class:"board__detail-name"},"项目名称",-1))),oe=F((()=>I("span",{class:"board__detail-name"},"负责人",-1))),se=F((()=>I("span",{class:"board__detail-name"},"开发工时",-1))),de=F((()=>I("span",{class:"board__detail-name"},"项目状态",-1))),ne=F((()=>I("span",{class:"board__detail-name"},"任务总数",-1))),re=F((()=>I("span",{class:"board__detail-name"},"任务进度",-1))),ue=w("： "),ie={class:"board__detail-search"},ce=w("查询"),pe={class:"board__detail-table"},me=w("列表");var fe=c(m({setup(e){const a=p({taskStatus:null,developMember:""}),t=new Map([["preparation",{text:"准备阶段",type:"info"}],["development",{text:"开发中",type:""}],["completed",{text:"开发完成",type:"success"}],["test",{text:"测试阶段",type:"danger"}],["released",{text:"待发布",type:"warning"}]]),l=g([]),o=g("table"),{store:s,updatedProjectInfo:d,addProjectTask:c,deleteTask:m,modifyTaskEdit:S}=(()=>{const e=p({data:[],target:{}});return i({url:"/api/project/list",method:"get",json:!0}).then((a=>{0===a.status&&(e.data=a.data,e.target=a.data[0])})),{store:e,updatedProjectInfo:function(a,t,l){const o=u.findIndex(e.data,["projectId",a]),s=e.data[o].taskList,d=u.map(s,((e,a)=>e.taskId===t?l:e));e.data[o].taskList=d},addProjectTask:function(a,t){const l=u.findIndex(e.data,["projectId",a]),o=e.data[l].taskList;e.data[l].taskList=u.concat(o,t,[])},deleteTask:function(a,t){const l=u.findIndex(e.data,["projectId",a]),o=e.data[l].taskList,s=u.map(o,((e,a)=>{if(e.taskId!==t)return e})).filter((e=>e));e.data[l].taskList=s},getProjectDetail:function(a){return u.find(e.data,(e=>e.projectId===a))},modifyTaskEdit:function(a,t,l=!1){const o=u.findIndex(e.data,["projectId",a]),s=e.data[o].taskList,d=u.map(s,((e,a)=>e.taskId===t?r(n({},e),{edit:l}):e));e.data[o].taskList=d}}})(),{data:C,target:U}=V(s);T((()=>U.value),(e=>{l.value=e.taskList}),{deep:!0});const O=x((()=>{const e=u.countBy(U.value.taskList,(e=>e.taskStatus));return u.map(Object.entries(e),(([e,a])=>{const l=t.get(e);return r(n({},l),{count:a})}))})),N=x((()=>{const e=u.map(U.value.taskList,(e=>e.developMember)).filter((e=>e));return u.uniq(e)}));function E(){console.log("search!",a);const e=a.taskStatus,t=a.developMember;if(e&&t){const a=u.map(U.value.taskList,(a=>{if(a.developMember===t&&a.taskStatus===e)return a})).filter((e=>e));l.value=a}else if(e){const a=u.map(U.value.taskList,(a=>{if(a.taskStatus===e)return a})).filter((e=>e));l.value=a}else if(t){const e=u.map(U.value.taskList,(e=>{if(e.developMember===t)return e})).filter((e=>e));l.value=e}else l.value=U.value.taskList}function z(e,a){const t=U.value.projectId;S(t,e,a)}function D(e,a){const t=U.value.projectId;d(t,e,a)}function A(){const e=U.value.projectId,a={taskName:"",developTime:"",developMember:"",taskStatus:"preparation",edit:!0,taskId:Date.now()};c(e,a)}function $(e){const a=U.value.projectId;m(a,e)}function q(e){switch(e.paneName){case"table":console.log("表格形式");break;case"列表形式":console.log("列表形式")}}return(e,s)=>{const d=f("el-divider"),n=f("el-avatar"),r=f("el-col"),u=f("el-row"),i=f("el-card"),c=f("el-tag"),p=f("el-option"),m=f("el-select"),g=f("el-form-item"),V=f("el-button"),T=f("el-form"),x=f("el-tab-pane"),S=f("el-tabs");return _(),b("div",K,[I("div",G,[k(d,{"content-position":"left"},{default:v((()=>[H])),_:1}),J]),I("div",Q,[R,I("div",W,[(_(!0),b(L,null,P(M(C),((e,a)=>(_(),b("div",{key:a,class:h(["board__project-item",{"board__project-item--active":M(U).projectId===e.projectId}]),onClick:a=>{return t=e,void(U.value=t);var t}},[k(i,null,{default:v((()=>[k(u,null,{default:v((()=>[k(r,{span:5},{default:v((()=>[k(n,{class:"board__project-avatar",size:90},{default:v((()=>[w(j(e.projectName.substr(0,1)),1)])),_:2},1024)])),_:2},1024),k(r,{span:18,style:{"margin-left":"6px",color:"#7a848d"}},{default:v((()=>[I("p",null,"项目名称："+j(e.projectName),1),I("p",null,"总负责人："+j(e.principal),1),I("p",null,"开发耗时："+j(e.timeConsuming),1),I("p",null,"项目状态: "+j(e.status),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)],10,X)))),128))])]),I("div",Y,[Z,k(i,{class:"board__detail-wrap"},{default:v((()=>[M(U).projectId?(_(),b("div",ae,[I("div",te,[k(u,null,{default:v((()=>[k(r,{span:5},{default:v((()=>[le,w("："+j(M(U).projectName),1)])),_:1}),k(r,{span:5},{default:v((()=>[oe,w("："+j(M(U).principal),1)])),_:1}),k(r,{span:5},{default:v((()=>[se,w("："+j(M(U).timeConsuming),1)])),_:1}),k(r,{span:5},{default:v((()=>[de,w("："+j(M(U).status),1)])),_:1})])),_:1}),k(u,{class:"board__detail-task"},{default:v((()=>[k(r,{span:5},{default:v((()=>[ne,w("："+j(M(U).taskList.length),1)])),_:1}),k(r,{span:18},{default:v((()=>[re,ue,(_(!0),b(L,null,P(M(O),((e,a)=>(_(),y(c,{key:a,class:"board__detail-tag",type:e.type},{default:v((()=>[w(j(e.text)+": "+j(e.count),1)])),_:2},1032,["type"])))),128))])),_:1})])),_:1})]),k(S,{modelValue:o.value,"onUpdate:modelValue":s[2]||(s[2]=e=>o.value=e),type:"card",onTabClick:q},{default:v((()=>[k(x,{label:"表格模式",name:"table"},{default:v((()=>[I("div",ie,[k(T,{inline:!0,model:M(a)},{default:v((()=>[k(g,{label:"开发人"},{default:v((()=>[k(m,{clearable:"",modelValue:M(a).developMember,"onUpdate:modelValue":s[0]||(s[0]=e=>M(a).developMember=e),placeholder:"选择任务开发者"},{default:v((()=>[(_(!0),b(L,null,P(M(N),((e,a)=>(_(),y(p,{key:a,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),k(g,{label:"任务状态"},{default:v((()=>[k(m,{clearable:"",modelValue:M(a).taskStatus,"onUpdate:modelValue":s[1]||(s[1]=e=>M(a).taskStatus=e),placeholder:"选择任务状态"},{default:v((()=>[k(p,{label:"准备阶段",value:"preparation"}),k(p,{label:"开发中",value:"development"}),k(p,{label:"开发完成",value:"completed"}),k(p,{label:"测试阶段",value:"test"}),k(p,{label:"待发布",value:"released"})])),_:1},8,["modelValue"])])),_:1}),k(g,null,{default:v((()=>[k(V,{type:"primary",onClick:E},{default:v((()=>[ce])),_:1})])),_:1})])),_:1},8,["model"])]),I("div",pe,[k(B,{data:l.value,status:M(t),onUpdateTask:D,onModifyTaskEdit:z,onAddProjectTask:A,onDeleteProjectTask:$},null,8,["data","status"])])])),_:1}),k(x,{label:"列表模式",name:"column"},{default:v((()=>[me])),_:1})])),_:1},8,["modelValue"])])):(_(),b("div",ee,"请选择项目，查看项目详情！！！"))])),_:1})])])}}}),[["__scopeId","data-v-10a2a584"]]);export{fe as default};
