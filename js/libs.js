/**
 * Swiper 8.1.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 15, 2022
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function l(e){void 0===e&&(e=[]);const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const c={addClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...a)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...a)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return o(this,(e=>a.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));this.forEach((e=>{a.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;function l(e){const t=e.target;if(!t)return;const s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),d(t).is(i))r.apply(t,s);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(i)&&r.apply(e[t],s)}}function o(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const c=a.split(" ");let p;for(let e=0;e<this.length;e+=1){const t=this[e];if(i)for(p=0;p<c.length;p+=1){const e=c[p];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:l}),t.addEventListener(e,l,n)}else for(p=0;p<c.length;p+=1){const e=c[p];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const l=a.split(" ");for(let e=0;e<l.length;e+=1){const t=l[e];for(let e=0;e<this.length;e+=1){const s=this[e];let a;if(!i&&s.dom7Listeners?a=s.dom7Listeners[t]:i&&s.dom7LiveListeners&&(a=s.dom7LiveListeners[t]),a&&a.length)for(let e=a.length-1;e>=0;e-=1){const i=a[e];r&&i.listener===r||r&&i.listener&&i.listener.dom7proxy&&i.listener.dom7proxy===r?(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1)):r||(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1))}}}return this},trigger:function(){const e=r();for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];const i=s[0].split(" "),n=s[1];for(let t=0;t<i.length;t+=1){const a=i[t];for(let t=0;t<this.length;t+=1){const i=this[t];if(e.CustomEvent){const t=new e.CustomEvent(a,{detail:n,bubbles:!0,cancelable:!0});i.dom7EventData=s.filter(((e,t)=>t>0)),i.dispatchEvent(t),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(){let e;const t=a();for(let s=0;s<arguments.length;s+=1){e=s<0||arguments.length<=s?void 0:arguments[s];for(let s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof n)for(let t=0;t<e.length;t+=1)this[s].appendChild(e[t]);else this[s].appendChild(e)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function p(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function u(){return Date.now()}function h(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function g(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(null!=a&&!f(a)){const s=Object.keys(Object(a)).filter((e=>t.indexOf(e)<0));for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(a,i);void 0!==r&&r.enumerable&&(m(e[i])&&m(a[i])?a[i].__swiper__?e[i]=a[i]:g(e[i],a[i]):!m(e[i])&&m(a[i])?(e[i]={},a[i].__swiper__?e[i]=a[i]:g(e[i],a[i])):e[i]=a[i])}}}return e}function v(e,t,s){e.style.setProperty(t,s)}function w(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}let b,x,y;function E(){return b||(b=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),b}function T(e){return void 0===e&&(e={}),x||(x=function(e){let{userAgent:t}=void 0===e?{}:e;const s=E(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),h=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!m&&(l.os="android",l.android=!0),(p||h||u)&&(l.os="ios",l.ios=!0),l}(e)),x}function C(){return y||(y=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),y}Object.keys(c).forEach((e=>{Object.defineProperty(d.fn,e,{value:c[e],writable:!0})}));var $={on(e,t,s){const a=this;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};var S={updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let g=a.slidesOffsetAfter;"function"==typeof g&&(g=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,T=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(v(e.wrapperEl,"--swiper-centered-offset-before",""),v(e.wrapperEl,"--swiper-centered-offset-after",""));const C=a.grid&&a.grid.rows>1&&e.grid;let $;C&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){$=0;const n=c.eq(i);if(C&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),c[i]&&(c[i].style[t("width")]=`${$}px`);c[i]&&(c[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),T%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),C&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+g:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){v(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),v(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),!(o||a.cssMode||"slide"!==a.effect&&"fade"!==a.effect)){const t=`${a.containerModifierClass}backface-hidden`,s=e.$el.hasClass(t);p<=a.maxBackfaceHiddenSlides?s||e.$el.addClass(t):s&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)t.visibleSlides.each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(n-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-c:c}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var M={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,c=0;s.isHorizontal()?d=a?-e:e:c=e,i.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:i.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c;const p=s.maxTranslate()-s.minTranslate();o=0===p?0:(e-s.minTranslate())/p,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};function P(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var k={slideTo:function(e,t,s,a,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1),(p||l.initialSlide||0)===(c||0)&&s&&r.emit("beforeSlideChangeStart");const v=-o[g];if(r.updateProgress(v),l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(b=n>p?"next":n<p?"prev":"reset",u&&-v===r.translate||!u&&v===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0);const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;if(void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return a.slideTo(m,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var z={loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((t,s)=>{const a=d(t);s<e.loopedSlides&&o.push(t),s<n.length&&s>=n.length-e.loopedSlides&&l.push(t),a.attr("data-swiper-slide-index",s)}));for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}};function O(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:c}=t;if(!c)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let h=d(p.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===p.type,!n.isTouchEvent&&"which"in p&&3===p.which)return;if(!n.isTouchEvent&&"button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;!!l.noSwipingClass&&""!==l.noSwipingClass&&p.target&&p.target.shadowRoot&&e.path&&e.path[0]&&(h=d(e.path[0]));const m=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,f=!(!p.target||!p.target.shadowRoot);if(l.noSwiping&&(f?function(e,t){return void 0===t&&(t=this),function t(s){return s&&s!==a()&&s!==r()?(s.assignedSlot&&(s=s.assignedSlot),s.closest(e)||t(s.getRootNode().host)):null}(t)}(m,p.target):h.closest(m)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===p.type?p.targetTouches[0].pageX:p.pageX,o.currentY="touchstart"===p.type?p.targetTouches[0].pageY:p.pageY;const g=o.currentX,v=o.currentY,w=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,b=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(w&&(g<=b||g>=i.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=v,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==p.type){let e=!0;h.is(n.focusableElements)&&(e=!1,"SELECT"===h[0].nodeName&&(n.isTouched=!1)),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||p.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",p)}function I(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));if(i.isTouchEvent&&"touchmove"!==c.type)return;const p="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?p.pageX:c.pageX,m="touchmove"===c.type?p.pageY:c.pageY;if(c.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return d(c.target).is(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&d(c.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)),s.emit("sliderMove",c),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function L(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),c=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),p((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const w=(h-n[m])/f,b=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-a.longSwipesRatio?t.slideTo(m+b):null!==v&&w<0&&Math.abs(w)>a.longSwipesRatio?t.slideTo(v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(null!==g?g:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:m))}}function A(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function D(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function G(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let B=!1;function N(){}const H=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,c=!!i.nested,p="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[p](r.start,e.onTouchStart,t),n[p](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:c}:c),n[p](r.end,e.onTouchEnd,t),r.cancel&&n[p](r.cancel,e.onTouchEnd,t)}else n[p](r.start,e.onTouchStart,!1),s[p](r.move,e.onTouchMove,c),s[p](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",A,!0):e[u]("observerUpdate",A,!0)};var X={attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=O.bind(e),e.onTouchMove=I.bind(e),e.onTouchEnd=L.bind(e),s.cssMode&&(e.onScroll=G.bind(e)),e.onClick=D.bind(e),i.touch&&!B&&(t.addEventListener("touchstart",N),B=!0),H(e,"on")},detachEvents:function(){H(this,"off")}};const Y=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var R={addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}};var W={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function j(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),g(t,s)):g(t,s)):g(t,s)}}const _={eventsEmitter:$,update:S,translate:M,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),P({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),P({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:k,loop:z,grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:X,breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=Y(e,i),c=Y(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses());const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),g(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:R,images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function c(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?c():t?(o=new l.Image,o.onload=c,o.onerror=c,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):c()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},q={};class V{constructor(){let e,t;for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];if(1===a.length&&a[0].constructor&&"Object"===Object.prototype.toString.call(a[0]).slice(8,-1)?t=a[0]:[e,t]=a,t||(t={}),t=g({},t),e&&!t.el&&(t.el=e),t.el&&d(t.el).length>1){const e=[];return d(t.el).each((s=>{const a=g({},t,{el:s});e.push(new V(a))})),e}const r=this;r.__swiper__=!0,r.support=E(),r.device=T({userAgent:t.userAgent}),r.browser=C(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const n={};r.modules.forEach((e=>{e({swiper:r,extendParams:j(t,n),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const l=g({},W,n);return r.params=g({},l,q,t),r.originalParams=g({},r.params),r.passedParams=g({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=d,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){g(q,e)}static get extendedDefaults(){return q}static get defaults(){return W}static installModule(e){V.prototype.__modules__||(V.prototype.__modules__=[]);const t=V.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>V.installModule(e))),V):(V.installModule(e),V)}}function F(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function U(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function Z(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function J(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function Q(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function ee(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function te(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l}=e;let o;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(o=!0),requestAnimationFrame((()=>{o&&s.slides&&s.slides.length&&(i(),o=!1)})))}))}function se(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ae(e){let{swiper:t,duration:s,transformEl:a,allSlides:i}=e;const{slides:r,activeIndex:n,$wrapperEl:l}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a?r.find(a):r:a?r.eq(n).find(a):r.eq(n),e.transitionEnd((()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=["webkitTransitionEnd","transitionend"];for(let t=0;t<e.length;t+=1)l.trigger(e[t])}))}}function ie(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(_).forEach((e=>{Object.keys(_[e]).forEach((t=>{V.prototype[t]=_[e][t]}))})),V.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,t){void 0===t&&(t={});const s=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(1===e.length)return void i("observerUpdate",e[0]);const t=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(t):l.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.push(s)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents();for(let t=0;t<e.length;t+=1)o(e[t])}o(t.$el[0],{childList:t.params.observeSlideChildren}),o(t.$wrapperEl[0],{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const re=[function(e){let t,{swiper:s,extendParams:a,on:i,emit:r}=e;function n(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];const i=a.renderSlide?d(a.renderSlide.call(s,e,t)):d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",t),a.cache&&(s.virtual.cache[t]=i),i}function l(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:d,to:c,slides:p,slidesGrid:u,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const m=s.activeIndex||0;let f,g,v;f=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(g=Math.floor(t/2)+a+o,v=Math.floor(t/2)+a+l):(g=t+(a-1)+o,v=a+l);const w=Math.max((m||0)-v,0),b=Math.min((m||0)+g,p.length-1),x=(s.slidesGrid[w]||0)-(s.slidesGrid[0]||0);function y(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),r("virtualUpdate")}if(Object.assign(s.virtual,{from:w,to:b,offset:x,slidesGrid:s.slidesGrid}),d===w&&c===b&&!e)return s.slidesGrid!==u&&x!==h&&s.slides.css(f,`${x}px`),s.updateProgress(),void r("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:w,to:b,slides:function(){const e=[];for(let t=w;t<=b;t+=1)e.push(p[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?y():r("virtualUpdate"));const E=[],T=[];if(e)s.$wrapperEl.find(`.${s.params.slideClass}`).remove();else for(let e=d;e<=c;e+=1)(e<w||e>b)&&s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<p.length;t+=1)t>=w&&t<=b&&(void 0===c||e?T.push(t):(t>c&&T.push(t),t<d&&E.push(t)));T.forEach((e=>{s.$wrapperEl.append(n(p[e],e))})),E.sort(((e,t)=>t-e)).forEach((e=>{s.$wrapperEl.prepend(n(p[e],e))})),s.$wrapperEl.children(".swiper-slide").css(f,`${x}px`),y()}a({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},i("beforeInit",(()=>{s.params.virtual.enabled&&(s.virtual.slides=s.params.virtual.slides,s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||l())})),i("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{l()}),100)):l())})),i("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&v(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);l(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}l(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);l(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),l(!0),s.slideTo(0,0)},update:l})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function c(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,h=38===i,m=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&m||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&0===t.$el.parents(`.${t.params.slideActiveClass}`).length)return;const a=t.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=o.innerWidth,l=o.innerHeight,d=t.$el.offset();s&&(d.left-=t.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&t.slideNext(),(d||h)&&t.slidePrev()),n("keyPress",i)}}function p(){t.keyboard.enabled||(d(l).on("keydown",c),t.keyboard.enabled=!0)}function u(){t.keyboard.enabled&&(d(l).off("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&p()})),i("destroy",(()=>{t.keyboard.enabled&&u()})),Object.assign(t.keyboard,{enable:p,disable:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let l;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let o,c=u();const h=[];function m(){t.enabled&&(t.mouseEntered=!0)}function f(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&u()-c<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&u()-c<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),c=(new n.Date).getTime(),!1)))}function v(e){let s=e,a=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(n=d(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!n[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let c=0;const m=t.rtlTranslate?-1:1,f=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(f.pixelX)>Math.abs(f.pixelY)))return!0;c=-f.pixelX*m}else{if(!(Math.abs(f.pixelY)>Math.abs(f.pixelX)))return!0;c=-f.pixelY}else c=Math.abs(f.pixelX)>Math.abs(f.pixelY)?-f.pixelX*m:-f.pixelY;if(0===c)return!0;r.invert&&(c=-c);let v=t.getTranslate()+c*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:u(),delta:Math.abs(c),direction:Math.sign(c)},a=o&&e.time<o.time+500&&e.delta<=o.delta&&e.direction===o.direction;if(!a){o=void 0,t.params.loop&&t.loopFix();let n=t.getTranslate()+c*r.sensitivity;const d=t.isBeginning,u=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!d&&t.isBeginning||!u&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(l),l=void 0,h.length>=15&&h.shift();const s=h.length?h[h.length-1]:void 0,a=h[0];if(h.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))h.splice(0);else if(h.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=c>0?.8:.2;o=e,h.splice(0),l=p((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}l||(l=p((()=>{o=e,h.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),n===t.minTranslate()||n===t.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(c),direction:Math.sign(c),raw:e};h.length>=2&&h.shift();const a=h.length?h[h.length-1]:void 0;if(h.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&g(s):g(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function w(e){let s=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(s=d(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",f),s[e]("wheel",v)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(w("on"),t.mousewheel.enabled=!0,!0)}function x(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(w("off"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&x(),t.params.mousewheel.enabled&&b()})),a("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&x()})),Object.assign(t.mousewheel,{enable:b,disable:x})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&(s=d(e),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.$el.find(e).length&&(s=t.$el.find(e))),s}function n(e,s){const a=t.params.navigation;e&&e.length>0&&(e[s?"addClass":"removeClass"](a.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=s),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](a.lockClass))}function l(){if(t.params.loop)return;const{$nextEl:e,$prevEl:s}=t.navigation;n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&t.slidePrev()}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&t.slideNext()}function p(){const e=t.params.navigation;if(t.params.navigation=F(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;const s=r(e.nextEl),a=r(e.prevEl);s&&s.length>0&&s.on("click",c),a&&a.length>0&&a.on("click",o),Object.assign(t.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(s&&s.addClass(e.lockClass),a&&a.addClass(e.lockClass))}function u(){const{$nextEl:e,$prevEl:s}=t.navigation;e&&e.length&&(e.off("click",c),e.removeClass(t.params.navigation.disabledClass)),s&&s.length&&(s.off("click",o),s.removeClass(t.params.navigation.disabledClass))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},a("init",(()=>{p(),l()})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{const{$nextEl:e,$prevEl:s}=t.navigation;e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),s&&s[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),a("click",((e,s)=>{const{$nextEl:a,$prevEl:r}=t.navigation,n=s.target;if(t.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a?e=a.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),a&&a.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}})),Object.assign(t.navigation,{update:l,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`}}),t.pagination={el:null,$el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let p;const u=t.params.loop?Math.ceil((a-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(p=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),p>a-1-2*t.loopedSlides&&(p-=a-2*t.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==t.params.paginationType&&(p=u+p)):p=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const a=t.pagination.bullets;let i,o,u;if(s.dynamicBullets&&(n=a.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",n*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&(l+=p-(t.previousIndex-t.loopedSlides||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),i=Math.max(p-l,0),o=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(o+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),r.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=o&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&c(t,"prev"),a===o&&c(t,"next"))}));else{const e=a.eq(p),r=e.index();if(e.addClass(s.bulletActiveClass),s.dynamicBullets){const e=a.eq(i),n=a.eq(o);for(let e=i;e<=o;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(t.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else c(e,"prev"),c(n,"next");else c(e,"prev"),c(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),r=(n*i-n)/2-u*n,l=e?"right":"left";a.css(t.isHorizontal()?l:"top",`${r}px`)}}if("fraction"===s.type&&(r.find(U(s.currentClass)).text(s.formatFractionCurrent(p+1)),r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let e;e=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,n=1;"horizontal"===e?i=a:n=a,r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)}"custom"===s.type&&s.renderCustom?(r.html(s.renderCustom(t,p+1,u)),i("paginationRender",r[0])):i("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](s.lockClass)}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,a=t.pagination.$el;let r="";if("bullets"===e.type){let i=t.params.loop?Math.ceil((s-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&i>s&&(i=s);for(let s=0;s<i;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;a.html(r),t.pagination.bullets=a.find(U(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,a.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,a.html(r)),"custom"!==e.type&&i("paginationRender",t.pagination.$el[0])}function h(){t.params.pagination=F(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s=d(e.el);0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&s.length>1&&(s=t.$el.find(e.el),s.length>1&&(s=s.filter((e=>d(e).parents(".swiper")[0]===t.el)))),"bullets"===e.type&&e.clickable&&s.addClass(e.clickableClass),s.addClass(e.modifierClass+e.type),s.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.addClass(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.addClass(e.progressbarOppositeClass),e.clickable&&s.on("click",U(e.bulletClass),(function(e){e.preventDefault();let s=d(this).index()*t.params.slidesPerGroup;t.params.loop&&(s+=t.loopedSlides),t.slideTo(s)})),Object.assign(t.pagination,{$el:s,el:s[0]}),t.enabled||s.addClass(e.lockClass))}function m(){const e=t.params.pagination;if(o())return;const s=t.pagination.$el;s.removeClass(e.hiddenClass),s.removeClass(e.modifierClass+e.type),s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&s.off("click",U(e.bulletClass))}a("init",(()=>{h(),u(),p()})),a("activeIndexChange",(()=>{(t.params.loop||void 0===t.snapIndex)&&p()})),a("snapIndexChange",(()=>{t.params.loop||p()})),a("slidesLengthChange",(()=>{t.params.loop&&(u(),p())})),a("snapGridLengthChange",(()=>{t.params.loop||(u(),p())})),a("destroy",(()=>{m()})),a("enable disable",(()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r.length>0&&!d(a).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r.hasClass(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}})),Object.assign(t.pagination,{render:u,update:p,init:h,destroy:m})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const n=a();let l,o,c,u,h=!1,m=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s,progress:a}=t,{$dragEl:i,$el:r}=e,n=t.params.scrollbar;let l=o,d=(c-o)*a;s?(d=-d,d>0?(l=o-d,d=0):-d+o>c&&(l=c+d)):d<0?(l=o+d,d=0):d+o>c&&(l=c-d),t.isHorizontal()?(i.transform(`translate3d(${d}px, 0, 0)`),i[0].style.width=`${l}px`):(i.transform(`translate3d(0px, ${d}px, 0)`),i[0].style.height=`${l}px`),n.hide&&(clearTimeout(m),r[0].style.opacity=1,m=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{$dragEl:s,$el:a}=e;s[0].style.width="",s[0].style.height="",c=t.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),o="auto"===t.params.scrollbar.dragSize?c*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s[0].style.width=`${o}px`:s[0].style.height=`${o}px`,a[0].style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&e.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function w(e){return t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY}function b(e){const{scrollbar:s,rtlTranslate:a}=t,{$el:i}=s;let r;r=(w(e)-i.offset()[t.isHorizontal()?"left":"top"]-(null!==l?l:o/2))/(c-o),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n,$dragEl:o}=a;h=!0,l=e.target===o[0]||e.target===o?w(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.transition(100),o.transition(100),b(e),clearTimeout(f),n.transition(0),s.hide&&n.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",e)}function y(e){const{scrollbar:s,$wrapperEl:a}=t,{$el:i,$dragEl:n}=s;h&&(e.preventDefault?e.preventDefault():e.returnValue=!1,b(e),a.transition(0),i.transition(0),n.transition(0),r("scrollbarDragMove",e))}function E(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n}=a;h&&(h=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),i.transition("")),s.hide&&(clearTimeout(f),f=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function T(e){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:r,support:l}=t,o=s.$el[0],d=!(!l.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},c=!(!l.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};if(!o)return;const p="on"===e?"addEventListener":"removeEventListener";l.touch?(o[p](a.start,x,d),o[p](a.move,y,d),o[p](a.end,E,c)):(o[p](i.start,x,d),n[p](i.move,y,d),n[p](i.end,E,c))}function C(){const{scrollbar:e,$el:s}=t;t.params.scrollbar=F(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i=d(a.el);t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el));let r=i.find(`.${t.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${t.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(e,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&t.params.scrollbar.el&&T("on"),i&&i[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function $(){t.params.scrollbar.el&&T("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},i("init",(()=>{C(),v(),g()})),i("update resize observerUpdate lock unlock",(()=>{v()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)}(s)})),i("enable disable",(()=>{const{$el:e}=t.scrollbar;e&&e[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{$()})),Object.assign(t.scrollbar,{updateSize:v,setTranslate:g,init:C,destroy:$})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=d(e),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):t.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},r=()=>{const{$el:e,slides:s,progress:a,snapGrid:r}=t;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,a)})),s.each(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{$el:s}=t;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{const s=d(t);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),s.transition(a)}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c,p=1,u=!1;const m={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function w(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function b(e){const s=t.support,a=t.params.zoom;if(o=!1,c=!1,!s.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;o=!0,m.scaleStart=w(e)}m.$slideEl&&m.$slideEl.length||(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`),0===m.$slideEl.length&&(m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`),m.maxRatio=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==m.$imageWrapEl.length)?(m.$imageEl&&m.$imageEl.transition(0),u=!0):m.$imageEl=void 0}function x(e){const s=t.support,a=t.params.zoom,i=t.zoom;if(!s.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;c=!0,m.scaleMove=w(e)}m.$imageEl&&0!==m.$imageEl.length?(s.gestures?i.scale=e.scale*p:i.scale=m.scaleMove/m.scaleStart*p,i.scale>m.maxRatio&&(i.scale=m.maxRatio-1+(i.scale-m.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===e.type&&b(e)}function y(e){const s=t.device,a=t.support,i=t.params.zoom,r=t.zoom;if(!a.gestures){if(!o||!c)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!s.android)return;o=!1,c=!1}m.$imageEl&&0!==m.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,m.maxRatio),i.minRatio),m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,u=!1,1===r.scale&&(m.$slideEl=void 0))}function E(e){const s=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(t.allowClick=!1,!f.isTouched||!m.$slideEl)return;f.isMoved||(f.width=m.$imageEl[0].offsetWidth,f.height=m.$imageEl[0].offsetHeight,f.startX=h(m.$imageWrapEl[0],"x")||0,f.startY=h(m.$imageWrapEl[0],"y")||0,m.slideWidth=m.$slideEl[0].offsetWidth,m.slideHeight=m.$slideEl[0].offsetHeight,m.$imageWrapEl.transition(0));const a=f.width*s.scale,i=f.height*s.scale;if(!(a<m.slideWidth&&i<m.slideHeight)){if(f.minX=Math.min(m.slideWidth/2-a/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-i/2,0),f.maxY=-f.minY,f.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!f.isMoved&&!u){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0,f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX,f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY,f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=f.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=f.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(f.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(f.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(f.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(f.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=f.touchesCurrent.x,g.prevPositionY=f.touchesCurrent.y,g.prevTime=Date.now(),m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}}function T(){const e=t.zoom;m.$slideEl&&t.previousIndex!==t.activeIndex&&(m.$imageEl&&m.$imageEl.transform("translate3d(0,0,0) scale(1)"),m.$imageWrapEl&&m.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,p=1,m.$slideEl=void 0,m.$imageEl=void 0,m.$imageWrapEl=void 0)}function C(e){const s=t.zoom,a=t.params.zoom;if(m.$slideEl||(e&&e.target&&(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`)),m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`)),!m.$imageEl||0===m.$imageEl.length||!m.$imageWrapEl||0===m.$imageWrapEl.length)return;let i,r,l,o,c,u,h,g,v,w,b,x,y,E,T,C,$,S;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(i="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,r="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(i=f.touchesStart.x,r=f.touchesStart.y),s.scale=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,e?($=m.$slideEl[0].offsetWidth,S=m.$slideEl[0].offsetHeight,l=m.$slideEl.offset().left+n.scrollX,o=m.$slideEl.offset().top+n.scrollY,c=l+$/2-i,u=o+S/2-r,v=m.$imageEl[0].offsetWidth,w=m.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),T=-y,C=-E,h=c*s.scale,g=u*s.scale,h<y&&(h=y),h>T&&(h=T),g<E&&(g=E),g>C&&(g=C)):(h=0,g=0),m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function $(){const e=t.zoom,s=t.params.zoom;m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex),m.$imageEl=m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${s.containerClass}`)),m.$imageEl&&0!==m.$imageEl.length&&m.$imageWrapEl&&0!==m.$imageWrapEl.length&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,p=1,m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),m.$slideEl.removeClass(`${s.zoomedSlideClass}`),m.$slideEl=void 0)}function S(e){const s=t.zoom;s.scale&&1!==s.scale?$():C(e)}function M(){const e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}function P(){return`.${t.params.slideClass}`}function k(e){const{passiveListener:s}=M(),a=P();t.$wrapperEl[e]("gesturestart",a,b,s),t.$wrapperEl[e]("gesturechange",a,x,s),t.$wrapperEl[e]("gestureend",a,y,s)}function z(){l||(l=!0,k("on"))}function O(){l&&(l=!1,k("off"))}function I(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const s=t.support,{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.on(t.touchEvents.start,z,a),t.$wrapperEl.on(t.touchEvents.end,O,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.on(t.touchEvents.start,r,b,a),t.$wrapperEl.on(t.touchEvents.move,r,x,i),t.$wrapperEl.on(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}function L(){const e=t.zoom;if(!e.enabled)return;const s=t.support;e.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.off(t.touchEvents.start,z,a),t.$wrapperEl.off(t.touchEvents.end,O,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.off(t.touchEvents.start,r,b,a),t.$wrapperEl.off(t.touchEvents.move,r,x,i),t.$wrapperEl.off(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.$imageEl?m.$imageEl[0]:void 0,s=m.$slideEl?m.$slideEl[0]:void 0;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&I()})),a("destroy",(()=>{L()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;m.$imageEl&&0!==m.$imageEl.length&&(f.isTouched||(s.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0,f.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let s=300,a=300;const i=g.x*s,r=f.currentX+i,n=g.y*a,l=f.currentY+n;0!==g.x&&(s=Math.abs((r-f.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-f.currentY)/g.y));const o=Math.max(s,a);f.currentX=r,f.currentY=l;const d=f.width*e.scale,c=f.height*e.scale;f.minX=Math.min(m.slideWidth/2-d/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-c/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&S(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&T()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&T()})),Object.assign(t.zoom,{enable:I,disable:L,in:C,out:$,toggle:S})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let n=!1,l=!1;function o(e,s){void 0===s&&(s=!0);const a=t.params.lazy;if(void 0===e)return;if(0===t.slides.length)return;const r=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`):t.slides.eq(e),n=r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||n.push(r[0]),0!==n.length&&n.each((e=>{const n=d(e);n.addClass(a.loadingClass);const l=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");t.loadImage(n[0],c||l,p,u,!1,(()=>{if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(l?(n.css("background-image",`url("${l}")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(a.loadedClass).removeClass(a.loadingClass),r.find(`.${a.preloaderClass}`).remove(),t.params.loop&&s){const e=r.attr("data-swiper-slide-index");if(r.hasClass(t.params.slideDuplicateClass)){o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(),!1)}else{o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(),!1)}}i("lazyImageReady",r[0],n[0]),t.params.autoHeight&&t.updateAutoHeight()}})),i("lazyImageLoad",r[0],n[0])}))}function c(){const{$wrapperEl:e,params:s,slides:a,activeIndex:i}=t,r=t.virtual&&s.virtual.enabled,n=s.lazy;let c=s.slidesPerView;function p(t){if(r){if(e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)return!0}else if(a[t])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),l||(l=!0),t.params.watchSlidesProgress)e.children(`.${s.slideVisibleClass}`).each((e=>{o(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&o(e);else o(i);if(n.loadPrevNext)if(c>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){const e=n.loadPrevNextAmount,t=c,s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+c;e<s;e+=1)p(e)&&o(e);for(let e=r;e<i;e+=1)p(e)&&o(e)}else{const t=e.children(`.${s.slideNextClass}`);t.length>0&&o(u(t));const a=e.children(`.${s.slidePrevClass}`);a.length>0&&o(u(a))}}function p(){const e=r();if(!t||t.destroyed)return;const s=t.params.lazy.scrollingElement?d(t.params.lazy.scrollingElement):d(e),a=s[0]===e,i=a?e.innerWidth:s[0].offsetWidth,l=a?e.innerHeight:s[0].offsetHeight,o=t.$el.offset(),{rtlTranslate:u}=t;let h=!1;u&&(o.left-=t.$el[0].scrollLeft);const m=[[o.left,o.top],[o.left+t.width,o.top],[o.left,o.top+t.height],[o.left+t.width,o.top+t.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=i&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};h?(c(),s.off("scroll",p,f)):n||(n=!0,s.on("scroll",p,f))}a("beforeInit",(()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)})),a("init",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("scroll",(()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&c()})),a("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("transitionStart",(()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!l)&&(t.params.lazy.checkInView?p():c())})),a("transitionEnd",(()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?p():c())})),a("slideChange",(()=>{const{lazy:e,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=t.params;e.enabled&&(s||a&&(i||0===r))&&c()})),Object.assign(t.lazy,{load:c,loadInSlide:o})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline||(t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid))}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===t.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}});let i=null;function r(e){const t=i;0!==t.length&&(t.html(""),t.html(e))}function n(e){e.attr("tabIndex","0")}function l(e){e.attr("tabIndex","-1")}function o(e,t){e.attr("role",t)}function c(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function u(e){e.attr("aria-disabled",!0)}function h(e){e.attr("aria-disabled",!1)}function m(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=d(e.target);t.navigation&&t.navigation.$nextEl&&a.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&a.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.is(U(t.params.pagination.bulletClass))&&a[0].click()}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const v=(e,t,s)=>{n(e),"BUTTON"!==e[0].tagName&&(o(e,"button"),e.on("keydown",m)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)},w=e=>{const s=e.target.closest(`.${t.params.slideClass}`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||t.slideTo(t.slides.indexOf(s),0)};function b(){const e=t.params.a11y;t.$el.append(i);const s=t.$el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.$wrapperEl,r=e.id||a.attr("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var u;u=r,a.attr("id",u),function(e,t){e.attr("aria-live",t)}(a,l),e.itemRoleDescriptionMessage&&c(d(t.slides),e.itemRoleDescriptionMessage),o(d(t.slides),e.slideRole);const h=t.params.loop?t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length:t.slides.length;let f,b;t.slides.each(((s,a)=>{const i=d(s),r=t.params.loop?parseInt(i.attr("data-swiper-slide-index"),10):a;p(i,e.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,h))})),t.navigation&&t.navigation.$nextEl&&(f=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(b=t.navigation.$prevEl),f&&f.length&&v(f,r,e.nextSlideMessage),b&&b.length&&v(b,r,e.prevSlideMessage),g()&&t.pagination.$el.on("keydown",U(t.params.pagination.bulletClass),m),t.$el.on("focus",w,!0)}a("beforeInit",(()=>{i=d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),a("afterInit",(()=>{t.params.a11y.enabled&&b()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{$nextEl:e,$prevEl:s}=t.navigation;s&&s.length>0&&(t.isBeginning?(u(s),l(s)):(h(s),n(s))),e&&e.length>0&&(t.isEnd?(u(e),l(e)):(h(e),n(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.each((s=>{const a=d(s);t.params.pagination.clickable&&(n(a),t.params.pagination.renderBullet||(o(a,"button"),p(a,e.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${t.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){let e,s;i&&i.length>0&&i.remove(),t.navigation&&t.navigation.$nextEl&&(e=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(s=t.navigation.$prevEl),e&&e.off("keydown",m),s&&s.off("keydown",m),g()&&t.pagination.$el.off("keydown",U(t.params.pagination.bulletClass),m),t.$el.off("focus",w,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides"}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides.eq(s);let d=l(o.attr("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e}/${d}`}else n.pathname.includes(e)||(d=`${e}/${d}`);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides.eq(i);if(l(r.attr("data-history"))===s&&!r.hasClass(t.params.slideDuplicateClass)){const s=r.index();t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,t.paths.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),(n.key||n.value)&&(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p))}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),c=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{i("hashChange");const e=o.location.hash.replace("#","");if(e!==t.slides.eq(t.activeIndex).attr("data-hash")){const s=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();if(void 0===s)return;t.slideTo(s)}},u=()=>{if(l&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState)c.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),i("hashSet");else{const e=t.slides.eq(t.activeIndex),s=e.attr("data-hash")||e.attr("data-history");o.location.hash=s||"",i("hashSet")}};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0;for(let a=0,i=t.slides.length;a<i;a+=1){const i=t.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===e&&!i.hasClass(t.params.slideDuplicateClass)){const e=i.index();t.slideTo(e,s,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&d(c).on("hashchange",p)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d(c).off("hashchange",p)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&u()})),n("slideChange",(()=>{l&&t.params.cssMode&&u()}))},function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;function l(){const e=s.slides.eq(s.activeIndex);let a=s.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(a=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(t),t=p((()=>{let e;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||!1===e)&&l()}),a)}function o(){return void 0===t&&(!s.autoplay.running&&(s.autoplay.running=!0,n("autoplayStart"),l(),!0))}function d(){return!!s.autoplay.running&&(void 0!==t&&(t&&(clearTimeout(t),t=void 0),s.autoplay.running=!1,n("autoplayStop"),!0))}function c(e){s.autoplay.running&&(s.autoplay.paused||(t&&clearTimeout(t),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].addEventListener(e,h)})):(s.autoplay.paused=!1,l())))}function u(){const e=a();"hidden"===e.visibilityState&&s.autoplay.running&&c(),"visible"===e.visibilityState&&s.autoplay.paused&&(l(),s.autoplay.paused=!1)}function h(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)})),s.autoplay.paused=!1,s.autoplay.running?l():d())}function m(){s.params.autoplay.disableOnInteraction?d():(n("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)}))}function f(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),l())}s.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",(()=>{if(s.params.autoplay.enabled){o();a().addEventListener("visibilitychange",u),s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",m),s.$el.on("mouseleave",f))}})),r("beforeTransitionStart",((e,t,a)=>{s.autoplay.running&&(a||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):d())})),r("sliderFirstMove",(()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?d():c())})),r("touchEnd",(()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&l()})),r("destroy",(()=>{s.$el.off("mouseenter",m),s.$el.off("mouseleave",f),s.autoplay.running&&d();a().removeEventListener("visibilitychange",u)})),Object.assign(s.autoplay,{pause:c,run:l,start:o,stop:d})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;function n(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&d(a).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=e.params.loop?parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10):s,t.params.loop){let e=t.activeIndex;t.slides.eq(e).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,e=t.activeIndex);const s=t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-e<e-s?a:s}t.slideTo(i)}function l(){const{thumbs:e}=t.params;if(i)return!1;i=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),r=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",n),!0}function o(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView,i=t.params.thumbs.autoScrollOffset,r=i&&!s.params.loop;if(t.realIndex!==s.realIndex||r){let n,l,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const e=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();n=void 0===e?a:void 0===a?e:a-o==o-e?s.params.slidesPerGroup>1?a:o:a-o<o-e?a:e,l=t.activeIndex>t.previousIndex?"next":"prev"}else n=t.realIndex,l=n>t.previousIndex?"next":"prev";r&&(n+="next"===l?i:-1*i),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(n)<0&&(s.params.centeredSlides?n=n>o?n-Math.floor(a/2)+1:n+Math.floor(a/2)-1:n>o&&s.params.slidesPerGroup,s.slideTo(n,e?0:void 0))}let n=1;const l=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(n=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),s.slides.removeClass(l),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<n;e+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(l);else for(let e=0;e<n;e+=1)s.slides.eq(t.realIndex+e).addClass(l)}t.thumbs={swiper:null},a("beforeInit",(()=>{const{thumbs:e}=t.params;e&&e.swiper&&(l(),o(!0))})),a("slideChange update resize observerUpdate",(()=>{o()})),a("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),a("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:o})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,$wrapperEl:n,rtlTranslate:l,snapGrid:o,touchEventsData:d}=t,c=u()-d.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(d.velocities.length>1){const e=d.velocities.pop(),s=d.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||u()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,d.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let c=t.translate+s;l&&(c=-c);let p,h=!1;const m=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(c<t.maxTranslate())r.freeMode.momentumBounce?(c+t.maxTranslate()<-m&&(c=t.maxTranslate()-m),p=t.maxTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(c>t.minTranslate())r.freeMode.momentumBounce?(c-t.minTranslate()>m&&(c=t.minTranslate()+m),p=t.minTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<o.length;t+=1)if(o[t]>-c){e=t;break}c=Math.abs(o[e]-c)<Math.abs(o[e-1]-c)||"next"===t.swipeDirection?o[e]:o[e-1],c=-c}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-c-t.translate)/t.velocity):Math.abs((c-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-c:c)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&h?(t.updateProgress(p),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&d.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(p),n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(c),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(c),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||c>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=i.params,{rows:c,fill:p}=i.params.grid;let u,h,m;if("row"===p&&o>1){const s=Math.floor(e/(o*c)),a=e-c*o*s,i=0===s?o:Math.min(Math.ceil((n-s*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+s*o,u=h+m*t/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(e/c),m=e-h*c,(h>a||h===a&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(e/s),h=e-m*s);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(e,s,a)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=i.params,{rows:o}=i.params.grid;if(i.virtualSize=(e+r)*t,i.virtualSize=Math.ceil(i.virtualSize/o)-r,i.$wrapperEl.css({[a("width")]:`${i.virtualSize+r}px`}),n){s.splice(0,s.length);const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:K.bind(t),prependSlide:Z.bind(t),addSlide:J.bind(t),removeSlide:Q.bind(t),removeAllSlides:ee.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1,transformEl:null}}),te({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t,s=t.params.fadeEffect;for(let a=0;a<e.length;a+=1){const e=t.slides.eq(a);let i=-e[0].swiperSlideOffset;t.params.virtualTranslate||(i-=t.translate);let r=0;t.isHorizontal()||(r=i,i=0);const n=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e[0].progress),0):1+Math.min(Math.max(e[0].progress,-1),0);se(s,e).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:e=>{const{transformEl:s}=t.params.fadeEffect;(s?t.slides.find(s):t.slides).transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}}),te({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{$el:e,$wrapperEl:s,slides:a,width:i,height:r,rtlTranslate:n,size:l,browser:o}=t,c=t.params.cubeEffect,p=t.isHorizontal(),u=t.virtual&&t.params.virtual.enabled;let h,m=0;c.shadow&&(p?(h=s.find(".swiper-cube-shadow"),0===h.length&&(h=d('<div class="swiper-cube-shadow"></div>'),s.append(h)),h.css({height:`${i}px`})):(h=e.find(".swiper-cube-shadow"),0===h.length&&(h=d('<div class="swiper-cube-shadow"></div>'),e.append(h))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;u&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let i=90*s,r=Math.floor(i/360);n&&(i=-i,r=Math.floor(-i/360));const o=Math.max(Math.min(t[0].progress,1),-1);let h=0,f=0,g=0;s%4==0?(h=4*-r*l,g=0):(s-1)%4==0?(h=0,g=4*-r*l):(s-2)%4==0?(h=l+4*r*l,g=l):(s-3)%4==0&&(h=-l,g=3*l+4*l*r),n&&(h=-h),p||(f=h,h=0);const v=`rotateX(${p?0:-i}deg) rotateY(${p?i:0}deg) translate3d(${h}px, ${f}px, ${g}px)`;if(o<=1&&o>-1&&(m=90*s+90*o,n&&(m=90*-s-90*o)),t.transform(v),c.slideShadows){let e=p?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=p?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=d(`<div class="swiper-slide-shadow-${p?"left":"top"}"></div>`),t.append(e)),0===s.length&&(s=d(`<div class="swiper-slide-shadow-${p?"right":"bottom"}"></div>`),t.append(s)),e.length&&(e[0].style.opacity=Math.max(-o,0)),s.length&&(s[0].style.opacity=Math.max(o,0))}}if(s.css({"-webkit-transform-origin":`50% 50% -${l/2}px`,"transform-origin":`50% 50% -${l/2}px`}),c.shadow)if(p)h.transform(`translate3d(0px, ${i/2+c.shadowOffset}px, ${-i/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);else{const e=Math.abs(m)-90*Math.floor(Math.abs(m)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=c.shadowScale,a=c.shadowScale/t,i=c.shadowOffset;h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r/2+i}px, ${-r/2/a}px) rotateX(-90deg)`)}const f=o.isSafari||o.isWebView?-l/2:0;s.transform(`translate3d(0px,0,${f}px) rotateX(${t.isHorizontal()?0:m}deg) rotateY(${t.isHorizontal()?-m:0}deg)`)},setTransition:e=>{const{$el:s,slides:a}=t;a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&s.find(".swiper-cube-shadow").transition(e)},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}}),te({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let i=0;i<e.length;i+=1){const r=e.eq(i);let n=r[0].progress;t.params.flipEffect.limitRotation&&(n=Math.max(Math.min(r[0].progress,1),-1));const l=r[0].swiperSlideOffset;let o=-180*n,d=0,c=t.params.cssMode?-l-t.translate:-l,p=0;if(t.isHorizontal()?s&&(o=-o):(p=c,c=0,d=-o,o=0),r[0].style.zIndex=-Math.abs(Math.round(n))+e.length,a.slideShadows){let e=t.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),s=t.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(a,r,t.isHorizontal()?"left":"top")),0===s.length&&(s=ie(a,r,t.isHorizontal()?"right":"bottom")),e.length&&(e[0].style.opacity=Math.max(-n,0)),s.length&&(s[0].style.opacity=Math.max(n,0))}const u=`translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;se(a,r).transform(u)}},setTransition:e=>{const{transformEl:s}=t.params.flipEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),te({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,h=n?0:d*p,m=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(h)<.001&&(h=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;if(se(r,t).transform(b),t[0].style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(r,t,n?"left":"top")),0===s.length&&(s=ie(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=p>0?p:0),s.length&&(s[0].style.opacity=-p>0?-p:0)}}},setTransition:e=>{const{transformEl:s}=t.params.coverflowEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;te({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,$wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${e}px))`)}for(let s=0;s<e.length;s+=1){const a=e.eq(s),o=a[0].progress,d=Math.min(Math.max(a[0].progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a[0].originalProgress,-r.limitProgress),r.limitProgress));const p=a[0].swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],h=[0,0,0];let m=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),a[0].style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=a.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=ie(r,a)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=se(r,a);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:e=>{const{transformEl:s}=t.params.creativeEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0}}),te({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-2*c,v=8-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,x=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||x){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=h;h=u,u=e}const y=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),E=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=ie(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+e.length;se(a,o).transform(E)}},setTransition:e=>{const{transformEl:s}=t.params.cardsEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return V.use(re),V}));
//# sourceMappingURL=swiper-bundle.min.js.map
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /*!
   * GSAP 3.10.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  },
      _suppressOverwrites,
      _bigNum = 1e8,
      _tinyNum = 1 / _bigNum,
      _2PI = Math.PI * 2,
      _HALF_PI = _2PI / 4,
      _gsID = 0,
      _sqrt = Math.sqrt,
      _cos = Math.cos,
      _sin = Math.sin,
      _isString = function _isString(value) {
    return typeof value === "string";
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
      _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _isNotFalse = function _isNotFalse(value) {
    return value !== false;
  },
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
  },
      _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
      _isArray = Array.isArray,
      _strictNumExp = /(?:-?\.?\d|\.)+/gi,
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      _relExp = /[+-]=-?[.\d]+/,
      _delimitedValueExp = /[^,'"\[\]\s]+/gi,
      _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      _globalTimeline,
      _win,
      _coreInitted,
      _doc,
      _globals = {},
      _installScope = {},
      _coreReady,
      _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  },
      _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  },
      _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
  },
      _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  },
      _emptyFunc = function _emptyFunc() {
    return 0;
  },
      _reservedProps = {},
      _lazyTweens = [],
      _lazyLookup = {},
      _lastRenderedFrame,
      _plugins = {},
      _effects = {},
      _nextGCFrame = 30,
      _harnessPlugins = [],
      _callbackNames = "",
      _harness = function _harness(targets) {
    var target = targets[0],
        harnessPlugin,
        i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);

    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;

      while (i-- && !_harnessPlugins[i].targetTest(target)) {}

      harnessPlugin = _harnessPlugins[i];
    }

    i = targets.length;

    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }

    return targets;
  },
      _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  },
      _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  },
      _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  },
      _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
      _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
  },
      _parseRelative = function _parseRelative(start, value) {
    var operator = value.charAt(0),
        end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  },
      _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    var l = toFind.length,
        i = 0;

    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

    return i < l;
  },
      _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length,
        a = _lazyTweens.slice(0),
        i,
        tween;

    _lazyLookup = {};
    _lazyTweens.length = 0;

    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  },
      _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender();
  },
      _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  },
      _passThrough = function _passThrough(p) {
    return p;
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }

    return obj;
  },
      _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function (obj, defaults) {
      for (var p in defaults) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
      }
    };
  },
      _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }

    return base;
  },
      _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }

    return base;
  },
      _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {},
        p;

    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }

    return copy;
  },
      _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline,
        func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }

    return vars;
  },
      _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length,
        match = i === a2.length;

    while (match && i-- && a1[i] === a2[i]) {}

    return i < 0;
  },
      _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = parent[lastProp],
        t;

    if (sortBy) {
      t = child[sortBy];

      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }

    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }

    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }

    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  },
      _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = child._prev,
        next = child._next;

    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }

    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }

    child._next = child._prev = child.parent = null;
  },
      _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
  },
      _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;

      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }

    return animation;
  },
      _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;

    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }

    return animation;
  },
      _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
  },
      _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  },
      _animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  },
      _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  },
      _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  },
      _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    var parent = animation._dp;

    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

      _setEnd(animation);

      parent._dirty || _uncache(parent, animation);
    }

    return animation;
  },
      _postAddChecks = function _postAddChecks(timeline, child) {
    var t;

    if (child._time || child._initted && !child._dur) {
      t = _parentToChildTotalTime(timeline.rawTime(), child);

      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }

    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      if (timeline._dur < timeline.duration()) {
        t = timeline;

        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }

      timeline._zTime = -_tinyNum;
    }
  },
      _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    return timeline;
  },
      _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  },
      _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);

    if (!tween._initted) {
      return 1;
    }

    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);

      tween._lazy = [totalTime, suppressEvents];
      return 1;
    }
  },
      _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
  },
      _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  },
      _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio,
        ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
        repeatDelay = tween._rDelay,
        tTime = 0,
        pt,
        iteration,
        prevIteration;

    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }

    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
        return;
      }

      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);

        if (!suppressEvents) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  },
      _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;

    if (time > prevTime) {
      child = animation._first;

      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }

        child = child._next;
      }
    } else {
      child = animation._last;

      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }

        child = child._prev;
      }
    }
  },
      _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat,
        dur = _roundPrecise(duration) || 0,
        totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  },
      _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  },
      _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  },
      _parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels,
        recent = animation._recent || _zeroPosition,
        clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
        i,
        offset,
        isPercent;

    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");

      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }

      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }

      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }

      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }

    return position == null ? clippedDuration : +position;
  },
      _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]),
        varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
        vars = params[varsIndex],
        irVars,
        parent;

    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;

    if (type) {
      irVars = vars;
      parent = timeline;

      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }

      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }

    return new Tween(params[0], vars, params[varsIndex + 1]);
  },
      _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
  },
      _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  },
      getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  },
      clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
      return _clamp(min, max, v);
    });
  },
      _slice = [].slice,
      _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  },
      _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }

    return ar.forEach(function (value) {
      var _accumulator;

      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  },
      toArray = function toArray(value, scope, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  },
      selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function (v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  },
      shuffle = function shuffle(a) {
    return a.sort(function () {
      return .5 - Math.random();
    });
  },
      distribute = function distribute(v) {
    if (_isFunction(v)) {
      return v;
    }

    var vars = _isObject(v) ? v : {
      each: v
    },
        ease = _parseEase(vars.ease),
        from = vars.from || 0,
        base = parseFloat(vars.base) || 0,
        cache = {},
        isDecimal = from > 0 && from < 1,
        ratios = isNaN(from) || isDecimal,
        axis = vars.axis,
        ratioX = from,
        ratioY = from;

    if (_isString(from)) {
      ratioX = ratioY = {
        center: .5,
        edges: .5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }

    return function (i, target, a) {
      var l = (a || vars).length,
          distances = cache[l],
          originX,
          originY,
          x,
          y,
          d,
          j,
          max,
          min,
          wrapAt;

      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

        if (!wrapAt) {
          max = -_bigNum;

          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

          wrapAt--;
        }

        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;

        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }

        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }

      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  },
      _roundModifier = function _roundModifier(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function (raw) {
      var n = Math.round(parseFloat(raw) / v) * v * p;
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  },
      snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo),
        radius,
        is2D;

    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;

      if (snapTo.values) {
        snapTo = toArray(snapTo.values);

        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }

    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw),
          y = parseFloat(is2D ? raw.y : 0),
          min = _bigNum,
          closest = 0,
          i = snapTo.length,
          dx,
          dy;

      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }

        if (dx < min) {
          min = dx;
          closest = i;
        }
      }

      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  },
      random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  },
      pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }

    return function (value) {
      return functions.reduce(function (v, f) {
        return f(v);
      }, value);
    };
  },
      unitize = function unitize(func, unit) {
    return function (value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  },
      normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  },
      _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
      return a[~~wrapper(index)];
    });
  },
      wrap = function wrap(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
      return (range + (value - min) % range) % range + min;
    });
  },
      wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min,
        total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
      value = (total + (value - min) % total) % total || 0;
      return min + (value > range ? total - value : value);
    });
  },
      _replaceRandom = function _replaceRandom(value) {
    var prev = 0,
        s = "",
        i,
        nums,
        end,
        isArray;

    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }

    return s + value.substr(prev, value.length - prev);
  },
      mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin,
        outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
      return outMin + ((value - inMin) / inRange * outRange || 0);
    });
  },
      interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
      return (1 - p) * start + p * end;
    };

    if (!func) {
      var isString = _isString(start),
          master = {},
          p,
          i,
          interpolators,
          l,
          il;

      progress === true && (mutate = 1) && (progress = null);

      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;

        for (i = 1; i < l; i++) {
          interpolators.push(interpolate(start[i - 1], start[i]));
        }

        l--;

        func = function func(p) {
          p *= l;
          var i = Math.min(il, ~~p);
          return interpolators[i](p - i);
        };

        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }

      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }

        func = function func(p) {
          return _renderPropTweens(p, master) || (isString ? start.p : start);
        };
      }
    }

    return _conditionalReturn(progress, func);
  },
      _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    var labels = timeline.labels,
        min = _bigNum,
        p,
        distance,
        label;

    for (p in labels) {
      distance = labels[p] - fromTime;

      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }

    return label;
  },
      _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars,
        callback = v[type],
        params,
        scope;

    if (!callback) {
      return;
    }

    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    return params ? callback.apply(scope, params) : callback.call(scope);
  },
      _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);

    animation.scrollTrigger && animation.scrollTrigger.kill(false);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  },
      _quickTween,
      _createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config;

    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));

      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));

      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  },
      _255 = 255,
      _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  },
      _hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
  },
      splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
        r,
        g,
        b,
        h,
        s,
        l,
        max,
        min,
        d,
        wasHSL;

    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }

      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }

        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }

        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);

        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= .5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }

      a = a.map(Number);
    }

    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }

      a[0] = ~~(h + .5);
      a[1] = ~~(s * 100 + .5);
      a[2] = ~~(l * 100 + .5);
    }

    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  },
      _colorOrderData = function _colorOrderData(v) {
    var values = [],
        c = [],
        i = -1;
    v.split(_colorExp).forEach(function (v) {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  },
      _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "",
        colors = (s + result).match(_colorExp),
        type = toHSL ? "hsla(" : "rgba(",
        i = 0,
        c,
        shell,
        d,
        l;

    if (!colors) {
      return s;
    }

    colors = colors.map(function (color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });

    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;

      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;

        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }

    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }

    return result + shell[l];
  },
      _colorExp = function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        p;

    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }

    return new RegExp(s + ")", "gi");
  }(),
      _hslExp = /hsl[a]?\(/,
      _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "),
        toHSL;
    _colorExp.lastIndex = 0;

    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  },
      _tickerActive,
      _ticker = function () {
    var _getTime = Date.now,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _startTime = _getTime(),
        _lastUpdate = _startTime,
        _gap = 1000 / 240,
        _nextTime = _gap,
        _listeners = [],
        _id,
        _req,
        _raf,
        _self,
        _delta,
        _i,
        _tick = function _tick(v) {
      var elapsed = _getTime() - _lastUpdate,
          manual = v === true,
          overlap,
          dispatch,
          time,
          frame;

      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;

      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1000;
        _self.time = time = time / 1000;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }

      manual || (_id = _req(_tick));

      if (dispatch) {
        for (_i = 0; _i < _listeners.length; _i++) {
          _listeners[_i](time, _delta, frame, v);
        }
      }
    };

    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1000 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

            _raf = _win.requestAnimationFrame;
          }

          _id && _self.sleep();

          _req = _raf || function (f) {
            return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
          };

          _tickerActive = 1;

          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || 1 / _tinyNum;
        _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
      },
      fps: function fps(_fps) {
        _gap = 1000 / (_fps || 240);
        _nextTime = _self.time * 1000 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function (t, d, f, v) {
          callback(t, d, f, v);

          _self.remove(func);
        } : callback;

        _self.remove(callback);

        _listeners[prioritize ? "unshift" : "push"](func);

        _wake();

        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners
    };
    return _self;
  }(),
      _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
  },
      _easeMap = {},
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
      _quotesExp = /["']/g,
      _parseObjectInString = function _parseObjectInString(value) {
    var obj = {},
        split = value.substr(1, value.length - 3).split(":"),
        key = split[0],
        i = 1,
        l = split.length,
        index,
        val,
        parsedVal;

    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }

    return obj;
  },
      _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1,
        close = value.indexOf(")"),
        nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  },
      _configEaseFromString = function _configEaseFromString(name) {
    var split = (name + "").split("("),
        ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  },
      _invertEase = function _invertEase(ease) {
    return function (p) {
      return 1 - ease(1 - p);
    };
  },
      _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first,
        ease;

    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }

      child = child._next;
    }
  },
      _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  },
      _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
      };
    }

    if (easeInOut === void 0) {
      easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }

    var ease = {
      easeIn: easeIn,
      easeOut: easeOut,
      easeInOut: easeInOut
    },
        lowercaseName;

    _forEachName(names, function (name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });

    return ease;
  },
      _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
      return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
  },
      _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1,
        p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
        p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
        easeOut = function easeOut(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    p2 = _2PI / p2;

    ease.config = function (amplitude, period) {
      return _configElastic(type, amplitude, period);
    };

    return ease;
  },
      _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }

    var easeOut = function easeOut(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    ease.config = function (overshoot) {
      return _configBack(type, overshoot);
    };

    return ease;
  };

  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
    var power = i < 5 ? i + 1 : i;

    _insertEase(name + ",Power" + (power - 1), i ? function (p) {
      return Math.pow(p, power);
    } : function (p) {
      return p;
    }, function (p) {
      return 1 - Math.pow(1 - p, power);
    }, function (p) {
      return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });

  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

  (function (n, c) {
    var n1 = 1 / c,
        n2 = 2 * n1,
        n3 = 2.5 * n1,
        easeOut = function easeOut(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };

    _insertEase("Bounce", function (p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);

  _insertEase("Expo", function (p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });

  _insertEase("Circ", function (p) {
    return -(_sqrt(1 - p * p) - 1);
  });

  _insertEase("Sine", function (p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });

  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }

      var p1 = 1 / steps,
          p2 = steps + (immediateStart ? 0 : 1),
          p3 = immediateStart ? 1 : 0,
          max = 1 - _tinyNum;
      return function (p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];

  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
    return _callbackNames += name + "," + name + "Params,";
  });

  var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = function () {
    function Animation(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;

      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }

      this._ts = 1;

      _setDuration(this, +vars.duration, 1, 1);

      this.data = vars.data;
      _tickerActive || _ticker.wake();
    }

    var _proto = Animation.prototype;

    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }

      return this._delay;
    };

    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };

    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }

      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };

    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();

      if (!arguments.length) {
        return this._tTime;
      }

      var parent = this._dp;

      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);

        !parent._dp || parent.parent || _postAddChecks(parent, this);

        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }

          parent = parent.parent;
        }

        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }

      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);

        _lazySafeRender(this, _totalTime, suppressEvents);
      }

      return this;
    };

    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };

    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };

    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };

    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;

      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };

    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }

      if (this._rts === value) {
        return this;
      }

      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);

      _setEnd(this);

      return _recacheAncestors(this);
    };

    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }

      if (this._ps !== value) {
        this._ps = value;

        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();

          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }

      return this;
    };

    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }

      return this._start;
    };

    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };

    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };

    _proto.globalTime = function globalTime(rawTime) {
      var animation = this,
          time = arguments.length ? rawTime : animation.rawTime();

      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }

      return time;
    };

    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }

      return this._repeat === -2 ? Infinity : this._repeat;
    };

    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;

        _onUpdateTotalDuration(this);

        return time ? this.time(time) : this;
      }

      return this._rDelay;
    };

    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }

      return this._yoyo;
    };

    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };

    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };

    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };

    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };

    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };

    _proto.resume = function resume() {
      return this.paused(false);
    };

    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }

      return this._rts < 0;
    };

    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };

    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp,
          start = this._start,
          rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };

    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;

      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }

        return this;
      }

      return vars[type];
    };

    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function (resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
            _resolve = function _resolve() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };

        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };

    _proto.kill = function kill() {
      _interrupt(this);
    };

    return Animation;
  }();

  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });

  var Timeline = function (_Animation) {
    _inheritsLoose(Timeline, _Animation);

    function Timeline(vars, position) {
      var _this;

      if (vars === void 0) {
        vars = {};
      }

      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }

    var _proto2 = Timeline.prototype;

    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);

      return this;
    };

    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);

      return this;
    };

    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);

      return this;
    };

    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };

    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };

    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };

    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._dirty ? this.totalDuration() : this._tDur,
          dur = this._dur,
          tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
          crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
          time,
          child,
          next,
          iteration,
          cycleDuration,
          prevPaused,
          pauseTween,
          timeScale,
          prevStart,
          prevIteration,
          yoyo,
          isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }

        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;

        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }

        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;

          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }

          time = _roundPrecise(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);

          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }

          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1,
                doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }

            dur = this._dur;
            tDur = this._tDur;

            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -0.0001;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }

            this._lock = 0;

            if (!this._ts && !prevPaused) {
              return this;
            }

            _propagateYoyoEase(this, isYoyo);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }

        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;

        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }

        if (!prevTime && time && !suppressEvents) {
          _callback(this, "onStart");

          if (this._tTime !== tTime) {
            return this;
          }
        }

        if (time >= prevTime && totalTime >= 0) {
          child = this._first;

          while (child) {
            next = child._next;

            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }

            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;

          while (child) {
            next = child._prev;

            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }

            child = next;
          }
        }

        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

          if (this._ts) {
            this._start = prevStart;

            _setEnd(this);

            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
          (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto2.add = function add(child, position) {
      var _this2 = this;

      _isNumber(position) || (position = _parsePosition(this, position, child));

      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function (obj) {
            return _this2.add(obj, position);
          });
          return this;
        }

        if (_isString(child)) {
          return this.addLabel(child, position);
        }

        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }

      return this !== child ? _addToTimeline(this, child, position) : this;
    };

    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }

      if (tweens === void 0) {
        tweens = true;
      }

      if (timelines === void 0) {
        timelines = true;
      }

      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }

      var a = [],
          child = this._first;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }

        child = child._next;
      }

      return a;
    };

    _proto2.getById = function getById(id) {
      var animations = this.getChildren(1, 1, 1),
          i = animations.length;

      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };

    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }

      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }

      _removeLinkedListItem(this, child);

      if (child === this._recent) {
        this._recent = this._last;
      }

      return _uncache(this);
    };

    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }

      this._forcing = 1;

      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }

      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

      this._forcing = 0;
      return this;
    };

    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };

    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };

    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };

    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);

      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }

        child = child._next;
      }
    };

    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive),
          i = tweens.length;

      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }

      return this;
    };

    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
      var a = [],
          parsedTargets = toArray(targets),
          child = this._first,
          isGlobalTime = _isNumber(onlyActive),
          children;

      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }

        child = child._next;
      }

      return a;
    };

    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};

      var tl = this,
          endTime = _parsePosition(tl, position),
          _vars = vars,
          startAt = _vars.startAt,
          _onStart = _vars.onStart,
          onStartParams = _vars.onStartParams,
          immediateRender = _vars.immediateRender,
          initted,
          tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();

          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }

          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));

      return immediateRender ? tween.render(0) : tween;
    };

    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };

    _proto2.recent = function recent() {
      return this._recent;
    };

    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };

    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };

    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };

    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }

      var child = this._first,
          labels = this.labels,
          p;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }

        child = child._next;
      }

      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }

      return _uncache(this);
    };

    _proto2.invalidate = function invalidate() {
      var child = this._first;
      this._lock = 0;

      while (child) {
        child.invalidate();
        child = child._next;
      }

      return _Animation.prototype.invalidate.call(this);
    };

    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }

      var child = this._first,
          next;

      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }

      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };

    _proto2.totalDuration = function totalDuration(value) {
      var max = 0,
          self = this,
          child = self._last,
          prevStart = _bigNum,
          prev,
          start,
          parent;

      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }

      if (self._dirty) {
        parent = self.parent;

        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;

          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }

          if (start < 0 && child._ts) {
            max -= start;

            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }

            self.shiftChildren(-start, false, -1e999);
            prevStart = 0;
          }

          child._end > max && child._ts && (max = child._end);
          child = prev;
        }

        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

        self._dirty = 0;
      }

      return self._tDur;
    };

    Timeline.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

        _lastRenderedFrame = _ticker.frame;
      }

      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }

          child || _ticker.sleep();
        }
      }
    };

    return Timeline;
  }(Animation);

  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
        index = 0,
        matchIndex = 0,
        result,
        startNums,
        color,
        endNum,
        chunk,
        startNum,
        hasRandom,
        a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }

    startNums = start.match(_complexStringNumExp) || [];

    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }

      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;

    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }

    this._pt = pt;
    return pt;
  },
      _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop],
        parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
        setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
        pt;

    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }

      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

        if (pt || pt === 0) {
          end = pt;
        }
      }
    }

    if (parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }

      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  },
      _processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }

    var copy = {},
        p;

    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }

    return copy;
  },
      _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;

    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;

        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }

    return plugin;
  },
      _overwritingTween,
      _forceAllPropTweens,
      _initTween = function _initTween(tween, time) {
    var vars = tween.vars,
        ease = vars.ease,
        startAt = vars.startAt,
        immediateRender = vars.immediateRender,
        lazy = vars.lazy,
        onUpdate = vars.onUpdate,
        onUpdateParams = vars.onUpdateParams,
        callbackScope = vars.callbackScope,
        runBackwards = vars.runBackwards,
        yoyoEase = vars.yoyoEase,
        keyframes = vars.keyframes,
        autoRevert = vars.autoRevert,
        dur = tween._dur,
        prevStartAt = tween._startAt,
        targets = tween._targets,
        parent = tween.parent,
        fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
        autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
        tl = tween.timeline,
        cleanVars,
        i,
        p,
        pt,
        target,
        hasPriority,
        gsData,
        harness,
        plugin,
        ptLookup,
        index,
        harnessVars,
        overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }

    tween._from = !tl && !!vars.runBackwards;

    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);

      if (prevStartAt) {
        _removeFromParent(prevStartAt.render(-1, true));

        prevStartAt._lazy = 0;
      }

      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt)));

        time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true);

        if (immediateRender) {
          time > 0 && !autoRevert && (tween._startAt = 0);

          if (dur && time <= 0) {
            time && (tween._zTime = time);
            return;
          }
        } else if (autoRevert === false) {
          tween._startAt = 0;
        }
      } else if (runBackwards && dur) {
        if (prevStartAt) {
          !autoRevert && (tween._startAt = 0);
        } else {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && _isNotFalse(lazy),
            immediateRender: immediateRender,
            stagger: 0,
            parent: parent
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);

          _removeFromParent(tween._startAt = Tween.set(targets, p));

          time < 0 && tween._startAt.render(-1, true);
          tween._zTime = time;

          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }

      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;

      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);

        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

          plugin._props.forEach(function (name) {
            ptLookup[name] = pt;
          });

          plugin.priority && (hasPriority = 1);
        }

        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }

        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;

          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));

          overwritten = !tween.parent;
          _overwritingTween = 0;
        }

        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }

      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }

    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  },
      _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
        pt,
        lookup,
        i;

    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;

      while (i--) {
        pt = lookup[i][property];

        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;

          while (pt && pt.p !== property) {
            pt = pt._next;
          }
        }

        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";

          _initTween(tween, time);

          _forceAllPropTweens = 0;
          return 1;
        }

        ptCache.push(pt);
      }
    }

    i = ptCache.length;

    while (i--) {
      pt = ptCache[i];
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      pt.e && (pt.e = _round(value) + getUnit(pt.e));
      pt.b && (pt.b = pt.s + getUnit(pt.b));
    }
  },
      _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0,
        propertyAliases = harness && harness.aliases,
        copy,
        p,
        i,
        aliases;

    if (!propertyAliases) {
      return vars;
    }

    copy = _merge({}, vars);

    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;

        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }

    return copy;
  },
      _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut",
        p,
        a;

    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function (value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  },
      _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  },
      _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      _staggerPropsToSkip = {};

  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
    return _staggerPropsToSkip[name] = 1;
  });

  var Tween = function (_Animation2) {
    _inheritsLoose(Tween, _Animation2);

    function Tween(targets, vars, position, skipInherit) {
      var _this3;

      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }

      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars,
          duration = _this3$vars.duration,
          delay = _this3$vars.delay,
          immediateRender = _this3$vars.immediateRender,
          stagger = _this3$vars.stagger,
          overwrite = _this3$vars.overwrite,
          keyframes = _this3$vars.keyframes,
          defaults = _this3$vars.defaults,
          scrollTrigger = _this3$vars.scrollTrigger,
          yoyoEase = _this3$vars.yoyoEase,
          parent = vars.parent || _globalTimeline,
          parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
          tl,
          i,
          copy,
          l,
          p,
          curTarget,
          staggerFunc,
          staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;

      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults || {}
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;

        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);

          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }

          for (i = 0; i < l; i++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }

            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }

          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));

          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0,
              a,
              kf,
              v;

          if (_isArray(keyframes)) {
            keyframes.forEach(function (frame) {
              return tl.to(parsedTargets, frame, ">");
            });
          } else {
            copy = {};

            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }

            for (p in copy) {
              a = copy[p].sort(function (a, b) {
                return a.t - b.t;
              });
              time = 0;

              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }

            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }

        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }

      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);

        _globalTimeline.killTweensOf(parsedTargets);

        _overwritingTween = 0;
      }

      _addToTimeline(parent, _assertThisInitialized(_this3), position);

      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);

      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;

        _this3.render(Math.max(0, -delay));
      }

      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }

    var _proto3 = Tween.prototype;

    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._tDur,
          dur = this._dur,
          tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          time,
          pt,
          iteration,
          cycleDuration,
          prevIteration,
          isYoyo,
          ratio,
          timeline,
          yoyoEase;

      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
        time = tTime;
        timeline = this.timeline;

        if (this._repeat) {
          cycleDuration = dur + this._rDelay;

          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }

          time = _roundPrecise(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          isYoyo = this._yoyo && iteration & 1;

          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);

          if (time === prevTime && !force && this._initted) {
            this._tTime = tTime;
            return this;
          }

          if (iteration !== prevIteration) {
            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);

            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }

        if (!this._initted) {
          if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
            this._tTime = 0;
            return this;
          }

          if (prevTime !== this._time) {
            return this;
          }

          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._tTime = tTime;
        this._time = time;

        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }

        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }

        if (time && !prevTime && !suppressEvents) {
          _callback(this, "onStart");

          if (this._tTime !== tTime) {
            return this;
          }
        }

        pt = this._pt;

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }

        timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

        if (this._onUpdate && !suppressEvents) {
          totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);

          _callback(this, "onUpdate");
        }

        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto3.targets = function targets() {
      return this._targets;
    };

    _proto3.invalidate = function invalidate() {
      this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate();
      return _Animation2.prototype.invalidate.call(this);
    };

    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);

      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
        return this.resetTo(property, value, start, startIsRelative);
      }

      _alignPlayhead(this, 0);

      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };

    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }

      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }

      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }

      var parsedTargets = this._targets,
          killingTargets = targets ? toArray(targets) : parsedTargets,
          propTweenLookup = this._ptLookup,
          firstPT = this._pt,
          overwrittenProps,
          curLookup,
          curOverwriteProps,
          props,
          p,
          pt,
          i;

      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }

      overwrittenProps = this._op = this._op || [];

      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};

          _forEachName(vars, function (name) {
            return p[name] = 1;
          });

          vars = p;
        }

        vars = _addAliasesToVars(parsedTargets, vars);
      }

      i = parsedTargets.length;

      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];

          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }

          for (p in props) {
            pt = curLookup && curLookup[p];

            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }

              delete curLookup[p];
            }

            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }

      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };

    Tween.to = function to(targets, vars) {
      return new Tween(targets, vars, arguments[2]);
    };

    Tween.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };

    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay: delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };

    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };

    Tween.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween(targets, vars);
    };

    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };

    return Tween;
  }(Animation);

  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });

  _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
    Tween[name] = function () {
      var tl = new Timeline(),
          params = _slice.call(arguments, 0);

      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });

  var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  },
      _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  },
      _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  },
      _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  },
      _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  },
      _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
  },
      _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  },
      _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt,
        s = "";

    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
        pt = pt._next;
      }

      s += data.c;
    }

    data.set(data.t, data.p, s, data);
  },
      _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  },
      _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt,
        next;

    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  },
      _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt,
        hasNonDependentRemaining,
        next;

    while (pt) {
      next = pt._next;

      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }

      pt = next;
    }

    return !hasNonDependentRemaining;
  },
      _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  },
      _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt,
        next,
        pt2,
        first,
        last;

    while (pt) {
      next = pt._next;
      pt2 = first;

      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }

      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }

      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }

      pt = next;
    }

    parent._pt = first;
  };

  var PropTween = function () {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;

      if (next) {
        next._prev = this;
      }
    }

    var _proto4 = PropTween.prototype;

    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };

    return PropTween;
  }();

  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
    return _reservedProps[name] = 1;
  });

  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args.forEach(function (config) {
        return _createPlugin(config);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);

      var getter = _getCache(target || {}).get,
          format = unit ? _passThrough : _numericIfPossible;

      unit === "native" && (unit = "");
      return !target ? target : !property ? function (property, unit, uncache) {
        return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);

      if (target.length > 1) {
        var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }),
            l = setters.length;
        return function (value) {
          var i = l;

          while (i--) {
            setters[i](value);
          }
        };
      }

      target = target[0] || {};

      var Plugin = _plugins[property],
          cache = _getCache(target),
          p = cache.harness && (cache.harness.aliases || {})[property] || property,
          setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);

      return Plugin ? setter : function (value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge2;

      var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
          func = function func(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };

      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name,
          effect = _ref3.effect,
          plugins = _ref3.plugins,
          defaults = _ref3.defaults,
          extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function (pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });

      _effects[name] = function (targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
      };

      if (extendTimeline) {
        Timeline.prototype[name] = function (targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }

      var tl = new Timeline(vars),
          child,
          next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

      _globalTimeline.remove(tl);

      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;

      while (child) {
        next = child._next;

        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }

        child = next;
      }

      _addToTimeline(_globalTimeline, tl, 0);

      return tl;
    },
    utils: {
      wrap: wrap,
      wrapYoyo: wrapYoyo,
      distribute: distribute,
      random: random,
      snap: snap,
      normalize: normalize,
      getUnit: getUnit,
      clamp: clamp,
      splitColor: splitColor,
      toArray: toArray,
      selector: selector,
      mapRange: mapRange,
      pipe: pipe,
      unitize: unitize,
      interpolate: interpolate,
      shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween: PropTween,
      globals: _addGlobal,
      Tween: Tween,
      Timeline: Timeline,
      Animation: Animation,
      getCache: _getCache,
      _removeLinkedListItem: _removeLinkedListItem,
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };

  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
    return _gsap[name] = Tween[name];
  });

  _ticker.add(Timeline.updateRoot);

  _quickTween = _gsap.to({}, {
    duration: 0
  });

  var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;

    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }

    return pt;
  },
      _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets,
        p,
        i,
        pt;

    for (p in modifiers) {
      i = targets.length;

      while (i--) {
        pt = tween._ptLookup[i][p];

        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }

          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  },
      _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
      name: name,
      rawVars: 1,
      init: function init(target, vars, tween) {
        tween._onInit = function (tween) {
          var temp, p;

          if (_isString(vars)) {
            temp = {};

            _forEachName(vars, function (name) {
              return temp[name] = 1;
            });

            vars = temp;
          }

          if (modifier) {
            temp = {};

            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }

            vars = temp;
          }

          _addModifiers(tween, vars);
        };
      }
    };
  };

  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt;

      for (p in vars) {
        pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
        pt && (pt.op = p);

        this._props.push(p);
      }
    }
  }, {
    name: "endArray",
    init: function init(target, value) {
      var i = value.length;

      while (i--) {
        this.add(target, i, target[i] || 0, value[i]);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.10.4";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0,
      Power1 = _easeMap.Power1,
      Power2 = _easeMap.Power2,
      Power3 = _easeMap.Power3,
      Power4 = _easeMap.Power4,
      Linear = _easeMap.Linear,
      Quad = _easeMap.Quad,
      Cubic = _easeMap.Cubic,
      Quart = _easeMap.Quart,
      Quint = _easeMap.Quint,
      Strong = _easeMap.Strong,
      Elastic = _easeMap.Elastic,
      Back = _easeMap.Back,
      SteppedEase = _easeMap.SteppedEase,
      Bounce = _easeMap.Bounce,
      Sine = _easeMap.Sine,
      Expo = _easeMap.Expo,
      Circ = _easeMap.Circ;

  var _win$1,
      _doc$1,
      _docElement,
      _pluginInitted,
      _tempDiv,
      _tempDivStyler,
      _recentSetterPlugin,
      _windowExists$1 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _transformProps = {},
      _RAD2DEG = 180 / Math.PI,
      _DEG2RAD = Math.PI / 180,
      _atan2 = Math.atan2,
      _bigNum$1 = 1e8,
      _capsExp = /([A-Z])/g,
      _horizontalExp = /(left|right|width|margin|padding|x)/i,
      _complexExp = /[\s,\(]\S/,
      _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
  },
      _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
  },
      _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  },
      _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  },
      _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  },
      _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
  },
      _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
  },
      _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  },
      _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  },
      _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  },
      _transformProp = "transform",
      _transformOriginProp = _transformProp + "Origin",
      _supports3D,
      _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
    return e.style ? e : _doc$1.createElement(type);
  },
      _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
  },
      _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
      _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv,
        s = e.style,
        i = 5;

    if (property in s && !preferPrefix) {
      return property;
    }

    property = property.charAt(0).toUpperCase() + property.substr(1);

    while (i-- && !(_prefixes[i] + property in s)) {}

    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  },
      _initCore = function _initCore() {
    if (_windowExists$1() && window.document) {
      _win$1 = window;
      _doc$1 = _win$1.document;
      _docElement = _doc$1.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _pluginInitted = 1;
    }
  },
      _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        oldParent = this.parentNode,
        oldSibling = this.nextSibling,
        oldCSS = this.style.cssText,
        bbox;

    _docElement.appendChild(svg);

    svg.appendChild(this);
    this.style.display = "block";

    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }

    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }

    _docElement.removeChild(svg);

    this.style.cssText = oldCSS;
    return bbox;
  },
      _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;

    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  },
      _getBBox = function _getBBox(target) {
    var bounds;

    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }

    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  },
      _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  },
      _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style;

      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }

      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }

        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  },
      _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;

    plugin._props.push(property);

    return pt;
  },
      _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0,
        curUnit = (value + "").trim().substr((curValue + "").length) || "px",
        style = _tempDiv.style,
        horizontal = _horizontalExp.test(property),
        isRootSVG = target.tagName.toLowerCase() === "svg",
        measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
        amount = 100,
        toPixels = unit === "px",
        toPercent = unit === "%",
        px,
        parent,
        cache,
        isSVG;

    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }

    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);

    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }

    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }

    if (!parent || parent === _doc$1 || !parent.appendChild) {
      parent = _doc$1.body;
    }

    cache = parent._gsap;

    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";

      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }

    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  },
      _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();

    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];

      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }

    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];

      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }

    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  },
      _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1),
          s = p && _getComputedProperty(target, p, 1);

      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }

    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
        index = 0,
        matchIndex = 0,
        a,
        result,
        startValues,
        startNum,
        color,
        startValue,
        endValue,
        endNum,
        chunk,
        endUnit,
        startUnit,
        endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }

    a = [start, end];

    _colorStringFilter(a);

    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];

    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);

        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }

        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;

          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;

            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }

          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }

          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }

      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }

    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  },
      _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "),
        x = split[0],
        y = split[1] || "50%";

    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }

    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  },
      _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t,
          style = target.style,
          props = data.u,
          cache = target._gsap,
          prop,
          clearTransforms,
          i;

      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;

        while (--i > -1) {
          prop = props[i];

          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }

          _removeProperty(target, prop);
        }
      }

      if (clearTransforms) {
        _removeProperty(target, _transformProp);

        if (cache) {
          cache.svg && target.removeAttribute("transform");

          _parseTransform(target, 1);

          cache.uncache = 1;
        }
      }
    }
  },
      _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;

        plugin._props.push(property);

        return 1;
      }
    }
  },
      _identity2DMatrix = [1, 0, 0, 1, 0, 0],
      _rotationalProperties = {},
      _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  },
      _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);

    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  },
      _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || _getCache(target),
        style = target.style,
        matrix = _getComputedTransformMatrixAsArray(target),
        parent,
        nextSibling,
        temp,
        addedToDOM;

    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;

      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextSibling;

        _docElement.appendChild(target);
      }

      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");

      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }

    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  },
      _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap,
        matrix = matrixArray || _getMatrix(target, true),
        xOriginOld = cache.xOrigin || 0,
        yOriginOld = cache.yOrigin || 0,
        xOffsetOld = cache.xOffset || 0,
        yOffsetOld = cache.yOffset || 0,
        a = matrix[0],
        b = matrix[1],
        c = matrix[2],
        d = matrix[3],
        tx = matrix[4],
        ty = matrix[5],
        originSplit = origin.split(" "),
        xOrigin = parseFloat(originSplit[0]) || 0,
        yOrigin = parseFloat(originSplit[1]) || 0,
        bounds,
        determinant,
        x,
        y;

    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }

    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }

    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";

    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }

    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  },
      _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new GSCache(target);

    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }

    var style = target.style,
        invertedScaleX = cache.scaleX < 0,
        px = "px",
        deg = "deg",
        origin = _getComputedProperty(target, _transformOriginProp) || "0",
        x,
        y,
        z,
        scaleX,
        scaleY,
        rotation,
        rotationX,
        rotationY,
        skewX,
        skewY,
        perspective,
        xOrigin,
        yOrigin,
        matrix,
        angle,
        cos,
        sin,
        a,
        b,
        c,
        d,
        a12,
        a22,
        t1,
        t2,
        t3,
        a13,
        a23,
        a33,
        a42,
        a43,
        a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);

    if (cache.svg) {
      t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin");

      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }

    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;

    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];

      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }

        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }

        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }

        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }

        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }

      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }

    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }

    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;

    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }

    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  },
      _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  },
      _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  },
      _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;

    _renderCSSTransforms(ratio, cache);
  },
      _zeroDeg = "0deg",
      _zeroPx = "0px",
      _endParenthesis = ") ",
      _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this,
        xPercent = _ref.xPercent,
        yPercent = _ref.yPercent,
        x = _ref.x,
        y = _ref.y,
        z = _ref.z,
        rotation = _ref.rotation,
        rotationY = _ref.rotationY,
        rotationX = _ref.rotationX,
        skewX = _ref.skewX,
        skewY = _ref.skewY,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        transformPerspective = _ref.transformPerspective,
        force3D = _ref.force3D,
        target = _ref.target,
        zOrigin = _ref.zOrigin,
        transforms = "",
        use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;

    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD,
          a13 = Math.sin(angle),
          a33 = Math.cos(angle),
          cos;

      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }

    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }

    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }

    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }

    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }

    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }

    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }

    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }

    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }

    target.style[_transformProp] = transforms || "translate(0, 0)";
  },
      _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this,
        xPercent = _ref2.xPercent,
        yPercent = _ref2.yPercent,
        x = _ref2.x,
        y = _ref2.y,
        rotation = _ref2.rotation,
        skewX = _ref2.skewX,
        skewY = _ref2.skewY,
        scaleX = _ref2.scaleX,
        scaleY = _ref2.scaleY,
        target = _ref2.target,
        xOrigin = _ref2.xOrigin,
        yOrigin = _ref2.yOrigin,
        xOffset = _ref2.xOffset,
        yOffset = _ref2.yOffset,
        forceCSS = _ref2.forceCSS,
        tx = parseFloat(x),
        ty = parseFloat(y),
        a11,
        a21,
        a12,
        a22,
        temp;

    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);

    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }

    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;

      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;

        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }

      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }

    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }

    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }

    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }

    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  },
      _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360,
        isString = _isString(endValue),
        endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
        change = endNum - startNum,
        finalValue = startNum + change + "deg",
        direction,
        pt;

    if (isString) {
      direction = endValue.split("_")[1];

      if (direction === "short") {
        change %= cap;

        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }

      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      }
    }

    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";

    plugin._props.push(property);

    return pt;
  },
      _assign = function _assign(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }

    return target;
  },
      _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap),
        exclude = "perspective,force3D,transformOrigin,svgOrigin",
        style = target.style,
        endCache,
        p,
        startValue,
        endValue,
        startNum,
        endNum,
        startUnit,
        endUnit;

    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);

      _removeProperty(target, _transformProp);

      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }

    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];

      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;

        plugin._props.push(p);
      }
    }

    _assign(endCache, startCache);
  };

  _forEachName("padding,margin,Width,Radius", function (name, index) {
    var t = "Top",
        r = "Right",
        b = "Bottom",
        l = "Left",
        props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });

    _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
      var a, vars;

      if (arguments.length < 4) {
        a = props.map(function (prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }

      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function (prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });

  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
      var props = this._props,
          style = target.style,
          startAt = tween.vars.startAt,
          startValue,
          endValue,
          endNum,
          startNum,
          type,
          specialProp,
          p,
          startUnit,
          endUnit,
          relative,
          isTransformRelated,
          transformPropTween,
          cache,
          smooth,
          hasPriority;
      _pluginInitted || _initCore();

      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }

        endValue = vars[p];

        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }

        type = typeof endValue;
        specialProp = _specialProps[p];

        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }

        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }

        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;

          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }

          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }

          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);

          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }

              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }

            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }

          isTransformRelated = p in _transformProps;

          if (isTransformRelated) {
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }

            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0);
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              endValue = _convertKeywordsToPercentages(endValue);

              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }

              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);

              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);

              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);

              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }

          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;

            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else {
              _missingPlugin(p, endValue);

              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }

          props.push(p);
        }
      }

      hasPriority && _sortPropTweensByPriority(this);
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty: _removeProperty,
      _getMatrix: _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;

  (function (positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
      _transformProps[name] = 1;
    });

    _forEachName(rotation, function (name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });

    _propertyAliases[all[13]] = positionAndScale + "," + rotation;

    _forEachName(aliases, function (name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
    _config.units[name] = "px";
  });

  gsap.registerPlugin(CSSPlugin);

  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
      TweenMaxWithCSS = gsapWithCSS.core.Tween;

  exports.Back = Back;
  exports.Bounce = Bounce;
  exports.CSSPlugin = CSSPlugin;
  exports.Circ = Circ;
  exports.Cubic = Cubic;
  exports.Elastic = Elastic;
  exports.Expo = Expo;
  exports.Linear = Linear;
  exports.Power0 = Power0;
  exports.Power1 = Power1;
  exports.Power2 = Power2;
  exports.Power3 = Power3;
  exports.Power4 = Power4;
  exports.Quad = Quad;
  exports.Quart = Quart;
  exports.Quint = Quint;
  exports.Sine = Sine;
  exports.SteppedEase = SteppedEase;
  exports.Strong = Strong;
  exports.TimelineLite = Timeline;
  exports.TimelineMax = Timeline;
  exports.TweenLite = Tween;
  exports.TweenMax = TweenMaxWithCSS;
  exports.default = gsapWithCSS;
  exports.gsap = gsapWithCSS;

  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

})));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /*!
   * Observer 3.10.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var gsap,
      _coreInitted,
      _clamp,
      _win,
      _doc,
      _docEl,
      _body,
      _isTouch,
      _pointerType,
      ScrollTrigger,
      _root,
      _normalizer,
      _eventTypes,
      _getGSAP = function _getGSAP() {
    return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  },
      _startup = 1,
      _observers = [],
      _scrollers = [],
      _proxies = [],
      _getTime = Date.now,
      _bridge = function _bridge(name, value) {
    return value;
  },
      _integrate = function _integrate() {
    var core = ScrollTrigger.core,
        data = core.bridge || {},
        scrollers = core._scrollers,
        proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;

    _bridge = function _bridge(name, value) {
      return data[name](value);
    };
  },
      _getProxyProp = function _getProxyProp(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  },
      _isViewport = function _isViewport(el) {
    return !!~_root.indexOf(el);
  },
      _addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  },
      _removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  },
      _scrollLeft = "scrollLeft",
      _scrollTop = "scrollTop",
      _onScroll = function _onScroll() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  },
      _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
    var cachingFunc = function cachingFunc(value) {
      if (value || value === 0) {
        _startup && (_win.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f(value);
        cachingFunc.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
        cachingFunc.cacheID = _scrollers.cache;
        cachingFunc.v = f();
      }

      return cachingFunc.v + cachingFunc.offset;
    };

    cachingFunc.offset = 0;
    return f && cachingFunc;
  },
      _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function (value) {
      return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    })
  },
      _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function (value) {
      return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    })
  },
      _getTarget = function _getTarget(t) {
    return gsap.utils.toArray(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
  },
      _getScrollFunc = function _getScrollFunc(element, _ref) {
    var s = _ref.s,
        sc = _ref.sc;

    var i = _scrollers.indexOf(element),
        offset = sc === _vertical.sc ? 1 : 2;

    !~i && (i = _scrollers.push(element) - 1);
    return _scrollers[i + offset] || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function (value) {
      return arguments.length ? element[s] = value : element[s];
    })));
  },
      _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
    var v1 = value,
        v2 = value,
        t1 = _getTime(),
        t2 = t1,
        min = minTimeRefresh || 50,
        dropToZeroTime = Math.max(500, min * 3),
        update = function update(value, force) {
      var t = _getTime();

      if (force || t - t1 > min) {
        v2 = v1;
        v1 = value;
        t2 = t1;
        t1 = t;
      } else if (useDelta) {
        v1 += value;
      } else {
        v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
      }
    },
        reset = function reset() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    },
        getVelocity = function getVelocity(latestValue) {
      var tOld = t2,
          vOld = v2,
          t = _getTime();

      (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
      return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
    };

    return {
      update: update,
      reset: reset,
      getVelocity: getVelocity
    };
  },
      _getEvent = function _getEvent(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
  },
      _getAbsoluteMax = function _getAbsoluteMax(a) {
    var max = Math.max.apply(Math, a),
        min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  },
      _setScrollTrigger = function _setScrollTrigger() {
    ScrollTrigger = gsap.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  },
      _initCore = function _initCore(core) {
    gsap = core || _getGSAP();

    if (gsap && typeof document !== "undefined" && document.body) {
      _win = window;
      _doc = document;
      _docEl = _doc.documentElement;
      _body = _doc.body;
      _root = [_win, _doc, _docEl, _body];
      _clamp = gsap.utils.clamp;
      _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function () {
        return _startup = 0;
      }, 500);

      _setScrollTrigger();

      _coreInitted = 1;
    }

    return _coreInitted;
  };

  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = function () {
    function Observer(vars) {
      this.init(vars);
    }

    var _proto = Observer.prototype;

    _proto.init = function init(vars) {
      _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance,
          dragMinimum = vars.dragMinimum,
          type = vars.type,
          target = vars.target,
          lineHeight = vars.lineHeight,
          debounce = vars.debounce,
          preventDefault = vars.preventDefault,
          onStop = vars.onStop,
          onStopDelay = vars.onStopDelay,
          ignore = vars.ignore,
          wheelSpeed = vars.wheelSpeed,
          event = vars.event,
          onDragStart = vars.onDragStart,
          onDragEnd = vars.onDragEnd,
          onDrag = vars.onDrag,
          onPress = vars.onPress,
          onRelease = vars.onRelease,
          onRight = vars.onRight,
          onLeft = vars.onLeft,
          onUp = vars.onUp,
          onDown = vars.onDown,
          onChangeX = vars.onChangeX,
          onChangeY = vars.onChangeY,
          onChange = vars.onChange,
          onToggleX = vars.onToggleX,
          onToggleY = vars.onToggleY,
          onHover = vars.onHover,
          onHoverEnd = vars.onHoverEnd,
          onMove = vars.onMove,
          ignoreCheck = vars.ignoreCheck,
          isNormalizer = vars.isNormalizer,
          onGestureStart = vars.onGestureStart,
          onGestureEnd = vars.onGestureEnd,
          onWheel = vars.onWheel,
          onEnable = vars.onEnable,
          onDisable = vars.onDisable,
          onClick = vars.onClick,
          scrollSpeed = vars.scrollSpeed,
          capture = vars.capture,
          allowClicks = vars.allowClicks,
          lockAxis = vars.lockAxis,
          onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap.utils.toArray(ignore));
      tolerance = tolerance || 0;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce = debounce !== false;
      lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22);

      var id,
          onStopDelayedCall,
          dragged,
          moved,
          wheeled,
          locked,
          axis,
          self = this,
          prevDeltaX = 0,
          prevDeltaY = 0,
          scrollFuncX = _getScrollFunc(target, _horizontal),
          scrollFuncY = _getScrollFunc(target, _vertical),
          scrollX = scrollFuncX(),
          scrollY = scrollFuncY(),
          limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
          isViewport = _isViewport(target),
          ownerDoc = target.ownerDocument || _doc,
          deltaX = [0, 0, 0],
          deltaY = [0, 0, 0],
          onClickTime = 0,
          clickCapture = function clickCapture() {
        return onClickTime = _getTime();
      },
          _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
        return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
      },
          onStopFunc = function onStopFunc() {
        self._vx.reset();

        self._vy.reset();

        onStopDelayedCall.pause();
        onStop && onStop(self);
      },
          update = function update() {
        var dx = self.deltaX = _getAbsoluteMax(deltaX),
            dy = self.deltaY = _getAbsoluteMax(deltaY),
            changedX = Math.abs(dx) >= tolerance,
            changedY = Math.abs(dy) >= tolerance;

        onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);

        if (changedX) {
          onRight && self.deltaX > 0 && onRight(self);
          onLeft && self.deltaX < 0 && onLeft(self);
          onChangeX && onChangeX(self);
          onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
          prevDeltaX = self.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }

        if (changedY) {
          onDown && self.deltaY > 0 && onDown(self);
          onUp && self.deltaY < 0 && onUp(self);
          onChangeY && onChangeY(self);
          onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
          prevDeltaY = self.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }

        if (moved || dragged) {
          onMove && onMove(self);
          onLockAxis && locked && onLockAxis(self);

          if (dragged) {
            onDrag(self);
            dragged = false;
          }

          moved = locked = false;
        }

        if (wheeled) {
          onWheel(self);
          wheeled = false;
        }

        id = 0;
      },
          onDelta = function onDelta(x, y, index) {
        deltaX[index] += x;
        deltaY[index] += y;

        self._vx.update(x);

        self._vy.update(y);

        debounce ? id || (id = requestAnimationFrame(update)) : update();
      },
          onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
        if (axis !== "y") {
          deltaX[2] += x;

          self._vx.update(x, true);
        }

        if (axis !== "x") {
          deltaY[2] += y;

          self._vy.update(y, true);
        }

        if (lockAxis && !axis) {
          self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }

        debounce ? id || (id = requestAnimationFrame(update)) : update();
      },
          _onDrag = function _onDrag(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }

        e = _getEvent(e, preventDefault);
        var x = e.clientX,
            y = e.clientY,
            dx = x - self.x,
            dy = y - self.y,
            isDragging = self.isDragging;
        self.x = x;
        self.y = y;

        if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self);
        }
      },
          _onPress = self.onPress = function (e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }

        self.axis = axis = null;
        onStopDelayedCall.pause();
        self.isPressed = true;
        e = _getEvent(e);
        prevDeltaX = prevDeltaY = 0;
        self.startX = self.x = e.clientX;
        self.startY = self.y = e.clientY;

        self._vx.reset();

        self._vy.reset();

        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);

        self.deltaX = self.deltaY = 0;
        onPress && onPress(self);
      },
          _onRelease = function _onRelease(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }

        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);

        var wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
            eventData = _getEvent(e);

        if (!wasDragging) {
          self._vx.reset();

          self._vy.reset();

          if (preventDefault && allowClicks) {
            gsap.delayedCall(0.08, function () {
              if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                if (e.target.click) {
                  e.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }

        self.isDragging = self.isGesturing = self.isPressed = false;
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self);
        onRelease && onRelease(self, wasDragging);
      },
          _onGestureStart = function _onGestureStart(e) {
        return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
      },
          _onGestureEnd = function _onGestureEnd() {
        return (self.isGesturing = false) || onGestureEnd(self);
      },
          onScroll = function onScroll(e) {
        if (_ignoreCheck(e)) {
          return;
        }

        var x = scrollFuncX(),
            y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      },
          _onWheel = function _onWheel(e) {
        if (_ignoreCheck(e)) {
          return;
        }

        e = _getEvent(e, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
        onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      },
          _onMove = function _onMove(e) {
        if (_ignoreCheck(e)) {
          return;
        }

        var x = e.clientX,
            y = e.clientY,
            dx = x - self.x,
            dy = y - self.y;
        self.x = x;
        self.y = y;
        moved = true;
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      },
          _onHover = function _onHover(e) {
        self.event = e;
        onHover(self);
      },
          _onHoverEnd = function _onHoverEnd(e) {
        self.event = e;
        onHoverEnd(self);
      },
          _onClick = function _onClick(e) {
        return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
      };

      onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self.deltaX = self.deltaY = 0;
      self._vx = _getVelocityProp(0, 50, true);
      self._vy = _getVelocityProp(0, 50, true);
      self.scrollX = scrollFuncX;
      self.scrollY = scrollFuncY;
      self.isDragging = self.isGesturing = self.isPressed = false;

      self.enable = function (e) {
        if (!self.isEnabled) {
          _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

          type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
          type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);

          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);

            _addListener(ownerDoc, _eventTypes[2], _onRelease);

            _addListener(ownerDoc, _eventTypes[3], _onRelease);

            allowClicks && _addListener(target, "click", clickCapture, false, true);
            onClick && _addListener(target, "click", _onClick);
            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener(target, _pointerType + "move", _onMove);
          }

          self.isEnabled = true;
          e && e.type && _onPress(e);
          onEnable && onEnable(self);
        }

        return self;
      };

      self.disable = function () {
        if (self.isEnabled) {
          _observers.filter(function (o) {
            return o !== self && _isViewport(o.target);
          }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

          if (self.isPressed) {
            self._vx.reset();

            self._vy.reset();

            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }

          _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);

          _removeListener(target, "wheel", _onWheel, capture);

          _removeListener(target, _eventTypes[0], _onPress, capture);

          _removeListener(ownerDoc, _eventTypes[2], _onRelease);

          _removeListener(ownerDoc, _eventTypes[3], _onRelease);

          _removeListener(target, "click", clickCapture, true);

          _removeListener(target, "click", _onClick);

          _removeListener(ownerDoc, "gesturestart", _onGestureStart);

          _removeListener(ownerDoc, "gestureend", _onGestureEnd);

          _removeListener(target, _pointerType + "enter", _onHover);

          _removeListener(target, _pointerType + "leave", _onHoverEnd);

          _removeListener(target, _pointerType + "move", _onMove);

          self.isEnabled = self.isPressed = self.isDragging = false;
          onDisable && onDisable(self);
        }
      };

      self.kill = function () {
        self.disable();

        var i = _observers.indexOf(self);

        i >= 0 && _observers.splice(i, 1);
        _normalizer === self && (_normalizer = 0);
      };

      _observers.push(self);

      isNormalizer && _isViewport(target) && (_normalizer = self);
      self.enable(event);
    };

    _createClass(Observer, [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]);

    return Observer;
  }();
  Observer.version = "3.10.4";

  Observer.create = function (vars) {
    return new Observer(vars);
  };

  Observer.register = _initCore;

  Observer.getAll = function () {
    return _observers.slice();
  };

  Observer.getById = function (id) {
    return _observers.filter(function (o) {
      return o.vars.id === id;
    })[0];
  };

  _getGSAP() && gsap.registerPlugin(Observer);

  /*!
   * ScrollTrigger 3.10.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */

  var gsap$1,
      _coreInitted$1,
      _win$1,
      _doc$1,
      _docEl$1,
      _body$1,
      _root$1,
      _resizeDelay,
      _toArray,
      _clamp$1,
      _time2,
      _syncInterval,
      _refreshing,
      _pointerIsDown,
      _transformProp,
      _i,
      _prevWidth,
      _prevHeight,
      _autoRefresh,
      _sort,
      _suppressOverwrites,
      _ignoreResize,
      _normalizer$1,
      _ignoreMobileResize,
      _baseScreenHeight,
      _baseScreenWidth,
      _fixIOSBug,
      _limitCallbacks,
      _startup$1 = 1,
      _getTime$1 = Date.now,
      _time1 = _getTime$1(),
      _lastScrollTime = 0,
      _enabled = 0,
      _pointerDownHandler = function _pointerDownHandler() {
    return _pointerIsDown = 1;
  },
      _pointerUpHandler = function _pointerUpHandler() {
    return _pointerIsDown = 0;
  },
      _passThrough = function _passThrough(v) {
    return v;
  },
      _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _getGSAP$1 = function _getGSAP() {
    return gsap$1 || _windowExists() && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
  },
      _isViewport$1 = function _isViewport(e) {
    return !!~_root$1.indexOf(e);
  },
      _getBoundsFunc = function _getBoundsFunc(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport$1(element) ? function () {
      _winOffsets.width = _win$1.innerWidth;
      _winOffsets.height = _win$1.innerHeight;
      return _winOffsets;
    } : function () {
      return _getBounds(element);
    });
  },
      _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
    var d = _ref.d,
        d2 = _ref.d2,
        a = _ref.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
      return a()[d];
    } : function () {
      return (isViewport ? _win$1["inner" + d2] : scroller["client" + d2]) || 0;
    };
  },
      _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
      return _winOffsets;
    };
  },
      _maxScroll = function _maxScroll(element, _ref2) {
    var s = _ref2.s,
        d2 = _ref2.d2,
        d = _ref2.d,
        a = _ref2.a;
    return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport$1(element) ? (_docEl$1[s] || _body$1[s]) - (_win$1["inner" + d2] || _docEl$1["client" + d2] || _body$1["client" + d2]) : element[s] - element["offset" + d2];
  },
      _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
    for (var i = 0; i < _autoRefresh.length; i += 3) {
      (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
  },
      _isString = function _isString(value) {
    return typeof value === "string";
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _callIfFunc = function _callIfFunc(value) {
    return _isFunction(value) && value();
  },
      _combineFunc = function _combineFunc(f1, f2) {
    return function () {
      var result1 = _callIfFunc(f1),
          result2 = _callIfFunc(f2);

      return function () {
        _callIfFunc(result1);

        _callIfFunc(result2);
      };
    };
  },
      _endAnimation = function _endAnimation(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  },
      _callback = function _callback(self, func) {
    if (self.enabled) {
      var result = func(self);
      result && result.totalTime && (self.callbackAnimation = result);
    }
  },
      _abs = Math.abs,
      _left = "left",
      _top = "top",
      _right = "right",
      _bottom = "bottom",
      _width = "width",
      _height = "height",
      _Right = "Right",
      _Left = "Left",
      _Top = "Top",
      _Bottom = "Bottom",
      _padding = "padding",
      _margin = "margin",
      _Width = "Width",
      _Height = "Height",
      _px = "px",
      _getComputedStyle = function _getComputedStyle(element) {
    return _win$1.getComputedStyle(element);
  },
      _makePositionable = function _makePositionable(element) {
    var position = _getComputedStyle(element).position;

    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }

    return obj;
  },
      _getBounds = function _getBounds(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap$1.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1),
        bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  },
      _getSize = function _getSize(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  },
      _getLabelRatioArray = function _getLabelRatioArray(timeline) {
    var a = [],
        labels = timeline.labels,
        duration = timeline.duration(),
        p;

    for (p in labels) {
      a.push(labels[p] / duration);
    }

    return a;
  },
      _getClosestLabel = function _getClosestLabel(animation) {
    return function (value) {
      return gsap$1.utils.snap(_getLabelRatioArray(animation), value);
    };
  },
      _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
    var snap = gsap$1.utils.snap(snapIncrementOrArray),
        a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
      return a - b;
    });
    return a ? function (value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }

      var i;

      if (!direction) {
        return snap(value);
      }

      if (direction > 0) {
        value -= threshold;

        for (i = 0; i < a.length; i++) {
          if (a[i] >= value) {
            return a[i];
          }
        }

        return a[i - 1];
      } else {
        i = a.length;
        value += threshold;

        while (i--) {
          if (a[i] <= value) {
            return a[i];
          }
        }
      }

      return a[0];
    } : function (value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }

      var snapped = snap(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  },
      _getLabelAtDirection = function _getLabelAtDirection(timeline) {
    return function (value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
    };
  },
      _multiListener = function _multiListener(func, element, types, callback) {
    return types.split(",").forEach(function (type) {
      return func(element, type, callback);
    });
  },
      _addListener$1 = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  },
      _removeListener$1 = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  },
      _wheelListener = function _wheelListener(func, el, scrollFunc) {
    return scrollFunc && scrollFunc.wheelHandler && func(el, "wheel", scrollFunc);
  },
      _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
      _defaults = {
    toggleActions: "play",
    anticipatePin: 0
  },
      _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  },
      _offsetToPx = function _offsetToPx(value, size) {
    if (_isString(value)) {
      var eqIndex = value.indexOf("="),
          relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }

      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }

    return value;
  },
      _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor,
        endColor = _ref4.endColor,
        fontSize = _ref4.fontSize,
        indent = _ref4.indent,
        fontWeight = _ref4.fontWeight;

    var e = _doc$1.createElement("div"),
        useFixedPosition = _isViewport$1(container) || _getProxyProp(container, "pinType") === "fixed",
        isScroller = type.indexOf("scroller") !== -1,
        parent = useFixedPosition ? _body$1 : container,
        isStart = type.indexOf("start") !== -1,
        color = isStart ? startColor : endColor,
        css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];

    _positionMarker(e, 0, direction, isStart);

    return e;
  },
      _positionMarker = function _positionMarker(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    },
        side = direction[flipped ? "os2" : "p2"],
        oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap$1.set(marker, vars);
  },
      _triggers = [],
      _ids = {},
      _rafID,
      _sync = function _sync() {
    return _getTime$1() - _lastScrollTime > 34 && _updateAll();
  },
      _onScroll$1 = function _onScroll() {
    if (!_normalizer$1 || !_normalizer$1.isPressed || _normalizer$1.startX > _body$1.clientWidth) {
      _scrollers.cache++;
      _rafID || (_rafID = requestAnimationFrame(_updateAll));
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime$1();
    }
  },
      _setBaseDimensions = function _setBaseDimensions() {
    _baseScreenWidth = _win$1.innerWidth;
    _baseScreenHeight = _win$1.innerHeight;
  },
      _onResize = function _onResize() {
    _scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc$1.fullscreenElement && !_doc$1.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win$1.innerWidth || Math.abs(_win$1.innerHeight - _baseScreenHeight) > _win$1.innerHeight * 0.25) && _resizeDelay.restart(true);
  },
      _listeners = {},
      _emptyArray = [],
      _media = [],
      _creatingMedia,
      _lastMediaTick,
      _onMediaChange = function _onMediaChange(e) {
    var tick = gsap$1.ticker.frame,
        matches = [],
        i = 0,
        index;

    if (_lastMediaTick !== tick || _startup$1) {
      _revertAll();

      for (; i < _media.length; i += 4) {
        index = _win$1.matchMedia(_media[i]).matches;

        if (index !== _media[i + 3]) {
          _media[i + 3] = index;
          index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2]();
        }
      }

      _revertRecorded();

      for (i = 0; i < matches.length; i++) {
        index = matches[i];
        _creatingMedia = _media[index];
        _media[index + 2] = _media[index + 1](e);
      }

      _creatingMedia = 0;
      _coreInitted$1 && _refreshAll(0, 1);
      _lastMediaTick = tick;

      _dispatch("matchMedia");
    }
  },
      _softRefresh = function _softRefresh() {
    return _removeListener$1(ScrollTrigger$1, "scrollEnd", _softRefresh) || _refreshAll(true);
  },
      _dispatch = function _dispatch(type) {
    return _listeners[type] && _listeners[type].map(function (f) {
      return f();
    }) || _emptyArray;
  },
      _savedStyles = [],
      _revertRecorded = function _revertRecorded(media) {
    for (var i = 0; i < _savedStyles.length; i += 5) {
      if (!media || _savedStyles[i + 4] === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
        _savedStyles[i + 3].uncache = 1;
      }
    }
  },
      _revertAll = function _revertAll(kill, media) {
    var trigger;

    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];

      if (!media || trigger.media === media) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert();
        }
      }
    }

    media && _revertRecorded(media);
    media || _dispatch("revert");
  },
      _clearScrollMemory = function _clearScrollMemory() {
    return _scrollers.cache++ && _scrollers.forEach(function (obj) {
      return typeof obj === "function" && (obj.rec = 0);
    });
  },
      _refreshingAll,
      _refreshID = 0,
      _refreshAll = function _refreshAll(force, skipRevert) {
    if (_lastScrollTime && !force) {
      _addListener$1(ScrollTrigger$1, "scrollEnd", _softRefresh);

      return;
    }

    _refreshingAll = true;

    var refreshInits = _dispatch("refreshInit");

    _sort && ScrollTrigger$1.sort();
    skipRevert || _revertAll();

    _triggers.slice(0).forEach(function (t) {
      return t.refresh();
    });

    _triggers.forEach(function (t) {
      return t.vars.end === "max" && t.setPositions(t.start, _maxScroll(t.scroller, t._dir));
    });

    refreshInits.forEach(function (result) {
      return result && result.render && result.render(-1);
    });

    _clearScrollMemory();

    _resizeDelay.pause();

    _refreshID++;
    _refreshingAll = false;

    _dispatch("refresh");
  },
      _lastScroll = 0,
      _direction = 1,
      _primary,
      _updateAll = function _updateAll() {
    if (!_refreshingAll) {
      ScrollTrigger$1.isUpdating = true;
      _primary && _primary.update(0);

      var l = _triggers.length,
          time = _getTime$1(),
          recordVelocity = time - _time1 >= 50,
          scroll = l && _triggers[0].scroll();

      _direction = _lastScroll > scroll ? -1 : 1;
      _lastScroll = scroll;

      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;

          _dispatch("scrollEnd");
        }

        _time2 = _time1;
        _time1 = time;
      }

      if (_direction < 0) {
        _i = l;

        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }

        _direction = 1;
      } else {
        for (_i = 0; _i < l; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }

      ScrollTrigger$1.isUpdating = false;
    }

    _rafID = 0;
  },
      _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
      _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
      _swapPinOut = function _swapPinOut(pin, spacer, state) {
    _setState(state);

    var cache = pin._gsap;

    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin.parentNode === spacer) {
      var parent = spacer.parentNode;

      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
  },
      _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
    if (pin.parentNode !== spacer) {
      var i = _propNamesToCopy.length,
          spacerStyle = spacer.style,
          pinStyle = pin.style,
          p;

      while (i--) {
        p = _propNamesToCopy[i];
        spacerStyle[p] = cs[p];
      }

      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = spacerStyle.flexBasis = "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

      _setState(spacerState);

      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }
  },
      _capsExp = /([A-Z])/g,
      _setState = function _setState(state) {
    if (state) {
      var style = state.t.style,
          l = state.length,
          i = 0,
          p,
          value;
      (state.t._gsap || gsap$1.core.getCache(state.t)).uncache = 1;

      for (; i < l; i += 2) {
        value = state[i + 1];
        p = state[i];

        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
        }
      }
    }
  },
      _getState = function _getState(element) {
    var l = _stateProps.length,
        style = element.style,
        state = [],
        i = 0;

    for (; i < l; i++) {
      state.push(_stateProps[i], style[_stateProps[i]]);
    }

    state.t = element;
    return state;
  },
      _copyState = function _copyState(state, override, omitOffsets) {
    var result = [],
        l = state.length,
        i = omitOffsets ? 8 : 0,
        p;

    for (; i < l; i += 2) {
      p = state[i];
      result.push(p, p in override ? override[p] : state[i + 1]);
    }

    result.t = state.t;
    return result;
  },
      _winOffsets = {
    left: 0,
    top: 0
  },
      _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
    _isFunction(value) && (value = value(self));

    if (_isString(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }

    var time = containerAnimation ? containerAnimation.time() : 0,
        p1,
        p2,
        element;
    containerAnimation && containerAnimation.seek(0);

    if (!_isNumber(value)) {
      _isFunction(trigger) && (trigger = trigger(self));
      var offsets = value.split(" "),
          bounds,
          localOffset,
          globalOffset,
          display;
      element = _getTarget(trigger) || _body$1;
      bounds = _getBounds(element) || {};

      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }

      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else if (markerScroller) {
      _positionMarker(markerScroller, scrollerSize, direction, true);
    }

    if (marker) {
      var position = value + scrollerSize,
          isStart = marker._isStart;
      p1 = "scroll" + direction.d2;

      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body$1[p1], _docEl$1[p1]) : marker.parentNode[p1]) <= position + 1);

      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }

    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }

    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  },
      _prefixExp = /(webkit|moz|length|cssText|inset)/i,
      _reparent = function _reparent(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style,
          p,
          cs;

      if (parent === _body$1) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle(element);

        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }

        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }

      gsap$1.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  },
      _getTweenCreator = function _getTweenCreator(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction),
        prop = "_scroll" + direction.p2,
        lastScroll1,
        lastScroll2,
        getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween.tween,
          onComplete = vars.onComplete,
          modifiers = {};
      initialValue = initialValue || getScroll();
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      lastScroll1 = Math.round(initialValue);
      vars[prop] = scrollTo;
      vars.modifiers = modifiers;

      modifiers[prop] = function (value) {
        value = _round(getScroll());

        if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2 && Math.abs(value - lastScroll2) > 2) {
          tween.kill();
          getTween.tween = 0;
        } else {
          value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
        }

        lastScroll2 = lastScroll1;
        return lastScroll1 = _round(value);
      };

      vars.onComplete = function () {
        getTween.tween = 0;
        onComplete && onComplete.call(tween);
      };

      tween = getTween.tween = gsap$1.to(scroller, vars);
      return tween;
    };

    scroller[prop] = getScroll;

    getScroll.wheelHandler = function () {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };

    _addListener$1(scroller, "wheel", getScroll.wheelHandler);

    return getTween;
  };

  var ScrollTrigger$1 = function () {
    function ScrollTrigger(vars, animation) {
      _coreInitted$1 || ScrollTrigger.register(gsap$1) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      this.init(vars, animation);
    }

    var _proto = ScrollTrigger.prototype;

    _proto.init = function init(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);

      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough;
        return;
      }

      vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults);

      var _vars = vars,
          onUpdate = _vars.onUpdate,
          toggleClass = _vars.toggleClass,
          id = _vars.id,
          onToggle = _vars.onToggle,
          onRefresh = _vars.onRefresh,
          scrub = _vars.scrub,
          trigger = _vars.trigger,
          pin = _vars.pin,
          pinSpacing = _vars.pinSpacing,
          invalidateOnRefresh = _vars.invalidateOnRefresh,
          anticipatePin = _vars.anticipatePin,
          onScrubComplete = _vars.onScrubComplete,
          onSnapComplete = _vars.onSnapComplete,
          once = _vars.once,
          snap = _vars.snap,
          pinReparent = _vars.pinReparent,
          pinSpacer = _vars.pinSpacer,
          containerAnimation = _vars.containerAnimation,
          fastScrollEnd = _vars.fastScrollEnd,
          preventOverlaps = _vars.preventOverlaps,
          direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical,
          isToggle = !scrub && scrub !== 0,
          scroller = _getTarget(vars.scroller || _win$1),
          scrollerCache = gsap$1.core.getCache(scroller),
          isViewport = _isViewport$1(scroller),
          useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed",
          callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
          toggleActions = isToggle && vars.toggleActions.split(" "),
          markers = "markers" in vars ? vars.markers : _defaults.markers,
          borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
          self = this,
          onRefreshInit = vars.onRefreshInit && function () {
        return vars.onRefreshInit(self);
      },
          getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
          getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
          lastSnap = 0,
          lastRefresh = 0,
          scrollFunc = _getScrollFunc(scroller, direction),
          tweenTo,
          pinCache,
          snapFunc,
          scroll1,
          scroll2,
          start,
          end,
          markerStart,
          markerEnd,
          markerStartTrigger,
          markerEndTrigger,
          markerVars,
          change,
          pinOriginalState,
          pinActiveState,
          pinState,
          spacer,
          offset,
          pinGetter,
          pinSetter,
          pinStart,
          pinChange,
          spacingStart,
          spacerState,
          markerStartSetter,
          markerEndSetter,
          cs,
          snap1,
          snap2,
          scrubTween,
          scrubSmooth,
          snapDurClamp,
          snapDelayedCall,
          prevProgress,
          prevScroll,
          prevAnimProgress,
          caMarkerSetter,
          customRevertReturn;

      self.media = _creatingMedia;
      self._dir = direction;
      anticipatePin *= 45;
      self.scroller = scroller;
      self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self.vars = vars;
      animation = animation || vars.animation;

      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self);
      }

      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

      self.scrubDuration = function (value) {
        scrubSmooth = _isNumber(value) && value;

        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap$1.to(animation, {
            ease: "expo",
            totalProgress: "+=0.001",
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self);
            }
          });
        }
      };

      if (animation) {
        animation.vars.lazy = false;
        animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
        self.animation = animation.pause();
        animation.scrollTrigger = self;
        self.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }

      _triggers.push(self);

      if (snap) {
        if (!_isObject(snap) || snap.push) {
          snap = {
            snapTo: snap
          };
        }

        "scrollBehavior" in _body$1.style && gsap$1.set(isViewport ? [_body$1, _docEl$1] : scroller, {
          scrollBehavior: "auto"
        });
        snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
          return _snapDirectional(snap.snapTo)(value, _getTime$1() - lastRefresh < 500 ? 0 : st.direction);
        } : gsap$1.utils.snap(snap.snapTo);
        snapDurClamp = snap.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject(snapDurClamp) ? _clamp$1(snapDurClamp.min, snapDurClamp.max) : _clamp$1(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap$1.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
          var scroll = scrollFunc(),
              refreshedRecently = _getTime$1() - lastRefresh < 500,
              tween = tweenTo.tween;

          if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change,
                totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
                velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime$1() - _time2) * 1000 || 0,
                change1 = gsap$1.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185),
                naturalEnd = progress + (snap.inertia === false ? 0 : change1),
                endValue = _clamp$1(0, 1, snapFunc(naturalEnd, self)),
                endScroll = Math.round(start + endValue * change),
                _snap = snap,
                onStart = _snap.onStart,
                _onInterrupt = _snap.onInterrupt,
                _onComplete = _snap.onComplete;

            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                return;
              }

              if (snap.inertia === false) {
                change1 = endValue - progress;
              }

              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap.ease || "power3",
                data: _abs(endScroll - scroll),
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                },
                onComplete: function onComplete() {
                  self.update();
                  lastSnap = scrollFunc();
                  snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                  onSnapComplete && onSnapComplete(self);
                  _onComplete && _onComplete(self);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self, tweenTo.tween);
            }
          } else if (self.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }

      id && (_ids[id] = self);
      trigger = self.trigger = _getTarget(trigger || pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });

      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
        self.pin = pin;
        vars.force3D !== false && gsap$1.set(pin, {
          force3D: true
        });
        pinCache = gsap$1.core.getCache(pin);

        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }

          pinCache.spacer = spacer = pinSpacer || _doc$1.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }

        self.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap$1.getProperty(pin);
        pinSetter = gsap$1.quickSetter(pin, direction.a, _px);

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin);
      }

      if (markers) {
        markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];

        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);

        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap$1.quickSetter([markerStart, markerEnd], direction.a, _px));

        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body$1 : scroller);

          gsap$1.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap$1.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap$1.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }

      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate,
            oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function () {
          self.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(oldParams || []);
        });
      }

      self.previous = function () {
        return _triggers[_triggers.indexOf(self) - 1];
      };

      self.next = function () {
        return _triggers[_triggers.indexOf(self) + 1];
      };

      self.revert = function (revert) {
        var r = revert !== false || !self.enabled,
            prevRefreshing = _refreshing;

        if (r !== self.isReverted) {
          if (r) {
            self.scroll.rec || !_refreshing || !_refreshingAll || (self.scroll.rec = scrollFunc());
            prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
            prevProgress = self.progress;
            prevAnimProgress = animation && animation.progress();
          }

          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
            return m.style.display = r ? "none" : "block";
          });
          r && (_refreshing = 1);
          self.update(r);
          _refreshing = prevRefreshing;
          pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
          self.isReverted = r;
        }
      };

      self.refresh = function (soft, force) {
        if ((_refreshing || !self.enabled) && !force) {
          return;
        }

        if (pin && soft && _lastScrollTime) {
          _addListener$1(ScrollTrigger, "scrollEnd", _softRefresh);

          return;
        }

        !_refreshingAll && onRefreshInit && onRefreshInit(self);
        _refreshing = 1;
        lastRefresh = _getTime$1();

        if (tweenTo.tween) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }

        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.time(-0.01, true).invalidate();
        self.isReverted || self.revert();

        var size = getScrollerSize(),
            scrollerBounds = getScrollerOffsets(),
            max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
            offset = 0,
            otherPinOffset = 0,
            parsedEnd = vars.end,
            parsedEndTrigger = vars.endTrigger || trigger,
            parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
            pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer),
            triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
            i = triggerIndex,
            cs,
            bounds,
            scroll,
            isVertical,
            override,
            curTrigger,
            curPin,
            oppositeScroll,
            initted,
            revertedPins;

        while (i--) {
          curTrigger = _triggers[i];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
          curPin = curTrigger.pin;

          if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert();
          }

          if (curTrigger !== _triggers[i]) {
            triggerIndex--;
            i--;
          }
        }

        _isFunction(parsedStart) && (parsedStart = parsedStart(self));
        start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -0.001 : 0);
        _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

        if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString(parsedStart) ? parsedStart : start + offset;
            parsedEndTrigger = trigger;
          }
        }

        end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -0.001;
        change = end - start || (start -= 0.01) && 0.001;
        offset = 0;
        i = triggerIndex;

        while (i--) {
          curTrigger = _triggers[i];
          curPin = curTrigger.pin;

          if (curPin && curTrigger.start - curTrigger._pinPush < start && !containerAnimation && curTrigger.end > 0) {
            cs = curTrigger.end - curTrigger.start;

            if ((curPin === trigger || curPin === pinnedContainer) && !_isNumber(parsedStart)) {
              offset += cs * (1 - curTrigger.progress);
            }

            curPin === pin && (otherPinOffset += cs);
          }
        }

        start += offset;
        end += offset;
        self._pinPush = otherPinOffset;

        if (markerStart && offset) {
          cs = {};
          cs[direction.a] = "+=" + offset;
          pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
          gsap$1.set([markerStart, markerEnd], cs);
        }

        if (pin) {
          cs = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          !max && end > 1 && ((isViewport ? _body$1 : scroller).style["overflow-" + direction.a] = "scroll");

          _swapPinIn(pin, spacer, cs);

          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            i && spacerState.push(direction.d, i + _px);

            _setState(spacerState);

            useFixedPosition && scrollFunc(prevScroll);
          }

          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs[_padding];
            override[_padding + _Top] = cs[_padding + _Top];
            override[_padding + _Right] = cs[_padding + _Right];
            override[_padding + _Bottom] = cs[_padding + _Bottom];
            override[_padding + _Left] = cs[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          }

          if (animation) {
            initted = animation._initted;

            _suppressOverwrites(1);

            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            change !== pinChange && useFixedPosition && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate();

            _suppressOverwrites(0);
          } else {
            pinChange = change;
          }
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;

          while (bounds && bounds !== _body$1) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }

            bounds = bounds.parentNode;
          }
        }

        revertedPins && revertedPins.forEach(function (t) {
          return t.revert(false);
        });
        self.start = start;
        self.end = end;
        scroll1 = scroll2 = scrollFunc();

        if (!containerAnimation) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self.scroll.rec = 0;
        }

        self.revert(false);

        if (snapDelayedCall) {
          lastSnap = -1;
          self.isActive && scrollFunc(start + change * prevProgress);
          snapDelayedCall.restart(true);
        }

        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);

        if (prevProgress !== self.progress || containerAnimation) {
          animation && !isToggle && animation.totalProgress(prevProgress, true);
          self.progress = prevProgress;
          self.update(0, 0, 1);
        }

        pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
        onRefresh && onRefresh(self);
      };

      self.getVelocity = function () {
        return (scrollFunc() - scroll2) / (_getTime$1() - _time2) * 1000 || 0;
      };

      self.endAnimation = function () {
        _endAnimation(self.callbackAnimation);

        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
        }
      };

      self.labelToScroll = function (label) {
        return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };

      self.getTrailing = function (name) {
        var i = _triggers.indexOf(self),
            a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);

        return (_isString(name) ? a.filter(function (t) {
          return t.vars.preventOverlaps === name;
        }) : a).filter(function (t) {
          return self.direction > 0 ? t.end <= start : t.start >= end;
        });
      };

      self.update = function (reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }

        var scroll = self.scroll(),
            p = reset ? 0 : (scroll - start) / change,
            clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
            prevProgress = self.progress,
            isActive,
            wasActive,
            toggleState,
            action,
            stateChanged,
            toggled,
            isAtMax,
            isTakingAction;

        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;

          if (snap) {
            snap2 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }

        anticipatePin && !clipped && pin && !_refreshing && !_startup$1 && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime$1() - _time2) * anticipatePin && (clipped = 0.0001);

        if (clipped !== prevProgress && self.enabled) {
          isActive = self.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress && prevProgress < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress;
          self.direction = clipped > prevProgress ? 1 : -1;
          self.progress = clipped;

          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;

            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }

          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
            return t.endAnimation();
          }));

          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup$1) {
              (containerAnimation || _primary && _primary !== self) && scrubTween.render(scrubTween._dp._time - scrubTween._start);

              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!_refreshing);
            }
          }

          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

            if (!useFixedPosition) {
              pinSetter(_round(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);

              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds(pin, true),
                      _offset = scroll - start;

                  _reparent(pin, _body$1, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }

              _setState(isActive || isAtMax ? pinActiveState : pinState);

              pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }

          snap && !tweenTo.tween && !_refreshing && !_startup$1 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self);

          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }

              onUpdate && onUpdate(self);
            }

            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback(self, onToggle);
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
              once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);

              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback(self, callbacks[toggleState]);
              }
            }

            if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self.callbackAnimation);

              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self);
          }
        }

        if (markerEndSetter) {
          var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n);
        }

        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };

      self.enable = function (reset, refresh) {
        if (!self.enabled) {
          self.enabled = true;

          _addListener$1(scroller, "resize", _onResize);

          _addListener$1(isViewport ? _doc$1 : scroller, "scroll", _onScroll$1);

          onRefreshInit && _addListener$1(ScrollTrigger, "refreshInit", onRefreshInit);

          if (reset !== false) {
            self.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }

          refresh !== false && self.refresh();
        }
      };

      self.getTween = function (snap) {
        return snap && tweenTo ? tweenTo.tween : scrubTween;
      };

      self.setPositions = function (newStart, newEnd) {
        if (pin) {
          pinStart += newStart - start;
          pinChange += newEnd - newStart - change;
        }

        self.start = start = newStart;
        self.end = end = newEnd;
        change = newEnd - newStart;
        self.update();
      };

      self.disable = function (reset, allowAnimation) {
        if (self.enabled) {
          reset !== false && self.revert();
          self.enabled = self.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener$1(ScrollTrigger, "refreshInit", onRefreshInit);

          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }

          if (!isViewport) {
            var i = _triggers.length;

            while (i--) {
              if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                return;
              }
            }

            _removeListener$1(scroller, "resize", _onResize);

            _removeListener$1(scroller, "scroll", _onScroll$1);
          }
        }
      };

      self.kill = function (revert, allowAnimation) {
        self.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];

        var i = _triggers.indexOf(self);

        i >= 0 && _triggers.splice(i, 1);
        i === _i && _direction > 0 && _i--;
        i = 0;

        _triggers.forEach(function (t) {
          return t.scroller === self.scroller && (i = 1);
        });

        i || (self.scroll.rec = 0);

        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.render(-1);
          allowAnimation || animation.kill();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.parentNode && m.parentNode.removeChild(m);
        });
        _primary === self && (_primary = 0);

        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i = 0;

          _triggers.forEach(function (t) {
            return t.pin === pin && i++;
          });

          i || (pinCache.spacer = 0);
        }

        vars.onKill && vars.onKill(self);
      };

      self.enable(false, false);
      customRevertReturn && customRevertReturn(self);
      !animation || !animation.add || change ? self.refresh() : gsap$1.delayedCall(0.01, function () {
        return start || end || self.refresh();
      }) && (change = 0.01) && (start = end = 0);
    };

    ScrollTrigger.register = function register(core) {
      if (!_coreInitted$1) {
        gsap$1 = core || _getGSAP$1();
        _windowExists() && window.document && ScrollTrigger.enable();
        _coreInitted$1 = _enabled;
      }

      return _coreInitted$1;
    };

    ScrollTrigger.defaults = function defaults(config) {
      if (config) {
        for (var p in config) {
          _defaults[p] = config[p];
        }
      }

      return _defaults;
    };

    ScrollTrigger.disable = function disable(reset, kill) {
      _enabled = 0;

      _triggers.forEach(function (trigger) {
        return trigger[kill ? "kill" : "disable"](reset);
      });

      _removeListener$1(_win$1, "wheel", _onScroll$1);

      _removeListener$1(_doc$1, "scroll", _onScroll$1);

      clearInterval(_syncInterval);

      _removeListener$1(_doc$1, "touchcancel", _passThrough);

      _removeListener$1(_body$1, "touchstart", _passThrough);

      _multiListener(_removeListener$1, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler);

      _multiListener(_removeListener$1, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler);

      _resizeDelay.kill();

      _iterateAutoRefresh(_removeListener$1);

      for (var i = 0; i < _scrollers.length; i += 3) {
        _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 1]);

        _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 2]);
      }
    };

    ScrollTrigger.enable = function enable() {
      _win$1 = window;
      _doc$1 = document;
      _docEl$1 = _doc$1.documentElement;
      _body$1 = _doc$1.body;

      if (gsap$1) {
        _toArray = gsap$1.utils.toArray;
        _clamp$1 = gsap$1.utils.clamp;
        _suppressOverwrites = gsap$1.core.suppressOverwrites || _passThrough;
        gsap$1.core.globals("ScrollTrigger", ScrollTrigger);

        if (_body$1) {
          _enabled = 1;
          Observer.register(gsap$1);
          ScrollTrigger.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);

          _addListener$1(_win$1, "wheel", _onScroll$1);

          _root$1 = [_win$1, _doc$1, _docEl$1, _body$1];
          ScrollTrigger.matchMedia({
            "(orientation: portrait)": function orientationPortrait() {
              _setBaseDimensions();

              return _setBaseDimensions;
            }
          });

          _addListener$1(_doc$1, "scroll", _onScroll$1);

          var bodyStyle = _body$1.style,
              border = bodyStyle.borderTopStyle,
              bounds,
              i;
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds(_body$1);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 250);
          gsap$1.delayedCall(0.5, function () {
            return _startup$1 = 0;
          });

          _addListener$1(_doc$1, "touchcancel", _passThrough);

          _addListener$1(_body$1, "touchstart", _passThrough);

          _multiListener(_addListener$1, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler);

          _multiListener(_addListener$1, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler);

          _transformProp = gsap$1.utils.checkPrefix("transform");

          _stateProps.push(_transformProp);

          _coreInitted$1 = _getTime$1();
          _resizeDelay = gsap$1.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc$1, "visibilitychange", function () {
            var w = _win$1.innerWidth,
                h = _win$1.innerHeight;

            if (_doc$1.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc$1, "DOMContentLoaded", _refreshAll, _win$1, "load", _refreshAll, _win$1, "resize", _onResize];

          _iterateAutoRefresh(_addListener$1);

          _triggers.forEach(function (trigger) {
            return trigger.enable(0, 1);
          });

          for (i = 0; i < _scrollers.length; i += 3) {
            _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 1]);

            _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 2]);
          }
        }
      }
    };

    ScrollTrigger.config = function config(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);

      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener$1) || _iterateAutoRefresh(_addListener$1, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };

    ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
      var t = _getTarget(target),
          i = _scrollers.indexOf(t),
          isViewport = _isViewport$1(t);

      if (~i) {
        _scrollers.splice(i, isViewport ? 6 : 2);
      }

      if (vars) {
        isViewport ? _proxies.unshift(_win$1, vars, _body$1, vars, _docEl$1, vars) : _proxies.unshift(t, vars);
      }
    };

    ScrollTrigger.matchMedia = function matchMedia(vars) {
      var mq, p, i, func, result;

      for (p in vars) {
        i = _media.indexOf(p);
        func = vars[p];
        _creatingMedia = p;

        if (p === "all") {
          func();
        } else {
          mq = _win$1.matchMedia(p);

          if (mq) {
            mq.matches && (result = func());

            if (~i) {
              _media[i + 1] = _combineFunc(_media[i + 1], func);
              _media[i + 2] = _combineFunc(_media[i + 2], result);
            } else {
              i = _media.length;

              _media.push(p, func, result);

              mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
            }

            _media[i + 3] = mq.matches;
          }
        }

        _creatingMedia = 0;
      }

      return _media;
    };

    ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
      query || (_media.length = 0);
      query = _media.indexOf(query);
      query >= 0 && _media.splice(query, 4);
    };

    ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(),
          offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win$1.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win$1.innerHeight;
    };

    ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(),
          size = bounds[horizontal ? _width : _height],
          offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win$1.innerWidth : (bounds.top + offset) / _win$1.innerHeight;
    };

    return ScrollTrigger;
  }();
  ScrollTrigger$1.version = "3.10.4";

  ScrollTrigger$1.saveStyles = function (targets) {
    return targets ? _toArray(targets).forEach(function (target) {
      if (target && target.style) {
        var i = _savedStyles.indexOf(target);

        i >= 0 && _savedStyles.splice(i, 5);

        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap$1.core.getCache(target), _creatingMedia);
      }
    }) : _savedStyles;
  };

  ScrollTrigger$1.revert = function (soft, media) {
    return _revertAll(!soft, media);
  };

  ScrollTrigger$1.create = function (vars, animation) {
    return new ScrollTrigger$1(vars, animation);
  };

  ScrollTrigger$1.refresh = function (safe) {
    return safe ? _onResize() : (_coreInitted$1 || ScrollTrigger$1.register()) && _refreshAll(true);
  };

  ScrollTrigger$1.update = _updateAll;
  ScrollTrigger$1.clearScrollMemory = _clearScrollMemory;

  ScrollTrigger$1.maxScroll = function (element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };

  ScrollTrigger$1.getScrollFunc = function (element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };

  ScrollTrigger$1.getById = function (id) {
    return _ids[id];
  };

  ScrollTrigger$1.getAll = function () {
    return _triggers.filter(function (t) {
      return t.vars.id !== "ScrollSmoother";
    });
  };

  ScrollTrigger$1.isScrolling = function () {
    return !!_lastScrollTime;
  };

  ScrollTrigger$1.snapDirectional = _snapDirectional;

  ScrollTrigger$1.addEventListener = function (type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };

  ScrollTrigger$1.removeEventListener = function (type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  };

  ScrollTrigger$1.batch = function (targets, vars) {
    var result = [],
        varsCopy = {},
        interval = vars.interval || 0.016,
        batchMax = vars.batchMax || 1e9,
        proxyCallback = function proxyCallback(type, callback) {
      var elements = [],
          triggers = [],
          delay = gsap$1.delayedCall(interval, function () {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function (self) {
        elements.length || delay.restart(true);
        elements.push(self.trigger);
        triggers.push(self);
        batchMax <= elements.length && delay.progress(1);
      };
    },
        p;

    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }

    if (_isFunction(batchMax)) {
      batchMax = batchMax();

      _addListener$1(ScrollTrigger$1, "refresh", function () {
        return batchMax = vars.batchMax();
      });
    }

    _toArray(targets).forEach(function (target) {
      var config = {};

      for (p in varsCopy) {
        config[p] = varsCopy[p];
      }

      config.trigger = target;
      result.push(ScrollTrigger$1.create(config));
    });

    return result;
  };

  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  },
      _allowNativePanning = function _allowNativePanning(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }

    target === _docEl$1 && _allowNativePanning(_body$1, direction);
  },
      _overflow = {
    auto: 1,
    scroll: 1
  },
      _nestedScroll = function _nestedScroll(_ref5) {
    var event = _ref5.event,
        target = _ref5.target,
        axis = _ref5.axis;

    var node = (event.changedTouches ? event.changedTouches[0] : event).target,
        cache = node._gsap || gsap$1.core.getCache(node),
        time = _getTime$1(),
        cs;

    if (!cache._isScrollT || time - cache._isScrollT > 2000) {
      while (node && node.scrollHeight <= node.clientHeight) {
        node = node.parentNode;
      }

      cache._isScroll = node && !_isViewport$1(node) && node !== target && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }

    (cache._isScroll || axis === "x") && (event._gsapAllow = true);
  },
      _inputObserver = function _inputObserver(target, type, inputs, nested) {
    return Observer.create({
      target: target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type: type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener$1(_doc$1, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener$1(_doc$1, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  },
      _inputExp = /(input|label|select|textarea)/i,
      _inputIsFocused,
      _captureInputs = function _captureInputs(e) {
    var isInput = _inputExp.test(e.target.tagName);

    if (isInput || _inputIsFocused) {
      e._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  },
      _getScrollNormalizer = function _getScrollNormalizer(vars) {
    _isObject(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";

    var _vars2 = vars,
        normalizeScrollX = _vars2.normalizeScrollX,
        momentum = _vars2.momentum,
        allowNestedScroll = _vars2.allowNestedScroll,
        self,
        maxY,
        target = _getTarget(vars.target) || _docEl$1,
        smoother = gsap$1.core.globals().ScrollSmoother,
        content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smoother && smoother.get() && smoother.get().content()),
        scrollFuncY = _getScrollFunc(target, _vertical),
        scrollFuncX = _getScrollFunc(target, _horizontal),
        scale = 1,
        initialScale = (Observer.isTouch && _win$1.visualViewport ? _win$1.visualViewport.scale * _win$1.visualViewport.width : _win$1.outerWidth) / _win$1.innerWidth,
        wheelRefresh = 0,
        resolveMomentumDuration = _isFunction(momentum) ? function () {
      return momentum(self);
    } : function () {
      return momentum || 2.8;
    },
        skipTouchMove,
        lastRefreshID,
        inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
        resumeTouchMove = function resumeTouchMove() {
      return skipTouchMove = false;
    },
        scrollClampX = _passThrough,
        scrollClampY = _passThrough,
        updateClamps = function updateClamps() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp$1(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp$1(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    },
        ignoreDrag = function ignoreDrag() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);

        var offset = _round(self.deltaY / 2),
            scroll = scrollClampY(scrollFuncY.v - offset);

        if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;
          content.style.transform = "translateY(" + -scrollFuncY.offset + "px)";
          content._gsap && (content._gsap.y = -scrollFuncY.offset + "px");
          scrollFuncY.cacheID = _scrollers.cache;

          _updateAll();
        }

        return true;
      }

      if (content) {
        content.style.transform = "translateY(0px)";
        scrollFuncY.offset = scrollFuncY.cacheID = 0;
        content._gsap && (content._gsap.y = "0px");
      }

      skipTouchMove = true;
    },
        tween,
        startScrollX,
        startScrollY,
        onStopDelayedCall,
        onResize = function onResize() {
      updateClamps();

      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };

    vars.ignoreCheck = function (e) {
      return _fixIOSBug && e.type === "touchmove" && ignoreDrag() || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };

    vars.onPress = function () {
      var prevScale = scale;
      scale = _round((_win$1.visualViewport && _win$1.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      skipTouchMove = false;
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };

    vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
      if (content) {
        content.style.transform = "translateY(0px)";
        scrollFuncY.offset = scrollFuncY.cacheID = 0;
        content._gsap && (content._gsap.y = "0px");
      }

      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(),
            currentScroll,
            endScroll;

        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }

        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);

        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap$1.to({}, {
            onUpdate: onResize,
            duration: dur
          });
        }
      }
    };

    vars.onWheel = function () {
      tween._ts && tween.pause();

      if (_getTime$1() - wheelRefresh > 1000) {
        lastRefreshID = 0;
        wheelRefresh = _getTime$1();
      }
    };

    vars.onChange = function (self, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1]));
      dy && scrollFuncY(scrollClampY(yArray[2] === dy ? startScrollY + (self.startY - self.y) : scrollFuncY() + dy - yArray[1]));

      _updateAll();
    };

    vars.onEnable = function () {
      _allowNativePanning(target, normalizeScrollX ? false : "x");

      _addListener$1(_win$1, "resize", onResize);

      inputObserver.enable();
    };

    vars.onDisable = function () {
      _allowNativePanning(target, true);

      _removeListener$1(_win$1, "resize", onResize);

      inputObserver.kill();
    };

    self = new Observer(vars);
    self.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    onStopDelayedCall = self._dc;
    tween = gsap$1.to(self, {
      ease: "power4",
      paused: true,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self;
  };

  ScrollTrigger$1.sort = function (func) {
    return _triggers.sort(func || function (a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    });
  };

  ScrollTrigger$1.observe = function (vars) {
    return new Observer(vars);
  };

  ScrollTrigger$1.normalizeScroll = function (vars) {
    if (typeof vars === "undefined") {
      return _normalizer$1;
    }

    if (vars === true && _normalizer$1) {
      return _normalizer$1.enable();
    }

    if (vars === false) {
      return _normalizer$1 && _normalizer$1.kill();
    }

    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer$1 && _normalizer$1.target === normalizer.target && _normalizer$1.kill();
    _isViewport$1(normalizer.target) && (_normalizer$1 = normalizer);
    return normalizer;
  };

  ScrollTrigger$1.core = {
    _getVelocityProp: _getVelocityProp,
    _inputObserver: _inputObserver,
    _scrollers: _scrollers,
    _proxies: _proxies,
    bridge: {
      ss: function ss() {
        _lastScrollTime || _dispatch("scrollStart");
        _lastScrollTime = _getTime$1();
      },
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP$1() && gsap$1.registerPlugin(ScrollTrigger$1);

  exports.ScrollTrigger = ScrollTrigger$1;
  exports.default = ScrollTrigger$1;

  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

})));

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	/*!
	 * ScrollToPlugin 3.10.4
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2022, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _coreInitted,
	    _window,
	    _docEl,
	    _body,
	    _toArray,
	    _config,
	    _windowExists = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _getGSAP = function _getGSAP() {
	  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _isFunction = function _isFunction(value) {
	  return typeof value === "function";
	},
	    _max = function _max(element, axis) {
	  var dim = axis === "x" ? "Width" : "Height",
	      scroll = "scroll" + dim,
	      client = "client" + dim;
	  return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
	},
	    _buildGetter = function _buildGetter(e, axis) {
	  var p = "scroll" + (axis === "x" ? "Left" : "Top");

	  if (e === _window) {
	    if (e.pageXOffset != null) {
	      p = "page" + axis.toUpperCase() + "Offset";
	    } else {
	      e = _docEl[p] != null ? _docEl : _body;
	    }
	  }

	  return function () {
	    return e[p];
	  };
	},
	    _clean = function _clean(value, index, target, targets) {
	  _isFunction(value) && (value = value(index, target, targets));

	  if (typeof value !== "object") {
	    return _isString(value) && value !== "max" && value.charAt(1) !== "=" ? {
	      x: value,
	      y: value
	    } : {
	      y: value
	    };
	  } else if (value.nodeType) {
	    return {
	      y: value,
	      x: value
	    };
	  } else {
	    var result = {},
	        p;

	    for (p in value) {
	      result[p] = p !== "onAutoKill" && _isFunction(value[p]) ? value[p](index, target, targets) : value[p];
	    }

	    return result;
	  }
	},
	    _getOffset = function _getOffset(element, container) {
	  element = _toArray(element)[0];

	  if (!element || !element.getBoundingClientRect) {
	    return console.warn("scrollTo target doesn't exist. Using 0") || {
	      x: 0,
	      y: 0
	    };
	  }

	  var rect = element.getBoundingClientRect(),
	      isRoot = !container || container === _window || container === _body,
	      cRect = isRoot ? {
	    top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
	    left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
	  } : container.getBoundingClientRect(),
	      offsets = {
	    x: rect.left - cRect.left,
	    y: rect.top - cRect.top
	  };

	  if (!isRoot && container) {
	    offsets.x += _buildGetter(container, "x")();
	    offsets.y += _buildGetter(container, "y")();
	  }

	  return offsets;
	},
	    _parseVal = function _parseVal(value, target, axis, currentVal, offset) {
	  return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
	},
	    _initCore = function _initCore() {
	  gsap = _getGSAP();

	  if (_windowExists() && gsap && document.body) {
	    _window = window;
	    _body = document.body;
	    _docEl = document.documentElement;
	    _toArray = gsap.utils.toArray;
	    gsap.config({
	      autoKillThreshold: 7
	    });
	    _config = gsap.config();
	    _coreInitted = 1;
	  }
	};

	var ScrollToPlugin = {
	  version: "3.10.4",
	  name: "scrollTo",
	  rawVars: 1,
	  register: function register(core) {
	    gsap = core;

	    _initCore();
	  },
	  init: function init(target, value, tween, index, targets) {
	    _coreInitted || _initCore();
	    var data = this,
	        snapType = gsap.getProperty(target, "scrollSnapType");
	    data.isWin = target === _window;
	    data.target = target;
	    data.tween = tween;
	    value = _clean(value, index, target, targets);
	    data.vars = value;
	    data.autoKill = !!value.autoKill;
	    data.getX = _buildGetter(target, "x");
	    data.getY = _buildGetter(target, "y");
	    data.x = data.xPrev = data.getX();
	    data.y = data.yPrev = data.getY();

	    if (snapType && snapType !== "none") {
	      data.snap = 1;
	      data.snapInline = target.style.scrollSnapType;
	      target.style.scrollSnapType = "none";
	    }

	    if (value.x != null) {
	      data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);

	      data._props.push("scrollTo_x");
	    } else {
	      data.skipX = 1;
	    }

	    if (value.y != null) {
	      data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);

	      data._props.push("scrollTo_y");
	    } else {
	      data.skipY = 1;
	    }
	  },
	  render: function render(ratio, data) {
	    var pt = data._pt,
	        target = data.target,
	        tween = data.tween,
	        autoKill = data.autoKill,
	        xPrev = data.xPrev,
	        yPrev = data.yPrev,
	        isWin = data.isWin,
	        snap = data.snap,
	        snapInline = data.snapInline,
	        x,
	        y,
	        yDif,
	        xDif,
	        threshold;

	    while (pt) {
	      pt.r(ratio, pt.d);
	      pt = pt._next;
	    }

	    x = isWin || !data.skipX ? data.getX() : xPrev;
	    y = isWin || !data.skipY ? data.getY() : yPrev;
	    yDif = y - yPrev;
	    xDif = x - xPrev;
	    threshold = _config.autoKillThreshold;

	    if (data.x < 0) {
	      data.x = 0;
	    }

	    if (data.y < 0) {
	      data.y = 0;
	    }

	    if (autoKill) {
	      if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
	        data.skipX = 1;
	      }

	      if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
	        data.skipY = 1;
	      }

	      if (data.skipX && data.skipY) {
	        tween.kill();
	        data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
	      }
	    }

	    if (isWin) {
	      _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
	    } else {
	      data.skipY || (target.scrollTop = data.y);
	      data.skipX || (target.scrollLeft = data.x);
	    }

	    if (snap && (ratio === 1 || ratio === 0)) {
	      y = target.scrollTop;
	      x = target.scrollLeft;
	      snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
	      target.scrollTop = y + 1;
	      target.scrollLeft = x + 1;
	      target.scrollTop = y;
	      target.scrollLeft = x;
	    }

	    data.xPrev = data.x;
	    data.yPrev = data.y;
	  },
	  kill: function kill(property) {
	    var both = property === "scrollTo";

	    if (both || property === "scrollTo_x") {
	      this.skipX = 1;
	    }

	    if (both || property === "scrollTo_y") {
	      this.skipY = 1;
	    }
	  }
	};
	ScrollToPlugin.max = _max;
	ScrollToPlugin.getOffset = _getOffset;
	ScrollToPlugin.buildGetter = _buildGetter;
	_getGSAP() && gsap.registerPlugin(ScrollToPlugin);

	exports.ScrollToPlugin = ScrollToPlugin;
	exports.default = ScrollToPlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

/* locomotive-scroll v4.1.3 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LocomotiveScroll = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var defaults = {
    el: document,
    name: 'scroll',
    offset: [0, 0],
    repeat: false,
    smooth: false,
    initPosition: {
      x: 0,
      y: 0
    },
    direction: 'vertical',
    gestureDirection: 'vertical',
    reloadOnContextChange: false,
    lerp: 0.1,
    "class": 'is-inview',
    scrollbarContainer: false,
    scrollbarClass: 'c-scrollbar',
    scrollingClass: 'has-scroll-scrolling',
    draggingClass: 'has-scroll-dragging',
    smoothClass: 'has-scroll-smooth',
    initClass: 'has-scroll-init',
    getSpeed: false,
    getDirection: false,
    scrollFromAnywhere: false,
    multiplier: 1,
    firefoxMultiplier: 50,
    touchMultiplier: 2,
    resetNativeScroll: true,
    tablet: {
      smooth: false,
      direction: 'vertical',
      gestureDirection: 'vertical',
      breakpoint: 1024
    },
    smartphone: {
      smooth: false,
      direction: 'vertical',
      gestureDirection: 'vertical'
    }
  };

  var _default = /*#__PURE__*/function () {
    function _default() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, _default);

      Object.assign(this, defaults, options);
      this.smartphone = defaults.smartphone;
      if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults.tablet;
      if (options.tablet) Object.assign(this.tablet, options.tablet);
      this.namespace = 'locomotive';
      this.html = document.documentElement;
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.windowMiddle = {
        x: this.windowWidth / 2,
        y: this.windowHeight / 2
      };
      this.els = {};
      this.currentElements = {};
      this.listeners = {};
      this.hasScrollTicking = false;
      this.hasCallEventSet = false;
      this.checkScroll = this.checkScroll.bind(this);
      this.checkResize = this.checkResize.bind(this);
      this.checkEvent = this.checkEvent.bind(this);
      this.instance = {
        scroll: {
          x: 0,
          y: 0
        },
        limit: {
          x: this.html.offsetWidth,
          y: this.html.offsetHeight
        },
        currentElements: this.currentElements
      };

      if (this.isMobile) {
        if (this.isTablet) {
          this.context = 'tablet';
        } else {
          this.context = 'smartphone';
        }
      } else {
        this.context = 'desktop';
      }

      if (this.isMobile) this.direction = this[this.context].direction;

      if (this.direction === 'horizontal') {
        this.directionAxis = 'x';
      } else {
        this.directionAxis = 'y';
      }

      if (this.getDirection) {
        this.instance.direction = null;
      }

      if (this.getDirection) {
        this.instance.speed = 0;
      }

      this.html.classList.add(this.initClass);
      window.addEventListener('resize', this.checkResize, false);
    }

    _createClass(_default, [{
      key: "init",
      value: function init() {
        this.initEvents();
      }
    }, {
      key: "checkScroll",
      value: function checkScroll() {
        this.dispatchScroll();
      }
    }, {
      key: "checkResize",
      value: function checkResize() {
        var _this = this;

        if (!this.resizeTick) {
          this.resizeTick = true;
          requestAnimationFrame(function () {
            _this.resize();

            _this.resizeTick = false;
          });
        }
      }
    }, {
      key: "resize",
      value: function resize() {}
    }, {
      key: "checkContext",
      value: function checkContext() {
        if (!this.reloadOnContextChange) return;
        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
        this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
        var oldContext = this.context;

        if (this.isMobile) {
          if (this.isTablet) {
            this.context = 'tablet';
          } else {
            this.context = 'smartphone';
          }
        } else {
          this.context = 'desktop';
        }

        if (oldContext != this.context) {
          var oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
          var newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;
          if (oldSmooth != newSmooth) window.location.reload();
        }
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this2 = this;

        this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
        this.setScrollTo = this.setScrollTo.bind(this);
        this.scrollToEls.forEach(function (el) {
          el.addEventListener('click', _this2.setScrollTo, false);
        });
      }
    }, {
      key: "setScrollTo",
      value: function setScrollTo(event) {
        event.preventDefault();
        this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute('href'), {
          offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
        });
      }
    }, {
      key: "addElements",
      value: function addElements() {}
    }, {
      key: "detectElements",
      value: function detectElements(hasCallEventSet) {
        var _this3 = this;

        var scrollTop = this.instance.scroll.y;
        var scrollBottom = scrollTop + this.windowHeight;
        var scrollLeft = this.instance.scroll.x;
        var scrollRight = scrollLeft + this.windowWidth;
        Object.entries(this.els).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              i = _ref2[0],
              el = _ref2[1];

          if (el && (!el.inView || hasCallEventSet)) {
            if (_this3.direction === 'horizontal') {
              if (scrollRight >= el.left && scrollLeft < el.right) {
                _this3.setInView(el, i);
              }
            } else {
              if (scrollBottom >= el.top && scrollTop < el.bottom) {
                _this3.setInView(el, i);
              }
            }
          }

          if (el && el.inView) {
            if (_this3.direction === 'horizontal') {
              var width = el.right - el.left;
              el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);

              if (scrollRight < el.left || scrollLeft > el.right) {
                _this3.setOutOfView(el, i);
              }
            } else {
              var height = el.bottom - el.top;
              el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);

              if (scrollBottom < el.top || scrollTop > el.bottom) {
                _this3.setOutOfView(el, i);
              }
            }
          }
        }); // this.els = this.els.filter((current, i) => {
        //     return current !== null;
        // });

        this.hasScrollTicking = false;
      }
    }, {
      key: "setInView",
      value: function setInView(current, i) {
        this.els[i].inView = true;
        current.el.classList.add(current["class"]);
        this.currentElements[i] = current;

        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, 'enter');

          if (!current.repeat) {
            this.els[i].call = false;
          }
        } // if (!current.repeat && !current.speed && !current.sticky) {
        //     if (!current.call || current.call && this.hasCallEventSet) {
        //        this.els[i] = null
        //     }
        // }

      }
    }, {
      key: "setOutOfView",
      value: function setOutOfView(current, i) {
        var _this4 = this;

        // if (current.repeat || current.speed !== undefined) {
        this.els[i].inView = false; // }

        Object.keys(this.currentElements).forEach(function (el) {
          el === i && delete _this4.currentElements[el];
        });

        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, 'exit');
        }

        if (current.repeat) {
          current.el.classList.remove(current["class"]);
        }
      }
    }, {
      key: "dispatchCall",
      value: function dispatchCall(current, way) {
        this.callWay = way;
        this.callValue = current.call.split(',').map(function (item) {
          return item.trim();
        });
        this.callObj = current;
        if (this.callValue.length == 1) this.callValue = this.callValue[0];
        var callEvent = new Event(this.namespace + 'call');
        this.el.dispatchEvent(callEvent);
      }
    }, {
      key: "dispatchScroll",
      value: function dispatchScroll() {
        var scrollEvent = new Event(this.namespace + 'scroll');
        this.el.dispatchEvent(scrollEvent);
      }
    }, {
      key: "setEvents",
      value: function setEvents(event, func) {
        if (!this.listeners[event]) {
          this.listeners[event] = [];
        }

        var list = this.listeners[event];
        list.push(func);

        if (list.length === 1) {
          this.el.addEventListener(this.namespace + event, this.checkEvent, false);
        }

        if (event === 'call') {
          this.hasCallEventSet = true;
          this.detectElements(true);
        }
      }
    }, {
      key: "unsetEvents",
      value: function unsetEvents(event, func) {
        if (!this.listeners[event]) return;
        var list = this.listeners[event];
        var index = list.indexOf(func);
        if (index < 0) return;
        list.splice(index, 1);

        if (list.index === 0) {
          this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
        }
      }
    }, {
      key: "checkEvent",
      value: function checkEvent(event) {
        var _this5 = this;

        var name = event.type.replace(this.namespace, '');
        var list = this.listeners[name];
        if (!list || list.length === 0) return;
        list.forEach(function (func) {
          switch (name) {
            case 'scroll':
              return func(_this5.instance);

            case 'call':
              return func(_this5.callValue, _this5.callWay, _this5.callObj);

            default:
              return func();
          }
        });
      }
    }, {
      key: "startScroll",
      value: function startScroll() {}
    }, {
      key: "stopScroll",
      value: function stopScroll() {}
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.instance.scroll = {
          x: 0,
          y: 0
        };
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this6 = this;

        window.removeEventListener('resize', this.checkResize, false);
        Object.keys(this.listeners).forEach(function (event) {
          _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
        });
        this.listeners = {};
        this.scrollToEls.forEach(function (el) {
          el.removeEventListener('click', _this6.setScrollTo, false);
        });
        this.html.classList.remove(this.initClass);
      }
    }]);

    return _default;
  }();

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var smoothscroll = createCommonjsModule(function (module, exports) {
  /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
  (function () {

    // polyfill
    function polyfill() {
      // aliases
      var w = window;
      var d = document;

      // return if scroll behavior is supported and polyfill is not forced
      if (
        'scrollBehavior' in d.documentElement.style &&
        w.__forceSmoothScrollPolyfill__ !== true
      ) {
        return;
      }

      // globals
      var Element = w.HTMLElement || w.Element;
      var SCROLL_TIME = 468;

      // object gathering original scroll methods
      var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView
      };

      // define timing method
      var now =
        w.performance && w.performance.now
          ? w.performance.now.bind(w.performance)
          : Date.now;

      /**
       * indicates if a the current browser is made by Microsoft
       * @method isMicrosoftBrowser
       * @param {String} userAgent
       * @returns {Boolean}
       */
      function isMicrosoftBrowser(userAgent) {
        var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

        return new RegExp(userAgentPatterns.join('|')).test(userAgent);
      }

      /*
       * IE has rounding bug rounding down clientHeight and clientWidth and
       * rounding up scrollHeight and scrollWidth causing false positives
       * on hasScrollableSpace
       */
      var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

      /**
       * changes scroll position inside an element
       * @method scrollElement
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */
      function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
      }

      /**
       * returns result of applying ease math function to a number
       * @method ease
       * @param {Number} k
       * @returns {Number}
       */
      function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }

      /**
       * indicates if a smooth behavior should be applied
       * @method shouldBailOut
       * @param {Number|Object} firstArg
       * @returns {Boolean}
       */
      function shouldBailOut(firstArg) {
        if (
          firstArg === null ||
          typeof firstArg !== 'object' ||
          firstArg.behavior === undefined ||
          firstArg.behavior === 'auto' ||
          firstArg.behavior === 'instant'
        ) {
          // first argument is not an object/null
          // or behavior is auto, instant or undefined
          return true;
        }

        if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
          // first argument is an object and behavior is smooth
          return false;
        }

        // throw error when behavior is not supported
        throw new TypeError(
          'behavior member of ScrollOptions ' +
            firstArg.behavior +
            ' is not a valid value for enumeration ScrollBehavior.'
        );
      }

      /**
       * indicates if an element has scrollable space in the provided axis
       * @method hasScrollableSpace
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */
      function hasScrollableSpace(el, axis) {
        if (axis === 'Y') {
          return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
        }

        if (axis === 'X') {
          return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
      }

      /**
       * indicates if an element has a scrollable overflow property in the axis
       * @method canOverflow
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */
      function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

        return overflowValue === 'auto' || overflowValue === 'scroll';
      }

      /**
       * indicates if an element can be scrolled in either axis
       * @method isScrollable
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */
      function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
        var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

        return isScrollableY || isScrollableX;
      }

      /**
       * finds scrollable parent of an element
       * @method findScrollableParent
       * @param {Node} el
       * @returns {Node} el
       */
      function findScrollableParent(el) {
        while (el !== d.body && isScrollable(el) === false) {
          el = el.parentNode || el.host;
        }

        return el;
      }

      /**
       * self invoked function that, given a context, steps through scrolling
       * @method step
       * @param {Object} context
       * @returns {undefined}
       */
      function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME;

        // avoid elapsed times higher than one
        elapsed = elapsed > 1 ? 1 : elapsed;

        // apply easing to elapsed time
        value = ease(elapsed);

        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;

        context.method.call(context.scrollable, currentX, currentY);

        // scroll more if we have not reached our destination
        if (currentX !== context.x || currentY !== context.y) {
          w.requestAnimationFrame(step.bind(w, context));
        }
      }

      /**
       * scrolls window or element with a smooth behavior
       * @method smoothScroll
       * @param {Object|Node} el
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */
      function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now();

        // define scroll context
        if (el === d.body) {
          scrollable = w;
          startX = w.scrollX || w.pageXOffset;
          startY = w.scrollY || w.pageYOffset;
          method = original.scroll;
        } else {
          scrollable = el;
          startX = el.scrollLeft;
          startY = el.scrollTop;
          method = scrollElement;
        }

        // scroll looping over a frame
        step({
          scrollable: scrollable,
          method: method,
          startTime: startTime,
          startX: startX,
          startY: startY,
          x: x,
          y: y
        });
      }

      // ORIGINAL METHODS OVERRIDES
      // w.scroll and w.scrollTo
      w.scroll = w.scrollTo = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          original.scroll.call(
            w,
            arguments[0].left !== undefined
              ? arguments[0].left
              : typeof arguments[0] !== 'object'
                ? arguments[0]
                : w.scrollX || w.pageXOffset,
            // use top prop, second argument if present or fallback to scrollY
            arguments[0].top !== undefined
              ? arguments[0].top
              : arguments[1] !== undefined
                ? arguments[1]
                : w.scrollY || w.pageYOffset
          );

          return;
        }

        // LET THE SMOOTHNESS BEGIN!
        smoothScroll.call(
          w,
          d.body,
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : w.scrollX || w.pageXOffset,
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : w.scrollY || w.pageYOffset
        );
      };

      // w.scrollBy
      w.scrollBy = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0])) {
          original.scrollBy.call(
            w,
            arguments[0].left !== undefined
              ? arguments[0].left
              : typeof arguments[0] !== 'object' ? arguments[0] : 0,
            arguments[0].top !== undefined
              ? arguments[0].top
              : arguments[1] !== undefined ? arguments[1] : 0
          );

          return;
        }

        // LET THE SMOOTHNESS BEGIN!
        smoothScroll.call(
          w,
          d.body,
          ~~arguments[0].left + (w.scrollX || w.pageXOffset),
          ~~arguments[0].top + (w.scrollY || w.pageYOffset)
        );
      };

      // Element.prototype.scroll and Element.prototype.scrollTo
      Element.prototype.scroll = Element.prototype.scrollTo = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          // if one number is passed, throw error to match Firefox implementation
          if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
            throw new SyntaxError('Value could not be converted');
          }

          original.elementScroll.call(
            this,
            // use left prop, first number argument or fallback to scrollLeft
            arguments[0].left !== undefined
              ? ~~arguments[0].left
              : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
            // use top prop, second argument or fallback to scrollTop
            arguments[0].top !== undefined
              ? ~~arguments[0].top
              : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
          );

          return;
        }

        var left = arguments[0].left;
        var top = arguments[0].top;

        // LET THE SMOOTHNESS BEGIN!
        smoothScroll.call(
          this,
          this,
          typeof left === 'undefined' ? this.scrollLeft : ~~left,
          typeof top === 'undefined' ? this.scrollTop : ~~top
        );
      };

      // Element.prototype.scrollBy
      Element.prototype.scrollBy = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          original.elementScroll.call(
            this,
            arguments[0].left !== undefined
              ? ~~arguments[0].left + this.scrollLeft
              : ~~arguments[0] + this.scrollLeft,
            arguments[0].top !== undefined
              ? ~~arguments[0].top + this.scrollTop
              : ~~arguments[1] + this.scrollTop
          );

          return;
        }

        this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        });
      };

      // Element.prototype.scrollIntoView
      Element.prototype.scrollIntoView = function() {
        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          original.scrollIntoView.call(
            this,
            arguments[0] === undefined ? true : arguments[0]
          );

          return;
        }

        // LET THE SMOOTHNESS BEGIN!
        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();

        if (scrollableParent !== d.body) {
          // reveal element inside parent
          smoothScroll.call(
            this,
            scrollableParent,
            scrollableParent.scrollLeft + clientRects.left - parentRects.left,
            scrollableParent.scrollTop + clientRects.top - parentRects.top
          );

          // reveal parent in viewport unless is fixed
          if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
            w.scrollBy({
              left: parentRects.left,
              top: parentRects.top,
              behavior: 'smooth'
            });
          }
        } else {
          // reveal element in viewport
          w.scrollBy({
            left: clientRects.left,
            top: clientRects.top,
            behavior: 'smooth'
          });
        }
      };
    }

    {
      // commonjs
      module.exports = { polyfill: polyfill };
    }

  }());
  });
  var smoothscroll_1 = smoothscroll.polyfill;

  var _default$1 = /*#__PURE__*/function (_Core) {
    _inherits(_default, _Core);

    var _super = _createSuper(_default);

    function _default() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, _default);

      _this = _super.call(this, options);

      if (_this.resetNativeScroll) {
        if (history.scrollRestoration) {
          history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
      }

      window.addEventListener('scroll', _this.checkScroll, false);

      if (window.smoothscrollPolyfill === undefined) {
        window.smoothscrollPolyfill = smoothscroll;
        window.smoothscrollPolyfill.polyfill();
      }

      return _this;
    }

    _createClass(_default, [{
      key: "init",
      value: function init() {
        this.instance.scroll.y = window.pageYOffset;
        this.addElements();
        this.detectElements();

        _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
      }
    }, {
      key: "checkScroll",
      value: function checkScroll() {
        var _this2 = this;

        _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

        if (this.getDirection) {
          this.addDirection();
        }

        if (this.getSpeed) {
          this.addSpeed();
          this.speedTs = Date.now();
        }

        this.instance.scroll.y = window.pageYOffset;

        if (Object.entries(this.els).length) {
          if (!this.hasScrollTicking) {
            requestAnimationFrame(function () {
              _this2.detectElements();
            });
            this.hasScrollTicking = true;
          }
        }
      }
    }, {
      key: "addDirection",
      value: function addDirection() {
        if (window.pageYOffset > this.instance.scroll.y) {
          if (this.instance.direction !== 'down') {
            this.instance.direction = 'down';
          }
        } else if (window.pageYOffset < this.instance.scroll.y) {
          if (this.instance.direction !== 'up') {
            this.instance.direction = 'up';
          }
        }
      }
    }, {
      key: "addSpeed",
      value: function addSpeed() {
        if (window.pageYOffset != this.instance.scroll.y) {
          this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
        } else {
          this.instance.speed = 0;
        }
      }
    }, {
      key: "resize",
      value: function resize() {
        if (Object.entries(this.els).length) {
          this.windowHeight = window.innerHeight;
          this.updateElements();
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var _this3 = this;

        this.els = {};
        var els = this.el.querySelectorAll('[data-' + this.name + ']');
        els.forEach(function (el, index) {
          var BCR = el.getBoundingClientRect();
          var cl = el.dataset[_this3.name + 'Class'] || _this3["class"];
          var id = typeof el.dataset[_this3.name + 'Id'] === 'string' ? el.dataset[_this3.name + 'Id'] : index;
          var top;
          var left;
          var offset = typeof el.dataset[_this3.name + 'Offset'] === 'string' ? el.dataset[_this3.name + 'Offset'].split(',') : _this3.offset;
          var repeat = el.dataset[_this3.name + 'Repeat'];
          var call = el.dataset[_this3.name + 'Call'];
          var target = el.dataset[_this3.name + 'Target'];
          var targetEl;

          if (target !== undefined) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }

          var targetElBCR = targetEl.getBoundingClientRect();
          top = targetElBCR.top + _this3.instance.scroll.y;
          left = targetElBCR.left + _this3.instance.scroll.x;
          var bottom = top + targetEl.offsetHeight;
          var right = left + targetEl.offsetWidth;

          if (repeat == 'false') {
            repeat = false;
          } else if (repeat != undefined) {
            repeat = true;
          } else {
            repeat = _this3.repeat;
          }

          var relativeOffset = _this3.getRelativeOffset(offset);

          top = top + relativeOffset[0];
          bottom = bottom - relativeOffset[1];
          var mappedEl = {
            el: el,
            targetEl: targetEl,
            id: id,
            "class": cl,
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            offset: offset,
            progress: 0,
            repeat: repeat,
            inView: false,
            call: call
          };
          _this3.els[id] = mappedEl;

          if (el.classList.contains(cl)) {
            _this3.setInView(_this3.els[id], id);
          }
        });
      }
    }, {
      key: "updateElements",
      value: function updateElements() {
        var _this4 = this;

        Object.entries(this.els).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              i = _ref2[0],
              el = _ref2[1];

          var top = el.targetEl.getBoundingClientRect().top + _this4.instance.scroll.y;

          var bottom = top + el.targetEl.offsetHeight;

          var relativeOffset = _this4.getRelativeOffset(el.offset);

          _this4.els[i].top = top + relativeOffset[0];
          _this4.els[i].bottom = bottom - relativeOffset[1];
        });
        this.hasScrollTicking = false;
      }
    }, {
      key: "getRelativeOffset",
      value: function getRelativeOffset(offset) {
        var relativeOffset = [0, 0];

        if (offset) {
          for (var i = 0; i < offset.length; i++) {
            if (typeof offset[i] == 'string') {
              if (offset[i].includes('%')) {
                relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
              } else {
                relativeOffset[i] = parseInt(offset[i]);
              }
            } else {
              relativeOffset[i] = offset[i];
            }
          }
        }

        return relativeOffset;
      }
      /**
       * Scroll to a desired target.
       *
       * @param  Available options :
       *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
       *          options {object} - Options object for additionnal settings.
       * @return {void}
       */

    }, {
      key: "scrollTo",
      value: function scrollTo(target) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // Parse options
        var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

        var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

        if (typeof target === 'string') {
          // Selector or boundaries
          if (target === 'top') {
            target = this.html;
          } else if (target === 'bottom') {
            target = this.html.offsetHeight - window.innerHeight;
          } else {
            target = document.querySelector(target); // If the query fails, abort

            if (!target) {
              return;
            }
          }
        } else if (typeof target === 'number') {
          // Absolute coordinate
          target = parseInt(target);
        } else if (target && target.tagName) ; else {
          console.warn('`target` parameter is not valid');
          return;
        } // We have a target that is not a coordinate yet, get it


        if (typeof target !== 'number') {
          offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
        } else {
          offset = target + offset;
        }

        var isTargetReached = function isTargetReached() {
          return parseInt(window.pageYOffset) === parseInt(offset);
        };

        if (callback) {
          if (isTargetReached()) {
            callback();
            return;
          } else {
            var onScroll = function onScroll() {
              if (isTargetReached()) {
                window.removeEventListener('scroll', onScroll);
                callback();
              }
            };

            window.addEventListener('scroll', onScroll);
          }
        }

        window.scrollTo({
          top: offset,
          behavior: options.duration === 0 ? 'auto' : 'smooth'
        });
      }
    }, {
      key: "update",
      value: function update() {
        this.addElements();
        this.detectElements();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

        window.removeEventListener('scroll', this.checkScroll, false);
      }
    }]);

    return _default;
  }(_default);

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  function E () {
    // Keep this empty so it's easier to inherit from
    // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
  }

  E.prototype = {
    on: function (name, callback, ctx) {
      var e = this.e || (this.e = {});

      (e[name] || (e[name] = [])).push({
        fn: callback,
        ctx: ctx
      });

      return this;
    },

    once: function (name, callback, ctx) {
      var self = this;
      function listener () {
        self.off(name, listener);
        callback.apply(ctx, arguments);
      }
      listener._ = callback;
      return this.on(name, listener, ctx);
    },

    emit: function (name) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
      var i = 0;
      var len = evtArr.length;

      for (i; i < len; i++) {
        evtArr[i].fn.apply(evtArr[i].ctx, data);
      }

      return this;
    },

    off: function (name, callback) {
      var e = this.e || (this.e = {});
      var evts = e[name];
      var liveEvents = [];

      if (evts && callback) {
        for (var i = 0, len = evts.length; i < len; i++) {
          if (evts[i].fn !== callback && evts[i].fn._ !== callback)
            liveEvents.push(evts[i]);
        }
      }

      // Remove event from queue to prevent memory leak
      // Suggested by https://github.com/lazd
      // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

      (liveEvents.length)
        ? e[name] = liveEvents
        : delete e[name];

      return this;
    }
  };

  var tinyEmitter = E;

  var lethargy = createCommonjsModule(function (module, exports) {
  // Generated by CoffeeScript 1.9.2
  (function() {
    var root;

    root =  exports !== null ? exports : this;

    root.Lethargy = (function() {
      function Lethargy(stability, sensitivity, tolerance, delay) {
        this.stability = stability != null ? Math.abs(stability) : 8;
        this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
        this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
        this.delay = delay != null ? delay : 150;
        this.lastUpDeltas = (function() {
          var i, ref, results;
          results = [];
          for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            results.push(null);
          }
          return results;
        }).call(this);
        this.lastDownDeltas = (function() {
          var i, ref, results;
          results = [];
          for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            results.push(null);
          }
          return results;
        }).call(this);
        this.deltasTimestamp = (function() {
          var i, ref, results;
          results = [];
          for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            results.push(null);
          }
          return results;
        }).call(this);
      }

      Lethargy.prototype.check = function(e) {
        var lastDelta;
        e = e.originalEvent || e;
        if (e.wheelDelta != null) {
          lastDelta = e.wheelDelta;
        } else if (e.deltaY != null) {
          lastDelta = e.deltaY * -40;
        } else if ((e.detail != null) || e.detail === 0) {
          lastDelta = e.detail * -40;
        }
        this.deltasTimestamp.push(Date.now());
        this.deltasTimestamp.shift();
        if (lastDelta > 0) {
          this.lastUpDeltas.push(lastDelta);
          this.lastUpDeltas.shift();
          return this.isInertia(1);
        } else {
          this.lastDownDeltas.push(lastDelta);
          this.lastDownDeltas.shift();
          return this.isInertia(-1);
        }
      };

      Lethargy.prototype.isInertia = function(direction) {
        var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
        lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
        if (lastDeltas[0] === null) {
          return direction;
        }
        if (this.deltasTimestamp[(this.stability * 2) - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[(this.stability * 2) - 1]) {
          return false;
        }
        lastDeltasOld = lastDeltas.slice(0, this.stability);
        lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
        oldSum = lastDeltasOld.reduce(function(t, s) {
          return t + s;
        });
        newSum = lastDeltasNew.reduce(function(t, s) {
          return t + s;
        });
        oldAverage = oldSum / lastDeltasOld.length;
        newAverage = newSum / lastDeltasNew.length;
        if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && (this.sensitivity < Math.abs(newAverage))) {
          return direction;
        } else {
          return false;
        }
      };

      Lethargy.prototype.showLastUpDeltas = function() {
        return this.lastUpDeltas;
      };

      Lethargy.prototype.showLastDownDeltas = function() {
        return this.lastDownDeltas;
      };

      return Lethargy;

    })();

  }).call(commonjsGlobal);
  });

  var support = (function getSupport() {
      return {
          hasWheelEvent: 'onwheel' in document,
          hasMouseWheelEvent: 'onmousewheel' in document,
          hasTouch: ('ontouchstart' in window) || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
          hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
          hasPointer: !!window.navigator.msPointerEnabled,
          hasKeyDown: 'onkeydown' in document,
          isFirefox: navigator.userAgent.indexOf('Firefox') > -1
      };
  })();

  var toString = Object.prototype.toString,
      hasOwnProperty$1 = Object.prototype.hasOwnProperty;

  var bindallStandalone = function(object) {
      if(!object) return console.warn('bindAll requires at least one argument.');

      var functions = Array.prototype.slice.call(arguments, 1);

      if (functions.length === 0) {

          for (var method in object) {
              if(hasOwnProperty$1.call(object, method)) {
                  if(typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") {
                      functions.push(method);
                  }
              }
          }
      }

      for(var i = 0; i < functions.length; i++) {
          var f = functions[i];
          object[f] = bind(object[f], object);
      }
  };

  /*
      Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
      bindAll is only needed for events binding so no need to make slow fixes for constructor
      or partial application.
  */
  function bind(func, context) {
    return function() {
      return func.apply(context, arguments);
    };
  }

  var Lethargy = lethargy.Lethargy;



  var EVT_ID = 'virtualscroll';

  var src = VirtualScroll;

  var keyCodes = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      SPACE: 32
  };

  function VirtualScroll(options) {
      bindallStandalone(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');

      this.el = window;
      if (options && options.el) {
          this.el = options.el;
          delete options.el;
      }
      this.options = objectAssign({
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: false,
          unpreventTouchClass: 'vs-touchmove-allowed',
          limitInertia: false,
          useKeyboard: true,
          useTouch: true
      }, options);

      if (this.options.limitInertia) this._lethargy = new Lethargy();

      this._emitter = new tinyEmitter();
      this._event = {
          y: 0,
          x: 0,
          deltaX: 0,
          deltaY: 0
      };
      this.touchStartX = null;
      this.touchStartY = null;
      this.bodyTouchAction = null;

      if (this.options.passive !== undefined) {
          this.listenerOptions = {passive: this.options.passive};
      }
  }

  VirtualScroll.prototype._notify = function(e) {
      var evt = this._event;
      evt.x += evt.deltaX;
      evt.y += evt.deltaY;

     this._emitter.emit(EVT_ID, {
          x: evt.x,
          y: evt.y,
          deltaX: evt.deltaX,
          deltaY: evt.deltaY,
          originalEvent: e
     });
  };

  VirtualScroll.prototype._onWheel = function(e) {
      var options = this.options;
      if (this._lethargy && this._lethargy.check(e) === false) return;
      var evt = this._event;

      // In Chrome and in Firefox (at least the new one)
      evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
      evt.deltaY = e.wheelDeltaY || e.deltaY * -1;

      // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
      // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
      if(support.isFirefox && e.deltaMode == 1) {
          evt.deltaX *= options.firefoxMultiplier;
          evt.deltaY *= options.firefoxMultiplier;
      }

      evt.deltaX *= options.mouseMultiplier;
      evt.deltaY *= options.mouseMultiplier;

      this._notify(e);
  };

  VirtualScroll.prototype._onMouseWheel = function(e) {
      if (this.options.limitInertia && this._lethargy.check(e) === false) return;

      var evt = this._event;

      // In Safari, IE and in Chrome if 'wheel' isn't defined
      evt.deltaX = (e.wheelDeltaX) ? e.wheelDeltaX : 0;
      evt.deltaY = (e.wheelDeltaY) ? e.wheelDeltaY : e.wheelDelta;

      this._notify(e);
  };

  VirtualScroll.prototype._onTouchStart = function(e) {
      var t = (e.targetTouches) ? e.targetTouches[0] : e;
      this.touchStartX = t.pageX;
      this.touchStartY = t.pageY;
  };

  VirtualScroll.prototype._onTouchMove = function(e) {
      var options = this.options;
      if(options.preventTouch
          && !e.target.classList.contains(options.unpreventTouchClass)) {
          e.preventDefault();
      }

      var evt = this._event;

      var t = (e.targetTouches) ? e.targetTouches[0] : e;

      evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
      evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;

      this.touchStartX = t.pageX;
      this.touchStartY = t.pageY;

      this._notify(e);
  };

  VirtualScroll.prototype._onKeyDown = function(e) {
      var evt = this._event;
      evt.deltaX = evt.deltaY = 0;
      var windowHeight = window.innerHeight - 40;

      switch(e.keyCode) {
          case keyCodes.LEFT:
          case keyCodes.UP:
              evt.deltaY = this.options.keyStep;
              break;

          case keyCodes.RIGHT:
          case keyCodes.DOWN:
              evt.deltaY = - this.options.keyStep;
              break;
          case  e.shiftKey:
              evt.deltaY = windowHeight;
              break;
          case keyCodes.SPACE:
              evt.deltaY = - windowHeight;
              break;
          default:
              return;
      }

      this._notify(e);
  };

  VirtualScroll.prototype._bind = function() {
      if(support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
      if(support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);

      if(support.hasTouch && this.options.useTouch) {
          this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
          this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
      }

      if(support.hasPointer && support.hasTouchWin) {
          this.bodyTouchAction = document.body.style.msTouchAction;
          document.body.style.msTouchAction = 'none';
          this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
          this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
      }

      if(support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
  };

  VirtualScroll.prototype._unbind = function() {
      if(support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
      if(support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);

      if(support.hasTouch) {
          this.el.removeEventListener('touchstart', this._onTouchStart);
          this.el.removeEventListener('touchmove', this._onTouchMove);
      }

      if(support.hasPointer && support.hasTouchWin) {
          document.body.style.msTouchAction = this.bodyTouchAction;
          this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
          this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
      }

      if(support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
  };

  VirtualScroll.prototype.on = function(cb, ctx) {
    this._emitter.on(EVT_ID, cb, ctx);

    var events = this._emitter.e;
    if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
  };

  VirtualScroll.prototype.off = function(cb, ctx) {
    this._emitter.off(EVT_ID, cb, ctx);

    var events = this._emitter.e;
    if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
  };

  VirtualScroll.prototype.reset = function() {
      var evt = this._event;
      evt.x = 0;
      evt.y = 0;
  };

  VirtualScroll.prototype.destroy = function() {
      this._emitter.off();
      this._unbind();
  };

  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  function getTranslate(el) {
    var translate = {};
    if (!window.getComputedStyle) return;
    var style = getComputedStyle(el);
    var transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);

    if (mat) {
      translate.x = mat ? parseFloat(mat[1].split(', ')[12]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(', ')[13]) : 0;
    } else {
      mat = transform.match(/^matrix\((.+)\)$/);
      translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
    }

    return translate;
  }

  /**
   * Returns an array containing all the parent nodes of the given node
   * @param  {object} node
   * @return {array} parent nodes
   */
  function getParents(elem) {
    // Set up a parent array
    var parents = []; // Push each parent element to the array

    for (; elem && elem !== document; elem = elem.parentNode) {
      parents.push(elem);
    } // Return our parent array


    return parents;
  } // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/

  /**
   * https://github.com/gre/bezier-easing
   * BezierEasing - use bezier curve for transition easing function
   * by Gaëtan Renaudeau 2014 - 2015 – MIT License
   */

  // These values are established by empiricism with tests (tradeoff: performance VS precision)
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 0.001;
  var SUBDIVISION_PRECISION = 0.0000001;
  var SUBDIVISION_MAX_ITERATIONS = 10;

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  var float32ArraySupported = typeof Float32Array === 'function';

  function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
  function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
  function C (aA1)      { return 3.0 * aA1; }

  // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
  function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

  // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
  function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

  function binarySubdivide (aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }

  function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
   for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
     var currentSlope = getSlope(aGuessT, mX1, mX2);
     if (currentSlope === 0.0) {
       return aGuessT;
     }
     var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
     aGuessT -= currentX / currentSlope;
   }
   return aGuessT;
  }

  function LinearEasing (x) {
    return x;
  }

  var src$1 = function bezier (mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      throw new Error('bezier x values must be in [0, 1] range');
    }

    if (mX1 === mY1 && mX2 === mY2) {
      return LinearEasing;
    }

    // Precompute samples table
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }

    function getTForX (aX) {
      var intervalStart = 0.0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;

      // Interpolate to provide an initial guess for t
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;

      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function BezierEasing (x) {
      // Because JavaScript number are imprecise, we should guarantee the extremes are right.
      if (x === 0) {
        return 0;
      }
      if (x === 1) {
        return 1;
      }
      return calcBezier(getTForX(x), mY1, mY2);
    };
  };

  var keyCodes$1 = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    TAB: 9,
    PAGEUP: 33,
    PAGEDOWN: 34,
    HOME: 36,
    END: 35
  };

  var _default$2 = /*#__PURE__*/function (_Core) {
    _inherits(_default, _Core);

    var _super = _createSuper(_default);

    function _default() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, _default);

      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      }

      window.scrollTo(0, 0);
      _this = _super.call(this, options);
      if (_this.inertia) _this.lerp = _this.inertia * 0.1;
      _this.isScrolling = false;
      _this.isDraggingScrollbar = false;
      _this.isTicking = false;
      _this.hasScrollTicking = false;
      _this.parallaxElements = {};
      _this.stop = false;
      _this.scrollbarContainer = options.scrollbarContainer;
      _this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
      window.addEventListener('keydown', _this.checkKey, false);
      return _this;
    }

    _createClass(_default, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        this.html.classList.add(this.smoothClass);
        this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
        this.instance = _objectSpread2({
          delta: {
            x: this.initPosition.x,
            y: this.initPosition.y
          },
          scroll: {
            x: this.initPosition.x,
            y: this.initPosition.y
          }
        }, this.instance);
        this.vs = new src({
          el: this.scrollFromAnywhere ? document : this.el,
          mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
          firefoxMultiplier: this.firefoxMultiplier,
          touchMultiplier: this.touchMultiplier,
          useKeyboard: false,
          passive: true
        });
        this.vs.on(function (e) {
          if (_this2.stop) {
            return;
          }

          if (!_this2.isDraggingScrollbar) {
            requestAnimationFrame(function () {
              _this2.updateDelta(e);

              if (!_this2.isScrolling) _this2.startScrolling();
            });
          }
        });
        this.setScrollLimit();
        this.initScrollBar();
        this.addSections();
        this.addElements();
        this.checkScroll(true);
        this.transformElements(true, true);

        _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
      }
    }, {
      key: "setScrollLimit",
      value: function setScrollLimit() {
        this.instance.limit.y = this.el.offsetHeight - this.windowHeight;

        if (this.direction === 'horizontal') {
          var totalWidth = 0;
          var nodes = this.el.children;

          for (var i = 0; i < nodes.length; i++) {
            totalWidth += nodes[i].offsetWidth;
          }

          this.instance.limit.x = totalWidth - this.windowWidth;
        }
      }
    }, {
      key: "startScrolling",
      value: function startScrolling() {
        this.startScrollTs = Date.now(); // Record timestamp

        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
      }
    }, {
      key: "stopScrolling",
      value: function stopScrolling() {
        cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping
        //Pevent scrollbar glitch/locking

        this.startScrollTs = undefined;

        if (this.scrollToRaf) {
          cancelAnimationFrame(this.scrollToRaf);
          this.scrollToRaf = null;
        }

        this.isScrolling = false;
        this.instance.scroll.y = Math.round(this.instance.scroll.y);
        this.html.classList.remove(this.scrollingClass);
      }
    }, {
      key: "checkKey",
      value: function checkKey(e) {
        var _this3 = this;

        if (this.stop) {
          // If we are stopped, we don't want any scroll to occur because of a keypress
          // Prevent tab to scroll to activeElement
          if (e.keyCode == keyCodes$1.TAB) {
            requestAnimationFrame(function () {
              // Make sure native scroll is always at top of page
              _this3.html.scrollTop = 0;
              document.body.scrollTop = 0;
              _this3.html.scrollLeft = 0;
              document.body.scrollLeft = 0;
            });
          }

          return;
        }

        switch (e.keyCode) {
          case keyCodes$1.TAB:
            // Do not remove the RAF
            // It allows to override the browser's native scrollTo, which is essential
            requestAnimationFrame(function () {
              // Make sure native scroll is always at top of page
              _this3.html.scrollTop = 0;
              document.body.scrollTop = 0;
              _this3.html.scrollLeft = 0;
              document.body.scrollLeft = 0; // Request scrollTo on the focusedElement, putting it at the center of the screen

              _this3.scrollTo(document.activeElement, {
                offset: -window.innerHeight / 2
              });
            });
            break;

          case keyCodes$1.UP:
            if (this.isActiveElementScrollSensitive()) {
              this.instance.delta[this.directionAxis] -= 240;
            }

            break;

          case keyCodes$1.DOWN:
            if (this.isActiveElementScrollSensitive()) {
              this.instance.delta[this.directionAxis] += 240;
            }

            break;

          case keyCodes$1.PAGEUP:
            this.instance.delta[this.directionAxis] -= window.innerHeight;
            break;

          case keyCodes$1.PAGEDOWN:
            this.instance.delta[this.directionAxis] += window.innerHeight;
            break;

          case keyCodes$1.HOME:
            this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
            break;

          case keyCodes$1.END:
            this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
            break;

          case keyCodes$1.SPACE:
            if (this.isActiveElementScrollSensitive()) {
              if (e.shiftKey) {
                this.instance.delta[this.directionAxis] -= window.innerHeight;
              } else {
                this.instance.delta[this.directionAxis] += window.innerHeight;
              }
            }

            break;

          default:
            return;
        }

        if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
        this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

        this.isScrolling = true;
        this.checkScroll();
        this.html.classList.add(this.scrollingClass);
      }
    }, {
      key: "isActiveElementScrollSensitive",
      value: function isActiveElementScrollSensitive() {
        return !(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement) && !(document.activeElement instanceof HTMLButtonElement) && !(document.activeElement instanceof HTMLSelectElement);
      }
    }, {
      key: "checkScroll",
      value: function checkScroll() {
        var _this4 = this;

        var forced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (forced || this.isScrolling || this.isDraggingScrollbar) {
          if (!this.hasScrollTicking) {
            this.checkScrollRaf = requestAnimationFrame(function () {
              return _this4.checkScroll();
            });
            this.hasScrollTicking = true;
          }

          this.updateScroll();
          var distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
          var timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms

          if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) {
            this.stopScrolling();
          }

          Object.entries(this.sections).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                i = _ref2[0],
                section = _ref2[1];

            if (section.persistent || _this4.instance.scroll[_this4.directionAxis] > section.offset[_this4.directionAxis] && _this4.instance.scroll[_this4.directionAxis] < section.limit[_this4.directionAxis]) {
              if (_this4.direction === 'horizontal') {
                _this4.transform(section.el, -_this4.instance.scroll[_this4.directionAxis], 0);
              } else {
                _this4.transform(section.el, 0, -_this4.instance.scroll[_this4.directionAxis]);
              }

              if (!section.inView) {
                section.inView = true;
                section.el.style.opacity = 1;
                section.el.style.pointerEvents = 'all';
                section.el.setAttribute("data-".concat(_this4.name, "-section-inview"), '');
              }
            } else {
              if (section.inView || forced) {
                section.inView = false;
                section.el.style.opacity = 0;
                section.el.style.pointerEvents = 'none';
                section.el.removeAttribute("data-".concat(_this4.name, "-section-inview"));
              }

              _this4.transform(section.el, 0, 0);
            }
          });

          if (this.getDirection) {
            this.addDirection();
          }

          if (this.getSpeed) {
            this.addSpeed();
            this.speedTs = Date.now();
          }

          this.detectElements();
          this.transformElements();

          if (this.hasScrollbar) {
            var scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];

            if (this.direction === 'horizontal') {
              this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
            } else {
              this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
            }
          }

          _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

          this.hasScrollTicking = false;
        }
      }
    }, {
      key: "resize",
      value: function resize() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.checkContext();
        this.windowMiddle = {
          x: this.windowWidth / 2,
          y: this.windowHeight / 2
        };
        this.update();
      }
    }, {
      key: "updateDelta",
      value: function updateDelta(e) {
        var delta;
        var gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;

        if (gestureDirection === 'both') {
          delta = e.deltaX + e.deltaY;
        } else if (gestureDirection === 'vertical') {
          delta = e.deltaY;
        } else if (gestureDirection === 'horizontal') {
          delta = e.deltaX;
        } else {
          delta = e.deltaY;
        }

        this.instance.delta[this.directionAxis] -= delta * this.multiplier;
        if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
        if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
      }
    }, {
      key: "updateScroll",
      value: function updateScroll(e) {
        if (this.isScrolling || this.isDraggingScrollbar) {
          this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
        } else {
          if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) {
            this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
          } else if (this.instance.scroll.y < 0) {
            this.setScroll(this.instance.scroll[this.directionAxis], 0);
          } else {
            this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
          }
        }
      }
    }, {
      key: "addDirection",
      value: function addDirection() {
        if (this.instance.delta.y > this.instance.scroll.y) {
          if (this.instance.direction !== 'down') {
            this.instance.direction = 'down';
          }
        } else if (this.instance.delta.y < this.instance.scroll.y) {
          if (this.instance.direction !== 'up') {
            this.instance.direction = 'up';
          }
        }

        if (this.instance.delta.x > this.instance.scroll.x) {
          if (this.instance.direction !== 'right') {
            this.instance.direction = 'right';
          }
        } else if (this.instance.delta.x < this.instance.scroll.x) {
          if (this.instance.direction !== 'left') {
            this.instance.direction = 'left';
          }
        }
      }
    }, {
      key: "addSpeed",
      value: function addSpeed() {
        if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) {
          this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
        } else {
          this.instance.speed = 0;
        }
      }
    }, {
      key: "initScrollBar",
      value: function initScrollBar() {
        this.scrollbar = document.createElement('span');
        this.scrollbarThumb = document.createElement('span');
        this.scrollbar.classList.add("".concat(this.scrollbarClass));
        this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
        this.scrollbar.append(this.scrollbarThumb);

        if (this.scrollbarContainer) {
          this.scrollbarContainer.append(this.scrollbar);
        } else {
          document.body.append(this.scrollbar);
        } // Scrollbar Events


        this.getScrollBar = this.getScrollBar.bind(this);
        this.releaseScrollBar = this.releaseScrollBar.bind(this);
        this.moveScrollBar = this.moveScrollBar.bind(this);
        this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
        window.addEventListener('mouseup', this.releaseScrollBar);
        window.addEventListener('mousemove', this.moveScrollBar); // Set scrollbar values

        this.hasScrollbar = false;

        if (this.direction == 'horizontal') {
          if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
            return;
          }
        } else {
          if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
            return;
          }
        }

        this.hasScrollbar = true;
        this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
        this.scrollbarHeight = this.scrollbarBCR.height;
        this.scrollbarWidth = this.scrollbarBCR.width;

        if (this.direction === 'horizontal') {
          this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
        } else {
          this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
        }

        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
        this.scrollBarLimit = {
          x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
          y: this.scrollbarHeight - this.scrollbarThumbBCR.height
        };
      }
    }, {
      key: "reinitScrollBar",
      value: function reinitScrollBar() {
        this.hasScrollbar = false;

        if (this.direction == 'horizontal') {
          if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
            return;
          }
        } else {
          if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
            return;
          }
        }

        this.hasScrollbar = true;
        this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
        this.scrollbarHeight = this.scrollbarBCR.height;
        this.scrollbarWidth = this.scrollbarBCR.width;

        if (this.direction === 'horizontal') {
          this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
        } else {
          this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
        }

        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
        this.scrollBarLimit = {
          x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
          y: this.scrollbarHeight - this.scrollbarThumbBCR.height
        };
      }
    }, {
      key: "destroyScrollBar",
      value: function destroyScrollBar() {
        this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar);
        window.removeEventListener('mouseup', this.releaseScrollBar);
        window.removeEventListener('mousemove', this.moveScrollBar);
        this.scrollbar.remove();
      }
    }, {
      key: "getScrollBar",
      value: function getScrollBar(e) {
        this.isDraggingScrollbar = true;
        this.checkScroll();
        this.html.classList.remove(this.scrollingClass);
        this.html.classList.add(this.draggingClass);
      }
    }, {
      key: "releaseScrollBar",
      value: function releaseScrollBar(e) {
        this.isDraggingScrollbar = false;

        if (this.isScrolling) {
          this.html.classList.add(this.scrollingClass);
        }

        this.html.classList.remove(this.draggingClass);
      }
    }, {
      key: "moveScrollBar",
      value: function moveScrollBar(e) {
        var _this5 = this;

        if (this.isDraggingScrollbar) {
          requestAnimationFrame(function () {
            var x = (e.clientX - _this5.scrollbarBCR.left) * 100 / _this5.scrollbarWidth * _this5.instance.limit.x / 100;
            var y = (e.clientY - _this5.scrollbarBCR.top) * 100 / _this5.scrollbarHeight * _this5.instance.limit.y / 100;

            if (y > 0 && y < _this5.instance.limit.y) {
              _this5.instance.delta.y = y;
            }

            if (x > 0 && x < _this5.instance.limit.x) {
              _this5.instance.delta.x = x;
            }
          });
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var _this6 = this;

        this.els = {};
        this.parallaxElements = {}; // this.sections.forEach((section, y) => {

        var els = this.el.querySelectorAll("[data-".concat(this.name, "]"));
        els.forEach(function (el, index) {
          // Try and find the target's parent section
          var targetParents = getParents(el);
          var section = Object.entries(_this6.sections).map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                key = _ref4[0],
                section = _ref4[1];

            return section;
          }).find(function (section) {
            return targetParents.includes(section.el);
          });
          var cl = el.dataset[_this6.name + 'Class'] || _this6["class"];
          var id = typeof el.dataset[_this6.name + 'Id'] === 'string' ? el.dataset[_this6.name + 'Id'] : 'el' + index;
          var top;
          var left;
          var repeat = el.dataset[_this6.name + 'Repeat'];
          var call = el.dataset[_this6.name + 'Call'];
          var position = el.dataset[_this6.name + 'Position'];
          var delay = el.dataset[_this6.name + 'Delay'];
          var direction = el.dataset[_this6.name + 'Direction'];
          var sticky = typeof el.dataset[_this6.name + 'Sticky'] === 'string';
          var speed = el.dataset[_this6.name + 'Speed'] ? parseFloat(el.dataset[_this6.name + 'Speed']) / 10 : false;
          var offset = typeof el.dataset[_this6.name + 'Offset'] === 'string' ? el.dataset[_this6.name + 'Offset'].split(',') : _this6.offset;
          var target = el.dataset[_this6.name + 'Target'];
          var targetEl;

          if (target !== undefined) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }

          var targetElBCR = targetEl.getBoundingClientRect();

          if (section === null) {
            top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
            left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
          } else {
            if (!section.inView) {
              top = targetElBCR.top - getTranslate(section.el).y - getTranslate(targetEl).y;
              left = targetElBCR.left - getTranslate(section.el).x - getTranslate(targetEl).x;
            } else {
              top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
              left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
            }
          }

          var bottom = top + targetEl.offsetHeight;
          var right = left + targetEl.offsetWidth;
          var middle = {
            x: (right - left) / 2 + left,
            y: (bottom - top) / 2 + top
          };

          if (sticky) {
            var elBCR = el.getBoundingClientRect();
            var elTop = elBCR.top;
            var elLeft = elBCR.left;
            var elDistance = {
              x: elLeft - left,
              y: elTop - top
            };
            top += window.innerHeight;
            left += window.innerWidth;
            bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this6.directionAxis];
            right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this6.directionAxis];
            middle = {
              x: (right - left) / 2 + left,
              y: (bottom - top) / 2 + top
            };
          }

          if (repeat == 'false') {
            repeat = false;
          } else if (repeat != undefined) {
            repeat = true;
          } else {
            repeat = _this6.repeat;
          }

          var relativeOffset = [0, 0];

          if (offset) {
            if (_this6.direction === 'horizontal') {
              for (var i = 0; i < offset.length; i++) {
                if (typeof offset[i] == 'string') {
                  if (offset[i].includes('%')) {
                    relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowWidth / 100);
                  } else {
                    relativeOffset[i] = parseInt(offset[i]);
                  }
                } else {
                  relativeOffset[i] = offset[i];
                }
              }

              left = left + relativeOffset[0];
              right = right - relativeOffset[1];
            } else {
              for (var i = 0; i < offset.length; i++) {
                if (typeof offset[i] == 'string') {
                  if (offset[i].includes('%')) {
                    relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowHeight / 100);
                  } else {
                    relativeOffset[i] = parseInt(offset[i]);
                  }
                } else {
                  relativeOffset[i] = offset[i];
                }
              }

              top = top + relativeOffset[0];
              bottom = bottom - relativeOffset[1];
            }
          }

          var mappedEl = {
            el: el,
            id: id,
            "class": cl,
            section: section,
            top: top,
            middle: middle,
            bottom: bottom,
            left: left,
            right: right,
            offset: offset,
            progress: 0,
            repeat: repeat,
            inView: false,
            call: call,
            speed: speed,
            delay: delay,
            position: position,
            target: targetEl,
            direction: direction,
            sticky: sticky
          };
          _this6.els[id] = mappedEl;

          if (el.classList.contains(cl)) {
            _this6.setInView(_this6.els[id], id);
          }

          if (speed !== false || sticky) {
            _this6.parallaxElements[id] = mappedEl;
          }
        }); // });
      }
    }, {
      key: "addSections",
      value: function addSections() {
        var _this7 = this;

        this.sections = {};
        var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));

        if (sections.length === 0) {
          sections = [this.el];
        }

        sections.forEach(function (section, index) {
          var id = typeof section.dataset[_this7.name + 'Id'] === 'string' ? section.dataset[_this7.name + 'Id'] : 'section' + index;
          var sectionBCR = section.getBoundingClientRect();
          var offset = {
            x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
            y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
          };
          var limit = {
            x: offset.x + sectionBCR.width + window.innerWidth * 2,
            y: offset.y + sectionBCR.height + window.innerHeight * 2
          };
          var persistent = typeof section.dataset[_this7.name + 'Persistent'] === 'string';
          section.setAttribute('data-scroll-section-id', id);
          var mappedSection = {
            el: section,
            offset: offset,
            limit: limit,
            inView: false,
            persistent: persistent,
            id: id
          };
          _this7.sections[id] = mappedSection;
        });
      }
    }, {
      key: "transform",
      value: function transform(element, x, y, delay) {
        var transform;

        if (!delay) {
          transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
        } else {
          var start = getTranslate(element);
          var lerpX = lerp(start.x, x, delay);
          var lerpY = lerp(start.y, y, delay);
          transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
        }

        element.style.webkitTransform = transform;
        element.style.msTransform = transform;
        element.style.transform = transform;
      }
    }, {
      key: "transformElements",
      value: function transformElements(isForced) {
        var _this8 = this;

        var setAllElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var scrollRight = this.instance.scroll.x + this.windowWidth;
        var scrollBottom = this.instance.scroll.y + this.windowHeight;
        var scrollMiddle = {
          x: this.instance.scroll.x + this.windowMiddle.x,
          y: this.instance.scroll.y + this.windowMiddle.y
        };
        Object.entries(this.parallaxElements).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              i = _ref6[0],
              current = _ref6[1];

          var transformDistance = false;

          if (isForced) {
            transformDistance = 0;
          }

          if (current.inView || setAllElements) {
            switch (current.position) {
              case 'top':
                transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                break;

              case 'elementTop':
                transformDistance = (scrollBottom - current.top) * -current.speed;
                break;

              case 'bottom':
                transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollBottom + _this8.windowHeight) * current.speed;
                break;

              case 'left':
                transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                break;

              case 'elementLeft':
                transformDistance = (scrollRight - current.left) * -current.speed;
                break;

              case 'right':
                transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollRight + _this8.windowHeight) * current.speed;
                break;

              default:
                transformDistance = (scrollMiddle[_this8.directionAxis] - current.middle[_this8.directionAxis]) * -current.speed;
                break;
            }
          }

          if (current.sticky) {
            if (current.inView) {
              if (_this8.direction === 'horizontal') {
                transformDistance = _this8.instance.scroll.x - current.left + window.innerWidth;
              } else {
                transformDistance = _this8.instance.scroll.y - current.top + window.innerHeight;
              }
            } else {
              if (_this8.direction === 'horizontal') {
                if (_this8.instance.scroll.x < current.left - window.innerWidth && _this8.instance.scroll.x < current.left - window.innerWidth / 2) {
                  transformDistance = 0;
                } else if (_this8.instance.scroll.x > current.right && _this8.instance.scroll.x > current.right + 100) {
                  transformDistance = current.right - current.left + window.innerWidth;
                } else {
                  transformDistance = false;
                }
              } else {
                if (_this8.instance.scroll.y < current.top - window.innerHeight && _this8.instance.scroll.y < current.top - window.innerHeight / 2) {
                  transformDistance = 0;
                } else if (_this8.instance.scroll.y > current.bottom && _this8.instance.scroll.y > current.bottom + 100) {
                  transformDistance = current.bottom - current.top + window.innerHeight;
                } else {
                  transformDistance = false;
                }
              }
            }
          }

          if (transformDistance !== false) {
            if (current.direction === 'horizontal' || _this8.direction === 'horizontal' && current.direction !== 'vertical') {
              _this8.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
            } else {
              _this8.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
            }
          }
        });
      }
      /**
       * Scroll to a desired target.
       *
       * @param  Available options :
       *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
       *          options {object} - Options object for additionnal settings.
       * @return {void}
       */

    }, {
      key: "scrollTo",
      value: function scrollTo(target) {
        var _this9 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // Parse options
        var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

        var duration = !isNaN(parseInt(options.duration)) ? parseInt(options.duration) : 1000; // Duration of the scroll animation in milliseconds

        var easing = options.easing || [0.25, 0.0, 0.35, 1.0]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/

        var disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true

        var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

        easing = src$1.apply(void 0, _toConsumableArray(easing));

        if (typeof target === 'string') {
          // Selector or boundaries
          if (target === 'top') {
            target = 0;
          } else if (target === 'bottom') {
            target = this.instance.limit.y;
          } else if (target === 'left') {
            target = 0;
          } else if (target === 'right') {
            target = this.instance.limit.x;
          } else {
            target = document.querySelector(target); // If the query fails, abort

            if (!target) {
              return;
            }
          }
        } else if (typeof target === 'number') {
          // Absolute coordinate
          target = parseInt(target);
        } else if (target && target.tagName) ; else {
          console.warn('`target` parameter is not valid');
          return;
        } // We have a target that is not a coordinate yet, get it


        if (typeof target !== 'number') {
          // Verify the given target belongs to this scroll scope
          var targetInScope = getParents(target).includes(this.el);

          if (!targetInScope) {
            // If the target isn't inside our main element, abort any action
            return;
          } // Get target offset from top


          var targetBCR = target.getBoundingClientRect();
          var offsetTop = targetBCR.top;
          var offsetLeft = targetBCR.left; // Try and find the target's parent section

          var targetParents = getParents(target);
          var parentSection = targetParents.find(function (candidate) {
            return Object.entries(_this9.sections) // Get sections associative array as a regular array
            .map(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  key = _ref8[0],
                  section = _ref8[1];

              return section;
            }) // map to section only (we dont need the key here)
            .find(function (section) {
              return section.el == candidate;
            }); // finally find the section that matches the candidate
          });
          var parentSectionOffset = 0;

          if (parentSection) {
            parentSectionOffset = getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
          } else {
            // if no parent section is found we need to use instance scroll directly
            parentSectionOffset = -this.instance.scroll[this.directionAxis];
          } // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)


          if (this.direction === 'horizontal') {
            offset = offsetLeft + offset - parentSectionOffset;
          } else {
            offset = offsetTop + offset - parentSectionOffset;
          }
        } else {
          offset = target + offset;
        } // Actual scrollto
        // ==========================================================================
        // Setup


        var scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
        var scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis])); // Make sure our target is in the scroll boundaries

        var scrollDiff = scrollTarget - scrollStart;

        var render = function render(p) {
          if (disableLerp) {
            if (_this9.direction === 'horizontal') {
              _this9.setScroll(scrollStart + scrollDiff * p, _this9.instance.delta.y);
            } else {
              _this9.setScroll(_this9.instance.delta.x, scrollStart + scrollDiff * p);
            }
          } else {
            _this9.instance.delta[_this9.directionAxis] = scrollStart + scrollDiff * p;
          }
        }; // Prepare the scroll


        this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)

        this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

        this.startScrolling(); // Restart the scroll
        // Start the animation loop

        var start = Date.now();

        var loop = function loop() {
          var p = (Date.now() - start) / duration; // Animation progress

          if (p > 1) {
            // Animation ends
            render(1);
            _this9.animatingScroll = false;
            if (duration == 0) _this9.update();
            if (callback) callback();
          } else {
            _this9.scrollToRaf = requestAnimationFrame(loop);
            render(easing(p));
          }
        };

        loop();
      }
    }, {
      key: "update",
      value: function update() {
        this.setScrollLimit();
        this.addSections();
        this.addElements();
        this.detectElements();
        this.updateScroll();
        this.transformElements(true);
        this.reinitScrollBar();
        this.checkScroll(true);
      }
    }, {
      key: "startScroll",
      value: function startScroll() {
        this.stop = false;
      }
    }, {
      key: "stopScroll",
      value: function stopScroll() {
        this.stop = true;
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.instance = _objectSpread2(_objectSpread2({}, this.instance), {}, {
          scroll: {
            x: x,
            y: y
          },
          delta: {
            x: x,
            y: y
          },
          speed: 0
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

        this.stopScrolling();
        this.html.classList.remove(this.smoothClass);
        this.vs.destroy();
        this.destroyScrollBar();
        window.removeEventListener('keydown', this.checkKey, false);
      }
    }]);

    return _default;
  }(_default);

  var Smooth = /*#__PURE__*/function () {
    function Smooth() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Smooth);

      this.options = options; // Override default options with given ones

      Object.assign(this, defaults, options);
      this.smartphone = defaults.smartphone;
      if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults.tablet;
      if (options.tablet) Object.assign(this.tablet, options.tablet);
      if (!this.smooth && this.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible');
      if (!this.tablet.smooth && this.tablet.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)');
      if (!this.smartphone.smooth && this.smartphone.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)');
      this.init();
    }

    _createClass(Smooth, [{
      key: "init",
      value: function init() {
        this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
        this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;

        if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) {
          this.scroll = new _default$2(this.options);
        } else {
          this.scroll = new _default$1(this.options);
        }

        this.scroll.init();

        if (window.location.hash) {
          // Get the hash without the '#' and find the matching element
          var id = window.location.hash.slice(1, window.location.hash.length);
          var target = document.getElementById(id); // If found, scroll to the element

          if (target) this.scroll.scrollTo(target);
        }
      }
    }, {
      key: "update",
      value: function update() {
        this.scroll.update();
      }
    }, {
      key: "start",
      value: function start() {
        this.scroll.startScroll();
      }
    }, {
      key: "stop",
      value: function stop() {
        this.scroll.stopScroll();
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(target, options) {
        this.scroll.scrollTo(target, options);
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.scroll.setScroll(x, y);
      }
    }, {
      key: "on",
      value: function on(event, func) {
        this.scroll.setEvents(event, func);
      }
    }, {
      key: "off",
      value: function off(event, func) {
        this.scroll.unsetEvents(event, func);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.scroll.destroy();
      }
    }]);

    return Smooth;
  }();

  return Smooth;

})));
