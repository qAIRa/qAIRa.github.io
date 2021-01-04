(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{131:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),m=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(a),s=r,O=u["".concat(p,".").concat(s)]||u[s]||i[s]||b;return a?n.a.createElement(O,l(l({ref:t},c),{},{components:a})):n.a.createElement(O,l({ref:t},c))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,p=new Array(b);p[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var c=2;c<b;c++)p[c]=a[c];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"Highlight",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),b=(a(0),a(131)),p={id:"post_data_helperMod",title:"Post Data Helper Module",sidebar_label:"Post Data Helper Module"},l={unversionedId:"post_data_helperMod",id:"post_data_helperMod",isDocsHomePage:!1,title:"Post Data Helper Module",description:"The file shows the functions that register and request data related to the Post Data Helper table.",source:"@site/APIresources/data.post_data_helper.md",slug:"/post_data_helperMod",permalink:"build/APIresources/post_data_helperMod",version:"current",sidebar_label:"Post Data Helper Module",sidebar:"APIresources",previous:{title:"Get Data Helper Module",permalink:"build/APIresources/get_data_helperMod"},next:{title:"Processed Measurement Module",permalink:"build/APIresources/processed_measurementMod"}},o=[],c=function(e){var t=e.children,a=e.color;return Object(b.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#000000",padding:"0.2rem"}},t)},m={toc:o,Highlight:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The file shows the functions that register and request data related to the Post Data Helper table."),Object(b.b)("h4",{id:"post_data_helperstoreairqualitydataindbdata"},Object(b.b)(c,{color:"#b2e4f7",mdxType:"Highlight"},"post_data_helper.storeAirQualityDataInDB(data)")),Object(b.b)("p",null,"Helper function to store new records in Air Quality Measurement table."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("p",null,"Json input of following Air Measurement fields:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"ID")," (",Object(b.b)("em",{parentName:"p"},"string"),") - qHAWAX ID")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"timestamp")," (",Object(b.b)("em",{parentName:"p"},"string"),") - timestamp with time zone")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"CO")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of CO measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"CO_ug_m3")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of CO measurement in ug/m3")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"H2S")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of H2S measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"H2S_ug_m3")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of H2S measurement in ug/m3")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"SO2")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of SO2 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"SO2_ug_m3")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of SO2 measurement in ug/m3")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"NO2")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of NO2 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"NO2_ug_m3")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of NO2 measurement in ug/m3")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"O3")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of O3 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"O3_ug_m3")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of O3 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"PM25")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of PM25 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"PM1")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of PM1 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"PM10")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of PM10 measurement in ppb")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"UV")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of UV measurement")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"UVA")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of UVA measurement")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"UVB")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of UVB measurement")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"spl")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of noise measurement")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"humidity")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of humidity measurement")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"pressure")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of pressure measurement")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"temperature")," (",Object(b.b)("em",{parentName:"p"},"double"),") - value of temperature measurement in Celsius"))),Object(b.b)("h4",{id:"post_data_helperstoregasincaindbdata"},Object(b.b)(c,{color:"#b2e4f7",mdxType:"Highlight"},"post_data_helper.storeGasIncaInDB(data)")),Object(b.b)("p",null,"Helper function to record GAS INCA measurement."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"data")," (",Object(b.b)("em",{parentName:"li"},"json"),") - gas Inca measurement")),Object(b.b)("h4",{id:"post_data_helperstoreprocesseddataindbdata"},Object(b.b)(c,{color:"#b2e4f7",mdxType:"Highlight"},"post_data_helper.storeProcessedDataInDB(data)")),Object(b.b)("p",null,"Helper Processed Measurement function to store Processed Data."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"data")," (",Object(b.b)("em",{parentName:"li"},"json"),") - Processed measurement detail")),Object(b.b)("h4",{id:"post_data_helperstorevalidprocesseddataindbdata-qhawax_id"},Object(b.b)(c,{color:"#b2e4f7",mdxType:"Highlight"},"post_data_helper.storeValidProcessedDataInDB(data, qhawax_id)")),Object(b.b)("p",null,"Helper Processed Measurement function to insert Valid Processed Data."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"data")," (",Object(b.b)("em",{parentName:"p"},"json"),") - Processed measurement valid detail")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"qhawax_id")," (",Object(b.b)("em",{parentName:"p"},"integer"),") - qHAWAX ID"))),Object(b.b)("h4",{id:"post_data_helperstoreairdailyqualitydataindbdata"},Object(b.b)(c,{color:"#b2e4f7",mdxType:"Highlight"},"post_data_helper.storeAirDailyQualityDataInDB(data)")),Object(b.b)("p",null,"Helper Daily Air Measurement function to store air daily measurement."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Parameters")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"data")," (",Object(b.b)("em",{parentName:"li"},"json"),") - json of average of daily measurement")))}u.isMDXComponent=!0}}]);