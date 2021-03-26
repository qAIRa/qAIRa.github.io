(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{121:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return l})),t.d(r,"Highlight",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),i=(t(0),t(133)),c={id:"pickerErrors",title:"Picker Errors",sidebar_label:"Picker Errors"},a={unversionedId:"pickerErrors",id:"pickerErrors",isDocsHomePage:!1,title:"Picker Errors",description:"pickerErrors.js",source:"@site/WEBresources/pickerErrors.md",slug:"/pickerErrors",permalink:"/WEBresources/pickerErrors",version:"current",sidebar_label:"Picker Errors",sidebar:"WEBresources",previous:{title:"Navigation Bar Client",permalink:"/WEBresources/navBarClient"},next:{title:"View Controller",permalink:"/WEBresources/viewController"}},l=[],s=function(e){var r=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#000000",padding:"0.2rem"}},r)},p={toc:l,Highlight:s};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pickerErrors.js")),Object(i.b)("p",null,"This file shows the functions that return UI selection errors."),Object(i.b)("h4",{id:"openmodaldatealert"},Object(i.b)(s,{color:"#b2e4f7",mdxType:"Highlight"},"openModalDateAlert()")),Object(i.b)("p",null,"Returns an error message for an invalid date selected by the user."),Object(i.b)("h4",{id:"openmodalemptyalert"},Object(i.b)(s,{color:"#b2e4f7",mdxType:"Highlight"},"openModalEmptyAlert()")),Object(i.b)("p",null,"Returns an error message when user inputs are misssing."))}u.isMDXComponent=!0},133:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=n,d=u["".concat(c,".").concat(f)]||u[f]||b[f]||i;return t?o.a.createElement(d,a(a({ref:r},s),{},{components:t})):o.a.createElement(d,a({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);