import{u as f,c as z,h as v,H as T,r as y,I as R,o as d,J as p,K as O,L as h,g as Q,M as m}from"./index.0f57a608.js";var L=f({name:"QToolbarTitle",props:{shrink:Boolean},setup(r,{slots:i}){const e=z(()=>"q-toolbar__title ellipsis"+(r.shrink===!0?" col-shrink":""));return()=>v("div",{class:e.value},T(i.default))}}),E=f({name:"QToolbar",props:{inset:Boolean},setup(r,{slots:i}){const e=z(()=>"q-toolbar row no-wrap items-center"+(r.inset===!0?" q-toolbar--inset":""));return()=>v("div",{class:e.value,role:"toolbar"},T(i.default))}});function k(){const r=y(!R.value);return r.value===!1&&d(()=>{r.value=!0}),r}const w=typeof ResizeObserver!="undefined",g=w===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var q=f({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(r,{emit:i}){let e=null,n,s={width:-1,height:-1};function a(t){t===!0||r.debounce===0||r.debounce==="0"?l():e===null&&(e=setTimeout(l,r.debounce))}function l(){if(e!==null&&(clearTimeout(e),e=null),n){const{offsetWidth:t,offsetHeight:o}=n;(t!==s.width||o!==s.height)&&(s={width:t,height:o},i("resize",s))}}const{proxy:c}=Q();if(w===!0){let t;const o=u=>{n=c.$el.parentNode,n?(t=new ResizeObserver(a),t.observe(n),l()):u!==!0&&h(()=>{o(!0)})};return d(()=>{o()}),p(()=>{e!==null&&clearTimeout(e),t!==void 0&&(t.disconnect!==void 0?t.disconnect():n&&t.unobserve(n))}),O}else{let u=function(){e!==null&&(clearTimeout(e),e=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",a,m.passive),o=void 0)},b=function(){u(),n&&n.contentDocument&&(o=n.contentDocument.defaultView,o.addEventListener("resize",a,m.passive),l())};const t=k();let o;return d(()=>{h(()=>{n=c.$el,n&&b()})}),p(u),c.trigger=a,()=>{if(t.value===!0)return v("object",{style:g.style,tabindex:-1,type:"text/html",data:g.url,"aria-hidden":"true",onLoad:b})}}}});export{E as Q,L as a,q as b};