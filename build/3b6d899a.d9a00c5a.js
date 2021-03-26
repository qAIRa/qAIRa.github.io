(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{133:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return O}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),o=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},u=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=o(a),u=n,O=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?b.a.createElement(O,l(l({ref:t},i),{},{components:a})):b.a.createElement(O,l({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<r;i++)s[i]=a[i];return b.a.createElement.apply(null,s)}return b.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"Highlight",(function(){return i})),a.d(t,"default",(function(){return c}));var n=a(3),b=a(7),r=(a(0),a(133)),s={id:"post_business_helperMod",title:"Post Business Helper Module",sidebar_label:"Post Business Helper Module"},l={unversionedId:"post_business_helperMod",id:"post_business_helperMod",isDocsHomePage:!1,title:"Post Business Helper Module",description:"The file shows the functions that register and request data related to the Post Business Helper table.",source:"@site/APIresources/business.post_business_helper.md",slug:"/post_business_helperMod",permalink:"/APIresources/post_business_helperMod",version:"current",sidebar_label:"Post Business Helper Module",sidebar:"APIresources",previous:{title:"Get Business Helper Module",permalink:"/APIresources/get_business_helperMod"},next:{title:"qHAWAX Module",permalink:"/APIresources/qhawaxMod"}},p=[],i=function(e){var t=e.children,a=e.color;return Object(r.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#000000",padding:"0.2rem"}},t)},o={toc:p,Highlight:i};function c(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The file shows the functions that register and request data related to the Post Business Helper table."),Object(r.b)("h4",{id:"post_business_helperupdateoffsetsfromproductidqhawax_name-offsets"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.updateOffsetsFromProductID(qhawax_name, offsets)")),Object(r.b)("p",null,"Helper Gas Sensor function to save offsets from qHAWAX ID"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_name")," (",Object(r.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"offsets")," (",Object(r.b)("em",{parentName:"p"},"Json"),") - Json of offset variable of qHAWAX"))),Object(r.b)("h4",{id:"post_business_helperupdatecontrolledoffsetsfromproductidqhawax_name-controlled_offsets"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.updateControlledOffsetsFromProductID(qhawax_name, controlled_offsets)")),Object(r.b)("p",null,"Helper Gas Sensor function to save controlled offsets from qHAWAX ID"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_name")," (",Object(r.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"offsets")," (",Object(r.b)("em",{parentName:"p"},"Json"),") - Json of offset variable of qHAWAX"))),Object(r.b)("h4",{id:"post_business_helperupdatenoncontrolledoffsetsfromproductidqhawax_name-non_controlled_offsets"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.updateNonControlledOffsetsFromProductID(qhawax_name, non_controlled_offsets)")),Object(r.b)("p",null,"Helper Gas Sensor function to save non controlled offsets from qHAWAX ID."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_name")," (",Object(r.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"offsets")," (",Object(r.b)("em",{parentName:"p"},"Json"),") - Json of offset variable of qHAWAX"))),Object(r.b)("h4",{id:"post_business_helperupdatemainincaqhawaxtablenew_main_inca-qhawax_name"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.updateMainIncaQhawaxTable(new_main_inca, qhawax_name)")),Object(r.b)("p",null,"Helper qHAWAX function to save main inca value in qHAWAX table"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_name")," (",Object(r.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"new_main_inca")," (",Object(r.b)("em",{parentName:"p"},"integer"),") - qHAWAX main inca"))),Object(r.b)("h4",{id:"post_business_helperupdatemainincaqhawaxinstallationtablenew_main_inca-qhawax_name"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.updateMainIncaQhawaxInstallationTable(new_main_inca, qhawax_name)")),Object(r.b)("p",null,"Helper qHAWAX function to save main inca value in qHAWAX Installation table"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_name")," (",Object(r.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"new_main_inca")," (",Object(r.b)("em",{parentName:"p"},"integer"),") - qHAWAX main inca"))),Object(r.b)("h4",{id:"post_business_helpersavestatusoffqhawaxtableqhawax_name"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.saveStatusOffQhawaxTable(qhawax_name)")),Object(r.b)("p",null,"Sets qHAWAX OFF in qHAWAX table."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"qhawax_name")," (",Object(r.b)("em",{parentName:"li"},"string"),") - qHAWAX name")),Object(r.b)("h4",{id:"post_business_helpersavestatusoffqhawaxinstallationtableqhawax_nameqhawax_lost_timestamp"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.saveStatusOffQhawaxInstallationTable(qhawax_name,qhawax_lost_timestamp)")),Object(r.b)("p",null,"Sets qHAWAX OFF in qHAWAX Installation table."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_name")," (",Object(r.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_lost_timestamp")," (",Object(r.b)("em",{parentName:"p"},"timestamp"),") - qHAWAX last time off"))),Object(r.b)("h4",{id:"post_business_helpersavestatusontableqhawax_name"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.saveStatusOnTable(qhawax_name)")),Object(r.b)("p",null,"Sets qHAWAX ON in qHAWAX table."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"qhawax_name")," (",Object(r.b)("em",{parentName:"li"},"string"),") - qHAWAX name")),Object(r.b)("h4",{id:"post_business_helpersaveturnonlasttimeqhawax_name"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.saveTurnOnLastTime(qhawax_name)")),Object(r.b)("p",null,"Sets qHAWAX ON in qHAWAX Installation table."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"qhawax_name")," (",Object(r.b)("em",{parentName:"li"},"string"),") - qHAWAX name")),Object(r.b)("h4",{id:"post_business_helperturnonaftercalibrationqhawax_name"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.turnOnAfterCalibration(qhawax_name)")),Object(r.b)("p",null,"Sets qHAWAX ON in qHAWAX Installation table."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"qhawax_name")," (",Object(r.b)("em",{parentName:"li"},"string"),") - qHAWAX name")),Object(r.b)("h4",{id:"post_business_helpersetoccupiedqhawaxqhawax_id"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.setOccupiedQhawax(qhawax_id)")),Object(r.b)("p",null,"Updates qHAWAX Availability to Occupied."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"qhawax_id")," (",Object(r.b)("em",{parentName:"li"},"integer"),") - qHAWAX ID")),Object(r.b)("h4",{id:"post_business_helpersetmodecustomerqhawax_id"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.setModeCustomer(qhawax_id)")),Object(r.b)("p",null,"Updates qHAWAX mode to Customer."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"qhawax_id")," (",Object(r.b)("em",{parentName:"li"},"integer"),") - qHAWAX ID")),Object(r.b)("h4",{id:"post_business_helpersaveendworkfielddateqhawax_idend_date"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.saveEndWorkFieldDate(qhawax_id,end_date)")),Object(r.b)("p",null,"Saves End Work in Field."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_id")," (",Object(r.b)("em",{parentName:"p"},"integer"),") - qHAWAX ID")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"end_date")," (",Object(r.b)("em",{parentName:"p"},"timestamp"),") - qHAWAX installation end date"))),Object(r.b)("h4",{id:"post_business_helpersetavailableqhawaxqhawax_id"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.setAvailableQhawax(qhawax_id)")),Object(r.b)("p",null,"Updates qHAWAX installation state in qHAWAX table."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"qhawax_id")," (",Object(r.b)("em",{parentName:"li"},"integer"),") - qHAWAX ID")),Object(r.b)("h4",{id:"post_business_helperchangemodeqhawax_name-mode"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.changeMode(qhawax_name, mode)")),Object(r.b)("p",null,"Changes to other mode."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"qhawax_name")," (",Object(r.b)("em",{parentName:"li"},"string"),") - qHAWAX name")),Object(r.b)("h4",{id:"post_business_helperupdateqhawaxinstallationdata"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.updateQhawaxInstallation(data)")),Object(r.b)("p",null,"Updates qHAWAX in field."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"data")," (",Object(r.b)("em",{parentName:"li"},"Json"),") - qHAWAX installation detail")),Object(r.b)("h4",{id:"post_business_helpercreateqhawaxqhawax_id-qhawax_nameqhawax_type"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.createQhawax(qhawax_id, qhawax_name,qhawax_type")),Object(r.b)("p",null,"Creates a qHAWAX module."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_id")," (",Object(r.b)("em",{parentName:"p"},"integer"),") - qHAWAX ID")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_name")," (",Object(r.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_type")," (",Object(r.b)("em",{parentName:"p"},"string"),") - qHAWAX type"))),Object(r.b)("h4",{id:"post_business_helperinsertdefaultoffsetslast_gas_sensor_id-qhawax_name"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.insertDefaultOffsets(last_gas_sensor_id, qhawax_name)")),Object(r.b)("p",null,"Inserts a default offset."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"last_gas_sensor_id")," (",Object(r.b)("em",{parentName:"p"},"integer"),") - last gas sensor ID")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_name")," (",Object(r.b)("em",{parentName:"p"},"string"),") - qHAWAX name"))),Object(r.b)("h4",{id:"post_business_helpercreatecompanyjson_company"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.createCompany(json_company)")),Object(r.b)("p",null,"Inserts a new company."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"json_company")," (",Object(r.b)("em",{parentName:"li"},"Json"),") - json company")),Object(r.b)("h4",{id:"post_business_helperstorenewqhawaxinstallationdata"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.storeNewQhawaxInstallation(data)")),Object(r.b)("p",null,"Inserts new qHAWAX in Field."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"data")," (",Object(r.b)("em",{parentName:"li"},"Json"),") - qHAWAX Installation detail")),Object(r.b)("h4",{id:"post_business_helperwritebinnacleqhawax_namedescriptionperson_in_charge"},Object(r.b)(i,{color:"#b2e4f7",mdxType:"Highlight"},"post_business_helper.writeBinnacle(qhawax_name,description,person_in_charge)")),Object(r.b)("p",null,"Writes Binnacle."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"qhawax_name")," (",Object(r.b)("em",{parentName:"p"},"string"),") - qHAWAX name")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"observation_type")," (",Object(r.b)("em",{parentName:"p"},"string"),") - observation type")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"description")," (",Object(r.b)("em",{parentName:"p"},"string"),") - bitacora description")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"person_in_charge")," (",Object(r.b)("em",{parentName:"p"},"string"),") - person in charge"))))}c.isMDXComponent=!0}}]);