(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5046],{9037:function(e,t,n){"use strict";n.d(t,{Zo:function(){return De},kt:function(){return Re}});var r=n(2784),a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function i(e){var t={exports:{}};return e(t,t.exports),t.exports}var l=function(e){return e&&e.Math==Math&&e},o=l("object"==typeof globalThis&&globalThis)||l("object"==typeof window&&window)||l("object"==typeof self&&self)||l("object"==typeof a&&a)||function(){return this}()||Function("return this")(),p=function(e){try{return!!e()}catch(e){return!0}},s=!p((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),d={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,c={f:u&&!d.call({1:2},1)?function(e){var t=u(this,e);return!!t&&t.enumerable}:d},m=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},h={}.toString,f="".split,k=p((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return h.call(e).slice(8,-1)}(e)?f.call(e,""):Object(e)}:Object,y=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},g=function(e){return k(y(e))},N=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e,t){if(!N(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!N(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!N(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!N(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},v={}.hasOwnProperty,T=function(e,t){return v.call(e,t)},S=o.document,C=N(S)&&N(S.createElement),w=!s&&!p((function(){return 7!=Object.defineProperty(C?S.createElement("div"):{},"a",{get:function(){return 7}}).a})),O=Object.getOwnPropertyDescriptor,P={f:s?O:function(e,t){if(e=g(e),t=b(t,!0),w)try{return O(e,t)}catch(e){}if(T(e,t))return m(!c.f.call(e,t),e[t])}},_=function(e){if(!N(e))throw TypeError(String(e)+" is not an object");return e},M=Object.defineProperty,j={f:s?M:function(e,t,n){if(_(e),t=b(t,!0),_(n),w)try{return M(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},D=s?function(e,t,n){return j.f(e,t,m(1,n))}:function(e,t,n){return e[t]=n,e},I=function(e,t){try{D(o,e,t)}catch(i){o[e]=t}return t},x=o["__core-js_shared__"]||I("__core-js_shared__",{}),R=Function.toString;"function"!=typeof x.inspectSource&&(x.inspectSource=function(e){return R.call(e)});var E,F,B,L=x.inspectSource,H=o.WeakMap,W="function"==typeof H&&/native code/.test(L(H)),U=i((function(e){(e.exports=function(e,t){return x[e]||(x[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),A=0,q=Math.random(),z=U("keys"),G={};if(W){var X=x.state||(x.state=new(0,o.WeakMap)),V=X.get,Z=X.has,Y=X.set;E=function(e,t){return t.facade=e,Y.call(X,e,t),t},F=function(e){return V.call(X,e)||{}},B=function(e){return Z.call(X,e)}}else{var $=z.state||(z.state="Symbol("+String("state")+")_"+(++A+q).toString(36));G[$]=!0,E=function(e,t){return t.facade=e,D(e,$,t),t},F=function(e){return T(e,$)?e[$]:{}},B=function(e){return T(e,$)}}var J={set:E,get:F,has:B,enforce:function(e){return B(e)?F(e):E(e,{})},getterFor:function(e){return function(t){var n;if(!N(t)||(n=F(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},K=i((function(e){var t=J.get,n=J.enforce,r=String(String).split("String");(e.exports=function(e,t,a,i){var l,p=!!i&&!!i.unsafe,s=!!i&&!!i.enumerable,d=!!i&&!!i.noTargetGet;"function"==typeof a&&("string"!=typeof t||T(a,"name")||D(a,"name",t),(l=n(a)).source||(l.source=r.join("string"==typeof t?t:""))),e!==o?(p?!d&&e[t]&&(s=!0):delete e[t],s?e[t]=a:D(e,t,a)):s?e[t]=a:I(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||L(this)}))})),Q=o,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,ne=Math.floor,re=function(e){return isNaN(e=+e)?0:(e>0?ne:te)(e)},ae=Math.min,ie=Math.max,le=Math.min,oe=function(e){return function(t,n,r){var a,i,l=g(t),o=(a=l.length)>0?ae(re(a),9007199254740991):0,p=function(e,t){var n=re(e);return n<0?ie(n+t,0):le(n,t)}(r,o);if(e&&n!=n){for(;o>p;)if((i=l[p++])!=i)return!0}else for(;o>p;p++)if((e||p in l)&&l[p]===n)return e||p||0;return!e&&-1}},pe=(oe(!0),oe(!1)),se=function(e,t){var n,r=g(e),a=0,i=[];for(n in r)!T(G,n)&&T(r,n)&&i.push(n);for(;t.length>a;)T(r,n=t[a++])&&(~pe(i,n)||i.push(n));return i},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ue=de.concat("length","prototype"),ce={f:Object.getOwnPropertyNames||function(e){return se(e,ue)}},me={f:Object.getOwnPropertySymbols},he=function(e,t){return arguments.length<2?ee(Q[e])||ee(o[e]):Q[e]&&Q[e][t]||o[e]&&o[e][t]}("Reflect","ownKeys")||function(e){var t=ce.f(_(e)),n=me.f;return n?t.concat(n(e)):t},fe=function(e,t){for(var n=he(t),r=j.f,a=P.f,i=0;i<n.length;i++){var l=n[i];T(e,l)||r(e,l,a(t,l))}},ke=/#|\.prototype\./,ye=function(e,t){var n=Ne[ge(e)];return n==ve||n!=be&&("function"==typeof t?p(t):!!t)},ge=ye.normalize=function(e){return String(e).replace(ke,".").toLowerCase()},Ne=ye.data={},be=ye.NATIVE="N",ve=ye.POLYFILL="P",Te=ye,Se=P.f,Ce=Object.keys||function(e){return se(e,de)},we=function(e){return Object(y(e))},Oe=Object.assign,Pe=Object.defineProperty,_e=!Oe||p((function(){if(s&&1!==Oe({b:1},Oe(Pe({},"a",{enumerable:!0,get:function(){Pe(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=Oe({},e)[n]||Ce(Oe({},t)).join("")!=r}))?function(e,t){for(var n=we(e),r=arguments.length,a=1,i=me.f,l=c.f;r>a;)for(var o,p=k(arguments[a++]),d=i?Ce(p).concat(i(p)):Ce(p),u=d.length,m=0;u>m;)o=d[m++],s&&!l.call(p,o)||(n[o]=p[o]);return n}:Oe;!function(e,t){var n,r,a,i,l,p=e.target,s=e.global,d=e.stat;if(n=s?o:d?o[p]||I(p,{}):(o[p]||{}).prototype)for(r in t){if(i=t[r],a=e.noTargetGet?(l=Se(n,r))&&l.value:n[r],!Te(s?r:p+(d?".":"#")+r,e.forced)&&void 0!==a){if(typeof i==typeof a)continue;fe(i,a)}(e.sham||a&&a.sham)&&D(i,"sham",!0),K(n,r,i,e)}}({target:"Object",stat:!0,forced:Object.assign!==_e},{assign:_e});const Me=r.createContext({}),je=e=>{const t=r.useContext(Me);return"function"==typeof e?e(t):Object.assign({},t,e)},De=({components:e,children:t,disableParentContext:n})=>{let a=je(e);return n&&(a=e),r.createElement(Me.Provider,{value:a},t)},Ie={inlineCode:"code",wrapper:({children:e})=>r.createElement(r.Fragment,{},e)},xe=r.forwardRef(((e,t)=>{const{components:n,mdxType:a,originalType:i,parentName:l}=e,o=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=je(n);return r.createElement(p[`${l}.${a}`]||p[a]||Ie[a]||i,n?Object.assign({ref:t},o,{components:n}):Object.assign({ref:t},o))}));function Re(e,t){const n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){const i=n.length,l=new Array(i);l[0]=xe;const o={};for(let e in t)hasOwnProperty.call(t,e)&&(o[e]=t[e]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(let e=2;e<i;e++)l[e]=n[e];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}xe.displayName="MDXCreateElement",Re.Fragment=r.Fragment},5197:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var r=n(7560),a=n(8283),i=(n(2784),n(9037)),l={id:"tblock",title:"Interface: TBlock",sidebar_label:"TBlock",sidebar_position:0,custom_edit_url:null},o={unversionedId:"interfaces/tblock",id:"interfaces/tblock",isDocsHomePage:!1,title:"Interface: TBlock",description:"Hierarchy",source:"@site/api/interfaces/tblock.md",sourceDirName:"interfaces",slug:"/interfaces/tblock",permalink:"/react-native-render-html/api/interfaces/tblock",editUrl:null,version:"current",sidebar_label:"TBlock",sidebarPosition:0,frontMatter:{id:"tblock",title:"Interface: TBlock",sidebar_label:"TBlock",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Interface: RenderHTMLSourceProps",permalink:"/react-native-render-html/api/interfaces/renderhtmlsourceprops"},next:{title:"Interface: TChildProps",permalink:"/react-native-render-html/api/interfaces/tchildprops"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"attributes",id:"attributes",children:[]},{value:"children",id:"children",children:[]},{value:"classes",id:"classes",children:[]},{value:"displayName",id:"displayname",children:[]},{value:"domNode",id:"domnode",children:[]},{value:"id",id:"id",children:[]},{value:"isUnregistered",id:"isunregistered",children:[]},{value:"markers",id:"markers",children:[]},{value:"nodeIndex",id:"nodeindex",children:[]},{value:"parent",id:"parent",children:[]},{value:"styles",id:"styles",children:[]},{value:"tagName",id:"tagname",children:[]},{value:"type",id:"type",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getNativeStyles",id:"getnativestyles",children:[]},{value:"getWebStyles",id:"getwebstyles",children:[]},{value:"matchContentModel",id:"matchcontentmodel",children:[]},{value:"snapshot",id:"snapshot",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"TNodeShape"),"<",(0,i.kt)("inlineCode",{parentName:"p"},'"block"'),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"TBlock")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"attributes"},"attributes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"attributes"),": ",(0,i.kt)("em",{parentName:"p"},"Record"),"<string, string",">"),(0,i.kt)("p",null,"Attributes for this tag."),(0,i.kt)("p",null,"Inherited from: TNodeShape.attributes"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:141"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"children"},"children"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"children"),": readonly ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/api#tnode"},(0,i.kt)("em",{parentName:"a"},"TNode")),"[]"),(0,i.kt)("p",null,"Children of this node."),(0,i.kt)("p",null,"Inherited from: TNodeShape.children"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:184"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"classes"},"classes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"classes"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"A list of classes for this node, extracted from the class attribute of the\nunderlying DOMNode."),(0,i.kt)("p",null,"Inherited from: TNodeShape.classes"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:151"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"displayname"},"displayName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"displayName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Used for debugging purposes."),(0,i.kt)("p",null,"Inherited from: TNodeShape.displayName"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:188"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"domnode"},"domNode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"domNode"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domelement"},(0,i.kt)("em",{parentName:"a"},"DOMElement"))),(0,i.kt)("p",null,"Overrides: TNodeShape.domNode"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:262"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"The id for this node, extracted from the id attribute of the\nunderlying DOMNode."),(0,i.kt)("p",null,"Inherited from: TNodeShape.id"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:146"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isunregistered"},"isUnregistered"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"isUnregistered"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true")," when this tag is not a valid HTML tag ",(0,i.kt)("strong",{parentName:"p"},"and")," there is no custom\nrenderer for this tag."),(0,i.kt)("p",null,"Inherited from: TNodeShape.isUnregistered"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:197"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"markers"},"markers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"markers"),": ",(0,i.kt)("em",{parentName:"p"},"Readonly"),"<Markers",">"),(0,i.kt)("p",null,"Markers form an abstraction in which one node provides semantic information\nto itself and all its descendants. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"ins")," elements, which stand\nfor \"insertion\" of content in the context of an edit will provide the {\nedits: 'ins' } marker to all its descendants."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks"))," This attribute must be considered immutable. Never try to\nchange it by hand, or you might update the markers of an anscestor! For\nperformance reasons, markers instances might be shared from parent to\nchildren when they are equal."),(0,i.kt)("p",null,"Inherited from: TNodeShape.markers"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:209"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nodeindex"},"nodeIndex"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"nodeIndex"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"The position of this element relatively to its parents, before hoisting,\nafter collapsing."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks")),'\n"Before hoisting" implies that this index corresponds to the node position\nin the DOM, after removal of empty elements as per whitespace collapsing\nalgorithm.'),(0,i.kt)("p",null,"Inherited from: TNodeShape.nodeIndex"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:180"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parent"},"parent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"parent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/tdocument"},(0,i.kt)("em",{parentName:"a"},"TDocument"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/tblock"},(0,i.kt)("em",{parentName:"a"},"TBlock"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/tphrasing"},(0,i.kt)("em",{parentName:"a"},"TPhrasing"))),(0,i.kt)("p",null,"The parent of this node before hoisting."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks")),'\n"Before hoisting" implies that this parent will not match "anonymous"\nparents.'),(0,i.kt)("p",null,"Inherited from: TNodeShape.parent"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:170"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"styles"},"styles"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"styles"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/tstylesshape"},(0,i.kt)("em",{parentName:"a"},"TStylesShape"))),(0,i.kt)("p",null,"TStyles for this TNode. You should not use these unless required.\nUse {@link TNodeShape.getNativeStyles} instead."),(0,i.kt)("p",null,"Inherited from: TNodeShape.styles"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:214"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tagname"},"tagName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"tagName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Overrides: TNodeShape.tagName"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:261"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"block"')),(0,i.kt)("p",null,"The type of this tnode."),(0,i.kt)("p",null,"Inherited from: TNodeShape.type"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:192"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getnativestyles"},"getNativeStyles"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getNativeStyles"),"(): NativeBlockStyles"),(0,i.kt)("p",null,"Get own native styles."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," NativeBlockStyles"),(0,i.kt)("p",null,"Inherited from: TNodeShape.getNativeStyles"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:235"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getwebstyles"},"getWebStyles"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getWebStyles"),"(): ",(0,i.kt)("em",{parentName:"p"},"Partial"),"<WebTextFlowProperties",">"," & ",(0,i.kt)("em",{parentName:"p"},"CSSProperties")," & ",(0,i.kt)("em",{parentName:"p"},"Partial"),"<Pick<ViewStyle, ",(0,i.kt)("inlineCode",{parentName:"p"},'"position"'),">",">"),(0,i.kt)("p",null,"Get styles that cannot be handled by React Native."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Partial"),"<WebTextFlowProperties",">"," & ",(0,i.kt)("em",{parentName:"p"},"CSSProperties")," & ",(0,i.kt)("em",{parentName:"p"},"Partial"),"<Pick<ViewStyle, ",(0,i.kt)("inlineCode",{parentName:"p"},'"position"'),">",">"),(0,i.kt)("p",null,"Inherited from: TNodeShape.getWebStyles"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:239"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"matchcontentmodel"},"matchContentModel"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"matchContentModel"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"contentModel"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/enums/htmlcontentmodel"},(0,i.kt)("em",{parentName:"a"},"HTMLContentModel")),"): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Test if the given content model matches this TNode content model."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"contentModel")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/react-native-render-html/api/enums/htmlcontentmodel"},(0,i.kt)("em",{parentName:"a"},"HTMLContentModel"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The content model to test against.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Inherited from: TNodeShape.matchContentModel"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:231"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"snapshot"},"snapshot"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"snapshot"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),": ",(0,i.kt)("em",{parentName:"p"},"Partial"),"<TNodePrintOptions",">","): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Create a JSX string representation of this node and its children."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks"))," The snapshot is ",(0,i.kt)("em",{parentName:"p"},"just")," a representation. For example, it will\nprint ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," as an attribute of the TNode, while if you want to access\n",(0,i.kt)("inlineCode",{parentName:"p"},"href")," programatically, you'll need to access it via\n",(0,i.kt)("inlineCode",{parentName:"p"},"tnode.attributes.href"),"."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Partial"),"<TNodePrintOptions",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Customize what should be displayed.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: TNodeShape.snapshot"),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/tree/tree-types.d.ts:225"))}d.isMDXComponent=!0}}]);