import{Q as f,a as s}from"./QItem.48060d72.js";import{Q as g}from"./QSeparator.c879f8fa.js";import{Q as h}from"./QPage.d8614fb3.js";import{a9 as k,aK as w,as as y,j as r,z as d,A as e,l as n,G as m,d as a,ao as l,k as x,au as v,at as c,F as Q,aI as p}from"./index.2cc004d0.js";import"./use-dark.e0944db6.js";const b={class:"container"},B=n("h6",{style:{"font-weight":"600"}},"\u53C3\u8207\u63EA\u5718\u7D00\u9304",-1),D={style:{"max-width":"100%"}},S={class:"q-pa-md q-gutter-md"},C={__name:"OrdersView",setup(V){const _=k([]);return(async()=>{var i,u;try{const{data:t}=await w.get("/orders");_.push(...t.result)}catch(t){console.log(t),y.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((u=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:u.message)||"\u4F7F\u7528\u8005\u8CC7\u6599\u932F\u8AA4\uFF01"})}})(),(i,u)=>(r(),d(h,{class:"bg"},{default:e(()=>[n("div",b,[B,n("div",D,[n("div",S,[m((r(),d(f,{clickable:"",class:"text-center"},{default:e(()=>[a(s,null,{default:e(()=>[l("\u6D3B\u52D5ID")]),_:1}),a(s,null,{default:e(()=>[l("\u5831\u540D\u65E5\u671F")]),_:1}),a(s,null,{default:e(()=>[l("\u6D3B\u52D5\u540D\u7A31")]),_:1}),a(s,null,{default:e(()=>[l("\u8209\u8FA6\u7E23\u5E02")]),_:1})]),_:1})),[[p]]),a(g),(r(!0),x(Q,null,v(_,t=>m((r(),d(f,{clickable:"",class:"text-center",style:{background:"#fff"},key:t._id},{default:e(()=>[a(s,null,{default:e(()=>[l(c(t._id),1)]),_:2},1024),a(s,null,{default:e(()=>[l(c(new Date(t.date).toLocaleDateString()),1)]),_:2},1024),a(s,null,{default:e(()=>{var o;return[l(c((o=t.products)==null?void 0:o.name),1)]}),_:2},1024),a(s,null,{default:e(()=>{var o;return[l(c((o=t.products)==null?void 0:o.category),1)]}),_:2},1024)]),_:2},1024)),[[p]])),128))])])])]),_:1}))}};export{C as default};
