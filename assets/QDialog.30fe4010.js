import{J as le,aa as j,a0 as v,M as c,S as pe,ab as be,u as xe,r as z,c as w,w as I,h as y,Z as Q,H as Te,g as qe,ac as Ee}from"./index.05292adf.js";import{b as Se,a as ke,h as Be,u as Ce,d as Le,e as He,f as Pe,i as _e,j as ze,k as Fe,l as Me,r as U,m as J,n as De,o as Ve}from"./focusout.225c1d37.js";import{a as Re}from"./focus-manager.387b0375.js";function $e(e,t,s){let l;function a(){l!==void 0&&(j.remove(l),l=void 0)}return le(()=>{e.value===!0&&a()}),{removeFromHistory:a,addToHistory(){l={condition:()=>s.value===!0,handler:t},j.add(l)}}}let p=0,F,M,b,D=!1,Z,G,N,d=null;function Ae(e){Oe(e)&&pe(e)}function Oe(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=be(e),s=e.shiftKey&&!e.deltaX,l=!s&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),a=s||l?e.deltaY:e.deltaX;for(let f=0;f<t.length;f++){const i=t[f];if(Be(i,l))return l?a<0&&i.scrollTop===0?!0:a>0&&i.scrollTop+i.clientHeight===i.scrollHeight:a<0&&i.scrollLeft===0?!0:a>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function ee(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function E(e){D!==!0&&(D=!0,requestAnimationFrame(()=>{D=!1;const{height:t}=e.target,{clientHeight:s,scrollTop:l}=document.scrollingElement;(b===void 0||t!==window.innerHeight)&&(b=s-t,document.scrollingElement.scrollTop=l),l>b&&(document.scrollingElement.scrollTop-=Math.ceil((l-b)/8))}))}function te(e){const t=document.body,s=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:a}=window.getComputedStyle(t);F=Se(window),M=ke(window),Z=t.style.left,G=t.style.top,N=window.location.href,t.style.left=`-${F}px`,t.style.top=`-${M}px`,a!=="hidden"&&(a==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,v.is.ios===!0&&(s===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",E,c.passiveCapture),window.visualViewport.addEventListener("scroll",E,c.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ee,c.passiveCapture))}v.is.desktop===!0&&v.is.mac===!0&&window[`${e}EventListener`]("wheel",Ae,c.notPassive),e==="remove"&&(v.is.ios===!0&&(s===!0?(window.visualViewport.removeEventListener("resize",E,c.passiveCapture),window.visualViewport.removeEventListener("scroll",E,c.passiveCapture)):window.removeEventListener("scroll",ee,c.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Z,t.style.top=G,window.location.href===N&&window.scrollTo(F,M),b=void 0)}function We(e){let t="add";if(e===!0){if(p++,d!==null){clearTimeout(d),d=null;return}if(p>1)return}else{if(p===0||(p--,p>0))return;if(t="remove",v.is.ios===!0&&v.is.nativeMobile===!0){d!==null&&clearTimeout(d),d=setTimeout(()=>{te(t),d=null},100);return}}te(t)}function Ke(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,We(t))}}}let S=0;const Xe={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},oe={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Qe=xe({name:"QDialog",inheritAttrs:!1,props:{...Ce,...Le,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...He,"shake","click","escapeKey"],setup(e,{slots:t,emit:s,attrs:l}){const a=qe(),{proxy:{$q:f}}=a,i=z(null),m=z(!1),h=z(!1);let r=null,u=null,x,k;const V=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:R}=Ke(),{registerTimeout:$}=Pe(),{registerTick:ie,removeTick:A}=_e(),{transitionProps:ne,transitionStyle:O}=ze(e,()=>oe[e.position][0],()=>oe[e.position][1]),{showPortal:W,hidePortal:K,portalIsAccessible:se,renderPortal:ae}=Fe(a,i,ye,"dialog"),{hide:T}=Me({showing:m,hideOnRouteChange:V,handleShow:me,handleHide:ve,processOnMount:!0}),{addToHistory:re,removeFromHistory:ue}=$e(m,T,V),ce=w(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Xe[e.position]}`+(h.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),q=w(()=>m.value===!0&&e.seamless!==!0),de=w(()=>e.autoClose===!0?{onClick:he}:{}),fe=w(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${q.value===!0?"modal":"seamless"}`,l.class]);I(()=>e.maximized,o=>{m.value===!0&&L(o)}),I(q,o=>{R(o),o===!0?(De(H),Ve(C)):(U(H),J(C))});function me(o){re(),u=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,L(e.maximized),W(),h.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),ie(g)):A(),$(()=>{if(a.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:n,bottom:P}=document.activeElement.getBoundingClientRect(),{innerHeight:Y}=window,_=window.visualViewport!==void 0?window.visualViewport.height:Y;n>0&&P>_/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-_,P>=Y?1/0:Math.ceil(document.scrollingElement.scrollTop+P-_/2))),document.activeElement.scrollIntoView()}k=!0,i.value.click(),k=!1}W(!0),h.value=!1,s("show",o)},e.transitionDuration)}function ve(o){A(),ue(),X(!0),h.value=!0,K(),u!==null&&(((o&&o.type.indexOf("key")===0?u.closest('[tabindex]:not([tabindex^="-"])'):void 0)||u).focus(),u=null),$(()=>{K(!0),h.value=!1,s("hide",o)},e.transitionDuration)}function g(o){Re(()=>{let n=i.value;n===null||n.contains(document.activeElement)===!0||(n=(o!==""?n.querySelector(o):null)||n.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.querySelector("[autofocus], [data-autofocus]")||n,n.focus({preventScroll:!0}))})}function B(o){o&&typeof o.focus=="function"?o.focus({preventScroll:!0}):g(),s("shake");const n=i.value;n!==null&&(n.classList.remove("q-animate--scale"),n.classList.add("q-animate--scale"),r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,i.value!==null&&(n.classList.remove("q-animate--scale"),g())},170))}function C(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&B():(s("escapeKey"),T()))}function X(o){r!==null&&(clearTimeout(r),r=null),(o===!0||m.value===!0)&&(L(!1),e.seamless!==!0&&(R(!1),U(H),J(C))),o!==!0&&(u=null)}function L(o){o===!0?x!==!0&&(S<1&&document.body.classList.add("q-body--dialog"),S++,x=!0):x===!0&&(S<2&&document.body.classList.remove("q-body--dialog"),S--,x=!1)}function he(o){k!==!0&&(T(o),s("click",o))}function ge(o){e.persistent!==!0&&e.noBackdropDismiss!==!0?T(o):e.noShake!==!0&&B(o.relatedTarget)}function H(o){e.allowFocusOutside!==!0&&se.value===!0&&Ee(i.value,o.target)!==!0&&g('[tabindex]:not([tabindex="-1"])')}Object.assign(a.proxy,{focus:g,shake:B,__updateRefocusTarget(o){u=o||null}}),le(X);const we=f.platform.is.ios===!0||f.platform.is.safari?"onClick":"onFocusin";function ye(){return y("div",{role:"dialog","aria-modal":q.value===!0?"true":"false",...l,class:fe.value},[y(Q,{name:"q-transition--fade",appear:!0},()=>q.value===!0?y("div",{class:"q-dialog__backdrop fixed-full",style:O.value,"aria-hidden":"true",tabindex:-1,[we]:ge}):null),y(Q,ne.value,()=>m.value===!0?y("div",{ref:i,class:ce.value,style:O.value,tabindex:-1,...de.value},Te(t.default)):null)])}return ae}});export{Qe as Q,Ke as a,$e as u};
