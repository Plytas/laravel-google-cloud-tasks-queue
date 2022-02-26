var B=Object.defineProperty;var L=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var U=(o,n,t)=>n in o?B(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,q=(o,n)=>{for(var t in n||(n={}))D.call(n,t)&&U(o,t,n[t]);if(L)for(var t of L(n))E.call(n,t)&&U(o,t,n[t]);return o};var T=(o,n,t)=>new Promise((r,s)=>{var a=c=>{try{i(t.next(c))}catch(u){s(u)}},l=c=>{try{i(t.throw(c))}catch(u){s(u)}},i=c=>c.done?r(c.value):Promise.resolve(c.value).then(a,l);i((t=t.apply(o,n)).next())});import{r as k,o as d,c as _,a as h,w as f,n as v,F as y,b,d as e,e as x,t as p,f as F,g as O,u as j,h as V,i as H,j as z,k as Q,v as K,l as W,m as G,p as $,q as w,s as M,x as J,y as X,z as Y,A as Z,B as ee,C as te}from"./vendor.f52c9be3.js";const se=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}};se();var C=(o,n)=>{const t=o.__vccOpts||o;for(const[r,s]of n)t[r]=s;return t};const oe={},ne=b("Dashboard "),ae=b("Recent "),le=b("Queued "),re=b("Failed ");function ie(o,n){var r,s,a,l,i,c,u,m,g;const t=k("router-link");return d(),_(y,null,[h(t,{to:{name:"home"},class:"block p-4 rounded mb-2 cursor-pointer"},{default:f(()=>[ne]),_:1}),h(t,{to:{name:"recent"},class:v(["block p-4 rounded mb-2 cursor-pointer",{"router-link-active":((a=(s=(r=o.$route)==null?void 0:r.matched[0])==null?void 0:s.meta)==null?void 0:a.route)==="recent"}])},{default:f(()=>[ae]),_:1},8,["class"]),h(t,{to:{name:"queued"},class:v(["block p-4 rounded mb-2 cursor-pointer",{"router-link-active":((c=(i=(l=o.$route)==null?void 0:l.matched[0])==null?void 0:i.meta)==null?void 0:c.route)==="queued"}])},{default:f(()=>[le]),_:1},8,["class"]),h(t,{to:{name:"failed"},class:v(["block p-4 rounded mb-2",{"router-link-active":((g=(m=(u=o.$route)==null?void 0:u.matched[0])==null?void 0:m.meta)==null?void 0:g.route)==="failed"}])},{default:f(()=>[re]),_:1},8,["class"])],64)}var ce=C(oe,[["render",ie]]);const ue={components:{Menu:ce}},de={class:"flex"},pe={class:"basis-auto w-[250px] shrink-0 bg-white p-6 min-h-screen"},_e={class:"flex-1 max-w-[calc(100%-250px)] p-6"};function he(o,n,t,r,s,a){const l=k("Menu"),i=k("router-view");return d(),_("div",de,[e("aside",pe,[h(l)]),e("div",_e,[h(i)])])}var me=C(ue,[["render",he]]);const fe=e("h3",{class:"text-3xl mb-4"},"All tasks",-1),xe={class:"grid grid-cols-3 gap-4"},ve=["textContent"],ye=e("span",{class:"text-gray-600"},"this minute",-1),ge=["textContent"],be=e("span",{class:"text-gray-600"},"this hour",-1),we=["textContent"],ke=e("span",{class:"text-gray-600"},"today",-1),$e=e("h3",{class:"text-3xl mb-4 mt-8"},"Failed tasks",-1),Ce={class:"grid grid-cols-3 gap-4"},qe=["textContent"],Te=e("span",{class:"text-gray-600"},"this minute",-1),Se=["textContent"],Ae=e("span",{class:"text-gray-600"},"this hour",-1),Ie=["textContent"],Re=e("span",{class:"text-gray-600"},"today",-1),Le={setup(o){const n=x({recent:{this_minute:"...",this_hour:"...",today:"..."},failed:{this_minute:"...",this_hour:"...",today:"..."}});return fetch("http://localhost:8000/cloud-tasks-api/dashboard").then(t=>t.json()).then(t=>n.value=t),(t,r)=>{const s=k("router-link");return d(),_(y,null,[fe,e("div",xe,[h(s,{to:{name:"recent",query:{time:`${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`}},class:"bg-white rounded-lg p-6"},{default:f(()=>{var a,l;return[e("span",{class:"block text-4xl",textContent:p((l=(a=n.value)==null?void 0:a.recent)==null?void 0:l.this_minute)},null,8,ve),ye]}),_:1},8,["to"]),h(s,{to:{name:"recent",query:{hour:new Date().getUTCHours()}},class:"bg-white rounded-lg p-6"},{default:f(()=>{var a,l;return[e("span",{class:"block text-4xl",textContent:p((l=(a=n.value)==null?void 0:a.recent)==null?void 0:l.this_hour)},null,8,ge),be]}),_:1},8,["to"]),h(s,{to:{name:"recent"},class:"bg-white rounded-lg p-6"},{default:f(()=>{var a,l;return[e("span",{class:"block text-4xl",textContent:p((l=(a=n.value)==null?void 0:a.recent)==null?void 0:l.this_day)},null,8,we),ke]}),_:1})]),$e,e("div",Ce,[h(s,{to:{name:"failed",query:{time:`${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`}},class:"bg-white rounded-lg p-6"},{default:f(()=>{var a,l;return[e("span",{class:"block text-4xl",textContent:p((l=(a=n.value)==null?void 0:a.failed)==null?void 0:l.this_minute)},null,8,qe),Te]}),_:1},8,["to"]),h(s,{to:{name:"failed",query:{hour:new Date().getUTCHours()}},class:"bg-white rounded-lg p-6"},{default:f(()=>{var a,l;return[e("span",{class:"block text-4xl",textContent:p((l=(a=n.value)==null?void 0:a.failed)==null?void 0:l.this_hour)},null,8,Se),Ae]}),_:1},8,["to"]),h(s,{to:{name:"failed"},class:"bg-white rounded-lg p-6"},{default:f(()=>{var a,l;return[e("span",{class:"block text-4xl",textContent:p((l=(a=n.value)==null?void 0:a.failed)==null?void 0:l.this_day)},null,8,Ie),Re]}),_:1})])],64)}}};function S(t){return T(this,arguments,function*(o,n={}){const r=function(l){return T(this,null,function*(){const i=new URL(window.location.href),c=new URLSearchParams(i.search);for(const[u,m]of Object.entries(n))c.append(u,m);fetch(`http://localhost:8000/cloud-tasks-api/tasks?${c.toString()}&test=oke`).then(u=>u.json()).then(u=>{l.value=u})})};r(o);let s=setInterval(()=>r(o),3e3);F(function(){setTimeout(()=>r(o))});const a=function(){document.visibilityState==="visible"?(r(o),clearInterval(s),s=setInterval(()=>r(o),3e3)):document.visibilityState==="hidden"&&clearInterval(s)};document.addEventListener("visibilitychange",a),O(()=>{clearInterval(s),document.removeEventListener("visibilitychange",a)})})}const N={props:{status:String,classes:{type:Array,default:[]}},setup(o){function n(t){return t.charAt(0).toUpperCase()+t.slice(1)}return(t,r)=>(d(),_("span",{class:v(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full",[`task-${o.status}`,...o.classes]])},p(n(o.status)),3))}},Ue={},Ve=e("tr",null,[e("td",{colspan:"7",class:"px-6 py-4 bg-white"},[e("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"indigo","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"indigo",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1),Me=[Ve];function Ne(o,n){return d(),_("tbody",null,Me)}var Pe=C(Ue,[["render",Ne]]);const Be=e("label",{for:"queue",class:"block mb-2 font-medium"},"Queue",-1),De=["onKeyup"],Ee=e("label",{for:"status",class:"block mb-2 mt-6 font-medium"},"Status",-1),Fe=W('<option>List default</option><option value="queued">Queued</option><option value="running">Running</option><option value="successful">Successful</option><option value="error">Error</option><option value="failed">Failed</option>',6),Oe=[Fe],je={props:{focus:String},setup(o){const n=o,t=j(),r=V(),s=x(!1),a=x(null),l=x(null);function i(){t.push({name:r.name,query:q(q({},a.value.value?{queue:a.value.value}:{}),l.value?{status:l.value}:{})})}function c(u){u===""&&i()}return H(()=>{setTimeout(()=>s.value=!0),n.focus==="queue"&&a.value.focus()}),(u,m)=>(d(),_("div",{class:v(["w-[300px] fixed transition-transform right-0 top-0 p-6 px-6 shadow-2xl h-screen bg-white",{"translate-x-[300px]":s.value===!1}])},[Be,e("input",{type:"text",name:"queue",id:"queue",ref_key:"queue",ref:a,class:"bg-white py-2 px-3 w-full rounded border",onKeyup:[z(i,["enter"]),m[0]||(m[0]=g=>c(g.target.value))]},null,40,De),Ee,Q(e("select",{name:"status",id:"status","onUpdate:modelValue":m[1]||(m[1]=g=>l.value=g),class:"bg-white py-2 px-3 w-full rounded border"},Oe,512),[[K,l.value]]),e("button",{class:"bg-indigo-500 w-full mt-4 text-indigo-100 rounded py-2",onClick:i}," Apply Filter (or Press Enter) ")],2))}};const He={class:"text-4xl mb-2"},ze={class:"text-lg"},Qe={class:"flex flex-row mt-6"},Ke={class:"flex-1"},We={class:"align-middle"},Ge={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},Je={class:"table-fixed divide-y divide-gray-200 w-full"},Xe={class:"bg-gray-50"},Ye=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[50px]"}," # ",-1),Ze=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-w-xl w-[300px]"}," Name ",-1),et=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px]"}," Status ",-1),tt=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[150px] text-center"}," Attempts ",-1),st=e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[200px]"}," Created ",-1),ot={scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},nt=b(" Queue "),at={class:"inline relative"},lt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"},null,-1),rt=[lt],it=e("th",{scope:"col",class:"relative px-6 py-3"},[e("span",{class:"sr-only"},"Edit")],-1),ct={key:1},ut=e("tr",null,[e("td",{colspan:"7",class:"px-6 py-4 bg-white"},"No results.")],-1),dt=[ut],pt={class:"bg-white divide-y divide-gray-200"},_t=["onClick"],ht={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-900"},mt={class:"px-6 py-4 whitespace-nowrap text-ellipsis text-sm text-gray-900"},ft={class:"px-6 py-4 whitespace-nowrap"},xt={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"},vt={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},yt={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},gt=e("td",{class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},[e("a",{href:"#",class:"text-indigo-600 hover:text-indigo-900"},"View")],-1),A={props:{title:String,description:String,tasks:Array},setup(o){const n=o,t=x([]),r=x([]),s=x({visible:!1,focus:null});function a(l){t.value.push(l.id),setTimeout(()=>{t.value.splice(t.value.indexOf(l.id),1)},1e3)}return G(()=>n.tasks,(l,i)=>{var c;if(!!i){r.value=[],i.map((u,m)=>{r[u.id]=m});for(const u of l)(r[u.id]===void 0||((c=i[r[u.id]])==null?void 0:c.status)!==u.status)&&a(u)}}),(l,i)=>(d(),_(y,null,[e("h1",He,p(o.title),1),e("p",ze,p(o.description),1),e("div",Qe,[e("div",Ke,[e("div",We,[e("div",Ge,[e("table",Je,[e("thead",Xe,[e("tr",null,[Ye,Ze,et,tt,st,e("th",ot,[nt,e("div",at,[(d(),_("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 inline transition-transform hover:scale-[1.1] cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:i[0]||(i[0]=()=>{s.value.visible=!s.value.visible,s.value.focus=s.value.visible?"queue":null})},rt))])]),it])]),o.tasks===null?(d(),$(Pe,{key:0})):w("",!0),o.tasks&&o.tasks.length===0?(d(),_("tbody",ct,dt)):w("",!0),e("tbody",pt,[(d(!0),_(y,null,M(o.tasks,c=>(d(),_("tr",{class:v(["cursor-pointer hover:bg-indigo-100/10 transition-colors",{"bg-blue-300/30":t.value.includes(c.id)}]),onClick:u=>l.$router.push({name:`${l.$route.name}-task`,params:{uuid:c.uuid}})},[e("td",ht,p(c.id),1),e("td",mt,p(c.name.substring(0,30))+p(c.name.length>30?"...":""),1),e("td",ft,[h(N,{status:c.status},null,8,["status"])]),e("td",xt,p(c.attempts),1),e("td",vt,p(c.created),1),e("td",yt,p(c.queue),1),gt],10,_t))),256))])])])])])]),s.value.visible?(d(),$(je,{key:0,visible:s.value.visible,focus:s.value.focus},null,8,["visible","focus"])):w("",!0)],64))}},bt={props:{tasks:Array},setup(o){const n=x(null);return S(n,{filter:"recent"}),(t,r)=>(d(),$(A,{title:"Recent tasks",description:"Tasks that have been added or processed in the queue recently.",tasks:n.value},null,8,["tasks"]))}},wt={props:{tasks:Array},setup(o){const n=x(null);return S(n,{status:"queued"}),(t,r)=>(d(),$(A,{title:"Queued tasks",description:"Tasks that have been added to the queue recently.",tasks:n.value},null,8,["tasks"]))}},kt={props:{tasks:Array},setup(o){const n=x(null);return S(n,{filter:"failed"}),(t,r)=>(d(),$(A,{title:"Failed tasks",description:"Tasks that permanently failed after they have reached their max number of attempts.",tasks:n.value},null,8,["tasks"]))}};const $t={class:"absolute flex items-center justify-center w-2 h-2 bg-gray-200 rounded-full -left-1 ring-1 mt-3 ring-white"},Ct={props:{status:String,classes:{type:Array,default:[]}},setup(o){return(n,t)=>(d(),_("span",$t))}};var qt=C(Ct,[["__scopeId","data-v-35155177"]]);const I=o=>(J("data-v-5e0e697d"),o=o(),X(),o),Tt={class:"text-4xl mb-2"},St={class:"flex"},At={class:"basis-[400px] shrink-0 pr-6 w-2/12"},It={class:"flex-initial sticky ml-4 mt-12"},Rt={class:"relative border-l border-gray-200 dark:border-gray-700"},Lt={class:"text-gray-900"},Ut={key:0,class:"bg-blue-100 text-blue-800 text-xs font-medium mr-2 inline-block mb-1 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"},Vt={class:"block mb-2 mt-2 text-xs text-black/70 font-normal leading-none"},Mt={class:"cursor-default"},Nt={class:"basis-auto overflow-x-auto pr-12"},Pt=I(()=>e("h2",{class:"text-2xl"},"Task Exception",-1)),Bt={class:"text-xs p-8 border border-[#ccc/80] bg-white/90 mt-4 rounded overflow-auto no-scroll"},Dt={key:1,class:"mt-12"},Et=I(()=>e("h2",{class:"text-2xl"},"Task Payload",-1)),Ft={class:"text-xs p-8 border border-[#ccc/80] bg-white/90 mt-4 rounded overflow-auto no-scroll"},Ot=I(()=>e("div",{class:"basis-[250px] shrink-0 px-6"},[e("h2",{class:"text-3xl"},"Actions"),e("button",{class:"bg-gray-200 text-black/20 cursor-not-allowed mt-4 w-full rounded px-4 py-2"}," Retry "),e("span",{class:"text-xs text-gray-800 mt-2 inline-block"},"Retrying tasks is not available yet.")],-1)),jt={setup(o){const n=V(),t=x({id:null,status:"loading"});fetch(`http://localhost:8000/cloud-tasks-api/task/${n.params.uuid}`).then(s=>s.json()).then(s=>t.value=s);const r={queued:"Added to the queue",running:"Running",successful:"Successful",error:"An error occurred",failed:"Failed permanently"};return(s,a)=>{const l=k("Popper");return d(),_(y,null,[e("h1",Tt,"Task #"+p(t.value.id),1),h(N,{status:t.value.status,classes:["text-sm"]},null,8,["status"]),e("div",St,[e("div",At,[e("div",It,[e("ol",Rt,[(d(!0),_(y,null,M(t.value.events,(i,c)=>(d(),_("li",{class:v(["ml-10 pt-1 mb-6",[`event-${i.status}`]])},[h(qt,{status:i.status},null,8,["status"]),e("h3",Lt,[b(p(r[i.status]||i.status)+" ",1),e("div",null,[i.queue?(d(),_("span",Ut,p(t.value.queue),1)):w("",!0)])]),h(l,{content:i.datetime,hover:!0,arrow:!0,placement:"right"},{default:f(()=>[e("time",Vt,[e("span",Mt,p(i.diff),1)])]),_:2},1032,["content"])],2))),256))])])]),e("div",Nt,[t.value.exception?(d(),_(y,{key:0},[Pt,e("pre",Bt,p(t.value.exception),1)],64)):w("",!0),t.value.payload?(d(),_("div",Dt,[Et,e("pre",Ft,p(t.value.payload),1)])):w("",!0)]),Ot])],64)}}};var R=C(jt,[["__scopeId","data-v-5e0e697d"]]);const Ht=[{name:"home",path:"/",component:Le},{name:"recent",path:"/recent",component:bt,meta:{route:"recent"}},{name:"recent-task",path:"/recent/:uuid",component:R,meta:{route:"recent"}},{name:"queued",path:"/queued",component:wt,meta:{route:"queued"}},{name:"queued-task",path:"/queued/:uuid",component:R,meta:{route:"queued"}},{name:"failed",path:"/failed",component:kt,meta:{route:"failed"}},{name:"failed-task",path:"/failed/:uuid",component:R,meta:{route:"failed"}}];let P=null;"CloudTasks"in window&&(P=`/${window.CloudTasks.path}`);const zt=Y({history:Z(P),routes:Ht});ee(me).use(zt).component("Popper",te).mount("#app");
