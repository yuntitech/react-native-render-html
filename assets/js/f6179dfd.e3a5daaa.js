(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6487],{9037:function(e,t,n){"use strict";n.d(t,{Zo:function(){return je},kt:function(){return Ee}});var a=n(2784),r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function l(e){var t={exports:{}};return e(t,t.exports),t.exports}var i=function(e){return e&&e.Math==Math&&e},o=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof r&&r)||function(){return this}()||Function("return this")(),d=function(e){try{return!!e()}catch(e){return!0}},p=!d((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),m={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,c={f:s&&!m.call({1:2},1)?function(e){var t=s(this,e);return!!t&&t.enumerable}:m},u=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},h={}.toString,k="".split,N=d((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return h.call(e).slice(8,-1)}(e)?k.call(e,""):Object(e)}:Object,f=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},g=function(e){return N(f(e))},b=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!b(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!b(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!b(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!b(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")},y={}.hasOwnProperty,O=function(e,t){return y.call(e,t)},C=o.document,D=b(C)&&b(C.createElement),M=!p&&!d((function(){return 7!=Object.defineProperty(D?C.createElement("div"):{},"a",{get:function(){return 7}}).a})),w=Object.getOwnPropertyDescriptor,x={f:p?w:function(e,t){if(e=g(e),t=v(t,!0),M)try{return w(e,t)}catch(e){}if(O(e,t))return u(!c.f.call(e,t),e[t])}},T=function(e){if(!b(e))throw TypeError(String(e)+" is not an object");return e},_=Object.defineProperty,S={f:p?_:function(e,t,n){if(T(e),t=v(t,!0),T(n),M)try{return _(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},j=p?function(e,t,n){return S.f(e,t,u(1,n))}:function(e,t,n){return e[t]=n,e},P=function(e,t){try{j(o,e,t)}catch(l){o[e]=t}return t},I=o["__core-js_shared__"]||P("__core-js_shared__",{}),E=Function.toString;"function"!=typeof I.inspectSource&&(I.inspectSource=function(e){return E.call(e)});var R,W,A,F=I.inspectSource,L=o.WeakMap,q="function"==typeof L&&/native code/.test(F(L)),z=l((function(e){(e.exports=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),H=0,X=Math.random(),Z=z("keys"),G={};if(q){var $=I.state||(I.state=new(0,o.WeakMap)),K=$.get,U=$.has,V=$.set;R=function(e,t){return t.facade=e,V.call($,e,t),t},W=function(e){return K.call($,e)||{}},A=function(e){return U.call($,e)}}else{var Y=Z.state||(Z.state="Symbol("+String("state")+")_"+(++H+X).toString(36));G[Y]=!0,R=function(e,t){return t.facade=e,j(e,Y,t),t},W=function(e){return O(e,Y)?e[Y]:{}},A=function(e){return O(e,Y)}}var B={set:R,get:W,has:A,enforce:function(e){return A(e)?W(e):R(e,{})},getterFor:function(e){return function(t){var n;if(!b(t)||(n=W(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=l((function(e){var t=B.get,n=B.enforce,a=String(String).split("String");(e.exports=function(e,t,r,l){var i,d=!!l&&!!l.unsafe,p=!!l&&!!l.enumerable,m=!!l&&!!l.noTargetGet;"function"==typeof r&&("string"!=typeof t||O(r,"name")||j(r,"name",t),(i=n(r)).source||(i.source=a.join("string"==typeof t?t:""))),e!==o?(d?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=r:j(e,t,r)):p?e[t]=r:P(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||F(this)}))})),Q=o,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,ne=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?ne:te)(e)},re=Math.min,le=Math.max,ie=Math.min,oe=function(e){return function(t,n,a){var r,l,i=g(t),o=(r=i.length)>0?re(ae(r),9007199254740991):0,d=function(e,t){var n=ae(e);return n<0?le(n+t,0):ie(n,t)}(a,o);if(e&&n!=n){for(;o>d;)if((l=i[d++])!=l)return!0}else for(;o>d;d++)if((e||d in i)&&i[d]===n)return e||d||0;return!e&&-1}},de=(oe(!0),oe(!1)),pe=function(e,t){var n,a=g(e),r=0,l=[];for(n in a)!O(G,n)&&O(a,n)&&l.push(n);for(;t.length>r;)O(a,n=t[r++])&&(~de(l,n)||l.push(n));return l},me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],se=me.concat("length","prototype"),ce={f:Object.getOwnPropertyNames||function(e){return pe(e,se)}},ue={f:Object.getOwnPropertySymbols},he=function(e,t){return arguments.length<2?ee(Q[e])||ee(o[e]):Q[e]&&Q[e][t]||o[e]&&o[e][t]}("Reflect","ownKeys")||function(e){var t=ce.f(T(e)),n=ue.f;return n?t.concat(n(e)):t},ke=function(e,t){for(var n=he(t),a=S.f,r=x.f,l=0;l<n.length;l++){var i=n[l];O(e,i)||a(e,i,r(t,i))}},Ne=/#|\.prototype\./,fe=function(e,t){var n=be[ge(e)];return n==ye||n!=ve&&("function"==typeof t?d(t):!!t)},ge=fe.normalize=function(e){return String(e).replace(Ne,".").toLowerCase()},be=fe.data={},ve=fe.NATIVE="N",ye=fe.POLYFILL="P",Oe=fe,Ce=x.f,De=Object.keys||function(e){return pe(e,me)},Me=function(e){return Object(f(e))},we=Object.assign,xe=Object.defineProperty,Te=!we||d((function(){if(p&&1!==we({b:1},we(xe({},"a",{enumerable:!0,get:function(){xe(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach((function(e){t[e]=e})),7!=we({},e)[n]||De(we({},t)).join("")!=a}))?function(e,t){for(var n=Me(e),a=arguments.length,r=1,l=ue.f,i=c.f;a>r;)for(var o,d=N(arguments[r++]),m=l?De(d).concat(l(d)):De(d),s=m.length,u=0;s>u;)o=m[u++],p&&!i.call(d,o)||(n[o]=d[o]);return n}:we;!function(e,t){var n,a,r,l,i,d=e.target,p=e.global,m=e.stat;if(n=p?o:m?o[d]||P(d,{}):(o[d]||{}).prototype)for(a in t){if(l=t[a],r=e.noTargetGet?(i=Ce(n,a))&&i.value:n[a],!Oe(p?a:d+(m?".":"#")+a,e.forced)&&void 0!==r){if(typeof l==typeof r)continue;ke(l,r)}(e.sham||r&&r.sham)&&j(l,"sham",!0),J(n,a,l,e)}}({target:"Object",stat:!0,forced:Object.assign!==Te},{assign:Te});const _e=a.createContext({}),Se=e=>{const t=a.useContext(_e);return"function"==typeof e?e(t):Object.assign({},t,e)},je=({components:e,children:t,disableParentContext:n})=>{let r=Se(e);return n&&(r=e),a.createElement(_e.Provider,{value:r},t)},Pe={inlineCode:"code",wrapper:({children:e})=>a.createElement(a.Fragment,{},e)},Ie=a.forwardRef(((e,t)=>{const{components:n,mdxType:r,originalType:l,parentName:i}=e,o=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t.indexOf(n=l[a])>=0||(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),d=Se(n);return a.createElement(d[`${i}.${r}`]||d[r]||Pe[r]||l,n?Object.assign({ref:t},o,{components:n}):Object.assign({ref:t},o))}));function Ee(e,t){const n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){const l=n.length,i=new Array(l);i[0]=Ie;const o={};for(let e in t)hasOwnProperty.call(t,e)&&(o[e]=t[e]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(let e=2;e<l;e++)i[e]=n[e];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}Ie.displayName="MDXCreateElement",Ee.Fragment=a.Fragment},5203:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d},default:function(){return m}});var a=n(7560),r=n(8283),l=(n(2784),n(9037)),i={id:"domnodewithchildren",title:"Class: DOMNodeWithChildren",sidebar_label:"DOMNodeWithChildren",sidebar_position:0,custom_edit_url:null},o={unversionedId:"classes/domnodewithchildren",id:"classes/domnodewithchildren",isDocsHomePage:!1,title:"Class: DOMNodeWithChildren",description:"A Node that can have children.",source:"@site/api/classes/domnodewithchildren.md",sourceDirName:"classes",slug:"/classes/domnodewithchildren",permalink:"/react-native-render-html/api/classes/domnodewithchildren",editUrl:null,version:"current",sidebar_label:"DOMNodeWithChildren",sidebarPosition:0,frontMatter:{id:"domnodewithchildren",title:"Class: DOMNodeWithChildren",sidebar_label:"DOMNodeWithChildren",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Class: DOMNode",permalink:"/react-native-render-html/api/classes/domnode"},next:{title:"Class: DOMText",permalink:"/react-native-render-html/api/classes/domtext"}},d=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"children",id:"children",children:[]},{value:"endIndex",id:"endindex",children:[]},{value:"next",id:"next",children:[]},{value:"parent",id:"parent",children:[]},{value:"prev",id:"prev",children:[]},{value:"startIndex",id:"startindex",children:[]},{value:"type",id:"type",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"childNodes",id:"childnodes",children:[]},{value:"firstChild",id:"firstchild",children:[]},{value:"lastChild",id:"lastchild",children:[]},{value:"nextSibling",id:"nextsibling",children:[]},{value:"nodeType",id:"nodetype",children:[]},{value:"parentNode",id:"parentnode",children:[]},{value:"previousSibling",id:"previoussibling",children:[]}]},{value:"Methods",id:"methods",children:[{value:"cloneNode",id:"clonenode",children:[]}]}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Node")," that can have children."),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},"DOMNodeWithChildren")),(0,l.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domdocument"},(0,l.kt)("em",{parentName:"a"},"DOMDocument"))),(0,l.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domelement"},(0,l.kt)("em",{parentName:"a"},"DOMElement"))))),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"+"," ",(0,l.kt)("strong",{parentName:"p"},"new DOMNodeWithChildren"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"type"),": Root ","|"," Script ","|"," Style ","|"," Tag ","|"," CDATA, ",(0,l.kt)("inlineCode",{parentName:"p"},"children"),": ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]): ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren"))),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Root ","|"," Script ","|"," Style ","|"," Tag ","|"," CDATA"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Type of the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"children")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Children of the node. Only certain node types can have children.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren"))),(0,l.kt)("p",null,"Overrides: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},"DOMNode")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:65"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"children"},"children"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"children"),": ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]"),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:65"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"endindex"},"endIndex"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"endIndex"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,"The end index of the node. Requires ",(0,l.kt)("inlineCode",{parentName:"p"},"withEndIndices")," on the handler to be `true."),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},"DOMNode"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode#endindex"},"endIndex")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:17"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"next"},"next"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"next"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,"Next sibling"),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},"DOMNode"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode#next"},"next")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:13"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"parent"},"parent"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"parent"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren"))),(0,l.kt)("p",null,"Parent of the node"),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},"DOMNode"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode#parent"},"parent")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:9"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"prev"},"prev"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"prev"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,"Previous sibling"),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},"DOMNode"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode#prev"},"prev")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:11"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"startindex"},"startIndex"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"startIndex"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,"The start index of the node. Requires ",(0,l.kt)("inlineCode",{parentName:"p"},"withStartIndices")," on the handler to be `true."),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},"DOMNode"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode#startindex"},"startIndex")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:15"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"type"),": ElementType"),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},"DOMNode"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode#type"},"type")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:7"),(0,l.kt)("h2",{id:"accessors"},"Accessors"),(0,l.kt)("h3",{id:"childnodes"},"childNodes"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"childNodes"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]"),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:73"),(0,l.kt)("p",null,"\u2022 set ",(0,l.kt)("strong",{parentName:"p"},"childNodes"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"children"),": ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]): ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"children")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:74"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"firstchild"},"firstChild"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"firstChild"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:71"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lastchild"},"lastChild"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"lastChild"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:72"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nextsibling"},"nextSibling"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"nextSibling"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:28"),(0,l.kt)("p",null,"\u2022 set ",(0,l.kt)("strong",{parentName:"p"},"nextSibling"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"next"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"): ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"next")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:29"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nodetype"},"nodeType"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"nodeType"),"(): ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:23"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"parentnode"},"parentNode"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"parentNode"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren"))),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:24"),(0,l.kt)("p",null,"\u2022 set ",(0,l.kt)("strong",{parentName:"p"},"parentNode"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren")),"): ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"parent")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:25"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"previoussibling"},"previousSibling"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"previousSibling"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:26"),(0,l.kt)("p",null,"\u2022 set ",(0,l.kt)("strong",{parentName:"p"},"previousSibling"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"prev"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"): ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"prev")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:27"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"clonenode"},"cloneNode"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"cloneNode"),"<T",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"recursive?"),": ",(0,l.kt)("em",{parentName:"p"},"boolean"),"): T"),(0,l.kt)("p",null,"Clone this node, and optionally its children."),(0,l.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"<T",">")))),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"recursive?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Clone child nodes as well.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,l.kt)("p",null,"A clone of the node."),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},"DOMNode")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:36"))}m.isMDXComponent=!0}}]);