import{Q as g,a as i}from"./QItem.39e3cdfd.js";import{Q as w}from"./QSeparator.2ea6c7d7.js";import{_ as I,a9 as p,aK as A,as as C,j as u,k as h,l as n,G as v,z as b,A as l,d as t,F as y,au as V,ao as d,at as _,Q as k,s as x,t as B,aI as Q}from"./index.05292adf.js";import{Q as j}from"./QCard.458b585f.js";import{Q as q}from"./QDialog.30fe4010.js";import"./use-dark.35bb1abc.js";import"./focusout.225c1d37.js";import"./focus-manager.387b0375.js";const D=r=>(x("data-v-79cf3af6"),r=r(),B(),r),N=D(()=>n("h5",{class:"text-center"},"\u5EFA\u8B70\u8490\u96C6\u7BA1\u7406",-1)),$={style:{"max-width":"100%"}},F={class:"q-pa-md q-gutter-md"},z=["src"],E=["src"],G={class:"q-pa-md"},K={class:"row justify-center"},L={class:"col-12 col-md-1"},R={class:"text-h6",align:"center"},T={__name:"AddSuggest",setup(r){const o=p([]),e=p({_id:"",name:"",math:0,price:0,description:"",image:void 0,images:[],sell:!1,genre:"",category:"",valid:!1,loading:!1,dialog:!1,idx:-1}),f=a=>{a===-1?(e._id="",e.name="",e.math=0,e.price=0,e.description="",e.image=void 0,e.images=[],e.sell=!1,e.genre="",e.category="",e.valid=!1,e.loading=!1,e.idx=-1):(e._id=o[a]._id,e.name=o[a].name,e.math=o[a].math,e.price=o[a].price,e.description=o[a].description,e.image=o[a].image,e.images=o[a].images,e.sell=o[a].sell,e.genre=o[a].genre,e.category=o[a].category,e.valid=!1,e.loading=!1,e.idx=a),e.dialog=!0};return(async()=>{var a,c;try{const{data:s}=await A.get("/invites/all");o.push(...s.result)}catch(s){C.fire({icon:"error",title:"\u5931\u6557",text:((c=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:c.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,c)=>(u(),h(y,null,[N,n("div",$,[n("div",F,[v((u(),b(g,{clickable:"",class:"text-center"},{default:l(()=>[t(i,null,{default:l(()=>[d("\u9080\u8ACB\u4EBA")]),_:1}),t(i,null,{default:l(()=>[d("\u6558\u8FF0\u5716\u7247")]),_:1}),t(i,null,{default:l(()=>[d("\u7A7A\u9592\u5EFA\u8B70")]),_:1}),t(i,null,{default:l(()=>[d("\u96C6\u5408\u5730\u9EDE")]),_:1}),t(i,null,{default:l(()=>[d("\u63D0\u8B70\u6558\u8FF0")]),_:1}),t(i,null,{default:l(()=>[d("\u63A5\u53D7/\u53D6\u6D88")]),_:1})]),_:1})),[[Q]]),t(w),(u(!0),h(y,null,V(o,(s,m)=>v((u(),b(g,{clickable:"",class:"text-center",style:{background:"#fff"},key:s._id},{default:l(()=>[t(i,null,{default:l(()=>[n("img",{src:`https://source.boringavatars.com/beam/256/${a.name}?colors=colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`,style:{height:"80px"}},null,8,z)]),_:1}),t(i,null,{default:l(()=>[n("img",{src:s.oneimage,"aspect-ratio":1,width:150,height:150,style:{"object-fit":"cover",margin:"auto"}},null,8,E)]),_:2},1024),t(i,null,{default:l(()=>[d(_(s.me),1)]),_:2},1024),t(i,null,{default:l(()=>[d(_(s.land),1)]),_:2},1024),t(i,null,{default:l(()=>[d(_(s.detailed),1)]),_:2},1024),t(i,null,{default:l(()=>[n("div",null,[t(k,{"no-caps":"",color:"amber-8",class:"btn-left",label:"\u63A5 \u53D7",onClick:S=>f(m)},null,8,["onClick"]),t(k,{"no-caps":"",color:"red-5",label:"\u53D6 \u6D88",onClick:S=>f(m)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)),[[Q]])),128))])]),n("div",G,[n("div",K,[n("div",L,[t(q,{modelValue:e.dialog,"onUpdate:modelValue":c[0]||(c[0]=s=>e.dialog=s),persistent:""},{default:l(()=>[t(j,{style:{"max-width":"800px"}},{default:l(()=>[n("div",R,_(e._id.length>0?"\u7DE8\u8F2F\u63EA\u5718":"\u65B0\u589E\u63EA\u5718"),1)]),_:1})]),_:1},8,["modelValue"])])])])],64))}};var Y=I(T,[["__scopeId","data-v-79cf3af6"]]);export{Y as default};
