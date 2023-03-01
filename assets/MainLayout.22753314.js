import{Q as S,a as V}from"./QResizeObserver.ce9d6fd1.js";import{u as L,c as h,h as q,v as F,_ as I,r as Q,x as R,y as M,j as s,z as r,A as l,B as N,C as k,d as t,Q as a,n as g,D as o,q as i,E as T,G as $,s as D,t as U,l as v}from"./index.27d8d230.js";import{Q as C}from"./QCardSection.3c413c2c.js";import{Q as z}from"./QInput.2223e4aa.js";import{Q as H,a as K,b as P,c as j,_ as E,d as G}from"./show.640ce697.js";import{Q as Y}from"./QCard.63dd59b2.js";import{Q as J}from"./QDialog.810b2af0.js";import{C as O}from"./ClosePopup.088c3a73.js";import"./use-dark.3da9499c.js";import"./uid.42677368.js";import"./focus-manager.387b0375.js";import"./focusout.f7bb970e.js";const W=["top","middle","bottom"];var X=L({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>W.includes(e)}},setup(e,{slots:c}){const m=h(()=>e.align!==void 0?{verticalAlign:e.align}:null),_=h(()=>{const n=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(n!==void 0?` text-${n}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>q("div",{class:_.value,style:m.value,role:"status","aria-label":e.label},F(c.default,e.label!==void 0?[e.label]:[]))}});const y=e=>(D("data-v-4ee769c4"),e=e(),U(),e),Z=y(()=>v("img",{class:"logo",src:E},null,-1)),ee=y(()=>v("img",{class:"logo-show",src:G,to:"/"},null,-1)),te=y(()=>v("div",{class:"text-h6"},"Your address",-1)),le={__name:"MainLayout",setup(e){const c=Q(!1),m=Q(""),_=N(),n=f=>_.path===f?"active":"",p=R(),{isLogin:u,isAdmin:w}=M(p),{logout:x}=p;return(f,d)=>{const A=k("RouterLink"),B=k("router-view");return s(),r(H,{view:"hHh lpR fFf"},{default:l(()=>[t(P,{elevated:"",class:"bg-primary text-white"},{default:l(()=>[t(S,null,{default:l(()=>[t(V,null,{default:l(()=>[t(A,{to:"/"},{default:l(()=>[Z]),_:1}),ee]),_:1}),t(a,{class:g(["font-r",n("/")]),flat:"",label:"\u7DB2\u7AD9\u9996\u9801",to:"/"},null,8,["class"]),t(a,{class:g(["font-r",n("/teamup")]),flat:"",label:"\u7D44\u968A\u63EA\u5925",to:"/teamup"},null,8,["class"]),t(a,{class:g(["font-r",n("/timefill")]),flat:"",label:"\u7A7A\u9592\u6642\u9593",to:"/timefill"},null,8,["class"]),t(a,{class:g(["font-r",n("/aboutme")]),flat:"",label:"\u95DC\u65BC\u6211\u5011",to:"/aboutme"},null,8,["class"]),o(u)?i("",!0):(s(),r(a,{key:0,class:"btn-r left-li",style:{background:"#F3A308",color:"white"},label:"\u6703\u54E1\u8A3B\u518A",to:"/register"})),o(u)?i("",!0):(s(),r(a,{key:1,class:"btn-r",style:{background:"#F3A308",color:"white"},label:"\u6703\u54E1\u767B\u5165",to:"/login"})),o(u)?(s(),r(a,{key:2,class:"glossy btn-car",round:"",color:"amber-8",content:f.cart,icon:"favorite",to:"/cart"},{default:l(()=>[t(X,{color:"red",rounded:"",floating:"",label:f.CartSeat},null,8,["label"])]),_:1},8,["content"])):i("",!0),o(u)?(s(),r(a,{key:3,class:"btn-r",style:{background:"#F3A308",color:"white"},label:"\u53C3\u8207\u63EA\u5718",to:"/orders"})):i("",!0),o(u)?(s(),r(a,{key:4,class:"btn-r",style:{background:"#F3A308",color:"white"},label:"\u6703\u54E1\u4E2D\u5FC3",to:"/member"})):i("",!0),o(u)&&o(w)?(s(),r(a,{key:5,class:"btn-r",style:{background:"#F3A308",color:"white"},label:"\u7DB2\u7AD9\u7BA1\u7406",to:"/admin"})):i("",!0),o(u)?(s(),r(a,{key:6,class:"btn-r",style:{background:"#F3A308",color:"white"},label:"\u6703\u54E1\u767B\u51FA",onClick:o(x)},null,8,["onClick"])):i("",!0),t(J,{modelValue:c.value,"onUpdate:modelValue":d[2]||(d[2]=b=>c.value=b),persistent:""},{default:l(()=>[t(Y,{style:{"min-width":"350px"}},{default:l(()=>[t(C,null,{default:l(()=>[te]),_:1}),t(C,{class:"q-pt-none"},{default:l(()=>[t(z,{dense:"",modelValue:m.value,"onUpdate:modelValue":d[0]||(d[0]=b=>m.value=b),autofocus:"",onKeyup:d[1]||(d[1]=T(b=>c.value=!1,["enter"]))},null,8,["modelValue"])]),_:1}),t(K,{align:"right",class:"text-primary"},{default:l(()=>[$(t(a,{flat:"",label:"Add address"},null,512),[[O]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(j,null,{default:l(()=>[t(B)]),_:1})]),_:1})}}};var ge=I(le,[["__scopeId","data-v-4ee769c4"]]);export{ge as default};
