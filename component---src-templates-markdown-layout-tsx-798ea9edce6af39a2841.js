(self.webpackChunkbokangkim_github_io=self.webpackChunkbokangkim_github_io||[]).push([[387],{9047:function(e,t,n){var r={"./deckgo-highlight-code.entry.js":[6705,705]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=9047,e.exports=o},8735:function(e,t,n){"use strict";n.d(t,{H:function(){return U},b:function(){return ke},c:function(){return ie},g:function(){return ae},h:function(){return z},p:function(){return N},r:function(){return Se}});var r=n(9907),o=n(5626);function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}var l=n(5576);function u(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function $(e,t,n){return $=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o},$.apply(null,arguments)}function m(e){var t="function"==typeof Map?new Map:void 0;return m=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return $(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,e)},m(e)}var h=n(7892),p=n(3427);var d=n(9719);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||(0,d.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=n(2917),g=n.n(v);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var w,E,k=!1,x="undefined"!=typeof window?window:{},L=x.document||{head:{}},S={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},N=function(e){return Promise.resolve(e)},R=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1}(),j=function(e,t,n,r){n&&n.map((function(n){var r=y(n,3),o=r[0],a=r[1],i=r[2],c=O(e,o),l=_(t,i),u=M(o);S.ael(c,a,l,u),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return S.rel(c,a,l,u)}))}))},_=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){je(r)}}},O=function(e,t){return 4&t?L:e},M=function(e){return 0!=(2&e)},P="{visibility:hidden}.hydrated{visibility:inherit}",T="http://www.w3.org/1999/xlink",C=new WeakMap,A=function(e,t,n){var r=Me.get(e);R&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Me.set(e,r)},I=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=(t.$tagName$,function(){}),a=function(e,t,n,r){var o=Z(t),a=Me.get(o);if(e=11===e.nodeType?e:L,a)if("string"==typeof a){e=e.head||e;var i,c=C.get(e);c||C.set(e,c=new Set),c.has(o)||((i=L.createElement("style")).innerHTML=a,e.insertBefore(i,e.querySelector("link")),c&&c.add(o))}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=[].concat((0,p.Z)(e.adoptedStyleSheets),[a]));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=a,n.classList.add(a+"-h")),o()},Z=function(e,t){return"sc-"+e.$tagName$},B={},H=function(e){return"object"===(e=typeof e)||"function"===e},z=function(e,t){for(var n=null,r=null,o=!1,a=!1,i=[],c=function t(r){for(var c=0;c<r.length;c++)n=r[c],Array.isArray(n)?t(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!H(n))&&(n=String(n)),o&&a?i[i.length-1].$text$+=n:i.push(o?F(null,n):n),a=o)},l=arguments.length,u=new Array(l>2?l-2:0),s=2;s<l;s++)u[s-2]=arguments[s];if(c(u),t){t.key&&(r=t.key);var f=t.className||t.class;f&&(t.class="object"!=typeof f?f:Object.keys(f).filter((function(e){return f[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,i,q);var $=F(e,null);return $.$attrs$=t,i.length>0&&($.$children$=i),$.$key$=r,$},F=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},U={},q={forEach:function(e,t){return e.map(D).forEach(t)},map:function(e,t){return e.map(D).map(t).map(G)}},D=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},G=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),z.apply(void 0,[e.vtag,t].concat((0,p.Z)(e.vchildren||[])))}var n=F(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},V=function(e,t,n,r,o,a){if(n!==r){var i=Re(e,t),c=t.toLowerCase();if("class"===t){var l=e.classList,u=J(n),s=J(r);l.remove.apply(l,(0,p.Z)(u.filter((function(e){return e&&!s.includes(e)})))),l.add.apply(l,(0,p.Z)(s.filter((function(e){return e&&!u.includes(e)}))))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var $ in r)n&&r[$]===n[$]||($.includes("-")?e.style.setProperty($,r[$]):e.style[$]=r[$])}else if("key"===t);else if("ref"===t)r&&r(e);else if(i||"o"!==t[0]||"n"!==t[1]){var m=H(r);if((i||m&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var h=null==r?"":r;"list"===t?i=!1:null!=n&&e[t]==h||(e[t]=h)}}catch(y){}var d=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,d=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(d?e.removeAttributeNS(T,t):e.removeAttribute(t)):(!i||4&a||o)&&!m&&(r=!0===r?"":r,d?e.setAttributeNS(T,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):Re(x,c)?c.slice(2):c[2]+t.slice(3),n&&S.rel(e,t,n,!1),r&&S.ael(e,t,r,!1)}},W=/\s/,J=function(e){return e?e.split(W):[]},K=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||B,i=t.$attrs$||B;for(r in a)r in i||V(o,r,a[r],void 0,n,t.$flags$);for(r in i)V(o,r,a[r],i[r],n,t.$flags$)},X=function e(t,n,r,o){var a,i,c=n.$children$[r],l=0;if(null!==c.$text$)a=c.$elm$=L.createTextNode(c.$text$);else if(a=c.$elm$=L.createElement(c.$tag$),K(null,c,false),null!=w&&a["s-si"]!==w&&a.classList.add(a["s-si"]=w),c.$children$)for(l=0;l<c.$children$.length;++l)(i=e(t,c,l))&&a.appendChild(i);return a},Y=function(e,t,n,r,o,a){var i,c=e;for(c.shadowRoot&&c.tagName===E&&(c=c.shadowRoot);o<=a;++o)r[o]&&(i=X(null,n,o))&&(r[o].$elm$=i,c.insertBefore(i,t))},Q=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,re(r),o.remove())},ee=function(e,t,n,r){for(var o,a,i=0,c=0,l=0,u=0,s=t.length-1,f=t[0],$=t[s],m=r.length-1,h=r[0],p=r[m];i<=s&&c<=m;)if(null==f)f=t[++i];else if(null==$)$=t[--s];else if(null==h)h=r[++c];else if(null==p)p=r[--m];else if(te(f,h))ne(f,h),f=t[++i],h=r[++c];else if(te($,p))ne($,p),$=t[--s],p=r[--m];else if(te(f,p))ne(f,p),e.insertBefore(f.$elm$,$.$elm$.nextSibling),f=t[++i],p=r[--m];else if(te($,h))ne($,h),e.insertBefore($.$elm$,f.$elm$),$=t[--s],h=r[++c];else{for(l=-1,u=i;u<=s;++u)if(t[u]&&null!==t[u].$key$&&t[u].$key$===h.$key$){l=u;break}l>=0?((a=t[l]).$tag$!==h.$tag$?o=X(t&&t[c],n,l):(ne(a,h),t[l]=void 0,o=a.$elm$),h=r[++c]):(o=X(t&&t[c],n,c),h=r[++c]),o&&f.$elm$.parentNode.insertBefore(o,f.$elm$)}i>s?Y(e,null==r[m+1]?null:r[m+1].$elm$,n,r,c,m):c>m&&Q(t,i,s)},te=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},ne=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$,a=t.$tag$,i=t.$text$;null===i?("slot"===a||K(e,t,false),null!==r&&null!==o?ee(n,r,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),Y(n,null,t,o,0,o.length-1)):null!==r&&Q(r,0,r.length-1)):e.$text$!==i&&(n.data=i)},re=function e(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(e)},oe=function(e,t){var n,r=e.$hostElement$,o=e.$cmpMeta$,a=e.$vnode$||F(null,null),i=(n=t)&&n.$tag$===U?t:z(null,null,t);E=r.tagName,o.$attrsToReflect$&&(i.$attrs$=i.$attrs$||{},o.$attrsToReflect$.map((function(e){var t=y(e,2),n=t[0],o=t[1];return i.$attrs$[o]=r[n]}))),i.$tag$=null,i.$flags$|=4,e.$vnode$=i,i.$elm$=a.$elm$=r.shadowRoot||r,w=r["s-sc"],ne(a,i)},ae=function(e){return Le(e).$hostElement$},ie=function(e,t,n){var r=ae(e);return{emit:function(e){return ce(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},ce=function(e,t,n){var r=S.ce(t,n);return e.dispatchEvent(r),r},le=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},ue=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){le(e,e.$ancestorComponent$);return Be((function(){return se(e,t)}))}e.$flags$|=512},se=function(e,t){var n,r=(e.$cmpMeta$.$tagName$,function(){}),o=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=y(e,2),n=t[0],r=t[1];return pe(o,n,r)})),e.$queuedListeners$=null),n=pe(o,"componentWillLoad")),r(),de(n,(function(){return fe(e,o,t)}))},fe=function(){var e=(0,h.Z)(g().mark((function e(t,n,r){var o,a,i,c,l,u;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$hostElement$,t.$cmpMeta$.$tagName$,a=function(){},i=o["s-rc"],r&&I(t),t.$cmpMeta$.$tagName$,c=function(){},$e(t,n),i&&(i.map((function(e){return e()})),o["s-rc"]=void 0),c(),a(),l=o["s-p"],u=function(){return me(t)},0===l.length?u():(Promise.all(l).then(u),t.$flags$|=4,l.length=0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),$e=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,oe(e,t)}catch(r){je(r,e.$hostElement$)}return null},me=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$lazyInstance$,o=e.$ancestorComponent$;64&e.$flags$?(pe(r,"componentDidUpdate"),n()):(e.$flags$|=64,ye(t),pe(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),o||he()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Ze((function(){return ue(e,!1)})),e.$flags$&=-517},he=function(e){ye(L.documentElement),Ze((function(){return ce(x,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})}))},pe=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){je(r)}},de=function(e,t){return e&&e.then?e.then(t):t()},ye=function(e){return e.classList.add("hydrated")},ve=function(e,t,n,r){var o,a,i=Le(e),c=i.$hostElement$,l=i.$instanceValues$.get(t),u=i.$flags$,s=i.$lazyInstance$;if(o=n,a=r.$members$[t][0],n=null==o||H(o)?o:4&a?"false"!==o&&(""===o||!!o):1&a?String(o):o,!(8&u&&void 0!==l||n===l)&&(i.$instanceValues$.set(t,n),s)){if(r.$watchers$&&128&u){var f=r.$watchers$[t];f&&f.map((function(e){try{s[e](n,l,t)}catch(r){je(r,c)}}))}2==(18&u)&&ue(i,!1)}},ge=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=y(e,2),a=r[0],i=y(r[1],1)[0];31&i||2&n&&32&i?Object.defineProperty(o,a,{get:function(){return e=a,Le(this).$instanceValues$.get(e);var e},set:function(e){ve(this,a,e,t)},configurable:!0,enumerable:!0}):1&n&&64&i&&Object.defineProperty(o,a,{value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Le(this);return r.$onInstancePromise$.then((function(){var e;return(e=r.$lazyInstance$)[a].apply(e,t)}))}})})),1&n){var a=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;S.jmp((function(){var t=a.get(e);r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){var t=y(e,2);t[0];return 15&t[1][0]})).map((function(e){var n=y(e,2),r=n[0],o=n[1],i=o[1]||r;return a.set(i,r),512&o[0]&&t.$attrsToReflect$.push([r,i]),i}))}}return e},be=function(){var e=(0,h.Z)(g().mark((function e(t,n,r,o,a){var i,c,l,u,s,f,$;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(32&n.$flags$)){e.next=17;break}if(n.$flags$|=32,!(a=Oe(r)).then){e.next=9;break}return i=function(){},e.next=7,a;case 7:a=e.sent,i();case 9:a.isProxied||(r.$watchers$=a.watchers,ge(a,r,2),a.isProxied=!0),r.$tagName$,c=function(){},n.$flags$|=8;try{new a(n)}catch(t){je(t)}n.$flags$&=-9,n.$flags$|=128,c(),a.style&&(l=a.style,u=Z(r),Me.has(u)||(r.$tagName$,s=function(){},A(u,l,!!(1&r.$flags$)),s()));case 17:f=n.$ancestorComponent$,$=function(){return ue(n,!0)},f&&f["s-rc"]?f["s-rc"].push($):$();case 20:case"end":return e.stop()}}),e)})));return function(t,n,r,o,a){return e.apply(this,arguments)}}(),we=function(e){if(0==(1&S.$flags$)){var t=Le(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(1&t.$flags$)j(e,t,n.$listeners$);else{t.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){le(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=y(t,2),r=n[0];if(31&y(n[1],1)[0]&&e.hasOwnProperty(r)){var o=e[r];delete e[r],e[r]=o}})),be(e,t,n)}r()}},Ee=function(e){if(0==(1&S.$flags$)){var t=Le(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0)}},ke=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=function(){},l=[],u=n.exclude||[],s=x.customElements,f=L.head,$=f.querySelector("meta[charset]"),h=L.createElement("style"),p=[],d=!0;Object.assign(S,n),S.$resourcesUrl$=new URL(n.resourcesUrl||"./",L.baseURI).href,e.map((function(e){return e[1].map((function(n){var i={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};i.$members$=n[2],i.$listeners$=n[3],i.$attrsToReflect$=[],i.$watchers$={};var f=i.$tagName$,$=function(e){c(l,e);var n=b(l);function l(e){var t;return(0,r.Z)(this,l),e=a(t=n.call(this,e)),Ne(e,i),1&i.$flags$&&e.attachShadow({mode:"open"}),t}return(0,o.Z)(l,[{key:"connectedCallback",value:function(){var e=this;t&&(clearTimeout(t),t=null),d?p.push(this):S.jmp((function(){return we(e)}))}},{key:"disconnectedCallback",value:function(){var e=this;S.jmp((function(){return Ee(e)}))}},{key:"componentOnReady",value:function(){return Le(this).$onReadyPromise$}}]),l}(m(HTMLElement));i.$lazyBundleId$=e[0],u.includes(f)||s.get(f)||(l.push(f),s.define(f,ge($,i,1)))}))})),h.innerHTML=l+P,h.setAttribute("data-styles",""),f.insertBefore(h,$?$.nextSibling:f.firstChild),d=!1,p.length?p.map((function(e){return e.connectedCallback()})):S.jmp((function(){return t=setTimeout(he,30)})),i()},xe=new WeakMap,Le=function(e){return xe.get(e)},Se=function(e,t){return xe.set(t.$lazyInstance$=e,t)},Ne=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],j(e,n,t.$listeners$),xe.set(e,n)},Re=function(e,t){return t in e},je=function(e,t){return(0,console.error)(e,t)},_e=new Map,Oe=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),a=e.$lazyBundleId$,i=_e.get(a);return i?i[o]:n(9047)("./".concat(a,".entry.js")).then((function(e){return _e.set(a,e),e[o]}),je)},Me=new Map,Pe=[],Te=[],Ce=function(e,t){return function(n){e.push(n),k||(k=!0,t&&4&S.$flags$?Ze(Ie):S.raf(Ie))}},Ae=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){je(n)}e.length=0},Ie=function e(){Ae(Pe),Ae(Te),(k=Pe.length>0)&&S.raf(e)},Ze=function(e){return N().then(e)},Be=Ce(Te,!0)},2917:function(e,t,n){e.exports=n(3076)},8626:function(e,t,n){"use strict";n.d(t,{J:function(){return a}});var r=n(7294),o=n(5444),a=function(e){var t=e.navItem;return r.createElement("nav",{className:"nav"},r.createElement("div",{className:"nav-item"}," ",t),r.createElement("ul",{className:"nav-item link"},r.createElement("li",null,r.createElement(o.rU,{to:"/"},"Posts")),r.createElement("li",null,r.createElement(o.rU,{to:"/about"},"About"))))}},4657:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r,o=n(5444),a=n(7294),i=n(5186),c=n(8626),l=n.p+"static/post-profile-35ce0540ae37421d3c75b482ff1a65f7.jpg",u=n(8448),s=n.n(u),f=n(7610),$=n.n(f),m=n(7027),h=function(){var e=(0,a.useRef)(),t=(0,a.useState)("pending"),n=t[0],r=t[1],o=(0,a.useContext)(m.N).theme;return(0,a.useEffect)((function(){var t=e.current,n=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:"bokangkim/bokangkim.github.io","issue-term":"url",theme:"dark"===o?"photon-dark":"github-light",crossorigin:"anonymous",async:"true"};Object.entries(a).forEach((function(e){var t=e[0],r=e[1];n.setAttribute(t,r)})),n.onload=function(){return r("success")},n.onerror=function(){return r("failed")},t.innerHTML="",t.appendChild(n)}),[o]),a.createElement("div",{className:"content"},a.createElement("section",{ref:e}),"failed"===n&&a.createElement("div",null,"Error. Please try again."),"pending"===n&&a.createElement("div",null,"Loading script..."))},p=n(8735);!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,p.p)().then((function(){return(0,p.b)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],languagesToLoad:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[4,"prismLanguageLoaded","languageLoaded"]]]]]],r)}));var d=function(e){var t=e.data,n=t.markdownRemark,r=t.allMarkdownRemark,u=n.frontmatter,f=r.nodes,m=f.findIndex((function(e){return e.id===n.id})),p=m>0?f[m-1]:null,d=m<f.length-1?f[m+1]:null,y=a.createElement("ul",{className:"tags each-post in-nav"},u.tag.map((function(e,t){return a.createElement("li",{key:t},e)}))),v=function(e){var t=e.postNode,n=e.direction;if(t){var r=[a.createElement("div",null,a.createElement("h2",null,t.frontmatter.title),a.createElement("p",null,t.frontmatter.description))];return"left"===n?r.unshift(a.createElement(s(),{className:"arrow"})):r.push(a.createElement($(),{className:"arrow"})),a.createElement("div",{id:"otherContents",className:"content"},a.createElement(o.rU,{className:n,to:t.fields.slug},r))}return a.createElement(a.Fragment,null)};return a.createElement(a.Fragment,null,a.createElement(i.q,{title:u.title,meta:[{name:"description",content:u.description},{name:"keywords",content:u.tag.join(",")}]}),a.createElement(c.J,{navItem:y}),a.createElement("div",{className:"content first"},a.createElement("article",{className:"post"},a.createElement("header",null,a.createElement("p",{className:"posted-on"},"Posted on ",u.date),a.createElement("h1",null,u.emoji," ",u.title),a.createElement("h4",{className:"description"},u.description)),a.createElement("section",{dangerouslySetInnerHTML:{__html:n.html}}),a.createElement("footer",null,a.createElement("img",{className:"profile pic",src:l}),a.createElement("div",{className:"profile text"},a.createElement("h1",null,"BoKang_Kim"),a.createElement("p",null,"Math Lover Developer"))))),a.createElement(h,null),a.createElement(v,{postNode:p,direction:"left"}),a.createElement(v,{postNode:d,direction:"right"}))}},5576:function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},3076:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(O){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new R(r||[]);return a._invoke=function(e,t,n){var r=f;return function(o,a){if(r===m)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return _()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var l=s(e,t,n);if("normal"===l.type){if(r=n.done?h:$,l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=h,n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=u;var f="suspendedStart",$="suspendedYield",m="executing",h="completed",p={};function d(){}function y(){}function v(){}var g={};l(g,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==n&&r.call(w,a)&&(g=w);var E=v.prototype=d.prototype=Object.create(g);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function L(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function j(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:_}}function _(){return{value:t,done:!0}}return y.prototype=v,l(E,"constructor",v),l(v,"constructor",y),y.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},k(x.prototype),l(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new x(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(E),l(E,c,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:j(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},8448:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("path",{id:"XMLID_6_",d:"M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394\r\n\tc5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998\r\n\tc-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0\r\n\tc5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z",key:0}),r.createElement("g",{key:1}),r.createElement("g",{key:2}),r.createElement("g",{key:3}),r.createElement("g",{key:4}),r.createElement("g",{key:5}),r.createElement("g",{key:6}),r.createElement("g",{key:7}),r.createElement("g",{key:8}),r.createElement("g",{key:9}),r.createElement("g",{key:10}),r.createElement("g",{key:11}),r.createElement("g",{key:12}),r.createElement("g",{key:13}),r.createElement("g",{key:14}),r.createElement("g",{key:15})])}o.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 330 330",style:{enableBackground:"new 0 0 330 330"},xmlSpace:"preserve"},e.exports=o,o.default=o},7610:function(e,t,n){var r=n(7294);function o(e){return r.createElement("svg",e,[r.createElement("path",{id:"XMLID_2_",d:"M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605\r\n\tl-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396\r\n\tl-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998\r\n\tc2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z",key:0}),r.createElement("g",{key:1}),r.createElement("g",{key:2}),r.createElement("g",{key:3}),r.createElement("g",{key:4}),r.createElement("g",{key:5}),r.createElement("g",{key:6}),r.createElement("g",{key:7}),r.createElement("g",{key:8}),r.createElement("g",{key:9}),r.createElement("g",{key:10}),r.createElement("g",{key:11}),r.createElement("g",{key:12}),r.createElement("g",{key:13}),r.createElement("g",{key:14}),r.createElement("g",{key:15})])}o.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 330 330",style:{enableBackground:"new 0 0 330 330"},xmlSpace:"preserve"},e.exports=o,o.default=o},4610:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},7892:function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,l,"next",e)}function l(e){r(i,o,a,c,l,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return o}})},9907:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},5626:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})},3427:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(4610);var o=n(9719);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},9719:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(4610);function o(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=component---src-templates-markdown-layout-tsx-798ea9edce6af39a2841.js.map