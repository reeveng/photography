(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();function k(){}function H(e){return e()}function b(){return Object.create(null)}function L(e){e.forEach(H)}function x(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let v;function R(e,t){return v||(v=document.createElement("a")),v.href=t,e===v.href}function te(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function T(e,t,r){e.insertBefore(t,r||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function d(e){return document.createElement(e)}function W(e){return document.createTextNode(e)}function I(){return W(" ")}function re(e,t,r,o){return e.addEventListener(t,r,o),()=>e.removeEventListener(t,r,o)}function h(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function oe(e){return Array.from(e.childNodes)}function se(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let $;function j(e){$=e}const E=[],S=[],D=[],C=[],ie=Promise.resolve();let V=!1;function ne(){V||(V=!0,ie.then(z))}function y(e){D.push(e)}const A=new Set;let g=0;function z(){if(g!==0)return;const e=$;do{try{for(;g<E.length;){const t=E[g];g++,j(t),ce(t.$$)}}catch(t){throw E.length=0,g=0,t}for(j(null),E.length=0,g=0;S.length;)S.pop()();for(let t=0;t<D.length;t+=1){const r=D[t];A.has(r)||(A.add(r),r())}D.length=0}while(E.length);for(;C.length;)C.pop()();V=!1,A.clear(),j(e)}function ce(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}const O=new Set;let fe;function Q(e,t){e&&e.i&&(O.delete(e),e.i(t))}function ae(e,t,r,o){if(e&&e.o){if(O.has(e))return;O.add(e),fe.c.push(()=>{O.delete(e),o&&(r&&e.d(1),o())}),e.o(t)}else o&&o()}function _e(e){e&&e.c()}function X(e,t,r,o){const{fragment:s,after_update:n}=e.$$;s&&s.m(t,r),o||y(()=>{const i=e.$$.on_mount.map(H).filter(x);e.$$.on_destroy?e.$$.on_destroy.push(...i):L(i),e.$$.on_mount=[]}),n.forEach(y)}function Y(e,t){const r=e.$$;r.fragment!==null&&(L(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function le(e,t){e.$$.dirty[0]===-1&&(E.push(e),ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,r,o,s,n,i,l=[-1]){const f=$;j(e);const a=e.$$={fragment:null,ctx:[],props:n,update:k,not_equal:s,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:b(),dirty:l,skip_bound:!1,root:t.target||f.$$.root};i&&i(a.root);let _=!1;if(a.ctx=r?r(e,t.props||{},(p,u,...B)=>{const M=B.length?B[0]:u;return a.ctx&&s(a.ctx[p],a.ctx[p]=M)&&(!a.skip_bound&&a.bound[p]&&a.bound[p](M),_&&le(e,p)),u}):[],a.update(),_=!0,L(a.before_update),a.fragment=o?o(a.ctx):!1,t.target){if(t.hydrate){const p=oe(t.target);a.fragment&&a.fragment.l(p),p.forEach(P)}else a.fragment&&a.fragment.c();t.intro&&Q(e.$$.fragment),X(e,t.target,t.anchor,t.customElement),z()}j(f)}class ee{$destroy(){Y(this,1),this.$destroy=k}$on(t,r){if(!x(r))return k;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(r),()=>{const s=o.indexOf(r);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pe="/photography/assets/logo-4911153b.svg",ue="modulepreload",me=function(e){return"/photography/"+e},w={},c=function(t,r,o){if(!r||r.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(r.map(n=>{if(n=me(n),n in w)return;w[n]=!0;const i=n.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!o)for(let _=s.length-1;_>=0;_--){const p=s[_];if(p.href===n&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${l}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":ue,i||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),i)return new Promise((_,p)=>{a.addEventListener("load",_),a.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};function F(e,t,r){const o=e.slice();return o[4]=t[r][0],o[5]=t[r][1],o}function G(e,t,r){const o=e.slice();return o[8]=t[r],o}function J(e){let t,r=e[5],o=[];for(let s=0;s<r.length;s+=1)o[s]=N(G(e,r,s));return{c(){t=d("ul");for(let s=0;s<o.length;s+=1)o[s].c()},m(s,n){T(s,t,n);for(let i=0;i<o.length;i+=1)o[i].m(t,null)},p(s,n){if(n&2){r=s[5];let i;for(i=0;i<r.length;i+=1){const l=G(s,r,i);o[i]?o[i].p(l,n):(o[i]=N(l),o[i].c(),o[i].m(t,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}},d(s){s&&P(t),U(o,s)}}}function N(e){let t,r,o,s;return{c(){t=d("li"),r=d("img"),s=I(),R(r.src,o=e[8])||h(r,"src",o),h(r,"alt","")},m(n,i){T(n,t,i),m(t,r),m(t,s)},p(n,i){i&2&&!R(r.src,o=n[8])&&h(r,"src",o)},d(n){n&&P(t)}}}function q(e){let t,r,o=e[4]+"",s,n,i=e[0].includes(e[4]),l,f,a,_=i&&J(e);return{c(){t=d("li"),r=d("button"),s=W(o),n=I(),_&&_.c(),l=I()},m(p,u){T(p,t,u),m(t,r),m(r,s),m(t,n),_&&_.m(t,null),m(t,l),f||(a=re(r,"click",function(){x(e[2](e[4]))&&e[2](e[4]).apply(this,arguments)}),f=!0)},p(p,u){e=p,u&2&&o!==(o=e[4]+"")&&se(s,o),u&3&&(i=e[0].includes(e[4])),i?_?_.p(e,u):(_=J(e),_.c(),_.m(t,l)):_&&(_.d(1),_=null)},d(p){p&&P(t),_&&_.d(),f=!1,a()}}}function de(e){let t,r,o,s=Object.entries(e[1]),n=[];for(let i=0;i<s.length;i+=1)n[i]=q(F(e,s,i));return{c(){t=d("h2"),t.textContent="Collections",r=I(),o=d("ul");for(let i=0;i<n.length;i+=1)n[i].c();h(t,"class","part")},m(i,l){T(i,t,l),T(i,r,l),T(i,o,l);for(let f=0;f<n.length;f+=1)n[f].m(o,null)},p(i,[l]){if(l&7){s=Object.entries(i[1]);let f;for(f=0;f<s.length;f+=1){const a=F(i,s,f);n[f]?n[f].p(a,l):(n[f]=q(a),n[f].c(),n[f].m(o,null))}for(;f<n.length;f+=1)n[f].d(1);n.length=s.length}},i:k,o:k,d(i){i&&P(t),i&&P(r),i&&P(o),U(n,i)}}}function he(e,t,r){const o={...Object.assign({"../assets/static/Madeira/Madeira.DSCF0001.JPG":()=>c(()=>import("./Madeira.DSCF0001-43c36cc5.js"),[]),"../assets/static/Madeira/Madeira.DSCF0004.JPG":()=>c(()=>import("./Madeira.DSCF0004-7b5625d4.js"),[]),"../assets/static/Madeira/Madeira.DSCF0006.JPG":()=>c(()=>import("./Madeira.DSCF0006-c93d29fb.js"),[]),"../assets/static/Madeira/Madeira.DSCF0023.JPG":()=>c(()=>import("./Madeira.DSCF0023-3fe43cc8.js"),[]),"../assets/static/Madeira/Madeira.DSCF0032.JPG":()=>c(()=>import("./Madeira.DSCF0032-c8e0196c.js"),[]),"../assets/static/Madeira/Madeira.DSCF0033.JPG":()=>c(()=>import("./Madeira.DSCF0033-f7bb9c6d.js"),[]),"../assets/static/Madeira/Madeira.DSCF0035.JPG":()=>c(()=>import("./Madeira.DSCF0035-a33e5bfc.js"),[]),"../assets/static/Madeira/Madeira.DSCF0047.JPG":()=>c(()=>import("./Madeira.DSCF0047-e51439ed.js"),[]),"../assets/static/Madeira/Madeira.DSCF0048.JPG":()=>c(()=>import("./Madeira.DSCF0048-177a51cc.js"),[]),"../assets/static/Madeira/Madeira.DSCF0061.JPG":()=>c(()=>import("./Madeira.DSCF0061-aea2632a.js"),[]),"../assets/static/Madeira/Madeira.DSCF0064.JPG":()=>c(()=>import("./Madeira.DSCF0064-d530e6f5.js"),[]),"../assets/static/Madeira/Madeira.DSCF0065.JPG":()=>c(()=>import("./Madeira.DSCF0065-a4e2e43e.js"),[]),"../assets/static/Madeira/Madeira.DSCF0074.JPG":()=>c(()=>import("./Madeira.DSCF0074-af921e2c.js"),[]),"../assets/static/Madeira/Madeira.DSCF0086.JPG":()=>c(()=>import("./Madeira.DSCF0086-2922802c.js"),[])}),...Object.assign({"../assets/static/Breendonk/Breendonk.pexels-j-mad-15446409.jpg":()=>c(()=>import("./Breendonk.pexels-j-mad-15446409-0e30a224.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.DSCF0320.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.DSCF0320-4bbfe196.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.DSCF0368.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.DSCF0368-fa98658b.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-10154549.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-10154549-5ba6b689.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-10839011.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-10839011-51cadc69.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-10839154.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-10839154-e53c6254.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-10886443.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-10886443-cceb712a.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-10886470.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-10886470-f6e8888b.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-10990935.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-10990935-d423d420.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11013379.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11013379-3cfcfb69.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11050226.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11050226-f3c6eb1b.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11086344.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11086344-9987e469.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11109148.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11109148-6f0d6774.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11264905.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11264905-14ff3a25.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11339548.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11339548-25a9b281.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11340538.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11340538-10d41af0.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11521990.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11521990-dffad763.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11578352.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11578352-b61a4724.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11578355.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11578355-5962ef8a.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11690137.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11690137-99714097.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-12281003.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-12281003-6060db00.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-12885181.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-12885181-618488de.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-12885229.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-12885229-4c079ebc.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-12940098.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-12940098-78e22e19.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-14589268.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-14589268-2be36db5.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-14608956.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-14608956-5ba6e9a9.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-14682431.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-14682431-7bd6878b.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-14823059.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-14823059-484c98c4.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-8221004.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-8221004-6162944f.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-9679462.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-9679462-6e92f490.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-9693661.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-9693661-b29d2182.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-9747655.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-9747655-e3d66342.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-9783327.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-9783327-89a61745.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-9941995.jpg":()=>c(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-9941995-74b8f632.js"),[])})};let s=[],n={};for(const l in o)o[l]().then(({default:f})=>{let a=f.split("/"),_=a[a.length-1];_=_.split(".")[0],n[_]==null&&r(1,n[_]=[],n),n[_].push(f),r(1,n)}),n=n;return[s,n,l=>{s.includes(l)?r(0,s=s.filter(f=>f!=l)):(s.push(l),r(0,s))}]}class Pe extends ee{constructor(t){super(),Z(this,t,he,de,K,{})}}function Te(e){let t,r,o,s,n,i,l,f,a,_,p;return _=new Pe({}),{c(){t=d("main"),r=d("div"),o=d("img"),n=I(),i=d("h1"),i.innerHTML=`Perfect<br/>
    imperfections`,l=I(),f=d("p"),f.textContent="Some things aren't meant to be perfect, yet they are perfectly imperfect.",a=I(),_e(_.$$.fragment),h(o,"class","pfp"),R(o.src,s=pe)||h(o,"src",s),h(o,"alt","a logo of a cod (a fish species), free to roam the world"),h(r,"class","part"),h(i,"class","part"),h(f,"class","part about")},m(u,B){T(u,t,B),m(t,r),m(r,o),m(t,n),m(t,i),m(t,l),m(t,f),m(t,a),X(_,t,null),p=!0},p:k,i(u){p||(Q(_.$$.fragment,u),p=!0)},o(u){ae(_.$$.fragment,u),p=!1},d(u){u&&P(t),Y(_)}}}class Ie extends ee{constructor(t){super(),Z(this,t,null,Te,K,{})}}new Ie({target:document.getElementById("app")});
