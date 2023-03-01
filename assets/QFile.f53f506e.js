import{Q as K}from"./QChip.31e89103.js";import{u as M,a as X,b as Y,c as G,d as H,e as J,f as Z,g as U}from"./QInput.2223e4aa.js";import{r as E,c,g as W,a1 as ee,S as $,a0 as te,h,u as le,P as ne,W as ie}from"./index.27d8d230.js";import{h as ae}from"./format.3e32b8d9.js";function y(e,f,x,F){const u=[];return e.forEach(s=>{F(s)===!0?u.push(s):f.push({failedPropValidation:x,file:s})}),u}function D(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),$(e)}const ue={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},re=["rejected"];function se({editable:e,dnd:f,getFileInput:x,addFilesToQueue:F}){const{props:u,emit:s,proxy:p}=W(),b=E(null),z=c(()=>u.accept!==void 0?u.accept.split(",").map(t=>(t=t.trim(),t==="*"?"*/":(t.endsWith("/*")&&(t=t.slice(0,t.length-1)),t.toUpperCase()))):null),V=c(()=>parseInt(u.maxFiles,10)),_=c(()=>parseInt(u.maxTotalSize,10));function j(t){if(e.value)if(t!==Object(t)&&(t={target:null}),t.target!==null&&t.target.matches('input[type="file"]')===!0)t.clientX===0&&t.clientY===0&&ee(t);else{const m=x();m&&m!==t.target&&m.click(t)}}function N(t){e.value&&t&&F(null,t)}function k(t,m,S,C){let n=Array.from(m||t.target.files);const d=[],g=()=>{d.length>0&&s("rejected",d)};if(u.accept!==void 0&&z.value.indexOf("*/")===-1&&(n=y(n,d,"accept",i=>z.value.some(r=>i.type.toUpperCase().startsWith(r)||i.name.toUpperCase().endsWith(r))),n.length===0))return g();if(u.maxFileSize!==void 0){const i=parseInt(u.maxFileSize,10);if(n=y(n,d,"max-file-size",r=>r.size<=i),n.length===0)return g()}if(u.multiple!==!0&&n.length>0&&(n=[n[0]]),n.forEach(i=>{i.__key=i.webkitRelativePath+i.lastModified+i.name+i.size}),C===!0){const i=S.map(r=>r.__key);n=y(n,d,"duplicate",r=>i.includes(r.__key)===!1)}if(n.length===0)return g();if(u.maxTotalSize!==void 0){let i=C===!0?S.reduce((r,T)=>r+T.size,0):0;if(n=y(n,d,"max-total-size",r=>(i+=r.size,i<=_.value)),n.length===0)return g()}if(typeof u.filter=="function"){const i=u.filter(n);n=y(n,d,"filter",r=>i.includes(r))}if(u.maxFiles!==void 0){let i=C===!0?S.length:0;if(n=y(n,d,"max-files",()=>(i++,i<=V.value)),n.length===0)return g()}if(g(),n.length>0)return n}function I(t){D(t),f.value!==!0&&(f.value=!0)}function a(t){$(t),(t.relatedTarget!==null||te.is.safari!==!0?t.relatedTarget!==b.value:document.elementsFromPoint(t.clientX,t.clientY).includes(b.value)===!1)===!0&&(f.value=!1)}function P(t){D(t);const m=t.dataTransfer.files;m.length>0&&F(null,m),f.value=!1}function O(t){if(f.value===!0)return h("div",{ref:b,class:`q-${t}__dnd absolute-full`,onDragenter:D,onDragover:D,onDragleave:a,onDrop:P})}return Object.assign(p,{pickFiles:j,addFiles:N}),{pickFiles:j,addFiles:N,onDragover:I,onDragleave:a,processFiles:k,getDndNode:O,maxFilesNumber:V,maxTotalSizeNumber:_}}var me=le({name:"QFile",inheritAttrs:!1,props:{...M,...X,...ue,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Y,...re],setup(e,{slots:f,emit:x,attrs:F}){const{proxy:u}=W(),s=G(),p=E(null),b=E(!1),z=H(e),{pickFiles:V,onDragover:_,onDragleave:j,processFiles:N,getDndNode:k}=se({editable:s.editable,dnd:b,getFileInput:Q,addFilesToQueue:R}),I=J(e),a=c(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),P=c(()=>U(a.value)),O=c(()=>a.value.map(l=>l.name).join(", ")),t=c(()=>ae(a.value.reduce((l,o)=>l+o.size,0))),m=c(()=>({totalSize:t.value,filesNumber:a.value.length,maxFiles:e.maxFiles})),S=c(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:z.value,...F,id:s.targetUid.value,disabled:s.editable.value!==!0})),C=c(()=>"q-file q-field--auto-height"+(b.value===!0?" q-file--dnd":"")),n=c(()=>e.multiple===!0&&e.append===!0);function d(l){const o=a.value.slice();o.splice(l,1),i(o)}function g(l){const o=a.value.findIndex(l);o>-1&&d(o)}function i(l){x("update:modelValue",e.multiple===!0?l:l[0])}function r(l){l.keyCode===13&&ie(l)}function T(l){(l.keyCode===13||l.keyCode===32)&&V(l)}function Q(){return p.value}function R(l,o){const v=N(l,o,a.value,n.value),q=Q();q!=null&&(q.value=""),v!==void 0&&((e.multiple===!0?e.modelValue&&v.every(L=>a.value.includes(L)):e.modelValue===v[0])||i(n.value===!0?a.value.concat(v):v))}function A(){return[h("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function w(){if(f.file!==void 0)return a.value.length===0?A():a.value.map((o,v)=>f.file({index:v,file:o,ref:this}));if(f.selected!==void 0)return a.value.length===0?A():f.selected({files:a.value,ref:this});if(e.useChips===!0)return a.value.length===0?A():a.value.map((o,v)=>h(K,{key:"file-"+v,removable:s.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{d(v)}},()=>h("span",{class:"ellipsis",textContent:o.name})));const l=e.displayValue!==void 0?e.displayValue:O.value;return l.length>0?[h("div",{class:e.inputClass,style:e.inputStyle,textContent:l})]:A()}function B(){const l={ref:p,...S.value,...I.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:R};return e.multiple===!0&&(l.multiple=!0),h("input",l)}return Object.assign(s,{fieldClass:C,emitValue:i,hasValue:P,inputRef:p,innerValue:a,floatingLabel:c(()=>P.value===!0||U(e.displayValue)),computedCounter:c(()=>{if(e.counterLabel!==void 0)return e.counterLabel(m.value);const l=e.maxFiles;return`${a.value.length}${l!==void 0?" / "+l:""} (${t.value})`}),getControlChild:()=>k("file"),getControl:()=>{const l={ref:s.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return s.editable.value===!0&&Object.assign(l,{onDragover:_,onDragleave:j,onKeydown:r,onKeyup:T}),h("div",l,[B()].concat(w()))}}),Object.assign(u,{removeAtIndex:d,removeFile:g,getNativeElement:()=>p.value}),ne(u,"nativeEl",()=>p.value),Z(s)}});export{me as Q};
