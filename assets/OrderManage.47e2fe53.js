import{Q as f,a as s}from"./QItem.39e3cdfd.js";import{Q as g}from"./QSeparator.2ea6c7d7.js";import{Q as h}from"./QPage.385d4efa.js";import{a9 as k,aK as y,as as x,j as o,z as d,A as e,l as n,G as m,d as a,ao as l,k as v,au as w,at as c,F as Q,aI as p}from"./index.05292adf.js";import"./use-dark.35bb1abc.js";const b={class:"container"},B=n("h6",{style:{"font-weight":"600"}},"\u6703\u54E1\u63EA\u5718\u53C3\u8207\u7D00\u9304",-1),D={style:{"max-width":"100%"}},S={class:"q-pa-md q-gutter-md"},C={__name:"OrderManage",setup(A){const _=k([]);return(async()=>{var u,i;try{const{data:t}=await y.get("/orders/all");_.push(...t.result)}catch(t){x.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((i=(u=t==null?void 0:t.response)==null?void 0:u.data)==null?void 0:i.message)||"\u4F7F\u7528\u8005\u8CC7\u6599\u932F\u8AA4\uFF01"})}})(),(u,i)=>(o(),d(h,{class:"bg"},{default:e(()=>[n("div",b,[B,n("div",D,[n("div",S,[m((o(),d(f,{clickable:"",class:"text-center"},{default:e(()=>[a(s,null,{default:e(()=>[l("\u63EA\u5718ID")]),_:1}),a(s,null,{default:e(()=>[l("\u53C3\u8207\u65E5\u671F")]),_:1}),a(s,null,{default:e(()=>[l("\u63EA\u5718\u540D\u7A31")]),_:1}),a(s,null,{default:e(()=>[l("\u63EA\u5718\u57CE\u5E02")]),_:1})]),_:1})),[[p]]),a(g),(o(!0),v(Q,null,w(_,t=>m((o(),d(f,{clickable:"",class:"text-center",style:{background:"#fff"},key:t._id},{default:e(()=>[a(s,null,{default:e(()=>[l(c(t._id),1)]),_:2},1024),a(s,null,{default:e(()=>[l(c(new Date(t.date).toLocaleDateString()),1)]),_:2},1024),a(s,null,{default:e(()=>{var r;return[l(c((r=t.products)==null?void 0:r.name),1)]}),_:2},1024),a(s,null,{default:e(()=>{var r;return[l(c((r=t.products)==null?void 0:r.category),1)]}),_:2},1024)]),_:2},1024)),[[p]])),128))])])])]),_:1}))}};export{C as default};
