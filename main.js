(()=>{"use strict";var n,t,e,o,r,a,i,A,s,c,l,f,u,p,d={365:(n,t,e)=>{e.d(t,{A:()=>b});var o=e(354),r=e.n(o),a=e(314),i=e.n(a),A=e(417),s=e.n(A),c=new URL(e(747),e.b),l=new URL(e(553),e.b),f=new URL(e(844),e.b),u=new URL(e(972),e.b),p=new URL(e(740),e.b),d=new URL(e(380),e.b),C=i()(r()),h=s()(c),g=s()(l),E=s()(f),B=s()(u),y=s()(p),m=s()(d);C.push([n.id,`:root {\n  --font-hierarchy: "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\n/* font-faces setup with styles and weight mean\n  can use the family definition in body and only the styles in the css design */\n\n@font-face {\n  font-family: "Roboto";\n  src: url(${h});\n  font-style: normal;\n  font-weight: 400;\n}\n@font-face {\n  font-family: "Roboto";\n  src: url(${g});\n  font-style: italic;\n  font-weight: 400;\n}\n@font-face {\n  font-family: "Roboto";\n  src: url(${E});\n  font-style: normal;\n  font-weight: 700;\n}\n@font-face {\n  font-family: "Roboto";\n  src: url(${B});\n  font-style: italic;\n  font-weight: 700;\n}\n@font-face {\n  font-family: "Roboto";\n  src: url(${y});\n  font-style: normal;\n  font-weight: 100;\n}\n@font-face {\n  font-family: "Roboto";\n  src: url(${m});\n  font-style: italic;\n  font-weight: 100;\n}\n\nbody {\n  margin: 0;\n  font-family: "Roboto";\n  /* Contains 3 sections arranged vertically, top aligned */\n  display: grid;\n  justify-content: stretch;\n  align-content: start;\n  place-items: center;\n}\n\nheader {\n  background-color: aquamarine;\n}\n\n#top-image {\n  width: 50vw;\n}\n\n#header-text-container {\n}\n\n.socials-link {\n  width: 30px;\n}\n\nmain {\n  background-color: azure;\n}\n\nfooter {\n  background-color: aquamarine;\n}\n\n#thin-italic {\n  font-size: 40px;\n  font-style: italic;\n  font-weight: 100;\n}\n\n#regular {\n  font-size: 40px;\n  font-weight: 400;\n}\n\n#bold {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n#normal {\n  font-size: 40px;\n}\n\n/* tablet size, player windows above each other */\n@media (width > 640px) and (width <= 1024px) {\n  body {\n    background-color: red;\n  }\n}\n\n/* tablet size, player windows above each other */\n@media (width <= 640px) {\n  body {\n    background-color: green;\n  }\n}\n`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE;uCACqC;AACvC;;AAEA;+EAC+E;;AAE/E;EACE,qBAAqB;EACrB,4CAAyC;EACzC,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,4CAAwC;EACxC,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,4CAAsC;EACtC,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,4CAA4C;EAC5C,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,4CAAsC;EACtC,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,4CAA4C;EAC5C,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,qBAAqB;EACrB,yDAAyD;EACzD,aAAa;EACb,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,WAAW;AACb;;AAEA;AACA;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA,iDAAiD;AACjD;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA,iDAAiD;AACjD;EACE;IACE,uBAAuB;EACzB;AACF",sourcesContent:[':root {\n  --font-hierarchy: "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\n/* font-faces setup with styles and weight mean\n  can use the family definition in body and only the styles in the css design */\n\n@font-face {\n  font-family: "Roboto";\n  src: url(assets/fonts/Roboto-Regular.ttf);\n  font-style: normal;\n  font-weight: 400;\n}\n@font-face {\n  font-family: "Roboto";\n  src: url(assets/fonts/Roboto-Italic.ttf);\n  font-style: italic;\n  font-weight: 400;\n}\n@font-face {\n  font-family: "Roboto";\n  src: url(assets/fonts/Roboto-Bold.ttf);\n  font-style: normal;\n  font-weight: 700;\n}\n@font-face {\n  font-family: "Roboto";\n  src: url(assets/fonts/Roboto-BoldItalic.ttf);\n  font-style: italic;\n  font-weight: 700;\n}\n@font-face {\n  font-family: "Roboto";\n  src: url(assets/fonts/Roboto-Thin.ttf);\n  font-style: normal;\n  font-weight: 100;\n}\n@font-face {\n  font-family: "Roboto";\n  src: url(assets/fonts/Roboto-ThinItalic.ttf);\n  font-style: italic;\n  font-weight: 100;\n}\n\nbody {\n  margin: 0;\n  font-family: "Roboto";\n  /* Contains 3 sections arranged vertically, top aligned */\n  display: grid;\n  justify-content: stretch;\n  align-content: start;\n  place-items: center;\n}\n\nheader {\n  background-color: aquamarine;\n}\n\n#top-image {\n  width: 50vw;\n}\n\n#header-text-container {\n}\n\n.socials-link {\n  width: 30px;\n}\n\nmain {\n  background-color: azure;\n}\n\nfooter {\n  background-color: aquamarine;\n}\n\n#thin-italic {\n  font-size: 40px;\n  font-style: italic;\n  font-weight: 100;\n}\n\n#regular {\n  font-size: 40px;\n  font-weight: 400;\n}\n\n#bold {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n#normal {\n  font-size: 40px;\n}\n\n/* tablet size, player windows above each other */\n@media (width > 640px) and (width <= 1024px) {\n  body {\n    background-color: red;\n  }\n}\n\n/* tablet size, player windows above each other */\n@media (width <= 640px) {\n  body {\n    background-color: green;\n  }\n}\n'],sourceRoot:""}]);const b=C},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},i=[],A=0;A<n.length;A++){var s=n[A],c=o.base?s[0]+o.base:s[0],l=a[c]||0,f="".concat(c," ").concat(l);a[c]=l+1;var u=e(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var d=r(p,o);o.byIndex=A,t.splice(A,0,{identifier:f,updater:d,references:1})}i.push(f)}return i}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=e(a[i]);t[A].references--}for(var s=o(n,r),c=0;c<a.length;c++){var l=e(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},844:(n,t,e)=>{n.exports=e.p+"f80816a5455d171f948d.ttf"},972:(n,t,e)=>{n.exports=e.p+"87d61cea6fe1d235d4a8.ttf"},553:(n,t,e)=>{n.exports=e.p+"87f3afe16a8c3c370634.ttf"},747:(n,t,e)=>{n.exports=e.p+"fc2b5060f7accec5cf74.ttf"},740:(n,t,e)=>{n.exports=e.p+"a732a12eb07742232407.ttf"},380:(n,t,e)=>{n.exports=e.p+"9d2ca34eae96e77c6eef.ttf"}},C={};function h(n){var t=C[n];if(void 0!==t)return t.exports;var e=C[n]={id:n,exports:{}};return d[n](e,e.exports,h),e.exports}h.m=d,h.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return h.d(t,{a:t}),t},h.d=(n,t)=>{for(var e in t)h.o(t,e)&&!h.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var t=h.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var e=t.getElementsByTagName("script");if(e.length)for(var o=e.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=e[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(72),t=h.n(n),e=h(825),o=h.n(e),r=h(659),a=h.n(r),i=h(56),A=h.n(i),s=h(540),c=h.n(s),l=h(113),f=h.n(l),u=h(365),(p={}).styleTagTransform=f(),p.setAttributes=A(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=c(),t()(u.A,p),u.A&&u.A.locals&&u.A.locals,h.p,h.p})();
//# sourceMappingURL=main.js.map