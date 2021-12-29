var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o;import{a1 as i,a4 as a,E as l,d as c,r as s,b as u,a5 as d,y as f,A as p,j as y,a6 as h,e as v,c as m,g as b,s as g,m as k,v as w,k as E,I as x,G as S,p as C,f as T}from"./vendor.c9ee9e3e.js";import{_}from"./index.14b06000.js";var A,O={exports:{}};
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */A=function(){return function(){var e={134:function(e,t,n){n.d(t,{default:function(){return w}});var o=n(279),r=n.n(o),i=n(370),a=n.n(i),l=n(817),c=n.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}var t,n,o;return t=e,n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var t=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(t,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,t=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(t),this.selectedText=c()(t),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=c()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==s(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}],n&&u(t.prototype,n),o&&u(t,o),e}(),f=d;function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b(e);if(t){var r=b(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,n,o,r=v(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=r.call(this)).resolveOptions(t),n.listenClick(e),n}return t=i,n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new f({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return g("action",e)}},{key:"defaultTarget",value:function(e){var t=g("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return g("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],o=[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}],n&&y(t.prototype,n),o&&y(t,o),i}(r()),w=k},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,n){var o=n(828);function r(e,t,n,o,r){var a=i.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function i(e,t,n,r){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=function(e,t,n,o,i){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,o,i)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var o=n(879),r=n(438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(o.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(o.string(e))return function(e,t,n){return r(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(e),o.removeAllRanges(),o.addRange(r),t=o.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function r(){o.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],r=[];if(o&&t)for(var i=0,a=o.length;i<a;i++)o[i].fn!==t&&o[i].fn._!==t&&r.push(o[i]);return r.length?n[e]=r:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}return n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(134)}().default};var j=a(O.exports=A());const V=(e,t,n)=>{const o=new j(t.target,{text:()=>e});o.on("success",(()=>{var e,t;t=null!=(e=null==n?void 0:n.successTip)?e:"copy success",l.ElMessage({message:t,type:"success",duration:1500}),o.destroy()})),o.on("error",(()=>{var e,t;t=null!=(e=null==n?void 0:n.failedTip)?e:"copy success",l.ElMessage({message:t,type:"error"}),o.destroy()}))};if(!j)throw new Error("you should npm install `clipboard` --save at first ");const L=c({name:"RichText",components:{},directives:{clip:{beforeMount(){},mounted(e,t){const n=e,o=new j(n,{text:()=>t.value,action:()=>"cut"===t.arg?"cut":"copy"});o.on("success",(t=>{console.log(t);const n=e.vClipSuccess;n&&n(t)})),o.on("error",(t=>{console.log(t);const n=e.vClipFailure;n&&n(t)})),n.vClipboard=o},beforeUpdate(){},updated(e,t){const n=e;"success"===t.arg?n.vClipSuccess=t.value:"error"===t.arg?n.vClipFailure=t.value:(null==n?void 0:n.vClipboard)&&(n.vClipboard.text=()=>t.value,n.vClipboard.action=()=>"cut"===t.arg?"cut":"copy")},beforeUnmount(){},unmounted(e,t){var n;const o=e;"success"===t.arg?delete o.vClipSuccess:"error"===t.arg?delete o.vClipFailure:(null==(n=null==e?void 0:e.vClipboard)||n.destroy(),delete o.vClipboard)}}},setup(){const e=s("vue3+vite+typescirpt+ElementPlus"),i=new j(".cut-btn");u((()=>{i&&i.on("success",(e=>{l.ElMessage({type:"success",message:"剪切成功"}),e.clearSelection()}))})),d((()=>{i.destroy()}));const a=f({tableData:[{province:"上海市",city:"浦东新区",name:"王小虎1",address:"上海市普陀区金沙江路 1518 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎2",address:"上海市普陀区金沙江路 1517 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎3",address:"上海市普陀区金沙江路 1519 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎4",address:"上海市普陀区金沙江路 1516 弄",edit:!0}]});return((e,i)=>{for(var a in i||(i={}))n.call(i,a)&&r(e,a,i[a]);if(t)for(var a of t(i))o.call(i,a)&&r(e,a,i[a]);return e})({handleCopyInput:(e,t)=>{V(e,t,{successTip:"复制成功",failedTip:"复制失败"})},inputContent:e,handleAddRecord:()=>{a.tableData.push({province:"",city:"",name:"",address:"",edit:!0})},handleEdit:(e,t)=>{console.log(e,t),a.tableData[e].edit=!0},handleSave:(e,t)=>(console.log(e,t),(e=>Object.keys(e).some((t=>""===e[t])))(t)?(l.ElMessage.warning("保存前请完善信息！"),!1):(a.tableData[e].edit=!1,a.tableData[e]=t,!0)),handleDelete:(e,t)=>{console.log(e,t),a.tableData.splice(e,1)}},p(a))}}),R=e=>(C("data-v-22d6b268"),e=e(),T(),e),M={class:"copy-container"},P={class:"info"},F=x("文本复制"),U=R((()=>b("span",{style:{"text-align":"left"}},"文本复制常用于多数据拼接或者长文本内容复制场景。",-1))),H={class:"grid-content bg-purple-dark"},D={style:{"text-align":"left"}},I=R((()=>b("span",null,"长文本内容复制场景",-1))),N={class:"section"},z=x("复制"),q={class:"grid-content bg-purple-dark"},$={style:{"text-align":"left"}},Y=R((()=>b("span",null,"多数据拼接复制场景",-1))),G={key:1,class:"name-wrapper"},X={key:1},B={key:1},J={key:1},K=x("保存"),Q=x("复制"),W={style:{margin:"5px"}},Z=x("+ 新增记录");var ee=_(L,[["render",function(e,t,n,o,r,i){const a=y("el-divider"),l=y("el-input"),c=y("el-button"),s=y("el-card"),u=y("el-col"),d=y("el-row"),f=y("el-tag"),p=y("el-popover"),C=y("el-table-column"),T=y("el-table"),_=h("clip");return v(),m("div",M,[b("div",P,[g(a,{"content-position":"left"},{default:k((()=>[F])),_:1}),U]),b("div",null,[g(d,null,{default:k((()=>[g(u,{offset:1,span:22},{default:k((()=>[b("div",H,[g(s,{class:"box-card"},{default:k((()=>[b("div",D,[I,g(a)]),b("div",N,[g(l,{id:"textarea",modelValue:e.inputContent,"onUpdate:modelValue":t[0]||(t[0]=t=>e.inputContent=t),style:{width:"70%",margin:"0px 20px"},type:"textarea",rows:2,placeholder:"请输入内容"},null,8,["modelValue"]),g(c,{size:"medium",type:"success",plain:"",onClick:t[1]||(t[1]=t=>e.handleCopyInput(e.inputContent,t))},{default:k((()=>[z])),_:1})])])),_:1})])])),_:1})])),_:1}),g(d,null,{default:k((()=>[g(u,{offset:1,span:22},{default:k((()=>[b("div",q,[g(s,{class:"box-card"},{default:k((()=>[b("div",$,[Y,g(a)]),g(T,{data:e.tableData,style:{width:"100%"}},{default:k((()=>[g(C,{label:"姓名",width:"180"},{default:k((e=>[g(p,{effect:"light",trigger:"hover",placement:"top"},{default:k((()=>[b("p",null,"姓名: "+w(e.row.name),1),b("p",null,"住址: "+w(e.row.address),1)])),reference:k((()=>[e.row.edit?(v(),E(l,{key:0,modelValue:e.row.name,"onUpdate:modelValue":t=>e.row.name=t},null,8,["modelValue","onUpdate:modelValue"])):(v(),m("div",G,[g(f,{size:"medium"},{default:k((()=>[x(w(e.row.name),1)])),_:2},1024)]))])),_:2},1024)])),_:1}),g(C,{prop:"province",label:"省份",width:"120"},{default:k((e=>[e.row.edit?(v(),E(l,{key:0,modelValue:e.row.province,"onUpdate:modelValue":t=>e.row.province=t},null,8,["modelValue","onUpdate:modelValue"])):(v(),m("span",X,w(e.row.province),1))])),_:1}),g(C,{prop:"city",label:"市区",width:"120"},{default:k((e=>[e.row.edit?(v(),E(l,{key:0,modelValue:e.row.city,"onUpdate:modelValue":t=>e.row.city=t},null,8,["modelValue","onUpdate:modelValue"])):(v(),m("span",B,w(e.row.city),1))])),_:1}),g(C,{prop:"address",label:"详细地址"},{default:k((e=>[e.row.edit?(v(),E(l,{key:0,modelValue:e.row.address,"onUpdate:modelValue":t=>e.row.address=t},null,8,["modelValue","onUpdate:modelValue"])):(v(),m("span",J,w(e.row.address),1))])),_:1}),g(C,{label:"操作",width:"200"},{default:k((t=>[t.row.edit?(v(),E(c,{key:0,size:"medium",type:"success",plain:"",icon:"el-icon-check",onClick:n=>e.handleSave(t.$index,t.row)},{default:k((()=>[K])),_:2},1032,["onClick"])):S((v(),E(c,{key:1,size:"medium",type:"info",icon:"el-icon-copy",plain:""},{default:k((()=>[Q])),_:2},1024)),[[_,`姓名:${t.row.name},详细地址:${t.row.address}`,"copy"]])])),_:1})])),_:1},8,["data"]),b("div",W,[g(c,{onClick:e.handleAddRecord},{default:k((()=>[Z])),_:1},8,["onClick"])])])),_:1})])])),_:1})])),_:1})])])}],["__scopeId","data-v-22d6b268"]]);export{ee as default};
