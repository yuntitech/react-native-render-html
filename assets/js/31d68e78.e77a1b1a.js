(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3037],{9037:function(e,t,r){"use strict";r.d(t,{Zo:function(){return _e},kt:function(){return xe}});var n=r(2784),a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};function i(e){var t={exports:{}};return e(t,t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},l=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof a&&a)||function(){return this}()||Function("return this")(),c=function(e){try{return!!e()}catch(e){return!0}},s=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),p={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,f={f:u&&!p.call({1:2},1)?function(e){var t=u(this,e);return!!t&&t.enumerable}:p},m=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},h={}.toString,d="".split,g=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return h.call(e).slice(8,-1)}(e)?d.call(e,""):Object(e)}:Object,y=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},k=function(e){return g(y(e))},b=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!b(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!b(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!b(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!b(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},N={}.hasOwnProperty,S=function(e,t){return N.call(e,t)},E=l.document,I=b(E)&&b(E.createElement),O=!s&&!c((function(){return 7!=Object.defineProperty(I?E.createElement("div"):{},"a",{get:function(){return 7}}).a})),w=Object.getOwnPropertyDescriptor,j={f:s?w:function(e,t){if(e=k(e),t=v(t,!0),O)try{return w(e,t)}catch(e){}if(S(e,t))return m(!f.f.call(e,t),e[t])}},M=function(e){if(!b(e))throw TypeError(String(e)+" is not an object");return e},P=Object.defineProperty,T={f:s?P:function(e,t,r){if(M(e),t=v(t,!0),M(r),O)try{return P(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},_=s?function(e,t,r){return T.f(e,t,m(1,r))}:function(e,t,r){return e[t]=r,e},C=function(e,t){try{_(l,e,t)}catch(i){l[e]=t}return t},G=l["__core-js_shared__"]||C("__core-js_shared__",{}),x=Function.toString;"function"!=typeof G.inspectSource&&(G.inspectSource=function(e){return x.call(e)});var D,L,F,B=G.inspectSource,H=l.WeakMap,z="function"==typeof H&&/native code/.test(B(H)),A=i((function(e){(e.exports=function(e,t){return G[e]||(G[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),R=0,X=Math.random(),Z=A("keys"),q={};if(z){var U=G.state||(G.state=new(0,l.WeakMap)),V=U.get,W=U.has,$=U.set;D=function(e,t){return t.facade=e,$.call(U,e,t),t},L=function(e){return V.call(U,e)||{}},F=function(e){return W.call(U,e)}}else{var K=Z.state||(Z.state="Symbol("+String("state")+")_"+(++R+X).toString(36));q[K]=!0,D=function(e,t){return t.facade=e,_(e,K,t),t},L=function(e){return S(e,K)?e[K]:{}},F=function(e){return S(e,K)}}var Y={set:D,get:L,has:F,enforce:function(e){return F(e)?L(e):D(e,{})},getterFor:function(e){return function(t){var r;if(!b(t)||(r=L(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}},J=i((function(e){var t=Y.get,r=Y.enforce,n=String(String).split("String");(e.exports=function(e,t,a,i){var o,c=!!i&&!!i.unsafe,s=!!i&&!!i.enumerable,p=!!i&&!!i.noTargetGet;"function"==typeof a&&("string"!=typeof t||S(a,"name")||_(a,"name",t),(o=r(a)).source||(o.source=n.join("string"==typeof t?t:""))),e!==l?(c?!p&&e[t]&&(s=!0):delete e[t],s?e[t]=a:_(e,t,a)):s?e[t]=a:C(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||B(this)}))})),Q=l,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,re=Math.floor,ne=function(e){return isNaN(e=+e)?0:(e>0?re:te)(e)},ae=Math.min,ie=Math.max,oe=Math.min,le=function(e){return function(t,r,n){var a,i,o=k(t),l=(a=o.length)>0?ae(ne(a),9007199254740991):0,c=function(e,t){var r=ne(e);return r<0?ie(r+t,0):oe(r,t)}(n,l);if(e&&r!=r){for(;l>c;)if((i=o[c++])!=i)return!0}else for(;l>c;c++)if((e||c in o)&&o[c]===r)return e||c||0;return!e&&-1}},ce=(le(!0),le(!1)),se=function(e,t){var r,n=k(e),a=0,i=[];for(r in n)!S(q,r)&&S(n,r)&&i.push(r);for(;t.length>a;)S(n,r=t[a++])&&(~ce(i,r)||i.push(r));return i},pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ue=pe.concat("length","prototype"),fe={f:Object.getOwnPropertyNames||function(e){return se(e,ue)}},me={f:Object.getOwnPropertySymbols},he=function(e,t){return arguments.length<2?ee(Q[e])||ee(l[e]):Q[e]&&Q[e][t]||l[e]&&l[e][t]}("Reflect","ownKeys")||function(e){var t=fe.f(M(e)),r=me.f;return r?t.concat(r(e)):t},de=function(e,t){for(var r=he(t),n=T.f,a=j.f,i=0;i<r.length;i++){var o=r[i];S(e,o)||n(e,o,a(t,o))}},ge=/#|\.prototype\./,ye=function(e,t){var r=be[ke(e)];return r==Ne||r!=ve&&("function"==typeof t?c(t):!!t)},ke=ye.normalize=function(e){return String(e).replace(ge,".").toLowerCase()},be=ye.data={},ve=ye.NATIVE="N",Ne=ye.POLYFILL="P",Se=ye,Ee=j.f,Ie=Object.keys||function(e){return se(e,pe)},Oe=function(e){return Object(y(e))},we=Object.assign,je=Object.defineProperty,Me=!we||c((function(){if(s&&1!==we({b:1},we(je({},"a",{enumerable:!0,get:function(){je(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach((function(e){t[e]=e})),7!=we({},e)[r]||Ie(we({},t)).join("")!=n}))?function(e,t){for(var r=Oe(e),n=arguments.length,a=1,i=me.f,o=f.f;n>a;)for(var l,c=g(arguments[a++]),p=i?Ie(c).concat(i(c)):Ie(c),u=p.length,m=0;u>m;)l=p[m++],s&&!o.call(c,l)||(r[l]=c[l]);return r}:we;!function(e,t){var r,n,a,i,o,c=e.target,s=e.global,p=e.stat;if(r=s?l:p?l[c]||C(c,{}):(l[c]||{}).prototype)for(n in t){if(i=t[n],a=e.noTargetGet?(o=Ee(r,n))&&o.value:r[n],!Se(s?n:c+(p?".":"#")+n,e.forced)&&void 0!==a){if(typeof i==typeof a)continue;de(i,a)}(e.sham||a&&a.sham)&&_(i,"sham",!0),J(r,n,i,e)}}({target:"Object",stat:!0,forced:Object.assign!==Me},{assign:Me});const Pe=n.createContext({}),Te=e=>{const t=n.useContext(Pe);return"function"==typeof e?e(t):Object.assign({},t,e)},_e=({components:e,children:t,disableParentContext:r})=>{let a=Te(e);return r&&(a=e),n.createElement(Pe.Provider,{value:a},t)},Ce={inlineCode:"code",wrapper:({children:e})=>n.createElement(n.Fragment,{},e)},Ge=n.forwardRef(((e,t)=>{const{components:r,mdxType:a,originalType:i,parentName:o}=e,l=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}(e,["components","mdxType","originalType","parentName"]),c=Te(r);return n.createElement(c[`${o}.${a}`]||c[a]||Ce[a]||i,r?Object.assign({ref:t},l,{components:r}):Object.assign({ref:t},l))}));function xe(e,t){const r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){const i=r.length,o=new Array(i);o[0]=Ge;const l={};for(let e in t)hasOwnProperty.call(t,e)&&(l[e]=t[e]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(let e=2;e<i;e++)o[e]=r[e];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}Ge.displayName="MDXCreateElement",xe.Fragment=n.Fragment},3462:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(7560),a=r(8283),i=(r(2784),r(9037)),o={id:"imgelementstateerror",title:"Interface: IMGElementStateError",sidebar_label:"IMGElementStateError",sidebar_position:0,custom_edit_url:null},l={unversionedId:"interfaces/imgelementstateerror",id:"interfaces/imgelementstateerror",isDocsHomePage:!1,title:"Interface: IMGElementStateError",description:"Hierarchy",source:"@site/api/interfaces/imgelementstateerror.md",sourceDirName:"interfaces",slug:"/interfaces/imgelementstateerror",permalink:"/react-native-render-html/api/interfaces/imgelementstateerror",editUrl:null,version:"current",sidebar_label:"IMGElementStateError",sidebarPosition:0,frontMatter:{id:"imgelementstateerror",title:"Interface: IMGElementStateError",sidebar_label:"IMGElementStateError",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Interface: IMGElementStateBase",permalink:"/react-native-render-html/api/interfaces/imgelementstatebase"},next:{title:"Interface: IMGElementStateLoading",permalink:"/react-native-render-html/api/interfaces/imgelementstateloading"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"alt",id:"alt",children:[]},{value:"altColor",id:"altcolor",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"dimensions",id:"dimensions",children:[]},{value:"error",id:"error",children:[]},{value:"source",id:"source",children:[]},{value:"type",id:"type",children:[]}]}],s={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/imgelementstatebase"},(0,i.kt)("em",{parentName:"a"},"IMGElementStateBase"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"IMGElementStateError")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"alt"},"alt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"alt"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/imgelementstatebase"},"IMGElementStateBase"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/imgelementstatebase#alt"},"alt")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/elements/img-types.ts#L54"},"packages/render-html/src/elements/img-types.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"altcolor"},"altColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"altColor"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/imgelementstatebase"},"IMGElementStateBase"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/imgelementstatebase#altcolor"},"altColor")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/elements/img-types.ts#L55"},"packages/render-html/src/elements/img-types.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"containerStyle"),": ViewStyle"),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/imgelementstatebase"},"IMGElementStateBase"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/imgelementstatebase#containerstyle"},"containerStyle")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/elements/img-types.ts#L51"},"packages/render-html/src/elements/img-types.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dimensions"},"dimensions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dimensions"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/imagedimensions"},(0,i.kt)("em",{parentName:"a"},"ImageDimensions"))),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/imgelementstatebase"},"IMGElementStateBase"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/imgelementstatebase#dimensions"},"dimensions")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/elements/img-types.ts#L52"},"packages/render-html/src/elements/img-types.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"error"},"error"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"error"),": Error"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/elements/img-types.ts#L81"},"packages/render-html/src/elements/img-types.ts:81")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"source"},"source"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"source"),": ImageURISource"),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/imgelementstatebase"},"IMGElementStateBase"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/imgelementstatebase#source"},"source")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/elements/img-types.ts#L53"},"packages/render-html/src/elements/img-types.ts:53")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"error"')),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/elements/img-types.ts#L80"},"packages/render-html/src/elements/img-types.ts:80")))}p.isMDXComponent=!0}}]);