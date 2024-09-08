var wv=Object.defineProperty;var Mc=r=>{throw TypeError(r)};var Fv=(r,n,t)=>n in r?wv(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var _e=(r,n,t)=>Fv(r,typeof n!="symbol"?n+"":n,t),Nv=(r,n,t)=>n.has(r)||Mc("Cannot "+t);var $c=(r,n,t)=>n.has(r)?Mc("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(r):n.set(r,t);var ui=(r,n,t)=>(Nv(r,n,"access private method"),t);import{s as Ne,q as sn,l as be,d as K,I as Pc,t as Ma,j as $a,o as Pa,n as Xe,a2 as vi,E as nt,v as Nd,e as Oe,f as xe,g as We,ae as Ns,F as tt,G as rt,H as it,k as Dn,m as wt,b as Ua,c as Ga,ah as kv,ai as Cv,ak as Uc,K as Ov}from"./scheduler.6x_t8-M_.js";import{S as Be,i as ze,t as ee,g as Ft,b as oe,e as Nt,c as Zt,a as mr,m as Ht,d as Jt}from"./index.DNIXW-5M.js";import{b as xv}from"./control.BkVSm7L1.js";function ct(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function kd(r,n){const t={},o={},s={$$scope:1};let a=r.length;for(;a--;){const l=r[a],d=n[a];if(d){for(const f in l)f in d||(o[f]=1);for(const f in d)s[f]||(t[f]=d[f],s[f]=1);r[a]=d}else for(const f in l)s[f]=1}for(const l in o)l in t||(t[l]=void 0);return t}function xy(r){return typeof r=="object"&&r!==null?r:{}}function Gc(r){let n,t,o;var s=r[1][r[0].type];function a(l,d){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[Bv]},$$scope:{ctx:l}}}}return s&&(n=Pc(s,a(r))),{c(){n&&Zt(n.$$.fragment),t=sn()},l(l){n&&mr(n.$$.fragment,l),t=sn()},m(l,d){n&&Ht(n,l,d),be(l,t,d),o=!0},p(l,d){if(d&3&&s!==(s=l[1][l[0].type])){if(n){Ft();const f=n;oe(f.$$.fragment,1,0,()=>{Jt(f,1)}),Nt()}s?(n=Pc(s,a(l)),Zt(n.$$.fragment),ee(n.$$.fragment,1),Ht(n,t.parentNode,t)):n=null}else if(s){const f={};d&1&&(f.token=l[0]),d&4&&(f.options=l[2]),d&2&&(f.renderers=l[1]),d&15&&(f.$$scope={dirty:d,ctx:l}),n.$set(f)}},i(l){o||(n&&ee(n.$$.fragment,l),o=!0)},o(l){n&&oe(n.$$.fragment,l),o=!1},d(l){l&&K(t),n&&Jt(n,l)}}}function Lv(r){let n=r[0].raw+"",t;return{c(){t=Ma(n)},l(o){t=$a(o,n)},m(o,s){be(o,t,s)},p(o,s){s&1&&n!==(n=o[0].raw+"")&&Pa(t,n)},i:Xe,o:Xe,d(o){o&&K(t)}}}function Rv(r){let n,t;return n=new Ps({props:{tokens:r[0].tokens,renderers:r[1],options:r[2]}}),{c(){Zt(n.$$.fragment)},l(o){mr(n.$$.fragment,o)},m(o,s){Ht(n,o,s),t=!0},p(o,s){const a={};s&1&&(a.tokens=o[0].tokens),s&2&&(a.renderers=o[1]),s&4&&(a.options=o[2]),n.$set(a)},i(o){t||(ee(n.$$.fragment,o),t=!0)},o(o){oe(n.$$.fragment,o),t=!1},d(o){Jt(n,o)}}}function Bv(r){let n,t,o,s;const a=[Rv,Lv],l=[];function d(f,m){return"tokens"in f[0]&&f[0].tokens?0:1}return n=d(r),t=l[n]=a[n](r),{c(){t.c(),o=sn()},l(f){t.l(f),o=sn()},m(f,m){l[n].m(f,m),be(f,o,m),s=!0},p(f,m){let D=n;n=d(f),n===D?l[n].p(f,m):(Ft(),oe(l[D],1,1,()=>{l[D]=null}),Nt(),t=l[n],t?t.p(f,m):(t=l[n]=a[n](f),t.c()),ee(t,1),t.m(o.parentNode,o))},i(f){s||(ee(t),s=!0)},o(f){oe(t),s=!1},d(f){f&&K(o),l[n].d(f)}}}function zv(r){let n,t,o=r[1][r[0].type]&&Gc(r);return{c(){o&&o.c(),n=sn()},l(s){o&&o.l(s),n=sn()},m(s,a){o&&o.m(s,a),be(s,n,a),t=!0},p(s,[a]){s[1][s[0].type]?o?(o.p(s,a),a&3&&ee(o,1)):(o=Gc(s),o.c(),ee(o,1),o.m(n.parentNode,n)):o&&(Ft(),oe(o,1,1,()=>{o=null}),Nt())},i(s){t||(ee(o),t=!0)},o(s){oe(o),t=!1},d(s){s&&K(n),o&&o.d(s)}}}function Mv(r,n,t){let{token:o}=n,{renderers:s}=n,{options:a}=n;return r.$$set=l=>{"token"in l&&t(0,o=l.token),"renderers"in l&&t(1,s=l.renderers),"options"in l&&t(2,a=l.options)},[o,s,a]}class Cd extends Be{constructor(n){super(),ze(this,n,Mv,zv,Ne,{token:0,renderers:1,options:2})}}function Vc(r,n,t){const o=r.slice();return o[3]=n[t],o}function Wc(r){let n,t,o=ct(r[0]),s=[];for(let l=0;l<o.length;l+=1)s[l]=jc(Vc(r,o,l));const a=l=>oe(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();n=sn()},l(l){for(let d=0;d<s.length;d+=1)s[d].l(l);n=sn()},m(l,d){for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(l,d);be(l,n,d),t=!0},p(l,d){if(d&7){o=ct(l[0]);let f;for(f=0;f<o.length;f+=1){const m=Vc(l,o,f);s[f]?(s[f].p(m,d),ee(s[f],1)):(s[f]=jc(m),s[f].c(),ee(s[f],1),s[f].m(n.parentNode,n))}for(Ft(),f=o.length;f<s.length;f+=1)a(f);Nt()}},i(l){if(!t){for(let d=0;d<o.length;d+=1)ee(s[d]);t=!0}},o(l){s=s.filter(Boolean);for(let d=0;d<s.length;d+=1)oe(s[d]);t=!1},d(l){l&&K(n),vi(s,l)}}}function jc(r){let n,t;return n=new Cd({props:{token:r[3],renderers:r[1],options:r[2]}}),{c(){Zt(n.$$.fragment)},l(o){mr(n.$$.fragment,o)},m(o,s){Ht(n,o,s),t=!0},p(o,s){const a={};s&1&&(a.token=o[3]),s&2&&(a.renderers=o[1]),s&4&&(a.options=o[2]),n.$set(a)},i(o){t||(ee(n.$$.fragment,o),t=!0)},o(o){oe(n.$$.fragment,o),t=!1},d(o){Jt(n,o)}}}function $v(r){let n,t,o=r[0]&&Wc(r);return{c(){o&&o.c(),n=sn()},l(s){o&&o.l(s),n=sn()},m(s,a){o&&o.m(s,a),be(s,n,a),t=!0},p(s,[a]){s[0]?o?(o.p(s,a),a&1&&ee(o,1)):(o=Wc(s),o.c(),ee(o,1),o.m(n.parentNode,n)):o&&(Ft(),oe(o,1,1,()=>{o=null}),Nt())},i(s){t||(ee(o),t=!0)},o(s){oe(o),t=!1},d(s){s&&K(n),o&&o.d(s)}}}function Pv(r,n,t){let{tokens:o}=n,{renderers:s}=n,{options:a}=n;return r.$$set=l=>{"tokens"in l&&t(0,o=l.tokens),"renderers"in l&&t(1,s=l.renderers),"options"in l&&t(2,a=l.options)},[o,s,a]}class Ps extends Be{constructor(n){super(),ze(this,n,Pv,$v,Ne,{tokens:0,renderers:1,options:2})}}function bi(...r){return`/${r.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}`}function Ti(r){return r.startsWith("/")||r.startsWith("#")}function Od(r,n){return n.slug(r).replace(/--+/g,"-")}function va(r){let n,t;const o=r[5].default,s=nt(o,r,r[4],null);let a=[{id:r[1]}],l={};for(let d=0;d<a.length;d+=1)l=Nd(l,a[d]);return{c(){n=Oe(`h${r[0].depth}`),s&&s.c(),this.h()},l(d){n=xe(d,(`h${r[0].depth}`||"null").toUpperCase(),{id:!0});var f=We(n);s&&s.l(f),f.forEach(K),this.h()},h(){Ns(`h${r[0].depth}`)(n,l)},m(d,f){be(d,n,f),s&&s.m(n,null),t=!0},p(d,f){s&&s.p&&(!t||f&16)&&tt(s,o,d,d[4],t?it(o,d[4],f,null):rt(d[4]),null),Ns(`h${d[0].depth}`)(n,l=kd(a,[(!t||f&2)&&{id:d[1]}]))},i(d){t||(ee(s,d),t=!0)},o(d){oe(s,d),t=!1},d(d){d&&K(n),s&&s.d(d)}}}function Uv(r){let n=`h${r[0].depth}`,t,o,s=`h${r[0].depth}`&&va(r);return{c(){s&&s.c(),t=sn()},l(a){s&&s.l(a),t=sn()},m(a,l){s&&s.m(a,l),be(a,t,l),o=!0},p(a,[l]){`h${a[0].depth}`?n?Ne(n,`h${a[0].depth}`)?(s.d(1),s=va(a),n=`h${a[0].depth}`,s.c(),s.m(t.parentNode,t)):s.p(a,l):(s=va(a),n=`h${a[0].depth}`,s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=`h${a[0].depth}`)},i(a){o||(ee(s,a),o=!0)},o(a){oe(s,a),o=!1},d(a){a&&K(t),s&&s.d(a)}}}function Gv(r,n,t){let{$$slots:o={},$$scope:s}=n,{token:a}=n,{options:l}=n;const d=void 0;let f;return r.$$set=m=>{"token"in m&&t(0,a=m.token),"options"in m&&t(2,l=m.options),"$$scope"in m&&t(4,s=m.$$scope)},r.$$.update=()=>{r.$$.dirty&5&&t(1,f=Od(a.text,l.slugger))},[a,f,l,d,s,o]}class Vv extends Be{constructor(n){super(),ze(this,n,Gv,Uv,Ne,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function Wv(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Oe("blockquote"),s&&s.c()},l(a){n=xe(a,"BLOCKQUOTE",{});var l=We(n);s&&s.l(l),l.forEach(K)},m(a,l){be(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function jv(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,d=void 0;return r.$$set=f=>{"$$scope"in f&&t(3,s=f.$$scope)},[a,l,d,s,o]}class qv extends Be{constructor(n){super(),ze(this,n,jv,Wv,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function qc(r,n,t){const o=r.slice();return o[4]=n[t],o}function Zc(r){let n,t;return n=new Cd({props:{token:{...r[4]},options:r[1],renderers:r[2]}}),{c(){Zt(n.$$.fragment)},l(o){mr(n.$$.fragment,o)},m(o,s){Ht(n,o,s),t=!0},p(o,s){const a={};s&1&&(a.token={...o[4]}),s&2&&(a.options=o[1]),s&4&&(a.renderers=o[2]),n.$set(a)},i(o){t||(ee(n.$$.fragment,o),t=!0)},o(o){oe(n.$$.fragment,o),t=!1},d(o){Jt(n,o)}}}function ba(r){let n,t,o,s=ct(r[0].items),a=[];for(let m=0;m<s.length;m+=1)a[m]=Zc(qc(r,s,m));const l=m=>oe(a[m],1,1,()=>{a[m]=null});let d=[{start:t=r[0].start||1}],f={};for(let m=0;m<d.length;m+=1)f=Nd(f,d[m]);return{c(){n=Oe(r[3]);for(let m=0;m<a.length;m+=1)a[m].c();this.h()},l(m){n=xe(m,(r[3]||"null").toUpperCase(),{start:!0});var D=We(n);for(let v=0;v<a.length;v+=1)a[v].l(D);D.forEach(K),this.h()},h(){Ns(r[3])(n,f)},m(m,D){be(m,n,D);for(let v=0;v<a.length;v+=1)a[v]&&a[v].m(n,null);o=!0},p(m,D){if(D&7){s=ct(m[0].items);let v;for(v=0;v<s.length;v+=1){const k=qc(m,s,v);a[v]?(a[v].p(k,D),ee(a[v],1)):(a[v]=Zc(k),a[v].c(),ee(a[v],1),a[v].m(n,null))}for(Ft(),v=s.length;v<a.length;v+=1)l(v);Nt()}Ns(m[3])(n,f=kd(d,[(!o||D&1&&t!==(t=m[0].start||1))&&{start:t}]))},i(m){if(!o){for(let D=0;D<s.length;D+=1)ee(a[D]);o=!0}},o(m){a=a.filter(Boolean);for(let D=0;D<a.length;D+=1)oe(a[D]);o=!1},d(m){m&&K(n),vi(a,m)}}}function Zv(r){let n=r[3],t,o=r[3]&&ba(r);return{c(){o&&o.c(),t=sn()},l(s){o&&o.l(s),t=sn()},m(s,a){o&&o.m(s,a),be(s,t,a)},p(s,[a]){s[3]?n?Ne(n,s[3])?(o.d(1),o=ba(s),n=s[3],o.c(),o.m(t.parentNode,t)):o.p(s,a):(o=ba(s),n=s[3],o.c(),o.m(t.parentNode,t)):n&&(o.d(1),o=null,n=s[3])},i:Xe,o(s){oe(o,s)},d(s){s&&K(t),o&&o.d(s)}}}function Hv(r,n,t){let{token:o}=n,{options:s}=n,{renderers:a}=n,l;return r.$$set=d=>{"token"in d&&t(0,o=d.token),"options"in d&&t(1,s=d.options),"renderers"in d&&t(2,a=d.renderers)},r.$$.update=()=>{r.$$.dirty&1&&t(3,l=o.ordered?"ol":"ul")},[o,s,a,l]}class Jv extends Be{constructor(n){super(),ze(this,n,Hv,Zv,Ne,{token:0,options:1,renderers:2})}}function Kv(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Oe("li"),s&&s.c()},l(a){n=xe(a,"LI",{});var l=We(n);s&&s.l(l),l.forEach(K)},m(a,l){be(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function Yv(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,d=void 0;return r.$$set=f=>{"$$scope"in f&&t(3,s=f.$$scope)},[a,l,d,s,o]}class Qv extends Be{constructor(n){super(),ze(this,n,Yv,Kv,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Xv(r){let n;return{c(){n=Oe("br")},l(t){n=xe(t,"BR",{})},m(t,o){be(t,n,o)},p:Xe,i:Xe,o:Xe,d(t){t&&K(n)}}}function eb(r,n,t){return[void 0,void 0,void 0]}class nb extends Be{constructor(n){super(),ze(this,n,eb,Xv,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tb(r){let n,t,o=r[0].text+"",s,a;return{c(){n=Oe("pre"),t=Oe("code"),s=Ma(o),this.h()},l(l){n=xe(l,"PRE",{});var d=We(n);t=xe(d,"CODE",{class:!0});var f=We(t);s=$a(f,o),f.forEach(K),d.forEach(K),this.h()},h(){Dn(t,"class",a=`lang-${r[0].lang}`)},m(l,d){be(l,n,d),wt(n,t),wt(t,s)},p(l,[d]){d&1&&o!==(o=l[0].text+"")&&Pa(s,o),d&1&&a!==(a=`lang-${l[0].lang}`)&&Dn(t,"class",a)},i:Xe,o:Xe,d(l){l&&K(n)}}}function rb(r,n,t){let{token:o}=n;const s=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,s,a]}class ib extends Be{constructor(n){super(),ze(this,n,rb,tb,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function sb(r){let n,t=r[0].raw.slice(1,r[0].raw.length-1)+"",o;return{c(){n=Oe("code"),o=Ma(t)},l(s){n=xe(s,"CODE",{});var a=We(n);o=$a(a,t),a.forEach(K)},m(s,a){be(s,n,a),wt(n,o)},p(s,[a]){a&1&&t!==(t=s[0].raw.slice(1,s[0].raw.length-1)+"")&&Pa(o,t)},i:Xe,o:Xe,d(s){s&&K(n)}}}function ob(r,n,t){let{token:o}=n;const s=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,s,a]}class ab extends Be{constructor(n){super(),ze(this,n,ob,sb,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Hc(r,n,t){const o=r.slice();return o[3]=n[t],o}function Jc(r,n,t){const o=r.slice();return o[6]=n[t],o}function Kc(r,n,t){const o=r.slice();return o[9]=n[t],o}function Yc(r){let n,t,o,s;return t=new Ps({props:{tokens:r[9].tokens,options:r[1],renderers:r[2]}}),{c(){n=Oe("th"),Zt(t.$$.fragment),o=Ua(),this.h()},l(a){n=xe(a,"TH",{scope:!0});var l=We(n);mr(t.$$.fragment,l),o=Ga(l),l.forEach(K),this.h()},h(){Dn(n,"scope","col")},m(a,l){be(a,n,l),Ht(t,n,null),wt(n,o),s=!0},p(a,l){const d={};l&1&&(d.tokens=a[9].tokens),l&2&&(d.options=a[1]),l&4&&(d.renderers=a[2]),t.$set(d)},i(a){s||(ee(t.$$.fragment,a),s=!0)},o(a){oe(t.$$.fragment,a),s=!1},d(a){a&&K(n),Jt(t)}}}function Qc(r){let n,t,o;return t=new Ps({props:{tokens:r[6].tokens,options:r[1],renderers:r[2]}}),{c(){n=Oe("td"),Zt(t.$$.fragment)},l(s){n=xe(s,"TD",{});var a=We(n);mr(t.$$.fragment,a),a.forEach(K)},m(s,a){be(s,n,a),Ht(t,n,null),o=!0},p(s,a){const l={};a&1&&(l.tokens=s[6].tokens),a&2&&(l.options=s[1]),a&4&&(l.renderers=s[2]),t.$set(l)},i(s){o||(ee(t.$$.fragment,s),o=!0)},o(s){oe(t.$$.fragment,s),o=!1},d(s){s&&K(n),Jt(t)}}}function Xc(r){let n,t,o,s=ct(r[3]),a=[];for(let d=0;d<s.length;d+=1)a[d]=Qc(Jc(r,s,d));const l=d=>oe(a[d],1,1,()=>{a[d]=null});return{c(){n=Oe("tr");for(let d=0;d<a.length;d+=1)a[d].c();t=Ua()},l(d){n=xe(d,"TR",{});var f=We(n);for(let m=0;m<a.length;m+=1)a[m].l(f);t=Ga(f),f.forEach(K)},m(d,f){be(d,n,f);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(n,null);wt(n,t),o=!0},p(d,f){if(f&7){s=ct(d[3]);let m;for(m=0;m<s.length;m+=1){const D=Jc(d,s,m);a[m]?(a[m].p(D,f),ee(a[m],1)):(a[m]=Qc(D),a[m].c(),ee(a[m],1),a[m].m(n,t))}for(Ft(),m=s.length;m<a.length;m+=1)l(m);Nt()}},i(d){if(!o){for(let f=0;f<s.length;f+=1)ee(a[f]);o=!0}},o(d){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)oe(a[f]);o=!1},d(d){d&&K(n),vi(a,d)}}}function ub(r){let n,t,o,s,a,l,d=ct(r[0].header),f=[];for(let A=0;A<d.length;A+=1)f[A]=Yc(Kc(r,d,A));const m=A=>oe(f[A],1,1,()=>{f[A]=null});let D=ct(r[0].rows),v=[];for(let A=0;A<D.length;A+=1)v[A]=Xc(Hc(r,D,A));const k=A=>oe(v[A],1,1,()=>{v[A]=null});return{c(){n=Oe("table"),t=Oe("thead"),o=Oe("tr");for(let A=0;A<f.length;A+=1)f[A].c();s=Ua(),a=Oe("tbody");for(let A=0;A<v.length;A+=1)v[A].c()},l(A){n=xe(A,"TABLE",{});var F=We(n);t=xe(F,"THEAD",{});var B=We(t);o=xe(B,"TR",{});var j=We(o);for(let Se=0;Se<f.length;Se+=1)f[Se].l(j);j.forEach(K),B.forEach(K),s=Ga(F),a=xe(F,"TBODY",{});var ce=We(a);for(let Se=0;Se<v.length;Se+=1)v[Se].l(ce);ce.forEach(K),F.forEach(K)},m(A,F){be(A,n,F),wt(n,t),wt(t,o);for(let B=0;B<f.length;B+=1)f[B]&&f[B].m(o,null);wt(n,s),wt(n,a);for(let B=0;B<v.length;B+=1)v[B]&&v[B].m(a,null);l=!0},p(A,[F]){if(F&7){d=ct(A[0].header);let B;for(B=0;B<d.length;B+=1){const j=Kc(A,d,B);f[B]?(f[B].p(j,F),ee(f[B],1)):(f[B]=Yc(j),f[B].c(),ee(f[B],1),f[B].m(o,null))}for(Ft(),B=d.length;B<f.length;B+=1)m(B);Nt()}if(F&7){D=ct(A[0].rows);let B;for(B=0;B<D.length;B+=1){const j=Hc(A,D,B);v[B]?(v[B].p(j,F),ee(v[B],1)):(v[B]=Xc(j),v[B].c(),ee(v[B],1),v[B].m(a,null))}for(Ft(),B=D.length;B<v.length;B+=1)k(B);Nt()}},i(A){if(!l){for(let F=0;F<d.length;F+=1)ee(f[F]);for(let F=0;F<D.length;F+=1)ee(v[F]);l=!0}},o(A){f=f.filter(Boolean);for(let F=0;F<f.length;F+=1)oe(f[F]);v=v.filter(Boolean);for(let F=0;F<v.length;F+=1)oe(v[F]);l=!1},d(A){A&&K(n),vi(f,A),vi(v,A)}}}function lb(r,n,t){let{token:o}=n,{options:s}=n,{renderers:a}=n;return r.$$set=l=>{"token"in l&&t(0,o=l.token),"options"in l&&t(1,s=l.options),"renderers"in l&&t(2,a=l.renderers)},[o,s,a]}class cb extends Be{constructor(n){super(),ze(this,n,lb,ub,Ne,{token:0,options:1,renderers:2})}}function db(r){let n,t=r[0].text+"",o;return{c(){n=new kv(!1),o=sn(),this.h()},l(s){n=Cv(s,!1),o=sn(),this.h()},h(){n.a=o},m(s,a){n.m(t,s,a),be(s,o,a)},p(s,[a]){a&1&&t!==(t=s[0].text+"")&&n.p(t)},i:Xe,o:Xe,d(s){s&&(K(o),n.d())}}}function fb(r,n,t){let{token:o}=n;const s=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,o=l.token)},[o,s,a]}class hb extends Be{constructor(n){super(),ze(this,n,fb,db,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function pb(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Oe("p"),s&&s.c()},l(a){n=xe(a,"P",{});var l=We(n);s&&s.l(l),l.forEach(K)},m(a,l){be(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function gb(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,d=void 0;return r.$$set=f=>{"$$scope"in f&&t(3,s=f.$$scope)},[a,l,d,s,o]}class mb extends Be{constructor(n){super(),ze(this,n,gb,pb,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Db(r){let n,t,o,s;const a=r[4].default,l=nt(a,r,r[3],null);return{c(){n=Oe("a"),l&&l.c(),this.h()},l(d){n=xe(d,"A",{href:!0,title:!0});var f=We(n);l&&l.l(f),f.forEach(K),this.h()},h(){Dn(n,"href",t=Ti(r[0].href)?bi(r[1].baseUrl,r[0].href):r[0].href),Dn(n,"title",o=r[0].title)},m(d,f){be(d,n,f),l&&l.m(n,null),s=!0},p(d,[f]){l&&l.p&&(!s||f&8)&&tt(l,a,d,d[3],s?it(a,d[3],f,null):rt(d[3]),null),(!s||f&3&&t!==(t=Ti(d[0].href)?bi(d[1].baseUrl,d[0].href):d[0].href))&&Dn(n,"href",t),(!s||f&1&&o!==(o=d[0].title))&&Dn(n,"title",o)},i(d){s||(ee(l,d),s=!0)},o(d){oe(l,d),s=!1},d(d){d&&K(n),l&&l.d(d)}}}function Eb(r,n,t){let{$$slots:o={},$$scope:s}=n,{token:a}=n,{options:l}=n;const d=void 0;return r.$$set=f=>{"token"in f&&t(0,a=f.token),"options"in f&&t(1,l=f.options),"$$scope"in f&&t(3,s=f.$$scope)},[a,l,d,s,o]}class vb extends Be{constructor(n){super(),ze(this,n,Eb,Db,Ne,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function bb(r){let n;const t=r[4].default,o=nt(t,r,r[3],null);return{c(){o&&o.c()},l(s){o&&o.l(s)},m(s,a){o&&o.m(s,a),n=!0},p(s,[a]){o&&o.p&&(!n||a&8)&&tt(o,t,s,s[3],n?it(t,s[3],a,null):rt(s[3]),null)},i(s){n||(ee(o,s),n=!0)},o(s){oe(o,s),n=!1},d(s){o&&o.d(s)}}}function Tb(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,d=void 0;return r.$$set=f=>{"$$scope"in f&&t(3,s=f.$$scope)},[a,l,d,s,o]}class _b extends Be{constructor(n){super(),ze(this,n,Tb,bb,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Ib(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Oe("dfn"),s&&s.c()},l(a){n=xe(a,"DFN",{});var l=We(n);s&&s.l(l),l.forEach(K)},m(a,l){be(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function yb(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,d=void 0;return r.$$set=f=>{"$$scope"in f&&t(3,s=f.$$scope)},[a,l,d,s,o]}class Ab extends Be{constructor(n){super(),ze(this,n,yb,Ib,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Sb(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Oe("del"),s&&s.c()},l(a){n=xe(a,"DEL",{});var l=We(n);s&&s.l(l),l.forEach(K)},m(a,l){be(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function wb(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,d=void 0;return r.$$set=f=>{"$$scope"in f&&t(3,s=f.$$scope)},[a,l,d,s,o]}class Fb extends Be{constructor(n){super(),ze(this,n,wb,Sb,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Nb(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Oe("em"),s&&s.c()},l(a){n=xe(a,"EM",{});var l=We(n);s&&s.l(l),l.forEach(K)},m(a,l){be(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function kb(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,d=void 0;return r.$$set=f=>{"$$scope"in f&&t(3,s=f.$$scope)},[a,l,d,s,o]}class Cb extends Be{constructor(n){super(),ze(this,n,kb,Nb,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Ob(r){let n;return{c(){n=Oe("hr")},l(t){n=xe(t,"HR",{})},m(t,o){be(t,n,o)},p:Xe,i:Xe,o:Xe,d(t){t&&K(n)}}}function xb(r,n,t){return[void 0,void 0,void 0]}class Lb extends Be{constructor(n){super(),ze(this,n,xb,Ob,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Rb(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Oe("strong"),s&&s.c()},l(a){n=xe(a,"STRONG",{});var l=We(n);s&&s.l(l),l.forEach(K)},m(a,l){be(a,n,l),s&&s.m(n,null),t=!0},p(a,[l]){s&&s.p&&(!t||l&8)&&tt(s,o,a,a[3],t?it(o,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&K(n),s&&s.d(a)}}}function Bb(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,d=void 0;return r.$$set=f=>{"$$scope"in f&&t(3,s=f.$$scope)},[a,l,d,s,o]}class zb extends Be{constructor(n){super(),ze(this,n,Bb,Rb,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Mb(r){let n,t,o,s;return{c(){n=Oe("img"),this.h()},l(a){n=xe(a,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Uc(n.src,t=Ti(r[0].href)?bi(r[1].baseUrl,r[0].href):r[0].href)||Dn(n,"src",t),Dn(n,"title",o=r[0].title),Dn(n,"alt",s=r[0].text),Dn(n,"class","markdown-image svelte-z38cge")},m(a,l){be(a,n,l)},p(a,[l]){l&3&&!Uc(n.src,t=Ti(a[0].href)?bi(a[1].baseUrl,a[0].href):a[0].href)&&Dn(n,"src",t),l&1&&o!==(o=a[0].title)&&Dn(n,"title",o),l&1&&s!==(s=a[0].text)&&Dn(n,"alt",s)},i:Xe,o:Xe,d(a){a&&K(n)}}}function $b(r,n,t){let{token:o}=n,{options:s}=n;const a=void 0;return r.$$set=l=>{"token"in l&&t(0,o=l.token),"options"in l&&t(1,s=l.options)},[o,s,a]}class Pb extends Be{constructor(n){super(),ze(this,n,$b,Mb,Ne,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function Ub(r){let n;const t=r[4].default,o=nt(t,r,r[3],null);return{c(){o&&o.c()},l(s){o&&o.l(s)},m(s,a){o&&o.m(s,a),n=!0},p(s,[a]){o&&o.p&&(!n||a&8)&&tt(o,t,s,s[3],n?it(t,s[3],a,null):rt(s[3]),null)},i(s){n||(ee(o,s),n=!0)},o(s){oe(o,s),n=!1},d(s){o&&o.d(s)}}}function Gb(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,l=void 0,d=void 0;return r.$$set=f=>{"$$scope"in f&&t(3,s=f.$$scope)},[a,l,d,s,o]}class ed extends Be{constructor(n){super(),ze(this,n,Gb,Ub,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}const Vb=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,Wb=Object.hasOwnProperty;class xd{constructor(){this.occurrences,this.reset()}slug(n,t){const o=this;let s=jb(n,t===!0);const a=s;for(;Wb.call(o.occurrences,s);)o.occurrences[a]++,s=a+"-"+o.occurrences[a];return o.occurrences[s]=0,s}reset(){this.occurrences=Object.create(null)}}function jb(r,n){return typeof r!="string"?"":(n||(r=r.toLowerCase()),r.replace(Vb,"").replace(/ /g,"-"))}function Va(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Dr=Va();function Ld(r){Dr=r}const Rd=/[&<>"']/,qb=new RegExp(Rd.source,"g"),Bd=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Zb=new RegExp(Bd.source,"g"),Hb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nd=r=>Hb[r];function wn(r,n){if(n){if(Rd.test(r))return r.replace(qb,nd)}else if(Bd.test(r))return r.replace(Zb,nd);return r}const Jb=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Kb(r){return r.replace(Jb,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Yb=/(^|[^\[])\^/g;function ve(r,n){let t=typeof r=="string"?r:r.source;n=n||"";const o={replace:(s,a)=>{let l=typeof a=="string"?a:a.source;return l=l.replace(Yb,"$1"),t=t.replace(s,l),o},getRegex:()=>new RegExp(t,n)};return o}function td(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const gi={exec:()=>null};function rd(r,n){const t=r.replace(/\|/g,(a,l,d)=>{let f=!1,m=l;for(;--m>=0&&d[m]==="\\";)f=!f;return f?"|":" |"}),o=t.split(/ \|/);let s=0;if(o[0].trim()||o.shift(),o.length>0&&!o[o.length-1].trim()&&o.pop(),n)if(o.length>n)o.splice(n);else for(;o.length<n;)o.push("");for(;s<o.length;s++)o[s]=o[s].trim().replace(/\\\|/g,"|");return o}function li(r,n,t){const o=r.length;if(o===0)return"";let s=0;for(;s<o;){const a=r.charAt(o-s-1);if(a===n&&!t)s++;else if(a!==n&&t)s++;else break}return r.slice(0,o-s)}function Qb(r,n){if(r.indexOf(n[1])===-1)return-1;let t=0;for(let o=0;o<r.length;o++)if(r[o]==="\\")o++;else if(r[o]===n[0])t++;else if(r[o]===n[1]&&(t--,t<0))return o;return-1}function id(r,n,t,o){const s=n.href,a=n.title?wn(n.title):null,l=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){o.state.inLink=!0;const d={type:"link",raw:t,href:s,title:a,text:l,tokens:o.inlineTokens(l)};return o.state.inLink=!1,d}return{type:"image",raw:t,href:s,title:a,text:wn(l)}}function Xb(r,n){const t=r.match(/^(\s+)(?:```)/);if(t===null)return n;const o=t[1];return n.split(`
`).map(s=>{const a=s.match(/^\s+/);if(a===null)return s;const[l]=a;return l.length>=o.length?s.slice(o.length):s}).join(`
`)}class ks{constructor(n){_e(this,"options");_e(this,"rules");_e(this,"lexer");this.options=n||Dr}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const o=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?o:li(o,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const o=t[0],s=Xb(o,t[3]||"");return{type:"code",raw:o,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let o=t[2].trim();if(/#$/.test(o)){const s=li(o,"#");(this.options.pedantic||!s||/ $/.test(s))&&(o=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:o,tokens:this.lexer.inline(o)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:li(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let o=li(t[0],`
`).split(`
`),s="",a="";const l=[];for(;o.length>0;){let d=!1;const f=[];let m;for(m=0;m<o.length;m++)if(/^ {0,3}>/.test(o[m]))f.push(o[m]),d=!0;else if(!d)f.push(o[m]);else break;o=o.slice(m);const D=f.join(`
`),v=D.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");s=s?`${s}
${D}`:D,a=a?`${a}
${v}`:v;const k=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(v,l,!0),this.lexer.state.top=k,o.length===0)break;const A=l[l.length-1];if((A==null?void 0:A.type)==="code")break;if((A==null?void 0:A.type)==="blockquote"){const F=A,B=F.raw+`
`+o.join(`
`),j=this.blockquote(B);l[l.length-1]=j,s=s.substring(0,s.length-F.raw.length)+j.raw,a=a.substring(0,a.length-F.text.length)+j.text;break}else if((A==null?void 0:A.type)==="list"){const F=A,B=F.raw+`
`+o.join(`
`),j=this.list(B);l[l.length-1]=j,s=s.substring(0,s.length-A.raw.length)+j.raw,a=a.substring(0,a.length-F.raw.length)+j.raw,o=B.substring(l[l.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:l,text:a}}}list(n){let t=this.rules.block.list.exec(n);if(t){let o=t[1].trim();const s=o.length>1,a={type:"list",raw:"",ordered:s,start:s?+o.slice(0,-1):"",loose:!1,items:[]};o=s?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=s?o:"[*+-]");const l=new RegExp(`^( {0,3}${o})((?:[	 ][^\\n]*)?(?:\\n|$))`);let d=!1;for(;n;){let f=!1,m="",D="";if(!(t=l.exec(n))||this.rules.block.hr.test(n))break;m=t[0],n=n.substring(m.length);let v=t[2].split(`
`,1)[0].replace(/^\t+/,ce=>" ".repeat(3*ce.length)),k=n.split(`
`,1)[0],A=!v.trim(),F=0;if(this.options.pedantic?(F=2,D=v.trimStart()):A?F=t[1].length+1:(F=t[2].search(/[^ ]/),F=F>4?1:F,D=v.slice(F),F+=t[1].length),A&&/^ *$/.test(k)&&(m+=k+`
`,n=n.substring(k.length+1),f=!0),!f){const ce=new RegExp(`^ {0,${Math.min(3,F-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Se=new RegExp(`^ {0,${Math.min(3,F-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),me=new RegExp(`^ {0,${Math.min(3,F-1)}}(?:\`\`\`|~~~)`),ke=new RegExp(`^ {0,${Math.min(3,F-1)}}#`);for(;n;){const Le=n.split(`
`,1)[0];if(k=Le,this.options.pedantic&&(k=k.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),me.test(k)||ke.test(k)||ce.test(k)||Se.test(n))break;if(k.search(/[^ ]/)>=F||!k.trim())D+=`
`+k.slice(F);else{if(A||v.search(/[^ ]/)>=4||me.test(v)||ke.test(v)||Se.test(v))break;D+=`
`+k}!A&&!k.trim()&&(A=!0),m+=Le+`
`,n=n.substring(Le.length+1),v=k.slice(F)}}a.loose||(d?a.loose=!0:/\n *\n *$/.test(m)&&(d=!0));let B=null,j;this.options.gfm&&(B=/^\[[ xX]\] /.exec(D),B&&(j=B[0]!=="[ ] ",D=D.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:m,task:!!B,checked:j,loose:!1,text:D,tokens:[]}),a.raw+=m}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let f=0;f<a.items.length;f++)if(this.lexer.state.top=!1,a.items[f].tokens=this.lexer.blockTokens(a.items[f].text,[]),!a.loose){const m=a.items[f].tokens.filter(v=>v.type==="space"),D=m.length>0&&m.some(v=>/\n.*\n/.test(v.raw));a.loose=D}if(a.loose)for(let f=0;f<a.items.length;f++)a.items[f].loose=!0;return a}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const o=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:o,raw:t[0],href:s,title:a}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const o=rd(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),a=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:t[0],header:[],align:[],rows:[]};if(o.length===s.length){for(const d of s)/^ *-+: *$/.test(d)?l.align.push("right"):/^ *:-+: *$/.test(d)?l.align.push("center"):/^ *:-+ *$/.test(d)?l.align.push("left"):l.align.push(null);for(let d=0;d<o.length;d++)l.header.push({text:o[d],tokens:this.lexer.inline(o[d]),header:!0,align:l.align[d]});for(const d of a)l.rows.push(rd(d,l.header.length).map((f,m)=>({text:f,tokens:this.lexer.inline(f),header:!1,align:l.align[m]})));return l}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const o=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:o,tokens:this.lexer.inline(o)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:wn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const o=t[2].trim();if(!this.options.pedantic&&/^</.test(o)){if(!/>$/.test(o))return;const l=li(o.slice(0,-1),"\\");if((o.length-l.length)%2===0)return}else{const l=Qb(t[2],"()");if(l>-1){const f=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,f).trim(),t[3]=""}}let s=t[2],a="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);l&&(s=l[1],a=l[3])}else a=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(o)?s=s.slice(1):s=s.slice(1,-1)),id(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let o;if((o=this.rules.inline.reflink.exec(n))||(o=this.rules.inline.nolink.exec(n))){const s=(o[2]||o[1]).replace(/\s+/g," "),a=t[s.toLowerCase()];if(!a){const l=o[0].charAt(0);return{type:"text",raw:l,text:l}}return id(o,a,o[0],this.lexer)}}emStrong(n,t,o=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!s||s[3]&&o.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!o||this.rules.inline.punctuation.exec(o)){const l=[...s[0]].length-1;let d,f,m=l,D=0;const v=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(v.lastIndex=0,t=t.slice(-1*n.length+l);(s=v.exec(t))!=null;){if(d=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!d)continue;if(f=[...d].length,s[3]||s[4]){m+=f;continue}else if((s[5]||s[6])&&l%3&&!((l+f)%3)){D+=f;continue}if(m-=f,m>0)continue;f=Math.min(f,f+m+D);const k=[...s[0]][0].length,A=n.slice(0,l+s.index+k+f);if(Math.min(l,f)%2){const B=A.slice(1,-1);return{type:"em",raw:A,text:B,tokens:this.lexer.inlineTokens(B)}}const F=A.slice(2,-2);return{type:"strong",raw:A,text:F,tokens:this.lexer.inlineTokens(F)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let o=t[2].replace(/\n/g," ");const s=/[^ ]/.test(o),a=/^ /.test(o)&&/ $/.test(o);return s&&a&&(o=o.substring(1,o.length-1)),o=wn(o,!0),{type:"codespan",raw:t[0],text:o}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let o,s;return t[2]==="@"?(o=wn(t[1]),s="mailto:"+o):(o=wn(t[1]),s=o),{type:"link",raw:t[0],text:o,href:s,tokens:[{type:"text",raw:o,text:o}]}}}url(n){var o;let t;if(t=this.rules.inline.url.exec(n)){let s,a;if(t[2]==="@")s=wn(t[0]),a="mailto:"+s;else{let l;do l=t[0],t[0]=((o=this.rules.inline._backpedal.exec(t[0]))==null?void 0:o[0])??"";while(l!==t[0]);s=wn(t[0]),t[1]==="www."?a="http://"+t[0]:a=t[0]}return{type:"link",raw:t[0],text:s,href:a,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let o;return this.lexer.state.inRawBlock?o=t[0]:o=wn(t[0]),{type:"text",raw:t[0],text:o}}}}const eT=/^(?: *(?:\n|$))+/,nT=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,tT=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ai=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,rT=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,zd=/(?:[*+-]|\d{1,9}[.)])/,Md=ve(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,zd).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Wa=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,iT=/^[^\n]+/,ja=/(?!\s*\])(?:\\.|[^\[\]\\])+/,sT=ve(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",ja).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),oT=ve(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,zd).getRegex(),Us="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",qa=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,aT=ve("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",qa).replace("tag",Us).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),$d=ve(Wa).replace("hr",Ai).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Us).getRegex(),uT=ve(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",$d).getRegex(),Za={blockquote:uT,code:nT,def:sT,fences:tT,heading:rT,hr:Ai,html:aT,lheading:Md,list:oT,newline:eT,paragraph:$d,table:gi,text:iT},sd=ve("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ai).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Us).getRegex(),lT={...Za,table:sd,paragraph:ve(Wa).replace("hr",Ai).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",sd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Us).getRegex()},cT={...Za,html:ve(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",qa).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:gi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ve(Wa).replace("hr",Ai).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Md).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Pd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,dT=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ud=/^( {2,}|\\)\n(?!\s*$)/,fT=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Si="\\p{P}\\p{S}",hT=ve(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Si).getRegex(),pT=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,gT=ve(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Si).getRegex(),mT=ve("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Si).getRegex(),DT=ve("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Si).getRegex(),ET=ve(/\\([punct])/,"gu").replace(/punct/g,Si).getRegex(),vT=ve(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),bT=ve(qa).replace("(?:-->|$)","-->").getRegex(),TT=ve("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",bT).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Cs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,_T=ve(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Cs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Gd=ve(/^!?\[(label)\]\[(ref)\]/).replace("label",Cs).replace("ref",ja).getRegex(),Vd=ve(/^!?\[(ref)\](?:\[\])?/).replace("ref",ja).getRegex(),IT=ve("reflink|nolink(?!\\()","g").replace("reflink",Gd).replace("nolink",Vd).getRegex(),Ha={_backpedal:gi,anyPunctuation:ET,autolink:vT,blockSkip:pT,br:Ud,code:dT,del:gi,emStrongLDelim:gT,emStrongRDelimAst:mT,emStrongRDelimUnd:DT,escape:Pd,link:_T,nolink:Vd,punctuation:hT,reflink:Gd,reflinkSearch:IT,tag:TT,text:fT,url:gi},yT={...Ha,link:ve(/^!?\[(label)\]\((.*?)\)/).replace("label",Cs).getRegex(),reflink:ve(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Cs).getRegex()},wa={...Ha,escape:ve(Pd).replace("])","~|])").getRegex(),url:ve(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},AT={...wa,br:ve(Ud).replace("{2,}","*").getRegex(),text:ve(wa.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ts={normal:Za,gfm:lT,pedantic:cT},ci={normal:Ha,gfm:wa,breaks:AT,pedantic:yT};class Yn{constructor(n){_e(this,"tokens");_e(this,"options");_e(this,"state");_e(this,"tokenizer");_e(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||Dr,this.options.tokenizer=this.options.tokenizer||new ks,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Ts.normal,inline:ci.normal};this.options.pedantic?(t.block=Ts.pedantic,t.inline=ci.pedantic):this.options.gfm&&(t.block=Ts.gfm,this.options.breaks?t.inline=ci.breaks:t.inline=ci.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ts,inline:ci}}static lex(n,t){return new Yn(t).lex(n)}static lexInline(n,t){return new Yn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const o=this.inlineQueue[t];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],o=!1){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(d,f,m)=>f+"    ".repeat(m.length));let s,a,l;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(d=>(s=d.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(l=n,this.options.extensions&&this.options.extensions.startBlock){let d=1/0;const f=n.slice(1);let m;this.options.extensions.startBlock.forEach(D=>{m=D.call({lexer:this},f),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(l=n.substring(0,d+1))}if(this.state.top&&(s=this.tokenizer.paragraph(l))){a=t[t.length-1],o&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s),o=l.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&a.type==="text"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(n){const d="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let o,s,a,l=n,d,f,m;if(this.tokens.links){const D=Object.keys(this.tokens.links);if(D.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)D.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(d=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,d.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(f||(m=""),f=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(D=>(o=D.call({lexer:this},n,t))?(n=n.substring(o.raw.length),t.push(o),!0):!1))){if(o=this.tokenizer.escape(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(n)){n=n.substring(o.raw.length),s=t[t.length-1],s&&o.type==="text"&&s.type==="text"?(s.raw+=o.raw,s.text+=o.text):t.push(o);continue}if(o=this.tokenizer.link(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(o.raw.length),s=t[t.length-1],s&&o.type==="text"&&s.type==="text"?(s.raw+=o.raw,s.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(n,l,m)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(n)){n=n.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(n))){n=n.substring(o.raw.length),t.push(o);continue}if(a=n,this.options.extensions&&this.options.extensions.startInline){let D=1/0;const v=n.slice(1);let k;this.options.extensions.startInline.forEach(A=>{k=A.call({lexer:this},v),typeof k=="number"&&k>=0&&(D=Math.min(D,k))}),D<1/0&&D>=0&&(a=n.substring(0,D+1))}if(o=this.tokenizer.inlineText(a)){n=n.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(m=o.raw.slice(-1)),f=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=o.raw,s.text+=o.text):t.push(o);continue}if(n){const D="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(D);break}else throw new Error(D)}}return t}}class Os{constructor(n){_e(this,"options");_e(this,"parser");this.options=n||Dr}space(n){return""}code({text:n,lang:t,escaped:o}){var l;const s=(l=(t||"").match(/^\S*/))==null?void 0:l[0],a=n.replace(/\n$/,"")+`
`;return s?'<pre><code class="language-'+wn(s)+'">'+(o?a:wn(a,!0))+`</code></pre>
`:"<pre><code>"+(o?a:wn(a,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,o=n.start;let s="";for(let d=0;d<n.items.length;d++){const f=n.items[d];s+=this.listitem(f)}const a=t?"ol":"ul",l=t&&o!==1?' start="'+o+'"':"";return"<"+a+l+`>
`+s+"</"+a+`>
`}listitem(n){let t="";if(n.task){const o=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=o+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=o+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:o+" ",text:o+" "}):t+=o+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",o="";for(let a=0;a<n.header.length;a++)o+=this.tablecell(n.header[a]);t+=this.tablerow({text:o});let s="";for(let a=0;a<n.rows.length;a++){const l=n.rows[a];o="";for(let d=0;d<l.length;d++)o+=this.tablecell(l[d]);s+=this.tablerow({text:o})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),o=n.header?"th":"td";return(n.align?`<${o} align="${n.align}">`:`<${o}>`)+t+`</${o}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:o}){const s=this.parser.parseInline(o),a=td(n);if(a===null)return s;n=a;let l='<a href="'+n+'"';return t&&(l+=' title="'+t+'"'),l+=">"+s+"</a>",l}image({href:n,title:t,text:o}){const s=td(n);if(s===null)return o;n=s;let a=`<img src="${n}" alt="${o}"`;return t&&(a+=` title="${t}"`),a+=">",a}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class Ja{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class dt{constructor(n){_e(this,"options");_e(this,"renderer");_e(this,"textRenderer");this.options=n||Dr,this.options.renderer=this.options.renderer||new Os,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ja}static parse(n,t){return new dt(t).parse(n)}static parseInline(n,t){return new dt(t).parseInline(n)}parse(n,t=!0){let o="";for(let s=0;s<n.length;s++){const a=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const d=a,f=this.options.extensions.renderers[d.type].call({parser:this},d);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type)){o+=f||"";continue}}const l=a;switch(l.type){case"space":{o+=this.renderer.space(l);continue}case"hr":{o+=this.renderer.hr(l);continue}case"heading":{o+=this.renderer.heading(l);continue}case"code":{o+=this.renderer.code(l);continue}case"table":{o+=this.renderer.table(l);continue}case"blockquote":{o+=this.renderer.blockquote(l);continue}case"list":{o+=this.renderer.list(l);continue}case"html":{o+=this.renderer.html(l);continue}case"paragraph":{o+=this.renderer.paragraph(l);continue}case"text":{let d=l,f=this.renderer.text(d);for(;s+1<n.length&&n[s+1].type==="text";)d=n[++s],f+=`
`+this.renderer.text(d);t?o+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f}]}):o+=f;continue}default:{const d='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return o}parseInline(n,t){t=t||this.renderer;let o="";for(let s=0;s<n.length;s++){const a=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const d=this.options.extensions.renderers[a.type].call({parser:this},a);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){o+=d||"";continue}}const l=a;switch(l.type){case"escape":{o+=t.text(l);break}case"html":{o+=t.html(l);break}case"link":{o+=t.link(l);break}case"image":{o+=t.image(l);break}case"strong":{o+=t.strong(l);break}case"em":{o+=t.em(l);break}case"codespan":{o+=t.codespan(l);break}case"br":{o+=t.br(l);break}case"del":{o+=t.del(l);break}case"text":{o+=t.text(l);break}default:{const d='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return o}}class mi{constructor(n){_e(this,"options");this.options=n||Dr}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}_e(mi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Lt,Wd,Fa,jd;class ST{constructor(...n){$c(this,Lt);_e(this,"defaults",Va());_e(this,"options",this.setOptions);_e(this,"parse",ui(this,Lt,Fa).call(this,Yn.lex,dt.parse));_e(this,"parseInline",ui(this,Lt,Fa).call(this,Yn.lexInline,dt.parseInline));_e(this,"Parser",dt);_e(this,"Renderer",Os);_e(this,"TextRenderer",Ja);_e(this,"Lexer",Yn);_e(this,"Tokenizer",ks);_e(this,"Hooks",mi);this.use(...n)}walkTokens(n,t){var s,a;let o=[];for(const l of n)switch(o=o.concat(t.call(this,l)),l.type){case"table":{const d=l;for(const f of d.header)o=o.concat(this.walkTokens(f.tokens,t));for(const f of d.rows)for(const m of f)o=o.concat(this.walkTokens(m.tokens,t));break}case"list":{const d=l;o=o.concat(this.walkTokens(d.items,t));break}default:{const d=l;(a=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&a[d.type]?this.defaults.extensions.childTokens[d.type].forEach(f=>{const m=d[f].flat(1/0);o=o.concat(this.walkTokens(m,t))}):d.tokens&&(o=o.concat(this.walkTokens(d.tokens,t)))}}return o}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(o=>{const s={...o};if(s.async=this.defaults.async||s.async||!1,o.extensions&&(o.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const l=t.renderers[a.name];l?t.renderers[a.name]=function(...d){let f=a.renderer.apply(this,d);return f===!1&&(f=l.apply(this,d)),f}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[a.level];l?l.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),s.extensions=t),o.renderer){const a=this.defaults.renderer||new Os(this.defaults);for(const l in o.renderer){if(!(l in a))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;const d=l;let f=o.renderer[d];o.useNewRenderer||(f=ui(this,Lt,Wd).call(this,f,d,a));const m=a[d];a[d]=(...D)=>{let v=f.apply(a,D);return v===!1&&(v=m.apply(a,D)),v||""}}s.renderer=a}if(o.tokenizer){const a=this.defaults.tokenizer||new ks(this.defaults);for(const l in o.tokenizer){if(!(l in a))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const d=l,f=o.tokenizer[d],m=a[d];a[d]=(...D)=>{let v=f.apply(a,D);return v===!1&&(v=m.apply(a,D)),v}}s.tokenizer=a}if(o.hooks){const a=this.defaults.hooks||new mi;for(const l in o.hooks){if(!(l in a))throw new Error(`hook '${l}' does not exist`);if(l==="options")continue;const d=l,f=o.hooks[d],m=a[d];mi.passThroughHooks.has(l)?a[d]=D=>{if(this.defaults.async)return Promise.resolve(f.call(a,D)).then(k=>m.call(a,k));const v=f.call(a,D);return m.call(a,v)}:a[d]=(...D)=>{let v=f.apply(a,D);return v===!1&&(v=m.apply(a,D)),v}}s.hooks=a}if(o.walkTokens){const a=this.defaults.walkTokens,l=o.walkTokens;s.walkTokens=function(d){let f=[];return f.push(l.call(this,d)),a&&(f=f.concat(a.call(this,d))),f}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return Yn.lex(n,t??this.defaults)}parser(n,t){return dt.parse(n,t??this.defaults)}}Lt=new WeakSet,Wd=function(n,t,o){switch(t){case"heading":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,o.parser.parseInline(s.tokens),s.depth,Kb(o.parser.parseInline(s.tokens,o.parser.textRenderer)))};case"code":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text,s.lang,!!s.escaped)};case"table":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);let a="",l="";for(let f=0;f<s.header.length;f++)l+=this.tablecell({text:s.header[f].text,tokens:s.header[f].tokens,header:!0,align:s.align[f]});a+=this.tablerow({text:l});let d="";for(let f=0;f<s.rows.length;f++){const m=s.rows[f];l="";for(let D=0;D<m.length;D++)l+=this.tablecell({text:m[D].text,tokens:m[D].tokens,header:!1,align:s.align[D]});d+=this.tablerow({text:l})}return n.call(this,a,d)};case"blockquote":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);const a=this.parser.parse(s.tokens);return n.call(this,a)};case"list":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);const a=s.ordered,l=s.start,d=s.loose;let f="";for(let m=0;m<s.items.length;m++){const D=s.items[m],v=D.checked,k=D.task;let A="";if(D.task){const F=this.checkbox({checked:!!v});d?D.tokens.length>0&&D.tokens[0].type==="paragraph"?(D.tokens[0].text=F+" "+D.tokens[0].text,D.tokens[0].tokens&&D.tokens[0].tokens.length>0&&D.tokens[0].tokens[0].type==="text"&&(D.tokens[0].tokens[0].text=F+" "+D.tokens[0].tokens[0].text)):D.tokens.unshift({type:"text",text:F+" "}):A+=F+" "}A+=this.parser.parse(D.tokens,d),f+=this.listitem({type:"list_item",raw:A,text:A,task:k,checked:!!v,loose:d,tokens:D.tokens})}return n.call(this,f,a,l)};case"html":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text,s.block)};case"paragraph":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"escape":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)};case"link":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.href,s.title,this.parser.parseInline(s.tokens))};case"image":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.href,s.title,s.text)};case"strong":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"em":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"codespan":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)};case"del":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"text":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)}}return n},Fa=function(n,t){return(o,s)=>{const a={...s},l={...this.defaults,...a};this.defaults.async===!0&&a.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const d=ui(this,Lt,jd).call(this,!!l.silent,!!l.async);if(typeof o>"u"||o===null)return d(new Error("marked(): input parameter is undefined or null"));if(typeof o!="string")return d(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(o):o).then(f=>n(f,l)).then(f=>l.hooks?l.hooks.processAllTokens(f):f).then(f=>l.walkTokens?Promise.all(this.walkTokens(f,l.walkTokens)).then(()=>f):f).then(f=>t(f,l)).then(f=>l.hooks?l.hooks.postprocess(f):f).catch(d);try{l.hooks&&(o=l.hooks.preprocess(o));let f=n(o,l);l.hooks&&(f=l.hooks.processAllTokens(f)),l.walkTokens&&this.walkTokens(f,l.walkTokens);let m=t(f,l);return l.hooks&&(m=l.hooks.postprocess(m)),m}catch(f){return d(f)}}},jd=function(n,t){return o=>{if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const s="<p>An error occurred:</p><pre>"+wn(o.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(o);throw o}};const fr=new ST;function Ee(r,n){return fr.parse(r,n)}Ee.options=Ee.setOptions=function(r){return fr.setOptions(r),Ee.defaults=fr.defaults,Ld(Ee.defaults),Ee};Ee.getDefaults=Va;Ee.defaults=Dr;Ee.use=function(...r){return fr.use(...r),Ee.defaults=fr.defaults,Ld(Ee.defaults),Ee};Ee.walkTokens=function(r,n){return fr.walkTokens(r,n)};Ee.parseInline=fr.parseInline;Ee.Parser=dt;Ee.parser=dt.parse;Ee.Renderer=Os;Ee.TextRenderer=Ja;Ee.Lexer=Yn;Ee.lexer=Yn.lex;Ee.Tokenizer=ks;Ee.Hooks=mi;Ee.parse=Ee;Ee.options;Ee.setOptions;Ee.use;Ee.walkTokens;Ee.parseInline;dt.parse;Yn.lex;function wT(r){return new Yn().lex(r)}const FT=()=>({heading:Vv,blockquote:qv,list:Jv,list_item:Qv,br:nb,code:ib,codespan:ab,table:cb,html:hb,paragraph:mb,link:vb,text:_b,def:Ab,del:Fb,em:Cb,hr:Lb,strong:zb,image:Pb,space:ed,escape:ed}),NT=()=>({baseUrl:"/",slugger:new xd});function kT(){const r=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||r(n)},Ov(()=>{console.warn=r})}function CT(r){let n,t;return n=new Ps({props:{tokens:r[0],renderers:r[1],options:r[2]}}),{c(){Zt(n.$$.fragment)},l(o){mr(n.$$.fragment,o)},m(o,s){Ht(n,o,s),t=!0},p(o,[s]){const a={};s&1&&(a.tokens=o[0]),s&2&&(a.renderers=o[1]),s&4&&(a.options=o[2]),n.$set(a)},i(o){t||(ee(n.$$.fragment,o),t=!0)},o(o){oe(n.$$.fragment,o),t=!1},d(o){Jt(n,o)}}}function OT(r,n,t){kT();let{source:o}=n,{options:s={}}=n,{renderers:a={}}=n,l,d,f;return r.$$set=m=>{"source"in m&&t(3,o=m.source),"options"in m&&t(4,s=m.options),"renderers"in m&&t(5,a=m.renderers)},r.$$.update=()=>{r.$$.dirty&56&&(t(0,l=wT(o)),t(1,d={...FT(),...a}),t(2,f={...NT(),...s}))},[l,d,f,o,s,a]}class Ly extends Be{constructor(n){super(),ze(this,n,OT,CT,Ne,{source:3,options:4,renderers:5})}}const wi={joinUrlPaths:bi,isRelative:Ti,generatePathSegment:Od};var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */xs.exports;(function(r,n){(function(){var t,o="4.17.21",s=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",d="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",m=500,D="__lodash_placeholder__",v=1,k=2,A=4,F=1,B=2,j=1,ce=2,Se=4,me=8,ke=16,Le=32,on=64,en=128,gt=256,x=512,Y=30,an="...",Rt=800,Qt=16,ki=1,vr=2,Ci=3,ot=1/0,Gn=9007199254740991,br=17976931348623157e292,Xt=NaN,Nn=4294967295,S=Nn-1,G=Nn>>>1,M=[["ary",en],["bind",j],["bindKey",ce],["curry",me],["curryRight",ke],["flip",x],["partial",Le],["partialRight",on],["rearg",gt]],P="[object Arguments]",he="[object Array]",Me="[object AsyncFunction]",pe="[object Boolean]",kn="[object Date]",Ur="[object DOMException]",Bt="[object Error]",nn="[object Function]",au="[object GeneratorFunction]",Vn="[object Map]",Gr="[object Number]",Wf="[object Null]",mt="[object Object]",uu="[object Promise]",jf="[object Proxy]",Vr="[object RegExp]",Wn="[object Set]",Wr="[object String]",Oi="[object Symbol]",qf="[object Undefined]",jr="[object WeakMap]",Zf="[object WeakSet]",qr="[object ArrayBuffer]",Tr="[object DataView]",Ys="[object Float32Array]",Qs="[object Float64Array]",Xs="[object Int8Array]",eo="[object Int16Array]",no="[object Int32Array]",to="[object Uint8Array]",ro="[object Uint8ClampedArray]",io="[object Uint16Array]",so="[object Uint32Array]",Hf=/\b__p \+= '';/g,Jf=/\b(__p \+=) '' \+/g,Kf=/(__e\(.*?\)|\b__t\)) \+\n'';/g,lu=/&(?:amp|lt|gt|quot|#39);/g,cu=/[&<>"']/g,Yf=RegExp(lu.source),Qf=RegExp(cu.source),Xf=/<%-([\s\S]+?)%>/g,eh=/<%([\s\S]+?)%>/g,du=/<%=([\s\S]+?)%>/g,nh=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,th=/^\w*$/,rh=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oo=/[\\^$.*+?()[\]{}|]/g,ih=RegExp(oo.source),ao=/^\s+/,sh=/\s/,oh=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ah=/\{\n\/\* \[wrapped with (.+)\] \*/,uh=/,? & /,lh=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ch=/[()=,{}\[\]\/\s]/,dh=/\\(\\)?/g,fh=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,fu=/\w*$/,hh=/^[-+]0x[0-9a-f]+$/i,ph=/^0b[01]+$/i,gh=/^\[object .+?Constructor\]$/,mh=/^0o[0-7]+$/i,Dh=/^(?:0|[1-9]\d*)$/,Eh=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xi=/($^)/,vh=/['\n\r\u2028\u2029\\]/g,Li="\\ud800-\\udfff",bh="\\u0300-\\u036f",Th="\\ufe20-\\ufe2f",_h="\\u20d0-\\u20ff",hu=bh+Th+_h,pu="\\u2700-\\u27bf",gu="a-z\\xdf-\\xf6\\xf8-\\xff",Ih="\\xac\\xb1\\xd7\\xf7",yh="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ah="\\u2000-\\u206f",Sh=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",mu="A-Z\\xc0-\\xd6\\xd8-\\xde",Du="\\ufe0e\\ufe0f",Eu=Ih+yh+Ah+Sh,uo="['’]",wh="["+Li+"]",vu="["+Eu+"]",Ri="["+hu+"]",bu="\\d+",Fh="["+pu+"]",Tu="["+gu+"]",_u="[^"+Li+Eu+bu+pu+gu+mu+"]",lo="\\ud83c[\\udffb-\\udfff]",Nh="(?:"+Ri+"|"+lo+")",Iu="[^"+Li+"]",co="(?:\\ud83c[\\udde6-\\uddff]){2}",fo="[\\ud800-\\udbff][\\udc00-\\udfff]",_r="["+mu+"]",yu="\\u200d",Au="(?:"+Tu+"|"+_u+")",kh="(?:"+_r+"|"+_u+")",Su="(?:"+uo+"(?:d|ll|m|re|s|t|ve))?",wu="(?:"+uo+"(?:D|LL|M|RE|S|T|VE))?",Fu=Nh+"?",Nu="["+Du+"]?",Ch="(?:"+yu+"(?:"+[Iu,co,fo].join("|")+")"+Nu+Fu+")*",Oh="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xh="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ku=Nu+Fu+Ch,Lh="(?:"+[Fh,co,fo].join("|")+")"+ku,Rh="(?:"+[Iu+Ri+"?",Ri,co,fo,wh].join("|")+")",Bh=RegExp(uo,"g"),zh=RegExp(Ri,"g"),ho=RegExp(lo+"(?="+lo+")|"+Rh+ku,"g"),Mh=RegExp([_r+"?"+Tu+"+"+Su+"(?="+[vu,_r,"$"].join("|")+")",kh+"+"+wu+"(?="+[vu,_r+Au,"$"].join("|")+")",_r+"?"+Au+"+"+Su,_r+"+"+wu,xh,Oh,bu,Lh].join("|"),"g"),$h=RegExp("["+yu+Li+hu+Du+"]"),Ph=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Uh=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Gh=-1,we={};we[Ys]=we[Qs]=we[Xs]=we[eo]=we[no]=we[to]=we[ro]=we[io]=we[so]=!0,we[P]=we[he]=we[qr]=we[pe]=we[Tr]=we[kn]=we[Bt]=we[nn]=we[Vn]=we[Gr]=we[mt]=we[Vr]=we[Wn]=we[Wr]=we[jr]=!1;var ye={};ye[P]=ye[he]=ye[qr]=ye[Tr]=ye[pe]=ye[kn]=ye[Ys]=ye[Qs]=ye[Xs]=ye[eo]=ye[no]=ye[Vn]=ye[Gr]=ye[mt]=ye[Vr]=ye[Wn]=ye[Wr]=ye[Oi]=ye[to]=ye[ro]=ye[io]=ye[so]=!0,ye[Bt]=ye[nn]=ye[jr]=!1;var Vh={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Wh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},jh={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},qh={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Zh=parseFloat,Hh=parseInt,Cu=typeof di=="object"&&di&&di.Object===Object&&di,Jh=typeof self=="object"&&self&&self.Object===Object&&self,Ye=Cu||Jh||Function("return this")(),po=n&&!n.nodeType&&n,er=po&&!0&&r&&!r.nodeType&&r,Ou=er&&er.exports===po,go=Ou&&Cu.process,Cn=function(){try{var _=er&&er.require&&er.require("util").types;return _||go&&go.binding&&go.binding("util")}catch{}}(),xu=Cn&&Cn.isArrayBuffer,Lu=Cn&&Cn.isDate,Ru=Cn&&Cn.isMap,Bu=Cn&&Cn.isRegExp,zu=Cn&&Cn.isSet,Mu=Cn&&Cn.isTypedArray;function bn(_,w,y){switch(y.length){case 0:return _.call(w);case 1:return _.call(w,y[0]);case 2:return _.call(w,y[0],y[1]);case 3:return _.call(w,y[0],y[1],y[2])}return _.apply(w,y)}function Kh(_,w,y,U){for(var Q=-1,fe=_==null?0:_.length;++Q<fe;){var qe=_[Q];w(U,qe,y(qe),_)}return U}function On(_,w){for(var y=-1,U=_==null?0:_.length;++y<U&&w(_[y],y,_)!==!1;);return _}function Yh(_,w){for(var y=_==null?0:_.length;y--&&w(_[y],y,_)!==!1;);return _}function $u(_,w){for(var y=-1,U=_==null?0:_.length;++y<U;)if(!w(_[y],y,_))return!1;return!0}function zt(_,w){for(var y=-1,U=_==null?0:_.length,Q=0,fe=[];++y<U;){var qe=_[y];w(qe,y,_)&&(fe[Q++]=qe)}return fe}function Bi(_,w){var y=_==null?0:_.length;return!!y&&Ir(_,w,0)>-1}function mo(_,w,y){for(var U=-1,Q=_==null?0:_.length;++U<Q;)if(y(w,_[U]))return!0;return!1}function Fe(_,w){for(var y=-1,U=_==null?0:_.length,Q=Array(U);++y<U;)Q[y]=w(_[y],y,_);return Q}function Mt(_,w){for(var y=-1,U=w.length,Q=_.length;++y<U;)_[Q+y]=w[y];return _}function Do(_,w,y,U){var Q=-1,fe=_==null?0:_.length;for(U&&fe&&(y=_[++Q]);++Q<fe;)y=w(y,_[Q],Q,_);return y}function Qh(_,w,y,U){var Q=_==null?0:_.length;for(U&&Q&&(y=_[--Q]);Q--;)y=w(y,_[Q],Q,_);return y}function Eo(_,w){for(var y=-1,U=_==null?0:_.length;++y<U;)if(w(_[y],y,_))return!0;return!1}var Xh=vo("length");function ep(_){return _.split("")}function np(_){return _.match(lh)||[]}function Pu(_,w,y){var U;return y(_,function(Q,fe,qe){if(w(Q,fe,qe))return U=fe,!1}),U}function zi(_,w,y,U){for(var Q=_.length,fe=y+(U?1:-1);U?fe--:++fe<Q;)if(w(_[fe],fe,_))return fe;return-1}function Ir(_,w,y){return w===w?hp(_,w,y):zi(_,Uu,y)}function tp(_,w,y,U){for(var Q=y-1,fe=_.length;++Q<fe;)if(U(_[Q],w))return Q;return-1}function Uu(_){return _!==_}function Gu(_,w){var y=_==null?0:_.length;return y?To(_,w)/y:Xt}function vo(_){return function(w){return w==null?t:w[_]}}function bo(_){return function(w){return _==null?t:_[w]}}function Vu(_,w,y,U,Q){return Q(_,function(fe,qe,Te){y=U?(U=!1,fe):w(y,fe,qe,Te)}),y}function rp(_,w){var y=_.length;for(_.sort(w);y--;)_[y]=_[y].value;return _}function To(_,w){for(var y,U=-1,Q=_.length;++U<Q;){var fe=w(_[U]);fe!==t&&(y=y===t?fe:y+fe)}return y}function _o(_,w){for(var y=-1,U=Array(_);++y<_;)U[y]=w(y);return U}function ip(_,w){return Fe(w,function(y){return[y,_[y]]})}function Wu(_){return _&&_.slice(0,Hu(_)+1).replace(ao,"")}function Tn(_){return function(w){return _(w)}}function Io(_,w){return Fe(w,function(y){return _[y]})}function Zr(_,w){return _.has(w)}function ju(_,w){for(var y=-1,U=_.length;++y<U&&Ir(w,_[y],0)>-1;);return y}function qu(_,w){for(var y=_.length;y--&&Ir(w,_[y],0)>-1;);return y}function sp(_,w){for(var y=_.length,U=0;y--;)_[y]===w&&++U;return U}var op=bo(Vh),ap=bo(Wh);function up(_){return"\\"+qh[_]}function lp(_,w){return _==null?t:_[w]}function yr(_){return $h.test(_)}function cp(_){return Ph.test(_)}function dp(_){for(var w,y=[];!(w=_.next()).done;)y.push(w.value);return y}function yo(_){var w=-1,y=Array(_.size);return _.forEach(function(U,Q){y[++w]=[Q,U]}),y}function Zu(_,w){return function(y){return _(w(y))}}function $t(_,w){for(var y=-1,U=_.length,Q=0,fe=[];++y<U;){var qe=_[y];(qe===w||qe===D)&&(_[y]=D,fe[Q++]=y)}return fe}function Mi(_){var w=-1,y=Array(_.size);return _.forEach(function(U){y[++w]=U}),y}function fp(_){var w=-1,y=Array(_.size);return _.forEach(function(U){y[++w]=[U,U]}),y}function hp(_,w,y){for(var U=y-1,Q=_.length;++U<Q;)if(_[U]===w)return U;return-1}function pp(_,w,y){for(var U=y+1;U--;)if(_[U]===w)return U;return U}function Ar(_){return yr(_)?mp(_):Xh(_)}function jn(_){return yr(_)?Dp(_):ep(_)}function Hu(_){for(var w=_.length;w--&&sh.test(_.charAt(w)););return w}var gp=bo(jh);function mp(_){for(var w=ho.lastIndex=0;ho.test(_);)++w;return w}function Dp(_){return _.match(ho)||[]}function Ep(_){return _.match(Mh)||[]}var vp=function _(w){w=w==null?Ye:Sr.defaults(Ye.Object(),w,Sr.pick(Ye,Uh));var y=w.Array,U=w.Date,Q=w.Error,fe=w.Function,qe=w.Math,Te=w.Object,Ao=w.RegExp,bp=w.String,xn=w.TypeError,$i=y.prototype,Tp=fe.prototype,wr=Te.prototype,Pi=w["__core-js_shared__"],Ui=Tp.toString,De=wr.hasOwnProperty,_p=0,Ju=function(){var e=/[^.]+$/.exec(Pi&&Pi.keys&&Pi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Gi=wr.toString,Ip=Ui.call(Te),yp=Ye._,Ap=Ao("^"+Ui.call(De).replace(oo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Vi=Ou?w.Buffer:t,Pt=w.Symbol,Wi=w.Uint8Array,Ku=Vi?Vi.allocUnsafe:t,ji=Zu(Te.getPrototypeOf,Te),Yu=Te.create,Qu=wr.propertyIsEnumerable,qi=$i.splice,Xu=Pt?Pt.isConcatSpreadable:t,Hr=Pt?Pt.iterator:t,nr=Pt?Pt.toStringTag:t,Zi=function(){try{var e=or(Te,"defineProperty");return e({},"",{}),e}catch{}}(),Sp=w.clearTimeout!==Ye.clearTimeout&&w.clearTimeout,wp=U&&U.now!==Ye.Date.now&&U.now,Fp=w.setTimeout!==Ye.setTimeout&&w.setTimeout,Hi=qe.ceil,Ji=qe.floor,So=Te.getOwnPropertySymbols,Np=Vi?Vi.isBuffer:t,el=w.isFinite,kp=$i.join,Cp=Zu(Te.keys,Te),Ze=qe.max,tn=qe.min,Op=U.now,xp=w.parseInt,nl=qe.random,Lp=$i.reverse,wo=or(w,"DataView"),Jr=or(w,"Map"),Fo=or(w,"Promise"),Fr=or(w,"Set"),Kr=or(w,"WeakMap"),Yr=or(Te,"create"),Ki=Kr&&new Kr,Nr={},Rp=ar(wo),Bp=ar(Jr),zp=ar(Fo),Mp=ar(Fr),$p=ar(Kr),Yi=Pt?Pt.prototype:t,Qr=Yi?Yi.valueOf:t,tl=Yi?Yi.toString:t;function p(e){if(Re(e)&&!X(e)&&!(e instanceof ae)){if(e instanceof Ln)return e;if(De.call(e,"__wrapped__"))return rc(e)}return new Ln(e)}var kr=function(){function e(){}return function(i){if(!Ce(i))return{};if(Yu)return Yu(i);e.prototype=i;var u=new e;return e.prototype=t,u}}();function Qi(){}function Ln(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=t}p.templateSettings={escape:Xf,evaluate:eh,interpolate:du,variable:"",imports:{_:p}},p.prototype=Qi.prototype,p.prototype.constructor=p,Ln.prototype=kr(Qi.prototype),Ln.prototype.constructor=Ln;function ae(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Nn,this.__views__=[]}function Pp(){var e=new ae(this.__wrapped__);return e.__actions__=hn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=hn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=hn(this.__views__),e}function Up(){if(this.__filtered__){var e=new ae(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Gp(){var e=this.__wrapped__.value(),i=this.__dir__,u=X(e),c=i<0,h=u?e.length:0,g=em(0,h,this.__views__),E=g.start,b=g.end,I=b-E,N=c?b:E-1,C=this.__iteratees__,L=C.length,z=0,W=tn(I,this.__takeCount__);if(!u||!c&&h==I&&W==I)return Sl(e,this.__actions__);var H=[];e:for(;I--&&z<W;){N+=i;for(var te=-1,J=e[N];++te<L;){var se=C[te],le=se.iteratee,yn=se.type,cn=le(J);if(yn==vr)J=cn;else if(!cn){if(yn==ki)continue e;break e}}H[z++]=J}return H}ae.prototype=kr(Qi.prototype),ae.prototype.constructor=ae;function tr(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Vp(){this.__data__=Yr?Yr(null):{},this.size=0}function Wp(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function jp(e){var i=this.__data__;if(Yr){var u=i[e];return u===f?t:u}return De.call(i,e)?i[e]:t}function qp(e){var i=this.__data__;return Yr?i[e]!==t:De.call(i,e)}function Zp(e,i){var u=this.__data__;return this.size+=this.has(e)?0:1,u[e]=Yr&&i===t?f:i,this}tr.prototype.clear=Vp,tr.prototype.delete=Wp,tr.prototype.get=jp,tr.prototype.has=qp,tr.prototype.set=Zp;function Dt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Hp(){this.__data__=[],this.size=0}function Jp(e){var i=this.__data__,u=Xi(i,e);if(u<0)return!1;var c=i.length-1;return u==c?i.pop():qi.call(i,u,1),--this.size,!0}function Kp(e){var i=this.__data__,u=Xi(i,e);return u<0?t:i[u][1]}function Yp(e){return Xi(this.__data__,e)>-1}function Qp(e,i){var u=this.__data__,c=Xi(u,e);return c<0?(++this.size,u.push([e,i])):u[c][1]=i,this}Dt.prototype.clear=Hp,Dt.prototype.delete=Jp,Dt.prototype.get=Kp,Dt.prototype.has=Yp,Dt.prototype.set=Qp;function Et(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Xp(){this.size=0,this.__data__={hash:new tr,map:new(Jr||Dt),string:new tr}}function eg(e){var i=ds(this,e).delete(e);return this.size-=i?1:0,i}function ng(e){return ds(this,e).get(e)}function tg(e){return ds(this,e).has(e)}function rg(e,i){var u=ds(this,e),c=u.size;return u.set(e,i),this.size+=u.size==c?0:1,this}Et.prototype.clear=Xp,Et.prototype.delete=eg,Et.prototype.get=ng,Et.prototype.has=tg,Et.prototype.set=rg;function rr(e){var i=-1,u=e==null?0:e.length;for(this.__data__=new Et;++i<u;)this.add(e[i])}function ig(e){return this.__data__.set(e,f),this}function sg(e){return this.__data__.has(e)}rr.prototype.add=rr.prototype.push=ig,rr.prototype.has=sg;function qn(e){var i=this.__data__=new Dt(e);this.size=i.size}function og(){this.__data__=new Dt,this.size=0}function ag(e){var i=this.__data__,u=i.delete(e);return this.size=i.size,u}function ug(e){return this.__data__.get(e)}function lg(e){return this.__data__.has(e)}function cg(e,i){var u=this.__data__;if(u instanceof Dt){var c=u.__data__;if(!Jr||c.length<s-1)return c.push([e,i]),this.size=++u.size,this;u=this.__data__=new Et(c)}return u.set(e,i),this.size=u.size,this}qn.prototype.clear=og,qn.prototype.delete=ag,qn.prototype.get=ug,qn.prototype.has=lg,qn.prototype.set=cg;function rl(e,i){var u=X(e),c=!u&&ur(e),h=!u&&!c&&jt(e),g=!u&&!c&&!h&&Lr(e),E=u||c||h||g,b=E?_o(e.length,bp):[],I=b.length;for(var N in e)(i||De.call(e,N))&&!(E&&(N=="length"||h&&(N=="offset"||N=="parent")||g&&(N=="buffer"||N=="byteLength"||N=="byteOffset")||_t(N,I)))&&b.push(N);return b}function il(e){var i=e.length;return i?e[$o(0,i-1)]:t}function dg(e,i){return fs(hn(e),ir(i,0,e.length))}function fg(e){return fs(hn(e))}function No(e,i,u){(u!==t&&!Zn(e[i],u)||u===t&&!(i in e))&&vt(e,i,u)}function Xr(e,i,u){var c=e[i];(!(De.call(e,i)&&Zn(c,u))||u===t&&!(i in e))&&vt(e,i,u)}function Xi(e,i){for(var u=e.length;u--;)if(Zn(e[u][0],i))return u;return-1}function hg(e,i,u,c){return Ut(e,function(h,g,E){i(c,h,u(h),E)}),c}function sl(e,i){return e&&ut(i,He(i),e)}function pg(e,i){return e&&ut(i,gn(i),e)}function vt(e,i,u){i=="__proto__"&&Zi?Zi(e,i,{configurable:!0,enumerable:!0,value:u,writable:!0}):e[i]=u}function ko(e,i){for(var u=-1,c=i.length,h=y(c),g=e==null;++u<c;)h[u]=g?t:ca(e,i[u]);return h}function ir(e,i,u){return e===e&&(u!==t&&(e=e<=u?e:u),i!==t&&(e=e>=i?e:i)),e}function Rn(e,i,u,c,h,g){var E,b=i&v,I=i&k,N=i&A;if(u&&(E=h?u(e,c,h,g):u(e)),E!==t)return E;if(!Ce(e))return e;var C=X(e);if(C){if(E=tm(e),!b)return hn(e,E)}else{var L=rn(e),z=L==nn||L==au;if(jt(e))return Nl(e,b);if(L==mt||L==P||z&&!h){if(E=I||z?{}:Hl(e),!b)return I?jg(e,pg(E,e)):Wg(e,sl(E,e))}else{if(!ye[L])return h?e:{};E=rm(e,L,b)}}g||(g=new qn);var W=g.get(e);if(W)return W;g.set(e,E),Ic(e)?e.forEach(function(J){E.add(Rn(J,i,u,J,e,g))}):Tc(e)&&e.forEach(function(J,se){E.set(se,Rn(J,i,u,se,e,g))});var H=N?I?Ko:Jo:I?gn:He,te=C?t:H(e);return On(te||e,function(J,se){te&&(se=J,J=e[se]),Xr(E,se,Rn(J,i,u,se,e,g))}),E}function gg(e){var i=He(e);return function(u){return ol(u,e,i)}}function ol(e,i,u){var c=u.length;if(e==null)return!c;for(e=Te(e);c--;){var h=u[c],g=i[h],E=e[h];if(E===t&&!(h in e)||!g(E))return!1}return!0}function al(e,i,u){if(typeof e!="function")throw new xn(l);return oi(function(){e.apply(t,u)},i)}function ei(e,i,u,c){var h=-1,g=Bi,E=!0,b=e.length,I=[],N=i.length;if(!b)return I;u&&(i=Fe(i,Tn(u))),c?(g=mo,E=!1):i.length>=s&&(g=Zr,E=!1,i=new rr(i));e:for(;++h<b;){var C=e[h],L=u==null?C:u(C);if(C=c||C!==0?C:0,E&&L===L){for(var z=N;z--;)if(i[z]===L)continue e;I.push(C)}else g(i,L,c)||I.push(C)}return I}var Ut=Ll(at),ul=Ll(Oo,!0);function mg(e,i){var u=!0;return Ut(e,function(c,h,g){return u=!!i(c,h,g),u}),u}function es(e,i,u){for(var c=-1,h=e.length;++c<h;){var g=e[c],E=i(g);if(E!=null&&(b===t?E===E&&!In(E):u(E,b)))var b=E,I=g}return I}function Dg(e,i,u,c){var h=e.length;for(u=ne(u),u<0&&(u=-u>h?0:h+u),c=c===t||c>h?h:ne(c),c<0&&(c+=h),c=u>c?0:Ac(c);u<c;)e[u++]=i;return e}function ll(e,i){var u=[];return Ut(e,function(c,h,g){i(c,h,g)&&u.push(c)}),u}function Qe(e,i,u,c,h){var g=-1,E=e.length;for(u||(u=sm),h||(h=[]);++g<E;){var b=e[g];i>0&&u(b)?i>1?Qe(b,i-1,u,c,h):Mt(h,b):c||(h[h.length]=b)}return h}var Co=Rl(),cl=Rl(!0);function at(e,i){return e&&Co(e,i,He)}function Oo(e,i){return e&&cl(e,i,He)}function ns(e,i){return zt(i,function(u){return It(e[u])})}function sr(e,i){i=Vt(i,e);for(var u=0,c=i.length;e!=null&&u<c;)e=e[lt(i[u++])];return u&&u==c?e:t}function dl(e,i,u){var c=i(e);return X(e)?c:Mt(c,u(e))}function un(e){return e==null?e===t?qf:Wf:nr&&nr in Te(e)?Xg(e):fm(e)}function xo(e,i){return e>i}function Eg(e,i){return e!=null&&De.call(e,i)}function vg(e,i){return e!=null&&i in Te(e)}function bg(e,i,u){return e>=tn(i,u)&&e<Ze(i,u)}function Lo(e,i,u){for(var c=u?mo:Bi,h=e[0].length,g=e.length,E=g,b=y(g),I=1/0,N=[];E--;){var C=e[E];E&&i&&(C=Fe(C,Tn(i))),I=tn(C.length,I),b[E]=!u&&(i||h>=120&&C.length>=120)?new rr(E&&C):t}C=e[0];var L=-1,z=b[0];e:for(;++L<h&&N.length<I;){var W=C[L],H=i?i(W):W;if(W=u||W!==0?W:0,!(z?Zr(z,H):c(N,H,u))){for(E=g;--E;){var te=b[E];if(!(te?Zr(te,H):c(e[E],H,u)))continue e}z&&z.push(H),N.push(W)}}return N}function Tg(e,i,u,c){return at(e,function(h,g,E){i(c,u(h),g,E)}),c}function ni(e,i,u){i=Vt(i,e),e=Ql(e,i);var c=e==null?e:e[lt(zn(i))];return c==null?t:bn(c,e,u)}function fl(e){return Re(e)&&un(e)==P}function _g(e){return Re(e)&&un(e)==qr}function Ig(e){return Re(e)&&un(e)==kn}function ti(e,i,u,c,h){return e===i?!0:e==null||i==null||!Re(e)&&!Re(i)?e!==e&&i!==i:yg(e,i,u,c,ti,h)}function yg(e,i,u,c,h,g){var E=X(e),b=X(i),I=E?he:rn(e),N=b?he:rn(i);I=I==P?mt:I,N=N==P?mt:N;var C=I==mt,L=N==mt,z=I==N;if(z&&jt(e)){if(!jt(i))return!1;E=!0,C=!1}if(z&&!C)return g||(g=new qn),E||Lr(e)?jl(e,i,u,c,h,g):Yg(e,i,I,u,c,h,g);if(!(u&F)){var W=C&&De.call(e,"__wrapped__"),H=L&&De.call(i,"__wrapped__");if(W||H){var te=W?e.value():e,J=H?i.value():i;return g||(g=new qn),h(te,J,u,c,g)}}return z?(g||(g=new qn),Qg(e,i,u,c,h,g)):!1}function Ag(e){return Re(e)&&rn(e)==Vn}function Ro(e,i,u,c){var h=u.length,g=h,E=!c;if(e==null)return!g;for(e=Te(e);h--;){var b=u[h];if(E&&b[2]?b[1]!==e[b[0]]:!(b[0]in e))return!1}for(;++h<g;){b=u[h];var I=b[0],N=e[I],C=b[1];if(E&&b[2]){if(N===t&&!(I in e))return!1}else{var L=new qn;if(c)var z=c(N,C,I,e,i,L);if(!(z===t?ti(C,N,F|B,c,L):z))return!1}}return!0}function hl(e){if(!Ce(e)||am(e))return!1;var i=It(e)?Ap:gh;return i.test(ar(e))}function Sg(e){return Re(e)&&un(e)==Vr}function wg(e){return Re(e)&&rn(e)==Wn}function Fg(e){return Re(e)&&Es(e.length)&&!!we[un(e)]}function pl(e){return typeof e=="function"?e:e==null?mn:typeof e=="object"?X(e)?Dl(e[0],e[1]):ml(e):Bc(e)}function Bo(e){if(!si(e))return Cp(e);var i=[];for(var u in Te(e))De.call(e,u)&&u!="constructor"&&i.push(u);return i}function Ng(e){if(!Ce(e))return dm(e);var i=si(e),u=[];for(var c in e)c=="constructor"&&(i||!De.call(e,c))||u.push(c);return u}function zo(e,i){return e<i}function gl(e,i){var u=-1,c=pn(e)?y(e.length):[];return Ut(e,function(h,g,E){c[++u]=i(h,g,E)}),c}function ml(e){var i=Qo(e);return i.length==1&&i[0][2]?Kl(i[0][0],i[0][1]):function(u){return u===e||Ro(u,e,i)}}function Dl(e,i){return ea(e)&&Jl(i)?Kl(lt(e),i):function(u){var c=ca(u,e);return c===t&&c===i?da(u,e):ti(i,c,F|B)}}function ts(e,i,u,c,h){e!==i&&Co(i,function(g,E){if(h||(h=new qn),Ce(g))kg(e,i,E,u,ts,c,h);else{var b=c?c(ta(e,E),g,E+"",e,i,h):t;b===t&&(b=g),No(e,E,b)}},gn)}function kg(e,i,u,c,h,g,E){var b=ta(e,u),I=ta(i,u),N=E.get(I);if(N){No(e,u,N);return}var C=g?g(b,I,u+"",e,i,E):t,L=C===t;if(L){var z=X(I),W=!z&&jt(I),H=!z&&!W&&Lr(I);C=I,z||W||H?X(b)?C=b:$e(b)?C=hn(b):W?(L=!1,C=Nl(I,!0)):H?(L=!1,C=kl(I,!0)):C=[]:ai(I)||ur(I)?(C=b,ur(b)?C=Sc(b):(!Ce(b)||It(b))&&(C=Hl(I))):L=!1}L&&(E.set(I,C),h(C,I,c,g,E),E.delete(I)),No(e,u,C)}function El(e,i){var u=e.length;if(u)return i+=i<0?u:0,_t(i,u)?e[i]:t}function vl(e,i,u){i.length?i=Fe(i,function(g){return X(g)?function(E){return sr(E,g.length===1?g[0]:g)}:g}):i=[mn];var c=-1;i=Fe(i,Tn(Z()));var h=gl(e,function(g,E,b){var I=Fe(i,function(N){return N(g)});return{criteria:I,index:++c,value:g}});return rp(h,function(g,E){return Vg(g,E,u)})}function Cg(e,i){return bl(e,i,function(u,c){return da(e,c)})}function bl(e,i,u){for(var c=-1,h=i.length,g={};++c<h;){var E=i[c],b=sr(e,E);u(b,E)&&ri(g,Vt(E,e),b)}return g}function Og(e){return function(i){return sr(i,e)}}function Mo(e,i,u,c){var h=c?tp:Ir,g=-1,E=i.length,b=e;for(e===i&&(i=hn(i)),u&&(b=Fe(e,Tn(u)));++g<E;)for(var I=0,N=i[g],C=u?u(N):N;(I=h(b,C,I,c))>-1;)b!==e&&qi.call(b,I,1),qi.call(e,I,1);return e}function Tl(e,i){for(var u=e?i.length:0,c=u-1;u--;){var h=i[u];if(u==c||h!==g){var g=h;_t(h)?qi.call(e,h,1):Go(e,h)}}return e}function $o(e,i){return e+Ji(nl()*(i-e+1))}function xg(e,i,u,c){for(var h=-1,g=Ze(Hi((i-e)/(u||1)),0),E=y(g);g--;)E[c?g:++h]=e,e+=u;return E}function Po(e,i){var u="";if(!e||i<1||i>Gn)return u;do i%2&&(u+=e),i=Ji(i/2),i&&(e+=e);while(i);return u}function re(e,i){return ra(Yl(e,i,mn),e+"")}function Lg(e){return il(Rr(e))}function Rg(e,i){var u=Rr(e);return fs(u,ir(i,0,u.length))}function ri(e,i,u,c){if(!Ce(e))return e;i=Vt(i,e);for(var h=-1,g=i.length,E=g-1,b=e;b!=null&&++h<g;){var I=lt(i[h]),N=u;if(I==="__proto__"||I==="constructor"||I==="prototype")return e;if(h!=E){var C=b[I];N=c?c(C,I,b):t,N===t&&(N=Ce(C)?C:_t(i[h+1])?[]:{})}Xr(b,I,N),b=b[I]}return e}var _l=Ki?function(e,i){return Ki.set(e,i),e}:mn,Bg=Zi?function(e,i){return Zi(e,"toString",{configurable:!0,enumerable:!1,value:ha(i),writable:!0})}:mn;function zg(e){return fs(Rr(e))}function Bn(e,i,u){var c=-1,h=e.length;i<0&&(i=-i>h?0:h+i),u=u>h?h:u,u<0&&(u+=h),h=i>u?0:u-i>>>0,i>>>=0;for(var g=y(h);++c<h;)g[c]=e[c+i];return g}function Mg(e,i){var u;return Ut(e,function(c,h,g){return u=i(c,h,g),!u}),!!u}function rs(e,i,u){var c=0,h=e==null?c:e.length;if(typeof i=="number"&&i===i&&h<=G){for(;c<h;){var g=c+h>>>1,E=e[g];E!==null&&!In(E)&&(u?E<=i:E<i)?c=g+1:h=g}return h}return Uo(e,i,mn,u)}function Uo(e,i,u,c){var h=0,g=e==null?0:e.length;if(g===0)return 0;i=u(i);for(var E=i!==i,b=i===null,I=In(i),N=i===t;h<g;){var C=Ji((h+g)/2),L=u(e[C]),z=L!==t,W=L===null,H=L===L,te=In(L);if(E)var J=c||H;else N?J=H&&(c||z):b?J=H&&z&&(c||!W):I?J=H&&z&&!W&&(c||!te):W||te?J=!1:J=c?L<=i:L<i;J?h=C+1:g=C}return tn(g,S)}function Il(e,i){for(var u=-1,c=e.length,h=0,g=[];++u<c;){var E=e[u],b=i?i(E):E;if(!u||!Zn(b,I)){var I=b;g[h++]=E===0?0:E}}return g}function yl(e){return typeof e=="number"?e:In(e)?Xt:+e}function _n(e){if(typeof e=="string")return e;if(X(e))return Fe(e,_n)+"";if(In(e))return tl?tl.call(e):"";var i=e+"";return i=="0"&&1/e==-ot?"-0":i}function Gt(e,i,u){var c=-1,h=Bi,g=e.length,E=!0,b=[],I=b;if(u)E=!1,h=mo;else if(g>=s){var N=i?null:Jg(e);if(N)return Mi(N);E=!1,h=Zr,I=new rr}else I=i?[]:b;e:for(;++c<g;){var C=e[c],L=i?i(C):C;if(C=u||C!==0?C:0,E&&L===L){for(var z=I.length;z--;)if(I[z]===L)continue e;i&&I.push(L),b.push(C)}else h(I,L,u)||(I!==b&&I.push(L),b.push(C))}return b}function Go(e,i){return i=Vt(i,e),e=Ql(e,i),e==null||delete e[lt(zn(i))]}function Al(e,i,u,c){return ri(e,i,u(sr(e,i)),c)}function is(e,i,u,c){for(var h=e.length,g=c?h:-1;(c?g--:++g<h)&&i(e[g],g,e););return u?Bn(e,c?0:g,c?g+1:h):Bn(e,c?g+1:0,c?h:g)}function Sl(e,i){var u=e;return u instanceof ae&&(u=u.value()),Do(i,function(c,h){return h.func.apply(h.thisArg,Mt([c],h.args))},u)}function Vo(e,i,u){var c=e.length;if(c<2)return c?Gt(e[0]):[];for(var h=-1,g=y(c);++h<c;)for(var E=e[h],b=-1;++b<c;)b!=h&&(g[h]=ei(g[h]||E,e[b],i,u));return Gt(Qe(g,1),i,u)}function wl(e,i,u){for(var c=-1,h=e.length,g=i.length,E={};++c<h;){var b=c<g?i[c]:t;u(E,e[c],b)}return E}function Wo(e){return $e(e)?e:[]}function jo(e){return typeof e=="function"?e:mn}function Vt(e,i){return X(e)?e:ea(e,i)?[e]:tc(ge(e))}var $g=re;function Wt(e,i,u){var c=e.length;return u=u===t?c:u,!i&&u>=c?e:Bn(e,i,u)}var Fl=Sp||function(e){return Ye.clearTimeout(e)};function Nl(e,i){if(i)return e.slice();var u=e.length,c=Ku?Ku(u):new e.constructor(u);return e.copy(c),c}function qo(e){var i=new e.constructor(e.byteLength);return new Wi(i).set(new Wi(e)),i}function Pg(e,i){var u=i?qo(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.byteLength)}function Ug(e){var i=new e.constructor(e.source,fu.exec(e));return i.lastIndex=e.lastIndex,i}function Gg(e){return Qr?Te(Qr.call(e)):{}}function kl(e,i){var u=i?qo(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.length)}function Cl(e,i){if(e!==i){var u=e!==t,c=e===null,h=e===e,g=In(e),E=i!==t,b=i===null,I=i===i,N=In(i);if(!b&&!N&&!g&&e>i||g&&E&&I&&!b&&!N||c&&E&&I||!u&&I||!h)return 1;if(!c&&!g&&!N&&e<i||N&&u&&h&&!c&&!g||b&&u&&h||!E&&h||!I)return-1}return 0}function Vg(e,i,u){for(var c=-1,h=e.criteria,g=i.criteria,E=h.length,b=u.length;++c<E;){var I=Cl(h[c],g[c]);if(I){if(c>=b)return I;var N=u[c];return I*(N=="desc"?-1:1)}}return e.index-i.index}function Ol(e,i,u,c){for(var h=-1,g=e.length,E=u.length,b=-1,I=i.length,N=Ze(g-E,0),C=y(I+N),L=!c;++b<I;)C[b]=i[b];for(;++h<E;)(L||h<g)&&(C[u[h]]=e[h]);for(;N--;)C[b++]=e[h++];return C}function xl(e,i,u,c){for(var h=-1,g=e.length,E=-1,b=u.length,I=-1,N=i.length,C=Ze(g-b,0),L=y(C+N),z=!c;++h<C;)L[h]=e[h];for(var W=h;++I<N;)L[W+I]=i[I];for(;++E<b;)(z||h<g)&&(L[W+u[E]]=e[h++]);return L}function hn(e,i){var u=-1,c=e.length;for(i||(i=y(c));++u<c;)i[u]=e[u];return i}function ut(e,i,u,c){var h=!u;u||(u={});for(var g=-1,E=i.length;++g<E;){var b=i[g],I=c?c(u[b],e[b],b,u,e):t;I===t&&(I=e[b]),h?vt(u,b,I):Xr(u,b,I)}return u}function Wg(e,i){return ut(e,Xo(e),i)}function jg(e,i){return ut(e,ql(e),i)}function ss(e,i){return function(u,c){var h=X(u)?Kh:hg,g=i?i():{};return h(u,e,Z(c,2),g)}}function Cr(e){return re(function(i,u){var c=-1,h=u.length,g=h>1?u[h-1]:t,E=h>2?u[2]:t;for(g=e.length>3&&typeof g=="function"?(h--,g):t,E&&ln(u[0],u[1],E)&&(g=h<3?t:g,h=1),i=Te(i);++c<h;){var b=u[c];b&&e(i,b,c,g)}return i})}function Ll(e,i){return function(u,c){if(u==null)return u;if(!pn(u))return e(u,c);for(var h=u.length,g=i?h:-1,E=Te(u);(i?g--:++g<h)&&c(E[g],g,E)!==!1;);return u}}function Rl(e){return function(i,u,c){for(var h=-1,g=Te(i),E=c(i),b=E.length;b--;){var I=E[e?b:++h];if(u(g[I],I,g)===!1)break}return i}}function qg(e,i,u){var c=i&j,h=ii(e);function g(){var E=this&&this!==Ye&&this instanceof g?h:e;return E.apply(c?u:this,arguments)}return g}function Bl(e){return function(i){i=ge(i);var u=yr(i)?jn(i):t,c=u?u[0]:i.charAt(0),h=u?Wt(u,1).join(""):i.slice(1);return c[e]()+h}}function Or(e){return function(i){return Do(Lc(xc(i).replace(Bh,"")),e,"")}}function ii(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var u=kr(e.prototype),c=e.apply(u,i);return Ce(c)?c:u}}function Zg(e,i,u){var c=ii(e);function h(){for(var g=arguments.length,E=y(g),b=g,I=xr(h);b--;)E[b]=arguments[b];var N=g<3&&E[0]!==I&&E[g-1]!==I?[]:$t(E,I);if(g-=N.length,g<u)return Ul(e,i,os,h.placeholder,t,E,N,t,t,u-g);var C=this&&this!==Ye&&this instanceof h?c:e;return bn(C,this,E)}return h}function zl(e){return function(i,u,c){var h=Te(i);if(!pn(i)){var g=Z(u,3);i=He(i),u=function(b){return g(h[b],b,h)}}var E=e(i,u,c);return E>-1?h[g?i[E]:E]:t}}function Ml(e){return Tt(function(i){var u=i.length,c=u,h=Ln.prototype.thru;for(e&&i.reverse();c--;){var g=i[c];if(typeof g!="function")throw new xn(l);if(h&&!E&&cs(g)=="wrapper")var E=new Ln([],!0)}for(c=E?c:u;++c<u;){g=i[c];var b=cs(g),I=b=="wrapper"?Yo(g):t;I&&na(I[0])&&I[1]==(en|me|Le|gt)&&!I[4].length&&I[9]==1?E=E[cs(I[0])].apply(E,I[3]):E=g.length==1&&na(g)?E[b]():E.thru(g)}return function(){var N=arguments,C=N[0];if(E&&N.length==1&&X(C))return E.plant(C).value();for(var L=0,z=u?i[L].apply(this,N):C;++L<u;)z=i[L].call(this,z);return z}})}function os(e,i,u,c,h,g,E,b,I,N){var C=i&en,L=i&j,z=i&ce,W=i&(me|ke),H=i&x,te=z?t:ii(e);function J(){for(var se=arguments.length,le=y(se),yn=se;yn--;)le[yn]=arguments[yn];if(W)var cn=xr(J),An=sp(le,cn);if(c&&(le=Ol(le,c,h,W)),g&&(le=xl(le,g,E,W)),se-=An,W&&se<N){var Pe=$t(le,cn);return Ul(e,i,os,J.placeholder,u,le,Pe,b,I,N-se)}var Hn=L?u:this,At=z?Hn[e]:e;return se=le.length,b?le=hm(le,b):H&&se>1&&le.reverse(),C&&I<se&&(le.length=I),this&&this!==Ye&&this instanceof J&&(At=te||ii(At)),At.apply(Hn,le)}return J}function $l(e,i){return function(u,c){return Tg(u,e,i(c),{})}}function as(e,i){return function(u,c){var h;if(u===t&&c===t)return i;if(u!==t&&(h=u),c!==t){if(h===t)return c;typeof u=="string"||typeof c=="string"?(u=_n(u),c=_n(c)):(u=yl(u),c=yl(c)),h=e(u,c)}return h}}function Zo(e){return Tt(function(i){return i=Fe(i,Tn(Z())),re(function(u){var c=this;return e(i,function(h){return bn(h,c,u)})})})}function us(e,i){i=i===t?" ":_n(i);var u=i.length;if(u<2)return u?Po(i,e):i;var c=Po(i,Hi(e/Ar(i)));return yr(i)?Wt(jn(c),0,e).join(""):c.slice(0,e)}function Hg(e,i,u,c){var h=i&j,g=ii(e);function E(){for(var b=-1,I=arguments.length,N=-1,C=c.length,L=y(C+I),z=this&&this!==Ye&&this instanceof E?g:e;++N<C;)L[N]=c[N];for(;I--;)L[N++]=arguments[++b];return bn(z,h?u:this,L)}return E}function Pl(e){return function(i,u,c){return c&&typeof c!="number"&&ln(i,u,c)&&(u=c=t),i=yt(i),u===t?(u=i,i=0):u=yt(u),c=c===t?i<u?1:-1:yt(c),xg(i,u,c,e)}}function ls(e){return function(i,u){return typeof i=="string"&&typeof u=="string"||(i=Mn(i),u=Mn(u)),e(i,u)}}function Ul(e,i,u,c,h,g,E,b,I,N){var C=i&me,L=C?E:t,z=C?t:E,W=C?g:t,H=C?t:g;i|=C?Le:on,i&=~(C?on:Le),i&Se||(i&=~(j|ce));var te=[e,i,h,W,L,H,z,b,I,N],J=u.apply(t,te);return na(e)&&Xl(J,te),J.placeholder=c,ec(J,e,i)}function Ho(e){var i=qe[e];return function(u,c){if(u=Mn(u),c=c==null?0:tn(ne(c),292),c&&el(u)){var h=(ge(u)+"e").split("e"),g=i(h[0]+"e"+(+h[1]+c));return h=(ge(g)+"e").split("e"),+(h[0]+"e"+(+h[1]-c))}return i(u)}}var Jg=Fr&&1/Mi(new Fr([,-0]))[1]==ot?function(e){return new Fr(e)}:ma;function Gl(e){return function(i){var u=rn(i);return u==Vn?yo(i):u==Wn?fp(i):ip(i,e(i))}}function bt(e,i,u,c,h,g,E,b){var I=i&ce;if(!I&&typeof e!="function")throw new xn(l);var N=c?c.length:0;if(N||(i&=~(Le|on),c=h=t),E=E===t?E:Ze(ne(E),0),b=b===t?b:ne(b),N-=h?h.length:0,i&on){var C=c,L=h;c=h=t}var z=I?t:Yo(e),W=[e,i,u,c,h,C,L,g,E,b];if(z&&cm(W,z),e=W[0],i=W[1],u=W[2],c=W[3],h=W[4],b=W[9]=W[9]===t?I?0:e.length:Ze(W[9]-N,0),!b&&i&(me|ke)&&(i&=~(me|ke)),!i||i==j)var H=qg(e,i,u);else i==me||i==ke?H=Zg(e,i,b):(i==Le||i==(j|Le))&&!h.length?H=Hg(e,i,u,c):H=os.apply(t,W);var te=z?_l:Xl;return ec(te(H,W),e,i)}function Vl(e,i,u,c){return e===t||Zn(e,wr[u])&&!De.call(c,u)?i:e}function Wl(e,i,u,c,h,g){return Ce(e)&&Ce(i)&&(g.set(i,e),ts(e,i,t,Wl,g),g.delete(i)),e}function Kg(e){return ai(e)?t:e}function jl(e,i,u,c,h,g){var E=u&F,b=e.length,I=i.length;if(b!=I&&!(E&&I>b))return!1;var N=g.get(e),C=g.get(i);if(N&&C)return N==i&&C==e;var L=-1,z=!0,W=u&B?new rr:t;for(g.set(e,i),g.set(i,e);++L<b;){var H=e[L],te=i[L];if(c)var J=E?c(te,H,L,i,e,g):c(H,te,L,e,i,g);if(J!==t){if(J)continue;z=!1;break}if(W){if(!Eo(i,function(se,le){if(!Zr(W,le)&&(H===se||h(H,se,u,c,g)))return W.push(le)})){z=!1;break}}else if(!(H===te||h(H,te,u,c,g))){z=!1;break}}return g.delete(e),g.delete(i),z}function Yg(e,i,u,c,h,g,E){switch(u){case Tr:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case qr:return!(e.byteLength!=i.byteLength||!g(new Wi(e),new Wi(i)));case pe:case kn:case Gr:return Zn(+e,+i);case Bt:return e.name==i.name&&e.message==i.message;case Vr:case Wr:return e==i+"";case Vn:var b=yo;case Wn:var I=c&F;if(b||(b=Mi),e.size!=i.size&&!I)return!1;var N=E.get(e);if(N)return N==i;c|=B,E.set(e,i);var C=jl(b(e),b(i),c,h,g,E);return E.delete(e),C;case Oi:if(Qr)return Qr.call(e)==Qr.call(i)}return!1}function Qg(e,i,u,c,h,g){var E=u&F,b=Jo(e),I=b.length,N=Jo(i),C=N.length;if(I!=C&&!E)return!1;for(var L=I;L--;){var z=b[L];if(!(E?z in i:De.call(i,z)))return!1}var W=g.get(e),H=g.get(i);if(W&&H)return W==i&&H==e;var te=!0;g.set(e,i),g.set(i,e);for(var J=E;++L<I;){z=b[L];var se=e[z],le=i[z];if(c)var yn=E?c(le,se,z,i,e,g):c(se,le,z,e,i,g);if(!(yn===t?se===le||h(se,le,u,c,g):yn)){te=!1;break}J||(J=z=="constructor")}if(te&&!J){var cn=e.constructor,An=i.constructor;cn!=An&&"constructor"in e&&"constructor"in i&&!(typeof cn=="function"&&cn instanceof cn&&typeof An=="function"&&An instanceof An)&&(te=!1)}return g.delete(e),g.delete(i),te}function Tt(e){return ra(Yl(e,t,oc),e+"")}function Jo(e){return dl(e,He,Xo)}function Ko(e){return dl(e,gn,ql)}var Yo=Ki?function(e){return Ki.get(e)}:ma;function cs(e){for(var i=e.name+"",u=Nr[i],c=De.call(Nr,i)?u.length:0;c--;){var h=u[c],g=h.func;if(g==null||g==e)return h.name}return i}function xr(e){var i=De.call(p,"placeholder")?p:e;return i.placeholder}function Z(){var e=p.iteratee||pa;return e=e===pa?pl:e,arguments.length?e(arguments[0],arguments[1]):e}function ds(e,i){var u=e.__data__;return om(i)?u[typeof i=="string"?"string":"hash"]:u.map}function Qo(e){for(var i=He(e),u=i.length;u--;){var c=i[u],h=e[c];i[u]=[c,h,Jl(h)]}return i}function or(e,i){var u=lp(e,i);return hl(u)?u:t}function Xg(e){var i=De.call(e,nr),u=e[nr];try{e[nr]=t;var c=!0}catch{}var h=Gi.call(e);return c&&(i?e[nr]=u:delete e[nr]),h}var Xo=So?function(e){return e==null?[]:(e=Te(e),zt(So(e),function(i){return Qu.call(e,i)}))}:Da,ql=So?function(e){for(var i=[];e;)Mt(i,Xo(e)),e=ji(e);return i}:Da,rn=un;(wo&&rn(new wo(new ArrayBuffer(1)))!=Tr||Jr&&rn(new Jr)!=Vn||Fo&&rn(Fo.resolve())!=uu||Fr&&rn(new Fr)!=Wn||Kr&&rn(new Kr)!=jr)&&(rn=function(e){var i=un(e),u=i==mt?e.constructor:t,c=u?ar(u):"";if(c)switch(c){case Rp:return Tr;case Bp:return Vn;case zp:return uu;case Mp:return Wn;case $p:return jr}return i});function em(e,i,u){for(var c=-1,h=u.length;++c<h;){var g=u[c],E=g.size;switch(g.type){case"drop":e+=E;break;case"dropRight":i-=E;break;case"take":i=tn(i,e+E);break;case"takeRight":e=Ze(e,i-E);break}}return{start:e,end:i}}function nm(e){var i=e.match(ah);return i?i[1].split(uh):[]}function Zl(e,i,u){i=Vt(i,e);for(var c=-1,h=i.length,g=!1;++c<h;){var E=lt(i[c]);if(!(g=e!=null&&u(e,E)))break;e=e[E]}return g||++c!=h?g:(h=e==null?0:e.length,!!h&&Es(h)&&_t(E,h)&&(X(e)||ur(e)))}function tm(e){var i=e.length,u=new e.constructor(i);return i&&typeof e[0]=="string"&&De.call(e,"index")&&(u.index=e.index,u.input=e.input),u}function Hl(e){return typeof e.constructor=="function"&&!si(e)?kr(ji(e)):{}}function rm(e,i,u){var c=e.constructor;switch(i){case qr:return qo(e);case pe:case kn:return new c(+e);case Tr:return Pg(e,u);case Ys:case Qs:case Xs:case eo:case no:case to:case ro:case io:case so:return kl(e,u);case Vn:return new c;case Gr:case Wr:return new c(e);case Vr:return Ug(e);case Wn:return new c;case Oi:return Gg(e)}}function im(e,i){var u=i.length;if(!u)return e;var c=u-1;return i[c]=(u>1?"& ":"")+i[c],i=i.join(u>2?", ":" "),e.replace(oh,`{
/* [wrapped with `+i+`] */
`)}function sm(e){return X(e)||ur(e)||!!(Xu&&e&&e[Xu])}function _t(e,i){var u=typeof e;return i=i??Gn,!!i&&(u=="number"||u!="symbol"&&Dh.test(e))&&e>-1&&e%1==0&&e<i}function ln(e,i,u){if(!Ce(u))return!1;var c=typeof i;return(c=="number"?pn(u)&&_t(i,u.length):c=="string"&&i in u)?Zn(u[i],e):!1}function ea(e,i){if(X(e))return!1;var u=typeof e;return u=="number"||u=="symbol"||u=="boolean"||e==null||In(e)?!0:th.test(e)||!nh.test(e)||i!=null&&e in Te(i)}function om(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function na(e){var i=cs(e),u=p[i];if(typeof u!="function"||!(i in ae.prototype))return!1;if(e===u)return!0;var c=Yo(u);return!!c&&e===c[0]}function am(e){return!!Ju&&Ju in e}var um=Pi?It:Ea;function si(e){var i=e&&e.constructor,u=typeof i=="function"&&i.prototype||wr;return e===u}function Jl(e){return e===e&&!Ce(e)}function Kl(e,i){return function(u){return u==null?!1:u[e]===i&&(i!==t||e in Te(u))}}function lm(e){var i=ms(e,function(c){return u.size===m&&u.clear(),c}),u=i.cache;return i}function cm(e,i){var u=e[1],c=i[1],h=u|c,g=h<(j|ce|en),E=c==en&&u==me||c==en&&u==gt&&e[7].length<=i[8]||c==(en|gt)&&i[7].length<=i[8]&&u==me;if(!(g||E))return e;c&j&&(e[2]=i[2],h|=u&j?0:Se);var b=i[3];if(b){var I=e[3];e[3]=I?Ol(I,b,i[4]):b,e[4]=I?$t(e[3],D):i[4]}return b=i[5],b&&(I=e[5],e[5]=I?xl(I,b,i[6]):b,e[6]=I?$t(e[5],D):i[6]),b=i[7],b&&(e[7]=b),c&en&&(e[8]=e[8]==null?i[8]:tn(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=h,e}function dm(e){var i=[];if(e!=null)for(var u in Te(e))i.push(u);return i}function fm(e){return Gi.call(e)}function Yl(e,i,u){return i=Ze(i===t?e.length-1:i,0),function(){for(var c=arguments,h=-1,g=Ze(c.length-i,0),E=y(g);++h<g;)E[h]=c[i+h];h=-1;for(var b=y(i+1);++h<i;)b[h]=c[h];return b[i]=u(E),bn(e,this,b)}}function Ql(e,i){return i.length<2?e:sr(e,Bn(i,0,-1))}function hm(e,i){for(var u=e.length,c=tn(i.length,u),h=hn(e);c--;){var g=i[c];e[c]=_t(g,u)?h[g]:t}return e}function ta(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var Xl=nc(_l),oi=Fp||function(e,i){return Ye.setTimeout(e,i)},ra=nc(Bg);function ec(e,i,u){var c=i+"";return ra(e,im(c,pm(nm(c),u)))}function nc(e){var i=0,u=0;return function(){var c=Op(),h=Qt-(c-u);if(u=c,h>0){if(++i>=Rt)return arguments[0]}else i=0;return e.apply(t,arguments)}}function fs(e,i){var u=-1,c=e.length,h=c-1;for(i=i===t?c:i;++u<i;){var g=$o(u,h),E=e[g];e[g]=e[u],e[u]=E}return e.length=i,e}var tc=lm(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace(rh,function(u,c,h,g){i.push(h?g.replace(dh,"$1"):c||u)}),i});function lt(e){if(typeof e=="string"||In(e))return e;var i=e+"";return i=="0"&&1/e==-ot?"-0":i}function ar(e){if(e!=null){try{return Ui.call(e)}catch{}try{return e+""}catch{}}return""}function pm(e,i){return On(M,function(u){var c="_."+u[0];i&u[1]&&!Bi(e,c)&&e.push(c)}),e.sort()}function rc(e){if(e instanceof ae)return e.clone();var i=new Ln(e.__wrapped__,e.__chain__);return i.__actions__=hn(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function gm(e,i,u){(u?ln(e,i,u):i===t)?i=1:i=Ze(ne(i),0);var c=e==null?0:e.length;if(!c||i<1)return[];for(var h=0,g=0,E=y(Hi(c/i));h<c;)E[g++]=Bn(e,h,h+=i);return E}function mm(e){for(var i=-1,u=e==null?0:e.length,c=0,h=[];++i<u;){var g=e[i];g&&(h[c++]=g)}return h}function Dm(){var e=arguments.length;if(!e)return[];for(var i=y(e-1),u=arguments[0],c=e;c--;)i[c-1]=arguments[c];return Mt(X(u)?hn(u):[u],Qe(i,1))}var Em=re(function(e,i){return $e(e)?ei(e,Qe(i,1,$e,!0)):[]}),vm=re(function(e,i){var u=zn(i);return $e(u)&&(u=t),$e(e)?ei(e,Qe(i,1,$e,!0),Z(u,2)):[]}),bm=re(function(e,i){var u=zn(i);return $e(u)&&(u=t),$e(e)?ei(e,Qe(i,1,$e,!0),t,u):[]});function Tm(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),Bn(e,i<0?0:i,c)):[]}function _m(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),i=c-i,Bn(e,0,i<0?0:i)):[]}function Im(e,i){return e&&e.length?is(e,Z(i,3),!0,!0):[]}function ym(e,i){return e&&e.length?is(e,Z(i,3),!0):[]}function Am(e,i,u,c){var h=e==null?0:e.length;return h?(u&&typeof u!="number"&&ln(e,i,u)&&(u=0,c=h),Dg(e,i,u,c)):[]}function ic(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var h=u==null?0:ne(u);return h<0&&(h=Ze(c+h,0)),zi(e,Z(i,3),h)}function sc(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var h=c-1;return u!==t&&(h=ne(u),h=u<0?Ze(c+h,0):tn(h,c-1)),zi(e,Z(i,3),h,!0)}function oc(e){var i=e==null?0:e.length;return i?Qe(e,1):[]}function Sm(e){var i=e==null?0:e.length;return i?Qe(e,ot):[]}function wm(e,i){var u=e==null?0:e.length;return u?(i=i===t?1:ne(i),Qe(e,i)):[]}function Fm(e){for(var i=-1,u=e==null?0:e.length,c={};++i<u;){var h=e[i];c[h[0]]=h[1]}return c}function ac(e){return e&&e.length?e[0]:t}function Nm(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var h=u==null?0:ne(u);return h<0&&(h=Ze(c+h,0)),Ir(e,i,h)}function km(e){var i=e==null?0:e.length;return i?Bn(e,0,-1):[]}var Cm=re(function(e){var i=Fe(e,Wo);return i.length&&i[0]===e[0]?Lo(i):[]}),Om=re(function(e){var i=zn(e),u=Fe(e,Wo);return i===zn(u)?i=t:u.pop(),u.length&&u[0]===e[0]?Lo(u,Z(i,2)):[]}),xm=re(function(e){var i=zn(e),u=Fe(e,Wo);return i=typeof i=="function"?i:t,i&&u.pop(),u.length&&u[0]===e[0]?Lo(u,t,i):[]});function Lm(e,i){return e==null?"":kp.call(e,i)}function zn(e){var i=e==null?0:e.length;return i?e[i-1]:t}function Rm(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var h=c;return u!==t&&(h=ne(u),h=h<0?Ze(c+h,0):tn(h,c-1)),i===i?pp(e,i,h):zi(e,Uu,h,!0)}function Bm(e,i){return e&&e.length?El(e,ne(i)):t}var zm=re(uc);function uc(e,i){return e&&e.length&&i&&i.length?Mo(e,i):e}function Mm(e,i,u){return e&&e.length&&i&&i.length?Mo(e,i,Z(u,2)):e}function $m(e,i,u){return e&&e.length&&i&&i.length?Mo(e,i,t,u):e}var Pm=Tt(function(e,i){var u=e==null?0:e.length,c=ko(e,i);return Tl(e,Fe(i,function(h){return _t(h,u)?+h:h}).sort(Cl)),c});function Um(e,i){var u=[];if(!(e&&e.length))return u;var c=-1,h=[],g=e.length;for(i=Z(i,3);++c<g;){var E=e[c];i(E,c,e)&&(u.push(E),h.push(c))}return Tl(e,h),u}function ia(e){return e==null?e:Lp.call(e)}function Gm(e,i,u){var c=e==null?0:e.length;return c?(u&&typeof u!="number"&&ln(e,i,u)?(i=0,u=c):(i=i==null?0:ne(i),u=u===t?c:ne(u)),Bn(e,i,u)):[]}function Vm(e,i){return rs(e,i)}function Wm(e,i,u){return Uo(e,i,Z(u,2))}function jm(e,i){var u=e==null?0:e.length;if(u){var c=rs(e,i);if(c<u&&Zn(e[c],i))return c}return-1}function qm(e,i){return rs(e,i,!0)}function Zm(e,i,u){return Uo(e,i,Z(u,2),!0)}function Hm(e,i){var u=e==null?0:e.length;if(u){var c=rs(e,i,!0)-1;if(Zn(e[c],i))return c}return-1}function Jm(e){return e&&e.length?Il(e):[]}function Km(e,i){return e&&e.length?Il(e,Z(i,2)):[]}function Ym(e){var i=e==null?0:e.length;return i?Bn(e,1,i):[]}function Qm(e,i,u){return e&&e.length?(i=u||i===t?1:ne(i),Bn(e,0,i<0?0:i)):[]}function Xm(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),i=c-i,Bn(e,i<0?0:i,c)):[]}function e0(e,i){return e&&e.length?is(e,Z(i,3),!1,!0):[]}function n0(e,i){return e&&e.length?is(e,Z(i,3)):[]}var t0=re(function(e){return Gt(Qe(e,1,$e,!0))}),r0=re(function(e){var i=zn(e);return $e(i)&&(i=t),Gt(Qe(e,1,$e,!0),Z(i,2))}),i0=re(function(e){var i=zn(e);return i=typeof i=="function"?i:t,Gt(Qe(e,1,$e,!0),t,i)});function s0(e){return e&&e.length?Gt(e):[]}function o0(e,i){return e&&e.length?Gt(e,Z(i,2)):[]}function a0(e,i){return i=typeof i=="function"?i:t,e&&e.length?Gt(e,t,i):[]}function sa(e){if(!(e&&e.length))return[];var i=0;return e=zt(e,function(u){if($e(u))return i=Ze(u.length,i),!0}),_o(i,function(u){return Fe(e,vo(u))})}function lc(e,i){if(!(e&&e.length))return[];var u=sa(e);return i==null?u:Fe(u,function(c){return bn(i,t,c)})}var u0=re(function(e,i){return $e(e)?ei(e,i):[]}),l0=re(function(e){return Vo(zt(e,$e))}),c0=re(function(e){var i=zn(e);return $e(i)&&(i=t),Vo(zt(e,$e),Z(i,2))}),d0=re(function(e){var i=zn(e);return i=typeof i=="function"?i:t,Vo(zt(e,$e),t,i)}),f0=re(sa);function h0(e,i){return wl(e||[],i||[],Xr)}function p0(e,i){return wl(e||[],i||[],ri)}var g0=re(function(e){var i=e.length,u=i>1?e[i-1]:t;return u=typeof u=="function"?(e.pop(),u):t,lc(e,u)});function cc(e){var i=p(e);return i.__chain__=!0,i}function m0(e,i){return i(e),e}function hs(e,i){return i(e)}var D0=Tt(function(e){var i=e.length,u=i?e[0]:0,c=this.__wrapped__,h=function(g){return ko(g,e)};return i>1||this.__actions__.length||!(c instanceof ae)||!_t(u)?this.thru(h):(c=c.slice(u,+u+(i?1:0)),c.__actions__.push({func:hs,args:[h],thisArg:t}),new Ln(c,this.__chain__).thru(function(g){return i&&!g.length&&g.push(t),g}))});function E0(){return cc(this)}function v0(){return new Ln(this.value(),this.__chain__)}function b0(){this.__values__===t&&(this.__values__=yc(this.value()));var e=this.__index__>=this.__values__.length,i=e?t:this.__values__[this.__index__++];return{done:e,value:i}}function T0(){return this}function _0(e){for(var i,u=this;u instanceof Qi;){var c=rc(u);c.__index__=0,c.__values__=t,i?h.__wrapped__=c:i=c;var h=c;u=u.__wrapped__}return h.__wrapped__=e,i}function I0(){var e=this.__wrapped__;if(e instanceof ae){var i=e;return this.__actions__.length&&(i=new ae(this)),i=i.reverse(),i.__actions__.push({func:hs,args:[ia],thisArg:t}),new Ln(i,this.__chain__)}return this.thru(ia)}function y0(){return Sl(this.__wrapped__,this.__actions__)}var A0=ss(function(e,i,u){De.call(e,u)?++e[u]:vt(e,u,1)});function S0(e,i,u){var c=X(e)?$u:mg;return u&&ln(e,i,u)&&(i=t),c(e,Z(i,3))}function w0(e,i){var u=X(e)?zt:ll;return u(e,Z(i,3))}var F0=zl(ic),N0=zl(sc);function k0(e,i){return Qe(ps(e,i),1)}function C0(e,i){return Qe(ps(e,i),ot)}function O0(e,i,u){return u=u===t?1:ne(u),Qe(ps(e,i),u)}function dc(e,i){var u=X(e)?On:Ut;return u(e,Z(i,3))}function fc(e,i){var u=X(e)?Yh:ul;return u(e,Z(i,3))}var x0=ss(function(e,i,u){De.call(e,u)?e[u].push(i):vt(e,u,[i])});function L0(e,i,u,c){e=pn(e)?e:Rr(e),u=u&&!c?ne(u):0;var h=e.length;return u<0&&(u=Ze(h+u,0)),vs(e)?u<=h&&e.indexOf(i,u)>-1:!!h&&Ir(e,i,u)>-1}var R0=re(function(e,i,u){var c=-1,h=typeof i=="function",g=pn(e)?y(e.length):[];return Ut(e,function(E){g[++c]=h?bn(i,E,u):ni(E,i,u)}),g}),B0=ss(function(e,i,u){vt(e,u,i)});function ps(e,i){var u=X(e)?Fe:gl;return u(e,Z(i,3))}function z0(e,i,u,c){return e==null?[]:(X(i)||(i=i==null?[]:[i]),u=c?t:u,X(u)||(u=u==null?[]:[u]),vl(e,i,u))}var M0=ss(function(e,i,u){e[u?0:1].push(i)},function(){return[[],[]]});function $0(e,i,u){var c=X(e)?Do:Vu,h=arguments.length<3;return c(e,Z(i,4),u,h,Ut)}function P0(e,i,u){var c=X(e)?Qh:Vu,h=arguments.length<3;return c(e,Z(i,4),u,h,ul)}function U0(e,i){var u=X(e)?zt:ll;return u(e,Ds(Z(i,3)))}function G0(e){var i=X(e)?il:Lg;return i(e)}function V0(e,i,u){(u?ln(e,i,u):i===t)?i=1:i=ne(i);var c=X(e)?dg:Rg;return c(e,i)}function W0(e){var i=X(e)?fg:zg;return i(e)}function j0(e){if(e==null)return 0;if(pn(e))return vs(e)?Ar(e):e.length;var i=rn(e);return i==Vn||i==Wn?e.size:Bo(e).length}function q0(e,i,u){var c=X(e)?Eo:Mg;return u&&ln(e,i,u)&&(i=t),c(e,Z(i,3))}var Z0=re(function(e,i){if(e==null)return[];var u=i.length;return u>1&&ln(e,i[0],i[1])?i=[]:u>2&&ln(i[0],i[1],i[2])&&(i=[i[0]]),vl(e,Qe(i,1),[])}),gs=wp||function(){return Ye.Date.now()};function H0(e,i){if(typeof i!="function")throw new xn(l);return e=ne(e),function(){if(--e<1)return i.apply(this,arguments)}}function hc(e,i,u){return i=u?t:i,i=e&&i==null?e.length:i,bt(e,en,t,t,t,t,i)}function pc(e,i){var u;if(typeof i!="function")throw new xn(l);return e=ne(e),function(){return--e>0&&(u=i.apply(this,arguments)),e<=1&&(i=t),u}}var oa=re(function(e,i,u){var c=j;if(u.length){var h=$t(u,xr(oa));c|=Le}return bt(e,c,i,u,h)}),gc=re(function(e,i,u){var c=j|ce;if(u.length){var h=$t(u,xr(gc));c|=Le}return bt(i,c,e,u,h)});function mc(e,i,u){i=u?t:i;var c=bt(e,me,t,t,t,t,t,i);return c.placeholder=mc.placeholder,c}function Dc(e,i,u){i=u?t:i;var c=bt(e,ke,t,t,t,t,t,i);return c.placeholder=Dc.placeholder,c}function Ec(e,i,u){var c,h,g,E,b,I,N=0,C=!1,L=!1,z=!0;if(typeof e!="function")throw new xn(l);i=Mn(i)||0,Ce(u)&&(C=!!u.leading,L="maxWait"in u,g=L?Ze(Mn(u.maxWait)||0,i):g,z="trailing"in u?!!u.trailing:z);function W(Pe){var Hn=c,At=h;return c=h=t,N=Pe,E=e.apply(At,Hn),E}function H(Pe){return N=Pe,b=oi(se,i),C?W(Pe):E}function te(Pe){var Hn=Pe-I,At=Pe-N,zc=i-Hn;return L?tn(zc,g-At):zc}function J(Pe){var Hn=Pe-I,At=Pe-N;return I===t||Hn>=i||Hn<0||L&&At>=g}function se(){var Pe=gs();if(J(Pe))return le(Pe);b=oi(se,te(Pe))}function le(Pe){return b=t,z&&c?W(Pe):(c=h=t,E)}function yn(){b!==t&&Fl(b),N=0,c=I=h=b=t}function cn(){return b===t?E:le(gs())}function An(){var Pe=gs(),Hn=J(Pe);if(c=arguments,h=this,I=Pe,Hn){if(b===t)return H(I);if(L)return Fl(b),b=oi(se,i),W(I)}return b===t&&(b=oi(se,i)),E}return An.cancel=yn,An.flush=cn,An}var J0=re(function(e,i){return al(e,1,i)}),K0=re(function(e,i,u){return al(e,Mn(i)||0,u)});function Y0(e){return bt(e,x)}function ms(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new xn(l);var u=function(){var c=arguments,h=i?i.apply(this,c):c[0],g=u.cache;if(g.has(h))return g.get(h);var E=e.apply(this,c);return u.cache=g.set(h,E)||g,E};return u.cache=new(ms.Cache||Et),u}ms.Cache=Et;function Ds(e){if(typeof e!="function")throw new xn(l);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function Q0(e){return pc(2,e)}var X0=$g(function(e,i){i=i.length==1&&X(i[0])?Fe(i[0],Tn(Z())):Fe(Qe(i,1),Tn(Z()));var u=i.length;return re(function(c){for(var h=-1,g=tn(c.length,u);++h<g;)c[h]=i[h].call(this,c[h]);return bn(e,this,c)})}),aa=re(function(e,i){var u=$t(i,xr(aa));return bt(e,Le,t,i,u)}),vc=re(function(e,i){var u=$t(i,xr(vc));return bt(e,on,t,i,u)}),eD=Tt(function(e,i){return bt(e,gt,t,t,t,i)});function nD(e,i){if(typeof e!="function")throw new xn(l);return i=i===t?i:ne(i),re(e,i)}function tD(e,i){if(typeof e!="function")throw new xn(l);return i=i==null?0:Ze(ne(i),0),re(function(u){var c=u[i],h=Wt(u,0,i);return c&&Mt(h,c),bn(e,this,h)})}function rD(e,i,u){var c=!0,h=!0;if(typeof e!="function")throw new xn(l);return Ce(u)&&(c="leading"in u?!!u.leading:c,h="trailing"in u?!!u.trailing:h),Ec(e,i,{leading:c,maxWait:i,trailing:h})}function iD(e){return hc(e,1)}function sD(e,i){return aa(jo(i),e)}function oD(){if(!arguments.length)return[];var e=arguments[0];return X(e)?e:[e]}function aD(e){return Rn(e,A)}function uD(e,i){return i=typeof i=="function"?i:t,Rn(e,A,i)}function lD(e){return Rn(e,v|A)}function cD(e,i){return i=typeof i=="function"?i:t,Rn(e,v|A,i)}function dD(e,i){return i==null||ol(e,i,He(i))}function Zn(e,i){return e===i||e!==e&&i!==i}var fD=ls(xo),hD=ls(function(e,i){return e>=i}),ur=fl(function(){return arguments}())?fl:function(e){return Re(e)&&De.call(e,"callee")&&!Qu.call(e,"callee")},X=y.isArray,pD=xu?Tn(xu):_g;function pn(e){return e!=null&&Es(e.length)&&!It(e)}function $e(e){return Re(e)&&pn(e)}function gD(e){return e===!0||e===!1||Re(e)&&un(e)==pe}var jt=Np||Ea,mD=Lu?Tn(Lu):Ig;function DD(e){return Re(e)&&e.nodeType===1&&!ai(e)}function ED(e){if(e==null)return!0;if(pn(e)&&(X(e)||typeof e=="string"||typeof e.splice=="function"||jt(e)||Lr(e)||ur(e)))return!e.length;var i=rn(e);if(i==Vn||i==Wn)return!e.size;if(si(e))return!Bo(e).length;for(var u in e)if(De.call(e,u))return!1;return!0}function vD(e,i){return ti(e,i)}function bD(e,i,u){u=typeof u=="function"?u:t;var c=u?u(e,i):t;return c===t?ti(e,i,t,u):!!c}function ua(e){if(!Re(e))return!1;var i=un(e);return i==Bt||i==Ur||typeof e.message=="string"&&typeof e.name=="string"&&!ai(e)}function TD(e){return typeof e=="number"&&el(e)}function It(e){if(!Ce(e))return!1;var i=un(e);return i==nn||i==au||i==Me||i==jf}function bc(e){return typeof e=="number"&&e==ne(e)}function Es(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Gn}function Ce(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function Re(e){return e!=null&&typeof e=="object"}var Tc=Ru?Tn(Ru):Ag;function _D(e,i){return e===i||Ro(e,i,Qo(i))}function ID(e,i,u){return u=typeof u=="function"?u:t,Ro(e,i,Qo(i),u)}function yD(e){return _c(e)&&e!=+e}function AD(e){if(um(e))throw new Q(a);return hl(e)}function SD(e){return e===null}function wD(e){return e==null}function _c(e){return typeof e=="number"||Re(e)&&un(e)==Gr}function ai(e){if(!Re(e)||un(e)!=mt)return!1;var i=ji(e);if(i===null)return!0;var u=De.call(i,"constructor")&&i.constructor;return typeof u=="function"&&u instanceof u&&Ui.call(u)==Ip}var la=Bu?Tn(Bu):Sg;function FD(e){return bc(e)&&e>=-Gn&&e<=Gn}var Ic=zu?Tn(zu):wg;function vs(e){return typeof e=="string"||!X(e)&&Re(e)&&un(e)==Wr}function In(e){return typeof e=="symbol"||Re(e)&&un(e)==Oi}var Lr=Mu?Tn(Mu):Fg;function ND(e){return e===t}function kD(e){return Re(e)&&rn(e)==jr}function CD(e){return Re(e)&&un(e)==Zf}var OD=ls(zo),xD=ls(function(e,i){return e<=i});function yc(e){if(!e)return[];if(pn(e))return vs(e)?jn(e):hn(e);if(Hr&&e[Hr])return dp(e[Hr]());var i=rn(e),u=i==Vn?yo:i==Wn?Mi:Rr;return u(e)}function yt(e){if(!e)return e===0?e:0;if(e=Mn(e),e===ot||e===-ot){var i=e<0?-1:1;return i*br}return e===e?e:0}function ne(e){var i=yt(e),u=i%1;return i===i?u?i-u:i:0}function Ac(e){return e?ir(ne(e),0,Nn):0}function Mn(e){if(typeof e=="number")return e;if(In(e))return Xt;if(Ce(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=Ce(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=Wu(e);var u=ph.test(e);return u||mh.test(e)?Hh(e.slice(2),u?2:8):hh.test(e)?Xt:+e}function Sc(e){return ut(e,gn(e))}function LD(e){return e?ir(ne(e),-Gn,Gn):e===0?e:0}function ge(e){return e==null?"":_n(e)}var RD=Cr(function(e,i){if(si(i)||pn(i)){ut(i,He(i),e);return}for(var u in i)De.call(i,u)&&Xr(e,u,i[u])}),wc=Cr(function(e,i){ut(i,gn(i),e)}),bs=Cr(function(e,i,u,c){ut(i,gn(i),e,c)}),BD=Cr(function(e,i,u,c){ut(i,He(i),e,c)}),zD=Tt(ko);function MD(e,i){var u=kr(e);return i==null?u:sl(u,i)}var $D=re(function(e,i){e=Te(e);var u=-1,c=i.length,h=c>2?i[2]:t;for(h&&ln(i[0],i[1],h)&&(c=1);++u<c;)for(var g=i[u],E=gn(g),b=-1,I=E.length;++b<I;){var N=E[b],C=e[N];(C===t||Zn(C,wr[N])&&!De.call(e,N))&&(e[N]=g[N])}return e}),PD=re(function(e){return e.push(t,Wl),bn(Fc,t,e)});function UD(e,i){return Pu(e,Z(i,3),at)}function GD(e,i){return Pu(e,Z(i,3),Oo)}function VD(e,i){return e==null?e:Co(e,Z(i,3),gn)}function WD(e,i){return e==null?e:cl(e,Z(i,3),gn)}function jD(e,i){return e&&at(e,Z(i,3))}function qD(e,i){return e&&Oo(e,Z(i,3))}function ZD(e){return e==null?[]:ns(e,He(e))}function HD(e){return e==null?[]:ns(e,gn(e))}function ca(e,i,u){var c=e==null?t:sr(e,i);return c===t?u:c}function JD(e,i){return e!=null&&Zl(e,i,Eg)}function da(e,i){return e!=null&&Zl(e,i,vg)}var KD=$l(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=Gi.call(i)),e[i]=u},ha(mn)),YD=$l(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=Gi.call(i)),De.call(e,i)?e[i].push(u):e[i]=[u]},Z),QD=re(ni);function He(e){return pn(e)?rl(e):Bo(e)}function gn(e){return pn(e)?rl(e,!0):Ng(e)}function XD(e,i){var u={};return i=Z(i,3),at(e,function(c,h,g){vt(u,i(c,h,g),c)}),u}function eE(e,i){var u={};return i=Z(i,3),at(e,function(c,h,g){vt(u,h,i(c,h,g))}),u}var nE=Cr(function(e,i,u){ts(e,i,u)}),Fc=Cr(function(e,i,u,c){ts(e,i,u,c)}),tE=Tt(function(e,i){var u={};if(e==null)return u;var c=!1;i=Fe(i,function(g){return g=Vt(g,e),c||(c=g.length>1),g}),ut(e,Ko(e),u),c&&(u=Rn(u,v|k|A,Kg));for(var h=i.length;h--;)Go(u,i[h]);return u});function rE(e,i){return Nc(e,Ds(Z(i)))}var iE=Tt(function(e,i){return e==null?{}:Cg(e,i)});function Nc(e,i){if(e==null)return{};var u=Fe(Ko(e),function(c){return[c]});return i=Z(i),bl(e,u,function(c,h){return i(c,h[0])})}function sE(e,i,u){i=Vt(i,e);var c=-1,h=i.length;for(h||(h=1,e=t);++c<h;){var g=e==null?t:e[lt(i[c])];g===t&&(c=h,g=u),e=It(g)?g.call(e):g}return e}function oE(e,i,u){return e==null?e:ri(e,i,u)}function aE(e,i,u,c){return c=typeof c=="function"?c:t,e==null?e:ri(e,i,u,c)}var kc=Gl(He),Cc=Gl(gn);function uE(e,i,u){var c=X(e),h=c||jt(e)||Lr(e);if(i=Z(i,4),u==null){var g=e&&e.constructor;h?u=c?new g:[]:Ce(e)?u=It(g)?kr(ji(e)):{}:u={}}return(h?On:at)(e,function(E,b,I){return i(u,E,b,I)}),u}function lE(e,i){return e==null?!0:Go(e,i)}function cE(e,i,u){return e==null?e:Al(e,i,jo(u))}function dE(e,i,u,c){return c=typeof c=="function"?c:t,e==null?e:Al(e,i,jo(u),c)}function Rr(e){return e==null?[]:Io(e,He(e))}function fE(e){return e==null?[]:Io(e,gn(e))}function hE(e,i,u){return u===t&&(u=i,i=t),u!==t&&(u=Mn(u),u=u===u?u:0),i!==t&&(i=Mn(i),i=i===i?i:0),ir(Mn(e),i,u)}function pE(e,i,u){return i=yt(i),u===t?(u=i,i=0):u=yt(u),e=Mn(e),bg(e,i,u)}function gE(e,i,u){if(u&&typeof u!="boolean"&&ln(e,i,u)&&(i=u=t),u===t&&(typeof i=="boolean"?(u=i,i=t):typeof e=="boolean"&&(u=e,e=t)),e===t&&i===t?(e=0,i=1):(e=yt(e),i===t?(i=e,e=0):i=yt(i)),e>i){var c=e;e=i,i=c}if(u||e%1||i%1){var h=nl();return tn(e+h*(i-e+Zh("1e-"+((h+"").length-1))),i)}return $o(e,i)}var mE=Or(function(e,i,u){return i=i.toLowerCase(),e+(u?Oc(i):i)});function Oc(e){return fa(ge(e).toLowerCase())}function xc(e){return e=ge(e),e&&e.replace(Eh,op).replace(zh,"")}function DE(e,i,u){e=ge(e),i=_n(i);var c=e.length;u=u===t?c:ir(ne(u),0,c);var h=u;return u-=i.length,u>=0&&e.slice(u,h)==i}function EE(e){return e=ge(e),e&&Qf.test(e)?e.replace(cu,ap):e}function vE(e){return e=ge(e),e&&ih.test(e)?e.replace(oo,"\\$&"):e}var bE=Or(function(e,i,u){return e+(u?"-":"")+i.toLowerCase()}),TE=Or(function(e,i,u){return e+(u?" ":"")+i.toLowerCase()}),_E=Bl("toLowerCase");function IE(e,i,u){e=ge(e),i=ne(i);var c=i?Ar(e):0;if(!i||c>=i)return e;var h=(i-c)/2;return us(Ji(h),u)+e+us(Hi(h),u)}function yE(e,i,u){e=ge(e),i=ne(i);var c=i?Ar(e):0;return i&&c<i?e+us(i-c,u):e}function AE(e,i,u){e=ge(e),i=ne(i);var c=i?Ar(e):0;return i&&c<i?us(i-c,u)+e:e}function SE(e,i,u){return u||i==null?i=0:i&&(i=+i),xp(ge(e).replace(ao,""),i||0)}function wE(e,i,u){return(u?ln(e,i,u):i===t)?i=1:i=ne(i),Po(ge(e),i)}function FE(){var e=arguments,i=ge(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var NE=Or(function(e,i,u){return e+(u?"_":"")+i.toLowerCase()});function kE(e,i,u){return u&&typeof u!="number"&&ln(e,i,u)&&(i=u=t),u=u===t?Nn:u>>>0,u?(e=ge(e),e&&(typeof i=="string"||i!=null&&!la(i))&&(i=_n(i),!i&&yr(e))?Wt(jn(e),0,u):e.split(i,u)):[]}var CE=Or(function(e,i,u){return e+(u?" ":"")+fa(i)});function OE(e,i,u){return e=ge(e),u=u==null?0:ir(ne(u),0,e.length),i=_n(i),e.slice(u,u+i.length)==i}function xE(e,i,u){var c=p.templateSettings;u&&ln(e,i,u)&&(i=t),e=ge(e),i=bs({},i,c,Vl);var h=bs({},i.imports,c.imports,Vl),g=He(h),E=Io(h,g),b,I,N=0,C=i.interpolate||xi,L="__p += '",z=Ao((i.escape||xi).source+"|"+C.source+"|"+(C===du?fh:xi).source+"|"+(i.evaluate||xi).source+"|$","g"),W="//# sourceURL="+(De.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Gh+"]")+`
`;e.replace(z,function(J,se,le,yn,cn,An){return le||(le=yn),L+=e.slice(N,An).replace(vh,up),se&&(b=!0,L+=`' +
__e(`+se+`) +
'`),cn&&(I=!0,L+=`';
`+cn+`;
__p += '`),le&&(L+=`' +
((__t = (`+le+`)) == null ? '' : __t) +
'`),N=An+J.length,J}),L+=`';
`;var H=De.call(i,"variable")&&i.variable;if(!H)L=`with (obj) {
`+L+`
}
`;else if(ch.test(H))throw new Q(d);L=(I?L.replace(Hf,""):L).replace(Jf,"$1").replace(Kf,"$1;"),L="function("+(H||"obj")+`) {
`+(H?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(b?", __e = _.escape":"")+(I?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+L+`return __p
}`;var te=Rc(function(){return fe(g,W+"return "+L).apply(t,E)});if(te.source=L,ua(te))throw te;return te}function LE(e){return ge(e).toLowerCase()}function RE(e){return ge(e).toUpperCase()}function BE(e,i,u){if(e=ge(e),e&&(u||i===t))return Wu(e);if(!e||!(i=_n(i)))return e;var c=jn(e),h=jn(i),g=ju(c,h),E=qu(c,h)+1;return Wt(c,g,E).join("")}function zE(e,i,u){if(e=ge(e),e&&(u||i===t))return e.slice(0,Hu(e)+1);if(!e||!(i=_n(i)))return e;var c=jn(e),h=qu(c,jn(i))+1;return Wt(c,0,h).join("")}function ME(e,i,u){if(e=ge(e),e&&(u||i===t))return e.replace(ao,"");if(!e||!(i=_n(i)))return e;var c=jn(e),h=ju(c,jn(i));return Wt(c,h).join("")}function $E(e,i){var u=Y,c=an;if(Ce(i)){var h="separator"in i?i.separator:h;u="length"in i?ne(i.length):u,c="omission"in i?_n(i.omission):c}e=ge(e);var g=e.length;if(yr(e)){var E=jn(e);g=E.length}if(u>=g)return e;var b=u-Ar(c);if(b<1)return c;var I=E?Wt(E,0,b).join(""):e.slice(0,b);if(h===t)return I+c;if(E&&(b+=I.length-b),la(h)){if(e.slice(b).search(h)){var N,C=I;for(h.global||(h=Ao(h.source,ge(fu.exec(h))+"g")),h.lastIndex=0;N=h.exec(C);)var L=N.index;I=I.slice(0,L===t?b:L)}}else if(e.indexOf(_n(h),b)!=b){var z=I.lastIndexOf(h);z>-1&&(I=I.slice(0,z))}return I+c}function PE(e){return e=ge(e),e&&Yf.test(e)?e.replace(lu,gp):e}var UE=Or(function(e,i,u){return e+(u?" ":"")+i.toUpperCase()}),fa=Bl("toUpperCase");function Lc(e,i,u){return e=ge(e),i=u?t:i,i===t?cp(e)?Ep(e):np(e):e.match(i)||[]}var Rc=re(function(e,i){try{return bn(e,t,i)}catch(u){return ua(u)?u:new Q(u)}}),GE=Tt(function(e,i){return On(i,function(u){u=lt(u),vt(e,u,oa(e[u],e))}),e});function VE(e){var i=e==null?0:e.length,u=Z();return e=i?Fe(e,function(c){if(typeof c[1]!="function")throw new xn(l);return[u(c[0]),c[1]]}):[],re(function(c){for(var h=-1;++h<i;){var g=e[h];if(bn(g[0],this,c))return bn(g[1],this,c)}})}function WE(e){return gg(Rn(e,v))}function ha(e){return function(){return e}}function jE(e,i){return e==null||e!==e?i:e}var qE=Ml(),ZE=Ml(!0);function mn(e){return e}function pa(e){return pl(typeof e=="function"?e:Rn(e,v))}function HE(e){return ml(Rn(e,v))}function JE(e,i){return Dl(e,Rn(i,v))}var KE=re(function(e,i){return function(u){return ni(u,e,i)}}),YE=re(function(e,i){return function(u){return ni(e,u,i)}});function ga(e,i,u){var c=He(i),h=ns(i,c);u==null&&!(Ce(i)&&(h.length||!c.length))&&(u=i,i=e,e=this,h=ns(i,He(i)));var g=!(Ce(u)&&"chain"in u)||!!u.chain,E=It(e);return On(h,function(b){var I=i[b];e[b]=I,E&&(e.prototype[b]=function(){var N=this.__chain__;if(g||N){var C=e(this.__wrapped__),L=C.__actions__=hn(this.__actions__);return L.push({func:I,args:arguments,thisArg:e}),C.__chain__=N,C}return I.apply(e,Mt([this.value()],arguments))})}),e}function QE(){return Ye._===this&&(Ye._=yp),this}function ma(){}function XE(e){return e=ne(e),re(function(i){return El(i,e)})}var ev=Zo(Fe),nv=Zo($u),tv=Zo(Eo);function Bc(e){return ea(e)?vo(lt(e)):Og(e)}function rv(e){return function(i){return e==null?t:sr(e,i)}}var iv=Pl(),sv=Pl(!0);function Da(){return[]}function Ea(){return!1}function ov(){return{}}function av(){return""}function uv(){return!0}function lv(e,i){if(e=ne(e),e<1||e>Gn)return[];var u=Nn,c=tn(e,Nn);i=Z(i),e-=Nn;for(var h=_o(c,i);++u<e;)i(u);return h}function cv(e){return X(e)?Fe(e,lt):In(e)?[e]:hn(tc(ge(e)))}function dv(e){var i=++_p;return ge(e)+i}var fv=as(function(e,i){return e+i},0),hv=Ho("ceil"),pv=as(function(e,i){return e/i},1),gv=Ho("floor");function mv(e){return e&&e.length?es(e,mn,xo):t}function Dv(e,i){return e&&e.length?es(e,Z(i,2),xo):t}function Ev(e){return Gu(e,mn)}function vv(e,i){return Gu(e,Z(i,2))}function bv(e){return e&&e.length?es(e,mn,zo):t}function Tv(e,i){return e&&e.length?es(e,Z(i,2),zo):t}var _v=as(function(e,i){return e*i},1),Iv=Ho("round"),yv=as(function(e,i){return e-i},0);function Av(e){return e&&e.length?To(e,mn):0}function Sv(e,i){return e&&e.length?To(e,Z(i,2)):0}return p.after=H0,p.ary=hc,p.assign=RD,p.assignIn=wc,p.assignInWith=bs,p.assignWith=BD,p.at=zD,p.before=pc,p.bind=oa,p.bindAll=GE,p.bindKey=gc,p.castArray=oD,p.chain=cc,p.chunk=gm,p.compact=mm,p.concat=Dm,p.cond=VE,p.conforms=WE,p.constant=ha,p.countBy=A0,p.create=MD,p.curry=mc,p.curryRight=Dc,p.debounce=Ec,p.defaults=$D,p.defaultsDeep=PD,p.defer=J0,p.delay=K0,p.difference=Em,p.differenceBy=vm,p.differenceWith=bm,p.drop=Tm,p.dropRight=_m,p.dropRightWhile=Im,p.dropWhile=ym,p.fill=Am,p.filter=w0,p.flatMap=k0,p.flatMapDeep=C0,p.flatMapDepth=O0,p.flatten=oc,p.flattenDeep=Sm,p.flattenDepth=wm,p.flip=Y0,p.flow=qE,p.flowRight=ZE,p.fromPairs=Fm,p.functions=ZD,p.functionsIn=HD,p.groupBy=x0,p.initial=km,p.intersection=Cm,p.intersectionBy=Om,p.intersectionWith=xm,p.invert=KD,p.invertBy=YD,p.invokeMap=R0,p.iteratee=pa,p.keyBy=B0,p.keys=He,p.keysIn=gn,p.map=ps,p.mapKeys=XD,p.mapValues=eE,p.matches=HE,p.matchesProperty=JE,p.memoize=ms,p.merge=nE,p.mergeWith=Fc,p.method=KE,p.methodOf=YE,p.mixin=ga,p.negate=Ds,p.nthArg=XE,p.omit=tE,p.omitBy=rE,p.once=Q0,p.orderBy=z0,p.over=ev,p.overArgs=X0,p.overEvery=nv,p.overSome=tv,p.partial=aa,p.partialRight=vc,p.partition=M0,p.pick=iE,p.pickBy=Nc,p.property=Bc,p.propertyOf=rv,p.pull=zm,p.pullAll=uc,p.pullAllBy=Mm,p.pullAllWith=$m,p.pullAt=Pm,p.range=iv,p.rangeRight=sv,p.rearg=eD,p.reject=U0,p.remove=Um,p.rest=nD,p.reverse=ia,p.sampleSize=V0,p.set=oE,p.setWith=aE,p.shuffle=W0,p.slice=Gm,p.sortBy=Z0,p.sortedUniq=Jm,p.sortedUniqBy=Km,p.split=kE,p.spread=tD,p.tail=Ym,p.take=Qm,p.takeRight=Xm,p.takeRightWhile=e0,p.takeWhile=n0,p.tap=m0,p.throttle=rD,p.thru=hs,p.toArray=yc,p.toPairs=kc,p.toPairsIn=Cc,p.toPath=cv,p.toPlainObject=Sc,p.transform=uE,p.unary=iD,p.union=t0,p.unionBy=r0,p.unionWith=i0,p.uniq=s0,p.uniqBy=o0,p.uniqWith=a0,p.unset=lE,p.unzip=sa,p.unzipWith=lc,p.update=cE,p.updateWith=dE,p.values=Rr,p.valuesIn=fE,p.without=u0,p.words=Lc,p.wrap=sD,p.xor=l0,p.xorBy=c0,p.xorWith=d0,p.zip=f0,p.zipObject=h0,p.zipObjectDeep=p0,p.zipWith=g0,p.entries=kc,p.entriesIn=Cc,p.extend=wc,p.extendWith=bs,ga(p,p),p.add=fv,p.attempt=Rc,p.camelCase=mE,p.capitalize=Oc,p.ceil=hv,p.clamp=hE,p.clone=aD,p.cloneDeep=lD,p.cloneDeepWith=cD,p.cloneWith=uD,p.conformsTo=dD,p.deburr=xc,p.defaultTo=jE,p.divide=pv,p.endsWith=DE,p.eq=Zn,p.escape=EE,p.escapeRegExp=vE,p.every=S0,p.find=F0,p.findIndex=ic,p.findKey=UD,p.findLast=N0,p.findLastIndex=sc,p.findLastKey=GD,p.floor=gv,p.forEach=dc,p.forEachRight=fc,p.forIn=VD,p.forInRight=WD,p.forOwn=jD,p.forOwnRight=qD,p.get=ca,p.gt=fD,p.gte=hD,p.has=JD,p.hasIn=da,p.head=ac,p.identity=mn,p.includes=L0,p.indexOf=Nm,p.inRange=pE,p.invoke=QD,p.isArguments=ur,p.isArray=X,p.isArrayBuffer=pD,p.isArrayLike=pn,p.isArrayLikeObject=$e,p.isBoolean=gD,p.isBuffer=jt,p.isDate=mD,p.isElement=DD,p.isEmpty=ED,p.isEqual=vD,p.isEqualWith=bD,p.isError=ua,p.isFinite=TD,p.isFunction=It,p.isInteger=bc,p.isLength=Es,p.isMap=Tc,p.isMatch=_D,p.isMatchWith=ID,p.isNaN=yD,p.isNative=AD,p.isNil=wD,p.isNull=SD,p.isNumber=_c,p.isObject=Ce,p.isObjectLike=Re,p.isPlainObject=ai,p.isRegExp=la,p.isSafeInteger=FD,p.isSet=Ic,p.isString=vs,p.isSymbol=In,p.isTypedArray=Lr,p.isUndefined=ND,p.isWeakMap=kD,p.isWeakSet=CD,p.join=Lm,p.kebabCase=bE,p.last=zn,p.lastIndexOf=Rm,p.lowerCase=TE,p.lowerFirst=_E,p.lt=OD,p.lte=xD,p.max=mv,p.maxBy=Dv,p.mean=Ev,p.meanBy=vv,p.min=bv,p.minBy=Tv,p.stubArray=Da,p.stubFalse=Ea,p.stubObject=ov,p.stubString=av,p.stubTrue=uv,p.multiply=_v,p.nth=Bm,p.noConflict=QE,p.noop=ma,p.now=gs,p.pad=IE,p.padEnd=yE,p.padStart=AE,p.parseInt=SE,p.random=gE,p.reduce=$0,p.reduceRight=P0,p.repeat=wE,p.replace=FE,p.result=sE,p.round=Iv,p.runInContext=_,p.sample=G0,p.size=j0,p.snakeCase=NE,p.some=q0,p.sortedIndex=Vm,p.sortedIndexBy=Wm,p.sortedIndexOf=jm,p.sortedLastIndex=qm,p.sortedLastIndexBy=Zm,p.sortedLastIndexOf=Hm,p.startCase=CE,p.startsWith=OE,p.subtract=yv,p.sum=Av,p.sumBy=Sv,p.template=xE,p.times=lv,p.toFinite=yt,p.toInteger=ne,p.toLength=Ac,p.toLower=LE,p.toNumber=Mn,p.toSafeInteger=LD,p.toString=ge,p.toUpper=RE,p.trim=BE,p.trimEnd=zE,p.trimStart=ME,p.truncate=$E,p.unescape=PE,p.uniqueId=dv,p.upperCase=UE,p.upperFirst=fa,p.each=dc,p.eachRight=fc,p.first=ac,ga(p,function(){var e={};return at(p,function(i,u){De.call(p.prototype,u)||(e[u]=i)}),e}(),{chain:!1}),p.VERSION=o,On(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){p[e].placeholder=p}),On(["drop","take"],function(e,i){ae.prototype[e]=function(u){u=u===t?1:Ze(ne(u),0);var c=this.__filtered__&&!i?new ae(this):this.clone();return c.__filtered__?c.__takeCount__=tn(u,c.__takeCount__):c.__views__.push({size:tn(u,Nn),type:e+(c.__dir__<0?"Right":"")}),c},ae.prototype[e+"Right"]=function(u){return this.reverse()[e](u).reverse()}}),On(["filter","map","takeWhile"],function(e,i){var u=i+1,c=u==ki||u==Ci;ae.prototype[e]=function(h){var g=this.clone();return g.__iteratees__.push({iteratee:Z(h,3),type:u}),g.__filtered__=g.__filtered__||c,g}}),On(["head","last"],function(e,i){var u="take"+(i?"Right":"");ae.prototype[e]=function(){return this[u](1).value()[0]}}),On(["initial","tail"],function(e,i){var u="drop"+(i?"":"Right");ae.prototype[e]=function(){return this.__filtered__?new ae(this):this[u](1)}}),ae.prototype.compact=function(){return this.filter(mn)},ae.prototype.find=function(e){return this.filter(e).head()},ae.prototype.findLast=function(e){return this.reverse().find(e)},ae.prototype.invokeMap=re(function(e,i){return typeof e=="function"?new ae(this):this.map(function(u){return ni(u,e,i)})}),ae.prototype.reject=function(e){return this.filter(Ds(Z(e)))},ae.prototype.slice=function(e,i){e=ne(e);var u=this;return u.__filtered__&&(e>0||i<0)?new ae(u):(e<0?u=u.takeRight(-e):e&&(u=u.drop(e)),i!==t&&(i=ne(i),u=i<0?u.dropRight(-i):u.take(i-e)),u)},ae.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},ae.prototype.toArray=function(){return this.take(Nn)},at(ae.prototype,function(e,i){var u=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),h=p[c?"take"+(i=="last"?"Right":""):i],g=c||/^find/.test(i);h&&(p.prototype[i]=function(){var E=this.__wrapped__,b=c?[1]:arguments,I=E instanceof ae,N=b[0],C=I||X(E),L=function(se){var le=h.apply(p,Mt([se],b));return c&&z?le[0]:le};C&&u&&typeof N=="function"&&N.length!=1&&(I=C=!1);var z=this.__chain__,W=!!this.__actions__.length,H=g&&!z,te=I&&!W;if(!g&&C){E=te?E:new ae(this);var J=e.apply(E,b);return J.__actions__.push({func:hs,args:[L],thisArg:t}),new Ln(J,z)}return H&&te?e.apply(this,b):(J=this.thru(L),H?c?J.value()[0]:J.value():J)})}),On(["pop","push","shift","sort","splice","unshift"],function(e){var i=$i[e],u=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);p.prototype[e]=function(){var h=arguments;if(c&&!this.__chain__){var g=this.value();return i.apply(X(g)?g:[],h)}return this[u](function(E){return i.apply(X(E)?E:[],h)})}}),at(ae.prototype,function(e,i){var u=p[i];if(u){var c=u.name+"";De.call(Nr,c)||(Nr[c]=[]),Nr[c].push({name:i,func:u})}}),Nr[os(t,ce).name]=[{name:"wrapper",func:t}],ae.prototype.clone=Pp,ae.prototype.reverse=Up,ae.prototype.value=Gp,p.prototype.at=D0,p.prototype.chain=E0,p.prototype.commit=v0,p.prototype.next=b0,p.prototype.plant=_0,p.prototype.reverse=I0,p.prototype.toJSON=p.prototype.valueOf=p.prototype.value=y0,p.prototype.first=p.prototype.head,Hr&&(p.prototype[Hr]=T0),p},Sr=vp();er?((er.exports=Sr)._=Sr,po._=Sr):Ye._=Sr}).call(di)})(xs,xs.exports);var LT=xs.exports;const kt=xT(LT);function RT(){return{convert:r=>{if(r===null||r===void 0)return null;switch(typeof r){case"boolean":return r;case"string":{const n=r.toLowerCase().trim();return n==="true"||n==="t"||n==="1"}case"number":return r!==0;default:return null}},asString:r=>String(r),type:r=>r.boolean().optional()}}function Sn(r,n){const t=o=>n.convert(o[r]);return{name:BT(r),key:r,asEnv:o=>({[r]:n.asString(o)}),zod:{type:n.type},get:t,getOrDefault:(o,s)=>t(o)??s}}function BT(r){return r.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}Sn("MAGIDOC_GENERATE",RT());function _s(r){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(r(n)).optional()}}function od(r){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(r(n).optional()).optional()}}function Is(){return{convert:r=>r==null||r===""?null:String(r),asString:r=>String(r),type:r=>r.string().optional()}}function ad(r){return{convert:n=>n==null||!r.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(r).optional()}}var Gs={APP_LOGO:Sn("APP_LOGO",Is()),APP_TITLE:Sn("APP_TITLE",Is()),APP_FAVICON:Sn("APP_FAVICON",Is()),SITE_ROOT:Sn("SITE_ROOT",Is()),SITE_META:Sn("SITE_META",od(r=>r.string())),CUSTOM_STYLES:Sn("CUSTOM_STYLES",_s(r=>r.string())),FIELDS_SORTING:Sn("FIELDS_SORTING",ad(["default","alphabetical"])),ARGUMENTS_SORTING:Sn("ARGUMENTS_SORTING",ad(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:Sn("QUERY_GENERATION_FACTORIES",od(r=>r.union([r.string(),r.boolean(),r.number(),r.null(),r.record(r.unknown())]))),PAGES:Sn("PAGES",_s(r=>{const n=r.lazy(()=>r.object({title:r.string().min(1),content:r.union([r.array(n),r.string().min(1)])}));return n})),EXTERNAL_LINKS:Sn("EXTERNAL_LINKS",_s(r=>r.object({label:r.string().min(1),href:r.string().min(1),position:r.union([r.literal("header"),r.literal("navigation")]).optional(),kind:r.string().min(1).optional(),group:r.string().min(1).optional()}))),DIRECTIVES:Sn("DIRECTIVES",_s(r=>r.object({name:r.string().min(1),args:r.array(r.string())})))};const zT="https://smart-village.app/wp-content/uploads/2024/09/SVA_Logo_rgb_white.png",MT="",$T="Smart Village App Mainserver GraphQL",PT='[{"title":"Willkommen","content":"\\n# GraphQL-Dokumentation des Smart Village App Mainservers\\n\\nHerzlich willkommen zur technischen Dokumentation des Mainservers der Smart Village App. Diese Dokumentation bietet eine umfassende Übersicht über die GraphQL-API des Mainservers, die als zentrale Schnittstelle für die Smart Village App und die externen Datenquellen dient.\\n\\n## Ziele dieser Dokumentation\\n\\nDiese Dokumentation richtet sich an Entwickler und Integratoren, die die Smart Village App nutzen und weiterentwickeln möchten. Die Hauptziele sind:\\n\\n- Bereitstellung detaillierter Informationen zur Nutzung der GraphQL-API.\\n- Unterstützung bei der Integration und Nutzung der API für verschiedene Anwendungen innerhalb des Smart Village App Ökosystems.\\n"},{"title":"Schnellstart","content":"coming soon"},{"title":"Authentifizierung","content":"# Authentifizierung\\n\\nDie Smart Village App Mainserver GraphQL API verwendet **OAuth2** zur Authentifizierung und Autorisierung. Um auf geschützte Endpunkte der API zugreifen zu können, muss ein **Bearer Token** in den Anfragen mitgesendet werden.\\n\\n## Schritte zur Authentifizierung\\n\\n1.  **API-Key und API-Secret erhalten**\\n    Um Zugang zur API zu erhalten, muss durch den Server-Admin ein entsprechender Account erstellt werden. Bei der Erstellung werden auch automatisch ein **API-Key** und ein **API-Secret** erzeugt, die zur Generierung eines Tokens benötigt werden.\\n2.  **Token anfordern**\\n    Verwenden Sie den **API-Key** und das **API-Secret**, um einen Bearer Token über den OAuth2-Token-Endpunkt anzufordern. Dies erfolgt über einen `POST`\\\\-Request an den Token-Endpunkt:\\n\\n    ```\\n    POST /oauth/token\\n    Content-Type: application/x-www-form-urlencoded\\n\\n    grant_type=client_credentials&client_id=YOUR_API_KEY&client_secret=YOUR_API_SECRET\\n    ```\\n\\n    **Beispiel-Antwort**:\\n\\n    ```\\n    {\\n      \\"access_token\\": \\"your_bearer_token\\",\\n      \\"token_type\\": \\"Bearer\\",\\n      \\"expires_in\\": 3600\\n    }\\n    ```\\n\\n    Der `access_token` ist der Bearer Token, der für die nachfolgenden API-Requests verwendet wird.\\n3.  **Token verwenden**\\n    Fügen Sie den erhaltenen **Bearer Token** in den `Authorization`\\\\-Header Ihrer API-Requests ein. Der Header sollte in folgendem Format gesendet werden:\\n\\n    ```\\n    Authorization: Bearer your_bearer_token\\n    ```\\n\\n    Der Token muss bei jeder Anfrage an die API beigefügt werden, um Zugriff auf geschützte Ressourcen zu erhalten.\\n\\n## Token-Gültigkeit und Erneuerung\\n\\n*   Der Bearer Token hat eine begrenzte Gültigkeit, die in der Antwort des Token-Endpunkts (`expires_in`) angegeben ist (i.d.R. ein Tag). Sobald der Token abläuft, müssen Sie einen neuen Token anfordern, indem Sie den OAuth2-Prozess erneut durchlaufen.\\n*   Die API unterstützt aktuell keine Token-Erneuerung (Refresh Token). Sie müssen einen neuen Token anfordern, sobald der alte abgelaufen ist.\\n\\n## Best Practices zur Token-Sicherheit\\n\\n*   Speichern Sie den **API-Key**, das **API-Secret** und den **Bearer Token** niemals in öffentlich zugänglichen Bereichen, wie z. B. in Client-seitigen Anwendungen oder öffentlichen Repositorys.\\n*   Verwenden Sie immer verschlüsselte Verbindungen (HTTPS), um sensible Daten wie den Bearer Token sicher zu übertragen.\\n*   Erneuern Sie Ihren Bearer Token regelmäßig und löschen Sie abgelaufene Tokens.\\n\\n## Fehlerbehandlung\\n\\nWenn die Authentifizierung fehlschlägt, gibt die API einen Fehler mit dem HTTP-Statuscode `401 Unauthorized` zurück. Typische Gründe für einen Fehler könnten sein:\\n\\n*   Ein ungültiger oder abgelaufener Bearer Token.\\n*   Ein fehlender `Authorization`\\\\-Header.\\n\\nÜberprüfen Sie in diesen Fällen die Gültigkeit des Tokens und führen Sie die Authentifizierung erneut durch.\\n"},{"title":"Fehlerbehandlung","content":"# Fehlerbehandlung\\n\\nBei der Nutzung der Smart Village App Mainserver GraphQL API können verschiedene Fehler auftreten, die korrekt behandelt werden müssen, um die Stabilität und Zuverlässigkeit Ihrer Anwendung zu gewährleisten.\\n\\n## Häufige Fehlerarten\\n\\nDie häufigsten Fehlerarten, auf die Sie bei der Verwendung der API stoßen können, sind:\\n\\n### 1. `401 Unauthorized`\\nDieser Fehler tritt auf, wenn die Authentifizierung fehlschlägt. Mögliche Ursachen:\\n- **Ungültiger oder abgelaufener Bearer Token**: Überprüfen Sie, ob der Token noch gültig ist oder erneuern Sie ihn.\\n- **Fehlender `Authorization`-Header**: Stellen Sie sicher, dass der Bearer Token korrekt im Header mitgesendet wird.\\n\\n### 2. `400 Bad Request`\\nDieser Fehler signalisiert, dass die Anfrage ungültig ist. Mögliche Ursachen:\\n- **Syntaxfehler in der Abfrage**: Vergewissern Sie sich, dass die GraphQL-Abfrage korrekt formuliert ist.\\n- **Ungültige oder fehlende Parameter**: Überprüfen Sie, ob alle erforderlichen Parameter vorhanden und korrekt sind.\\n\\n### 3. `403 Forbidden`\\nDieser Fehler tritt auf, wenn der Benutzer nicht die erforderlichen Berechtigungen hat, um auf eine Ressource zuzugreifen. Mögliche Ursachen:\\n- **Unzureichende Rechte**: Stellen Sie sicher, dass der Benutzer oder die Anwendung die erforderlichen Berechtigungen besitzt.\\n\\n### 4. `500 Internal Server Error`\\nDieser Fehler weist auf ein Problem auf der Serverseite hin. Mögliche Ursachen:\\n- **Serverüberlastung**: Der Server ist überlastet oder es gibt ein technisches Problem.\\n- **Fehlerhafte Abfrageverarbeitung**: Es kann ein Problem bei der Verarbeitung der Anfrage auf der Serverseite aufgetreten sein. In diesem Fall sollten Sie die Anfrage später erneut senden.\\n\\n## Best Practices zur Fehlerbehandlung\\n\\nUm Fehler effizient zu behandeln, sollten Sie folgende Best Practices beachten:\\n\\n1. **Implementieren Sie ein robustes Fehlerhandling**:\\n   - Fangen Sie alle Fehler ab und geben Sie dem Nutzer hilfreiche Fehlermeldungen.\\n   - Unterscheiden Sie zwischen Client- und Server-seitigen Fehlern, um entsprechend reagieren zu können.\\n\\n2. **Verwenden Sie Retry-Mechanismen**:\\n   - Implementieren Sie einen Retry-Mechanismus für temporäre Fehler, wie z. B. bei einem `500 Internal Server Error` oder Netzwerkfehlern.\\n\\n3. **Beachten Sie die Rate Limits**:\\n   - Falls in Zukunft Rate Limits eingeführt werden, sollten Sie auf entsprechende Fehlercodes (`429 Too Many Requests`) achten und eine Rückoff-Strategie anwenden.\\n\\n4. **Loggen Sie alle Fehler**:\\n   - Stellen Sie sicher, dass alle Fehler in den Logs erfasst werden, um spätere Debugging-Prozesse zu erleichtern und Probleme besser nachvollziehen zu können.\\n\\n## Fehlercodes und ihre Bedeutung\\n\\nHier eine Übersicht der wichtigsten HTTP-Fehlercodes und ihrer Bedeutung:\\n\\n| Fehlercode  | Bedeutung                         |\\n|-------------|-----------------------------------|\\n| 400         | Bad Request – Ungültige Anfrage    |\\n| 401         | Unauthorized – Authentifizierung fehlgeschlagen |\\n| 403         | Forbidden – Zugriff verweigert    |\\n| 500         | Internal Server Error – Problem auf Serverseite |\\n\\nDurch eine saubere Implementierung von Fehlerbehandlungen stellen Sie sicher, dass Ihre Anwendung auch unter ungünstigen Bedingungen stabil bleibt.\\n"},{"title":"API Limits","content":"# API Limits und Einschränkungen\\n\\nAktuell gibt es **keine festen Limits** für die Nutzung der Smart Village App Mainserver GraphQL API. Jedoch gibt es einige technische Einschränkungen, die bei der Planung und Implementierung berücksichtigt werden sollten.\\n\\n## Technische Einschränkungen\\n\\nAufgrund der begrenzten Serverkapazitäten können zu große Abfragen möglicherweise fehlschlagen. Dies betrifft insbesondere:\\n\\n- **Abfragen mit einer sehr großen Anzahl von Objekten**: Wenn Abfragen eine sehr große Menge an Daten zurückliefern sollen, kann dies zu Zeitüberschreitungen oder Speicherengpässen auf dem Server führen.\\n- **Komplexe verschachtelte Abfragen**: Stark verschachtelte Abfragen, die viele Daten in einer einzigen Abfrage zusammenfassen, können ebenfalls dazu führen, dass die API überlastet wird.\\n\\n### Empfehlungen\\n\\nUm die Serverkapazitäten effizient zu nutzen und potenzielle Fehler durch zu große Abfragen zu vermeiden, empfehlen wir die folgenden Best Practices:\\n\\n- **Pagination verwenden**: Wenn Sie große Datenmengen abfragen, nutzen Sie Pagination, um die Anzahl der zurückgegebenen Ergebnisse zu begrenzen.\\n- **Abfragen aufteilen**: Wenn Sie komplexe Datenstrukturen benötigen, teilen Sie die Abfragen in kleinere, spezifischere Abfragen auf.\\n- **Timeouts und Fehlerhandling**: Implementieren Sie Timeout-Mechanismen und behandeln Sie Fehler in Ihrer Anwendung, um auf fehlschlagende Abfragen reagieren zu können.\\n\\n## Zukünftige Limits\\n\\nEs besteht die Möglichkeit, dass in Zukunft **feste Rate Limits** oder andere Einschränkungen eingeführt werden, um die Stabilität und Sicherheit der API zu gewährleisten. Diese könnten folgende Bereiche betreffen:\\n\\n- **Anzahl der Abfragen pro Minute/Stunde** pro Nutzer oder Anwendung.\\n- **Maximale Größe der Rückgabewerte** bei Abfragen.\\n\\nWir werden Nutzer der API frühzeitig über geplante Änderungen oder neue Limits informieren, damit genügend Zeit zur Anpassung der Anwendungen bleibt.\\n\\nFür aktuelle Informationen zu möglichen Limitierungen und zukünftigen Änderungen besuchen Sie regelmäßig diese Seite oder abonnieren Sie unsere Versionshinweise.\\n"},{"title":"Support","content":"# Support und Hilfe\\n\\nFalls Sie bei der Nutzung der Smart Village App Mainserver GraphQL API auf Probleme stoßen oder Unterstützung benötigen, gibt es verschiedene Möglichkeiten, Hilfe zu erhalten.\\n\\n## GitHub Issues\\n\\nFür technische Probleme oder Feature-Anfragen öffnen Sie bitte ein Issue auf unserem GitHub-Repository:\\n\\n**[Smart Village App Mainserver GitHub Issues](https://github.com/smart-village-solutions/smart-village-app-mainserver/issues)**\\n\\nBitte beschreiben Sie das Problem so detailliert wie möglich, um eine schnelle Lösung zu ermöglichen. Achten Sie darauf, die folgenden Informationen in Ihr Issue aufzunehmen:\\n\\n- Eine Beschreibung des Problems oder der gewünschten Funktion.\\n- Schritte zur Reproduktion des Problems, falls zutreffend.\\n- Erwartetes Verhalten und das tatsächlich beobachtete Verhalten.\\n- Versionsinformationen und gegebenenfalls Logs oder Fehlermeldungen.\\n\\n## Allgemeine Anfragen\\n\\nFür allgemeine Fragen oder Diskussionen zur API können Sie uns auch über E-Mail kontaktieren:\\n\\n- **E-Mail**: support@smart-village.solutions\\n"}]',UT='{"I18nJSON":"{\\"de\\":\\"Beispieltext auf Deutsch\\",\\"en\\":\\"Example text in English\\"}","AnyPrimitive":"{\\"intExample\\":42,\\"floatExample\\":3.14,\\"stringExample\\":\\"Beispielstring\\"}","JSON":"{\\"simpleObject\\":{\\"key\\":\\"value\\"},\\"arrayExample\\":[1,2,3],\\"nestedObject\\":{\\"nested\\":{\\"key\\":\\"value\\"}}}"}',GT="true",qd={APP_LOGO:zT,SITE_ROOT:MT,APP_TITLE:$T,PAGES:PT,QUERY_GENERATION_FACTORIES:UT,MAGIDOC_GENERATE:GT};function Ry(r){return r.get(qd)}function Vs(r,n){return r.getOrDefault(qd,n)}function Ws(){return Vs(Gs.SITE_ROOT,xv)}class VT{constructor(n){_e(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var Di;(function(r){r.UNION="union",r.ARGUMENT="argument",r.FIELD="field"})(Di||(Di={}));function de(r,n){if(!!!r)throw new Error(n)}function Ct(r){return typeof r=="object"&&r!==null}function Xn(r,n){if(!!!r)throw new Error(n??"Unexpected invariant triggered.")}const WT=/\r\n|[\n\r]/g;function Na(r,n){let t=0,o=1;for(const s of r.body.matchAll(WT)){if(typeof s.index=="number"||Xn(!1),s.index>=n)break;t=s.index+s[0].length,o+=1}return{line:o,column:n+1-t}}function jT(r){return Zd(r.source,Na(r.source,r.start))}function Zd(r,n){const t=r.locationOffset.column-1,o="".padStart(t)+r.body,s=n.line-1,a=r.locationOffset.line-1,l=n.line+a,d=n.line===1?t:0,f=n.column+d,m=`${r.name}:${l}:${f}
`,D=o.split(/\r\n|[\n\r]/g),v=D[s];if(v.length>120){const k=Math.floor(f/80),A=f%80,F=[];for(let B=0;B<v.length;B+=80)F.push(v.slice(B,B+80));return m+ud([[`${l} |`,F[0]],...F.slice(1,k+1).map(B=>["|",B]),["|","^".padStart(A)],["|",F[k+1]]])}return m+ud([[`${l-1} |`,D[s-1]],[`${l} |`,v],["|","^".padStart(f)],[`${l+1} |`,D[s+1]]])}function ud(r){const n=r.filter(([o,s])=>s!==void 0),t=Math.max(...n.map(([o])=>o.length));return n.map(([o,s])=>o.padStart(t)+(s?" "+s:"")).join(`
`)}function qT(r){const n=r[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:r[1],positions:r[2],path:r[3],originalError:r[4],extensions:r[5]}:n}class R extends Error{constructor(n,...t){var o,s,a;const{nodes:l,source:d,positions:f,path:m,originalError:D,extensions:v}=qT(t);super(n),this.name="GraphQLError",this.path=m??void 0,this.originalError=D??void 0,this.nodes=ld(Array.isArray(l)?l:l?[l]:void 0);const k=ld((o=this.nodes)===null||o===void 0?void 0:o.map(F=>F.loc).filter(F=>F!=null));this.source=d??(k==null||(s=k[0])===null||s===void 0?void 0:s.source),this.positions=f??(k==null?void 0:k.map(F=>F.start)),this.locations=f&&d?f.map(F=>Na(d,F)):k==null?void 0:k.map(F=>Na(F.source,F.start));const A=Ct(D==null?void 0:D.extensions)?D==null?void 0:D.extensions:void 0;this.extensions=(a=v??A)!==null&&a!==void 0?a:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),D!=null&&D.stack?Object.defineProperty(this,"stack",{value:D.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,R):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+jT(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+Zd(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function ld(r){return r===void 0||r.length===0?void 0:r}function Je(r,n,t){return new R(`Syntax Error: ${t}`,{source:r,positions:[n]})}class ZT{constructor(n,t,o){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=o}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Hd{constructor(n,t,o,s,a,l){this.kind=n,this.start=t,this.end=o,this.line=s,this.column=a,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Jd={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},HT=new Set(Object.keys(Jd));function cd(r){const n=r==null?void 0:r.kind;return typeof n=="string"&&HT.has(n)}var $n;(function(r){r.QUERY="query",r.MUTATION="mutation",r.SUBSCRIPTION="subscription"})($n||($n={}));var q;(function(r){r.QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(q||(q={}));var T;(function(r){r.NAME="Name",r.DOCUMENT="Document",r.OPERATION_DEFINITION="OperationDefinition",r.VARIABLE_DEFINITION="VariableDefinition",r.SELECTION_SET="SelectionSet",r.FIELD="Field",r.ARGUMENT="Argument",r.FRAGMENT_SPREAD="FragmentSpread",r.INLINE_FRAGMENT="InlineFragment",r.FRAGMENT_DEFINITION="FragmentDefinition",r.VARIABLE="Variable",r.INT="IntValue",r.FLOAT="FloatValue",r.STRING="StringValue",r.BOOLEAN="BooleanValue",r.NULL="NullValue",r.ENUM="EnumValue",r.LIST="ListValue",r.OBJECT="ObjectValue",r.OBJECT_FIELD="ObjectField",r.DIRECTIVE="Directive",r.NAMED_TYPE="NamedType",r.LIST_TYPE="ListType",r.NON_NULL_TYPE="NonNullType",r.SCHEMA_DEFINITION="SchemaDefinition",r.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",r.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",r.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",r.FIELD_DEFINITION="FieldDefinition",r.INPUT_VALUE_DEFINITION="InputValueDefinition",r.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",r.UNION_TYPE_DEFINITION="UnionTypeDefinition",r.ENUM_TYPE_DEFINITION="EnumTypeDefinition",r.ENUM_VALUE_DEFINITION="EnumValueDefinition",r.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",r.DIRECTIVE_DEFINITION="DirectiveDefinition",r.SCHEMA_EXTENSION="SchemaExtension",r.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",r.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",r.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",r.UNION_TYPE_EXTENSION="UnionTypeExtension",r.ENUM_TYPE_EXTENSION="EnumTypeExtension",r.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(T||(T={}));function ka(r){return r===9||r===32}function _i(r){return r>=48&&r<=57}function Kd(r){return r>=97&&r<=122||r>=65&&r<=90}function Ka(r){return Kd(r)||r===95}function Yd(r){return Kd(r)||_i(r)||r===95}function JT(r){var n;let t=Number.MAX_SAFE_INTEGER,o=null,s=-1;for(let l=0;l<r.length;++l){var a;const d=r[l],f=KT(d);f!==d.length&&(o=(a=o)!==null&&a!==void 0?a:l,s=l,l!==0&&f<t&&(t=f))}return r.map((l,d)=>d===0?l:l.slice(t)).slice((n=o)!==null&&n!==void 0?n:0,s+1)}function KT(r){let n=0;for(;n<r.length&&ka(r.charCodeAt(n));)++n;return n}function YT(r,n){const t=r.replace(/"""/g,'\\"""'),o=t.split(/\r\n|[\n\r]/g),s=o.length===1,a=o.length>1&&o.slice(1).every(A=>A.length===0||ka(A.charCodeAt(0))),l=t.endsWith('\\"""'),d=r.endsWith('"')&&!l,f=r.endsWith("\\"),m=d||f,D=!s||r.length>70||m||a||l;let v="";const k=s&&ka(r.charCodeAt(0));return(D&&!k||a)&&(v+=`
`),v+=t,(D||m)&&(v+=`
`),'"""'+v+'"""'}var O;(function(r){r.SOF="<SOF>",r.EOF="<EOF>",r.BANG="!",r.DOLLAR="$",r.AMP="&",r.PAREN_L="(",r.PAREN_R=")",r.SPREAD="...",r.COLON=":",r.EQUALS="=",r.AT="@",r.BRACKET_L="[",r.BRACKET_R="]",r.BRACE_L="{",r.PIPE="|",r.BRACE_R="}",r.NAME="Name",r.INT="Int",r.FLOAT="Float",r.STRING="String",r.BLOCK_STRING="BlockString",r.COMMENT="Comment"})(O||(O={}));class QT{constructor(n){const t=new Hd(O.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==O.EOF)do if(n.next)n=n.next;else{const t=e_(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===O.COMMENT);return n}}function XT(r){return r===O.BANG||r===O.DOLLAR||r===O.AMP||r===O.PAREN_L||r===O.PAREN_R||r===O.SPREAD||r===O.COLON||r===O.EQUALS||r===O.AT||r===O.BRACKET_L||r===O.BRACKET_R||r===O.BRACE_L||r===O.PIPE||r===O.BRACE_R}function $r(r){return r>=0&&r<=55295||r>=57344&&r<=1114111}function js(r,n){return Qd(r.charCodeAt(n))&&Xd(r.charCodeAt(n+1))}function Qd(r){return r>=55296&&r<=56319}function Xd(r){return r>=56320&&r<=57343}function hr(r,n){const t=r.source.body.codePointAt(n);if(t===void 0)return O.EOF;if(t>=32&&t<=126){const o=String.fromCodePoint(t);return o==='"'?`'"'`:`"${o}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Ve(r,n,t,o,s){const a=r.line,l=1+t-r.lineStart;return new Hd(n,t,o,a,l,s)}function e_(r,n){const t=r.source.body,o=t.length;let s=n;for(;s<o;){const a=t.charCodeAt(s);switch(a){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++r.line,r.lineStart=s;continue;case 13:t.charCodeAt(s+1)===10?s+=2:++s,++r.line,r.lineStart=s;continue;case 35:return n_(r,s);case 33:return Ve(r,O.BANG,s,s+1);case 36:return Ve(r,O.DOLLAR,s,s+1);case 38:return Ve(r,O.AMP,s,s+1);case 40:return Ve(r,O.PAREN_L,s,s+1);case 41:return Ve(r,O.PAREN_R,s,s+1);case 46:if(t.charCodeAt(s+1)===46&&t.charCodeAt(s+2)===46)return Ve(r,O.SPREAD,s,s+3);break;case 58:return Ve(r,O.COLON,s,s+1);case 61:return Ve(r,O.EQUALS,s,s+1);case 64:return Ve(r,O.AT,s,s+1);case 91:return Ve(r,O.BRACKET_L,s,s+1);case 93:return Ve(r,O.BRACKET_R,s,s+1);case 123:return Ve(r,O.BRACE_L,s,s+1);case 124:return Ve(r,O.PIPE,s,s+1);case 125:return Ve(r,O.BRACE_R,s,s+1);case 34:return t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34?a_(r,s):r_(r,s)}if(_i(a)||a===45)return t_(r,s,a);if(Ka(a))return u_(r,s);throw Je(r.source,s,a===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:$r(a)||js(t,s)?`Unexpected character: ${hr(r,s)}.`:`Invalid character: ${hr(r,s)}.`)}return Ve(r,O.EOF,o,o)}function n_(r,n){const t=r.source.body,o=t.length;let s=n+1;for(;s<o;){const a=t.charCodeAt(s);if(a===10||a===13)break;if($r(a))++s;else if(js(t,s))s+=2;else break}return Ve(r,O.COMMENT,n,s,t.slice(n+1,s))}function t_(r,n,t){const o=r.source.body;let s=n,a=t,l=!1;if(a===45&&(a=o.charCodeAt(++s)),a===48){if(a=o.charCodeAt(++s),_i(a))throw Je(r.source,s,`Invalid number, unexpected digit after 0: ${hr(r,s)}.`)}else s=Ta(r,s,a),a=o.charCodeAt(s);if(a===46&&(l=!0,a=o.charCodeAt(++s),s=Ta(r,s,a),a=o.charCodeAt(s)),(a===69||a===101)&&(l=!0,a=o.charCodeAt(++s),(a===43||a===45)&&(a=o.charCodeAt(++s)),s=Ta(r,s,a),a=o.charCodeAt(s)),a===46||Ka(a))throw Je(r.source,s,`Invalid number, expected digit but got: ${hr(r,s)}.`);return Ve(r,l?O.FLOAT:O.INT,n,s,o.slice(n,s))}function Ta(r,n,t){if(!_i(t))throw Je(r.source,n,`Invalid number, expected digit but got: ${hr(r,n)}.`);const o=r.source.body;let s=n+1;for(;_i(o.charCodeAt(s));)++s;return s}function r_(r,n){const t=r.source.body,o=t.length;let s=n+1,a=s,l="";for(;s<o;){const d=t.charCodeAt(s);if(d===34)return l+=t.slice(a,s),Ve(r,O.STRING,n,s+1,l);if(d===92){l+=t.slice(a,s);const f=t.charCodeAt(s+1)===117?t.charCodeAt(s+2)===123?i_(r,s):s_(r,s):o_(r,s);l+=f.value,s+=f.size,a=s;continue}if(d===10||d===13)break;if($r(d))++s;else if(js(t,s))s+=2;else throw Je(r.source,s,`Invalid character within String: ${hr(r,s)}.`)}throw Je(r.source,s,"Unterminated string.")}function i_(r,n){const t=r.source.body;let o=0,s=3;for(;s<12;){const a=t.charCodeAt(n+s++);if(a===125){if(s<5||!$r(o))break;return{value:String.fromCodePoint(o),size:s}}if(o=o<<4|fi(a),o<0)break}throw Je(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+s)}".`)}function s_(r,n){const t=r.source.body,o=dd(t,n+2);if($r(o))return{value:String.fromCodePoint(o),size:6};if(Qd(o)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const s=dd(t,n+8);if(Xd(s))return{value:String.fromCodePoint(o,s),size:12}}throw Je(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function dd(r,n){return fi(r.charCodeAt(n))<<12|fi(r.charCodeAt(n+1))<<8|fi(r.charCodeAt(n+2))<<4|fi(r.charCodeAt(n+3))}function fi(r){return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:-1}function o_(r,n){const t=r.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Je(r.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function a_(r,n){const t=r.source.body,o=t.length;let s=r.lineStart,a=n+3,l=a,d="";const f=[];for(;a<o;){const m=t.charCodeAt(a);if(m===34&&t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34){d+=t.slice(l,a),f.push(d);const D=Ve(r,O.BLOCK_STRING,n,a+3,JT(f).join(`
`));return r.line+=f.length-1,r.lineStart=s,D}if(m===92&&t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34&&t.charCodeAt(a+3)===34){d+=t.slice(l,a),l=a+1,a+=4;continue}if(m===10||m===13){d+=t.slice(l,a),f.push(d),m===13&&t.charCodeAt(a+1)===10?a+=2:++a,d="",l=a,s=a;continue}if($r(m))++a;else if(js(t,a))a+=2;else throw Je(r.source,a,`Invalid character within String: ${hr(r,a)}.`)}throw Je(r.source,a,"Unterminated string.")}function u_(r,n){const t=r.source.body,o=t.length;let s=n+1;for(;s<o;){const a=t.charCodeAt(s);if(Yd(a))++s;else break}return Ve(r,O.NAME,n,s,t.slice(n,s))}const l_=10,ef=2;function $(r){return qs(r,[])}function qs(r,n){switch(typeof r){case"string":return JSON.stringify(r);case"function":return r.name?`[function ${r.name}]`:"[function]";case"object":return c_(r,n);default:return String(r)}}function c_(r,n){if(r===null)return"null";if(n.includes(r))return"[Circular]";const t=[...n,r];if(d_(r)){const o=r.toJSON();if(o!==r)return typeof o=="string"?o:qs(o,t)}else if(Array.isArray(r))return h_(r,t);return f_(r,t)}function d_(r){return typeof r.toJSON=="function"}function f_(r,n){const t=Object.entries(r);return t.length===0?"{}":n.length>ef?"["+p_(r)+"]":"{ "+t.map(([s,a])=>s+": "+qs(a,n)).join(", ")+" }"}function h_(r,n){if(r.length===0)return"[]";if(n.length>ef)return"[Array]";const t=Math.min(l_,r.length),o=r.length-t,s=[];for(let a=0;a<t;++a)s.push(qs(r[a],n));return o===1?s.push("... 1 more item"):o>1&&s.push(`... ${o} more items`),"["+s.join(", ")+"]"}function p_(r){const n=Object.prototype.toString.call(r).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof r.constructor=="function"){const t=r.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const g_=globalThis.process&&!0,pt=g_?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var o;const s=t.prototype[Symbol.toStringTag],a=Symbol.toStringTag in n?n[Symbol.toStringTag]:(o=n.constructor)===null||o===void 0?void 0:o.name;if(s===a){const l=$(n);throw new Error(`Cannot use ${s} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class nf{constructor(n,t="GraphQL request",o={line:1,column:1}){typeof n=="string"||de(!1,`Body must be a string. Received: ${$(n)}.`),this.body=n,this.name=t,this.locationOffset=o,this.locationOffset.line>0||de(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||de(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function m_(r){return pt(r,nf)}function D_(r,n){return new tf(r,n).parseDocument()}function E_(r,n){const t=new tf(r,n);t.expectToken(O.SOF);const o=t.parseValueLiteral(!1);return t.expectToken(O.EOF),o}class tf{constructor(n,t={}){const o=m_(n)?n:new nf(n);this._lexer=new QT(o),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(O.NAME);return this.node(n,{kind:T.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:T.DOCUMENT,definitions:this.many(O.SOF,this.parseDefinition,O.EOF)})}parseDefinition(){if(this.peek(O.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===O.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Je(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(O.BRACE_L))return this.node(n,{kind:T.OPERATION_DEFINITION,operation:$n.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let o;return this.peek(O.NAME)&&(o=this.parseName()),this.node(n,{kind:T.OPERATION_DEFINITION,operation:t,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(O.NAME);switch(n.value){case"query":return $n.QUERY;case"mutation":return $n.MUTATION;case"subscription":return $n.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(O.PAREN_L,this.parseVariableDefinition,O.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:T.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(O.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(O.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(O.DOLLAR),this.node(n,{kind:T.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:T.SELECTION_SET,selections:this.many(O.BRACE_L,this.parseSelection,O.BRACE_R)})}parseSelection(){return this.peek(O.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let o,s;return this.expectOptionalToken(O.COLON)?(o=t,s=this.parseName()):s=t,this.node(n,{kind:T.FIELD,alias:o,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(O.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(O.PAREN_L,t,O.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,o=this.parseName();return this.expectToken(O.COLON),this.node(t,{kind:T.ARGUMENT,name:o,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(O.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(O.NAME)?this.node(n,{kind:T.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:T.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:T.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:T.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case O.BRACKET_L:return this.parseList(n);case O.BRACE_L:return this.parseObject(n);case O.INT:return this.advanceLexer(),this.node(t,{kind:T.INT,value:t.value});case O.FLOAT:return this.advanceLexer(),this.node(t,{kind:T.FLOAT,value:t.value});case O.STRING:case O.BLOCK_STRING:return this.parseStringLiteral();case O.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:T.BOOLEAN,value:!0});case"false":return this.node(t,{kind:T.BOOLEAN,value:!1});case"null":return this.node(t,{kind:T.NULL});default:return this.node(t,{kind:T.ENUM,value:t.value})}case O.DOLLAR:if(n)if(this.expectToken(O.DOLLAR),this._lexer.token.kind===O.NAME){const o=this._lexer.token.value;throw Je(this._lexer.source,t.start,`Unexpected variable "$${o}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:T.STRING,value:n.value,block:n.kind===O.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:T.LIST,values:this.any(O.BRACKET_L,t,O.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:T.OBJECT,fields:this.any(O.BRACE_L,t,O.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,o=this.parseName();return this.expectToken(O.COLON),this.node(t,{kind:T.OBJECT_FIELD,name:o,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(O.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(O.AT),this.node(t,{kind:T.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(O.BRACKET_L)){const o=this.parseTypeReference();this.expectToken(O.BRACKET_R),t=this.node(n,{kind:T.LIST_TYPE,type:o})}else t=this.parseNamedType();return this.expectOptionalToken(O.BANG)?this.node(n,{kind:T.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:T.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(O.STRING)||this.peek(O.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const o=this.parseConstDirectives(),s=this.many(O.BRACE_L,this.parseOperationTypeDefinition,O.BRACE_R);return this.node(n,{kind:T.SCHEMA_DEFINITION,description:t,directives:o,operationTypes:s})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(O.COLON);const o=this.parseNamedType();return this.node(n,{kind:T.OPERATION_TYPE_DEFINITION,operation:t,type:o})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const o=this.parseName(),s=this.parseConstDirectives();return this.node(n,{kind:T.SCALAR_TYPE_DEFINITION,description:t,name:o,directives:s})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const o=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:T.OBJECT_TYPE_DEFINITION,description:t,name:o,interfaces:s,directives:a,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(O.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(O.BRACE_L,this.parseFieldDefinition,O.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),o=this.parseName(),s=this.parseArgumentDefs();this.expectToken(O.COLON);const a=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(n,{kind:T.FIELD_DEFINITION,description:t,name:o,arguments:s,type:a,directives:l})}parseArgumentDefs(){return this.optionalMany(O.PAREN_L,this.parseInputValueDef,O.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),o=this.parseName();this.expectToken(O.COLON);const s=this.parseTypeReference();let a;this.expectOptionalToken(O.EQUALS)&&(a=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(n,{kind:T.INPUT_VALUE_DEFINITION,description:t,name:o,type:s,defaultValue:a,directives:l})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const o=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:T.INTERFACE_TYPE_DEFINITION,description:t,name:o,interfaces:s,directives:a,fields:l})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const o=this.parseName(),s=this.parseConstDirectives(),a=this.parseUnionMemberTypes();return this.node(n,{kind:T.UNION_TYPE_DEFINITION,description:t,name:o,directives:s,types:a})}parseUnionMemberTypes(){return this.expectOptionalToken(O.EQUALS)?this.delimitedMany(O.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const o=this.parseName(),s=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();return this.node(n,{kind:T.ENUM_TYPE_DEFINITION,description:t,name:o,directives:s,values:a})}parseEnumValuesDefinition(){return this.optionalMany(O.BRACE_L,this.parseEnumValueDefinition,O.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),o=this.parseEnumValueName(),s=this.parseConstDirectives();return this.node(n,{kind:T.ENUM_VALUE_DEFINITION,description:t,name:o,directives:s})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Je(this._lexer.source,this._lexer.token.start,`${ys(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const o=this.parseName(),s=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();return this.node(n,{kind:T.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:o,directives:s,fields:a})}parseInputFieldsDefinition(){return this.optionalMany(O.BRACE_L,this.parseInputValueDef,O.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===O.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),o=this.optionalMany(O.BRACE_L,this.parseOperationTypeDefinition,O.BRACE_R);if(t.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:T.SCHEMA_EXTENSION,directives:t,operationTypes:o})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),o=this.parseConstDirectives();if(o.length===0)throw this.unexpected();return this.node(n,{kind:T.SCALAR_TYPE_EXTENSION,name:t,directives:o})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),o=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(o.length===0&&s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:T.OBJECT_TYPE_EXTENSION,name:t,interfaces:o,directives:s,fields:a})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),o=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(o.length===0&&s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:T.INTERFACE_TYPE_EXTENSION,name:t,interfaces:o,directives:s,fields:a})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),o=this.parseConstDirectives(),s=this.parseUnionMemberTypes();if(o.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:T.UNION_TYPE_EXTENSION,name:t,directives:o,types:s})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),o=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();if(o.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:T.ENUM_TYPE_EXTENSION,name:t,directives:o,values:s})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),o=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();if(o.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:T.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:o,fields:s})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(O.AT);const o=this.parseName(),s=this.parseArgumentDefs(),a=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(n,{kind:T.DIRECTIVE_DEFINITION,description:t,name:o,arguments:s,repeatable:a,locations:l})}parseDirectiveLocations(){return this.delimitedMany(O.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(q,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new ZT(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Je(this._lexer.source,t.start,`Expected ${rf(n)}, found ${ys(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===O.NAME&&t.value===n)this.advanceLexer();else throw Je(this._lexer.source,t.start,`Expected "${n}", found ${ys(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===O.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Je(this._lexer.source,t.start,`Unexpected ${ys(t)}.`)}any(n,t,o){this.expectToken(n);const s=[];for(;!this.expectOptionalToken(o);)s.push(t.call(this));return s}optionalMany(n,t,o){if(this.expectOptionalToken(n)){const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(o));return s}return[]}many(n,t,o){this.expectToken(n);const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(o));return s}delimitedMany(n,t){this.expectOptionalToken(n);const o=[];do o.push(t.call(this));while(this.expectOptionalToken(n));return o}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==O.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Je(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function ys(r){const n=r.value;return rf(r.kind)+(n!=null?` "${n}"`:"")}function rf(r){return XT(r)?`"${r}"`:r}const v_=5;function Kt(r,n){const[t,o]=n?[r,n]:[void 0,r];let s=" Did you mean ";t&&(s+=t+" ");const a=o.map(f=>`"${f}"`);switch(a.length){case 0:return"";case 1:return s+a[0]+"?";case 2:return s+a[0]+" or "+a[1]+"?"}const l=a.slice(0,v_),d=l.pop();return s+l.join(", ")+", or "+d+"?"}function fd(r){return r}function pr(r,n){const t=Object.create(null);for(const o of r)t[n(o)]=o;return t}function cr(r,n,t){const o=Object.create(null);for(const s of r)o[n(s)]=t(s);return o}function St(r,n){const t=Object.create(null);for(const o of Object.keys(r))t[o]=n(r[o],o);return t}function Ya(r,n){let t=0,o=0;for(;t<r.length&&o<n.length;){let s=r.charCodeAt(t),a=n.charCodeAt(o);if(As(s)&&As(a)){let l=0;do++t,l=l*10+s-Ca,s=r.charCodeAt(t);while(As(s)&&l>0);let d=0;do++o,d=d*10+a-Ca,a=n.charCodeAt(o);while(As(a)&&d>0);if(l<d)return-1;if(l>d)return 1}else{if(s<a)return-1;if(s>a)return 1;++t,++o}}return r.length-n.length}const Ca=48,b_=57;function As(r){return!isNaN(r)&&Ca<=r&&r<=b_}function Er(r,n){const t=Object.create(null),o=new T_(r),s=Math.floor(r.length*.4)+1;for(const a of n){const l=o.measure(a,s);l!==void 0&&(t[a]=l)}return Object.keys(t).sort((a,l)=>{const d=t[a]-t[l];return d!==0?d:Ya(a,l)})}class T_{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=hd(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const o=n.toLowerCase();if(this._inputLowerCase===o)return 1;let s=hd(o),a=this._inputArray;if(s.length<a.length){const D=s;s=a,a=D}const l=s.length,d=a.length;if(l-d>t)return;const f=this._rows;for(let D=0;D<=d;D++)f[0][D]=D;for(let D=1;D<=l;D++){const v=f[(D-1)%3],k=f[D%3];let A=k[0]=D;for(let F=1;F<=d;F++){const B=s[D-1]===a[F-1]?0:1;let j=Math.min(v[F]+1,k[F-1]+1,v[F-1]+B);if(D>1&&F>1&&s[D-1]===a[F-2]&&s[D-2]===a[F-1]){const ce=f[(D-2)%3][F-2];j=Math.min(j,ce+1)}j<A&&(A=j),k[F]=j}if(A>t)return}const m=f[l%3][d];return m<=t?m:void 0}}function hd(r){const n=r.length,t=new Array(n);for(let o=0;o<n;++o)t[o]=r.charCodeAt(o);return t}function Un(r){if(r==null)return Object.create(null);if(Object.getPrototypeOf(r)===null)return r;const n=Object.create(null);for(const[t,o]of Object.entries(r))n[t]=o;return n}function __(r){return`"${r.replace(I_,y_)}"`}const I_=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function y_(r){return A_[r.charCodeAt(0)]}const A_=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],hi=Object.freeze({});function sf(r,n,t=Jd){const o=new Map;for(const ce of Object.values(T))o.set(ce,of(n,ce));let s,a=Array.isArray(r),l=[r],d=-1,f=[],m=r,D,v;const k=[],A=[];do{d++;const ce=d===l.length,Se=ce&&f.length!==0;if(ce){if(D=A.length===0?void 0:k[k.length-1],m=v,v=A.pop(),Se)if(a){m=m.slice();let ke=0;for(const[Le,on]of f){const en=Le-ke;on===null?(m.splice(en,1),ke++):m[en]=on}}else{m=Object.defineProperties({},Object.getOwnPropertyDescriptors(m));for(const[ke,Le]of f)m[ke]=Le}d=s.index,l=s.keys,f=s.edits,a=s.inArray,s=s.prev}else if(v){if(D=a?d:l[d],m=v[D],m==null)continue;k.push(D)}let me;if(!Array.isArray(m)){var F,B;cd(m)||de(!1,`Invalid AST Node: ${$(m)}.`);const ke=ce?(F=o.get(m.kind))===null||F===void 0?void 0:F.leave:(B=o.get(m.kind))===null||B===void 0?void 0:B.enter;if(me=ke==null?void 0:ke.call(n,m,D,v,k,A),me===hi)break;if(me===!1){if(!ce){k.pop();continue}}else if(me!==void 0&&(f.push([D,me]),!ce))if(cd(me))m=me;else{k.pop();continue}}if(me===void 0&&Se&&f.push([D,m]),ce)k.pop();else{var j;s={inArray:a,index:d,keys:l,edits:f,prev:s},a=Array.isArray(m),l=a?m:(j=t[m.kind])!==null&&j!==void 0?j:[],d=-1,f=[],v&&A.push(v),v=m}}while(s!==void 0);return f.length!==0?f[f.length-1][1]:r}function S_(r){const n=new Array(r.length).fill(null),t=Object.create(null);for(const o of Object.values(T)){let s=!1;const a=new Array(r.length).fill(void 0),l=new Array(r.length).fill(void 0);for(let f=0;f<r.length;++f){const{enter:m,leave:D}=of(r[f],o);s||(s=m!=null||D!=null),a[f]=m,l[f]=D}if(!s)continue;const d={enter(...f){const m=f[0];for(let v=0;v<r.length;v++)if(n[v]===null){var D;const k=(D=a[v])===null||D===void 0?void 0:D.apply(r[v],f);if(k===!1)n[v]=m;else if(k===hi)n[v]=hi;else if(k!==void 0)return k}},leave(...f){const m=f[0];for(let v=0;v<r.length;v++)if(n[v]===null){var D;const k=(D=l[v])===null||D===void 0?void 0:D.apply(r[v],f);if(k===hi)n[v]=hi;else if(k!==void 0&&k!==!1)return k}else n[v]===m&&(n[v]=null)}};t[o]=d}return t}function of(r,n){const t=r[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:r.enter,leave:r.leave}}function Ke(r){return sf(r,F_)}const w_=80,F_={Name:{leave:r=>r.value},Variable:{leave:r=>"$"+r.name},Document:{leave:r=>V(r.definitions,`

`)},OperationDefinition:{leave(r){const n=ue("(",V(r.variableDefinitions,", "),")"),t=V([r.operation,V([r.name,n]),V(r.directives," ")]," ");return(t==="query"?"":t+" ")+r.selectionSet}},VariableDefinition:{leave:({variable:r,type:n,defaultValue:t,directives:o})=>r+": "+n+ue(" = ",t)+ue(" ",V(o," "))},SelectionSet:{leave:({selections:r})=>Jn(r)},Field:{leave({alias:r,name:n,arguments:t,directives:o,selectionSet:s}){const a=ue("",r,": ")+n;let l=a+ue("(",V(t,", "),")");return l.length>w_&&(l=a+ue(`(
`,Fs(V(t,`
`)),`
)`)),V([l,V(o," "),s]," ")}},Argument:{leave:({name:r,value:n})=>r+": "+n},FragmentSpread:{leave:({name:r,directives:n})=>"..."+r+ue(" ",V(n," "))},InlineFragment:{leave:({typeCondition:r,directives:n,selectionSet:t})=>V(["...",ue("on ",r),V(n," "),t]," ")},FragmentDefinition:{leave:({name:r,typeCondition:n,variableDefinitions:t,directives:o,selectionSet:s})=>`fragment ${r}${ue("(",V(t,", "),")")} on ${n} ${ue("",V(o," ")," ")}`+s},IntValue:{leave:({value:r})=>r},FloatValue:{leave:({value:r})=>r},StringValue:{leave:({value:r,block:n})=>n?YT(r):__(r)},BooleanValue:{leave:({value:r})=>r?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:r})=>r},ListValue:{leave:({values:r})=>"["+V(r,", ")+"]"},ObjectValue:{leave:({fields:r})=>"{"+V(r,", ")+"}"},ObjectField:{leave:({name:r,value:n})=>r+": "+n},Directive:{leave:({name:r,arguments:n})=>"@"+r+ue("(",V(n,", "),")")},NamedType:{leave:({name:r})=>r},ListType:{leave:({type:r})=>"["+r+"]"},NonNullType:{leave:({type:r})=>r+"!"},SchemaDefinition:{leave:({description:r,directives:n,operationTypes:t})=>ue("",r,`
`)+V(["schema",V(n," "),Jn(t)]," ")},OperationTypeDefinition:{leave:({operation:r,type:n})=>r+": "+n},ScalarTypeDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+V(["scalar",n,V(t," ")]," ")},ObjectTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:o,fields:s})=>ue("",r,`
`)+V(["type",n,ue("implements ",V(t," & ")),V(o," "),Jn(s)]," ")},FieldDefinition:{leave:({description:r,name:n,arguments:t,type:o,directives:s})=>ue("",r,`
`)+n+(pd(t)?ue(`(
`,Fs(V(t,`
`)),`
)`):ue("(",V(t,", "),")"))+": "+o+ue(" ",V(s," "))},InputValueDefinition:{leave:({description:r,name:n,type:t,defaultValue:o,directives:s})=>ue("",r,`
`)+V([n+": "+t,ue("= ",o),V(s," ")]," ")},InterfaceTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:o,fields:s})=>ue("",r,`
`)+V(["interface",n,ue("implements ",V(t," & ")),V(o," "),Jn(s)]," ")},UnionTypeDefinition:{leave:({description:r,name:n,directives:t,types:o})=>ue("",r,`
`)+V(["union",n,V(t," "),ue("= ",V(o," | "))]," ")},EnumTypeDefinition:{leave:({description:r,name:n,directives:t,values:o})=>ue("",r,`
`)+V(["enum",n,V(t," "),Jn(o)]," ")},EnumValueDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+V([n,V(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:r,name:n,directives:t,fields:o})=>ue("",r,`
`)+V(["input",n,V(t," "),Jn(o)]," ")},DirectiveDefinition:{leave:({description:r,name:n,arguments:t,repeatable:o,locations:s})=>ue("",r,`
`)+"directive @"+n+(pd(t)?ue(`(
`,Fs(V(t,`
`)),`
)`):ue("(",V(t,", "),")"))+(o?" repeatable":"")+" on "+V(s," | ")},SchemaExtension:{leave:({directives:r,operationTypes:n})=>V(["extend schema",V(r," "),Jn(n)]," ")},ScalarTypeExtension:{leave:({name:r,directives:n})=>V(["extend scalar",r,V(n," ")]," ")},ObjectTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:o})=>V(["extend type",r,ue("implements ",V(n," & ")),V(t," "),Jn(o)]," ")},InterfaceTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:o})=>V(["extend interface",r,ue("implements ",V(n," & ")),V(t," "),Jn(o)]," ")},UnionTypeExtension:{leave:({name:r,directives:n,types:t})=>V(["extend union",r,V(n," "),ue("= ",V(t," | "))]," ")},EnumTypeExtension:{leave:({name:r,directives:n,values:t})=>V(["extend enum",r,V(n," "),Jn(t)]," ")},InputObjectTypeExtension:{leave:({name:r,directives:n,fields:t})=>V(["extend input",r,V(n," "),Jn(t)]," ")}};function V(r,n=""){var t;return(t=r==null?void 0:r.filter(o=>o).join(n))!==null&&t!==void 0?t:""}function Jn(r){return ue(`{
`,Fs(V(r,`
`)),`
}`)}function ue(r,n,t=""){return n!=null&&n!==""?r+n+t:""}function Fs(r){return ue("  ",r.replace(/\n/g,`
  `))}function pd(r){var n;return(n=r==null?void 0:r.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function Oa(r,n){switch(r.kind){case T.NULL:return null;case T.INT:return parseInt(r.value,10);case T.FLOAT:return parseFloat(r.value);case T.STRING:case T.ENUM:case T.BOOLEAN:return r.value;case T.LIST:return r.values.map(t=>Oa(t,n));case T.OBJECT:return cr(r.fields,t=>t.name.value,t=>Oa(t.value,n));case T.VARIABLE:return n==null?void 0:n[r.name.value]}}function st(r){if(r!=null||de(!1,"Must provide name."),typeof r=="string"||de(!1,"Expected name to be a string."),r.length===0)throw new R("Expected name to be a non-empty string.");for(let n=1;n<r.length;++n)if(!Yd(r.charCodeAt(n)))throw new R(`Names must only contain [_a-zA-Z0-9] but "${r}" does not.`);if(!Ka(r.charCodeAt(0)))throw new R(`Names must start with [_a-zA-Z] but "${r}" does not.`);return r}function N_(r){if(r==="true"||r==="false"||r==="null")throw new R(`Enum values cannot be named: ${r}`);return st(r)}function Qa(r){return Yt(r)||je(r)||Ge(r)||Pn(r)||et(r)||En(r)||vn(r)||Ae(r)}function Yt(r){return pt(r,Ot)}function je(r){return pt(r,ft)}function k_(r){if(!je(r))throw new Error(`Expected ${$(r)} to be a GraphQL Object type.`);return r}function Ge(r){return pt(r,Ls)}function C_(r){if(!Ge(r))throw new Error(`Expected ${$(r)} to be a GraphQL Interface type.`);return r}function Pn(r){return pt(r,Rs)}function et(r){return pt(r,Mr)}function En(r){return pt(r,Bs)}function vn(r){return pt(r,dn)}function Ae(r){return pt(r,ie)}function Xa(r){return Yt(r)||et(r)||En(r)||eu(r)&&Xa(r.ofType)}function af(r){return Yt(r)||je(r)||Ge(r)||Pn(r)||et(r)||eu(r)&&af(r.ofType)}function zr(r){return Yt(r)||et(r)}function Ii(r){return je(r)||Ge(r)||Pn(r)}function dr(r){return Ge(r)||Pn(r)}class dn{constructor(n){Qa(n)||de(!1,`Expected ${$(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ie{constructor(n){uf(n)||de(!1,`Expected ${$(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function eu(r){return vn(r)||Ae(r)}function uf(r){return Qa(r)&&!Ae(r)}function O_(r){if(!uf(r))throw new Error(`Expected ${$(r)} to be a GraphQL nullable type.`);return r}function x_(r){if(r)return Ae(r)?r.ofType:r}function By(r){return Yt(r)||je(r)||Ge(r)||Pn(r)||et(r)||En(r)}function gr(r){if(r){let n=r;for(;eu(n);)n=n.ofType;return n}}function lf(r){return typeof r=="function"?r():r}function cf(r){return typeof r=="function"?r():r}class Ot{constructor(n){var t,o,s,a;const l=(t=n.parseValue)!==null&&t!==void 0?t:fd;this.name=st(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(o=n.serialize)!==null&&o!==void 0?o:fd,this.parseValue=l,this.parseLiteral=(s=n.parseLiteral)!==null&&s!==void 0?s:(d,f)=>l(Oa(d,f)),this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(a=n.extensionASTNodes)!==null&&a!==void 0?a:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||de(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${$(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||de(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||de(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ft{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>ff(n),this._interfaces=()=>df(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||de(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${$(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:pf(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function df(r){var n;const t=lf((n=r.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||de(!1,`${r.name} interfaces must be an Array or a function which returns an Array.`),t}function ff(r){const n=cf(r.fields);return Br(n)||de(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),St(n,(t,o)=>{var s;Br(t)||de(!1,`${r.name}.${o} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||de(!1,`${r.name}.${o} field resolver must be a function if provided, but got: ${$(t.resolve)}.`);const a=(s=t.args)!==null&&s!==void 0?s:{};return Br(a)||de(!1,`${r.name}.${o} args must be an object with argument names as keys.`),{name:st(o),description:t.description,type:t.type,args:hf(a),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Un(t.extensions),astNode:t.astNode}})}function hf(r){return Object.entries(r).map(([n,t])=>({name:st(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Un(t.extensions),astNode:t.astNode}))}function Br(r){return Ct(r)&&!Array.isArray(r)}function pf(r){return St(r,n=>({description:n.description,type:n.type,args:gf(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function gf(r){return cr(r,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function mf(r){return Ae(r.type)&&r.defaultValue===void 0}class Ls{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=ff.bind(void 0,n),this._interfaces=df.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||de(!1,`${this.name} must provide "resolveType" as a function, but got: ${$(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:pf(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Rs{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=L_.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||de(!1,`${this.name} must provide "resolveType" as a function, but got: ${$(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function L_(r){const n=lf(r.types);return Array.isArray(n)||de(!1,`Must provide Array of types or a function which returns such an array for Union ${r.name}.`),n}class Mr{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=typeof n.values=="function"?n.values:gd(this.name,n.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=gd(this.name,this._values())),this._values}getValue(n){return this._nameLookup===null&&(this._nameLookup=pr(this.getValues(),t=>t.name)),this._nameLookup[n]}serialize(n){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(o=>[o.value,o])));const t=this._valueLookup.get(n);if(t===void 0)throw new R(`Enum "${this.name}" cannot represent value: ${$(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const o=$(n);throw new R(`Enum "${this.name}" cannot represent non-string value: ${o}.`+Ss(this,o))}const t=this.getValue(n);if(t==null)throw new R(`Value "${n}" does not exist in "${this.name}" enum.`+Ss(this,n));return t.value}parseLiteral(n,t){if(n.kind!==T.ENUM){const s=Ke(n);throw new R(`Enum "${this.name}" cannot represent non-enum value: ${s}.`+Ss(this,s),{nodes:n})}const o=this.getValue(n.value);if(o==null){const s=Ke(n);throw new R(`Value "${s}" does not exist in "${this.name}" enum.`+Ss(this,s),{nodes:n})}return o.value}toConfig(){const n=cr(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Ss(r,n){const t=r.getValues().map(s=>s.name),o=Er(n,t);return Kt("the enum value",o)}function gd(r,n){return Br(n)||de(!1,`${r} values must be an object with value names as keys.`),Object.entries(n).map(([t,o])=>(Br(o)||de(!1,`${r}.${t} must refer to an object with a "value" key representing an internal value but got: ${$(o)}.`),{name:N_(t),description:o.description,value:o.value!==void 0?o.value:t,deprecationReason:o.deprecationReason,extensions:Un(o.extensions),astNode:o.astNode}))}class Bs{constructor(n){var t,o;this.name=st(n.name),this.description=n.description,this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this.isOneOf=(o=n.isOneOf)!==null&&o!==void 0?o:!1,this._fields=R_.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=St(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function R_(r){const n=cf(r.fields);return Br(n)||de(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),St(n,(t,o)=>(!("resolve"in t)||de(!1,`${r.name}.${o} field has a resolve property, but Input Types cannot define resolvers.`),{name:st(o),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Un(t.extensions),astNode:t.astNode}))}function B_(r){return Ae(r.type)&&r.defaultValue===void 0}function Ei(r,n,t){return n===t?!0:Ae(t)?Ae(n)?Ei(r,n.ofType,t.ofType):!1:Ae(n)?Ei(r,n.ofType,t):vn(t)?vn(n)?Ei(r,n.ofType,t.ofType):!1:vn(n)?!1:dr(t)&&(Ge(n)||je(n))&&r.isSubType(t,n)}function md(r,n,t){return n===t?!0:dr(n)?dr(t)?r.getPossibleTypes(n).some(o=>r.isSubType(t,o)):r.isSubType(n,t):dr(t)?r.isSubType(t,n):!1}const _a=2147483647,Ia=-2147483648,z_=new Ot({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(r){const n=Fi(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new R(`Int cannot represent non-integer value: ${$(n)}`);if(t>_a||t<Ia)throw new R("Int cannot represent non 32-bit signed integer value: "+$(n));return t},parseValue(r){if(typeof r!="number"||!Number.isInteger(r))throw new R(`Int cannot represent non-integer value: ${$(r)}`);if(r>_a||r<Ia)throw new R(`Int cannot represent non 32-bit signed integer value: ${r}`);return r},parseLiteral(r){if(r.kind!==T.INT)throw new R(`Int cannot represent non-integer value: ${Ke(r)}`,{nodes:r});const n=parseInt(r.value,10);if(n>_a||n<Ia)throw new R(`Int cannot represent non 32-bit signed integer value: ${r.value}`,{nodes:r});return n}}),M_=new Ot({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(r){const n=Fi(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new R(`Float cannot represent non numeric value: ${$(n)}`);return t},parseValue(r){if(typeof r!="number"||!Number.isFinite(r))throw new R(`Float cannot represent non numeric value: ${$(r)}`);return r},parseLiteral(r){if(r.kind!==T.FLOAT&&r.kind!==T.INT)throw new R(`Float cannot represent non numeric value: ${Ke(r)}`,r);return parseFloat(r.value)}}),Ue=new Ot({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(r){const n=Fi(r);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new R(`String cannot represent value: ${$(r)}`)},parseValue(r){if(typeof r!="string")throw new R(`String cannot represent a non string value: ${$(r)}`);return r},parseLiteral(r){if(r.kind!==T.STRING)throw new R(`String cannot represent a non string value: ${Ke(r)}`,{nodes:r});return r.value}}),Fn=new Ot({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(r){const n=Fi(r);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new R(`Boolean cannot represent a non boolean value: ${$(n)}`)},parseValue(r){if(typeof r!="boolean")throw new R(`Boolean cannot represent a non boolean value: ${$(r)}`);return r},parseLiteral(r){if(r.kind!==T.BOOLEAN)throw new R(`Boolean cannot represent a non boolean value: ${Ke(r)}`,{nodes:r});return r.value}}),Df=new Ot({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(r){const n=Fi(r);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new R(`ID cannot represent value: ${$(r)}`)},parseValue(r){if(typeof r=="string")return r;if(typeof r=="number"&&Number.isInteger(r))return r.toString();throw new R(`ID cannot represent value: ${$(r)}`)},parseLiteral(r){if(r.kind!==T.STRING&&r.kind!==T.INT)throw new R("ID cannot represent a non-string and non-integer value: "+Ke(r),{nodes:r});return r.value}}),Zs=Object.freeze([Ue,z_,M_,Fn,Df]);function $_(r){return Zs.some(({name:n})=>r.name===n)}function Fi(r){if(Ct(r)){if(typeof r.valueOf=="function"){const n=r.valueOf();if(!Ct(n))return n}if(typeof r.toJSON=="function")return r.toJSON()}return r}function P_(r){return pt(r,xt)}class xt{constructor(n){var t,o;this.name=st(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Un(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||de(!1,`@${n.name} locations must be an Array.`);const s=(o=n.args)!==null&&o!==void 0?o:{};Ct(s)&&!Array.isArray(s)||de(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=hf(s)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:gf(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const Ef=new xt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[q.FIELD,q.FRAGMENT_SPREAD,q.INLINE_FRAGMENT],args:{if:{type:new ie(Fn),description:"Included when true."}}}),vf=new xt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[q.FIELD,q.FRAGMENT_SPREAD,q.INLINE_FRAGMENT],args:{if:{type:new ie(Fn),description:"Skipped when true."}}}),U_="No longer supported",bf=new xt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[q.FIELD_DEFINITION,q.ARGUMENT_DEFINITION,q.INPUT_FIELD_DEFINITION,q.ENUM_VALUE],args:{reason:{type:Ue,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:U_}}}),Tf=new xt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[q.SCALAR],args:{url:{type:new ie(Ue),description:"The URL that specifies the behavior of this scalar."}}}),_f=new xt({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[q.INPUT_OBJECT],args:{}}),Pr=Object.freeze([Ef,vf,bf,Tf,_f]);function G_(r){return typeof r=="object"&&typeof(r==null?void 0:r[Symbol.iterator])=="function"}function pi(r,n){if(Ae(n)){const t=pi(r,n.ofType);return(t==null?void 0:t.kind)===T.NULL?null:t}if(r===null)return{kind:T.NULL};if(r===void 0)return null;if(vn(n)){const t=n.ofType;if(G_(r)){const o=[];for(const s of r){const a=pi(s,t);a!=null&&o.push(a)}return{kind:T.LIST,values:o}}return pi(r,t)}if(En(n)){if(!Ct(r))return null;const t=[];for(const o of Object.values(n.getFields())){const s=pi(r[o.name],o.type);s&&t.push({kind:T.OBJECT_FIELD,name:{kind:T.NAME,value:o.name},value:s})}return{kind:T.OBJECT,fields:t}}if(zr(n)){const t=n.serialize(r);if(t==null)return null;if(typeof t=="boolean")return{kind:T.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const o=String(t);return Dd.test(o)?{kind:T.INT,value:o}:{kind:T.FLOAT,value:o}}if(typeof t=="string")return et(n)?{kind:T.ENUM,value:t}:n===Df&&Dd.test(t)?{kind:T.INT,value:t}:{kind:T.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${$(t)}.`)}Xn(!1,"Unexpected input type: "+$(n))}const Dd=/^-?(?:0|[1-9][0-9]*)$/,nu=new ft({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ue,resolve:r=>r.description},types:{description:"A list of all types supported by this server.",type:new ie(new dn(new ie(Qn))),resolve(r){return Object.values(r.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ie(Qn),resolve:r=>r.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Qn,resolve:r=>r.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Qn,resolve:r=>r.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ie(new dn(new ie(If))),resolve:r=>r.getDirectives()}})}),If=new ft({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ie(Ue),resolve:r=>r.name},description:{type:Ue,resolve:r=>r.description},isRepeatable:{type:new ie(Fn),resolve:r=>r.isRepeatable},locations:{type:new ie(new dn(new ie(yf))),resolve:r=>r.locations},args:{type:new ie(new dn(new ie(Hs))),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}}})}),yf=new Mr({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:q.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:q.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:q.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:q.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:q.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:q.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:q.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:q.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:q.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:q.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:q.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:q.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:q.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:q.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:q.UNION,description:"Location adjacent to a union definition."},ENUM:{value:q.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:q.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:q.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:q.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Qn=new ft({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ie(wf),resolve(r){if(Yt(r))return Ie.SCALAR;if(je(r))return Ie.OBJECT;if(Ge(r))return Ie.INTERFACE;if(Pn(r))return Ie.UNION;if(et(r))return Ie.ENUM;if(En(r))return Ie.INPUT_OBJECT;if(vn(r))return Ie.LIST;if(Ae(r))return Ie.NON_NULL;Xn(!1,`Unexpected type: "${$(r)}".`)}},name:{type:Ue,resolve:r=>"name"in r?r.name:void 0},description:{type:Ue,resolve:r=>"description"in r?r.description:void 0},specifiedByURL:{type:Ue,resolve:r=>"specifiedByURL"in r?r.specifiedByURL:void 0},fields:{type:new dn(new ie(Af)),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(je(r)||Ge(r)){const t=Object.values(r.getFields());return n?t:t.filter(o=>o.deprecationReason==null)}}},interfaces:{type:new dn(new ie(Qn)),resolve(r){if(je(r)||Ge(r))return r.getInterfaces()}},possibleTypes:{type:new dn(new ie(Qn)),resolve(r,n,t,{schema:o}){if(dr(r))return o.getPossibleTypes(r)}},enumValues:{type:new dn(new ie(Sf)),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(et(r)){const t=r.getValues();return n?t:t.filter(o=>o.deprecationReason==null)}}},inputFields:{type:new dn(new ie(Hs)),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(En(r)){const t=Object.values(r.getFields());return n?t:t.filter(o=>o.deprecationReason==null)}}},ofType:{type:Qn,resolve:r=>"ofType"in r?r.ofType:void 0},isOneOf:{type:Fn,resolve:r=>{if(En(r))return r.isOneOf}}})}),Af=new ft({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ie(Ue),resolve:r=>r.name},description:{type:Ue,resolve:r=>r.description},args:{type:new ie(new dn(new ie(Hs))),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}},type:{type:new ie(Qn),resolve:r=>r.type},isDeprecated:{type:new ie(Fn),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ue,resolve:r=>r.deprecationReason}})}),Hs=new ft({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ie(Ue),resolve:r=>r.name},description:{type:Ue,resolve:r=>r.description},type:{type:new ie(Qn),resolve:r=>r.type},defaultValue:{type:Ue,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(r){const{type:n,defaultValue:t}=r,o=pi(t,n);return o?Ke(o):null}},isDeprecated:{type:new ie(Fn),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ue,resolve:r=>r.deprecationReason}})}),Sf=new ft({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ie(Ue),resolve:r=>r.name},description:{type:Ue,resolve:r=>r.description},isDeprecated:{type:new ie(Fn),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ue,resolve:r=>r.deprecationReason}})});var Ie;(function(r){r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.INPUT_OBJECT="INPUT_OBJECT",r.LIST="LIST",r.NON_NULL="NON_NULL"})(Ie||(Ie={}));const wf=new Mr({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Ie.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Ie.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Ie.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Ie.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Ie.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Ie.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Ie.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Ie.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ie(nu);new ie(Ue);new ie(Ue);const Js=Object.freeze([nu,If,yf,Qn,Af,Hs,Sf,wf]);function V_(r){return Js.some(({name:n})=>r.name===n)}class Ff{constructor(n){var t,o;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ct(n)||de(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||de(!1,`"types" must be Array if provided but got: ${$(n.types)}.`),!n.directives||Array.isArray(n.directives)||de(!1,`"directives" must be Array if provided but got: ${$(n.directives)}.`),this.description=n.description,this.extensions=Un(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(o=n.directives)!==null&&o!==void 0?o:Pr;const s=new Set(n.types);if(n.types!=null)for(const a of n.types)s.delete(a),Kn(a,s);this._queryType!=null&&Kn(this._queryType,s),this._mutationType!=null&&Kn(this._mutationType,s),this._subscriptionType!=null&&Kn(this._subscriptionType,s);for(const a of this._directives)if(P_(a))for(const l of a.args)Kn(l.type,s);Kn(nu,s),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const a of s){if(a==null)continue;const l=a.name;if(l||de(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=a,Ge(a)){for(const d of a.getInterfaces())if(Ge(d)){let f=this._implementationsMap[d.name];f===void 0&&(f=this._implementationsMap[d.name]={objects:[],interfaces:[]}),f.interfaces.push(a)}}else if(je(a)){for(const d of a.getInterfaces())if(Ge(d)){let f=this._implementationsMap[d.name];f===void 0&&(f=this._implementationsMap[d.name]={objects:[],interfaces:[]}),f.objects.push(a)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case $n.QUERY:return this.getQueryType();case $n.MUTATION:return this.getMutationType();case $n.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Pn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let o=this._subTypeMap[n.name];if(o===void 0){if(o=Object.create(null),Pn(n))for(const s of n.getTypes())o[s.name]=!0;else{const s=this.getImplementations(n);for(const a of s.objects)o[a.name]=!0;for(const a of s.interfaces)o[a.name]=!0}this._subTypeMap[n.name]=o}return o[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Kn(r,n){const t=gr(r);if(!n.has(t)){if(n.add(t),Pn(t))for(const o of t.getTypes())Kn(o,n);else if(je(t)||Ge(t)){for(const o of t.getInterfaces())Kn(o,n);for(const o of Object.values(t.getFields())){Kn(o.type,n);for(const s of o.args)Kn(s.type,n)}}else if(En(t))for(const o of Object.values(t.getFields()))Kn(o.type,n)}return n}function ht(r,n){switch(n.kind){case T.LIST_TYPE:{const t=ht(r,n.type);return t&&new dn(t)}case T.NON_NULL_TYPE:{const t=ht(r,n.type);return t&&new ie(t)}case T.NAMED_TYPE:return r.getType(n.name.value)}}function W_(r){return r.kind===T.OPERATION_DEFINITION||r.kind===T.FRAGMENT_DEFINITION}function j_(r){return r.kind===T.SCHEMA_DEFINITION||Ni(r)||r.kind===T.DIRECTIVE_DEFINITION}function Ni(r){return r.kind===T.SCALAR_TYPE_DEFINITION||r.kind===T.OBJECT_TYPE_DEFINITION||r.kind===T.INTERFACE_TYPE_DEFINITION||r.kind===T.UNION_TYPE_DEFINITION||r.kind===T.ENUM_TYPE_DEFINITION||r.kind===T.INPUT_OBJECT_TYPE_DEFINITION}function q_(r){return r.kind===T.SCHEMA_EXTENSION||tu(r)}function tu(r){return r.kind===T.SCALAR_TYPE_EXTENSION||r.kind===T.OBJECT_TYPE_EXTENSION||r.kind===T.INTERFACE_TYPE_EXTENSION||r.kind===T.UNION_TYPE_EXTENSION||r.kind===T.ENUM_TYPE_EXTENSION||r.kind===T.INPUT_OBJECT_TYPE_EXTENSION}function Z_(r){return{Document(n){for(const t of n.definitions)if(!W_(t)){const o=t.kind===T.SCHEMA_DEFINITION||t.kind===T.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';r.reportError(new R(`The ${o} definition is not executable.`,{nodes:t}))}return!1}}}function H_(r){return{Field(n){const t=r.getParentType();if(t&&!r.getFieldDef()){const s=r.getSchema(),a=n.name.value;let l=Kt("to use an inline fragment on",J_(s,t,a));l===""&&(l=Kt(K_(t,a))),r.reportError(new R(`Cannot query field "${a}" on type "${t.name}".`+l,{nodes:n}))}}}}function J_(r,n,t){if(!dr(n))return[];const o=new Set,s=Object.create(null);for(const l of r.getPossibleTypes(n))if(l.getFields()[t]){o.add(l),s[l.name]=1;for(const d of l.getInterfaces()){var a;d.getFields()[t]&&(o.add(d),s[d.name]=((a=s[d.name])!==null&&a!==void 0?a:0)+1)}}return[...o].sort((l,d)=>{const f=s[d.name]-s[l.name];return f!==0?f:Ge(l)&&r.isSubType(l,d)?-1:Ge(d)&&r.isSubType(d,l)?1:Ya(l.name,d.name)}).map(l=>l.name)}function K_(r,n){if(je(r)||Ge(r)){const t=Object.keys(r.getFields());return Er(n,t)}return[]}function Y_(r){return{InlineFragment(n){const t=n.typeCondition;if(t){const o=ht(r.getSchema(),t);if(o&&!Ii(o)){const s=Ke(t);r.reportError(new R(`Fragment cannot condition on non composite type "${s}".`,{nodes:t}))}}},FragmentDefinition(n){const t=ht(r.getSchema(),n.typeCondition);if(t&&!Ii(t)){const o=Ke(n.typeCondition);r.reportError(new R(`Fragment "${n.name.value}" cannot condition on non composite type "${o}".`,{nodes:n.typeCondition}))}}}}function Q_(r){return{...Nf(r),Argument(n){const t=r.getArgument(),o=r.getFieldDef(),s=r.getParentType();if(!t&&o&&s){const a=n.name.value,l=o.args.map(f=>f.name),d=Er(a,l);r.reportError(new R(`Unknown argument "${a}" on field "${s.name}.${o.name}".`+Kt(d),{nodes:n}))}}}}function Nf(r){const n=Object.create(null),t=r.getSchema(),o=t?t.getDirectives():Pr;for(const l of o)n[l.name]=l.args.map(d=>d.name);const s=r.getDocument().definitions;for(const l of s)if(l.kind===T.DIRECTIVE_DEFINITION){var a;const d=(a=l.arguments)!==null&&a!==void 0?a:[];n[l.name.value]=d.map(f=>f.name.value)}return{Directive(l){const d=l.name.value,f=n[d];if(l.arguments&&f)for(const m of l.arguments){const D=m.name.value;if(!f.includes(D)){const v=Er(D,f);r.reportError(new R(`Unknown argument "${D}" on directive "@${d}".`+Kt(v),{nodes:m}))}}return!1}}}function kf(r){const n=Object.create(null),t=r.getSchema(),o=t?t.getDirectives():Pr;for(const a of o)n[a.name]=a.locations;const s=r.getDocument().definitions;for(const a of s)a.kind===T.DIRECTIVE_DEFINITION&&(n[a.name.value]=a.locations.map(l=>l.value));return{Directive(a,l,d,f,m){const D=a.name.value,v=n[D];if(!v){r.reportError(new R(`Unknown directive "@${D}".`,{nodes:a}));return}const k=X_(m);k&&!v.includes(k)&&r.reportError(new R(`Directive "@${D}" may not be used on ${k}.`,{nodes:a}))}}}function X_(r){const n=r[r.length-1];switch("kind"in n||Xn(!1),n.kind){case T.OPERATION_DEFINITION:return eI(n.operation);case T.FIELD:return q.FIELD;case T.FRAGMENT_SPREAD:return q.FRAGMENT_SPREAD;case T.INLINE_FRAGMENT:return q.INLINE_FRAGMENT;case T.FRAGMENT_DEFINITION:return q.FRAGMENT_DEFINITION;case T.VARIABLE_DEFINITION:return q.VARIABLE_DEFINITION;case T.SCHEMA_DEFINITION:case T.SCHEMA_EXTENSION:return q.SCHEMA;case T.SCALAR_TYPE_DEFINITION:case T.SCALAR_TYPE_EXTENSION:return q.SCALAR;case T.OBJECT_TYPE_DEFINITION:case T.OBJECT_TYPE_EXTENSION:return q.OBJECT;case T.FIELD_DEFINITION:return q.FIELD_DEFINITION;case T.INTERFACE_TYPE_DEFINITION:case T.INTERFACE_TYPE_EXTENSION:return q.INTERFACE;case T.UNION_TYPE_DEFINITION:case T.UNION_TYPE_EXTENSION:return q.UNION;case T.ENUM_TYPE_DEFINITION:case T.ENUM_TYPE_EXTENSION:return q.ENUM;case T.ENUM_VALUE_DEFINITION:return q.ENUM_VALUE;case T.INPUT_OBJECT_TYPE_DEFINITION:case T.INPUT_OBJECT_TYPE_EXTENSION:return q.INPUT_OBJECT;case T.INPUT_VALUE_DEFINITION:{const t=r[r.length-3];return"kind"in t||Xn(!1),t.kind===T.INPUT_OBJECT_TYPE_DEFINITION?q.INPUT_FIELD_DEFINITION:q.ARGUMENT_DEFINITION}default:Xn(!1,"Unexpected kind: "+$(n.kind))}}function eI(r){switch(r){case $n.QUERY:return q.QUERY;case $n.MUTATION:return q.MUTATION;case $n.SUBSCRIPTION:return q.SUBSCRIPTION}}function nI(r){return{FragmentSpread(n){const t=n.name.value;r.getFragment(t)||r.reportError(new R(`Unknown fragment "${t}".`,{nodes:n.name}))}}}function Cf(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),o=Object.create(null);for(const a of r.getDocument().definitions)Ni(a)&&(o[a.name.value]=!0);const s=[...Object.keys(t),...Object.keys(o)];return{NamedType(a,l,d,f,m){const D=a.name.value;if(!t[D]&&!o[D]){var v;const k=(v=m[2])!==null&&v!==void 0?v:d,A=k!=null&&tI(k);if(A&&Ed.includes(D))return;const F=Er(D,A?Ed.concat(s):s);r.reportError(new R(`Unknown type "${D}".`+Kt(F),{nodes:a}))}}}}const Ed=[...Zs,...Js].map(r=>r.name);function tI(r){return"kind"in r&&(j_(r)||q_(r))}function rI(r){let n=0;return{Document(t){n=t.definitions.filter(o=>o.kind===T.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&n>1&&r.reportError(new R("This anonymous operation must be the only defined operation.",{nodes:t}))}}}function iI(r){var n,t,o;const s=r.getSchema(),a=(n=(t=(o=s==null?void 0:s.astNode)!==null&&o!==void 0?o:s==null?void 0:s.getQueryType())!==null&&t!==void 0?t:s==null?void 0:s.getMutationType())!==null&&n!==void 0?n:s==null?void 0:s.getSubscriptionType();let l=0;return{SchemaDefinition(d){if(a){r.reportError(new R("Cannot define a new schema within a schema extension.",{nodes:d}));return}l>0&&r.reportError(new R("Must provide only one schema definition.",{nodes:d})),++l}}}const sI=3;function oI(r){function n(t,o=Object.create(null),s=0){if(t.kind===T.FRAGMENT_SPREAD){const a=t.name.value;if(o[a]===!0)return!1;const l=r.getFragment(a);if(!l)return!1;try{return o[a]=!0,n(l,o,s)}finally{o[a]=void 0}}if(t.kind===T.FIELD&&(t.name.value==="fields"||t.name.value==="interfaces"||t.name.value==="possibleTypes"||t.name.value==="inputFields")&&(s++,s>=sI))return!0;if("selectionSet"in t&&t.selectionSet){for(const a of t.selectionSet.selections)if(n(a,o,s))return!0}return!1}return{Field(t){if((t.name.value==="__schema"||t.name.value==="__type")&&n(t))return r.reportError(new R("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}function aI(r){const n=Object.create(null),t=[],o=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(a){return s(a),!1}};function s(a){if(n[a.name.value])return;const l=a.name.value;n[l]=!0;const d=r.getFragmentSpreads(a.selectionSet);if(d.length!==0){o[l]=t.length;for(const f of d){const m=f.name.value,D=o[m];if(t.push(f),D===void 0){const v=r.getFragment(m);v&&s(v)}else{const v=t.slice(D),k=v.slice(0,-1).map(A=>'"'+A.name.value+'"').join(", ");r.reportError(new R(`Cannot spread fragment "${m}" within itself`+(k!==""?` via ${k}.`:"."),{nodes:v}))}t.pop()}o[l]=void 0}}}function uI(r){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const o=r.getRecursiveVariableUsages(t);for(const{node:s}of o){const a=s.name.value;n[a]!==!0&&r.reportError(new R(t.name?`Variable "$${a}" is not defined by operation "${t.name.value}".`:`Variable "$${a}" is not defined.`,{nodes:[s,t]}))}}},VariableDefinition(t){n[t.variable.name.value]=!0}}}function lI(r){const n=[],t=[];return{OperationDefinition(o){return n.push(o),!1},FragmentDefinition(o){return t.push(o),!1},Document:{leave(){const o=Object.create(null);for(const s of n)for(const a of r.getRecursivelyReferencedFragments(s))o[a.name.value]=!0;for(const s of t){const a=s.name.value;o[a]!==!0&&r.reportError(new R(`Fragment "${a}" is never used.`,{nodes:s}))}}}}}function cI(r){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const o=Object.create(null),s=r.getRecursiveVariableUsages(t);for(const{node:a}of s)o[a.name.value]=!0;for(const a of n){const l=a.variable.name.value;o[l]!==!0&&r.reportError(new R(t.name?`Variable "$${l}" is never used in operation "${t.name.value}".`:`Variable "$${l}" is never used.`,{nodes:a}))}}},VariableDefinition(t){n.push(t)}}}function ru(r){switch(r.kind){case T.OBJECT:return{...r,fields:dI(r.fields)};case T.LIST:return{...r,values:r.values.map(ru)};case T.INT:case T.FLOAT:case T.STRING:case T.BOOLEAN:case T.NULL:case T.ENUM:case T.VARIABLE:return r}}function dI(r){return r.map(n=>({...n,value:ru(n.value)})).sort((n,t)=>Ya(n.name.value,t.name.value))}function Of(r){return Array.isArray(r)?r.map(([n,t])=>`subfields "${n}" conflict because `+Of(t)).join(" and "):r}function fI(r){const n=new EI,t=new Map;return{SelectionSet(o){const s=hI(r,t,n,r.getParentType(),o);for(const[[a,l],d,f]of s){const m=Of(l);r.reportError(new R(`Fields "${a}" conflict because ${m}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:d.concat(f)}))}}}}function hI(r,n,t,o,s){const a=[],[l,d]=$s(r,n,o,s);if(gI(r,a,n,t,l),d.length!==0)for(let f=0;f<d.length;f++){zs(r,a,n,t,!1,l,d[f]);for(let m=f+1;m<d.length;m++)Ms(r,a,n,t,!1,d[f],d[m])}return a}function zs(r,n,t,o,s,a,l){const d=r.getFragment(l);if(!d)return;const[f,m]=La(r,t,d);if(a!==f){iu(r,n,t,o,s,a,f);for(const D of m)o.has(D,l,s)||(o.add(D,l,s),zs(r,n,t,o,s,a,D))}}function Ms(r,n,t,o,s,a,l){if(a===l||o.has(a,l,s))return;o.add(a,l,s);const d=r.getFragment(a),f=r.getFragment(l);if(!d||!f)return;const[m,D]=La(r,t,d),[v,k]=La(r,t,f);iu(r,n,t,o,s,m,v);for(const A of k)Ms(r,n,t,o,s,a,A);for(const A of D)Ms(r,n,t,o,s,A,l)}function pI(r,n,t,o,s,a,l,d){const f=[],[m,D]=$s(r,n,s,a),[v,k]=$s(r,n,l,d);iu(r,f,n,t,o,m,v);for(const A of k)zs(r,f,n,t,o,m,A);for(const A of D)zs(r,f,n,t,o,v,A);for(const A of D)for(const F of k)Ms(r,f,n,t,o,A,F);return f}function gI(r,n,t,o,s){for(const[a,l]of Object.entries(s))if(l.length>1)for(let d=0;d<l.length;d++)for(let f=d+1;f<l.length;f++){const m=xf(r,t,o,!1,a,l[d],l[f]);m&&n.push(m)}}function iu(r,n,t,o,s,a,l){for(const[d,f]of Object.entries(a)){const m=l[d];if(m)for(const D of f)for(const v of m){const k=xf(r,t,o,s,d,D,v);k&&n.push(k)}}}function xf(r,n,t,o,s,a,l){const[d,f,m]=a,[D,v,k]=l,A=o||d!==D&&je(d)&&je(D);if(!A){const Se=f.name.value,me=v.name.value;if(Se!==me)return[[s,`"${Se}" and "${me}" are different fields`],[f],[v]];if(!mI(f,v))return[[s,"they have differing arguments"],[f],[v]]}const F=m==null?void 0:m.type,B=k==null?void 0:k.type;if(F&&B&&xa(F,B))return[[s,`they return conflicting types "${$(F)}" and "${$(B)}"`],[f],[v]];const j=f.selectionSet,ce=v.selectionSet;if(j&&ce){const Se=pI(r,n,t,A,gr(F),j,gr(B),ce);return DI(Se,s,f,v)}}function mI(r,n){const t=r.arguments,o=n.arguments;if(t===void 0||t.length===0)return o===void 0||o.length===0;if(o===void 0||o.length===0||t.length!==o.length)return!1;const s=new Map(o.map(({name:a,value:l})=>[a.value,l]));return t.every(a=>{const l=a.value,d=s.get(a.name.value);return d===void 0?!1:vd(l)===vd(d)})}function vd(r){return Ke(ru(r))}function xa(r,n){return vn(r)?vn(n)?xa(r.ofType,n.ofType):!0:vn(n)?!0:Ae(r)?Ae(n)?xa(r.ofType,n.ofType):!0:Ae(n)?!0:zr(r)||zr(n)?r!==n:!1}function $s(r,n,t,o){const s=n.get(o);if(s)return s;const a=Object.create(null),l=Object.create(null);Lf(r,t,o,a,l);const d=[a,Object.keys(l)];return n.set(o,d),d}function La(r,n,t){const o=n.get(t.selectionSet);if(o)return o;const s=ht(r.getSchema(),t.typeCondition);return $s(r,n,s,t.selectionSet)}function Lf(r,n,t,o,s){for(const a of t.selections)switch(a.kind){case T.FIELD:{const l=a.name.value;let d;(je(n)||Ge(n))&&(d=n.getFields()[l]);const f=a.alias?a.alias.value:l;o[f]||(o[f]=[]),o[f].push([n,a,d]);break}case T.FRAGMENT_SPREAD:s[a.name.value]=!0;break;case T.INLINE_FRAGMENT:{const l=a.typeCondition,d=l?ht(r.getSchema(),l):n;Lf(r,d,a.selectionSet,o,s);break}}}function DI(r,n,t,o){if(r.length>0)return[[n,r.map(([s])=>s)],[t,...r.map(([,s])=>s).flat()],[o,...r.map(([,,s])=>s).flat()]]}class EI{constructor(){this._data=new Map}has(n,t,o){var s;const[a,l]=n<t?[n,t]:[t,n],d=(s=this._data.get(a))===null||s===void 0?void 0:s.get(l);return d===void 0?!1:o?!0:o===d}add(n,t,o){const[s,a]=n<t?[n,t]:[t,n],l=this._data.get(s);l===void 0?this._data.set(s,new Map([[a,o]])):l.set(a,o)}}function vI(r){return{InlineFragment(n){const t=r.getType(),o=r.getParentType();if(Ii(t)&&Ii(o)&&!md(r.getSchema(),t,o)){const s=$(o),a=$(t);r.reportError(new R(`Fragment cannot be spread here as objects of type "${s}" can never be of type "${a}".`,{nodes:n}))}},FragmentSpread(n){const t=n.name.value,o=bI(r,t),s=r.getParentType();if(o&&s&&!md(r.getSchema(),o,s)){const a=$(s),l=$(o);r.reportError(new R(`Fragment "${t}" cannot be spread here as objects of type "${a}" can never be of type "${l}".`,{nodes:n}))}}}}function bI(r,n){const t=r.getFragment(n);if(t){const o=ht(r.getSchema(),t.typeCondition);if(Ii(o))return o}}function TI(r){const n=r.getSchema(),t=Object.create(null);for(const s of r.getDocument().definitions)Ni(s)&&(t[s.name.value]=s);return{ScalarTypeExtension:o,ObjectTypeExtension:o,InterfaceTypeExtension:o,UnionTypeExtension:o,EnumTypeExtension:o,InputObjectTypeExtension:o};function o(s){const a=s.name.value,l=t[a],d=n==null?void 0:n.getType(a);let f;if(l?f=_I[l.kind]:d&&(f=II(d)),f){if(f!==s.kind){const m=yI(s.kind);r.reportError(new R(`Cannot extend non-${m} type "${a}".`,{nodes:l?[l,s]:s}))}}else{const m=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),D=Er(a,m);r.reportError(new R(`Cannot extend type "${a}" because it is not defined.`+Kt(D),{nodes:s.name}))}}}const _I={[T.SCALAR_TYPE_DEFINITION]:T.SCALAR_TYPE_EXTENSION,[T.OBJECT_TYPE_DEFINITION]:T.OBJECT_TYPE_EXTENSION,[T.INTERFACE_TYPE_DEFINITION]:T.INTERFACE_TYPE_EXTENSION,[T.UNION_TYPE_DEFINITION]:T.UNION_TYPE_EXTENSION,[T.ENUM_TYPE_DEFINITION]:T.ENUM_TYPE_EXTENSION,[T.INPUT_OBJECT_TYPE_DEFINITION]:T.INPUT_OBJECT_TYPE_EXTENSION};function II(r){if(Yt(r))return T.SCALAR_TYPE_EXTENSION;if(je(r))return T.OBJECT_TYPE_EXTENSION;if(Ge(r))return T.INTERFACE_TYPE_EXTENSION;if(Pn(r))return T.UNION_TYPE_EXTENSION;if(et(r))return T.ENUM_TYPE_EXTENSION;if(En(r))return T.INPUT_OBJECT_TYPE_EXTENSION;Xn(!1,"Unexpected type: "+$(r))}function yI(r){switch(r){case T.SCALAR_TYPE_EXTENSION:return"scalar";case T.OBJECT_TYPE_EXTENSION:return"object";case T.INTERFACE_TYPE_EXTENSION:return"interface";case T.UNION_TYPE_EXTENSION:return"union";case T.ENUM_TYPE_EXTENSION:return"enum";case T.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Xn(!1,"Unexpected kind: "+$(r))}}function AI(r){return{...Rf(r),Field:{leave(n){var t;const o=r.getFieldDef();if(!o)return!1;const s=new Set((t=n.arguments)===null||t===void 0?void 0:t.map(a=>a.name.value));for(const a of o.args)if(!s.has(a.name)&&mf(a)){const l=$(a.type);r.reportError(new R(`Field "${o.name}" argument "${a.name}" of type "${l}" is required, but it was not provided.`,{nodes:n}))}}}}}function Rf(r){var n;const t=Object.create(null),o=r.getSchema(),s=(n=o==null?void 0:o.getDirectives())!==null&&n!==void 0?n:Pr;for(const d of s)t[d.name]=pr(d.args.filter(mf),f=>f.name);const a=r.getDocument().definitions;for(const d of a)if(d.kind===T.DIRECTIVE_DEFINITION){var l;const f=(l=d.arguments)!==null&&l!==void 0?l:[];t[d.name.value]=pr(f.filter(SI),m=>m.name.value)}return{Directive:{leave(d){const f=d.name.value,m=t[f];if(m){var D;const v=(D=d.arguments)!==null&&D!==void 0?D:[],k=new Set(v.map(A=>A.name.value));for(const[A,F]of Object.entries(m))if(!k.has(A)){const B=Qa(F.type)?$(F.type):Ke(F.type);r.reportError(new R(`Directive "@${f}" argument "${A}" of type "${B}" is required, but it was not provided.`,{nodes:d}))}}}}}}function SI(r){return r.type.kind===T.NON_NULL_TYPE&&r.defaultValue==null}function wI(r){return{Field(n){const t=r.getType(),o=n.selectionSet;if(t){if(zr(gr(t))){if(o){const s=n.name.value,a=$(t);r.reportError(new R(`Field "${s}" must not have a selection since type "${a}" has no subfields.`,{nodes:o}))}}else if(!o){const s=n.name.value,a=$(t);r.reportError(new R(`Field "${s}" of type "${a}" must have a selection of subfields. Did you mean "${s} { ... }"?`,{nodes:n}))}}}}}function qt(r,n,t){if(r){if(r.kind===T.VARIABLE){const o=r.name.value;if(t==null||t[o]===void 0)return;const s=t[o];return s===null&&Ae(n)?void 0:s}if(Ae(n))return r.kind===T.NULL?void 0:qt(r,n.ofType,t);if(r.kind===T.NULL)return null;if(vn(n)){const o=n.ofType;if(r.kind===T.LIST){const a=[];for(const l of r.values)if(bd(l,t)){if(Ae(o))return;a.push(null)}else{const d=qt(l,o,t);if(d===void 0)return;a.push(d)}return a}const s=qt(r,o,t);return s===void 0?void 0:[s]}if(En(n)){if(r.kind!==T.OBJECT)return;const o=Object.create(null),s=pr(r.fields,a=>a.name.value);for(const a of Object.values(n.getFields())){const l=s[a.name];if(!l||bd(l.value,t)){if(a.defaultValue!==void 0)o[a.name]=a.defaultValue;else if(Ae(a.type))return;continue}const d=qt(l.value,a.type,t);if(d===void 0)return;o[a.name]=d}if(n.isOneOf){const a=Object.keys(o);if(a.length!==1||o[a[0]]===null)return}return o}if(zr(n)){let o;try{o=n.parseLiteral(r,t)}catch{return}return o===void 0?void 0:o}Xn(!1,"Unexpected input type: "+$(n))}}function bd(r,n){return r.kind===T.VARIABLE&&(n==null||n[r.name.value]===void 0)}function FI(r,n,t){var o;const s={},a=(o=n.arguments)!==null&&o!==void 0?o:[],l=pr(a,d=>d.name.value);for(const d of r.args){const f=d.name,m=d.type,D=l[f];if(!D){if(d.defaultValue!==void 0)s[f]=d.defaultValue;else if(Ae(m))throw new R(`Argument "${f}" of required type "${$(m)}" was not provided.`,{nodes:n});continue}const v=D.value;let k=v.kind===T.NULL;if(v.kind===T.VARIABLE){const F=v.name.value;if(t==null||!NI(t,F)){if(d.defaultValue!==void 0)s[f]=d.defaultValue;else if(Ae(m))throw new R(`Argument "${f}" of required type "${$(m)}" was provided the variable "$${F}" which was not provided a runtime value.`,{nodes:v});continue}k=t[F]==null}if(k&&Ae(m))throw new R(`Argument "${f}" of non-null type "${$(m)}" must not be null.`,{nodes:v});const A=qt(v,m,t);if(A===void 0)throw new R(`Argument "${f}" has invalid value ${Ke(v)}.`,{nodes:v});s[f]=A}return s}function yi(r,n,t){var o;const s=(o=n.directives)===null||o===void 0?void 0:o.find(a=>a.name.value===r.name);if(s)return FI(r,s,t)}function NI(r,n){return Object.prototype.hasOwnProperty.call(r,n)}function kI(r,n,t,o,s){const a=new Map;return Ra(r,n,t,o,s,a,new Set),a}function Ra(r,n,t,o,s,a,l){for(const d of s.selections)switch(d.kind){case T.FIELD:{if(!ya(t,d))continue;const f=CI(d),m=a.get(f);m!==void 0?m.push(d):a.set(f,[d]);break}case T.INLINE_FRAGMENT:{if(!ya(t,d)||!Td(r,d,o))continue;Ra(r,n,t,o,d.selectionSet,a,l);break}case T.FRAGMENT_SPREAD:{const f=d.name.value;if(l.has(f)||!ya(t,d))continue;l.add(f);const m=n[f];if(!m||!Td(r,m,o))continue;Ra(r,n,t,o,m.selectionSet,a,l);break}}}function ya(r,n){const t=yi(vf,n,r);if((t==null?void 0:t.if)===!0)return!1;const o=yi(Ef,n,r);return(o==null?void 0:o.if)!==!1}function Td(r,n,t){const o=n.typeCondition;if(!o)return!0;const s=ht(r,o);return s===t?!0:dr(s)?r.isSubType(s,t):!1}function CI(r){return r.alias?r.alias.value:r.name.value}function OI(r){return{OperationDefinition(n){if(n.operation==="subscription"){const t=r.getSchema(),o=t.getSubscriptionType();if(o){const s=n.name?n.name.value:null,a=Object.create(null),l=r.getDocument(),d=Object.create(null);for(const m of l.definitions)m.kind===T.FRAGMENT_DEFINITION&&(d[m.name.value]=m);const f=kI(t,d,a,o,n.selectionSet);if(f.size>1){const v=[...f.values()].slice(1).flat();r.reportError(new R(s!=null?`Subscription "${s}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:v}))}for(const m of f.values())m[0].name.value.startsWith("__")&&r.reportError(new R(s!=null?`Subscription "${s}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:m}))}}}}}function su(r,n){const t=new Map;for(const o of r){const s=n(o),a=t.get(s);a===void 0?t.set(s,[o]):a.push(o)}return t}function xI(r){return{DirectiveDefinition(o){var s;const a=(s=o.arguments)!==null&&s!==void 0?s:[];return t(`@${o.name.value}`,a)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(o){var s;const a=o.name.value,l=(s=o.fields)!==null&&s!==void 0?s:[];for(const f of l){var d;const m=f.name.value,D=(d=f.arguments)!==null&&d!==void 0?d:[];t(`${a}.${m}`,D)}return!1}function t(o,s){const a=su(s,l=>l.name.value);for(const[l,d]of a)d.length>1&&r.reportError(new R(`Argument "${o}(${l}:)" can only be defined once.`,{nodes:d.map(f=>f.name)}));return!1}}function Bf(r){return{Field:n,Directive:n};function n(t){var o;const s=(o=t.arguments)!==null&&o!==void 0?o:[],a=su(s,l=>l.name.value);for(const[l,d]of a)d.length>1&&r.reportError(new R(`There can be only one argument named "${l}".`,{nodes:d.map(f=>f.name)}))}}function LI(r){const n=Object.create(null),t=r.getSchema();return{DirectiveDefinition(o){const s=o.name.value;if(t!=null&&t.getDirective(s)){r.reportError(new R(`Directive "@${s}" already exists in the schema. It cannot be redefined.`,{nodes:o.name}));return}return n[s]?r.reportError(new R(`There can be only one directive named "@${s}".`,{nodes:[n[s],o.name]})):n[s]=o.name,!1}}}function zf(r){const n=Object.create(null),t=r.getSchema(),o=t?t.getDirectives():Pr;for(const d of o)n[d.name]=!d.isRepeatable;const s=r.getDocument().definitions;for(const d of s)d.kind===T.DIRECTIVE_DEFINITION&&(n[d.name.value]=!d.repeatable);const a=Object.create(null),l=Object.create(null);return{enter(d){if(!("directives"in d)||!d.directives)return;let f;if(d.kind===T.SCHEMA_DEFINITION||d.kind===T.SCHEMA_EXTENSION)f=a;else if(Ni(d)||tu(d)){const m=d.name.value;f=l[m],f===void 0&&(l[m]=f=Object.create(null))}else f=Object.create(null);for(const m of d.directives){const D=m.name.value;n[D]&&(f[D]?r.reportError(new R(`The directive "@${D}" can only be used once at this location.`,{nodes:[f[D],m]})):f[D]=m)}}}}function RI(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),o=Object.create(null);return{EnumTypeDefinition:s,EnumTypeExtension:s};function s(a){var l;const d=a.name.value;o[d]||(o[d]=Object.create(null));const f=(l=a.values)!==null&&l!==void 0?l:[],m=o[d];for(const D of f){const v=D.name.value,k=t[d];et(k)&&k.getValue(v)?r.reportError(new R(`Enum value "${d}.${v}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:D.name})):m[v]?r.reportError(new R(`Enum value "${d}.${v}" can only be defined once.`,{nodes:[m[v],D.name]})):m[v]=D.name}return!1}}function BI(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),o=Object.create(null);return{InputObjectTypeDefinition:s,InputObjectTypeExtension:s,InterfaceTypeDefinition:s,InterfaceTypeExtension:s,ObjectTypeDefinition:s,ObjectTypeExtension:s};function s(a){var l;const d=a.name.value;o[d]||(o[d]=Object.create(null));const f=(l=a.fields)!==null&&l!==void 0?l:[],m=o[d];for(const D of f){const v=D.name.value;zI(t[d],v)?r.reportError(new R(`Field "${d}.${v}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:D.name})):m[v]?r.reportError(new R(`Field "${d}.${v}" can only be defined once.`,{nodes:[m[v],D.name]})):m[v]=D.name}return!1}}function zI(r,n){return je(r)||Ge(r)||En(r)?r.getFields()[n]!=null:!1}function MI(r){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const o=t.name.value;return n[o]?r.reportError(new R(`There can be only one fragment named "${o}".`,{nodes:[n[o],t.name]})):n[o]=t.name,!1}}}function Mf(r){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const o=n.pop();o||Xn(!1),t=o}},ObjectField(o){const s=o.name.value;t[s]?r.reportError(new R(`There can be only one input field named "${s}".`,{nodes:[t[s],o.name]})):t[s]=o.name}}}function $I(r){const n=Object.create(null);return{OperationDefinition(t){const o=t.name;return o&&(n[o.value]?r.reportError(new R(`There can be only one operation named "${o.value}".`,{nodes:[n[o.value],o]})):n[o.value]=o),!1},FragmentDefinition:()=>!1}}function PI(r){const n=r.getSchema(),t=Object.create(null),o=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:s,SchemaExtension:s};function s(a){var l;const d=(l=a.operationTypes)!==null&&l!==void 0?l:[];for(const f of d){const m=f.operation,D=t[m];o[m]?r.reportError(new R(`Type for ${m} already defined in the schema. It cannot be redefined.`,{nodes:f})):D?r.reportError(new R(`There can be only one ${m} type in schema.`,{nodes:[D,f]})):t[m]=f}return!1}}function UI(r){const n=Object.create(null),t=r.getSchema();return{ScalarTypeDefinition:o,ObjectTypeDefinition:o,InterfaceTypeDefinition:o,UnionTypeDefinition:o,EnumTypeDefinition:o,InputObjectTypeDefinition:o};function o(s){const a=s.name.value;if(t!=null&&t.getType(a)){r.reportError(new R(`Type "${a}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:s.name}));return}return n[a]?r.reportError(new R(`There can be only one type named "${a}".`,{nodes:[n[a],s.name]})):n[a]=s.name,!1}}function GI(r){return{OperationDefinition(n){var t;const o=(t=n.variableDefinitions)!==null&&t!==void 0?t:[],s=su(o,a=>a.variable.name.value);for(const[a,l]of s)l.length>1&&r.reportError(new R(`There can be only one variable named "$${a}".`,{nodes:l.map(d=>d.variable.name)}))}}}function VI(r){let n={};return{OperationDefinition:{enter(){n={}}},VariableDefinition(t){n[t.variable.name.value]=t},ListValue(t){const o=x_(r.getParentInputType());if(!vn(o))return lr(r,t),!1},ObjectValue(t){const o=gr(r.getInputType());if(!En(o))return lr(r,t),!1;const s=pr(t.fields,a=>a.name.value);for(const a of Object.values(o.getFields()))if(!s[a.name]&&B_(a)){const d=$(a.type);r.reportError(new R(`Field "${o.name}.${a.name}" of required type "${d}" was not provided.`,{nodes:t}))}o.isOneOf&&WI(r,t,o,s,n)},ObjectField(t){const o=gr(r.getParentInputType());if(!r.getInputType()&&En(o)){const a=Er(t.name.value,Object.keys(o.getFields()));r.reportError(new R(`Field "${t.name.value}" is not defined by type "${o.name}".`+Kt(a),{nodes:t}))}},NullValue(t){const o=r.getInputType();Ae(o)&&r.reportError(new R(`Expected value of type "${$(o)}", found ${Ke(t)}.`,{nodes:t}))},EnumValue:t=>lr(r,t),IntValue:t=>lr(r,t),FloatValue:t=>lr(r,t),StringValue:t=>lr(r,t),BooleanValue:t=>lr(r,t)}}function lr(r,n){const t=r.getInputType();if(!t)return;const o=gr(t);if(!zr(o)){const s=$(t);r.reportError(new R(`Expected value of type "${s}", found ${Ke(n)}.`,{nodes:n}));return}try{if(o.parseLiteral(n,void 0)===void 0){const a=$(t);r.reportError(new R(`Expected value of type "${a}", found ${Ke(n)}.`,{nodes:n}))}}catch(s){const a=$(t);s instanceof R?r.reportError(s):r.reportError(new R(`Expected value of type "${a}", found ${Ke(n)}; `+s.message,{nodes:n,originalError:s}))}}function WI(r,n,t,o,s){var a;const l=Object.keys(o);if(l.length!==1){r.reportError(new R(`OneOf Input Object "${t.name}" must specify exactly one key.`,{nodes:[n]}));return}const f=(a=o[l[0]])===null||a===void 0?void 0:a.value,m=!f||f.kind===T.NULL,D=(f==null?void 0:f.kind)===T.VARIABLE;if(m){r.reportError(new R(`Field "${t.name}.${l[0]}" must be non-null.`,{nodes:[n]}));return}if(D){const v=f.name.value;s[v].type.kind!==T.NON_NULL_TYPE&&r.reportError(new R(`Variable "${v}" must be non-nullable to be used for OneOf Input Object "${t.name}".`,{nodes:[n]}))}}function jI(r){return{VariableDefinition(n){const t=ht(r.getSchema(),n.type);if(t!==void 0&&!Xa(t)){const o=n.variable.name.value,s=Ke(n.type);r.reportError(new R(`Variable "$${o}" cannot be non-input type "${s}".`,{nodes:n.type}))}}}}function qI(r){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const o=r.getRecursiveVariableUsages(t);for(const{node:s,type:a,defaultValue:l}of o){const d=s.name.value,f=n[d];if(f&&a){const m=r.getSchema(),D=ht(m,f.type);if(D&&!ZI(m,D,f.defaultValue,a,l)){const v=$(D),k=$(a);r.reportError(new R(`Variable "$${d}" of type "${v}" used in position expecting type "${k}".`,{nodes:[f,s]}))}}}}},VariableDefinition(t){n[t.variable.name.value]=t}}}function ZI(r,n,t,o,s){if(Ae(o)&&!Ae(n)){if(!(t!=null&&t.kind!==T.NULL)&&!(s!==void 0))return!1;const d=o.ofType;return Ei(r,n,d)}return Ei(r,n,o)}const HI=Object.freeze([oI]);Object.freeze([Z_,$I,rI,OI,Cf,Y_,jI,wI,H_,MI,nI,lI,vI,aI,GI,uI,cI,kf,zf,Q_,Bf,VI,AI,qI,fI,Mf,...HI]);const JI=Object.freeze([iI,PI,UI,RI,BI,xI,LI,Cf,kf,zf,TI,Nf,Bf,Mf,Rf]);class KI{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const o of this.getDocument().definitions)o.kind===T.FRAGMENT_DEFINITION&&(t[o.name.value]=o);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const o=[n];let s;for(;s=o.pop();)for(const a of s.selections)a.kind===T.FRAGMENT_SPREAD?t.push(a):a.selectionSet&&o.push(a.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const o=Object.create(null),s=[n.selectionSet];let a;for(;a=s.pop();)for(const l of this.getFragmentSpreads(a)){const d=l.name.value;if(o[d]!==!0){o[d]=!0;const f=this.getFragment(d);f&&(t.push(f),s.push(f.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class YI extends KI{constructor(n,t,o){super(n,o),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function QI(r,n,t=JI){const o=[],s=new YI(r,n,l=>{o.push(l)}),a=t.map(l=>l(s));return sf(r,S_(a)),o}function XI(r){const n=QI(r);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function ey(r,n){Ct(r)&&Ct(r.__schema)||de(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${$(r)}.`);const t=r.__schema,o=cr(t.types,x=>x.name,x=>k(x));for(const x of[...Zs,...Js])o[x.name]&&(o[x.name]=x);const s=t.queryType?D(t.queryType):null,a=t.mutationType?D(t.mutationType):null,l=t.subscriptionType?D(t.subscriptionType):null,d=t.directives?t.directives.map(gt):[];return new Ff({description:t.description,query:s,mutation:a,subscription:l,types:Object.values(o),directives:d,assumeValid:void 0});function f(x){if(x.kind===Ie.LIST){const Y=x.ofType;if(!Y)throw new Error("Decorated type deeper than introspection query.");return new dn(f(Y))}if(x.kind===Ie.NON_NULL){const Y=x.ofType;if(!Y)throw new Error("Decorated type deeper than introspection query.");const an=f(Y);return new ie(O_(an))}return m(x)}function m(x){const Y=x.name;if(!Y)throw new Error(`Unknown type reference: ${$(x)}.`);const an=o[Y];if(!an)throw new Error(`Invalid or incomplete schema, unknown type: ${Y}. Ensure that a full introspection query is used in order to build a client schema.`);return an}function D(x){return k_(m(x))}function v(x){return C_(m(x))}function k(x){if(x!=null&&x.name!=null&&x.kind!=null)switch(x.kind){case Ie.SCALAR:return A(x);case Ie.OBJECT:return B(x);case Ie.INTERFACE:return j(x);case Ie.UNION:return ce(x);case Ie.ENUM:return Se(x);case Ie.INPUT_OBJECT:return me(x)}const Y=$(x);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${Y}.`)}function A(x){return new Ot({name:x.name,description:x.description,specifiedByURL:x.specifiedByURL})}function F(x){if(x.interfaces===null&&x.kind===Ie.INTERFACE)return[];if(!x.interfaces){const Y=$(x);throw new Error(`Introspection result missing interfaces: ${Y}.`)}return x.interfaces.map(v)}function B(x){return new ft({name:x.name,description:x.description,interfaces:()=>F(x),fields:()=>ke(x)})}function j(x){return new Ls({name:x.name,description:x.description,interfaces:()=>F(x),fields:()=>ke(x)})}function ce(x){if(!x.possibleTypes){const Y=$(x);throw new Error(`Introspection result missing possibleTypes: ${Y}.`)}return new Rs({name:x.name,description:x.description,types:()=>x.possibleTypes.map(D)})}function Se(x){if(!x.enumValues){const Y=$(x);throw new Error(`Introspection result missing enumValues: ${Y}.`)}return new Mr({name:x.name,description:x.description,values:cr(x.enumValues,Y=>Y.name,Y=>({description:Y.description,deprecationReason:Y.deprecationReason}))})}function me(x){if(!x.inputFields){const Y=$(x);throw new Error(`Introspection result missing inputFields: ${Y}.`)}return new Bs({name:x.name,description:x.description,fields:()=>on(x.inputFields),isOneOf:x.isOneOf})}function ke(x){if(!x.fields)throw new Error(`Introspection result missing fields: ${$(x)}.`);return cr(x.fields,Y=>Y.name,Le)}function Le(x){const Y=f(x.type);if(!af(Y)){const an=$(Y);throw new Error(`Introspection must provide output type for fields, but received: ${an}.`)}if(!x.args){const an=$(x);throw new Error(`Introspection result missing field args: ${an}.`)}return{description:x.description,deprecationReason:x.deprecationReason,type:Y,args:on(x.args)}}function on(x){return cr(x,Y=>Y.name,en)}function en(x){const Y=f(x.type);if(!Xa(Y)){const Rt=$(Y);throw new Error(`Introspection must provide input type for arguments, but received: ${Rt}.`)}const an=x.defaultValue!=null?qt(E_(x.defaultValue),Y):void 0;return{description:x.description,type:Y,defaultValue:an,deprecationReason:x.deprecationReason}}function gt(x){if(!x.args){const Y=$(x);throw new Error(`Introspection result missing directive args: ${Y}.`)}if(!x.locations){const Y=$(x);throw new Error(`Introspection result missing directive locations: ${Y}.`)}return new xt({name:x.name,description:x.description,isRepeatable:x.isRepeatable,locations:x.locations.slice(),args:on(x.args)})}}function ny(r,n,t){var o,s,a,l;const d=[],f=Object.create(null),m=[];let D;const v=[];for(const S of n.definitions)if(S.kind===T.SCHEMA_DEFINITION)D=S;else if(S.kind===T.SCHEMA_EXTENSION)v.push(S);else if(Ni(S))d.push(S);else if(tu(S)){const G=S.name.value,M=f[G];f[G]=M?M.concat([S]):[S]}else S.kind===T.DIRECTIVE_DEFINITION&&m.push(S);if(Object.keys(f).length===0&&d.length===0&&m.length===0&&v.length===0&&D==null)return r;const k=Object.create(null);for(const S of r.types)k[S.name]=Se(S);for(const S of d){var A;const G=S.name.value;k[G]=(A=_d[G])!==null&&A!==void 0?A:Nn(S)}const F={query:r.query&&j(r.query),mutation:r.mutation&&j(r.mutation),subscription:r.subscription&&j(r.subscription),...D&&an([D]),...an(v)};return{description:(o=D)===null||o===void 0||(s=o.description)===null||s===void 0?void 0:s.value,...F,types:Object.values(k),directives:[...r.directives.map(ce),...m.map(ki)],extensions:Object.create(null),astNode:(a=D)!==null&&a!==void 0?a:r.astNode,extensionASTNodes:r.extensionASTNodes.concat(v),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function B(S){return vn(S)?new dn(B(S.ofType)):Ae(S)?new ie(B(S.ofType)):j(S)}function j(S){return k[S.name]}function ce(S){const G=S.toConfig();return new xt({...G,args:St(G.args,Y)})}function Se(S){if(V_(S)||$_(S))return S;if(Yt(S))return Le(S);if(je(S))return on(S);if(Ge(S))return en(S);if(Pn(S))return gt(S);if(et(S))return ke(S);if(En(S))return me(S);Xn(!1,"Unexpected type: "+$(S))}function me(S){var G;const M=S.toConfig(),P=(G=f[M.name])!==null&&G!==void 0?G:[];return new Bs({...M,fields:()=>({...St(M.fields,he=>({...he,type:B(he.type)})),...ot(P)}),extensionASTNodes:M.extensionASTNodes.concat(P)})}function ke(S){var G;const M=S.toConfig(),P=(G=f[S.name])!==null&&G!==void 0?G:[];return new Mr({...M,values:{...M.values,...Gn(P)},extensionASTNodes:M.extensionASTNodes.concat(P)})}function Le(S){var G;const M=S.toConfig(),P=(G=f[M.name])!==null&&G!==void 0?G:[];let he=M.specifiedByURL;for(const pe of P){var Me;he=(Me=Id(pe))!==null&&Me!==void 0?Me:he}return new Ot({...M,specifiedByURL:he,extensionASTNodes:M.extensionASTNodes.concat(P)})}function on(S){var G;const M=S.toConfig(),P=(G=f[M.name])!==null&&G!==void 0?G:[];return new ft({...M,interfaces:()=>[...S.getInterfaces().map(j),...br(P)],fields:()=>({...St(M.fields,x),...vr(P)}),extensionASTNodes:M.extensionASTNodes.concat(P)})}function en(S){var G;const M=S.toConfig(),P=(G=f[M.name])!==null&&G!==void 0?G:[];return new Ls({...M,interfaces:()=>[...S.getInterfaces().map(j),...br(P)],fields:()=>({...St(M.fields,x),...vr(P)}),extensionASTNodes:M.extensionASTNodes.concat(P)})}function gt(S){var G;const M=S.toConfig(),P=(G=f[M.name])!==null&&G!==void 0?G:[];return new Rs({...M,types:()=>[...S.getTypes().map(j),...Xt(P)],extensionASTNodes:M.extensionASTNodes.concat(P)})}function x(S){return{...S,type:B(S.type),args:S.args&&St(S.args,Y)}}function Y(S){return{...S,type:B(S.type)}}function an(S){const G={};for(const P of S){var M;const he=(M=P.operationTypes)!==null&&M!==void 0?M:[];for(const Me of he)G[Me.operation]=Rt(Me.type)}return G}function Rt(S){var G;const M=S.name.value,P=(G=_d[M])!==null&&G!==void 0?G:k[M];if(P===void 0)throw new Error(`Unknown type: "${M}".`);return P}function Qt(S){return S.kind===T.LIST_TYPE?new dn(Qt(S.type)):S.kind===T.NON_NULL_TYPE?new ie(Qt(S.type)):Rt(S)}function ki(S){var G;return new xt({name:S.name.value,description:(G=S.description)===null||G===void 0?void 0:G.value,locations:S.locations.map(({value:M})=>M),isRepeatable:S.repeatable,args:Ci(S.arguments),astNode:S})}function vr(S){const G=Object.create(null);for(const he of S){var M;const Me=(M=he.fields)!==null&&M!==void 0?M:[];for(const pe of Me){var P;G[pe.name.value]={type:Qt(pe.type),description:(P=pe.description)===null||P===void 0?void 0:P.value,args:Ci(pe.arguments),deprecationReason:ws(pe),astNode:pe}}}return G}function Ci(S){const G=S??[],M=Object.create(null);for(const he of G){var P;const Me=Qt(he.type);M[he.name.value]={type:Me,description:(P=he.description)===null||P===void 0?void 0:P.value,defaultValue:qt(he.defaultValue,Me),deprecationReason:ws(he),astNode:he}}return M}function ot(S){const G=Object.create(null);for(const he of S){var M;const Me=(M=he.fields)!==null&&M!==void 0?M:[];for(const pe of Me){var P;const kn=Qt(pe.type);G[pe.name.value]={type:kn,description:(P=pe.description)===null||P===void 0?void 0:P.value,defaultValue:qt(pe.defaultValue,kn),deprecationReason:ws(pe),astNode:pe}}}return G}function Gn(S){const G=Object.create(null);for(const he of S){var M;const Me=(M=he.values)!==null&&M!==void 0?M:[];for(const pe of Me){var P;G[pe.name.value]={description:(P=pe.description)===null||P===void 0?void 0:P.value,deprecationReason:ws(pe),astNode:pe}}}return G}function br(S){return S.flatMap(G=>{var M,P;return(M=(P=G.interfaces)===null||P===void 0?void 0:P.map(Rt))!==null&&M!==void 0?M:[]})}function Xt(S){return S.flatMap(G=>{var M,P;return(M=(P=G.types)===null||P===void 0?void 0:P.map(Rt))!==null&&M!==void 0?M:[]})}function Nn(S){var G;const M=S.name.value,P=(G=f[M])!==null&&G!==void 0?G:[];switch(S.kind){case T.OBJECT_TYPE_DEFINITION:{var he;const nn=[S,...P];return new ft({name:M,description:(he=S.description)===null||he===void 0?void 0:he.value,interfaces:()=>br(nn),fields:()=>vr(nn),astNode:S,extensionASTNodes:P})}case T.INTERFACE_TYPE_DEFINITION:{var Me;const nn=[S,...P];return new Ls({name:M,description:(Me=S.description)===null||Me===void 0?void 0:Me.value,interfaces:()=>br(nn),fields:()=>vr(nn),astNode:S,extensionASTNodes:P})}case T.ENUM_TYPE_DEFINITION:{var pe;const nn=[S,...P];return new Mr({name:M,description:(pe=S.description)===null||pe===void 0?void 0:pe.value,values:Gn(nn),astNode:S,extensionASTNodes:P})}case T.UNION_TYPE_DEFINITION:{var kn;const nn=[S,...P];return new Rs({name:M,description:(kn=S.description)===null||kn===void 0?void 0:kn.value,types:()=>Xt(nn),astNode:S,extensionASTNodes:P})}case T.SCALAR_TYPE_DEFINITION:{var Ur;return new Ot({name:M,description:(Ur=S.description)===null||Ur===void 0?void 0:Ur.value,specifiedByURL:Id(S),astNode:S,extensionASTNodes:P})}case T.INPUT_OBJECT_TYPE_DEFINITION:{var Bt;const nn=[S,...P];return new Bs({name:M,description:(Bt=S.description)===null||Bt===void 0?void 0:Bt.value,fields:()=>ot(nn),astNode:S,extensionASTNodes:P,isOneOf:ty(S)})}}}}const _d=pr([...Zs,...Js],r=>r.name);function ws(r){const n=yi(bf,r);return n==null?void 0:n.reason}function Id(r){const n=yi(Tf,r);return n==null?void 0:n.url}function ty(r){return!!yi(_f,r)}function ry(r,n){r!=null&&r.kind===T.DOCUMENT||de(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&XI(r);const o=ny({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},r,n);if(o.astNode==null)for(const a of o.types)switch(a.name){case"Query":o.query=a;break;case"Mutation":o.mutation=a;break;case"Subscription":o.subscription=a;break}const s=[...o.directives,...Pr.filter(a=>o.directives.every(l=>l.name!==a.name))];return new Ff({...o,directives:s})}function iy(r,n){const t=D_(r,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return ry(t,{assumeValidSDL:void 0,assumeValid:void 0})}function sy(r){const n=new Map;return oy(r,t=>{je(t)&&ay(t,o=>{const s=Ba(o.type);Aa(n,s).references.push({kind:Di.FIELD,parent:t,by:o}),uy(o,l=>{const d=Ba(l.type);Aa(n,d).references.push({kind:Di.ARGUMENT,field:o,type:t,by:l})})}),Pn(t)&&t.getTypes().forEach(o=>{Aa(n,o).references.push({kind:Di.UNION,by:t})})}),new VT(n)}function oy(r,n){Object.entries(r.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function ay(r,n){Object.entries(r.getFields()).forEach(([,t])=>{n(t)})}function uy(r,n){Object.entries(r.args).forEach(([,t])=>{n(t)})}function Aa(r,n){let t=r.get(n.name);return t||(t={references:[]},r.set(n.name,t)),t}function Ba(r){return Ae(r)||vn(r)?Ba(r.ofType):r}const yd=`
type AccessibilityInformation {
  """Eine Beschreibung der Barrierefreiheitsmerkmale oder -dienste."""
  description: String
  """Eindeutiger Bezeichner für die Barrierefreiheitsinformationen."""
  id: ID
  """
  Typ der Barrierefreiheitsinformationen (z.B. Rollstuhlgerecht, Gebärdendolmetscher).
  """
  types: String
  """
  Eine Liste von URLs mit zusätzlichen Informationen zur Barrierefreiheit.
  """
  urls: [WebUrl!]
}


input AccessibilityInformationInput {
  """Eine Beschreibung der Barrierefreiheitsmerkmale oder -dienste."""
  description: String
  """
  Typ der Barrierefreiheitsinformationen (z.B. Rollstuhlgerecht, Gebärdendolmetscher).
  """
  types: String
  """
  Eine Liste von URLs mit zusätzlichen Informationen zur Barrierefreiheit.
  """
  urls: [WebUrlInput!]
}


type Address {
  """Zusätzliche Adressinformationen wie z.B. Gebäudenummer oder Etage."""
  addition: String
  """Die Stadt, in der sich die Adresse befindet."""
  city: String
  """Geographische Informationen (Breitengrad und Längengrad) zur Adresse."""
  geoLocation: GeoLocation
  """Eindeutiger Bezeichner für die Adresse."""
  id: ID
  """Art der Adresse, z.B. Wohnadresse, Geschäftsadresse."""
  kind: String
  """Straßenname und Hausnummer."""
  street: String
  """
  Liste der Müllsammelstellenarten, die mit dieser Adresse verknüpft sind.
  """
  wasteLocationTypes: [WasteLocationType!]
  """Postleitzahl der Adresse."""
  zip: String
}


input AddressInput {
  """Eindeutiger Bezeichner für die Adressdaten."""
  id: Int
  """Zusätzliche Adressinformationen wie z.B. Gebäudenummer oder Etage."""
  addition: String
  """Straßenname und Hausnummer."""
  street: String
  """Postleitzahl der Adresse."""
  zip: String
  """Die Stadt, in der sich die Adresse befindet."""
  city: String
  """Art der Adresse, z.B. Wohnadresse, Geschäftsadresse."""
  kind: String
  """Geographische Informationen zur Adresse als Input."""
  geoLocation: GeoLocationInput
}


"""Repräsentiert jeden primitiven Datentyp (z.B. String, Zahl, Boolean)."""
scalar AnyPrimitive


type AppUserContent {
  """Vom App-Benutzer erstellter Inhalt."""
  content: String
  """Zeitstempel, wann der Inhalt erstellt wurde."""
  createdAt: String
  """Datenquelle, die der Benutzer zur Verfügung gestellt hat."""
  dataSource: String
  """Typ oder Format der Daten."""
  dataType: String
  """Eindeutiger Bezeichner für den vom Benutzer erstellten Inhalt."""
  id: ID
  """Zeitstempel, wann der Inhalt zuletzt aktualisiert wurde."""
  updatedAt: String
}


type AssignWasteLocationToTourPayload {
  """
  Eindeutiger Bezeichner für die zugewiesene Müllsammelstelle einer Tour.
  """
  id: ID!
}


enum CategoriesOrder {
  """Sortierung nach Erstellungsdatum in absteigender Reihenfolge."""
  createdAt_DESC
  """Sortierung nach Erstellungsdatum in aufsteigender Reihenfolge."""
  createdAt_ASC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in absteigender Reihenfolge.
  """
  updatedAt_DESC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in aufsteigender Reihenfolge.
  """
  updatedAt_ASC
  """Sortierung nach der ID in absteigender Reihenfolge."""
  id_DESC
  """Sortierung nach der ID in aufsteigender Reihenfolge."""
  id_ASC
  """Sortierung nach dem Namen in absteigender Reihenfolge."""
  name_DESC
  """Sortierung nach dem Namen in aufsteigender Reihenfolge."""
  name_ASC
}


type Category {
  """Liste der Unterkategorien unter dieser Kategorie."""
  children: [Category!]
  """
  Veranstaltungsdatensätze, die mit dieser Kategorie verbunden sind, gefiltert nach Standort.
  """
  eventRecords(location: String): [EventRecord!]
  """
  Anzahl der Veranstaltungsdatensätze für diese Kategorie an dem angegebenen Standort.
  """
  eventRecordsCount(location: String): Int
  """
  Generische Elemente, die mit dieser Kategorie verbunden sind, gefiltert nach Standort.
  """
  genericItems(location: String): [GenericItem!]
  """
  Anzahl der generischen Elemente für diese Kategorie an dem angegebenen Standort.
  """
  genericItemsCount(location: String): Int
  """Eindeutiger Bezeichner für die Kategorie."""
  id: ID
  """Name der Kategorie."""
  name: String
  """Nachrichtenartikel, die mit dieser Kategorie verknüpft sind."""
  newsItems: [NewsItem!]
  """Anzahl der Nachrichtenartikel in dieser Kategorie."""
  newsItemsCount: Int
  """Übergeordnete Kategorie für diese Kategorie."""
  parent: Category
  """
  Interessante Orte, die mit dieser Kategorie verbunden sind, gefiltert nach Standort.
  """
  pointsOfInterest(location: String): [PointOfInterest!]
  """
  Anzahl der interessanten Orte für diese Kategorie an dem angegebenen Standort.
  """
  pointsOfInterestCount(location: String): Int
  """
  Anzahl der interessanten Orte in dieser Kategorie und den dazugehörigen Unterkategorien.
  """
  pointsOfInterestTreeCount(location: String): Int
  """
  Touren, die mit dieser Kategorie verbunden sind, gefiltert nach Standort.
  """
  tours(location: String): [Tour!]
  """Anzahl der Touren für diese Kategorie an dem angegebenen Standort."""
  toursCount(location: String): Int
  """
  Anzahl der Touren in dieser Kategorie und den dazugehörigen Unterkategorien.
  """
  toursTreeCount(location: String): Int
  """
  Bevorstehende Veranstaltungen, die mit dieser Kategorie verbunden sind, gefiltert nach Standort.
  """
  upcomingEventRecords(location: String): [EventRecord!]
  """
  Anzahl bevorstehender Veranstaltungen in dieser Kategorie an dem angegebenen Standort.
  """
  upcomingEventRecordsCount(location: String): Int
}


input CategoryInput {
  """Name der Kategorie, die erstellt oder aktualisiert werden soll."""
  name: String
}


type Certificate {
  """Eindeutiger Bezeichner für das Zertifikat."""
  id: ID
  """Name des Zertifikats."""
  name: String
}


input CertificateInput {
  """Name des Zertifikats, das erstellt oder aktualisiert werden soll."""
  name: String
}


type Contact {
  """E-Mail-Adresse des Kontakts."""
  email: String
  """Faxnummer des Kontakts."""
  fax: String
  """Vorname des Kontakts."""
  firstName: String
  """Eindeutiger Bezeichner für den Kontakt."""
  id: ID
  """Nachname des Kontakts."""
  lastName: String
  """Telefonnummer des Kontakts."""
  phone: String
  """Eine Liste von URLs, die mit dem Kontakt verbunden sind."""
  webUrls: [WebUrl!]
}


input ContactInput {
  """Vorname des Kontakts, der erstellt oder aktualisiert werden soll."""
  firstName: String
  """Nachname des Kontakts, der erstellt oder aktualisiert werden soll."""
  lastName: String
  """
  Telefonnummer des Kontakts, der erstellt oder aktualisiert werden soll.
  """
  phone: String
  """Faxnummer des Kontakts, der erstellt oder aktualisiert werden soll."""
  fax: String
  """Eine Liste von URLs, die mit dem Kontakt verbunden sind."""
  webUrls: [WebUrlInput!]
  """
  E-Mail-Adresse des Kontakts, der erstellt oder aktualisiert werden soll.
  """
  email: String
}


type ContentBlock {
  """Hauptinhalt des Inhaltsblocks."""
  body: String
  """Zeitstempel, wann der Inhaltsblock erstellt wurde."""
  createdAt: String
  """Eindeutiger Bezeichner für den Inhaltsblock."""
  id: ID
  """Einleitungstext des Inhaltsblocks."""
  intro: String
  """Liste der Medieninhalte, die mit diesem Inhaltsblock verbunden sind."""
  mediaContents: [MediaContent!]
  """Titel des Inhaltsblocks."""
  title: String
  """Zeitstempel, wann der Inhaltsblock zuletzt aktualisiert wurde."""
  updatedAt: String
}


input ContentBlockInput {
  """Titel des Inhaltsblocks, der erstellt oder aktualisiert werden soll."""
  title: String
  """
  Einleitungstext des Inhaltsblocks, der erstellt oder aktualisiert werden soll.
  """
  intro: String
  """
  Hauptinhalt des Inhaltsblocks, der erstellt oder aktualisiert werden soll.
  """
  body: String
  """Liste der Medieninhalte, die mit diesem Inhaltsblock verbunden sind."""
  mediaContents: [MediaContentInput!]
}


type DataProvider {
  """Adresse des Datenanbieters."""
  address: Address
  """Kontaktinformationen des Datenanbieters."""
  contact: Contact
  """Datentyp, den der Anbieter zur Verfügung stellt."""
  dataType: String
  """Beschreibung des Datenanbieters und seiner Dienste."""
  description: String
  """Eindeutiger Bezeichner für den Datenanbieter."""
  id: ID
  """URL zum Logo des Datenanbieters."""
  logo: WebUrl
  """Name des Datenanbieters."""
  name: String
  """Zusätzliche Hinweise oder Anmerkungen zum Datenanbieter."""
  notice: String
}


type Date {
  """Enddatum des Ereignisses oder Zeitraums."""
  dateEnd: String
  """Startdatum des Ereignisses oder Zeitraums."""
  dateStart: String
  """Eindeutiger Bezeichner für das Datum."""
  id: ID
  """Beschreibung der Zeit, z.B. 'ganztägig' oder 'vormittags'."""
  timeDescription: String
  """Endzeit des Ereignisses oder Zeitraums."""
  timeEnd: String
  """Startzeit des Ereignisses oder Zeitraums."""
  timeStart: String
  """Ob nur die Zeitbeschreibung verwendet wird."""
  useOnlyTimeDescription: String
  """Wochentag des Ereignisses oder Zeitraums."""
  weekday: String
}


input DateInput {
  """
  Wochentag des Ereignisses oder Zeitraums, der erstellt oder aktualisiert werden soll.
  """
  weekday: String
  """
  Startdatum des Ereignisses oder Zeitraums, der erstellt oder aktualisiert werden soll.
  """
  dateStart: String
  """
  Enddatum des Ereignisses oder Zeitraums, der erstellt oder aktualisiert werden soll.
  """
  dateEnd: String
  """
  Startzeit des Ereignisses oder Zeitraums, der erstellt oder aktualisiert werden soll.
  """
  timeStart: String
  """
  Endzeit des Ereignisses oder Zeitraums, der erstellt oder aktualisiert werden soll.
  """
  timeEnd: String
  """Beschreibung der Zeit, die erstellt oder aktualisiert werden soll."""
  timeDescription: String
  """Gibt an, ob nur die Zeitbeschreibung verwendet werden soll."""
  useOnlyTimeDescription: Boolean
}


type Destroy {
  """Eindeutiger Bezeichner des zerstörten Objekts."""
  id: Int
  """Status der Zerstörung, z.B. 'erfolgreich'."""
  status: String
  """Statuscode der Zerstörung, z.B. 200 für Erfolg."""
  statusCode: Int
}


type EventRecord {
  """Informationen zur Barrierefreiheit der Veranstaltung."""
  accessibilityInformation: AccessibilityInformation
  """Liste der Adressen, die mit der Veranstaltung verbunden sind."""
  addresses: [Address!]
  """Liste der Kategorien, zu denen die Veranstaltung gehört."""
  categories: [Category!]
  """Die Hauptkategorie, zu der die Veranstaltung gehört."""
  category: Category
  """Liste der Kontakte, die mit der Veranstaltung verbunden sind."""
  contacts: [Contact!]
  """Zeitstempel, wann die Veranstaltung erstellt wurde."""
  createdAt: String
  """Der Datenanbieter, der diese Veranstaltung zur Verfügung stellt."""
  dataProvider: DataProvider
  """Liste der Daten und Zeiten, die mit der Veranstaltung verbunden sind."""
  dates: [Date!]
  """Eine Beschreibung der Veranstaltung."""
  description: String
  """
  Externe ID der Veranstaltung, falls sie von einem anderen System stammt.
  """
  externalId: String
  """Eindeutiger Bezeichner für die Veranstaltung."""
  id: ID
  """Das Datum, an dem die Veranstaltung aufgelistet wurde."""
  listDate: String
  """Der Standort der Veranstaltung."""
  location: Location
  """Liste der Medieninhalte, die mit der Veranstaltung verknüpft sind."""
  mediaContents: [MediaContent!]
  """
  Das Unternehmen oder die Organisation, die die Veranstaltung organisiert.
  """
  organizer: OperatingCompany
  """Die ID der übergeordneten Veranstaltung, falls zutreffend."""
  parentId: Int
  """Preisinformationen, die mit der Veranstaltung verbunden sind."""
  priceInformations: [Price!]
  """Region, in der die Veranstaltung stattfindet."""
  region: Region
  """Eindeutige ID der Region, in der die Veranstaltung stattfindet."""
  regionId: String
  """Gibt an, ob die Veranstaltung wiederholt wird."""
  repeat: Boolean
  """Details zur Wiederholungsdauer der Veranstaltung."""
  repeatDuration: RepeatDuration
  """Einstellungen, die für die Veranstaltung festgelegt sind."""
  settings: Setting
  """Liste der Tags, die der Veranstaltung zugeordnet sind."""
  tagList: [String!]
  """Der Titel der Veranstaltung."""
  title: String
  """Zeitstempel, wann die Veranstaltung zuletzt aktualisiert wurde."""
  updatedAt: String
  """Liste von URLs, die mit der Veranstaltung verbunden sind."""
  urls: [WebUrl!]
  """Gibt an, ob die Veranstaltung sichtbar ist."""
  visible: Boolean
}


enum EventRecordsOrder {
  """Sortierung nach dem Erstellungsdatum in absteigender Reihenfolge."""
  createdAt_DESC
  """Sortierung nach dem Erstellungsdatum in aufsteigender Reihenfolge."""
  createdAt_ASC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in absteigender Reihenfolge.
  """
  updatedAt_DESC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in aufsteigender Reihenfolge.
  """
  updatedAt_ASC
  """Sortierung nach der ID in absteigender Reihenfolge."""
  id_DESC
  """Sortierung nach der ID in aufsteigender Reihenfolge."""
  id_ASC
  """Sortierung nach dem Titel in absteigender Reihenfolge."""
  title_DESC
  """Sortierung nach dem Titel in aufsteigender Reihenfolge."""
  title_ASC
  """Sortierung nach dem Listen-Datum in absteigender Reihenfolge."""
  listDate_DESC
  """Sortierung nach dem Listen-Datum in aufsteigender Reihenfolge."""
  listDate_ASC
}


type GenericItem {
  """
  Liste der Barrierefreiheitsinformationen, die mit dem generischen Element verbunden sind.
  """
  accessibilityInformations: [AccessibilityInformation!]
  """Liste der Adressen, die mit dem generischen Element verbunden sind."""
  addresses: [Address!]
  """Der Autor des generischen Elements."""
  author: String
  """Liste der Kategorien, zu denen das generische Element gehört."""
  categories: [Category!]
  """Liste der Unternehmen, die mit dem generischen Element verbunden sind."""
  companies: [OperatingCompany!]
  """Liste der Kontakte, die mit dem generischen Element verbunden sind."""
  contacts: [Contact!]
  """
  Liste der Inhaltsblöcke, die mit dem generischen Element verbunden sind.
  """
  contentBlocks: [ContentBlock!]
  """Zeitstempel, wann das generische Element erstellt wurde."""
  createdAt: String
  """Der Datenanbieter, der das generische Element bereitstellt."""
  dataProvider: DataProvider
  """
  Liste der Daten und Zeiten, die mit dem generischen Element verbunden sind.
  """
  dates: [Date!]
  """
  Externe ID des generischen Elements, falls es von einem anderen System stammt.
  """
  externalId: String
  """
  Liste der Unterelemente, die diesem generischen Element zugeordnet sind.
  """
  genericItems: [GenericItem!]
  """Typ des generischen Elements."""
  genericType: String
  """Eindeutiger Bezeichner für das generische Element."""
  id: ID
  """Liste der Standorte, die mit dem generischen Element verbunden sind."""
  locations: [Location!]
  """
  Liste der Medieninhalte, die mit dem generischen Element verknüpft sind.
  """
  mediaContents: [MediaContent!]
  """Öffnungszeiten, die mit dem generischen Element verbunden sind."""
  openingHours: [OpeningHour!]
  """
  Zusätzliche, unstrukturierte Daten, die mit dem generischen Element verbunden sind.
  """
  payload: JSON
  """Preisinformationen, die mit dem generischen Element verbunden sind."""
  priceInformations: [Price!]
  """Das Veröffentlichungsdatum des generischen Elements."""
  publicationDate: String
  """Zeitstempel, wann das generische Element veröffentlicht wurde."""
  publishedAt: String
  """Einstellungen, die für das generische Element festgelegt sind."""
  settings: Setting
  """Der Titel des generischen Elements."""
  title: String
  """Zeitstempel, wann das generische Element zuletzt aktualisiert wurde."""
  updatedAt: String
  """Gibt an, ob das generische Element sichtbar ist."""
  visible: Boolean
  """Liste von URLs, die mit dem generischen Element verbunden sind."""
  webUrls: [WebUrl!]
}


input GenericItemInput {
  """
  Gibt an, ob das generische Element erzwungen erstellt werden soll, auch wenn es bereits existiert.
  """
  forceCreate: Boolean
  """Gibt an, ob eine Push-Benachrichtigung gesendet werden soll."""
  pushNotification: Boolean
  """Der Autor des generischen Elements."""
  author: String
  """Der Titel des generischen Elements."""
  title: String
  """Typ des generischen Elements."""
  genericType: String
  """
  Externe ID des generischen Elements, falls es von einem anderen System stammt.
  """
  externalId: String
  """Das Veröffentlichungsdatum des generischen Elements."""
  publicationDate: String
  """Zeitstempel, wann das generische Element veröffentlicht wurde."""
  publishedAt: String
  """Der Name der Kategorie, zu der das generische Element gehört."""
  categoryName: String
  """
  Zusätzliche, unstrukturierte Daten, die mit dem generischen Element verbunden sind.
  """
  payload: JSON
  """Liste der Kontakte, die mit dem generischen Element verbunden sind."""
  contacts: [ContactInput!]
  """
  Liste der Unterelemente, die diesem generischen Element zugeordnet sind.
  """
  genericItems: [GenericItemInput!]
  """Liste der Unternehmen, die mit dem generischen Element verbunden sind."""
  companies: [OperatingCompanyInput!]
  """Liste der Kategorien, zu denen das generische Element gehört."""
  categories: [CategoryInput!]
  """Liste der URLs, die mit dem generischen Element verbunden sind."""
  webUrls: [WebUrlInput!]
  """Liste der Adressen, die mit dem generischen Element verbunden sind."""
  addresses: [AddressInput!]
  """
  Liste der Inhaltsblöcke, die mit dem generischen Element verbunden sind.
  """
  contentBlocks: [ContentBlockInput!]
  """Öffnungszeiten, die mit dem generischen Element verbunden sind."""
  openingHours: [OpeningHourInput!]
  """Preisinformationen, die mit dem generischen Element verbunden sind."""
  priceInformations: [PriceInput!]
  """
  Liste der Medieninhalte, die mit dem generischen Element verknüpft sind.
  """
  mediaContents: [MediaContentInput!]
  """Liste der Standorte, die mit dem generischen Element verbunden sind."""
  locations: [LocationInput!]
  """
  Liste der Daten und Zeiten, die mit dem generischen Element verbunden sind.
  """
  dates: [DateInput!]
  """
  Liste der Barrierefreiheitsinformationen, die mit dem generischen Element verbunden sind.
  """
  accessibilityInformations: [AccessibilityInformationInput!]
}


enum GenericItemOrder {
  """Sortierung nach dem Erstellungsdatum in absteigender Reihenfolge."""
  createdAt_DESC
  """Sortierung nach dem Erstellungsdatum in aufsteigender Reihenfolge."""
  createdAt_ASC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in absteigender Reihenfolge.
  """
  updatedAt_DESC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in aufsteigender Reihenfolge.
  """
  updatedAt_ASC
  """
  Sortierung nach dem Veröffentlichungsdatum in absteigender Reihenfolge.
  """
  publishedAt_DESC
  """
  Sortierung nach dem Veröffentlichungsdatum in aufsteigender Reihenfolge.
  """
  publishedAt_ASC
  """
  Sortierung nach dem Veröffentlichungsdatum in absteigender Reihenfolge.
  """
  publicationDate_DESC
  """
  Sortierung nach dem Veröffentlichungsdatum in aufsteigender Reihenfolge.
  """
  publicationDate_ASC
  """Sortierung nach der ID in absteigender Reihenfolge."""
  id_DESC
  """Sortierung nach der ID in aufsteigender Reihenfolge."""
  id_ASC
}


type GeoLocation {
  """Eindeutiger Bezeichner für die Geolocation."""
  id: ID
  """Breitengrad der Geolocation."""
  latitude: Float
  """Längengrad der Geolocation."""
  longitude: Float
}


input GeoLocationInput {
  """Breitengrad der Geolocation als Eingabe."""
  latitude: AnyPrimitive
  """Längengrad der Geolocation als Eingabe."""
  longitude: AnyPrimitive
}


"""
Ein spezieller JSON-Typ, der mehrsprachigen Text repräsentiert, z.B. in verschiedenen Sprachen wie Deutsch und Englisch.
"""
scalar I18nJSON


"""Repräsentiert untypisiertes JSON."""
scalar JSON


type Location {
  """Abteilung oder Bereich, zu dem der Standort gehört."""
  department: String
  """Bezirk, in dem sich der Standort befindet."""
  district: String
  """
  Geographische Informationen (Breitengrad und Längengrad) des Standorts.
  """
  geoLocation: GeoLocation
  """Eindeutiger Bezeichner für den Standort."""
  id: ID
  """Name des Standorts."""
  name: String
  """Name der Region, in der sich der Standort befindet."""
  regionName: String
  """Bundesland oder Staat, in dem sich der Standort befindet."""
  state: String
}


input LocationInput {
  """Name des Standorts als Eingabe."""
  name: String
  """Abteilung oder Bereich, zu dem der Standort gehört, als Eingabe."""
  department: String
  """Bezirk, in dem sich der Standort befindet, als Eingabe."""
  district: String
  """Name der Region, in der sich der Standort befindet, als Eingabe."""
  regionName: String
  """Bundesland oder Staat, in dem sich der Standort befindet, als Eingabe."""
  state: String
  """
  Geographische Informationen (Breitengrad und Längengrad) des Standorts als Eingabe.
  """
  geoLocation: GeoLocationInput
}


type Lunch {
  """Zeitstempel, wann das Mittagessen erstellt wurde."""
  createdAt: String
  """Liste der Daten, an denen das Mittagessen angeboten wird."""
  dates: [Date!]
  """Eindeutiger Bezeichner für das Mittagessen."""
  id: ID
  """Datum, an dem das Mittagessen aufgelistet wurde."""
  listDate: String
  """Liste der Mittagessen-Angebote."""
  lunchOffers: [LunchOffer!]
  """Der Ort von Interesse, an dem das Mittagessen angeboten wird."""
  pointOfInterest: PointOfInterest!
  """Attribute des Ortes von Interesse in Bezug auf das Mittagessen."""
  pointOfInterestAttributes: String
  """Beschreibung oder Text zum Mittagessen."""
  text: String
  """Zeitstempel, wann das Mittagessen zuletzt aktualisiert wurde."""
  updatedAt: String
}


input LunchInput {
  """Beschreibung oder Text zum Mittagessen als Eingabe."""
  text: String
  """Liste der Daten, an denen das Mittagessen angeboten wird, als Eingabe."""
  dates: [DateInput!]
  """Liste der Mittagessen-Angebote als Eingabe."""
  lunchOffers: [LunchOfferInput!]
  """
  Eindeutiger Bezeichner des Ortes von Interesse, an dem das Mittagessen angeboten wird, als Eingabe.
  """
  pointOfInterestId: ID
  """
  Attribute des Ortes von Interesse in Bezug auf das Mittagessen als Eingabe.
  """
  pointOfInterestAttributes: String
}


type LunchOffer {
  """Zeitstempel, wann das Mittagessen-Angebot erstellt wurde."""
  createdAt: String
  """Eindeutiger Bezeichner für das Mittagessen-Angebot."""
  id: ID
  """Name des Mittagessen-Angebots."""
  name: String
  """Preis des Mittagessen-Angebots."""
  price: String
  """Zeitstempel, wann das Mittagessen-Angebot zuletzt aktualisiert wurde."""
  updatedAt: String
}


input LunchOfferInput {
  """Name des Mittagessen-Angebots als Eingabe."""
  name: String
  """Preis des Mittagessen-Angebots als Eingabe."""
  price: String
}


enum LunchesOrder {
  """Sortierung nach Erstellungsdatum in absteigender Reihenfolge."""
  createdAt_DESC
  """Sortierung nach Erstellungsdatum in aufsteigender Reihenfolge."""
  createdAt_ASC
  """Sortierung nach Aktualisierungsdatum in absteigender Reihenfolge."""
  updatedAt_DESC
  """Sortierung nach Aktualisierungsdatum in aufsteigender Reihenfolge."""
  updatedAt_ASC
  """Sortierung nach ID in absteigender Reihenfolge."""
  id_DESC
  """Sortierung nach ID in aufsteigender Reihenfolge."""
  id_ASC
}


type MediaContent {
  """Beschreibungstext oder Bildunterschrift für den Medieninhalt."""
  captionText: String
  """Der Typ des Inhalts, z.B. Bild, Video oder Audio."""
  contentType: String
  """Informationen zum Urheberrecht für den Medieninhalt."""
  copyright: String
  """Die Höhe des Medieninhalts in Pixeln."""
  height: Int
  """Eindeutiger Bezeichner für den Medieninhalt."""
  id: ID
  """Die URL-Quelle des Medieninhalts."""
  sourceUrl: WebUrl
  """Die Breite des Medieninhalts in Pixeln."""
  width: Int
}


input MediaContentInput {
  """
  Beschreibungstext oder Bildunterschrift für den Medieninhalt als Eingabe.
  """
  captionText: String
  """Informationen zum Urheberrecht für den Medieninhalt als Eingabe."""
  copyright: String
  """Die Höhe des Medieninhalts in Pixeln als Eingabe."""
  height: AnyPrimitive
  """Die Breite des Medieninhalts in Pixeln als Eingabe."""
  width: AnyPrimitive
  """Der Typ des Inhalts, z.B. Bild, Video oder Audio als Eingabe."""
  contentType: String
  """Die URL-Quelle des Medieninhalts als Eingabe."""
  sourceUrl: WebUrlInput
}


type Mutation {
  assignWasteLocationToTour(
    """Eindeutiger Bezeichner für die Tour."""
    id: ID
    """
    Erzwingt das Erstellen der Müllsammelstelle für die Tour, auch wenn sie bereits existiert.
    """
    forceCreate: Boolean
    """
    Eindeutiger Bezeichner für die Tour, der die Müllsammelstelle zugewiesen wird.
    """
    tourId: ID
    """Gibt an, ob die Müllsammelstelle der Tour zugewiesen wird."""
    tourValue: Boolean
    """Eindeutiger Bezeichner für die Adresse der Müllsammelstelle."""
    addressId: ID
  ): AssignWasteLocationToTourPayload!
  changeVisibility(
    """
    Eindeutiger Bezeichner des Datensatzes, dessen Sichtbarkeit geändert werden soll.
    """
    id: ID!
    """Der Typ des Datensatzes, dessen Sichtbarkeit geändert wird."""
    recordType: String!
    """Gibt an, ob der Datensatz sichtbar gemacht wird oder nicht."""
    visible: Boolean!
  ): Status!
  commentSurvey(
    """Eindeutiger Bezeichner der Umfrage, die kommentiert wird."""
    surveyId: ID!
    """Der Kommentar, der zur Umfrage hinzugefügt wird."""
    message: String!
  ): Status!
  createAppUserContent(
    """Quelle der Daten, die vom Benutzer bereitgestellt wurden."""
    dataSource: String
    """Der Typ der bereitgestellten Daten."""
    dataType: String
    """Der Inhalt, der vom Benutzer erstellt wurde."""
    content: String
  ): AppUserContent!
  createEventRecord(
    """Eindeutiger Bezeichner für das Ereignis."""
    id: ID
    """
    Erzwingt das Erstellen des Ereignisses, auch wenn es bereits existiert.
    """
    forceCreate: Boolean
    """ID des übergeordneten Ereignisses, falls zutreffend."""
    parentId: Int
    """Beschreibung des Ereignisses."""
    description: String
    """Externe ID des Ereignisses, falls es von einem anderen System stammt."""
    externalId: String
    """Titel des Ereignisses."""
    title: String
    """Liste der Daten und Zeiten, die mit dem Ereignis verbunden sind."""
    dates: [DateInput!]
    """Gibt an, ob das Ereignis wiederholt wird."""
    repeat: Boolean
    """Details zur Wiederholungsdauer des Ereignisses."""
    repeatDuration: RepeatDurationInput
    """Der Name der Kategorie, zu der das Ereignis gehört."""
    categoryName: String
    """Liste der Kategorien, zu denen das Ereignis gehört."""
    categories: [CategoryInput!]
    """Name der Region, in der das Ereignis stattfindet."""
    regionName: String
    """Details zur Region, in der das Ereignis stattfindet."""
    region: RegionInput
    """Liste der Adressen, die mit dem Ereignis verbunden sind."""
    addresses: [AddressInput!]
    """Details zum Standort des Ereignisses."""
    location: LocationInput
    """Liste der Kontakte, die mit dem Ereignis verbunden sind."""
    contacts: [ContactInput!]
    """Liste von URLs, die mit dem Ereignis verbunden sind."""
    urls: [WebUrlInput!]
    """Liste der Medieninhalte, die mit dem Ereignis verbunden sind."""
    mediaContents: [MediaContentInput!]
    """Organisator des Ereignisses."""
    organizer: OperatingCompanyInput
    """Preisinformationen für das Ereignis."""
    priceInformations: [PriceInput!]
    """Informationen zur Barrierefreiheit des Ereignisses."""
    accessibilityInformation: AccessibilityInformationInput
    """Liste der Tags, die mit dem Ereignis verbunden sind."""
    tags: [String!]
  ): EventRecord!
  createGenericItem(
    """Eindeutiger Bezeichner für das generische Element."""
    id: ID
    """
    Erzwingt das Erstellen des generischen Elements, auch wenn es bereits existiert.
    """
    forceCreate: Boolean
    """Gibt an, ob eine Push-Benachrichtigung gesendet werden soll."""
    pushNotification: Boolean
    """Der Autor des generischen Elements."""
    author: String
    """Der Titel des generischen Elements."""
    title: String
    """Typ des generischen Elements."""
    genericType: String
    """
    Externe ID des generischen Elements, falls es von einem anderen System stammt.
    """
    externalId: String
    """Veröffentlichungsdatum des generischen Elements."""
    publicationDate: String
    """Zeitstempel, wann das generische Element veröffentlicht wurde."""
    publishedAt: String
    """Der Name der Kategorie, zu der das generische Element gehört."""
    categoryName: String
    """
    Zusätzliche, unstrukturierte Daten, die mit dem generischen Element verbunden sind.
    """
    payload: JSON
    """Liste der Kontakte, die mit dem generischen Element verbunden sind."""
    contacts: [ContactInput!]
    """
    Liste der Unterelemente, die diesem generischen Element zugeordnet sind.
    """
    genericItems: [GenericItemInput!]
    """Liste der Unternehmen, die mit dem generischen Element verbunden sind."""
    companies: [OperatingCompanyInput!]
    """Liste der Kategorien, zu denen das generische Element gehört."""
    categories: [CategoryInput!]
    """Liste der URLs, die mit dem generischen Element verbunden sind."""
    webUrls: [WebUrlInput!]
    """Liste der Adressen, die mit dem generischen Element verbunden sind."""
    addresses: [AddressInput!]
    """
    Liste der Inhaltsblöcke, die mit dem generischen Element verbunden sind.
    """
    contentBlocks: [ContentBlockInput!]
    """Öffnungszeiten, die mit dem generischen Element verbunden sind."""
    openingHours: [OpeningHourInput!]
    """Preisinformationen, die mit dem generischen Element verbunden sind."""
    priceInformations: [PriceInput!]
    """
    Liste der Medieninhalte, die mit dem generischen Element verknüpft sind.
    """
    mediaContents: [MediaContentInput!]
    """Liste der Standorte, die mit dem generischen Element verbunden sind."""
    locations: [LocationInput!]
    """
    Liste der Daten und Zeiten, die mit dem generischen Element verbunden sind.
    """
    dates: [DateInput!]
    """
    Liste der Barrierefreiheitsinformationen, die mit dem generischen Element verbunden sind.
    """
    accessibilityInformations: [AccessibilityInformationInput!]
  ): GenericItem!
  createNewsItem(
    """Eindeutiger Bezeichner für den Nachrichtenartikel."""
    id: ID
    """
    Erzwingt das Erstellen des Nachrichtenartikels, auch wenn er bereits existiert.
    """
    forceCreate: Boolean
    """Gibt an, ob eine Push-Benachrichtigung gesendet werden soll."""
    pushNotification: Boolean
    """Der Autor des Nachrichtenartikels."""
    author: String
    """Der Titel des Nachrichtenartikels."""
    title: String
    """
    Externe ID des Nachrichtenartikels, falls er von einem anderen System stammt.
    """
    externalId: String
    """Gibt an, ob die vollständige Version des Artikels angezeigt wird."""
    fullVersion: Boolean
    """Anzahl der Zeichen, die angezeigt werden sollen."""
    charactersToBeShown: Int
    """Typ des Nachrichtenartikels."""
    newsType: String
    """Veröffentlichungsdatum des Nachrichtenartikels."""
    publicationDate: String
    """Zeitstempel, wann der Nachrichtenartikel veröffentlicht wurde."""
    publishedAt: String
    """Gibt an, ob das Veröffentlichungsdatum angezeigt werden soll."""
    showPublishDate: Boolean
    """Der Name der Kategorie, zu der der Nachrichtenartikel gehört."""
    categoryName: String
    """Liste der Kategorien, zu denen der Nachrichtenartikel gehört."""
    categories: [CategoryInput!]
    """URL der Quelle des Nachrichtenartikels."""
    sourceUrl: WebUrlInput
    """Adresse, die mit dem Nachrichtenartikel verbunden ist."""
    address: AddressInput
    """
    Liste der Inhaltsblöcke, die mit dem Nachrichtenartikel verbunden sind.
    """
    contentBlocks: [ContentBlockInput!]
  ): NewsItem!
  createOrUpdateStaticContent(
    """
    Erzwingt das Erstellen oder Aktualisieren des statischen Inhalts, auch wenn er bereits existiert.
    """
    forceCreate: Boolean
    """Eindeutiger Bezeichner für den statischen Inhalt."""
    id: ID
    """Der Name des statischen Inhalts."""
    name: String
    """Der Inhalt, der erstellt oder aktualisiert werden soll."""
    content: String
    """Der Datentyp des Inhalts."""
    dataType: String!
    """Die Version des statischen Inhalts."""
    version: String
  ): PublicHtmlFile!
  createOrUpdateSurveyPoll(
    """
    Erzwingt das Erstellen oder Aktualisieren der Umfrage, auch wenn sie bereits existiert.
    """
    forceCreate: Boolean
    """Eindeutiger Bezeichner für die Umfrage."""
    id: ID
    """Der Titel der Umfrage in verschiedenen Sprachen."""
    title: I18nJSON
    """Beschreibung der Umfrage in verschiedenen Sprachen."""
    description: I18nJSON
    """Das Datum der Umfrage."""
    date: DateInput
    """Eindeutiger Bezeichner für die Frage der Umfrage."""
    questionId: ID
    """Der Titel der Umfragefrage in verschiedenen Sprachen."""
    questionTitle: I18nJSON!
    """Gibt an, ob mehrere Antworten auf die Frage erlaubt sind."""
    questionAllowMultipleResponses: I18nJSON
    """Liste der Antwortoptionen für die Umfrage."""
    responseOptions: [JSON!]!
    """Gibt an, ob Kommentare zu der Umfrage abgegeben werden können."""
    canComment: Boolean
    """Gibt an, ob die Umfrage mehrsprachig ist."""
    isMultilingual: Boolean
  ): SurveyPoll!
  createPointOfInterest(
    """Eindeutiger Bezeichner für den Ort von Interesse."""
    id: ID
    """
    Erzwingt das Erstellen des Ortes von Interesse, auch wenn er bereits existiert.
    """
    forceCreate: Boolean
    """Der Name des Ortes von Interesse."""
    name: String!
    """Eine Beschreibung des Ortes von Interesse."""
    description: String
    """Beschreibung des Ortes von Interesse für mobile Geräte."""
    mobileDescription: String
    """Gibt an, ob der Ort von Interesse aktiv ist."""
    active: Boolean
    """Der Name der Kategorie, zu der der Ort von Interesse gehört."""
    categoryName: String
    """
    Zusätzliche, unstrukturierte Daten, die mit dem Ort von Interesse verbunden sind.
    """
    payload: JSON
    """Liste der Kategorien, zu denen der Ort von Interesse gehört."""
    categories: [CategoryInput!]
    """Liste der Adressen, die mit dem Ort von Interesse verbunden sind."""
    addresses: [AddressInput!]
    """Kontaktinformationen für den Ort von Interesse."""
    contact: ContactInput
    """Preisinformationen für den Ort von Interesse."""
    priceInformations: [PriceInput!]
    """Öffnungszeiten für den Ort von Interesse."""
    openingHours: [OpeningHourInput!]
    """Betreibergesellschaft des Ortes von Interesse."""
    operatingCompany: OperatingCompanyInput
    """Liste der URLs, die mit dem Ort von Interesse verbunden sind."""
    webUrls: [WebUrlInput!]
    """Liste der Medieninhalte, die mit dem Ort von Interesse verknüpft sind."""
    mediaContents: [MediaContentInput!]
    """Geographische Lage des Ortes von Interesse."""
    location: LocationInput
    """Zertifikate, die dem Ort von Interesse zugeordnet sind."""
    certificates: [CertificateInput!]
    """Barrierefreiheitsinformationen für den Ort von Interesse."""
    accessibilityInformation: AccessibilityInformationInput
    """Liste der Tags, die mit dem Ort von Interesse verbunden sind."""
    tags: [String!]
    """
    Liste der Mittagessen-Angebote, die am Ort von Interesse angeboten werden.
    """
    lunches: [LunchInput!]
  ): PointOfInterest!
  createTour(
    """Eindeutiger Bezeichner für die Tour."""
    id: ID
    """Erzwingt das Erstellen der Tour, auch wenn sie bereits existiert."""
    forceCreate: Boolean
    """Der Name der Tour."""
    name: String!
    """Eine Beschreibung der Tour."""
    description: String
    """Beschreibung der Tour für mobile Geräte."""
    mobileDescription: String
    """Gibt an, ob die Tour aktiv ist."""
    active: Boolean
    """Der Name der Kategorie, zu der die Tour gehört."""
    categoryName: String
    """Zusätzliche, unstrukturierte Daten, die mit der Tour verbunden sind."""
    payload: JSON
    """Liste der Kategorien, zu denen die Tour gehört."""
    categories: [CategoryInput!]
    """Liste der Adressen, die mit der Tour verbunden sind."""
    addresses: [AddressInput!]
    """Kontaktinformationen für die Tour."""
    contact: ContactInput
    """Betreibergesellschaft der Tour."""
    operatingCompany: OperatingCompanyInput
    """Liste der URLs, die mit der Tour verbunden sind."""
    webUrls: [WebUrlInput!]
    """Liste der Medieninhalte, die mit der Tour verknüpft sind."""
    mediaContents: [MediaContentInput!]
    """Geographische Lage der Tour."""
    location: LocationInput
    """Zertifikate, die der Tour zugeordnet sind."""
    certificates: [CertificateInput!]
    """Barrierefreiheitsinformationen für die Tour."""
    accessibilityInformation: AccessibilityInformationInput
    """Länge der Tour in Kilometern."""
    lengthKm: Int!
    """Die Art der Fortbewegung während der Tour."""
    meansOfTransportation: String
    """Geographische Daten der Tourstrecke."""
    geometryTourData: [GeoLocationInput!]
    """Liste der Tags, die mit der Tour verbunden sind."""
    tags: [String!]
    """Liste der Tourstopps, die mit der Tour verbunden sind."""
    tourStops: [TourStopInput!]
  ): Tour!
  createWasteLocation(
    """Eindeutiger Bezeichner für den Müllsammelort."""
    id: ID
    """
    Erzwingt das Erstellen des Müllsammelorts, auch wenn er bereits existiert.
    """
    forceCreate: Boolean
    """Straßenname des Müllsammelorts."""
    street: String
    """Stadt des Müllsammelorts."""
    city: String
    """Postleitzahl des Müllsammelorts."""
    zip: String
  ): Address!
  createWastePickUpTime(
    """Datum der Müllabholung."""
    pickupDate: String!
    """Eindeutiger Bezeichner für den Typ des Müllsammelorts."""
    wasteLocationTypeId: Int
    """Typ des Müllsammelorts als Eingabe."""
    wasteLocationType: WasteLocationTypeInput
  ): WastePickUpTime!
  createWasteTour(
    """Eindeutiger Bezeichner für die Mülltour."""
    id: ID
    """Erzwingt das Erstellen der Mülltour, auch wenn sie bereits existiert."""
    forceCreate: Boolean
    """Titel der Mülltour."""
    title: String
    """Art des Mülls, der während der Tour gesammelt wird."""
    wasteType: String
  ): WasteTour!
  destroyRecord(
    """Eindeutiger Bezeichner des zu löschenden Datensatzes."""
    id: ID
    """Der Typ des Datensatzes, der gelöscht werden soll."""
    recordType: String!
    """Externe ID des zu löschenden Datensatzes, falls zutreffend."""
    externalId: Int
  ): Destroy!
  updateWasteTourDates(
    """Eindeutiger Bezeichner der Mülltour, deren Daten aktualisiert werden."""
    id: ID!
    """Das Jahr, für das die Daten der Mülltour aktualisiert werden."""
    year: String!
    """Liste der neuen Abholdaten für die Mülltour."""
    dates: [String!]
  ): UpdateWasteTourDatesPayload!
  """\`voteForSurvey\` is deprecated. Use \`votesForSurvey\` instead."""
  voteForSurvey(
    """
    Eindeutiger Bezeichner für die Antwortoption, deren Stimmen erhöht werden.
    """
    increaseId: ID
    """
    Eindeutiger Bezeichner für die Antwortoption, deren Stimmen verringert werden.
    """
    decreaseId: ID
  ): Status! @deprecated(reason: "Verwenden Sie stattdessen \`votesForSurvey\`.")
  votesForSurvey(
    """
    Liste der eindeutigen Bezeichner der Antwortoptionen, deren Stimmen erhöht werden.
    """
    increaseId: [ID!]
    """
    Liste der eindeutigen Bezeichner der Antwortoptionen, deren Stimmen verringert werden.
    """
    decreaseId: [ID!]
  ): Status!
}


type NewsItem {
  """Die Adresse, die mit dem Nachrichtenartikel verbunden ist."""
  address: Address
  """Der Autor des Nachrichtenartikels."""
  author: String
  """Liste der Kategorien, denen der Nachrichtenartikel zugeordnet ist."""
  categories: [Category!]
  """Anzahl der Zeichen, die im Nachrichtenartikel angezeigt werden sollen."""
  charactersToBeShown: String
  """Liste der Inhaltsblöcke, die im Nachrichtenartikel enthalten sind."""
  contentBlocks: [ContentBlock!]
  """Zeitstempel, wann der Nachrichtenartikel erstellt wurde."""
  createdAt: String
  """Der Datenanbieter, der den Nachrichtenartikel bereitgestellt hat."""
  dataProvider: DataProvider
  """
  Externe ID des Nachrichtenartikels, falls er von einem anderen System stammt.
  """
  externalId: String
  """Gibt an, ob die vollständige Version des Artikels angezeigt wird."""
  fullVersion: Boolean
  """Eindeutiger Bezeichner für den Nachrichtenartikel."""
  id: ID
  """Der Typ des Nachrichtenartikels."""
  newsType: String
  """Veröffentlichungsdatum des Nachrichtenartikels."""
  publicationDate: String
  """Zeitstempel, wann der Nachrichtenartikel veröffentlicht wurde."""
  publishedAt: String
  """
  Zeitstempel, wann die Push-Benachrichtigung für den Artikel gesendet wurde.
  """
  pushNotificationsSentAt: String
  """Einstellungen, die mit dem Nachrichtenartikel verbunden sind."""
  settings: Setting
  """Gibt an, ob das Veröffentlichungsdatum angezeigt werden soll."""
  showPublishDate: Boolean
  """Die URL-Quelle des Nachrichtenartikels."""
  sourceUrl: WebUrl
  """Der Titel des Nachrichtenartikels."""
  title: String
  """Zeitstempel, wann der Nachrichtenartikel zuletzt aktualisiert wurde."""
  updatedAt: String
  """Gibt an, ob der Nachrichtenartikel sichtbar ist."""
  visible: Boolean
}


enum NewsItemsOrder {
  """Sortierung nach dem Erstellungsdatum in absteigender Reihenfolge."""
  createdAt_DESC
  """Sortierung nach dem Erstellungsdatum in aufsteigender Reihenfolge."""
  createdAt_ASC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in absteigender Reihenfolge.
  """
  updatedAt_DESC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in aufsteigender Reihenfolge.
  """
  updatedAt_ASC
  """
  Sortierung nach dem Veröffentlichungsdatum in absteigender Reihenfolge.
  """
  publishedAt_DESC
  """
  Sortierung nach dem Veröffentlichungsdatum in aufsteigender Reihenfolge.
  """
  publishedAt_ASC
  """Sortierung nach der ID in absteigender Reihenfolge."""
  id_DESC
  """Sortierung nach der ID in aufsteigender Reihenfolge."""
  id_ASC
}


type OpenWeatherMap {
  """Liste von Wetterwarnungen im JSON-Format."""
  alerts: [JSON!]
  """Zeitstempel, wann die Wetterdaten erstellt wurden."""
  createdAt: String
  """Aktuelle Wetterdaten im JSON-Format."""
  current: JSON
  """Tägliche Wettervorhersage im JSON-Format."""
  daily: [JSON!]
  """Stündliche Wettervorhersage im JSON-Format."""
  hourly: [JSON!]
  """Eindeutiger Bezeichner für die Wetterdaten."""
  id: ID
  """Breitengrad des Standorts."""
  lat: Float
  """Längengrad des Standorts."""
  lon: Float
  """Zeitstempel, wann die Wetterdaten zuletzt aktualisiert wurden."""
  updatedAt: String
}


enum OpenWeatherMapsOrder {
  """Sortierung nach dem Erstellungsdatum in absteigender Reihenfolge."""
  createdAt_DESC
  """Sortierung nach dem Erstellungsdatum in aufsteigender Reihenfolge."""
  createdAt_ASC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in absteigender Reihenfolge.
  """
  updatedAt_DESC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in aufsteigender Reihenfolge.
  """
  updatedAt_ASC
  """Sortierung nach der ID in absteigender Reihenfolge."""
  id_DESC
  """Sortierung nach der ID in aufsteigender Reihenfolge."""
  id_ASC
}


type OpeningHour {
  """Das Startdatum der Öffnungszeit."""
  dateFrom: String
  """Das Enddatum der Öffnungszeit."""
  dateTo: String
  """Beschreibung der Öffnungszeiten."""
  description: String
  """Eindeutiger Bezeichner für die Öffnungszeiten."""
  id: ID
  """Gibt an, ob der Standort geöffnet ist."""
  open: Boolean
  """Sortiernummer für die Reihenfolge der Öffnungszeiten."""
  sortNumber: Int
  """Die Startzeit der Öffnungszeiten."""
  timeFrom: String
  """Die Endzeit der Öffnungszeiten."""
  timeTo: String
  """Wochentag der Öffnungszeiten."""
  weekday: String
}


input OpeningHourInput {
  """Wochentag der Öffnungszeiten als Eingabe."""
  weekday: String
  """Das Startdatum der Öffnungszeit als Eingabe."""
  dateFrom: String
  """Das Enddatum der Öffnungszeit als Eingabe."""
  dateTo: String
  """Die Startzeit der Öffnungszeiten als Eingabe."""
  timeFrom: String
  """Die Endzeit der Öffnungszeiten als Eingabe."""
  timeTo: String
  """Sortiernummer für die Reihenfolge der Öffnungszeiten als Eingabe."""
  sortNumber: Int
  """Gibt an, ob der Standort geöffnet ist als Eingabe."""
  open: Boolean
  """Beschreibung der Öffnungszeiten als Eingabe."""
  description: String
}


type OperatingCompany {
  """Adresse des Unternehmens."""
  address: Address
  """Kontaktinformationen des Unternehmens."""
  contact: Contact
  """Eindeutiger Bezeichner für das Unternehmen."""
  id: ID
  """Name des Unternehmens."""
  name: String
}


input OperatingCompanyInput {
  """Name des Unternehmens als Eingabe."""
  name: String
  """Adresse des Unternehmens als Eingabe."""
  address: AddressInput
  """Kontaktinformationen des Unternehmens als Eingabe."""
  contact: ContactInput
}


type PointOfInterest {
  """Informationen zur Barrierefreiheit für den Ort von Interesse."""
  accessibilityInformation: AccessibilityInformation
  """Gibt an, ob der Ort von Interesse aktiv ist."""
  active: Boolean
  """Liste der Adressen, die mit dem Ort von Interesse verbunden sind."""
  addresses: [Address!]
  """Liste der Kategorien, zu denen der Ort von Interesse gehört."""
  categories: [Category!]
  """Hauptkategorie, zu der der Ort von Interesse gehört."""
  category: Category
  """Zertifikate, die dem Ort von Interesse zugeordnet sind."""
  certificates: [Certificate!]
  """Kontaktinformationen für den Ort von Interesse."""
  contact: Contact
  """Zeitstempel, wann der Ort von Interesse erstellt wurde."""
  createdAt: String
  """Datenanbieter, der den Ort von Interesse bereitstellt."""
  dataProvider: DataProvider
  """Beschreibung des Ortes von Interesse."""
  description: String
  """Eindeutiger Bezeichner für den Ort von Interesse."""
  id: ID
  """Geographische Lage des Ortes von Interesse."""
  location: Location
  """
  Liste der Mittagessen-Angebote, die am Ort von Interesse verfügbar sind.
  """
  lunches: [Lunch!]
  """Liste der Medieninhalte, die mit dem Ort von Interesse verknüpft sind."""
  mediaContents: [MediaContent!]
  """Beschreibung des Ortes von Interesse für mobile Geräte."""
  mobileDescription: String
  """Name des Ortes von Interesse."""
  name: String
  """Öffnungszeiten des Ortes von Interesse."""
  openingHours: [OpeningHour!]
  """Betreibergesellschaft des Ortes von Interesse."""
  operatingCompany: OperatingCompany
  """
  Zusätzliche, unstrukturierte Daten, die mit dem Ort von Interesse verbunden sind.
  """
  payload: JSON
  """Preisinformationen für den Ort von Interesse."""
  priceInformations: [Price!]
  """Einstellungen, die mit dem Ort von Interesse verbunden sind."""
  settings: Setting
  """Liste der Tags, die dem Ort von Interesse zugeordnet sind."""
  tagList: [String!]
  """Zeitstempel, wann der Ort von Interesse zuletzt aktualisiert wurde."""
  updatedAt: String
  """Gibt an, ob der Ort von Interesse sichtbar ist."""
  visible: Boolean
  """Liste der URLs, die mit dem Ort von Interesse verbunden sind."""
  webUrls: [WebUrl!]
}


enum PointsOfInterestOrder {
  """Sortierung nach dem Erstellungsdatum in absteigender Reihenfolge."""
  createdAt_DESC
  """Sortierung nach dem Erstellungsdatum in aufsteigender Reihenfolge."""
  createdAt_ASC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in absteigender Reihenfolge.
  """
  updatedAt_DESC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in aufsteigender Reihenfolge.
  """
  updatedAt_ASC
  """Sortierung nach der ID in absteigender Reihenfolge."""
  id_DESC
  """Sortierung nach der ID in aufsteigender Reihenfolge."""
  id_ASC
  """Sortierung nach dem Namen in absteigender Reihenfolge."""
  name_DESC
  """Sortierung nach dem Namen in aufsteigender Reihenfolge."""
  name_ASC
  """Zufällige Sortierung der Orte von Interesse."""
  RAND
}


type Price {
  """Das Mindestalter, für das der Preis gilt."""
  ageFrom: Int
  """Das Höchstalter, für das der Preis gilt."""
  ageTo: Int
  """Der Betrag, den der Preis ausmacht."""
  amount: Float
  """Die Kategorie, zu der der Preis gehört."""
  category: String
  """Beschreibung des Preises."""
  description: String
  """Gibt an, ob es sich um einen Gruppenpreis handelt."""
  groupPrice: Boolean
  """Eindeutiger Bezeichner für den Preis."""
  id: ID
  """Maximale Anzahl von Erwachsenen, die für diesen Preis gelten."""
  maxAdultCount: Int
  """Maximale Anzahl von Kindern, die für diesen Preis gelten."""
  maxChildrenCount: Int
  """Minimale Anzahl von Erwachsenen, die für diesen Preis gelten."""
  minAdultCount: Int
  """Minimale Anzahl von Kindern, die für diesen Preis gelten."""
  minChildrenCount: Int
  """Name des Preises."""
  name: String
}


input PriceInput {
  """Name des Preises als Eingabe."""
  name: String
  """Der Betrag, den der Preis ausmacht, als Eingabe."""
  amount: AnyPrimitive
  """Gibt an, ob es sich um einen Gruppenpreis handelt, als Eingabe."""
  groupPrice: Boolean
  """Das Mindestalter, für das der Preis gilt, als Eingabe."""
  ageFrom: Int
  """Das Höchstalter, für das der Preis gilt, als Eingabe."""
  ageTo: Int
  """
  Minimale Anzahl von Erwachsenen, die für diesen Preis gelten, als Eingabe.
  """
  minAdultCount: Int
  """
  Maximale Anzahl von Erwachsenen, die für diesen Preis gelten, als Eingabe.
  """
  maxAdultCount: Int
  """Minimale Anzahl von Kindern, die für diesen Preis gelten, als Eingabe."""
  minChildrenCount: Int
  """Maximale Anzahl von Kindern, die für diesen Preis gelten, als Eingabe."""
  maxChildrenCount: Int
  """Beschreibung des Preises als Eingabe."""
  description: String
  """Die Kategorie, zu der der Preis gehört, als Eingabe."""
  category: String
}


type PublicHtmlFile {
  """Der Inhalt der öffentlichen HTML-Datei."""
  content: String
  """Zeitstempel, wann die HTML-Datei erstellt wurde."""
  createdAt: String
  """Der Datentyp der öffentlichen Datei."""
  dataType: String
  """Eindeutiger Bezeichner für die öffentliche HTML-Datei."""
  id: ID
  """Name der öffentlichen HTML-Datei."""
  name: String
  """Zeitstempel, wann die HTML-Datei zuletzt aktualisiert wurde."""
  updatedAt: String
  """Version der öffentlichen HTML-Datei."""
  version: String
}


type PublicJsonFile {
  """Der Inhalt der öffentlichen JSON-Datei."""
  content: JSON!
  """Zeitstempel, wann die JSON-Datei erstellt wurde."""
  createdAt: String
  """Der Datentyp der öffentlichen JSON-Datei."""
  dataType: String
  """Eindeutiger Bezeichner für die öffentliche JSON-Datei."""
  id: ID
  """Name der öffentlichen JSON-Datei."""
  name: String!
  """Zeitstempel, wann die JSON-Datei zuletzt aktualisiert wurde."""
  updatedAt: String
  """Version der öffentlichen JSON-Datei."""
  version: String
}


type Query {
  categories(
    """Maximale Anzahl der zurückgegebenen Kategorien."""
    limit: Int
    """Anzahl der übersprungenen Kategorien vor der Rückgabe."""
    skip: Int
    """Liste der IDs, um spezifische Kategorien zu filtern."""
    ids: [ID]
    """Liste der IDs, die von den Ergebnissen ausgeschlossen werden."""
    excludeIds: [ID]
    """Reihenfolge, in der die Kategorien sortiert werden."""
    order: CategoriesOrder = name_ASC
  ): [Category!]!
  """Gibt die gesamte Kategoriehierarchie als JSON zurück."""
  categoryTree: JSON!
  """
  Führt eine Directus-Abfrage aus und gibt die Ergebnisse als JSON zurück.
  """
  directus(query: String): JSON!
  """Gibt das Ereignis mit der angegebenen ID zurück."""
  eventRecord(id: ID!): EventRecord!
  eventRecords(
    """Datumsbereich, um die Ereignisse zu filtern."""
    dateRange: [String]
    """ID der Kategorie, um die Ereignisse zu filtern."""
    categoryId: ID
    """Anzahl der übersprungenen Ereignisse vor der Rückgabe."""
    skip: Int
    """Maximale Anzahl der zurückgegebenen Ereignisse."""
    limit: Int
    """Liste von Ereignis-IDs, um spezifische Ereignisse zu filtern."""
    ids: [ID]
    """Reihenfolge, in der die Ereignisse sortiert werden."""
    order: EventRecordsOrder = createdAt_DESC
    """Datenanbieter, um Ereignisse nach der Quelle zu filtern."""
    dataProvider: String
    """ID des Datenanbieters, um Ereignisse nach der Quelle zu filtern."""
    dataProviderId: ID
    """Maximale Anzahl der Ereignisse, die zurückgegeben werden sollen."""
    take: Int
    """Ort, um die Ereignisse nach Standort zu filtern."""
    location: String
  ): [EventRecord]
  """Gibt das generische Element mit der angegebenen ID zurück."""
  genericItem(id: ID!): GenericItem!
  genericItems(
    """ID der Kategorie, um die generischen Elemente zu filtern."""
    categoryId: ID
    """Datenanbieter, um generische Elemente nach der Quelle zu filtern."""
    dataProvider: String
    """
    ID des Datenanbieters, um generische Elemente nach der Quelle zu filtern.
    """
    dataProviderId: ID
    """Externe ID, um spezifische generische Elemente zu filtern."""
    externalId: ID
    """Der generische Typ, um die Elemente zu filtern."""
    genericType: String
    """Liste von IDs, um spezifische generische Elemente zu filtern."""
    ids: [ID]
    """Maximale Anzahl der zurückgegebenen generischen Elemente."""
    limit: Int
    """Reihenfolge, in der die generischen Elemente sortiert werden."""
    order: GenericItemOrder = createdAt_DESC
    """Anzahl der übersprungenen generischen Elemente vor der Rückgabe."""
    skip: Int
    """Ort, um die generischen Elemente nach Standort zu filtern."""
    location: String
  ): [GenericItem]
  """Gibt das Mittagessen mit der angegebenen ID zurück."""
  lunch(id: ID!): Lunch!
  lunches(
    """Datumsbereich, um die Mittagessen zu filtern."""
    dateRange: [String]
    """Maximale Anzahl der zurückgegebenen Mittagessen."""
    limit: Int
    """Anzahl der übersprungenen Mittagessen vor der Rückgabe."""
    skip: Int
    """Liste von IDs, um spezifische Mittagessen zu filtern."""
    ids: [ID]
    """Reihenfolge, in der die Mittagessen sortiert werden."""
    order: LunchesOrder = createdAt_DESC
  ): [Lunch!]!
  """Gibt den Nachrichtenartikel mit der angegebenen ID zurück."""
  newsItem(id: ID!): NewsItem!
  newsItems(
    """Maximale Anzahl der zurückgegebenen Nachrichtenartikel."""
    limit: Int
    """Anzahl der übersprungenen Nachrichtenartikel vor der Rückgabe."""
    skip: Int
    """Liste von IDs, um spezifische Nachrichtenartikel zu filtern."""
    ids: [ID]
    """Reihenfolge, in der die Nachrichtenartikel sortiert werden."""
    order: NewsItemsOrder = publishedAt_DESC
    """Datenanbieter, um Nachrichtenartikel nach der Quelle zu filtern."""
    dataProvider: String
    """
    ID des Datenanbieters, um Nachrichtenartikel nach der Quelle zu filtern.
    """
    dataProviderId: ID
    """
    Liste der IDs von Datenanbietern, die von den Ergebnissen ausgeschlossen werden sollen.
    """
    excludeDataProviderIds: [ID]
    """ID der Kategorie, um Nachrichtenartikel zu filtern."""
    categoryId: ID
    """Liste von Kategorie-IDs, um Nachrichtenartikel zu filtern."""
    categoryIds: [ID]
  ): [NewsItem]
  newsItemsDataProviders(
    """ID der Kategorie, um die Datenanbieter zu filtern."""
    categoryId: ID
    """Liste der Kategorie-IDs, um die Datenanbieter zu filtern."""
    categoryIds: [ID!]
  ): [DataProvider!]!
  """Gibt den Ort von Interesse mit der angegebenen ID zurück."""
  pointOfInterest(id: ID!): PointOfInterest!
  pointsOfInterest(
    """Maximale Anzahl der zurückgegebenen Orte von Interesse."""
    limit: Int
    """Anzahl der übersprungenen Orte von Interesse vor der Rückgabe."""
    skip: Int
    """Liste von IDs, um spezifische Orte von Interesse zu filtern."""
    ids: [ID]
    """Reihenfolge, in der die Orte von Interesse sortiert werden."""
    order: PointsOfInterestOrder = createdAt_DESC
    """Datenanbieter, um Orte von Interesse nach der Quelle zu filtern."""
    dataProvider: String
    """
    ID des Datenanbieters, um Orte von Interesse nach der Quelle zu filtern.
    """
    dataProviderId: ID
    """Die Kategorie, um Orte von Interesse zu filtern."""
    category: String
    """ID der Kategorie, um Orte von Interesse zu filtern."""
    categoryId: ID
    """Liste von Kategorie-IDs, um Orte von Interesse zu filtern."""
    categoryIds: [ID]
    """Ort, um die Orte von Interesse nach Standort zu filtern."""
    location: String
  ): [PointOfInterest]
  publicHtmlFile(
    """Name der öffentlichen HTML-Datei."""
    name: String!
    """Version der öffentlichen HTML-Datei."""
    version: String
  ): PublicHtmlFile!
  """Gibt eine Liste aller öffentlichen HTML-Dateien zurück."""
  publicHtmlFiles: [PublicHtmlFile!]!
  publicJsonFile(
    """Name der öffentlichen JSON-Datei."""
    name: String!
    """Version der öffentlichen JSON-Datei."""
    version: String
  ): PublicJsonFile!
  """Gibt eine Liste von Kommentaren zu einer Umfrage zurück."""
  surveyComments(surveyId: ID): [SurveyComment!]!
  surveys(
    """Liste von IDs, um spezifische Umfragen zu filtern."""
    ids: [ID]
    """Gibt an, ob nur laufende Umfragen zurückgegeben werden sollen."""
    ongoing: Boolean
    """Gibt an, ob nur archivierte Umfragen zurückgegeben werden sollen."""
    archived: Boolean
  ): [SurveyPoll!]!
  """Gibt die Tour mit der angegebenen ID zurück."""
  tour(id: ID!): Tour!
  tours(
    """Maximale Anzahl der zurückgegebenen Touren."""
    limit: Int
    """Anzahl der übersprungenen Touren vor der Rückgabe."""
    skip: Int
    """Liste von IDs, um spezifische Touren zu filtern."""
    ids: [ID]
    """Reihenfolge, in der die Touren sortiert werden."""
    order: ToursOrder = createdAt_DESC
    """Datenanbieter, um Touren nach der Quelle zu filtern."""
    dataProvider: String
    """ID des Datenanbieters, um Touren nach der Quelle zu filtern."""
    dataProviderId: ID
    """Die Kategorie, um Touren zu filtern."""
    category: String
    """ID der Kategorie, um Touren zu filtern."""
    categoryId: ID
    """Liste von Kategorie-IDs, um Touren zu filtern."""
    categoryIds: [ID]
    """Ort, um die Touren nach Standort zu filtern."""
    location: String
  ): [Tour!]!
  wasteAddresses(
    """Maximale Anzahl der zurückgegebenen Abfalladressen."""
    limit: Int
    """Anzahl der übersprungenen Abfalladressen vor der Rückgabe."""
    skip: Int
    """Liste von IDs, um spezifische Abfalladressen zu filtern."""
    ids: [ID]
    """Reihenfolge, in der die Abfalladressen sortiert werden."""
    order: WasteLocationOrder = createdAt_DESC
  ): [Address!]!
  """Gibt den Abfallort-Typ mit der angegebenen ID zurück."""
  wasteLocationType(id: ID!): WasteLocationType!
  """
  Gibt eine Liste der Abfallort-Typen zurück, die der angegebenen Tour zugeordnet sind.
  """
  wasteLocationTypes(tourId: ID): [WasteLocationType!]!
  """Gibt eine Liste der Abholzeiten für die angegebene Mülltour zurück."""
  wasteTourDates(tourId: ID!): [WastePickUpTime!]!
  """Gibt eine Liste der Mülltouren zurück."""
  wasteTours: [WasteTour!]!
  """Gibt die Wetterkarte mit der angegebenen ID zurück."""
  weatherMap(id: ID): OpenWeatherMap!
  weatherMaps(
    """Maximale Anzahl der zurückgegebenen Wetterkarten."""
    limit: Int
    """Anzahl der übersprungenen Wetterkarten vor der Rückgabe."""
    skip: Int
    """Liste von IDs, um spezifische Wetterkarten zu filtern."""
    ids: [ID]
    """Reihenfolge, in der die Wetterkarten sortiert werden."""
    order: OpenWeatherMapsOrder = createdAt_DESC
  ): [OpenWeatherMap]
}


type Region {
  """Eindeutiger Bezeichner für die Region."""
  id: ID
  """Name der Region."""
  name: String
}


input RegionInput {
  """Name der Region als Eingabe."""
  name: String
}


type RepeatDuration {
  """Enddatum der Wiederholungsdauer."""
  endDate: String
  """Gibt an, ob die Wiederholung jährlich erfolgt."""
  everyYear: Boolean
  """Eindeutiger Bezeichner für die Wiederholungsdauer."""
  id: ID
  """Startdatum der Wiederholungsdauer."""
  startDate: String
}


input RepeatDurationInput {
  """Startdatum der Wiederholungsdauer als Eingabe."""
  startDate: String
  """Enddatum der Wiederholungsdauer als Eingabe."""
  endDate: String
  """Gibt an, ob die Wiederholung jährlich erfolgt als Eingabe."""
  everyYear: Boolean
}


type Setting {
  """Gibt an, ob der Datensatz bei jedem Import neu erstellt werden soll."""
  alwaysRecreateOnImport: String
  """Gibt an, ob nur die Zusammenfassung angezeigt werden soll."""
  displayOnlySummary: String
  """Text des Links, der nur die Zusammenfassung anzeigt."""
  onlySummaryLinkText: String
}


type Status {
  """Eindeutiger Bezeichner für den Status."""
  id: ID
  """Beschreibung des Status."""
  status: String
  """Statuscode des Ergebnisses."""
  statusCode: Int
}


type SurveyComment {
  """Zeitstempel, wann der Kommentar erstellt wurde."""
  createdAt: String
  """Eindeutiger Bezeichner für den Kommentar."""
  id: ID
  """Inhalt der Nachricht des Kommentars."""
  message: String
  """Eindeutiger Bezeichner der zugehörigen Umfrage."""
  surveyPollId: ID
  """Gibt an, ob der Kommentar sichtbar ist."""
  visible: Boolean
}


type SurveyPoll {
  """Gibt an, ob die Umfrage kommentiert werden kann."""
  canComment: Boolean
  """Zeitstempel, wann die Umfrage erstellt wurde."""
  createdAt: String
  """Datenanbieter, der die Umfrage bereitgestellt hat."""
  dataProvider: DataProvider
  """Datum der Umfrage."""
  date: Date
  """Mehrsprachige Beschreibung der Umfrage."""
  description: I18nJSON
  """Eindeutiger Bezeichner für die Umfrage."""
  id: ID
  """Gibt an, ob die Umfrage mehrsprachig ist."""
  isMultilingual: Boolean
  """Gibt an, ob mehrere Antworten auf die Frage erlaubt sind."""
  questionAllowMultipleResponses: Boolean
  """Eindeutiger Bezeichner der Frage der Umfrage."""
  questionId: ID
  """Mehrsprachiger Titel der Umfragefrage."""
  questionTitle: I18nJSON
  """Liste der Antwortoptionen für die Umfrage."""
  responseOptions: [SurveyResponseOptions!]
  """Liste der Kommentare, die zu dieser Umfrage abgegeben wurden."""
  surveyComments: [SurveyComment!]
  """Mehrsprachiger Titel der Umfrage."""
  title: I18nJSON
  """Zeitstempel, wann die Umfrage zuletzt aktualisiert wurde."""
  updatedAt: String
  """Gibt an, ob die Umfrage sichtbar ist."""
  visible: Boolean
}


type SurveyResponseOptions {
  """Zeitstempel, wann die Antwortoption erstellt wurde."""
  createdAt: String
  """Eindeutiger Bezeichner für die Antwortoption."""
  id: ID
  """Mehrsprachiger Titel der Antwortoption."""
  title: I18nJSON
  """Zeitstempel, wann die Antwortoption zuletzt aktualisiert wurde."""
  updatedAt: String
  """Anzahl der Stimmen, die die Antwortoption erhalten hat."""
  votesCount: Int
}


type Tour {
  """Gibt an, ob die Tour aktiv ist."""
  active: Boolean
  """Liste der Adressen, die mit der Tour verbunden sind."""
  addresses: [Address!]
  """Liste der Kategorien, zu denen die Tour gehört."""
  categories: [Category!]
  """Die Hauptkategorie, zu der die Tour gehört."""
  category: Category
  """Liste der Zertifikate, die der Tour zugeordnet sind."""
  certificates: [Certificate!]
  """Kontaktinformationen für die Tour."""
  contact: Contact
  """Zeitstempel, wann die Tour erstellt wurde."""
  createdAt: String
  """Datenanbieter, der die Tour bereitgestellt hat."""
  dataProvider: DataProvider
  """Beschreibung der Tour."""
  description: String
  """Geographische Daten der Tourstrecke."""
  geometryTourData: [GeoLocation!]!
  """Eindeutiger Bezeichner für die Tour."""
  id: ID
  """Die Länge der Tour in Kilometern."""
  lengthKm: Int
  """Standort der Tour."""
  location: Location
  """Das Transportmittel, das für die Tour verwendet wird."""
  meansOfTransportation: String
  """Liste der Medieninhalte, die mit der Tour verknüpft sind."""
  mediaContents: [MediaContent!]
  """Beschreibung der Tour für mobile Geräte."""
  mobileDescription: String
  """Name der Tour."""
  name: String
  """Betreibergesellschaft der Tour."""
  operatingCompany: OperatingCompany
  """Zusätzliche, unstrukturierte Daten, die mit der Tour verbunden sind."""
  payload: JSON
  """Liste der Regionen, die mit der Tour verbunden sind."""
  regions: [Region!]
  """Einstellungen, die mit der Tour verbunden sind."""
  settings: Setting
  """Liste der Tags, die mit der Tour verbunden sind."""
  tags: String
  """Liste der Stopps, die Teil der Tour sind."""
  tourStops: [TourStop!]
  """Zeitstempel, wann die Tour zuletzt aktualisiert wurde."""
  updatedAt: String
  """Gibt an, ob die Tour sichtbar ist."""
  visible: Boolean
  """Liste der URLs, die mit der Tour verbunden sind."""
  webUrls: [WebUrl!]
}


type TourStop {
  """Informationen zur Barrierefreiheit des Tourstopps."""
  accessibilityInformation: AccessibilityInformation
  """Gibt an, ob der Tourstopp aktiv ist."""
  active: Boolean
  """Liste der Adressen, die mit dem Tourstopp verbunden sind."""
  addresses: [Address!]
  """Liste der Kategorien, zu denen der Tourstopp gehört."""
  categories: [Category!]
  """Die Hauptkategorie, zu der der Tourstopp gehört."""
  category: Category
  """Liste der Zertifikate, die dem Tourstopp zugeordnet sind."""
  certificates: [Certificate!]
  """Kontaktinformationen für den Tourstopp."""
  contact: Contact
  """Zeitstempel, wann der Tourstopp erstellt wurde."""
  createdAt: String
  """Datenanbieter, der den Tourstopp bereitgestellt hat."""
  dataProvider: DataProvider
  """Beschreibung des Tourstopps."""
  description: String
  """Eindeutiger Bezeichner für den Tourstopp."""
  id: ID
  """Geographische Lage des Tourstopps."""
  location: Location
  """Liste der Medieninhalte, die mit dem Tourstopp verknüpft sind."""
  mediaContents: [MediaContent!]
  """Beschreibung des Tourstopps für mobile Geräte."""
  mobileDescription: String
  """Name des Tourstopps."""
  name: String
  """Betreibergesellschaft des Tourstopps."""
  operatingCompany: OperatingCompany
  """
  Zusätzliche, unstrukturierte Daten, die mit dem Tourstopp verbunden sind.
  """
  payload: JSON
  """Einstellungen, die mit dem Tourstopp verbunden sind."""
  settings: Setting
  """Liste der Tags, die dem Tourstopp zugeordnet sind."""
  tagList: [String!]
  """Zeitstempel, wann der Tourstopp zuletzt aktualisiert wurde."""
  updatedAt: String
  """Gibt an, ob der Tourstopp sichtbar ist."""
  visible: Boolean
  """Liste der URLs, die mit dem Tourstopp verbunden sind."""
  webUrls: [WebUrl!]
}


input TourStopInput {
  """Name des Tourstopps als Eingabe."""
  name: String!
  """Beschreibung des Tourstopps als Eingabe."""
  description: String
  """Beschreibung des Tourstopps für mobile Geräte als Eingabe."""
  mobileDescription: String
  """Gibt an, ob der Tourstopp aktiv ist."""
  active: Boolean
  """Name der Kategorie, zu der der Tourstopp gehört."""
  categoryName: String
  """
  Zusätzliche, unstrukturierte Daten, die mit dem Tourstopp verbunden sind.
  """
  payload: JSON
  """Liste der Kategorien, zu denen der Tourstopp gehört."""
  categories: [CategoryInput!]
  """Liste der Adressen, die mit dem Tourstopp verbunden sind."""
  addresses: [AddressInput!]
  """Kontaktinformationen für den Tourstopp."""
  contact: ContactInput
  """Betreibergesellschaft des Tourstopps."""
  operatingCompany: OperatingCompanyInput
  """Liste der URLs, die mit dem Tourstopp verbunden sind."""
  webUrls: [WebUrlInput!]
  """Liste der Medieninhalte, die mit dem Tourstopp verknüpft sind."""
  mediaContents: [MediaContentInput!]
  """Geographische Lage des Tourstopps als Eingabe."""
  location: LocationInput
  """Liste der Zertifikate, die dem Tourstopp zugeordnet sind."""
  certificates: [CertificateInput!]
  """Informationen zur Barrierefreiheit für den Tourstopp als Eingabe."""
  accessibilityInformation: AccessibilityInformationInput
  """Liste der Tags, die mit dem Tourstopp verbunden sind."""
  tags: [String!]
}


enum ToursOrder {
  """Sortierung nach dem Erstellungsdatum in absteigender Reihenfolge."""
  createdAt_DESC
  """Sortierung nach dem Erstellungsdatum in aufsteigender Reihenfolge."""
  createdAt_ASC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in absteigender Reihenfolge.
  """
  updatedAt_DESC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in aufsteigender Reihenfolge.
  """
  updatedAt_ASC
  """Sortierung nach der ID in absteigender Reihenfolge."""
  id_DESC
  """Sortierung nach der ID in aufsteigender Reihenfolge."""
  id_ASC
  """Sortierung nach dem Namen in absteigender Reihenfolge."""
  name_DESC
  """Sortierung nach dem Namen in aufsteigender Reihenfolge."""
  name_ASC
  """Zufällige Sortierung der Touren."""
  RAND
}


type UpdateWasteTourDatesPayload {
  """Eindeutiger Bezeichner für die aktualisierte Mülltour."""
  id: ID!
}


enum WasteLocationOrder {
  """Sortierung nach dem Erstellungsdatum in absteigender Reihenfolge."""
  createdAt_DESC
  """Sortierung nach dem Erstellungsdatum in aufsteigender Reihenfolge."""
  createdAt_ASC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in absteigender Reihenfolge.
  """
  updatedAt_DESC
  """
  Sortierung nach dem letzten Aktualisierungsdatum in aufsteigender Reihenfolge.
  """
  updatedAt_ASC
  """Sortierung nach der ID in absteigender Reihenfolge."""
  id_DESC
  """Sortierung nach der ID in aufsteigender Reihenfolge."""
  id_ASC
  """Sortierung nach der Straße in absteigender Reihenfolge."""
  street_DESC
  """Sortierung nach der Straße in aufsteigender Reihenfolge."""
  street_ASC
}


type WasteLocationType {
  """Adresse des Müllsammelorts."""
  address: Address
  """Eindeutiger Bezeichner für die Adresse des Müllsammelorts."""
  addressId: Int
  """Zeitstempel, wann der Müllsammelort erstellt wurde."""
  createdAt: String
  """Eindeutiger Bezeichner für den Müllsammelort-Typ."""
  id: ID
  """Liste der Abholdaten für diesen Müllsammelort."""
  listPickUpDates: [String!]
  """Liste der Abholzeiten für diesen Müllsammelort."""
  pickUpTimes: [WastePickUpTime!]
  """Zeitstempel, wann der Müllsammelort zuletzt aktualisiert wurde."""
  updatedAt: String
  """Die Mülltour, zu der dieser Müllsammelort gehört."""
  wasteTour: WasteTour
  """Der Abfalltyp, der an diesem Ort gesammelt wird."""
  wasteType: String
}


input WasteLocationTypeInput {
  """Abfalltyp, der am Müllsammelort gesammelt wird, als Eingabe."""
  wasteType: String
  """Eindeutiger Bezeichner für die Adresse des Müllsammelorts als Eingabe."""
  addressId: Int
  """Adresse des Müllsammelorts als Eingabe."""
  address: AddressInput
}


type WastePickUpTime {
  """Zeitstempel, wann die Abholzeit erstellt wurde."""
  createdAt: String
  """Eindeutiger Bezeichner für die Abholzeit."""
  id: ID
  """Datum der Abholung."""
  pickupDate: String
  """Zeitstempel, wann die Abholzeit zuletzt aktualisiert wurde."""
  updatedAt: String
  """Der Müllsammelort, zu dem diese Abholzeit gehört."""
  wasteLocationType: WasteLocationType
  """Eindeutiger Bezeichner des Müllsammelorts für diese Abholzeit."""
  wasteLocationTypeId: ID
}


type WasteTour {
  """Eindeutiger Bezeichner für die Mülltour."""
  id: ID
  """Titel der Mülltour."""
  title: String
  """Der Abfalltyp, der während der Tour gesammelt wird."""
  wasteType: String
}


type WebUrl {
  """Beschreibung der Web-URL."""
  description: String
  """Eindeutiger Bezeichner für die Web-URL."""
  id: ID
}


input WebUrlInput {
  """Beschreibung der Web-URL."""
  url: String
  """Beschreibung der Web-URL."""
  description: String
}


`,fn=Ty(),za=Vs(Gs.DIRECTIVES,[]);var Sd;const ly=Ks((Sd=fn.getQueryType())==null?void 0:Sd.getFields());var wd;const cy=Ks((wd=fn.getMutationType())==null?void 0:wd.getFields());var Fd;const dy=Ks((Fd=fn.getSubscriptionType())==null?void 0:Fd.getFields()),ou=kt.keyBy(Pf(),r=>r.name.toLocaleLowerCase()),fy=kt.mapValues(ou,r=>{const n=za.find(t=>(t==null?void 0:t.name)===r.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?r.args:n.args.map(t=>r.args.find(o=>o.name===t)).filter(t=>!!t):[]}),hy=Ks(fn.getTypeMap()),py=sy(fn);function Ks(r){return kt.mapKeys(r||{},(n,t)=>t.toLocaleLowerCase())}function gy(){return kt.size(fn.getTypeMap())<=10}function my(){return[Sa("Queries",fn.getQueryType()),Sa("Mutations",fn.getMutationType()),Sa("Subscriptions",fn.getSubscriptionType()),_y(),vy()].filter(r=>!!r)}function Sa(r,n){return Ey(r,Dy(n))}function Dy(r){return kt.sortBy((r==null?void 0:r.getFields())||{},n=>n.name)}function Ey(r,n){return n.length===0?null:{type:"menu",title:r,children:n.map(t=>({type:"page",title:t.name,section:r,deprecated:!!t.deprecationReason,href:wi.joinUrlPaths(Ws(),r.toLocaleLowerCase(),t.name)}))}}function vy(){return gy()?null:{type:"menu",title:"Types",children:kt.sortBy(kt.map(fn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:wi.joinUrlPaths(Ws(),"types",n.name)}))}}function zy(){return!!fn.getQueryType()}function My(r){return ly[r.toLocaleLowerCase()]}function $y(){return!!fn.getMutationType()}function Py(r){return cy[r.toLocaleLowerCase()]}function Uy(){return!!fn.getSubscriptionType()}function Gy(r){return dy[r.toLocaleLowerCase()]}function Vy(r){return hy[r.toLocaleLowerCase()]}function by(r){return ou[r.toLocaleLowerCase()]}function Wy(r){return by(r.name)!==void 0}function jy(){return kt.size(ou)>0}function qy(r){return fy[r.name.toLocaleLowerCase()]||[]}function Zy(r){if(r)return py.getFor(r)}function Hy(r){return kt.flatMap(r.getFields(),n=>({field:n,possibleDescriptions:$f(n,r)}))}function $f(r,n){return r?r.description?[{description:r.description,from:n}]:je(n)?n.getInterfaces().flatMap(t=>$f(t.getFields()[r.name],t)):[]:[]}function Pf(){return za.some(r=>(r==null?void 0:r.name)==="*")?fn.getDirectives().filter(r=>!["include","skip","deprecated","specifiedBy"].includes(r.name)):za.filter(r=>!!(r!=null&&r.name)).map(({name:r})=>r?fn.getDirective(r):void 0).filter(r=>!!r)}function Ty(){return yd.trim().length===0?ey(JSON.parse(JSON.stringify({__schema:{types:[]}}))):iy(yd)}function _y(){const r=Pf();return r.length===0?null:{type:"menu",title:"Directives",children:r.map(n=>({type:"page",title:n.name,href:wi.joinUrlPaths(Ws(),"directives",n.name),section:"Directives"}))}}const Jy=Vs(Gs.APP_TITLE,"GraphQL Documentation"),Uf=yy().concat(my());Sy(Uf);const Iy=Object.freeze(Uf),Ky=Ay();function yy(){return Vs(Gs.PAGES,Fy()).filter(n=>!!n).map(n=>Vf([],n))}function Ay(){const r=wy();if(r)return r.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function Sy(r){function n(o,s){for(const a of o){if(a.type==="page"){s(a);continue}a.type==="menu"&&n(a.children,s)}}let t;n(r,o=>{t&&(t.next={title:o.title,section:o.section,href:o.href},o.previous={title:t.title,section:t.section,href:t.href}),t=o})}function wy(){return Gf(()=>!0)}function Yy(r){return Gf(n=>n.href.toLocaleLowerCase()===r.toLocaleLowerCase())}function Gf(r){function n(t){for(const o of t){if(o.type==="page"&&r(o))return o;if(o.type==="menu"){const s=n(o.children);if(s)return s}}return null}return n(Iy)}function Vf(r,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:wi.joinUrlPaths(Ws(),...r,Ad(n.title))};const t=r.concat([Ad(n.title)]);return{type:"menu",title:n.title,children:n.content.map(o=>({...Vf(t,o),section:n.title}))}}function Ad(r){return wi.generatePathSegment(r,new xd)}function Fy(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(r=>r.trim()).join(`
`)}]}]}export{xT as A,gy as B,Vy as C,Zy as D,Yt as E,et as F,Ge as G,Pn as H,je as I,En as J,T as K,Hy as L,gr as M,zr as N,Ry as O,Ps as P,Cd as Q,Di as R,Ly as S,xd as T,Ee as U,Yn as V,Jy as W,kt as _,$y as a,zy as b,My as c,Uy as d,Gy as e,Yy as f,Py as g,Ky as h,kd as i,xy as j,jy as k,by as l,qy as m,Ws as n,Wy as o,Iy as p,ct as q,uf as r,fn as s,vn as t,wi as u,Ae as v,By as w,Vs as x,Gs as y,di as z};
