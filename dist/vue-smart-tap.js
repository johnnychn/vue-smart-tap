!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var a in n)("object"==typeof exports?exports:e)[a]=n[a]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){"use strict";function a(e,t){if(e.disabled)return!1;var n=e.tapObj;if(!0===n.long){if(n.option.remain<=0)return!1;n.option.remain-=1}var a=!0===t?36e5:n.option.time;return e.time<=a&&Math.abs(n.distanceX)<10&&Math.abs(n.distanceY)<10}function r(e,t){var n=t.tapObj;if(n.e=e,"touchstart"===e.type){var a=e.touches[0];n.pageX=a.pageX,n.pageY=a.pageY,n.clientX=a.clientX,n.clientY=a.clientY}else n.pageX=e.pageX,n.pageY=e.pageY,n.clientX=e.clientX,n.clientY=e.clientY;n.distanceX=0,n.distanceY=0,t.time=+new Date,!0===n.long&&(n.iv=setInterval(o,n.option.longTime,e,t))}function i(e,t){var n=t.tapObj;if(n.e=e,f)n.distanceX=n.pageX-e.pageX,n.distanceY=n.pageY-e.pageY;else{var a=e.changedTouches[0];n.distanceX=n.pageX-a.pageX,n.distanceY=n.pageY-a.pageY}}function o(e,t){var n=t.tapObj;t.time=+new Date-t.time,a(t,n.long)&&(t.time=+new Date,t.handler(n.e))}function u(e,t){var n=t.tapObj;if(!0===n.long)return void setInterval(n.iv);if("touchend"===e.type){var r=e.changedTouches[0];n.distanceX=n.pageX-r.pageX,n.distanceY=n.pageY-r.pageY}else n.distanceX=n.pageX-e.pageX,n.distanceY=n.pageY-e.pageY;t.time=+new Date-t.time,a(t,n.long)&&t.handler(e)}function c(e){var t=arguments.length;if(e=Object(e),t<2||null==e)return e;for(var n=1;n<t;n++){var a=arguments[n];for(var r in a)e[r]=a[r]}return e}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"VueSmartTap",function(){return l});var l={},f=function(){for(var e=navigator.userAgent,t=["Android","iPhone","Windows Phone","iPad","iPod"],n=!0,a=0;a<t.length;a++)if(e.indexOf(t[a])>0){n=!1;break}return n}();l.install=function(e,t){var n=c({time:300,longTime:1e3,count:1},t);e.directive("tap",{bind:function(e,t){e.tapObj={long:"long"===t.arg,option:c({remain:n.count},n)},!0===e.tapObj.long&&(e.style["user-select"]="none",e.style["-webkit-user-select"]="none",e.style["-ms-user-select"]="none"),e.handler=function(n){var a=t.value;if(!a&&e.href&&!t.modifiers.prevent)return window.location=e.href;a.event=n;var r=a.event.target.tagName.toLocaleLowerCase();if(f||(a.tapObj=e.tapObj),"input"===r||"textarea"===r)return a.event.target.focus();t.value.call(this,n)};var a=void 0,o=void 0,l=void 0;f?(a="mousedown",l="mousemove",o="mouseup"):(a="touchstart",l="touchmove",o="touchend"),e.addEventListener(a,function(t){r(t,e)},!1),e.addEventListener(l,function(t){i(t,e)},!1),e.addEventListener(o,function(t){try{Object.defineProperty(t,"currentTarget",{value:e,writable:!0,enumerable:!0,configurable:!0})}catch(t){t.currentTarget=e}return t.preventDefault(),u(t,e)},!1)},componentUpdated:function(e,t){e.tapObj={},e.handler=function(n){var a=t.value;if(!a&&e.href&&!t.modifiers.prevent)return window.location=e.href;a.event=n,f||(a.tapObj=e.tapObj),t.value.call(this.e)}},unbind:function(e){e.handler=function(){}}})},t.default=l}])});