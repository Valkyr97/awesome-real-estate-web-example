_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"5Yp1":function(e,t,n){"use strict";var r=n("nKUr"),o=n("YFqc"),a=n.n(o),i=function(){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(a.a,{href:"/",children:Object(r.jsx)("a",{className:"navbar-brand",children:"My Company"})}),Object(r.jsx)("div",{className:"navbar",children:Object(r.jsx)("ul",{className:"navbar-nav mr-auto ml-auto",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(a.a,{href:"/catalog",children:Object(r.jsx)("a",{className:"nav-link",children:"Houses Catalog"})})})})})]})})},c=n("8lYe");t.a=function(e){var t=e.children,n=e.footer,o=void 0===n||n;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{}),t,o&&Object(r.jsx)(c.a,{})]})}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var l=f[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=o.props[l],p=r[l]||new Set;"name"===l&&i||!p.has(d)?(p.add(d),r[l]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},"8lYe":function(e,t,n){"use strict";var r=n("nKUr");t.a=function(){return Object(r.jsx)("footer",{className:"bg-dark text-white text-center",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("h1",{children:"\xa9 Bienes Raices Company"})})})}},Aiso:function(e,t,n){e.exports=n("dQHF")},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Teph:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/houses/[id]",function(){return n("xfkt")}])},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),c=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",d=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,v=e.replace,m=e.shallow,b=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=a.Children.only(h),x=g&&"object"===typeof g&&g.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),j=r(w,2),_=j[0],O=j[1],k=a.default.useCallback((function(e){_(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,_]);(0,a.useEffect)((function(){var e=O&&t&&(0,i.isLocalURL)(f),r="undefined"!==typeof y?y:n&&n.locale,o=u[f+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,f,p,{locale:r})}),[p,f,O,y,t,n]);var A={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,f,p,v,m,b,y)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,f,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var M="undefined"!==typeof y?y:n&&n.locale,S=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,M,n&&n.locales,n&&n.domainLocales);A.href=S||(0,i.addBasePath)((0,i.addLocale)(p,M,n&&n.defaultLocale))}return a.default.cloneElement(g,A)};t.default=d},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var r=n("J4zp"),o=n("RIqP"),a=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,c=void 0!==a&&a,d=e.priority,p=void 0!==d&&d,h=e.loading,m=e.className,b=e.quality,y=e.width,j=e.height,_=e.objectFit,O=e.objectPosition,k=e.loader,A=void 0===k?w:k,M=(0,i.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),S=n?"responsive":"intrinsic",E=!1;"unsized"in M?(E=Boolean(M.unsized),delete M.unsized):"layout"in M&&(M.layout&&(S=M.layout),delete M.layout);0;var I=!p&&("lazy"===h||"undefined"===typeof h);t&&t.startsWith("data:")&&(c=!0,I=!1);var N,C,z,q=(0,f.useIntersection)({rootMargin:"200px",disabled:!I}),P=r(q,2),R=P[0],H=P[1],L=!I||H,D=x(y),Y=x(j),U=x(b),W={visibility:L?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:O};if("undefined"!==typeof D&&"undefined"!==typeof Y&&"fill"!==S){var T=Y/D,F=isNaN(T)?"100%":"".concat(100*T,"%");"responsive"===S?(N={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},C={display:"block",boxSizing:"border-box",paddingTop:F}):"intrinsic"===S?(N={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},C={boxSizing:"border-box",display:"block",maxWidth:"100%"},z='<svg width="'.concat(D,'" height="').concat(Y,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===S&&(N={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:D,height:Y})}else"undefined"===typeof D&&"undefined"===typeof Y&&"fill"===S&&(N={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var B={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};L&&(B=function(e){var t=e.src,n=e.unoptimized,r=e.layout,a=e.width,i=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){var r=o(n.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(e){return parseInt(e[2])}));if(r.length){var a=.01*Math.min.apply(Math,o(r));return{widths:g.filter((function(e){return e>=v[0]*a})),kind:"w"}}return{widths:g,kind:"w"}}if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:v,kind:"w"};return{widths:o(new Set([e,2*e].map((function(e){return g.find((function(t){return t>=e}))||g[g.length-1]})))),kind:"x"}}(a,r,c),l=u.widths,d=u.kind,f=l.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:l.map((function(e,n){return"".concat(s({src:t,quality:i,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:i,width:l[f]})}}({src:t,unoptimized:c,layout:S,width:D,quality:U,sizes:n,loader:A}));E&&(N=void 0,C=void 0,W=void 0);return s.default.createElement("div",{style:N},C?s.default.createElement("div",{style:C},z?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(z))}):null):null,s.default.createElement("img",Object.assign({},M,B,{decoding:"async",className:m,ref:R,style:W})),p?s.default.createElement(u.default,null,s.default.createElement("link",{key:"__nimg-"+B.src+B.srcSet+B.sizes,rel:"preload",as:"image",href:B.srcSet?void 0:B.src,imagesrcset:B.srcSet,imagesizes:B.sizes})):null)};var i=a(n("8OQS")),c=a(n("pVnL")),s=a(n("q1tI")),u=a(n("8Kt/")),l=n("dEHY"),d=n("UWYU"),f=n("vNVm");var p=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,a=["auto=format","fit=max","w="+r],i="";o&&a.push("q="+o);a.length&&(i="?"+a.join("&"));return"".concat(t).concat(j(n)).concat(i)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(j(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(j(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||d.imageConfigDefault,v=h.deviceSizes,m=h.imageSizes,b=h.loader,y=h.path,g=(h.domains,[].concat(o(v),o(m)));function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function w(e){var t=p.get(b);if(t)return t((0,c.default)({root:y},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(b))}function j(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),g.sort((function(e,t){return e-t}))},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),d=l[0],f=l[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){if(!i&&!d){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[d]),[p,d]};var o=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map},xfkt:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return u}));var r=n("nKUr"),o=n("Aiso"),a=n.n(o),i=n("YFqc"),c=n.n(i),s=n("5Yp1"),u=!0;t.default=function(e){var t=e.house;return Object(r.jsx)(s.a,{dark:!0,children:Object(r.jsx)("div",{className:"card bg-dark text-light py-2",children:Object(r.jsx)("div",{className:"col-md-12",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-5",children:Object(r.jsxs)("div",{className:"card-block",children:[Object(r.jsx)(a.a,{className:"card-img",src:"/".concat(t.img),width:500,height:500,layout:"responsive"}),Object(r.jsx)(c.a,{href:"/form?id=".concat(t.id),as:"".concat(t.id),children:Object(r.jsx)("button",{type:"button",className:"btn btn-primary btn-lg btn-block my-2",children:"Book a guided tour"})})]})}),Object(r.jsx)("div",{className:"col-md-7 card-block",children:t.int.map((function(e,t){return Object(r.jsx)(a.a,{className:"pb-2",src:"/interiores/".concat(e),width:480,height:400,layout:"responsive"},t)}))})]})})})})}}},[["Teph",0,2,1]]]);