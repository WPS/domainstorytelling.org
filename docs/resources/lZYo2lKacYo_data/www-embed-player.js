(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype}
function oa(){this.o=!1;this.l=null;this.i=void 0;this.h=1;this.u=this.m=0;this.C=this.j=null}
function pa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
oa.prototype.A=function(a){this.i=a};
function qa(a,b){a.j={Ja:b,Ka:!0};a.h=a.m||a.u}
oa.prototype.return=function(a){this.j={return:a};this.h=this.u};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.B=function(a){this.h=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.u=c)}
function sa(a){a.m=0;var b=a.j.Ja;a.j=null;return b}
function ta(a){a.C=[a.j];a.m=0;a.u=0}
function ua(a){var b=a.C.splice(0)[0];(b=a.j=a.j||b)?b.Ka?a.h=a.m||a.u:void 0!=b.B&&a.u<b.B?(a.h=b.B,a.j=null):a.h=a.u:a.h=0}
function va(a){this.h=new oa;this.i=a}
function wa(a,b){pa(a.h);var c=a.h.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),ya(a)}a.h.l=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ka)throw b.Ja;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l.next,b,a.h.A):(a.h.A(b),b=ya(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l["throw"],b,a.h.A):(qa(a.h,b),b=ya(a));return b};
this.return=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){b=new za(new va(b));na&&a.prototype&&na(b,a.prototype);return b}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Aa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Aa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Aa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Aa(h.data_,l))for(h=0;h<n.length;h++){var q=n[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:h,H:q}}return{id:l,list:n,index:-1,H:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.H?l.H.value=k:(l.H={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.H),this.h.previous.next=l.H,this.h.previous=l.H,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.H&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.H.previous.next=h.H.next,h.H.next.previous=h.H.previous,h.H.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).H};
e.prototype.get=function(h){return(h=d(this,h).H)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||na});
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Aa(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.N),reject:g(this.u)}};
b.prototype.N=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.aa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.m(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.ba(h,g):this.m(g)};
b.prototype.u=function(g){this.A(2,g)};
b.prototype.m=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.O();this.C()};
b.prototype.O=function(){var g=this;e(function(){if(g.G()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.G=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.aa=function(g){var h=this.l();g.ja(h.resolve,h.reject)};
b.prototype.ba=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(A){try{l(r(A))}catch(I){n(I)}}:p}
var l,n,q=new b(function(r,p){l=r;n=p});
this.ja(k(g,l),k(h,n));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ja=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ja(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function q(A){return function(I){r[A]=I;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).ja(q(r.length-1),n),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ea(){}
function Fa(a){a.ya=void 0;a.getInstance=function(){return a.ya?a.ya:a.ya=new a}}
function Ga(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ha(a){var b=Ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ka(a){return Object.prototype.hasOwnProperty.call(a,La)&&a[La]||(a[La]=++Ma)}
var La="closure_uid_"+(1E9*Math.random()>>>0),Ma=0;function Na(a,b,c){return a.call.apply(a.bind,arguments)}
function Oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Pa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Pa=Na:Pa=Oa;return Pa.apply(null,arguments)}
function Qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ra(a,b){z(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pl=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Sa(a){return a}
;function Ta(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ta);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Sa=b)}
C(Ta,Error);Ta.prototype.name="CustomError";function Ua(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Va(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Xa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ya=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Za=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function $a(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ab(a,b){b=Wa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function bb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function cb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ha(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function db(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function eb(a){var b=fb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function gb(a){for(var b in a)return!1;return!0}
function hb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ib(){var a=F("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function kb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function lb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=lb(a[c]);return b}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ob;function pb(){if(void 0===ob){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Sa,createScript:Sa,createScriptURL:Sa})}catch(c){y.console&&y.console.error(c.message)}ob=a}else ob=a}return ob}
;function qb(a,b){this.h=a===rb&&b||""}
qb.prototype.S=!0;qb.prototype.R=function(){return this.h};
function sb(a){return new qb(rb,a)}
var rb={};sb("");var tb={};function ub(a){this.h=tb===tb?a:"";this.S=!0}
ub.prototype.R=function(){return this.h.toString()};
ub.prototype.toString=function(){return this.h.toString()};function vb(a,b){this.h=b===wb?a:""}
m=vb.prototype;m.S=!0;m.R=function(){return this.h.toString()};
m.xa=!0;m.sa=function(){return 1};
m.toString=function(){return this.h+""};
function xb(a){if(a instanceof vb&&a.constructor===vb)return a.h;Ga(a);return"type_error:TrustedResourceUrl"}
var wb={};function yb(a){var b=pb();a=b?b.createScriptURL(a):a;return new vb(a,wb)}
;var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ab(a,b){if(b)a=a.replace(Bb,"&amp;").replace(Cb,"&lt;").replace(Db,"&gt;").replace(Eb,"&quot;").replace(Fb,"&#39;").replace(Gb,"&#0;");else{if(!Hb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Bb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Cb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Db,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Eb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Fb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Gb,"&#0;"))}return a}
var Bb=/&/g,Cb=/</g,Db=/>/g,Eb=/"/g,Fb=/'/g,Gb=/\x00/g,Hb=/[\x00&<>"']/;function Ib(a,b){this.h=b===Jb?a:""}
m=Ib.prototype;m.S=!0;m.R=function(){return this.h.toString()};
m.xa=!0;m.sa=function(){return 1};
m.toString=function(){return this.h.toString()};
function Kb(a){if(a instanceof Ib&&a.constructor===Ib)return a.h;Ga(a);return"type_error:SafeUrl"}
var Lb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Mb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Nb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Jb={},Ob=new Ib("about:invalid#zClosurez",Jb);var Pb;a:{var Qb=y.navigator;if(Qb){var Rb=Qb.userAgent;if(Rb){Pb=Rb;break a}}Pb=""}function G(a){return-1!=Pb.indexOf(a)}
;var Sb={};function Tb(a,b,c){this.h=c===Sb?a:"";this.i=b;this.S=this.xa=!0}
Tb.prototype.sa=function(){return this.i};
Tb.prototype.R=function(){return this.h.toString()};
Tb.prototype.toString=function(){return this.h.toString()};
function Ub(a,b){var c=pb();a=c?c.createHTML(a):a;return new Tb(a,b,Sb)}
;function Vb(a,b){b instanceof Ib||b instanceof Ib||(b="object"==typeof b&&b.S?b.R():String(b),Nb.test(b)||(b="about:invalid#zClosurez"),b=new Ib(b,Jb));a.href=Kb(b)}
function Wb(a,b){a.rel="stylesheet";a.href=xb(b).toString();(b=Xb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Yb(){return Xb("script[nonce]",void 0)}
var Zb=/^[\w+/_-]+[=]{0,2}$/;function Xb(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Zb.test(a)?a:"":""}
;function $b(a){return a=Ab(a,void 0)}
function ac(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var bc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function cc(a){return a?decodeURI(a):a}
function dc(a){return cc(a.match(bc)[3]||null)}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function gc(a,b){b=fc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var hc=/#|$/;function H(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function ic(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function jc(a){jc[" "](a);return a}
jc[" "]=Ea;var kc=G("Opera"),lc=G("Trident")||G("MSIE"),mc=G("Edge"),nc=G("Gecko")&&!(-1!=Pb.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),oc=-1!=Pb.toLowerCase().indexOf("webkit")&&!G("Edge"),pc=G("Android");function qc(){var a=y.document;return a?a.documentMode:void 0}
var rc;a:{var sc="",tc=function(){var a=Pb;if(nc)return/rv:([^\);]+)(\)|;)/.exec(a);if(mc)return/Edge\/([\d\.]+)/.exec(a);if(lc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(oc)return/WebKit\/(\S+)/.exec(a);if(kc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
tc&&(sc=tc?tc[1]:"");if(lc){var uc=qc();if(null!=uc&&uc>parseFloat(sc)){rc=String(uc);break a}}rc=sc}var vc=rc,wc;if(y.document&&lc){var xc=qc();wc=xc?xc:parseInt(vc,10)||void 0}else wc=void 0;var yc=wc;var zc=ic()||G("iPod"),Ac=G("iPad"),Bc=G("Safari")&&!((G("Chrome")||G("CriOS"))&&!G("Edge")||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(ic()||G("iPad")||G("iPod"));var Cc={},Dc=null;
function Ec(a){var b=3;Ha(a);void 0===b&&(b=0);if(!Dc){Dc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Cc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Dc[h]&&(Dc[h]=g)}}}b=Cc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Fc={rl:{value:!0,configurable:!0}};var Gc=Object,Hc=Gc.freeze,Ic=[];Array.isArray(Ic)&&!Object.isFrozen(Ic)&&Object.defineProperties(Ic,Fc);Hc.call(Gc,Ic);var K=window;sb("csi.gstatic.com");sb("googleads.g.doubleclick.net");sb("pagead2.googlesyndication.com");sb("partner.googleadservices.com");sb("pubads.g.doubleclick.net");sb("securepubads.g.doubleclick.net");sb("tpc.googlesyndication.com");var Jc={};function Kc(){}
function Lc(a,b){if(b!==Jc)throw Error("Bad secret");this.h=a}
v(Lc,Kc);Lc.prototype.toString=function(){return this.h};
var Mc=new Lc("about:invalid#zTSz",Jc);function Nc(a){if(a instanceof Kc)if(a instanceof Lc)a=a.h;else throw Error("wrong type");else a=Kb(a);return a}
;function Oc(a,b){a.src=xb(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;(c=(b=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;var Pc=!lc||9<=Number(yc);function Qc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Qc.prototype;m.clone=function(){return new Qc(this.x,this.y)};
m.equals=function(a){return a instanceof Qc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Rc(a,b){this.width=a;this.height=b}
m=Rc.prototype;m.clone=function(){return new Rc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Sc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Tc(a,b){db(b,function(c,d){c&&"object"==typeof c&&c.S&&(c=c.R());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Uc.hasOwnProperty(d)?a.setAttribute(Uc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Uc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Vc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Pc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',$b(g.name),'"');if(g.type){f.push(' type="',$b(g.type),'"');var h={};nb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Wc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Tc(f,g));2<d.length&&Xc(e,f,d);return f}
function Xc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ha(f)||Ia(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ia(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}D(g?bb(f):f,d)}}}
function Wc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Yc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Zc(a){var b=$c;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function ad(){var a=[];Zc(function(b){a.push(b)});
return a}
var $c={Jb:"allow-forms",Kb:"allow-modals",Lb:"allow-orientation-lock",Mb:"allow-pointer-lock",Nb:"allow-popups",Ob:"allow-popups-to-escape-sandbox",Pb:"allow-presentation",Qb:"allow-same-origin",Rb:"allow-scripts",Sb:"allow-top-navigation",Tb:"allow-top-navigation-by-user-activation"},bd=Va(function(){return ad()});
function cd(){var a=Wc(document,"IFRAME"),b={};D(bd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function dd(a){this.isValid=a}
function ed(a){return new dd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var fd=[ed("data"),ed("http"),ed("https"),ed("mailto"),ed("ftp"),new dd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function gd(a){hd();return yb(a)}
var hd=Ea;function id(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var jd=(new Date).getTime();function kd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function ld(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(q){for(var r=g,p=0;64>p;p+=4)r[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(q<<1|q>>>31)&4294967295;q=e[0];var A=e[1],I=e[2],E=e[3],Q=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var V=E^A&(I^E);var J=1518500249}else V=A^I^E,J=1859775393;else 60>p?(V=A&I|E&(A|I),J=2400959708):(V=A^I^E,J=3395469782);V=((q<<5|q>>>27)&4294967295)+V+Q+J+r[p]&4294967295;Q=E;E=I;I=(A<<30|A>>>2)&4294967295;A=q;q=V}e[0]=e[0]+q&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+I&4294967295;e[3]=e[3]+E&4294967295;e[4]=e[4]+Q&4294967295}
function c(q,r){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],A=0,I=q.length;A<I;++A)p.push(q.charCodeAt(A));q=p}r||(r=q.length);p=0;if(0==l)for(;p+64<r;)b(q.slice(p,p+64)),p+=64,n+=64;for(;p<r;)if(f[l++]=q[p++],n++,64==l)for(l=0,b(f);p+64<r;)b(q.slice(p,p+64)),p+=64,n+=64}
function d(){var q=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var A=24;0<=A;A-=8)q[r++]=e[p]>>A&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ta:function(){for(var q=d(),r="",p=0;p<q.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return r}}}
;function md(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,nd(kd(d),a,c||null)].join(" "):null}
function nd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),od(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=od(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function od(a){var b=ld();b.update(a);return b.Ta().toLowerCase()}
;var pd={};function qd(a){this.h=a||{cookie:""}}
m=qd.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{za:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.xl;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.za}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{za:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var rd=new qd("undefined"==typeof document?null:document);function sd(a){return!!pd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function td(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;sd(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new qd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");sd(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function ud(a,b,c,d){(a=y[a])||(a=(new qd(document)).get(b));return a?md(a,c,d):null}
function vd(a){var b=void 0===b?!1:b;var c=kd(String(y.location.href)),d=[];if(td(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new qd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?md(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&sd(b)&&((b=ud("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ud("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function wd(){this.data_=[];this.h=-1}
wd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
wd.prototype.get=function(a){return!!this.data_[a]};
function xd(a){-1==a.h&&(a.h=Za(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function yd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
yd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function zd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Ad;
function Bd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=Wc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Pa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Fa;c.Fa=null;e()}};
return function(e){d.next={Fa:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Cd(a){y.setTimeout(function(){throw a;},0)}
;function Dd(){this.i=this.h=null}
Dd.prototype.add=function(a,b){var c=Ed.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Dd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Ed=new yd(function(){return new Fd},function(a){return a.reset()});
function Fd(){this.next=this.scope=this.h=null}
Fd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Fd.prototype.reset=function(){this.next=this.scope=this.h=null};function Gd(a,b){Hd||Id();Jd||(Hd(),Jd=!0);Kd.add(a,b)}
var Hd;function Id(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Hd=function(){a.then(Ld)}}else Hd=function(){var b=Ld;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!G("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(Ad||(Ad=Bd()),Ad(b)):y.setImmediate(b)}}
var Jd=!1,Kd=new Dd;function Ld(){for(var a;a=Kd.remove();){try{a.h.call(a.scope)}catch(b){Cd(b)}zd(Ed,a)}Jd=!1}
;function Md(a,b){this.h=a[y.Symbol.iterator]();this.i=b;this.j=0}
Md.prototype[Symbol.iterator]=function(){return this};
Md.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Nd(a,b){return new Md(a,b)}
;function Od(){this.blockSize=-1}
;function Pd(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
C(Pd,Od);Pd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Qd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Pd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(0==f)for(;d<=c;)Qd(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Qd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Qd(this,e);f=0;break}}this.i=f;this.l+=b}};
Pd.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.u[c]=b&255,b/=256;Qd(this,this.u);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Rd(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Sd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Td[c])c=Td[c];else{c=String(c);if(!Td[c]){var f=/function\s+([^\(]+)/m.exec(c);Td[c]=f?f[1]:"[Anonymous]"}c=Td[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Sd(a,b){b||(b={});b[Ud(a)]=!0;var c=a.stack||"";(a=a.Sa)&&!b[Ud(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Sd(a,b));return c}
function Ud(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Td={};function Vd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Wd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ha(d)?Wd.apply(null,d):Vd(d)}}
;function L(){this.h=this.h;this.u=this.u}
L.prototype.h=!1;L.prototype.dispose=function(){this.h||(this.h=!0,this.D())};
function Xd(a,b){a.h?b():(a.u||(a.u=[]),a.u.push(b))}
L.prototype.D=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function Yd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Zd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function $d(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Yd(a).match(/\S+/g)||[],b=0<=Wa(a,b));return b}
function ae(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):$d(a,"inverted-hdpi")&&Zd(a,Array.prototype.filter.call(a.classList?a.classList:Yd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var be="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function ce(){}
ce.prototype.next=function(){return ce.prototype.h.call(this)};
ce.prototype.h=function(){throw be;};
ce.prototype.K=function(){return this};function de(a){if(a instanceof ee||a instanceof fe||a instanceof ge)return a;if("function"==typeof a.next)return new ee(function(){return he(a)});
if("function"==typeof a[Symbol.iterator])return new ee(function(){return a[Symbol.iterator]()});
if("function"==typeof a.K)return new ee(function(){return he(a.K())});
throw Error("Not an iterator or iterable.");}
function he(a){if(!(a instanceof ce))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.next();break}catch(d){if(d!==be)throw d;b=!0}return{value:c,done:b}}}}
function ee(a){this.h=a}
ee.prototype.K=function(){return new fe(this.h())};
ee.prototype[Symbol.iterator]=function(){return new ge(this.h())};
ee.prototype.i=function(){return new ge(this.h())};
function fe(a){this.j=a}
v(fe,ce);fe.prototype.h=function(){var a=this.j.next();if(a.done)throw be;return a.value};
fe.prototype.next=function(){return fe.prototype.h.call(this)};
fe.prototype[Symbol.iterator]=function(){return new ge(this.j)};
fe.prototype.i=function(){return new ge(this.j)};
function ge(a){ee.call(this,function(){return a});
this.j=a}
v(ge,ee);ge.prototype.next=function(){return this.j.next()};function ie(a,b){this.i={};this.h=[];this.V=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ie)for(c=je(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function je(a){ke(a);return a.h.concat()}
m=ie.prototype;m.has=function(a){return le(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||me;ke(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function me(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.V=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return le(this.i,a)?(delete this.i[a],--this.size,this.V++,this.h.length>2*this.size&&ke(this),!0):!1};
function ke(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];le(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],le(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return le(this.i,a)?this.i[a]:b};
m.set=function(a,b){le(this.i,a)||(this.size+=1,this.h.push(a),this.V++);this.i[a]=b};
m.forEach=function(a,b){for(var c=je(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new ie(this)};
m.keys=function(){return de(this.K(!0)).i()};
m.values=function(){return de(this.K(!1)).i()};
m.entries=function(){var a=this;return Nd(this.keys(),function(b){return[b,a.get(b)]})};
m.K=function(a){ke(this);var b=0,c=this.V,d=this,e=new ce;e.h=function(){if(c!=d.V)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw be;var f=d.h[b++];return a?f:d.i[f]};
e.next=e.h.bind(e);return e};
function le(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var ne=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ea,b),y.removeEventListener("test",Ea,b)}catch(c){}return a}();function oe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
oe.prototype.stopPropagation=function(){this.j=!0};
oe.prototype.preventDefault=function(){this.defaultPrevented=!0};function pe(a,b){oe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
C(pe,oe);var qe={2:"touch",3:"pen",4:"mouse"};
pe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(nc){a:{try{jc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:qe[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&pe.M.preventDefault.call(this)};
pe.prototype.stopPropagation=function(){pe.M.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
pe.prototype.preventDefault=function(){pe.M.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var re="closure_listenable_"+(1E6*Math.random()|0);var se=0;function te(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.la=e;this.key=++se;this.ea=this.ia=!1}
function ue(a){a.ea=!0;a.listener=null;a.h=null;a.src=null;a.la=null}
;function ve(a){this.src=a;this.listeners={};this.h=0}
ve.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=we(a,b,d,e);-1<g?(b=a[g],c||(b.ia=!1)):(b=new te(b,this.src,f,!!d,e),b.ia=c,a.push(b));return b};
ve.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=we(e,b,c,d);return-1<b?(ue(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function xe(a,b){var c=b.type;c in a.listeners&&ab(a.listeners[c],b)&&(ue(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function we(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ea&&f.listener==b&&f.capture==!!c&&f.la==d)return e}return-1}
;var ye="closure_lm_"+(1E6*Math.random()|0),ze={},Ae=0;function Be(a,b,c,d,e){if(d&&d.once)Ce(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Be(a,b[f],c,d,e);else c=De(c),a&&a[re]?a.ca(b,c,Ia(d)?!!d.capture:!!d,e):Ee(a,b,c,!1,d,e)}
function Ee(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ia(e)?!!e.capture:!!e,h=Fe(a);h||(a[ye]=h=new ve(a));c=h.add(b,c,d,g,f);if(!c.h){d=Ge();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)ne||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(He(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ae++}}
function Ge(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ie;return a}
function Ce(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ce(a,b[f],c,d,e);else c=De(c),a&&a[re]?a.i.add(String(b),c,!0,Ia(d)?!!d.capture:!!d,e):Ee(a,b,c,!0,d,e)}
function Je(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else(d=Ia(d)?!!d.capture:!!d,c=De(c),a&&a[re])?a.i.remove(String(b),c,d,e):a&&(a=Fe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=we(b,c,d,e)),(c=-1<a?b[a]:null)&&Ke(c))}
function Ke(a){if("number"!==typeof a&&a&&!a.ea){var b=a.src;if(b&&b[re])xe(b.i,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(He(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ae--;(c=Fe(b))?(xe(c,a),0==c.h&&(c.src=null,b[ye]=null)):ue(a)}}}
function He(a){return a in ze?ze[a]:ze[a]="on"+a}
function Ie(a,b){if(a.ea)a=!0;else{b=new pe(b,this);var c=a.listener,d=a.la||a.src;a.ia&&Ke(a);a=c.call(d,b)}return a}
function Fe(a){a=a[ye];return a instanceof ve?a:null}
var Le="__closure_events_fn_"+(1E9*Math.random()>>>0);function De(a){if("function"===typeof a)return a;a[Le]||(a[Le]=function(b){return a.handleEvent(b)});
return a[Le]}
;function Me(){L.call(this);this.i=new ve(this);this.J=this;this.o=null}
C(Me,L);Me.prototype[re]=!0;Me.prototype.addEventListener=function(a,b,c,d){Be(this,a,b,c,d)};
Me.prototype.removeEventListener=function(a,b,c,d){Je(this,a,b,c,d)};
function Ne(a,b){var c=a.o;if(c){var d=[];for(var e=1;c;c=c.o)d.push(c),++e}a=a.J;c=b.type||b;"string"===typeof b?b=new oe(b,a):b instanceof oe?b.target=b.target||a:(e=b,b=new oe(c,a),nb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Oe(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Oe(g,c,!0,b)&&e,b.j||(e=Oe(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Oe(g,c,!1,b)&&e}
Me.prototype.D=function(){Me.M.D.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ue(d[e]);delete a.listeners[c];a.h--}}this.o=null};
Me.prototype.ca=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Oe(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ea&&g.capture==c){var h=g.listener,k=g.la||g.src;g.ia&&xe(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Pe(a){var b=[];Qe(new Re,a,b);return b.join("")}
function Re(){}
function Qe(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Qe(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Se(d,c),c.push(":"),Qe(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Se(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Te={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ue=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Se(a,b){b.push('"',a.replace(Ue,function(c){var d=Te[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Te[c]=d);return d}),'"')}
;function Ve(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function We(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.u=this.m=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){Xe(b,2,c)},function(c){Xe(b,3,c)})}catch(c){Xe(this,3,c)}}
function Ye(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Ye.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Ze=new yd(function(){return new Ye},function(a){a.reset()});
function $e(a,b,c){var d=Ze.get();d.i=a;d.onRejected=b;d.context=c;return d}
function af(a){return new We(function(b,c){c(a)})}
We.prototype.then=function(a,b,c){return bf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
We.prototype.$goog_Thenable=!0;function cf(a,b){return bf(a,null,b,void 0)}
We.prototype.cancel=function(a){if(0==this.h){var b=new df(a);Gd(function(){ef(this,b)},this)}};
function ef(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?ef(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ff(c),gf(c,e,3,b)))}a.j=null}else Xe(a,3,b)}
function hf(a,b){a.i||2!=a.h&&3!=a.h||jf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function bf(a,b,c,d){var e=$e(null,null,null);e.h=new We(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof df?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;hf(a,e);return e.h}
We.prototype.C=function(a){this.h=0;Xe(this,2,a)};
We.prototype.G=function(a){this.h=0;Xe(this,3,a)};
function Xe(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.G;if(d instanceof We){hf(d,$e(e||Ea,f||null,a));var g=!0}else if(Ve(d))d.then(e,f,a),g=!0;else{if(Ia(d))try{var h=d.then;if("function"===typeof h){kf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.h=b,a.j=null,jf(a),3!=b||c instanceof df||lf(a,c))}}
function kf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function jf(a){a.m||(a.m=!0,Gd(a.A,a))}
function ff(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
We.prototype.A=function(){for(var a;a=ff(this);)gf(this,a,this.h,this.o);this.m=!1};
function gf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.u;a=a.j)a.u=!1;if(b.h)b.h.j=null,mf(b,c,d);else try{b.j?b.i.call(b.context):mf(b,c,d)}catch(e){nf.call(null,e)}zd(Ze,b)}
function mf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function lf(a,b){a.u=!0;Gd(function(){a.u&&nf.call(null,b)})}
var nf=Cd;function df(a){Ta.call(this,a)}
C(df,Ta);df.prototype.name="cancel";function M(a){L.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
C(M,L);m=M.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function of(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.da(b)}}
m.da=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ea):(c&&ab(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.W=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];pf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.da(c)}}return 0!=e}return!1};
function pf(a,b,c){Gd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.da,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.D=function(){M.M.D.call(this);this.clear();this.l.length=0};function qf(a){this.h=a}
qf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Pe(b))};
qf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
qf.prototype.remove=function(a){this.h.remove(a)};function rf(a){this.h=a}
C(rf,qf);function sf(a){this.data=a}
function tf(a){return void 0===a||a instanceof sf?a:new sf(a)}
rf.prototype.set=function(a,b){rf.M.set.call(this,a,tf(b))};
rf.prototype.i=function(a){a=rf.M.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
rf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function uf(a){this.h=a}
C(uf,rf);uf.prototype.set=function(a,b,c){if(b=tf(b)){if(c){if(c<Date.now()){uf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}uf.M.set.call(this,a,b)};
uf.prototype.i=function(a){var b=uf.M.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())uf.prototype.remove.call(this,a);else return b}};function vf(){}
;function wf(){}
C(wf,vf);wf.prototype[Symbol.iterator]=function(){return de(this.K(!0)).i()};
wf.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function xf(a){this.h=a}
C(xf,wf);m=xf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.K=function(a){var b=0,c=this.h,d=new ce;d.h=function(){if(b>=c.length)throw be;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function yf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
C(yf,xf);function zf(a,b){this.i=a;this.h=null;if(lc&&!(9<=Number(yc))){Af||(Af=new ie);this.h=Af.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Af.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
C(zf,wf);var Bf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Af=null;function Cf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Bf[b]})}
m=zf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Cf(a),b);Df(this)};
m.get=function(a){a=this.h.getAttribute(Cf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Cf(a));Df(this)};
m.K=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new ce;d.h=function(){if(b>=c.length)throw be;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Df(this)};
function Df(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ef(a,b){this.i=a;this.h=b+"::"}
C(Ef,wf);Ef.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ef.prototype.get=function(a){return this.i.get(this.h+a)};
Ef.prototype.remove=function(a){this.i.remove(this.h+a)};
Ef.prototype.K=function(a){var b=this.i.K(!0),c=this,d=new ce;d.h=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
d.next=d.h.bind(d);return d};function Ff(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Gf,Hf,If=y.window,Jf=(null===(Gf=null===If||void 0===If?void 0:If.yt)||void 0===Gf?void 0:Gf.config_)||(null===(Hf=null===If||void 0===If?void 0:If.ytcfg)||void 0===Hf?void 0:Hf.data_)||{};z("yt.config_",Jf,void 0);function N(a){for(var b=0;b<arguments.length;++b);Ff(Jf,arguments)}
function F(a,b){return a in Jf?Jf[a]:b}
;var Kf=[];function Lf(a){Kf.forEach(function(b){return b(a)})}
function Mf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Nf(b)}}:a}
function Nf(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=F("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),N("ERRORS",b));Lf(a)}
function Of(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=F("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),N("ERRORS",b))}
;var Pf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Pf,void 0);function Qf(a){Ff(Pf,arguments)}
;function O(a){a=Rf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Sf(a,b){a=Rf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Rf(a){var b=F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:F("EXPERIMENT_FLAGS",{})[a]}
;var Tf=0,Uf=oc?"webkit":nc?"moz":lc?"ms":kc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Tf},void 0);var Vf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Wf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Vf||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Xf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Wf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Wf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Wf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var fb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",fb,void 0);var Yf=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",Yf,void 0);
function Zf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return eb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ia(e[4])&&Ia(d)&&jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var $f=Va(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ag(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Zf(a,b,c,d);if(e)return e;e=++Yf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Wf(h);if(!Yc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Wf(h);
h.currentTarget=a;return c.call(a,h)};
g=Mf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),$f()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);fb[e]=[a,b,c,g,d];return e}
function bg(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in fb){var c=fb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?$f()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete fb[b]}}))}
;var cg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function dg(a,b){"function"===typeof a&&(a=Mf(a));return window.setTimeout(a,b)}
function eg(a){window.clearTimeout(a)}
;function fg(a){this.C=a;this.i=null;this.m=0;this.A=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.J=ag(window,"mousemove",Pa(this.N,this));a=Pa(this.G,this);"function"===typeof a&&(a=Mf(a));this.O=window.setInterval(a,25)}
C(fg,L);fg.prototype.N=function(a){void 0===a.h&&Xf(a);var b=a.h;void 0===a.i&&Xf(a);this.i=new Qc(b,a.i)};
fg.prototype.G=function(){if(this.i){var a=cg();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.o=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
fg.prototype.D=function(){window.clearInterval(this.O);bg(this.J)};function gg(){}
function hg(a,b){return ig(a,0,b)}
function jg(a,b){return ig(a,1,b)}
;function kg(){gg.apply(this,arguments)}
v(kg,gg);function ig(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):dg(a,c||0)}
function lg(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):eg(a)}}
kg.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
kg.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};kg.h||(kg.h=new kg);var mg={};
function ng(a){var b=void 0===a?{}:a;a=void 0===b.mb?!1:b.mb;b=void 0===b.Wa?!0:b.Wa;if(null==B("_lact",window)){var c=parseInt(F("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&og();ag(document,"keydown",og);ag(document,"keyup",og);ag(document,"mousedown",og);ag(document,"mouseup",og);a?ag(window,"touchmove",function(){pg("touchmove",200)},{passive:!0}):(ag(window,"resize",function(){pg("resize",200)}),b&&ag(window,"scroll",function(){pg("scroll",200)}));
new fg(function(){pg("mouse",100)});
ag(document,"touchstart",og,{passive:!0});ag(document,"touchend",og,{passive:!0})}}
function pg(a,b){mg[a]||(mg[a]=!0,jg(function(){og();mg[a]=!1},b))}
function og(){null==B("_lact",window)&&ng();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function qg(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function rg(){var a=sg;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function tg(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var ug=/^[\w.]*$/,vg={q:!0,search_query:!0};function wg(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=xg(f[0]||""),h=xg(f[1]||"");g in c?Array.isArray(c[g])?cb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],n=String(wg);k.args=[{key:l,value:f[1],query:a,method:yg==n?"unchanged":n}];vg.hasOwnProperty(l)||Of(k)}}return c}
var yg=String(wg);function zg(a){var b=[];db(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ag(a){"?"==a.charAt(0)&&(a=a.substr(1));return wg(a,"&")}
function Bg(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Ag(1<a.length?a[1]:a[0])):{}}
function Cg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ag(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return gc(a,e)+d}
function Dg(a){if(!b)var b=window.location.href;var c=a.match(bc)[1]||null,d=dc(a);c&&d?(a=a.match(bc),b=b.match(bc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)==d&&(Number(b.match(bc)[4]||null)||null)==(Number(a.match(bc)[4]||null)||null):!0;return a}
function xg(a){return a&&a.match(ug)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Eg(a){var b=Fg;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=jd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ja){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?K:g;try{var h=g.history.length}catch(Ja){h=0}e.u_his=h;e.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(e.u_h=K.screen.height,e.u_w=K.screen.width,
e.u_ah=K.screen.availHeight,e.u_aw=K.screen.availWidth,e.u_cd=K.screen.colorDepth);K.navigator&&K.navigator.plugins&&(e.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(e.u_nmime=K.navigator.mimeTypes.length)}catch(Ja){}h=b.h;try{var k=h.screenX;var l=h.screenY}catch(Ja){}try{var n=h.outerWidth;var q=h.outerHeight}catch(Ja){}try{var r=h.innerWidth;var p=h.innerHeight}catch(Ja){}try{var A=h.screenLeft;var I=h.screenTop}catch(Ja){}try{r=h.innerWidth,p=h.innerHeight}catch(Ja){}try{var E=
h.screen.availWidth;var Q=h.screen.availTop}catch(Ja){}k=[A,I,k,l,E,Q,n,q,r,p];l=b.h.top;try{var V=(l||window).document,J="CSS1Compat"==V.compatMode?V.documentElement:V.body;var T=(new Rc(J.clientWidth,J.clientHeight)).round()}catch(Ja){T=new Rc(-12245933,-12245933)}V=T;T={};J=new wd;y.SVGElement&&y.document.createElementNS&&J.set(0);l=cd();l["allow-top-navigation-by-user-activation"]&&J.set(1);l["allow-popups-to-escape-sandbox"]&&J.set(2);y.crypto&&y.crypto.subtle&&J.set(3);y.TextDecoder&&y.TextEncoder&&
J.set(4);J=xd(J);T.bc=J;T.bih=V.height;T.biw=V.width;T.brdim=k.join();b=b.i;b=(T.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,T.wgl=!!K.WebGLRenderingContext,T);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Fg=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return zg(Eg(a))},void 0);var Gg="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Hg(){if(!Gg)return null;var a=Gg();return"open"in a?a:null}
function Ig(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var Jg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Kg="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa(["client_dev_root_url","client_dev_regex_map","expflag"])),Lg=!1;
function Mg(a,b){b=void 0===b?{}:b;var c=Dg(a),d=O("web_ajax_ignore_global_headers_if_set"),e;for(e in Jg){var f=F(Jg[e]);!f||!c&&dc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!dc(a))b["X-YouTube-Ad-Signals"]=zg(Eg(void 0));return b}
function Ng(a){var b=window.location.search,c=dc(a);O("debug_handle_relative_url_for_query_forward_killswitch")||c||!Dg(a)||(c=document.location.hostname);var d=cc(a.match(bc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ag(b),f={};D(Kg,function(g){e[g]&&(f[g]=e[g])});
return Cg(a,f||{},!1)}
function Og(a,b){var c=b.format||"JSON";a=Pg(a,b);var d=Qg(a,b),e=!1,f=Rg(a,function(k){if(!e){e=!0;h&&eg(h);var l=Ig(k),n=null,q=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||q||r)n=Sg(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};q=b.context||y;l?b.onSuccess&&b.onSuccess.call(q,k,n):b.onError&&b.onError.call(q,k,n);b.onFinish&&b.onFinish.call(q,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=dg(function(){e||(e=!0,f.abort(),eg(h),g.call(b.context||y,f))},b.timeout)}return f}
function Pg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=F("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Cg(a,b||{},!0);return a}
function Qg(a,b){var c=F("XSRF_FIELD_NAME",void 0),d=F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=F("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ag(e),nb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):fc(e));f=e||f&&!gb(f);!Lg&&f&&
"POST"!=b.method&&(Lg=!0,Nf(Error("AJAX request with postData should use POST")));return e}
function Sg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Of(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Tg(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ug(g)})}d&&Vg(e);
return e}
function Vg(a){if(Ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;sb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Ub(a[b],null);a[c]=d}else Vg(a[b])}}
function Tg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ug(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Rg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Mf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Hg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=Ng(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Mg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Wg=zc||Ac;function Xg(a){var b=Pb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Yg={},Zg=0;
function $g(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Xg("cobalt")){if(a){a instanceof Ib||(a="object"==typeof a&&a.S?a.R():String(a),Nb.test(a)?a=new Ib(a,Jb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Mb))&&Lb.test(b[1])?new Ib(a,Jb):null));a=Kb(a||Ob);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Tb)){b="object"==typeof a;var f=null;b&&a.xa&&(f=a.sa());a=Ub(Ab(b&&a.S?a.R():String(a)),f)}a instanceof Tb&&a.constructor===Tb?a=a.h:(Ga(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Pe(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Vc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Rg(a,b,"POST",e,d);else if(F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Rg(a,b,"GET","",d);else{b:{try{var g=new Ua({url:a});if(g.j&&g.i||g.l){var h=cc(a.match(bc)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(hc);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var q=a.charCodeAt(c+2);if(!q||61==q||38==q||35==q){var r=c;break d}}c+=3}r=-1}if(0>r)var p=null;else{var A=a.indexOf("&",r);if(0>A||A>l)A=l;r+=3;p=decodeURIComponent(a.substr(r,A-r).replace(/\+/g," "))}k="1"!==p}f=!k;break b}}catch(I){}f=!1}f?ah(a)?(b&&b(),f=!0):f=!1:f=!1;f||bh(a,b)}}
function ch(a,b,c){c=void 0===c?"":c;ah(a,c)?b&&b():$g(a,b,void 0,void 0,c)}
function ah(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function bh(a,b){var c=new Image,d=""+Zg++;Yg[d]=c;c.onload=c.onerror=function(){b&&Yg[d]&&b();delete Yg[d]};
c.src=a}
;var dh=y.ytPubsubPubsubInstance||new M,eh=y.ytPubsubPubsubSubscribedKeys||{},fh=y.ytPubsubPubsubTopicToKeys||{},gh=y.ytPubsubPubsubIsSynchronous||{};function hh(a,b){var c=ih();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){eh[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{gh[a]?f():dg(f,0)}catch(g){Nf(g)}},void 0);
eh[d]=!0;fh[a]||(fh[a]=[]);fh[a].push(d);return d}return 0}
function jh(a){var b=ih();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),D(a,function(c){b.unsubscribeByKey(c);delete eh[c]}))}
function kh(a,b){var c=ih();c&&c.publish.apply(c,arguments)}
function lh(a){var b=ih();if(b)if(b.clear(a),a)mh(a);else for(var c in fh)mh(c)}
function ih(){return y.ytPubsubPubsubInstance}
function mh(a){fh[a]&&(a=fh[a],D(a,function(b){eh[b]&&delete eh[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.da;M.prototype.publish=M.prototype.W;M.prototype.clear=M.prototype.clear;z("ytPubsubPubsubInstance",dh,void 0);z("ytPubsubPubsubTopicToKeys",fh,void 0);z("ytPubsubPubsubIsSynchronous",gh,void 0);z("ytPubsubPubsubSubscribedKeys",eh,void 0);var nh=window,P=nh.ytcsi&&nh.ytcsi.now?nh.ytcsi.now:nh.performance&&nh.performance.timing&&nh.performance.now&&nh.performance.timing.navigationStart?function(){return nh.performance.timing.navigationStart+nh.performance.now()}:function(){return(new Date).getTime()};var oh=Sf("initial_gel_batch_timeout",2E3),ph=Math.pow(2,16)-1,qh=null,rh=0,sh=void 0,th=0,uh=0,vh=0,wh=!0,xh=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",xh,void 0);var yh=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",yh,void 0);
function zh(a,b){if("log_event"===a.endpoint){var c="";a.ka?c="visitorOnlyApprovedKey":a.F&&(yh[a.F.token]=Ah(a.F),c=a.F.token);var d=xh.get(c)||[];xh.set(c,d);d.push(a.payload);b&&(sh=new b);a=Sf("tvhtml5_logging_max_batch")||Sf("web_logging_max_batch")||100;b=P();d.length>=a?Bh({writeThenSend:!0}):10<=b-vh&&(Ch(),vh=b)}}
function Dh(a,b){if("log_event"===a.endpoint){var c="";a.ka?c="visitorOnlyApprovedKey":a.F&&(yh[a.F.token]=Ah(a.F),c=a.F.token);var d=new Map;d.set(c,[a.payload]);b&&(sh=new b);return new We(function(e){sh&&sh.isReady()?Eh(d,e,{bypassNetworkless:!0}):e()})}}
function Bh(a){a=void 0===a?{}:a;new We(function(b){eg(th);eg(uh);uh=0;sh&&sh.isReady()?(Eh(xh,b,a),xh.clear()):(Ch(),b())})}
function Ch(){O("web_gel_timeout_cap")&&!uh&&(uh=dg(function(){Bh({writeThenSend:!0})},6E4));
eg(th);var a=F("LOGGING_BATCH_TIMEOUT",Sf("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&wh&&(a=oh);th=dg(function(){Bh({writeThenSend:!0})},a)}
function Eh(a,b,c){var d=sh;c=void 0===c?{}:c;var e=Math.round(P()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h=h.next().value;h=lb({context:Fh(d.config_||Gh())});h.events=k;(k=yh[g])&&Hh(h,g,k);delete yh[g];g="visitorOnlyApprovedKey"===g;Ih(h,e,g);O("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&ch("/generate_204");Jh(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();rh=Math.round(P()-e)},
onError:function(){f--;f||b()},
Ma:c,ka:g});wh=!1}}
function Ih(a,b,c){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=F("EVENT_ID",void 0))&&((c=F("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*ph/2)),c++,c>ph&&(c=1),N("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,qh&&rh&&O("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:qh,roundtripMs:String(rh)}),qh=b,rh=0)}
function Hh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Ah(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Kh=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Kh,void 0);function Lh(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=qg();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&d.U&&(a=e.context,b=d.U,Kh[b]=b in Kh?Kh[b]+1:0,a.sequence={index:Kh[b],groupKey:b},d.Xa&&delete Kh[d.U]);(d.yl?Dh:zh)({endpoint:"log_event",payload:e,F:d.F,ka:d.ka},c)}
;function Mh(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Nh(a,b,c,d,e){rd.set(""+a,b,{za:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var Oh=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Oh,void 0);function Ph(){this.h=F("ALT_PREF_COOKIE_NAME","PREF");this.i=F("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=rd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Oh[d]=c.toString())}}}
Ph.prototype.get=function(a,b){Qh(a);Rh(a);a=void 0!==Oh[a]?Oh[a].toString():null;return null!=a?a:b?b:""};
Ph.prototype.set=function(a,b){Qh(a);Rh(a);if(null==b)throw Error("ExpectedNotNull");Oh[a]=b.toString()};
Ph.prototype.remove=function(a){Qh(a);Rh(a);delete Oh[a]};
Ph.prototype.clear=function(){for(var a in Oh)delete Oh[a]};
function Rh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Qh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Sh(a){a=void 0!==Oh[a]?Oh[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Fa(Ph);var Th={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Uh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Vh(){var a=y.navigator;return a?a.connection:void 0}
;function Wh(){return"INNERTUBE_API_KEY"in Jf&&"INNERTUBE_API_VERSION"in Jf}
function Gh(){return{innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),Za:F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ab:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),cb:F("INNERTUBE_CONTEXT_HL",void 0),bb:F("INNERTUBE_CONTEXT_GL",void 0),eb:F("INNERTUBE_HOST_OVERRIDE",void 0)||"",gb:!!F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),fb:!!F("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:F("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Fh(a){var b={client:{hl:a.cb,gl:a.bb,clientName:a.ab,clientVersion:a.innertubeContextClientVersion,configInfo:a.Za}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=F("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=F("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=F("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!O("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Mh()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!O("music_web_display_mode_killswitch")){var h;b.client.La=null!=(h=b.client.La)?h:{};b.client.La.webDisplayMode=Mh()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);F("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});a:{if(h=Vh()){a=Th[h.type||"unknown"]||"CONN_UNKNOWN";h=Th[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);O("web_log_effective_connection_type")&&
(a=Vh(),a=null!==a&&void 0!==a&&a.effectiveType?Uh.hasOwnProperty(a.effectiveType)?Uh[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(Ag(F("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=
d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Xh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.ol||F("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().nl:b=vd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=F("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));return d}
;function Yh(a){a=Object.assign({},a);delete a.Authorization;var b=vd();if(b){var c=new Pd;c.update(F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Ec(c.digest())}return a}
;function Zh(a){var b=new yf;(b=b.isAvailable()?a?new Ef(b,a):b:null)||(a=new zf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new uf(a):null;this.i=document.domain||window.location.hostname}
Zh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Pe(b))}catch(f){return}else e=escape(b);Nh(a,e,c,this.i)};
Zh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=rd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Zh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;rd.remove(""+a,"/",void 0===b?"youtube.com":b)};var $h;function ai(){$h||($h=new Zh("yt.innertube"));return $h}
function bi(a,b,c,d){if(d)return null;d=ai().get("nextId",!0)||1;var e=ai().get("requests",!0)||{};e[d]={method:a,request:b,authState:Yh(c),requestTime:Math.round(P())};ai().set("nextId",d+1,86400,!0);ai().set("requests",e,86400,!0);return d}
function ci(a){var b=ai().get("requests",!0)||{};delete b[a];ai().set("requests",b,86400,!0)}
function di(a){var b=ai().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Yh(Xh(!1));jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Jh(a,d.method,e,{}));delete b[c]}}ai().set("requests",b,86400,!0)}}
;function ei(a,b){this.version=a;this.args=b}
;function fi(a,b){this.topic=a;this.h=b}
fi.prototype.toString=function(){return this.topic};var gi=B("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.da;M.prototype.publish=M.prototype.W;M.prototype.clear=M.prototype.clear;z("ytPubsub2Pubsub2Instance",gi,void 0);var hi=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",hi,void 0);var ii=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",ii,void 0);var ji=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",ji,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function ki(a,b){var c=li();c&&c.publish.call(c,a.toString(),a,b)}
function mi(a){var b=ni,c=li();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(hi[d])try{if(f&&b instanceof fi&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.V){var l=new h;h.V=l.version}var n=h.V}catch(q){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
bb(k.args))}catch(q){throw q.message="yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+q.message,q;}a.call(window,f)}catch(q){Nf(q)}},ji[b.toString()]?B("yt.scheduler.instance")?jg(g):dg(g,0):g())});
hi[d]=!0;ii[b.toString()]||(ii[b.toString()]=[]);ii[b.toString()].push(d);return d}
function oi(){var a=pi,b=mi(function(c){a.apply(void 0,arguments);qi(b)});
return b}
function qi(a){var b=li();b&&("number"===typeof a&&(a=[a]),D(a,function(c){b.unsubscribeByKey(c);delete hi[c]}))}
function li(){return B("ytPubsub2Pubsub2Instance")}
;var ri=function(){var a;return function(){a||(a=new Zh("ytidb"));return a}}();
function si(){var a;return null===(a=ri())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function ti(a){this.h=void 0===a?!1:a;(a=si())||(a={hasSucceededOnce:this.h});this.i=a;var b,c;null!==(b=ri())&&void 0!==b&&b.h&&(b={hasSucceededOnce:this.i.hasSucceededOnce||this.h},null===(c=ri())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0))}
ti.prototype.isSupported=function(){return this.h};var ui=[],vi=!1;function wi(a){vi||(ui.push({type:"ERROR",payload:a}),10<ui.length&&ui.shift())}
function xi(a,b){vi||(ui.push({type:"EVENT",eventType:a,payload:b}),10<ui.length&&ui.shift())}
;function yi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(fa(c))}
v(yi,Error);function zi(){try{return Ai(),!0}catch(a){return!1}}
function Ai(){if(void 0!==F("DATASYNC_ID",void 0))return F("DATASYNC_ID",void 0);throw new yi("Datasync ID not set","unknown");}
;function Bi(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Ci(a){return a.substr(0,a.indexOf(":"))||a}
;var Di={},Ei=(Di.AUTH_INVALID="No user identifier specified.",Di.EXPLICIT_ABORT="Transaction was explicitly aborted.",Di.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Di.MISSING_OBJECT_STORE="Object store not created.",Di.DB_DELETED_BY_MISSING_OBJECT_STORE="Database is deleted because an expected object store was not created.",Di.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Di.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Di.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",
Di.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Di.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Di),Fi={},Gi=(Fi.AUTH_INVALID="ERROR",Fi.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Fi.EXPLICIT_ABORT="IGNORED",Fi.IDB_NOT_SUPPORTED="ERROR",Fi.MISSING_OBJECT_STORE="ERROR",Fi.DB_DELETED_BY_MISSING_OBJECT_STORE="WARNING",Fi.QUOTA_EXCEEDED="WARNING",Fi.QUOTA_MAYBE_EXCEEDED="WARNING",Fi.UNKNOWN_ABORT="WARNING",Fi.INCOMPATIBLE_DB_VERSION=
"WARNING",Fi),Hi={},Ii=(Hi.AUTH_INVALID=!1,Hi.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Hi.EXPLICIT_ABORT=!1,Hi.IDB_NOT_SUPPORTED=!1,Hi.MISSING_OBJECT_STORE=!1,Hi.DB_DELETED_BY_MISSING_OBJECT_STORE=!1,Hi.QUOTA_EXCEEDED=!1,Hi.QUOTA_MAYBE_EXCEEDED=!0,Hi.UNKNOWN_ABORT=!0,Hi.INCOMPATIBLE_DB_VERSION=!1,Hi);
function R(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Ei[a]:c;d=void 0===d?Gi[a]:d;e=void 0===e?Ii[a]:e;yi.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,R.prototype)}
v(R,yi);function Ji(a){R.call(this,"MISSING_OBJECT_STORE",{ib:a},Ei.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Ji.prototype)}
v(Ji,R);var Ki=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Li(a,b,c){b=Ci(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof R)return d;if("QuotaExceededError"===d.name)return new R("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(Bc&&"UnknownError"===d.name)return new R("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&Ki.some(function(e){return d.message.includes(e)}))return new R("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new R("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",ul:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
function Mi(a,b,c){return new R("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c}})}
;function Ni(a){if(!a)throw Error();throw a;}
function Oi(a){return a}
function Pi(a){this.h=a}
function S(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
S.all=function(a){return new S(new Pi(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Z:0};f.Z<a.length;f={Z:f.Z},++f.Z)Qi(S.resolve(a[f.Z]).then(function(g){return function(h){d[g.Z]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
S.resolve=function(a){return new S(new Pi(function(b,c){a instanceof S?a.then(b,c):b(a)}))};
S.reject=function(a){return new S(new Pi(function(b,c){c(a)}))};
S.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Oi,e=null!==b&&void 0!==b?b:Ni;return new S(new Pi(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Ri(c,c,d,f,g)}),c.onRejected.push(function(){Si(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ri(c,c,d,f,g):"REJECTED"===c.state.status&&Si(c,c,e,f,g)}))};
function Qi(a,b){a.then(void 0,b)}
function Ri(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof S?Ti(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Si(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof S?Ti(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ti(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof S?Ti(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ui(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Vi(a){return new Promise(function(b,c){Ui(a,b,c)})}
function Wi(a){return new S(new Pi(function(b,c){Ui(a,b,c)}))}
;function Xi(a,b){return new S(new Pi(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Yi(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}
m=Yi.prototype;m.add=function(a,b,c){return Zi(this,[a],{mode:"readwrite",I:!0},function(d){return $i(d,a).add(b,c)})};
m.clear=function(a){return Zi(this,[a],{mode:"readwrite",I:!0},function(b){return $i(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Zi(this,[a],{mode:"readonly",I:!0},function(c){return $i(c,a).count(b)})};
function aj(a,b,c){a=a.h.createObjectStore(b,c);return new bj(a)}
m.delete=function(a,b){return Zi(this,[a],{mode:"readwrite",I:!0},function(c){return $i(c,a).delete(b)})};
m.get=function(a,b){return Zi(this,[a],{mode:"readonly",I:!0},function(c){return $i(c,a).get(b)})};
function cj(a,b){return Zi(a,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(c){c=$i(c,"LogsRequestsStore");return Wi(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Zi(a,b,c,d){return H(a,function f(){var g=this,h,k,l,n,q,r,p,A,I,E,Q,V;return x(f,function(J){switch(J.h){case 1:var T={mode:"readonly",I:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?T.mode=c:Object.assign(T,c);h=T;g.transactionCount++;k=h.I?3:1;l=0;case 2:if(n){J.B(3);break}l++;q=Math.round(P());ra(J,4);r=g.h.transaction(b,h.mode);T=new dj(r);T=ej(T,d);return w(J,T,6);case 6:return p=J.i,A=Math.round(P()),fj(g,q,A,l,void 0,b.join(),h),J.return(p);case 4:I=sa(J);E=Math.round(P());
Q=Li(I,g.h.name,b.join());if((V=Q instanceof R&&!Q.h)||l>=k)fj(g,q,E,l,Q,b.join(),h),n=Q;J.B(2);break;case 3:return J.return(Promise.reject(n))}})})}
function fj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof R&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&xi("QUOTA_EXCEEDED",{dbName:Ci(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof R&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),xi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),gj(a,!1,d,f,b,g.tag),wi(e)):gj(a,!0,d,f,b,g.tag)}
function gj(a,b,c,d,e,f){xi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function bj(a){this.h=a}
m=bj.prototype;m.add=function(a,b){return Wi(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Wi(this.h.clear()).then(function(){})};
m.count=function(a){return Wi(this.h.count(a))};
function hj(a,b){return ij(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?hj(this,a):Wi(this.h.delete(a))};
m.get=function(a){return Wi(this.h.get(a))};
m.index=function(a){return new jj(this.h.index(a))};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function ij(a,b,c){a=a.h.openCursor(b.query,b.direction);return kj(a).then(function(d){return Xi(d,c)})}
function dj(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=R;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function ej(a,b){var c=new Promise(function(d,e){try{Qi(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
dj.prototype.abort=function(){this.h.abort();this.i=!0;throw new R("EXPLICIT_ABORT");};
function $i(a,b){b=a.h.objectStore(b);var c=a.j.get(b);c||(c=new bj(b),a.j.set(b,c));return c}
function jj(a){this.h=a}
m=jj.prototype;m.count=function(a){return Wi(this.h.count(a))};
m.delete=function(a){return lj(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Wi(this.h.get(a))};
m.getKey=function(a){return Wi(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function lj(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return kj(a).then(function(d){return Xi(d,c)})}
function mj(a,b){this.request=a;this.cursor=b}
function kj(a){return Wi(a).then(function(b){return b?new mj(a,b):null})}
m=mj.prototype;m.advance=function(a){this.cursor.advance(a);return kj(this.request)};
m.continue=function(a){this.cursor.continue(a);return kj(this.request)};
m.delete=function(){return Wi(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Wi(this.cursor.update(a))};function nj(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Yi(g.result,{closed:q}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.wb,n=c.upgrade,q=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&xi("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Ci(a)});var A=f(),I=new dj(g.transaction);
n&&n(A,function(E){return p.oldVersion<E&&p.newVersion>=E},I);
I.done.catch(function(E){e(E)})}catch(E){e(E)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){xi("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ci(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function oj(a,b,c){c=void 0===c?{}:c;return nj(a,b,c)}
function pj(a,b){b=void 0===b?{}:b;return H(this,function d(){var e,f,g;return x(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,Vi(e),0)})})}
;function qj(a,b){this.name=a;this.options=b;this.l=!0;this.j=!1}
qj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return oj(a,b,c)};
qj.prototype.delete=function(a){a=void 0===a?{}:a;return pj(this.name,a)};
function rj(a,b){return new R("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
qj.prototype.open=function(){function a(){return H(c,function g(){var h=this,k,l,n,q,r;return x(g,function(p){switch(p.h){case 1:return ra(p,2),w(p,h.i(h.name,h.options.version,e),4);case 4:k=p.i;a:{var A=h.options;for(var I=u(Object.keys(A.ma)),E=I.next();!E.done;E=I.next()){E=E.value;var Q=A.ma[E],V=void 0===Q.Oa?Number.MAX_VALUE:Q.Oa;if(k.h.version>=Q.ha&&!(k.h.version>=V)&&!k.h.objectStoreNames.contains(E)){A=E;break a}}A=void 0}l=A;if(void 0===l){p.B(5);break}if(h.j){p.B(6);break}h.j=!0;return w(p,
h.delete(),7);case 7:return wi(new R("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:h.name,ib:l})),p.return(a());case 6:throw new Ji(l);case 5:return p.return(k);case 2:n=sa(p);if(n instanceof DOMException?"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){p.B(8);break}return w(p,h.i(h.name,void 0,Object.assign(Object.assign({},
e),{upgrade:void 0})),9);case 9:q=p.i;r=q.h.version;if(void 0!==h.options.version&&r>h.options.version+1)throw q.close(),h.l=!1,rj(h,r);return p.return(q);case 8:throw b(),n;}})})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw rj(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,wb:b,upgrade:this.options.upgrade};return this.h=d=a()};var sj=new qj("YtIdbMeta",{ma:{databases:{ha:1}},upgrade:function(a,b){b(1)&&aj(a,"databases",{keyPath:"actualName"})}});
function tj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,sj.open(),2);d=e.i;return e.return(Zi(d,["databases"],{I:!0,mode:"readwrite"},function(f){var g=$i(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier:1)return Wi(g.h.put(a,void 0)).then(function(){})})}))})})}
function uj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,sj.open(),2);d=e.i;return e.return(d.delete("databases",a))})})}
function vj(a){return H(this,function c(){var d,e;return x(c,function(f){return 1==f.h?(d=[],w(f,sj.open(),2)):3!=f.h?(e=f.i,w(f,Zi(e,["databases"],{I:!0,mode:"readonly"},function(g){d.length=0;return ij($i(g,"databases"),{},function(h){a(h.getValue())&&d.push(h.getValue());return h.continue()})}),3)):f.return(d)})})}
function wj(){return vj(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var xj,yj=new function(){}(new function(){});
function zj(){return H(this,function b(){var c,d,e;return x(b,function(f){switch(f.h){case 1:c=si();if(null===c||void 0===c?0:c.hasSucceededOnce)return f.return(new ti(!0));var g;if(g=Wg)g=/WebKit\/([0-9]+)/.exec(Pb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Pb),g=!(g&&602<=parseInt(g[1],10)));if(g||mc)return f.return(new ti(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new ti(!1))}catch(h){return f.return(new ti(!1))}if(!("IDBTransaction"in
self&&"objectStoreNames"in IDBTransaction.prototype))return f.return(new ti(!1));ra(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(f,tj(e),4);case 4:return w(f,uj("yt-idb-test-do-not-use"),5);case 5:return f.return(new ti(!0));case 2:return sa(f),f.return(new ti(!1))}})})}
function Aj(){if(void 0!==xj)return xj;vi=!0;return xj=zj().then(function(a){vi=!1;return a.isSupported()})}
function Bj(){return Aj().then(function(a){return a?yj:void 0})}
;new function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function Cj(a){if(!zi())throw a=new R("AUTH_INVALID",{dbName:a}),wi(a),a;var b=Ai();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Dj(a,b,c,d){return H(this,function f(){var g,h,k,l;return x(f,function(n){switch(n.h){case 1:return w(n,Bj(),2);case 2:g=n.i;if(!g)throw h=Mi("openDbImpl",a,b),wi(h),h;Bi(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Cj(a);ra(n,3);return w(n,tj(k),5);case 5:return w(n,oj(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=sa(n),ra(n,7),w(n,uj(k.actualName),9);case 9:n.h=8;n.m=0;break;case 7:sa(n);case 8:throw l;}})})}
function Ej(a,b,c){c=void 0===c?{}:c;return Dj(a,b,!1,c)}
function Fj(a,b,c){c=void 0===c?{}:c;return Dj(a,b,!0,c)}
function Gj(a,b){b=void 0===b?{}:b;return H(this,function d(){var e,f;return x(d,function(g){if(1==g.h)return w(g,Bj(),2);if(3!=g.h){e=g.i;if(!e)return g.return();Bi(a);f=Cj(a);return w(g,pj(f.actualName,b),3)}return w(g,uj(f.actualName),0)})})}
function Hj(a,b){var c=this;a=a.map(function(d){return H(c,function f(){return x(f,function(g){return 1==g.h?w(g,pj(d.actualName,b),2):w(g,uj(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function Ij(){var a=void 0===a?{}:a;return H(this,function c(){var d,e;return x(c,function(f){if(1==f.h)return w(f,Bj(),2);if(3!=f.h){d=f.i;if(!d)return f.return();Bi("LogsDatabaseV2");return w(f,wj(),3)}e=f.i;return w(f,Hj(e,a),0)})})}
function Jj(a,b){b=void 0===b?{}:b;return H(this,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,Bj(),2);if(3!=f.h){e=f.i;if(!e)return f.return();Bi(a);return w(f,pj(a,b),3)}return w(f,uj(a),0)})})}
;function Kj(a,b){qj.call(this,a,b);this.options=b;Bi(a)}
v(Kj,qj);function Lj(a,b){var c;return function(){c||(c=new Kj(a,b));return c}}
Kj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ba?Fj:Ej)(a,b,Object.assign({},c))};
Kj.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ba?Jj:Gj)(this.name,a)};
function Mj(a,b){return Lj(a,b)}
;var Nj;
function Oj(){if(Nj)return Nj();var a={};Nj=Mj("LogsDatabaseV2",{ma:(a.LogsRequestsStore={ha:2},a.SWHealthLog={ha:3,Oa:9},a),Ba:!1,upgrade:function(b,c,d){c(2)&&aj(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3)&&aj(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1});c(5)&&(d=$i(d,"LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface",
"timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid")},
version:8});return Nj()}
;function Pj(a){return H(this,function c(){var d,e,f,g;return x(c,function(h){if(1==h.h)return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(h,Oj().open(),2);if(3!=h.h)return e=h.i,f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:F("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(h,cj(e,f),3);g=h.i;d.xb=P();Qj(d);return h.return(g)})})}
function Rj(a){return H(this,function c(){var d,e,f,g,h,k,l;return x(c,function(n){if(1==n.h)return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(n,Oj().open(),2);if(3!=n.h)return e=n.i,f=F("INNERTUBE_CONTEXT_CLIENT_NAME",0),g=[a,f,0],h=[a,f,P()],k=IDBKeyRange.bound(g,h),l=void 0,w(n,Zi(e,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(q){return lj($i(q,"LogsRequestsStore").index("newRequestV2"),{query:k,direction:"prev"},function(r){r.getValue()&&(l=r.getValue(),"NEW"===
a&&(l.status="QUEUED",r.update(l)))})}),3);
d.xb=P();Qj(d);return n.return(l)})})}
function Sj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Oj().open(),2);d=e.i;return e.return(Zi(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=$i(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",Wi(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function Tj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Oj().open(),2);d=e.i;return e.return(Zi(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=$i(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,Wi(g.h.put(h,void 0)).then(function(){return h})):S.resolve(void 0)})}))})})}
function Uj(a){return H(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Oj().open(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function Vj(){return H(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Oj().open(),2);c=e.i;d=P()-2592E6;return w(e,Zi(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){return ij($i(f,"LogsRequestsStore"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Wj(){return H(this,function b(){return x(b,function(c){return w(c,Ij(),0)})})}
function Qj(a){O("nwl_csi_killswitch")||.01>=Math.random()&&ki("nwl_transaction_latency_payload",a)}
;var Xj={},Yj=Mj("ServiceWorkerLogsDatabase",{ma:(Xj.SWHealthLog={ha:1},Xj),Ba:!0,upgrade:function(a,b){b(1)&&aj(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Zj(){return H(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return O("web_clean_sw_logs_store")?w(e,Yj().open(),3):e.B(0);c=e.i;d=P()-2592E6;return w(e,Zi(c,["SWHealthLog"],{mode:"readwrite",I:!0},function(f){return ij($i(f,"SWHealthLog"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function ak(){return H(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,Yj().open(),2);c=d.i;return w(d,c.clear("SWHealthLog"),0)})})}
;var bk;function ck(){bk||(bk=new Zh("yt.offline"));return bk}
function dk(a){if(O("offline_error_handling")){var b=ck().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);ck().set("errors",b,2592E3,!0)}}
;var ek=Sf("network_polling_interval",3E4);function U(){Me.call(this);this.C=0;this.G=this.l=!1;this.j=this.wa();fk(this);gk(this)}
v(U,Me);function hk(){if(!U.h){var a=B("yt.networkStatusManager.instance")||new U;z("yt.networkStatusManager.instance",a,void 0);U.h=a}return U.h}
m=U.prototype;m.L=function(){return this.j};
m.jb=function(a){this.l=!0;if(void 0===a?0:a)this.C||ik(this)};
m.wa=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Ua=function(){this.G=!0};
m.ca=function(a,b){return Me.prototype.ca.call(this,a,b)};
function gk(a){window.addEventListener("online",function(){return H(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return w(e,d.Y(),2);if(d.G&&O("offline_error_handling")){var f=ck().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new yi(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;Nf(h)}ck().set("errors",{},2592E3,!0)}}e.h=0})})})}
function fk(a){window.addEventListener("offline",function(){return H(a,function c(){var d=this;return x(c,function(e){return w(e,d.Y(),0)})})})}
function ik(a){a.C=hg(function(){return H(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return d.j?d.wa()||!d.l?e.B(3):w(e,d.Y(),3):w(e,d.Y(),3);ik(d);e.h=0})})},ek)}
m.Y=function(a){var b=this;return this.m?this.m:this.m=new Promise(function(c){return H(b,function e(){var f,g,h,k=this;return x(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,ra(l,2,3),f&&(k.A=jg(function(){f.abort()},a||2E4)),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ta(l);k.m=void 0;k.A&&lg(k.A);h!==k.j&&(k.j=h,k.j&&k.l?Ne(k,"ytnetworkstatus-online"):k.l&&Ne(k,"ytnetworkstatus-offline"));c(h);ua(l);break;case 2:sa(l),h=!1,l.B(3)}})})})};
U.prototype.sendNetworkCheckRequest=U.prototype.Y;U.prototype.listen=U.prototype.ca;U.prototype.enableErrorFlushing=U.prototype.Ua;U.prototype.getWindowStatus=U.prototype.wa;U.prototype.monitorNetworkStatusChange=U.prototype.jb;U.prototype.isNetworkAvailable=U.prototype.L;U.getInstance=hk;function jk(a){a=void 0===a?{}:a;Me.call(this);var b=this;this.l=this.A=0;this.j=hk();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.Va);a.hb&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.j))a.oa?(this.oa=a.oa,c("ytnetworkstatus-online",function(){kk(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){kk(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){Ne(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Ne(b,"publicytnetworkstatus-offline")}))}
v(jk,Me);jk.prototype.L=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.j);return a?a():!0};
jk.prototype.Y=function(a){return H(this,function c(){var d=this,e;return x(c,function(f){return(e=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.j))?f.return(e(a)):f.return(!0)})})};
function kk(a,b){a.oa?a.l?(lg(a.A),a.A=jg(function(){a.m!==b&&(Ne(a,b),a.m=b,a.l=P())},a.oa-(P()-a.l))):(Ne(a,b),a.m=b,a.l=P()):Ne(a,b)}
;var lk=!1,mk,nk=0,ok=0,pk,qk=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:lk,Ia:mk,potentialEsfErrorCounter:ok,isIdbSupported:!!mk};O("export_networkless_options")&&z("ytNetworklessLoggingInitializationOptions",qk,void 0);
function rk(){H(this,function b(){return x(b,function(c){switch(c.h){case 1:return w(c,Bj(),2);case 2:mk=c.i;if(!mk||!zi()&&!O("nwl_init_require_datasync_id_killswitch")){c.B(0);break}lk=!0;O("export_networkless_options")&&(qk.isNwlInitialized=lk,qk.Ia=mk,qk.isIdbSupported=!!mk);return w(c,Jj("LogsDatabaseV2"),4);case 4:if(!(O("enable_nwl_cleaning_logic")&&Math.random()<=Sf("nwl_cleaning_rate",.1))){c.B(5);break}return w(c,Vj(),6);case 6:return w(c,Zj(),5);case 5:sk();tk().L()&&uk();tk().ca("publicytnetworkstatus-online",
uk);tk().ca("publicytnetworkstatus-offline",vk);if(!O("networkless_immediately_drop_sw_health_store")){c.B(8);break}return w(c,wk(),8);case 8:if(O("networkless_immediately_drop_all_requests"))return w(c,Wj(),0);c.B(0)}})})}
function xk(a,b){function c(d){var e=tk().L();if(!yk()||!d||e&&O("vss_networkless_bypass_write"))zk(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};Pj(f).then(function(g){f.id=g;tk().L()&&Ak(f)}).catch(function(g){Ak(f);
tk().L()?Nf(g):dk(g)})}}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?Bj().then(function(d){c(d)}):c(Bk())}
function Ck(a,b){function c(d){if(yk()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Uj(e.id):f=!0;g(h,k)};
zk(e.url,e.options);Pj(e).then(function(h){e.id=h;f&&Uj(e.id)}).catch(function(h){tk().L()?Nf(h):dk(h)})}else zk(a,b)}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?Bj().then(function(d){c(d)}):c(Bk())}
function uk(){var a=this;if(!Bk())throw Mi("throttleSend");nk||(nk=jg(function(){return H(a,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Rj("NEW"),2);if(3!=e.h)return d=e.i,d?w(e,Ak(d),3):(vk(),e.return());nk&&(nk=0,uk());e.h=0})})},100))}
function vk(){lg(nk);nk=0}
function Ak(a){return H(this,function c(){var d,e,f;return x(c,function(g){switch(g.h){case 1:d=Bk();if(!d)throw e=Mi("immediateSend"),e;if(void 0===a.id){g.B(2);break}return w(g,Sj(a.id),3);case 3:(f=g.i)?a=f:Of(Error("The request cannot be found in the database."));case 2:if(Dk(a,2592E6)){g.B(4);break}Of(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){g.B(5);break}return w(g,Uj(a.id),5);case 5:return g.return();case 4:var h=a=Ek(a),k,l;if(null===(l=null===
(k=null===h||void 0===h?void 0:h.options)||void 0===k?void 0:k.postParams)||void 0===l?0:l.requestTimeMs)h.options.postParams.requestTimeMs=Math.round(P());(a=h)&&zk(a.url,a.options);g.h=0}})})}
function Ek(a){var b=this;if(!Bk())throw Mi("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return H(b,function h(){return x(h,function(k){switch(k.h){case 1:if(!((B("ytNetworklessLoggingInitializationOptions")?qk.potentialEsfErrorCounter:ok)<=Sf("potential_esf_error_limit",10))){k.B(2);break}return w(k,tk().Y(),3);case 3:if(tk().L())B("ytNetworklessLoggingInitializationOptions")&&qk.potentialEsfErrorCounter++,ok++;else return c(e,f),k.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){k.B(4);break}return 1>a.sendCount?w(k,Tj(a.id),8):w(k,Uj(a.id),
4);case 8:jg(function(){tk().L()&&uk()},5E3);
case 4:c(e,f),k.h=0}})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return H(b,function h(){return x(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?k.B(2):w(k,Uj(a.id),2);d(e,f);k.h=0})})};
return a}
function Dk(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function sk(){var a=this;if(!Bk())throw Mi("retryQueuedRequests");Rj("QUEUED").then(function(b){b&&!Dk(b,12E4)?jg(function(){return H(a,function d(){return x(d,function(e){if(1==e.h)return void 0===b.id?e.B(2):w(e,Tj(b.id),2);sk();e.h=0})})}):tk().L()&&uk()})}
function wk(){return H(this,function b(){var c,d;return x(b,function(e){c=Bk();if(!c)throw d=Mi("clearSWHealthLogsDb"),d;return e.return(ak().catch(function(f){Nf(f)}))})})}
function tk(){pk||(pk=new jk({hb:!0,Va:!0}));return pk}
function zk(a,b){if(O("networkless_with_beacon")){var c=["method","postBody"];if(Object.keys(b).length>c.length)var d=!0;else{d=0;c=u(c);for(var e=c.next();!e.done;e=c.next())b.hasOwnProperty(e.value)&&d++;d=Object.keys(b).length!==d}d?Og(a,b):O("networkless_with_ping_send")&&1===Object.keys(b).length&&b.allowPingSend?$g(a):ch(a,void 0,b.postBody)}else Og(a,b)}
function yk(){return B("ytNetworklessLoggingInitializationOptions")?qk.isNwlInitialized:lk}
function Bk(){return B("ytNetworklessLoggingInitializationOptions")?qk.Ia:mk}
;function Fk(a){var b=this;this.config_=null;a?this.config_=a:Wh()&&(this.config_=Gh());hg(function(){di(b)},5E3)}
Fk.prototype.isReady=function(){!this.config_&&Wh()&&(this.config_=Gh());return!!this.config_};
function Jh(a,b,c,d){function e(r){r=void 0===r?!1:r;var p;if(d.retry&&"www.youtube-nocookie.com"!=h&&(r||(p=bi(b,c,l,k)),p)){var A=g.onSuccess,I=g.onFetchSuccess;g.onSuccess=function(E,Q){ci(p);A(E,Q)};
c.onFetchSuccess=function(E,Q){ci(p);I(E,Q)}}try{r&&d.retry&&!d.Ma.bypassNetworkless?(g.method="POST",d.Ma.writeThenSend?xk(q,g):Ck(q,g)):(g.method="POST",g.postParams||(g.postParams={}),Og(q,g))}catch(E){if("InvalidAccessError"==E.name)p&&(ci(p),p=0),Of(Error("An extension is blocking network request."));
else throw E;}p&&hg(function(){di(a)},5E3)}
!F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Of(new yi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new yi("innertube xhrclient not ready",b,c,d);Nf(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(r,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,p){if(d.onError)d.onError(p)},
onFetchError:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.eb)&&(h=f);var k=a.config_.gb||!1,l=Xh(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.config_.innertubeApiVersion+"/"+b;var n={alt:"json"};a.config_.fb&&g.headers.Authorization||(n.key=a.config_.innertubeApiKey);var q=Cg(""+h+f,n||{},!0);yk()?Aj().then(function(r){e(r)}):e(!1)}
;function Gk(a,b,c){c=void 0===c?{}:c;var d=Fk;F("ytLoggingEventsDefaultDisabled",!1)&&Fk==Fk&&(d=null);Lh(a,b,d,c)}
;var Hk=[{Aa:function(a){return"Cannot read property '"+a.key+"'"},
na:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Aa:function(a){return"Cannot call '"+a.key+"'"},
na:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Aa:function(a){return a.key+" is not defined"},
na:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Jk={T:[],P:[{Ea:Ik,weight:500}]};function Ik(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Kk(){this.P=[];this.T=[]}
var Lk;function Mk(){if(!Lk){var a=Lk=new Kk;a.T.length=0;a.P.length=0;Jk.T&&a.T.push.apply(a.T,Jk.T);Jk.P&&a.P.push.apply(a.P,Jk.P)}return Lk}
;var Nk=new M;function Ok(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Pk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Pk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Pk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Pk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Qk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Rk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Ok(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Rk(f+".ve",g,h,k):0;d+=f;d+=Rk(e,a[e],b,c);if(500<d)break}}else c[b]=Sk(a),d+=c[b].length;else c[b]=Sk(a),d+=c[b].length;return d}
function Rk(a,b,c,d){c+="."+a;a=Sk(b);d[c]=a;return c.length+a.length}
function Sk(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Tk=new Set,Uk=0,Vk=0,Wk=0,Xk=[],Yk=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Zk(a){$k(a,"WARNING")}
function $k(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),O("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=Uk))){var g=Rd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Qk(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var q="params."+l,r=Sk(n[l]);c[q]=r;k+=q.length+r.length;if(500<k)break}}else c.params=Sk(n)}if(Xk.length)for(l=0;l<Xk.length&&!(k=Qk(Xk[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
Mk();c=u(a.T);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.sl)){a=d.weight;break a}a=u(a.P);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Ea(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Hk);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.na[l.name])for(e=u(c.na[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.Aa(f);break}l.params||(l.params={});a=Mk();l.params["params.errorServiceSignature"]="msg="+a.T.length+"&cb="+a.P.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));sb("sample").constructor!==qb&&(l.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!Tk.has(l.message)){"ERROR"===b?(Nk.W("handleError",
l),O("record_app_crashed_web")&&0===Wk&&1===l.sampleWeight&&(Wk++,Gk("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Vk++):"WARNING"===b&&Nk.W("handleWarning",l);if(O("kevlar_gel_error_routing")){a=b;b:{c=u(Yk);for(d=c.next();!d.done;d=c.next())if(Xg(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||
isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};F("FEXP_EXPERIMENTS")&&(e.experimentIds=F("FEXP_EXPERIMENTS"));if(f=l.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=
g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});f=F("SERVER_NAME",void 0);g=F("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(Gk("clientError",c),("ERROR"===a||O("errors_flush_gel_always_killswitch"))&&Bh())}if(!O("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,
level:b,"client.name":a.name},postParams:{url:F("PAGE_NAME",window.location.href),file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=F("SERVER_NAME",void 0);c=F("SERVER_VERSION",void 0);
a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}Og(F("ECATCHER_REPORT_HOST","")+"/error_204",b)}Tk.add(l.message);Uk++}}}
function al(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,fa(c))}
;var bl={jc:3611,yb:27686,zb:85013,Ab:23462,Cb:42016,Db:62407,Eb:26926,Bb:43781,Fb:51236,Gb:79148,Hb:50160,Ib:77504,Ub:87907,Vb:18630,Wb:54445,Xb:80935,Yb:105675,Zb:37521,ac:47786,cc:98349,dc:123695,ec:6827,fc:29434,hc:7282,ic:124448,mc:32276,lc:76278,nc:93911,oc:106531,pc:27259,qc:27262,sc:27263,uc:21759,wc:27107,xc:62936,yc:49568,zc:38408,Ac:80637,Bc:68727,Cc:68728,Dc:80353,Ec:80356,Fc:74610,Gc:45707,Hc:83962,Ic:83970,Jc:46713,Kc:89711,Lc:74612,Mc:93265,Nc:74611,Oc:131380,Qc:128979,Rc:128978,Pc:131391,
Sc:105350,Tc:131392,Vc:113533,Wc:93252,Xc:99357,Zc:94521,bd:114252,cd:113532,dd:94522,Yc:94583,ed:88E3,fd:93253,gd:93254,hd:94387,jd:94388,kd:93255,ld:97424,Uc:72502,md:110111,nd:76019,pd:117092,qd:117093,od:89431,rd:110466,sd:77240,td:60508,ud:73393,vd:113534,wd:92098,xd:131381,yd:84517,zd:83759,Ad:80357,Bd:86113,Cd:72598,Dd:72733,Ed:107349,Fd:124275,Gd:118203,Hd:117431,Id:117429,Jd:117430,Kd:117432,Ld:120080,Md:117259,Nd:121692,Od:97615,Pd:31402,Qd:84774,Rd:95117,Sd:98930,Td:98931,Ud:98932,Vd:43347,
Wd:129889,Xd:45474,Yd:100352,Zd:84758,ae:98443,be:117985,ce:74613,de:74614,ee:64502,ge:74615,he:74616,ie:122224,je:74617,ke:77820,le:74618,me:93278,ne:93274,oe:93275,pe:93276,qe:22110,re:29433,se:132295,ue:120541,xe:82047,ye:113550,ze:75836,Ae:75837,Be:42352,Ce:84512,De:76065,Ee:75989,Fe:16623,Ge:32594,He:27240,Ie:32633,Je:74858,Le:3945,Ke:16989,Me:45520,Ne:25488,Oe:25492,Pe:25494,Qe:55760,Re:14057,Se:18451,Te:57204,Ue:57203,Ve:17897,We:57205,Xe:18198,Ye:17898,Ze:17909,af:43980,bf:46220,cf:11721,
df:49954,ef:96369,ff:3854,gf:56251,hf:25624,jf:16906,kf:99999,lf:68172,mf:27068,nf:47973,pf:72773,qf:26970,rf:26971,sf:96805,tf:17752,uf:73233,vf:109512,wf:22256,xf:14115,yf:22696,zf:89278,Af:89277,Bf:109513,Cf:43278,Df:43459,Ef:43464,Ff:89279,Gf:43717,Hf:55764,If:22255,Jf:89281,Kf:40963,Lf:43277,Mf:43442,Nf:91824,Of:120137,Pf:96367,Qf:36850,Rf:72694,Sf:37414,Tf:36851,Vf:124863,Uf:121343,Wf:73491,Xf:54473,Yf:43375,Zf:46674,ag:32473,cg:72901,dg:72906,eg:50947,fg:50612,gg:50613,hg:50942,ig:84938,jg:84943,
kg:84939,lg:84941,mg:84944,ng:84940,og:84942,pg:35585,qg:51926,rg:79983,sg:63238,tg:18921,ug:63241,vg:57893,wg:41182,xg:33424,yg:22207,zg:42993,Ag:36229,Bg:22206,Cg:22205,Dg:18993,Eg:19001,Fg:18990,Gg:18991,Hg:18997,Ig:18725,Jg:19003,Kg:36874,Lg:44763,Mg:33427,Ng:67793,Og:22182,Pg:37091,Qg:34650,Rg:50617,Sg:47261,Tg:22287,Ug:25144,Vg:97917,Wg:62397,Xg:125598,Yg:36961,Zg:108035,ah:27426,bh:27857,dh:27846,eh:27854,fh:69692,gh:61411,hh:39299,ih:38696,jh:62520,kh:36382,lh:108701,mh:50663,nh:36387,oh:14908,
ph:37533,qh:105443,rh:61635,sh:62274,th:65702,uh:65703,vh:65701,wh:76256,xh:37671,yh:49953,Ah:36216,Bh:28237,Ch:39553,Dh:29222,Eh:26107,Fh:38050,Gh:26108,Ih:120745,Hh:26109,Jh:26110,Kh:66881,Lh:28236,Mh:14586,Nh:57929,Oh:74723,Ph:44098,Qh:44099,Rh:23528,Sh:61699,Th:59149,Uh:101951,Vh:97346,Wh:118051,Xh:95102,Yh:64882,Zh:119505,ai:63595,bi:63349,ci:95101,di:75240,fi:27039,gi:68823,hi:21537,ii:83464,ji:75707,ki:83113,li:101952,mi:101953,oi:79610,ri:125755,si:24402,ti:24400,vi:32925,wi:57173,xi:122502,
yi:64423,zi:64424,Ai:33986,Bi:100828,Ci:129089,Di:21409,Ei:11070,Fi:11074,Gi:17880,Hi:14001,Ji:30709,Ki:30707,Li:30711,Mi:30710,Ni:30708,Ii:26984,Oi:63648,Pi:63649,Qi:51879,Ri:111059,Si:5754,Ti:20445,Vi:130975,Ui:130976,Wi:110386,Xi:113746,Yi:66557,Zi:17310,aj:28631,bj:21589,cj:68012,dj:60480,ej:31571,fj:76980,gj:41577,hj:45469,ij:38669,jj:13768,kj:13777,lj:62985,mj:4724,nj:59369,oj:43927,pj:43928,qj:12924,rj:100355,uj:56219,vj:27669,wj:10337,tj:47896,xj:122629,yj:121258,zj:107598,Aj:127991,Bj:96639,
Cj:107536,Dj:130169,Ej:96661,Fj:96658,Gj:116646,Hj:121122,Ij:96660,Jj:127738,Kj:127083,Lj:104443,Mj:96659,Nj:106442,Oj:63667,Pj:63668,Qj:63669,Rj:130686,Sj:78314,Tj:55761,Uj:127098,Vj:96368,Wj:67374,Xj:48992,Yj:49956,Zj:31961,ak:26388,bk:23811,ck:5E4,dk:126250,ek:96370,fk:47355,gk:47356,hk:37935,ik:45521,jk:21760,kk:83769,lk:49977,mk:49974,nk:93497,pk:93498,qk:34325,rk:115803,sk:123707,tk:100081,uk:35309,vk:68314,wk:25602,xk:100339,yk:59018,zk:18248,Ak:50625,Bk:9729,Ck:37168,Dk:37169,Ek:21667,Fk:16749,
Gk:18635,Hk:39305,Ik:18046,Jk:53969,Kk:8213,Lk:93926,Mk:102852,Nk:110099,Ok:22678,Pk:69076,Rk:100856,Sk:17736,Tk:3832,Uk:55759,Vk:64031,Wk:93044,Xk:93045,Yk:34388,Zk:17657,al:17655,bl:39579,dl:39578,fl:77448,il:8196,jl:11357,kl:69877,ll:8197,ml:82039};function cl(){var a=kb(dl),b;return cf(new We(function(c,d){a.onSuccess=function(e){Ig(e)?c(new el(e)):d(new fl("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new fl("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new fl("Request timed out","net.timeout",e))};
b=Og("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof df&&b.abort();
return af(c)})}
function fl(a,b,c){Ta.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(fl,Ta);function el(a){this.xhr=a}
;function gl(){this.i=0;this.h=null}
gl.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Ve(a)?a:hl(a)):2===this.i&&b?(a=b.call(c,this.h),Ve(a)?a:il(a)):this};
gl.prototype.getValue=function(){return this.h};
gl.prototype.$goog_Thenable=!0;function il(a){var b=new gl;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function hl(a){var b=new gl;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function jl(){if(td())return!0;var a=F("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||Wg&&Xg("applewebkit")&&!Xg("version")&&(!Xg("safari")||Xg("gsa/"))||pc&&Xg("version/")?!0:(a=rd.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function kl(a){Ta.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ll;this.isTimeout=a instanceof fl&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof df}
v(kl,Ta);kl.prototype.name="BiscottiError";function ll(){Ta.call(this,"Biscotti ID is missing from server")}
v(ll,Ta);ll.prototype.name="BiscottiMissingError";var dl={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ml=null;function sg(){if(O("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!jl())return af(Error("User has not consented - not fetching biscotti id."));if("1"==ib())return af(Error("Biscotti ID is not available in private embed mode"));ml||(ml=cf(cl().then(nl),function(a){return ol(2,a)}));
return ml}
function nl(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ll;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ll;a=a.id;tg(a);ml=hl(a);pl(18E5,2);return a}
function ol(a,b){b=new kl(b);tg("");ml=il(b);0<a&&pl(12E4,a-1);throw b;}
function pl(a,b){dg(function(){cf(cl().then(nl,function(c){return ol(b,c)}),Ea)},a)}
function ql(){try{var a=B("yt.ads.biscotti.getId_");return a?a():sg()}catch(b){return af(b)}}
;function rl(a){if("1"!=ib()){a&&rg();try{ql().then(function(){},function(){}),dg(rl,18E5)}catch(b){Nf(b)}}}
;var sl=Date.now().toString();
function tl(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(sl)for(a=1,b=0;b<sl.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^sl.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ul,vl=y.ytLoggingDocDocumentNonce_;vl||(vl=tl(),Ra("ytLoggingDocDocumentNonce_",vl));ul=vl;var wl={te:0,kc:1,tc:2,zh:3,we:4,Qk:5,ni:6,sj:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function xl(a){this.h=a}
function yl(a){return new xl({trackingParams:a})}
xl.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
xl.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
xl.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function zl(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Al(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Bl(a){return F(Al(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Bl,void 0);function Cl(a){return(a=Bl(void 0===a?0:a))?new xl({veType:a,youtubeData:void 0}):null}
function Dl(){var a=F("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function El(a){a=void 0===a?0:a;var b=F(zl(a));if(!b&&!F("USE_CSN_FALLBACK",!0))return null;b||!O("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",El,void 0);function Fl(a,b,c){var d=Dl();(c=El(c))&&delete d[c];b&&(d[a]=b)}
function Gl(a){return Dl()[a]}
z("yt_logging_screen.getCttAuthInfo",Gl,void 0);function Hl(a,b,c,d){c=void 0===c?0:c;if(a!==F(zl(c))||b!==F(Al(c)))Fl(a,d,c),N(zl(c),a),N(Al(c),b),b=function(){setTimeout(function(){a&&Lh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ul,clientScreenNonce:a},Fk)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",Hl,void 0);function Il(a){ei.call(this,1,arguments);this.csn=a}
v(Il,ei);var ni=new fi("screen-created",Il),Jl=[],Ll=Kl,Ml=0;function Nl(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:Ya(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(gb(e)||!e.trackingParams&&!e.veType)&&Zk(Error("Child VE logged with no data"));d={F:Gl(b),U:b};"UNDEFINED_CSN"==b?Ol("visualElementAttached",c,d):a?Lh("visualElementAttached",c,a,d):Gk("visualElementAttached",c,d)}
function Kl(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Ec(b)}
function Ol(a,b,c){Jl.push({payloadName:a,payload:b,options:c});Ml||(Ml=oi())}
function pi(a){if(Jl){for(var b=u(Jl),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Lh(c.payloadName,c.payload,null,c.options));Jl.length=0}Ml=0}
;function Pl(){this.i=new Set;this.h=new Set;this.j=new Map}
Pl.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Fa(Pl);function Ql(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Rl(a)||c.some(function(e){return!Rl(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Sl(a,d.value);return a}
function Sl(a,b){for(var c in b)if(Rl(b[c])){if(c in a&&!Rl(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Sl(a[c],b[c])}else if(Tl(b[c])){if(c in a&&!Tl(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ul(a[c],b[c])}else a[c]=b[c];return a}
function Ul(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Rl(c)?a.push(Sl({},c)):Tl(c)?a.push(Ul([],c)):a.push(c);return a}
function Rl(a){return"object"===typeof a&&!Array.isArray(a)}
function Tl(a){return"object"===typeof a&&Array.isArray(a)}
;function Vl(a,b){ei.call(this,1,arguments)}
v(Vl,ei);function Wl(a,b){ei.call(this,1,arguments)}
v(Wl,ei);var Xl=new fi("aft-recorded",Vl),Yl=new fi("timing-sent",Wl);var Zl=window;function $l(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var W=Zl.performance||Zl.mozPerformance||Zl.msPerformance||Zl.webkitPerformance||new $l;var am=!1,bm={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Pa(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||Ea,W);function cm(a){var b=dm(a);if(b.aft)return b.aft;a=F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function em(){var a;if(O("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===W||void 0===W?void 0:W.getEntriesByType)||void 0===a?void 0:a.call(W,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=fm(e.requestStart),e.responseEnd=fm(e.responseEnd),e.redirectStart=fm(e.redirectStart),e.redirectEnd=fm(e.redirectEnd),e.domainLookupEnd=fm(e.domainLookupEnd),e.connectStart=fm(e.connectStart),
e.connectEnd=fm(e.connectEnd),e.responseStart=fm(e.responseStart),e.secureConnectionStart=fm(e.secureConnectionStart),e.domainLookupStart=fm(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=W.timing}else a=W.timing;return a}
function gm(){return O("csi_use_time_origin")&&W.timeOrigin?Math.floor(W.timeOrigin):W.timing.navigationStart}
function fm(a){return Math.round(gm()+a)}
function hm(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ra("ytcsi."+(a||"")+"data_",b));return b}
function im(a){a=hm(a);a.info||(a.info={});return a.info}
function dm(a){a=hm(a);a.tick||(a.tick={});return a.tick}
function jm(a){var b=hm(a).nonce;b||(b=tl(),hm(a).nonce=b);return b}
function km(a){var b=dm(a||""),c=cm(a);c&&!am&&(ki(Xl,new Vl(Math.round(c-b._start),a)),am=!0)}
;function lm(){if(W.getEntriesByType){var a=W.getEntriesByType("paint");if(a=$a(a,function(b){return"first-paint"===b.name}))return fm(a.startTime)}a=W.timing;
return a.kb?Math.max(0,a.kb):0}
;function mm(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function nm(a){a=a||"";var b=B("ytcsi.reference");b||(mm(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=mm(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var om=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",om,void 0);function pm(){this.h=0}
function qm(){pm.h||(pm.h=new pm);return pm.h}
pm.prototype.tick=function(a,b,c){rm(this,"tick_"+a+"_"+b)||Gk("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
pm.prototype.info=function(a,b){var c=Object.keys(a).join("");rm(this,"info_"+c+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Gk("latencyActionInfo",a))};
pm.prototype.span=function(a,b){var c=Object.keys(a).join("");rm(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Gk("latencyActionSpan",a))};
function rm(a,b){om[b]=om[b]||{count:0};var c=om[b];c.count++;c.time=P();a.h||(a.h=hg(function(){var d=P(),e;for(e in om)om[e]&&6E4<d-om[e].time&&delete om[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new yi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Zk(c)),!0):!1}
;var X={},sm=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X.browse="LATENCY_ACTION_BROWSE",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",
X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]=
"LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",
X.settings="LATENCY_ACTION_SETTINGS",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X),Y={},tm=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",
Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",
Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",
Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",
Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),um="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
vm={},wm=(vm.ccs="CANARY_STATE_",vm.mver="MEASUREMENT_VERSION_",vm.pis="PLAYER_INITIALIZED_STATE_",vm.yt_pt="LATENCY_PLAYER_",vm.pa="LATENCY_ACTION_",vm.yt_vst="VIDEO_STREAM_TYPE_",vm),xm="all_vc ap aq c cbr cbrand cbrver cmodel cos cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function ym(a){return!!F("FORCE_CSI_ON_GEL",!1)||O("csi_on_gel")||O("enable_csi_on_gel")||!!hm(a).useGel}
function zm(a,b,c){var d=Am(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||P();return ym(c)?(nm(c||"").tick[a]=b||P(),d=jm(c),"_start"===a?(a=qm(),rm(a,"baseline_"+d)||Gk("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):qm().tick(a,d,b),km(c),!0):!1}
function Bm(a,b,c){c=Am(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in tm){c=tm[a];0<=Wa(um,c)&&(b=!!b);a in wm&&"string"===typeof b&&(b=wm[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Ql({},d)}0<=Wa(xm,a)||Zk(new yi("Unknown label logged with GEL CSI",a))}
function Am(a){a=hm(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Cm(a){a=Am(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function Dm(a,b,c){null!==b&&(im(c)[a]=b,ym(c)?(a=Bm(a,b,c))&&ym(c)&&(b=nm(c||""),Ql(b.info,a),Ql(Cm(c),a),c=jm(c),qm().info(a,c)):nm(c||"").info[a]=b)}
function Z(a,b,c){var d=dm(c);if(!b&&"_"!==a[0]){var e=a;W.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),W.mark(e))}e=b||P();d[a]=e;zm(a,b,c)||c||(Em(),nm("").tick[a]=b||P());return d[a]}
function Fm(){var a=jm(void 0);requestAnimationFrame(function(){setTimeout(function(){a===jm(void 0)&&Z("ol",void 0,void 0)},0)})}
function Em(){if(!B("yt.timing.pingSent_")){var a=F("TIMING_ACTION",void 0),b=dm();if(a=!!B("ytglobal.timingready_")&&a)a="_start"in dm(void 0);if(a&&cm()){km();a=!0;var c=F("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in b)){a=!1;break}if(a&&!ym()){c=dm();d=im();e=c._start;var f=F("CSI_SERVICE_NAME","youtube");a={v:2,s:f,action:F("TIMING_ACTION",void 0)};b=d.srt;void 0!==c.srt&&delete d.srt;c.aft=cm();var g=dm(void 0),h=g.pbr,k=g.vc;g=g.pbs;h&&k&&g&&h<k&&k<g&&im(void 0).yt_pvis&&
"youtube"===f&&(Dm("yt_lt","hot_bg"),f=c.vc,h=c.pbs,delete c.aft,d.aft=Math.round(h-f));for(var l in d)"_"!==l.charAt(0)&&(a[l]=d[l]);c.ps=P();l={};f=[];for(var n in c)"_"!==n.charAt(0)&&(h=Math.round(c[n]-e),l[n]=h,f.push(n+"."+h));a.rt=f.join(",");n=!!d.ap;c="";for(var q in a)a.hasOwnProperty(q)&&(c+="&"+q+"="+a[q]);q="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(n||O("always_send_csi_204_with_beacon"))?ch(q):$g(q);z("yt.timing.pingSent_",!0,void 0);ki(Yl,new Wl(l.aft+
(Number(b)||0)))}}}}
function Gm(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Uf+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Hm(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Yb()&&a.setAttribute("nonce",Yb());return c?(a=W.getEntriesByName(c))&&a[0]&&(a=a[0],c=gm(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&(b=im(void 0),c=Cm(void 0),"rc"in b||"rc"in c||Dm("rc",""),0===a.transferSize))?!0:!1:!1}
function Im(){var a=window.location.protocol,b=W.getEntriesByType("resource");b=Xa(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Za(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",fm(b.startTime)),Z("wffe",fm(b.responseEnd)))}
var Jm=window;Jm.ytcsi&&(Jm.ytcsi.info=Dm,Jm.ytcsi.tick=Z);function Km(){this.u=[];this.o=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.A=new Map}
function Lm(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=El(c),h=Cl(c);g&&h&&((null===(e=d.response)||void 0===e?0:e.trackingParams)&&Nl(a.client,g,h,[yl(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Nl(a.client,g,h,[yl(d.playerResponse.trackingParams)]))})}
function Mm(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.u.push([b,c]);else{var e=El(d);c=c||Cl(d);e&&c&&Nl(a.client,e,c,[b])}}
Km.prototype.clickCommand=function(a,b,c){a=a.clickTrackingParams;c=void 0===c?0:c;if(a)if(c=El(void 0===c?0:c)){var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:yl(a).getAsJson(),gestureType:e};b&&(a.clientData=b);b={F:Gl(c),U:c};"UNDEFINED_CSN"==c?Ol("visualElementGestured",a,b):d?Lh("visualElementGestured",a,d,b):Gk("visualElementGestured",a,b);b=!0}else b=!1;else b=!1;return b};
function Nm(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Om(a,b,c);var f=Cl(c.layer);if(f){for(var g=u(a.u),h=g.next();!h.done;h=g.next())h=h.value,Mm(a,h[0],h[1]||f,c.layer);f=u(a.o);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=El(g);var l=k[0]||Cl(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={F:Gl(h),U:h},"UNDEFINED_CSN"==h?Ol("visualElementStateChanged",k,l):g?Lh("visualElementStateChanged",k,g,l):Gk("visualElementStateChanged",
k,l))}}};
El(c.layer)||a.j();if(c.Ha)for(var d=u(c.Ha),e=d.next();!e.done;e=d.next())Lm(a,e.value,c.layer);else $k(Error("Delayed screen needs a data promise."))}
function Om(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.lb?c.lb:c.layer;var e=El(d);d=Cl(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=F("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.Ga,n=c.F,q=Ll(),r={csn:q,pageVe:(new xl({veType:b,youtubeData:g})).getAsJson()};h&&h.visualElement?r.implicitGesture={parentCsn:h.clientScreenNonce,
gesturedVe:h.visualElement.getAsJson()}:h&&Zk(new yi("newScreen() parent element does not have a VE - rootVe",b));l&&(r.cloneCsn=l);l={F:n,U:q};k?Lh("screenCreated",r,k,l):Gk("screenCreated",r,l);ki(ni,new Il(q));var p=q}catch(A){al(A,{wl:b,rootVe:d,parentVisualElement:void 0,ql:e,vl:f,Ga:c.Ga});$k(A);return}Hl(p,b,c.layer,c.F);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=O("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(wl));for(f=b.next();!f.done;f=b.next())if(El(f.value)==e){b=!0;break a}b=
!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={F:Gl(e),U:e,Xa:f},"UNDEFINED_CSN"==e?Ol("visualElementHidden",d,f):b?Lh("visualElementHidden",d,b,f):Gk("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=p||"");Dm("csn",p);Pl.getInstance().clear();d=Cl(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(O("web_mark_root_visible")||O("music_web_mark_root_visible"))&&(e=p,p={csn:e,ve:d.getAsJson(),eventType:1},b={F:Gl(e),U:e},
"UNDEFINED_CSN"==e?Ol("visualElementShown",p,b):Gk("visualElementShown",p,b));a.i.delete(c.layer||0);a.j=void 0;e=u(a.A);for(p=e.next();!p.done;p=e.next())b=u(p.value),p=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Mm(a,p,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(A){$k(A)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(A){$k(A)}}}
;function Pm(a){a&&(a.dataset?a.dataset[Qm("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Rm(a,b){return a?a.dataset?a.dataset[Qm(b)]:a.getAttribute("data-"+b):null}
var Sm={};function Qm(a){return Sm[a]||(Sm[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Tm=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Um=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Vm(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Tm,""),c=c.replace(Um,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Wm(a,b,c)}
function Wm(a,b,c){c=void 0===c?null:c;var d=Xm(a),e=document.getElementById(d),f=e&&Rm(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=hh(d,b),b=""+Ka(b),Ym[b]=f),g||(e=Zm(a,d,function(){Rm(e,"loaded")||(Pm(e),kh(d),dg(Qa(lh,d),0))},c)))}
function Zm(a,b,c,d){d=void 0===d?null:d;var e=Wc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Oc(e,gd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function $m(a){a=Xm(a);var b=document.getElementById(a);b&&(lh(a),b.parentNode.removeChild(b))}
function an(a,b){a&&b&&(a=""+Ka(b),(a=Ym[a])&&jh(a))}
function Xm(a){var b=document.createElement("a");Vb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ac(a)}
var Ym={};var bn=[],cn=!1;function dn(){if((!O("condition_ad_status_fetch_on_consent_cookie_html5_clients")||jl())&&"1"!=ib()){var a=function(){cn=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
try{Vm("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}bn.push(jg(function(){if(!(cn||"google_ad_status"in window)){try{an("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}cn=!0;N("DCLKSTAT",3)}},5E3))}}
function en(){var a=Number(F("DCLKSTAT",0));return isNaN(a)?0:a}
;function fn(){this.i=!1;this.h=null}
fn.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript;sb("From proto message. b/166824318");g=g.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=pb();g=k?k.createScript(g):g;g=(new ub(g)).toString()}a.interpreterSafeUrl&&(h=a.interpreterSafeUrl,sb("From proto message. b/166824318"),h=yb(h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||
"").toString());gn(this,g,h,a.program,b,c,d)}else Zk(Error("Cannot initialize botguard without program"))};
function gn(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,Vm(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?hn(a,d,!!g,h,e):($m(c),Zk(new yi("Unable to load Botguard","from "+c)))},f)):b&&(f=Wc(document,"SCRIPT"),f.textContent=b,f.nonce=Yb(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?hn(a,d,!!g,b,e):Zk(Error("Unable to load Botguard from JS")))}
function hn(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{jn(a,new d(b,e?function(){return e(b)}:Ea))}catch(h){h instanceof Error&&Zk(h)}else{try{jn(a,new d(b))}catch(h){h instanceof Error&&Zk(h)}e&&e(b)}else Zk(Error("Failed to finish initializing VM"))}
fn.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
fn.prototype.dispose=function(){this.h=null};
function jn(a,b){a.h=b}
;var kn=new fn;function ln(){return!!kn.h}
function mn(a){a=void 0===a?{}:a;return kn.invoke(a)}
;var nn=window,on=/[A-Za-z]+\/[0-9.]+/g;function pn(a,b){if(a.replace(on,"")!==b.replace(on,""))return!1;a=a.match(on);b=b.match(on);if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(!d.startsWith(e)&&!e.startsWith(d))return!1}return!0}
function qn(){var a=nn.uaChPolyfill.state;if(0===a.type)Gk("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&pn(a.syntheticUa,b),d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),$k(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);Gk("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),Gk("clientHintsPolyfillDiagnostics",
b))}}
var rn=!1;function sn(){var a;1===(null===(a=nn.uaChPolyfill)||void 0===a?void 0:a.state.type)?rn||(nn.uaChPolyfill.onReady=sn,rn=!0):nn.uaChPolyfill&&qn()}
;function tn(a,b,c){L.call(this);var d=this;c=c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.G=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.G&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.o||0<=Wa(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.i=this.m=null;window.addEventListener("message",this.A)}
v(tn,L);tn.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){Of(d)}}};
tn.prototype.D=function(){window.removeEventListener("message",this.A);L.prototype.D.call(this)};function un(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new tn(!!F("WIDGET_ID_ENFORCE")),b=this.nb.bind(this);a.m=b;a.o=null;this.h.channel="widget";if(a=F("WIDGET_ID"))this.h.sessionId=a}
m=un.prototype;m.nb=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,vn(this,a)),this.j[a]=!0)):this.Ca(a,b,c)};
m.Ca=function(){};
function vn(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Ya=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.va());this.sendMessage("onReady");D(this.i,this.Pa,this);this.i=[]};
m.va=function(){return null};
function wn(a,b){a.sendMessage("infoDelivery",b)}
m.Pa=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Pa({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function xn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function yn(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function zn(a,b,c,d){if(Ia(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function An(a){un.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.tb.bind(this));this.addEventListener("onVolumeChange",this.ub.bind(this));this.addEventListener("onApiChange",this.ob.bind(this));this.addEventListener("onPlaybackQualityChange",this.qb.bind(this));this.addEventListener("onPlaybackRateChange",this.rb.bind(this));this.addEventListener("onStateChange",this.sb.bind(this));this.addEventListener("onWebglSettingsChanged",
this.vb.bind(this))}
v(An,un);m=An.prototype;
m.Ca=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&xn(a)){var d=b;if(Ia(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=yn(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=yn(e);break;case "loadPlaylist":case "cuePlaylist":e=zn(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);xn(a)&&wn(this,this.va())}};
m.onReady=function(){var a=this.Ya.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.va=function(){if(!this.api)return null;var a=this.api.getApiInterface();ab(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.sb=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());wn(this,a)};
m.qb=function(a){wn(this,{playbackQuality:a})};
m.rb=function(a){wn(this,{playbackRate:a})};
m.ob=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.ub=function(){wn(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.tb=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());wn(this,a)};
m.vb=function(){var a={sphericalProperties:this.api.getSphericalProperties()};wn(this,a)};
m.dispose=function(){un.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Bn(a){L.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Na,this)}
v(Bn,L);m=Bn.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.X("RECEIVING"))};
m.X=function(a,b){this.started&&!this.h&&this.connection.X(a,b)};
m.Na=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Cn(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Dn(a,c))&&this.X(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.pb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.pb=function(a,b){this.started&&!this.h&&this.connection.X(a,this.ta(a,b))};
m.ta=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.D=function(){var a=this.connection;a.h||of(a.i,"command",this.Na,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);L.prototype.D.call(this)};function En(a,b){Bn.call(this,b);this.api=a;this.start()}
v(En,Bn);En.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
En.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Cn(a,b){switch(a){case "loadVideoById":return a=yn(b),[a];case "cueVideoById":return a=yn(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=zn(b),[a];case "cuePlaylist":return a=zn(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Dn(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
En.prototype.ta=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Bn.prototype.ta.call(this,a,b)};
En.prototype.D=function(){Bn.prototype.D.call(this);delete this.api};function Fn(a){a=void 0===a?!1:a;L.call(this);this.i=new M(a);Xd(this,Qa(Vd,this.i))}
C(Fn,L);Fn.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
Fn.prototype.l=function(a,b){this.h||this.i.W.apply(this.i,arguments)};function Gn(a,b,c){Fn.call(this);this.j=a;this.destination=b;this.id=c}
v(Gn,Fn);Gn.prototype.X=function(a,b){this.h||this.j.X(this.destination,this.id,a,b)};
Gn.prototype.D=function(){this.destination=this.j=null;Fn.prototype.D.call(this)};function Hn(a,b,c){L.call(this);this.destination=a;this.origin=c;this.i=ag(window,"message",this.j.bind(this));this.connection=new Gn(this,a,b);Xd(this,Qa(Vd,this.connection))}
v(Hn,L);Hn.prototype.X=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Pe(a),this.origin))};
Hn.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
Hn.prototype.D=function(){bg(this.i);this.destination=null;L.prototype.D.call(this)};function In(){L.call(this);this.i=[]}
v(In,L);In.prototype.D=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Ea)}L.prototype.D.call(this)};function Jn(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||kb(b);this.assets=a.assets||{};this.attrs=a.attrs||kb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Jn.prototype.clone=function(){var a=new Jn,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ga(c)?a[b]=kb(c):a[b]=c}return a};var Kn=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ln(a){a=a||"";if(window.spf){var b=a.match(Kn);spf.style.load(a,b?b[1]:"",void 0)}else Mn(a)}
function Mn(a){var b=Nn(a),c=document.getElementById(b),d=c&&Rm(c,"loaded");d||c&&!d||(c=On(a,b,function(){Rm(c,"loaded")||(Pm(c),kh(b),dg(Qa(lh,b),0))}))}
function On(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=gd(a);Wb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Nn(a){var b=Wc(document,"A");sb("This URL is never added to the DOM");Vb(b,new Ib(a,Jb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ac(a)}
;function Pn(a,b,c,d){L.call(this);var e=this;this.G=b;this.webPlayerContextConfig=d;this.qa=!1;this.api={};this.ba=this.m=null;this.J=new M;this.i={};this.O=this.fa=this.elementId=this.ra=this.config=null;this.N=!1;this.l=this.A=null;this.ga={};this.Qa=["onReady"];this.lastError=null;this.Da=NaN;this.C={};this.Ra=new In(this);this.aa=0;this.j=this.o=a;Xd(this,Qa(Vd,this.J));Qn(this);Rn(this);Xd(this,Qa(Vd,this.Ra));c?this.aa=dg(function(){e.loadNewVideoConfig(c)},0):d&&(Sn(this),Tn(this))}
v(Pn,L);m=Pn.prototype;m.getId=function(){return this.G};
m.loadNewVideoConfig=function(a){if(!this.h){this.aa&&(eg(this.aa),this.aa=0);var b=a||{};b instanceof Jn||(b=new Jn(b));this.config=b;this.setConfig(a);Tn(this);this.isReady()&&Un(this)}};
function Sn(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.G,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.G:a.config.attrs.id=a.G);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.ra=a;this.config=Vn(a);Sn(this);this.fa||(this.fa=Wn(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=id(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=id(Number(a)||a))};
function Un(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function Xn(a){var b=!0,c=Yn(a);c&&a.config&&(a=Zn(a),b=Rm(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Tn(a){if(!a.h&&!a.N){var b=Xn(a);if(b&&"html5"===(Yn(a)?"html5":null))a.O="html5",a.isReady()||$n(a);else if(ao(a),a.O="html5",b&&a.l&&a.o)a.o.appendChild(a.l),$n(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=bo(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Vn(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);$n(a)};
a.N=!0;b?a.A():(Vm(Zn(a),a.A),(b=co(a))&&Ln(b),eo(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function Yn(a){var b=Sc(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function $n(a){var b;if(!a.h){var c=Yn(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.N=!1,!bo(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||fo(a)):a.Da=dg(function(){$n(a)},50)}}
function fo(a){Qn(a);a.qa=!0;var b=Yn(a);if(b){a.m=go(a,b,"addEventListener");a.ba=go(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=go(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);Un(a);a.fa&&a.fa(a.api);a.J.W("onReady",a.api)}
function go(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,Zk(h))}}}
function Qn(a){a.qa=!1;if(a.ba)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ba(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&eg(Number(c));a.C={};a.m=null;a.ba=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ra};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.qa};
function Rn(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){kh("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){kh("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){kh("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=Wn(this,b);d&&(0<=Wa(this.Qa,a)||this.i[a]||(b=ho(this,a),this.m&&this.m(a,b)),this.J.subscribe(a,d),"onReady"===a&&this.isReady()&&dg(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=Wn(this,b))&&of(this.J,a,b)};
function Wn(a,b){var c=b;if("string"===typeof b){if(a.ga[b])return a.ga[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];if(f=B(b))try{f.apply(y,e)}catch(g){$k(g)}};
a.ga[b]=c}return c?c:null}
function ho(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;y[c]=function(d){var e=dg(function(){if(!a.h){a.J.W(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
hb(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.O||(Yn(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function ao(a){a.cancel();Qn(a);a.O=null;a.config&&(a.config.loaded=!1);var b=Yn(a);b&&(Xn(a)||!eo(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&an(Zn(this),this.A);eg(this.Da);this.N=!1};
m.D=function(){ao(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){$k(b)}this.ga=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.ra=this.config=this.api=null;delete this.o;delete this.j;L.prototype.D.call(this)};
function eo(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Zn(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function co(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function bo(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===wg(d||"","&")[b]}
function Vn(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?kb(e):e}return b}
;var io={},jo="player_uid_"+(1E9*Math.random()>>>0);function ko(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Sc(d):d;var e=jo+"_"+Ka(d),f=io[e];if(f&&c)return lo(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Pn(d,e,a,b);io[e]=f;kh("player-added",f.api);Xd(f,function(){delete io[f.getId()]});
return f.api}
function lo(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var mo=null,no=null,oo=null;function po(){var a=mo.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function qo(a,b,c){a="ST-"+ac(a).toString(36);b=b?fc(b):"";c=c||5;O("drop_st_cookie_before_cb")&&!jl()||Nh(a,b,c)}
;function ro(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=F("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=dc(window.location.href);g&&f.push(g);g=dc(d);if(0<=Wa(f,g)||!g&&0==d.lastIndexOf("/",0))if(O("autoescape_tempdata_url")&&(f=document.createElement("a"),Vb(f,d),d=f.href),d){g=d.match(bc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:El()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&qo(d,b,k)}else qo(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var q=void 0===q?window:q;c=q.location;a=gc(a,l)+n;var r=void 0===r?fd:r;a:{r=void 0===r?fd:r;for(l=0;l<r.length;++l)if(n=r[l],n instanceof dd&&n.isValid(a)){r=new Lc(a,Jc);break a}r=void 0}c.href=Nc(r||Mc)}return!0}
;z("yt.setConfig",N,void 0);z("yt.config.set",N,void 0);z("yt.setMsg",Qf,void 0);z("yt.msgs.set",Qf,void 0);z("yt.logging.errors.log",$k,void 0);
z("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);if(!a){var b=F("PLAYER_VARS",void 0);b&&(a={args:b})}rl(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=F("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);O("embeds_js_api_set_1p_cookie")&&(c=Bg(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));N("FORCE_CSI_ON_GEL",!0);
c=["ol"];nm("").info.actionType="embed";c&&N("TIMING_AFT_KEYS",c);N("TIMING_ACTION","embed");c=F("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&Dm(d,c[d]);Dm("is_nav",1);(d=El())&&Dm("csn",d);(d=F("PREVIOUS_ACTION",void 0))&&!ym()&&Dm("pa",d);d=im();c=F("CLIENT_PROTOCOL");var e=F("CLIENT_TRANSPORT");c&&Dm("p",c);e&&Dm("t",e);Dm("yt_vis",Gm());Dm("yt_lt","cold");c=em();if(e=gm())Z("srt",c.responseStart),1!==d.prerender&&(Dm("yt_sts","n",void 0),Z("_start",e,void 0));d=lm();0<d&&Z("fpt",d);d=
em();d.isPerformanceNavigationTiming&&Dm("pnt",1,void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=gm()&&0<d.connectEnd-
d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));W&&W.getEntriesByType&&Im();d=[];if(document.querySelector&&W&&W.getEntriesByName)for(var f in bm)bm.hasOwnProperty(f)&&(c=bm[f],Hm(f,c)&&d.push(c));d.length&&Dm("rc",d.join(","));if(ym(void 0)){f={actionType:sm[F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:sm[F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(d=El())f.clientScreenNonce=d;d=jm(void 0);qm().info(f,d)}f=
im();c=dm();if("cold"===f.yt_lt&&(d=Am(),e=d.gelTicks?d.gelTicks:d.gelTicks={},d=d.gelInfos?d.gelInfos:d.gelInfos={},ym())){for(var g in c)"tick_"+g in e||zm(g,c[g]);g=Cm();c=jm();e={};for(var h in f)if(!("info_"+h in d)){var k=Bm(h,f[h]);k&&(Ql(g,k),Ql(e,k))}qm().info(e,c)}z("ytglobal.timingready_",!0,void 0);Em();(h=F("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in h?(h=h.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,h.serializedForcedExperimentIds||(g=Bg(),
g.forced_experiments&&(h.serializedForcedExperimentIds=g.forced_experiments)),mo=ko(a,h,!1)):mo=ko(a);mo.addEventListener("onVideoDataChange",po);a=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?oo=new An(mo):F("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(no=new Hn(window.parent,a,b),oo=new En(mo,no.connection));dn();O("networkless_logging_web_embedded")&&rk();O("embeds_enable_ua_ch_polyfill")&&sn()},void 0);
var so=Mf(function(){Fm();var a=Ph.getInstance(),b=!!((Sh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&$d(document.body,"exp-invert-logo"))if(c&&!$d(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!$d(d,"inverted-hdpi")){var e=Yd(d);Zd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&$d(document.body,"inverted-hdpi")&&ae();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Sh(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete Oh[b]:(c=d.toString(16),Oh[b]=c.toString());c=!0;O("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Oh)d.push(f+"="+encodeURIComponent(String(Oh[f])));Nh(b,d.join("&"),63072E3,a.i,c)}Km.h||(Km.h=new Km);a=Km.h;f=16623;var g=void 0===g?{}:g;Object.values(bl).includes(f)||(Zk(new yi("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.u=[];a.o=[];g.Ha?Nm(a,f,g):Om(a,f,g)}),to=Mf(function(){mo&&
mo.sendAbandonmentPing&&mo.sendAbandonmentPing();
F("PL_ATT")&&kn.dispose();for(var a=0,b=bn.length;a<b;a++)lg(bn[a]);bn.length=0;$m("//static.doubleclick.net/instream/ad_status.js");cn=!1;N("DCLKSTAT",0);Wd(oo,no);mo&&(mo.removeEventListener("onVideoDataChange",po),mo.destroy())});
window.addEventListener?(window.addEventListener("load",so),window.addEventListener("unload",to)):window.attachEvent&&(window.attachEvent("onload",so),window.attachEvent("onunload",to));Ra("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||ln);Ra("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||mn);Ra("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||en);
Ra("yt.player.exports.navigate",B("yt.player.exports.navigate")||ro);Ra("yt.util.activity.init",B("yt.util.activity.init")||ng);Ra("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||qg);Ra("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||og);}).call(this);
