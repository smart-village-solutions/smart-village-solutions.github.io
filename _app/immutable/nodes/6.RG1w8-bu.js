import{b as Q,c as b,f as P}from"../chunks/pages.DdyDMu7L.js";import{e as S}from"../chunks/index.DOKHoCfo.js";import{s as q,b as u,h as w,d as m,c as d,l as c}from"../chunks/scheduler.BZkyrStM.js";import{S as j,i as B,c as _,a as g,m as $,t as y,b as h,d as v}from"../chunks/index.BLFDKRva.js";import{F as E,Q as F}from"../chunks/FieldDetails.DU3ZLKCH.js";import{P as N}from"../chunks/PreviousNextPage.4F79ueNj.js";const O=Q(),T=({params:n,url:a})=>{const r=b(n.query),t=P(a.pathname);if(!r||!t)throw S(404,`Query ${n.query} not found.`);return{field:r,page:t}},Y=Object.freeze(Object.defineProperty({__proto__:null,load:T,prerender:O},Symbol.toStringTag,{value:"Module"}));function x(n){let a,r,t,i,o,f;return document.title=a="Query - "+n[0].field.name,t=new E({props:{field:n[0].field,type:F.QUERY}}),o=new N({props:{page:n[0].page}}),{c(){r=u(),_(t.$$.fragment),i=u(),_(o.$$.fragment)},l(e){w("svelte-19yffit",document.head).forEach(m),r=d(e),g(t.$$.fragment,e),i=d(e),g(o.$$.fragment,e)},m(e,s){c(e,r,s),$(t,e,s),c(e,i,s),$(o,e,s),f=!0},p(e,[s]){(!f||s&1)&&a!==(a="Query - "+e[0].field.name)&&(document.title=a);const l={};s&1&&(l.field=e[0].field),t.$set(l);const p={};s&1&&(p.page=e[0].page),o.$set(p)},i(e){f||(y(t.$$.fragment,e),y(o.$$.fragment,e),f=!0)},o(e){h(t.$$.fragment,e),h(o.$$.fragment,e),f=!1},d(e){e&&(m(r),m(i)),v(t,e),v(o,e)}}}function z(n,a,r){let{data:t}=a;return n.$$set=i=>{"data"in i&&r(0,t=i.data)},[t]}class k extends j{constructor(a){super(),B(this,a,z,x,q,{data:0})}}export{k as component,Y as universal};
