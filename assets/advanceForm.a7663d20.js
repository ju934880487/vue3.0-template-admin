import{d as e,h as l,y as a,r as o,b as d,j as t,e as n,c as i,g as s,s as r,m as u,v as c,k as m,I as p,E as f,p as y,f as b}from"./vendor.c9ee9e3e.js";import{_ as v}from"./index.14b06000.js";const _=e({name:"AdvanceForm",setup(){const e=l(),t=a([{province:"上海市",city:"浦东新区",name:"王小虎1",address:"上海市普陀区金沙江路 1518 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎2",address:"上海市普陀区金沙江路 1517 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎3",address:"上海市普陀区金沙江路 1519 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎4",address:"上海市普陀区金沙江路 1516 弄",edit:!0}]),n=a({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),i=o();d((()=>{console.log("show sizeFormRef.value",i.value)}));return{handleAddRecord:()=>{t.push({province:"",city:"",name:"",address:"",edit:!0})},handleEdit:(e,l)=>{console.log(e,l),t[e].edit=!0},handleSave:(e,l)=>(console.log(e,l),(e=>Object.keys(e).some((l=>""===e[l])))(l)?(f.ElMessage.warning("保存前请完善信息！"),!1):(t[e].edit=!1,t[e]=l,f.ElMessage({type:"success",message:"保存成功"}),!0)),handleDelete:(e,l)=>{console.log(e,l),t.splice(e,1)},tableData:t,handleBack:()=>{e.go(-1)},sizeForm:n,activityForm:i,submitForm:()=>{i.value.validate((e=>e?(f.ElMessage({type:"success",message:"创建成功"}),!0):(console.log("error submit!!"),!1)))},resetForm:()=>{i.value.resetFields()}}}}),g=e=>(y("data-v-444d9465"),e=e(),b(),e),w={class:"FormInfo"},V={class:"info"},h=p("高级表单"),k=g((()=>s("span",{style:{"text-align":"left"}},"高级表单常见于一次性输入和提交大批量数据的场景。",-1))),F={class:"grid-content bg-purple-dark"},z={class:"card-header"},x=g((()=>s("i",{class:"el-icon-arrow-left"},null,-1))),U=p("返回"),C=g((()=>s("span",null,"表单信息",-1))),E=g((()=>s("div",null,null,-1))),j={style:{"text-align":"left"}},D=g((()=>s("span",null,"记录管理",-1))),A={key:1,class:"name-wrapper"},I={key:1},M={key:1},R={key:1},$=p("保存"),B=p("编辑"),S=p("删除"),O={style:{margin:"5px"}},q=p("+ 新增记录"),G={class:"grid-content bg-purple-dark"},H={style:{"text-align":"left"}},J=g((()=>s("span",null,"活动管理",-1))),K=p("-"),L=p("立即创建"),N=p("取消");var P=v(_,[["render",function(e,l,a,o,d,f){const y=t("el-divider"),b=t("el-button"),v=t("el-input"),_=t("el-tag"),g=t("el-popover"),P=t("el-table-column"),Q=t("el-popconfirm"),T=t("el-table"),W=t("el-card"),X=t("el-col"),Y=t("el-row"),Z=t("el-form-item"),ee=t("el-option"),le=t("el-select"),ae=t("el-date-picker"),oe=t("el-time-picker"),de=t("el-checkbox-button"),te=t("el-checkbox-group"),ne=t("el-radio"),ie=t("el-radio-group"),se=t("el-form");return n(),i("div",w,[s("div",V,[r(y,{"content-position":"left"},{default:u((()=>[h])),_:1}),k]),r(Y,null,{default:u((()=>[r(X,{offset:1,span:22},{default:u((()=>[s("div",F,[r(W,{class:"box-card"},{header:u((()=>[s("div",z,[r(b,{class:"button",type:"text",onClick:e.handleBack},{default:u((()=>[x,U])),_:1},8,["onClick"]),C,E])])),default:u((()=>[s("div",j,[D,r(y)]),r(T,{data:e.tableData,style:{width:"100%"}},{default:u((()=>[r(P,{label:"姓名",width:"180"},{default:u((e=>[r(g,{effect:"light",trigger:"hover",placement:"top"},{default:u((()=>[s("p",null,"姓名: "+c(e.row.name),1),s("p",null,"住址: "+c(e.row.address),1)])),reference:u((()=>[e.row.edit?(n(),m(v,{key:0,modelValue:e.row.name,"onUpdate:modelValue":l=>e.row.name=l},null,8,["modelValue","onUpdate:modelValue"])):(n(),i("div",A,[r(_,{size:"medium"},{default:u((()=>[p(c(e.row.name),1)])),_:2},1024)]))])),_:2},1024)])),_:1}),r(P,{prop:"province",label:"省份",width:"120"},{default:u((e=>[e.row.edit?(n(),m(v,{key:0,modelValue:e.row.province,"onUpdate:modelValue":l=>e.row.province=l},null,8,["modelValue","onUpdate:modelValue"])):(n(),i("span",I,c(e.row.province),1))])),_:1}),r(P,{prop:"city",label:"市区",width:"120"},{default:u((e=>[e.row.edit?(n(),m(v,{key:0,modelValue:e.row.city,"onUpdate:modelValue":l=>e.row.city=l},null,8,["modelValue","onUpdate:modelValue"])):(n(),i("span",M,c(e.row.city),1))])),_:1}),r(P,{prop:"address",label:"详细地址"},{default:u((e=>[e.row.edit?(n(),m(v,{key:0,modelValue:e.row.address,"onUpdate:modelValue":l=>e.row.address=l},null,8,["modelValue","onUpdate:modelValue"])):(n(),i("span",R,c(e.row.address),1))])),_:1}),r(P,{label:"操作",width:"200"},{default:u((l=>[l.row.edit?(n(),m(b,{key:0,size:"mini",type:"success",icon:"el-icon-check",onClick:a=>e.handleSave(l.$index,l.row)},{default:u((()=>[$])),_:2},1032,["onClick"])):(n(),m(b,{key:1,size:"mini",icon:"el-icon-edit",onClick:a=>e.handleEdit(l.$index,l.row)},{default:u((()=>[B])),_:2},1032,["onClick"])),r(Q,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:a=>e.handleDelete(l.$index,l.row)},{reference:u((()=>[r(b,{size:"mini",icon:"el-icon-delete",type:"danger"},{default:u((()=>[S])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),s("div",O,[r(b,{onClick:e.handleAddRecord},{default:u((()=>[q])),_:1},8,["onClick"])])])),_:1})])])),_:1})])),_:1}),r(Y,null,{default:u((()=>[r(X,{offset:1,span:22},{default:u((()=>[s("div",G,[r(W,{class:"box-card"},{default:u((()=>[s("div",H,[J,r(y)]),r(se,{ref:"activityForm",style:{"text-align":"left"},model:e.sizeForm,"label-width":"80px",size:"mini"},{default:u((()=>[r(Z,{label:"活动名称"},{default:u((()=>[r(v,{modelValue:e.sizeForm.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.sizeForm.name=l)},null,8,["modelValue"])])),_:1}),r(Z,{label:"活动区域"},{default:u((()=>[r(le,{modelValue:e.sizeForm.region,"onUpdate:modelValue":l[1]||(l[1]=l=>e.sizeForm.region=l),placeholder:"请选择活动区域"},{default:u((()=>[r(ee,{label:"区域一",value:"shanghai"}),r(ee,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),r(Z,{label:"活动时间"},{default:u((()=>[r(X,{span:11},{default:u((()=>[r(ae,{modelValue:e.sizeForm.date1,"onUpdate:modelValue":l[2]||(l[2]=l=>e.sizeForm.date1=l),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),r(X,{class:"line",span:2},{default:u((()=>[K])),_:1}),r(X,{span:11},{default:u((()=>[r(oe,{modelValue:e.sizeForm.date2,"onUpdate:modelValue":l[3]||(l[3]=l=>e.sizeForm.date2=l),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),r(Z,{label:"活动性质"},{default:u((()=>[r(te,{modelValue:e.sizeForm.type,"onUpdate:modelValue":l[4]||(l[4]=l=>e.sizeForm.type=l)},{default:u((()=>[r(de,{label:"美食/餐厅线上活动",name:"type"}),r(de,{label:"地推活动",name:"type"}),r(de,{label:"线下主题活动",name:"type"})])),_:1},8,["modelValue"])])),_:1}),r(Z,{label:"特殊资源"},{default:u((()=>[r(ie,{modelValue:e.sizeForm.resource,"onUpdate:modelValue":l[5]||(l[5]=l=>e.sizeForm.resource=l),size:"medium"},{default:u((()=>[r(ne,{border:"",label:"线上品牌商赞助"}),r(ne,{border:"",label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),r(Z,{size:"large"},{default:u((()=>[r(b,{type:"primary",onClick:e.submitForm},{default:u((()=>[L])),_:1},8,["onClick"]),r(b,null,{default:u((()=>[N])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])])),_:1})])),_:1})])}],["__scopeId","data-v-444d9465"]]);export{P as default};
