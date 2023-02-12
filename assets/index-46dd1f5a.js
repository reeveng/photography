(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();function k(){}function K(e){return e()}function b(){return Object.create(null)}function O(e){e.forEach(K)}function x(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let v;function R(e,t){return v||(v=document.createElement("a")),v.href=t,e===v.href}function oe(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function T(e,t,o){e.insertBefore(t,o||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function W(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function d(e){return document.createElement(e)}function z(e){return document.createTextNode(e)}function I(){return z(" ")}function re(e,t,o,r){return e.addEventListener(t,o,r),()=>e.removeEventListener(t,o,r)}function h(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function se(e){return Array.from(e.childNodes)}function ie(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let $;function j(e){$=e}const E=[],S=[],D=[],C=[],ne=Promise.resolve();let V=!1;function ce(){V||(V=!0,ne.then(Q))}function y(e){D.push(e)}const A=new Set;let g=0;function Q(){if(g!==0)return;const e=$;do{try{for(;g<E.length;){const t=E[g];g++,j(t),fe(t.$$)}}catch(t){throw E.length=0,g=0,t}for(j(null),E.length=0,g=0;S.length;)S.pop()();for(let t=0;t<D.length;t+=1){const o=D[t];A.has(o)||(A.add(o),o())}D.length=0}while(E.length);for(;C.length;)C.pop()();V=!1,A.clear(),j(e)}function fe(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}const L=new Set;let ae;function X(e,t){e&&e.i&&(L.delete(e),e.i(t))}function le(e,t,o,r){if(e&&e.o){if(L.has(e))return;L.add(e),ae.c.push(()=>{L.delete(e),r&&(o&&e.d(1),r())}),e.o(t)}else r&&r()}function _e(e){e&&e.c()}function Y(e,t,o,r){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,o),r||y(()=>{const n=e.$$.on_mount.map(K).filter(x);e.$$.on_destroy?e.$$.on_destroy.push(...n):O(n),e.$$.on_mount=[]}),i.forEach(y)}function Z(e,t){const o=e.$$;o.fragment!==null&&(O(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function pe(e,t){e.$$.dirty[0]===-1&&(E.push(e),ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ee(e,t,o,r,s,i,n,_=[-1]){const a=$;j(e);const l=e.$$={fragment:null,ctx:[],props:i,update:k,not_equal:s,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:b(),dirty:_,skip_bound:!1,root:t.target||a.$$.root};n&&n(l.root);let c=!1;if(l.ctx=o?o(e,t.props||{},(p,u,...B)=>{const M=B.length?B[0]:u;return l.ctx&&s(l.ctx[p],l.ctx[p]=M)&&(!l.skip_bound&&l.bound[p]&&l.bound[p](M),c&&pe(e,p)),u}):[],l.update(),c=!0,O(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const p=se(t.target);l.fragment&&l.fragment.l(p),p.forEach(P)}else l.fragment&&l.fragment.c();t.intro&&X(e.$$.fragment),Y(e,t.target,t.anchor,t.customElement),Q()}j(a)}class te{$destroy(){Z(this,1),this.$destroy=k}$on(t,o){if(!x(o))return k;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(o),()=>{const s=r.indexOf(o);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ue="/photography/assets/logo-4911153b.svg",me="modulepreload",de=function(e){return"/photography/"+e},w={},f=function(t,o,r){if(!o||o.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(o.map(i=>{if(i=de(i),i in w)return;w[i]=!0;const n=i.endsWith(".css"),_=n?'[rel="stylesheet"]':"";if(!!r)for(let c=s.length-1;c>=0;c--){const p=s[c];if(p.href===i&&(!n||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${_}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":me,n||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),n)return new Promise((c,p)=>{l.addEventListener("load",c),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function F(e,t,o){const r=e.slice();return r[4]=t[o][0],r[5]=t[o][1],r}function G(e,t,o){const r=e.slice();return r[8]=t[o],r}function J(e){let t,o=e[5],r=[];for(let s=0;s<o.length;s+=1)r[s]=N(G(e,o,s));return{c(){t=d("ul");for(let s=0;s<r.length;s+=1)r[s].c()},m(s,i){T(s,t,i);for(let n=0;n<r.length;n+=1)r[n].m(t,null)},p(s,i){if(i&2){o=s[5];let n;for(n=0;n<o.length;n+=1){const _=G(s,o,n);r[n]?r[n].p(_,i):(r[n]=N(_),r[n].c(),r[n].m(t,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=o.length}},d(s){s&&P(t),W(r,s)}}}function N(e){let t,o,r,s;return{c(){t=d("li"),o=d("img"),s=I(),R(o.src,r=e[8])||h(o,"src",r),h(o,"alt","")},m(i,n){T(i,t,n),m(t,o),m(t,s)},p(i,n){n&2&&!R(o.src,r=i[8])&&h(o,"src",r)},d(i){i&&P(t)}}}function q(e){let t,o,r=e[4]+"",s,i,n=e[0].includes(e[4]),_,a,l,c=n&&J(e);return{c(){t=d("li"),o=d("button"),s=z(r),i=I(),c&&c.c(),_=I()},m(p,u){T(p,t,u),m(t,o),m(o,s),m(t,i),c&&c.m(t,null),m(t,_),a||(l=re(o,"click",function(){x(e[2](e[4]))&&e[2](e[4]).apply(this,arguments)}),a=!0)},p(p,u){e=p,u&2&&r!==(r=e[4]+"")&&ie(s,r),u&3&&(n=e[0].includes(e[4])),n?c?c.p(e,u):(c=J(e),c.c(),c.m(t,_)):c&&(c.d(1),c=null)},d(p){p&&P(t),c&&c.d(),a=!1,l()}}}function he(e){let t,o,r,s,i,n=Object.entries(e[1]).sort(H),_=[];for(let a=0;a<n.length;a+=1)_[a]=q(F(e,n,a));return{c(){t=d("hr"),o=I(),r=d("h2"),r.innerHTML='Collect<span class="gold">ions</span>',s=I(),i=d("ul");for(let a=0;a<_.length;a+=1)_[a].c();h(r,"class","part collections")},m(a,l){T(a,t,l),T(a,o,l),T(a,r,l),T(a,s,l),T(a,i,l);for(let c=0;c<_.length;c+=1)_[c].m(i,null)},p(a,[l]){if(l&7){n=Object.entries(a[1]).sort(H);let c;for(c=0;c<n.length;c+=1){const p=F(a,n,c);_[c]?_[c].p(p,l):(_[c]=q(p),_[c].c(),_[c].m(i,null))}for(;c<_.length;c+=1)_[c].d(1);_.length=n.length}},i:k,o:k,d(a){a&&P(t),a&&P(o),a&&P(r),a&&P(s),a&&P(i),W(_,a)}}}const H=([e],[t])=>e.localeCompare(t);function Pe(e,t,o){const r={...Object.assign({"../assets/static/Madeira/Madeira.DSCF0001.JPG":()=>f(()=>import("./Madeira.DSCF0001-43c36cc5.js"),[]),"../assets/static/Madeira/Madeira.DSCF0004.JPG":()=>f(()=>import("./Madeira.DSCF0004-7b5625d4.js"),[]),"../assets/static/Madeira/Madeira.DSCF0006.JPG":()=>f(()=>import("./Madeira.DSCF0006-c93d29fb.js"),[]),"../assets/static/Madeira/Madeira.DSCF0023.JPG":()=>f(()=>import("./Madeira.DSCF0023-3fe43cc8.js"),[]),"../assets/static/Madeira/Madeira.DSCF0032.JPG":()=>f(()=>import("./Madeira.DSCF0032-c8e0196c.js"),[]),"../assets/static/Madeira/Madeira.DSCF0033.JPG":()=>f(()=>import("./Madeira.DSCF0033-f7bb9c6d.js"),[]),"../assets/static/Madeira/Madeira.DSCF0035.JPG":()=>f(()=>import("./Madeira.DSCF0035-a33e5bfc.js"),[]),"../assets/static/Madeira/Madeira.DSCF0047.JPG":()=>f(()=>import("./Madeira.DSCF0047-e51439ed.js"),[]),"../assets/static/Madeira/Madeira.DSCF0048.JPG":()=>f(()=>import("./Madeira.DSCF0048-177a51cc.js"),[]),"../assets/static/Madeira/Madeira.DSCF0061.JPG":()=>f(()=>import("./Madeira.DSCF0061-aea2632a.js"),[]),"../assets/static/Madeira/Madeira.DSCF0064.JPG":()=>f(()=>import("./Madeira.DSCF0064-d530e6f5.js"),[]),"../assets/static/Madeira/Madeira.DSCF0065.JPG":()=>f(()=>import("./Madeira.DSCF0065-a4e2e43e.js"),[]),"../assets/static/Madeira/Madeira.DSCF0074.JPG":()=>f(()=>import("./Madeira.DSCF0074-af921e2c.js"),[]),"../assets/static/Madeira/Madeira.DSCF0086.JPG":()=>f(()=>import("./Madeira.DSCF0086-2922802c.js"),[])}),...Object.assign({"../assets/static/Breendonk/Breendonk.pexels-j-mad-15446409.jpg":()=>f(()=>import("./Breendonk.pexels-j-mad-15446409-0e30a224.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.DSCF0320.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.DSCF0320-4bbfe196.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.DSCF0368.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.DSCF0368-fa98658b.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-10154549.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-10154549-5ba6b689.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-10839011.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-10839011-51cadc69.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-10839154.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-10839154-e53c6254.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-10886443.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-10886443-cceb712a.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-10886470.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-10886470-f6e8888b.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-10990935.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-10990935-d423d420.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11013379.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11013379-3cfcfb69.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11050226.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11050226-f3c6eb1b.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11086344.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11086344-9987e469.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11109148.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11109148-6f0d6774.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11264905.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11264905-14ff3a25.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11339548.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11339548-25a9b281.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11340538.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11340538-10d41af0.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11521990.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11521990-dffad763.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11578352.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11578352-b61a4724.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11578355.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11578355-5962ef8a.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-11690137.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-11690137-99714097.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-12281003.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-12281003-6060db00.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-12885181.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-12885181-618488de.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-12885229.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-12885229-4c079ebc.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-12940098.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-12940098-78e22e19.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-14589268.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-14589268-2be36db5.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-14608956.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-14608956-5ba6e9a9.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-14682431.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-14682431-7bd6878b.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-14823059.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-14823059-484c98c4.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-8221004.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-8221004-6162944f.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-9679462.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-9679462-6e92f490.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-9693661.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-9693661-b29d2182.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-9747655.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-9747655-e3d66342.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-9783327.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-9783327-89a61745.js"),[]),"../assets/static/Perfect Imperfections - The Book/Perfect Imperfections - The Book.pexels-j-mad-9941995.jpg":()=>f(()=>import("./Perfect Imperfections - The Book.pexels-j-mad-9941995-74b8f632.js"),[])})};let s=[],i={};for(const _ in r)r[_]().then(({default:a})=>{let l=a.split("/"),c=l[l.length-1];c=c.split(".")[0],i[c]==null&&o(1,i[c]=[],i),i[c].push(a),o(1,i)}),i=i;return[s,i,_=>{s.includes(_)?o(0,s=s.filter(a=>a!=_)):(s.push(_),o(0,s))}]}class Te extends te{constructor(t){super(),ee(this,t,Pe,he,U,{})}}function Ie(e){let t,o,r,s,i,n,_,a,l,c,p;return c=new Te({}),{c(){t=d("main"),o=d("div"),r=d("img"),i=I(),n=d("h1"),n.innerHTML=`<span><span class="gold">Per</span>fect<br/>
      imper<span class="gold">fect</span>ions</span>`,_=I(),a=d("p"),a.textContent="Some things aren't meant to be perfect, yet they are perfectly imperfect.",l=I(),_e(c.$$.fragment),h(r,"class","pfp"),R(r.src,s=ue)||h(r,"src",s),h(r,"alt","a logo of a cod (a fish species), free to roam the world"),h(o,"class","part"),h(n,"class","part"),h(a,"class","part about")},m(u,B){T(u,t,B),m(t,o),m(o,r),m(t,i),m(t,n),m(t,_),m(t,a),m(t,l),Y(c,t,null),p=!0},p:k,i(u){p||(X(c.$$.fragment,u),p=!0)},o(u){le(c.$$.fragment,u),p=!1},d(u){u&&P(t),Z(c)}}}class ge extends te{constructor(t){super(),ee(this,t,null,Ie,U,{})}}new ge({target:document.getElementById("app")});
