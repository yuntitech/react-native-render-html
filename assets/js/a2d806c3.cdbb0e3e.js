(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9390],{9037:function(e,t,n){"use strict";n.d(t,{Zo:function(){return xe},kt:function(){return Fe}});var r=n(2784),a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function i(e){var t={exports:{}};return e(t,t.exports),t.exports}var l=function(e){return e&&e.Math==Math&&e},s=l("object"==typeof globalThis&&globalThis)||l("object"==typeof window&&window)||l("object"==typeof self&&self)||l("object"==typeof a&&a)||function(){return this}()||Function("return this")(),o=function(e){try{return!!e()}catch(e){return!0}},p=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),d={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,m={f:c&&!d.call({1:2},1)?function(e){var t=c(this,e);return!!t&&t.enumerable}:d},h=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},u={}.toString,k="".split,f=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return u.call(e).slice(8,-1)}(e)?k.call(e,""):Object(e)}:Object,g=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},y=function(e){return f(g(e))},N=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e,t){if(!N(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!N(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!N(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!N(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},v={}.hasOwnProperty,C=function(e,t){return v.call(e,t)},S=s.document,w=N(S)&&N(S.createElement),T=!p&&!o((function(){return 7!=Object.defineProperty(w?S.createElement("div"):{},"a",{get:function(){return 7}}).a})),D=Object.getOwnPropertyDescriptor,O={f:p?D:function(e,t){if(e=y(e),t=b(t,!0),T)try{return D(e,t)}catch(e){}if(C(e,t))return h(!m.f.call(e,t),e[t])}},M=function(e){if(!N(e))throw TypeError(String(e)+" is not an object");return e},P=Object.defineProperty,E={f:p?P:function(e,t,n){if(M(e),t=b(t,!0),M(n),T)try{return P(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},x=p?function(e,t,n){return E.f(e,t,h(1,n))}:function(e,t,n){return e[t]=n,e},L=function(e,t){try{x(s,e,t)}catch(i){s[e]=t}return t},R=s["__core-js_shared__"]||L("__core-js_shared__",{}),F=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(e){return F.call(e)});var j,I,_,H=R.inspectSource,A=s.WeakMap,W="function"==typeof A&&/native code/.test(H(A)),z=i((function(e){(e.exports=function(e,t){return R[e]||(R[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),U=0,V=Math.random(),B=z("keys"),X={};if(W){var Z=R.state||(R.state=new(0,s.WeakMap)),q=Z.get,G=Z.has,Y=Z.set;j=function(e,t){return t.facade=e,Y.call(Z,e,t),t},I=function(e){return q.call(Z,e)||{}},_=function(e){return G.call(Z,e)}}else{var $=B.state||(B.state="Symbol("+String("state")+")_"+(++U+V).toString(36));X[$]=!0,j=function(e,t){return t.facade=e,x(e,$,t),t},I=function(e){return C(e,$)?e[$]:{}},_=function(e){return C(e,$)}}var K={set:j,get:I,has:_,enforce:function(e){return _(e)?I(e):j(e,{})},getterFor:function(e){return function(t){var n;if(!N(t)||(n=I(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=i((function(e){var t=K.get,n=K.enforce,r=String(String).split("String");(e.exports=function(e,t,a,i){var l,o=!!i&&!!i.unsafe,p=!!i&&!!i.enumerable,d=!!i&&!!i.noTargetGet;"function"==typeof a&&("string"!=typeof t||C(a,"name")||x(a,"name",t),(l=n(a)).source||(l.source=r.join("string"==typeof t?t:""))),e!==s?(o?!d&&e[t]&&(p=!0):delete e[t],p?e[t]=a:x(e,t,a)):p?e[t]=a:L(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||H(this)}))})),Q=s,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,ne=Math.floor,re=function(e){return isNaN(e=+e)?0:(e>0?ne:te)(e)},ae=Math.min,ie=Math.max,le=Math.min,se=function(e){return function(t,n,r){var a,i,l=y(t),s=(a=l.length)>0?ae(re(a),9007199254740991):0,o=function(e,t){var n=re(e);return n<0?ie(n+t,0):le(n,t)}(r,s);if(e&&n!=n){for(;s>o;)if((i=l[o++])!=i)return!0}else for(;s>o;o++)if((e||o in l)&&l[o]===n)return e||o||0;return!e&&-1}},oe=(se(!0),se(!1)),pe=function(e,t){var n,r=y(e),a=0,i=[];for(n in r)!C(X,n)&&C(r,n)&&i.push(n);for(;t.length>a;)C(r,n=t[a++])&&(~oe(i,n)||i.push(n));return i},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ce=de.concat("length","prototype"),me={f:Object.getOwnPropertyNames||function(e){return pe(e,ce)}},he={f:Object.getOwnPropertySymbols},ue=function(e,t){return arguments.length<2?ee(Q[e])||ee(s[e]):Q[e]&&Q[e][t]||s[e]&&s[e][t]}("Reflect","ownKeys")||function(e){var t=me.f(M(e)),n=he.f;return n?t.concat(n(e)):t},ke=function(e,t){for(var n=ue(t),r=E.f,a=O.f,i=0;i<n.length;i++){var l=n[i];C(e,l)||r(e,l,a(t,l))}},fe=/#|\.prototype\./,ge=function(e,t){var n=Ne[ye(e)];return n==ve||n!=be&&("function"==typeof t?o(t):!!t)},ye=ge.normalize=function(e){return String(e).replace(fe,".").toLowerCase()},Ne=ge.data={},be=ge.NATIVE="N",ve=ge.POLYFILL="P",Ce=ge,Se=O.f,we=Object.keys||function(e){return pe(e,de)},Te=function(e){return Object(g(e))},De=Object.assign,Oe=Object.defineProperty,Me=!De||o((function(){if(p&&1!==De({b:1},De(Oe({},"a",{enumerable:!0,get:function(){Oe(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=De({},e)[n]||we(De({},t)).join("")!=r}))?function(e,t){for(var n=Te(e),r=arguments.length,a=1,i=he.f,l=m.f;r>a;)for(var s,o=f(arguments[a++]),d=i?we(o).concat(i(o)):we(o),c=d.length,h=0;c>h;)s=d[h++],p&&!l.call(o,s)||(n[s]=o[s]);return n}:De;!function(e,t){var n,r,a,i,l,o=e.target,p=e.global,d=e.stat;if(n=p?s:d?s[o]||L(o,{}):(s[o]||{}).prototype)for(r in t){if(i=t[r],a=e.noTargetGet?(l=Se(n,r))&&l.value:n[r],!Ce(p?r:o+(d?".":"#")+r,e.forced)&&void 0!==a){if(typeof i==typeof a)continue;ke(i,a)}(e.sham||a&&a.sham)&&x(i,"sham",!0),J(n,r,i,e)}}({target:"Object",stat:!0,forced:Object.assign!==Me},{assign:Me});const Pe=r.createContext({}),Ee=e=>{const t=r.useContext(Pe);return"function"==typeof e?e(t):Object.assign({},t,e)},xe=({components:e,children:t,disableParentContext:n})=>{let a=Ee(e);return n&&(a=e),r.createElement(Pe.Provider,{value:a},t)},Le={inlineCode:"code",wrapper:({children:e})=>r.createElement(r.Fragment,{},e)},Re=r.forwardRef(((e,t)=>{const{components:n,mdxType:a,originalType:i,parentName:l}=e,s=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),o=Ee(n);return r.createElement(o[`${l}.${a}`]||o[a]||Le[a]||i,n?Object.assign({ref:t},s,{components:n}):Object.assign({ref:t},s))}));function Fe(e,t){const n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){const i=n.length,l=new Array(i);l[0]=Re;const s={};for(let e in t)hasOwnProperty.call(t,e)&&(s[e]=t[e]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(let e=2;e<i;e++)l[e]=n[e];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}Re.displayName="MDXCreateElement",Fe.Fragment=r.Fragment},3347:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return o},default:function(){return d}});var r=n(7560),a=n(8283),i=(n(2784),n(9037)),l={id:"transientrenderengineconfig",title:"Interface: TransientRenderEngineConfig",sidebar_label:"TransientRenderEngineConfig",sidebar_position:0,custom_edit_url:null},s={unversionedId:"interfaces/transientrenderengineconfig",id:"interfaces/transientrenderengineconfig",isDocsHomePage:!1,title:"Interface: TransientRenderEngineConfig",description:"Configuration for the Transient Render Engine.",source:"@site/api/interfaces/transientrenderengineconfig.md",sourceDirName:"interfaces",slug:"/interfaces/transientrenderengineconfig",permalink:"/react-native-render-html/api/interfaces/transientrenderengineconfig",editUrl:null,version:"current",sidebar_label:"TransientRenderEngineConfig",sidebarPosition:0,frontMatter:{id:"transientrenderengineconfig",title:"Interface: TransientRenderEngineConfig",sidebar_label:"TransientRenderEngineConfig",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Interface: TPhrasing",permalink:"/react-native-render-html/api/interfaces/tphrasing"},next:{title:"Interface: TRenderEngineOptions<E\\>",permalink:"/react-native-render-html/api/interfaces/trenderengineoptions"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"allowedStyles",id:"allowedstyles",children:[]},{value:"baseStyle",id:"basestyle",children:[]},{value:"classesStyles",id:"classesstyles",children:[]},{value:"customHTMLElementModels",id:"customhtmlelementmodels",children:[]},{value:"dangerouslyDisableHoisting",id:"dangerouslydisablehoisting",children:[]},{value:"dangerouslyDisableWhitespaceCollapsing",id:"dangerouslydisablewhitespacecollapsing",children:[]},{value:"domVisitors",id:"domvisitors",children:[]},{value:"emSize",id:"emsize",children:[]},{value:"enableCSSInlineProcessing",id:"enablecssinlineprocessing",children:[]},{value:"enableUserAgentStyles",id:"enableuseragentstyles",children:[]},{value:"fallbackFonts",id:"fallbackfonts",children:[]},{value:"htmlParserOptions",id:"htmlparseroptions",children:[]},{value:"idsStyles",id:"idsstyles",children:[]},{value:"ignoreDomNode",id:"ignoredomnode",children:[]},{value:"ignoredDomTags",id:"ignoreddomtags",children:[]},{value:"ignoredStyles",id:"ignoredstyles",children:[]},{value:"selectDomRoot",id:"selectdomroot",children:[]},{value:"setMarkersForTNode",id:"setmarkersfortnode",children:[]},{value:"systemFonts",id:"systemfonts",children:[]},{value:"tagsStyles",id:"tagsstyles",children:[]},{value:"triggerTREInvalidationPropNames",id:"triggertreinvalidationpropnames",children:[]}]}],p={toc:o};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Configuration for the Transient Render Engine."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TransientRenderEngineConfig")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/renderhtmlprops"},(0,i.kt)("em",{parentName:"a"},"RenderHTMLProps"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"allowedstyles"},"allowedStyles"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"allowedStyles"),": CSSPropertyNameList"),(0,i.kt)("p",null,"Whitelist specific inline CSS style properties and ignore the others."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks"))," Property names must be camelCased: for example,\n'background-color' should be written 'backgroundColor'."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L395"},"packages/render-html/src/shared-types.ts:395")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"basestyle"},"baseStyle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"baseStyle"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/api#mixedstyledeclaration"},(0,i.kt)("em",{parentName:"a"},"MixedStyleDeclaration"))),(0,i.kt)("p",null,"The default style for the document (root). Inheritable styles will be\ntransferred to children. That works also for Text styles."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L340"},"packages/render-html/src/shared-types.ts:340")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"classesstyles"},"classesStyles"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"classesStyles"),": ",(0,i.kt)("em",{parentName:"p"},"Readonly"),"<Record<string, ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/api#mixedstyledeclaration"},(0,i.kt)("em",{parentName:"a"},"MixedStyleDeclaration")),">",">"),(0,i.kt)("p",null,"Provide your styles for specific HTML classes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks"))," Do NOT use the StyleSheet API to create the styles\nyou're going to feed to ",(0,i.kt)("inlineCode",{parentName:"p"},"tagsStyle and classesStyles"),"."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L331"},"packages/render-html/src/shared-types.ts:331")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"customhtmlelementmodels"},"customHTMLElementModels"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"customHTMLElementModels"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/api#htmlelementmodelrecord"},(0,i.kt)("em",{parentName:"a"},"HTMLElementModelRecord"))),(0,i.kt)("p",null,"Customize element models for target tags."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L435"},"packages/render-html/src/shared-types.ts:435")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dangerouslydisablehoisting"},"dangerouslyDisableHoisting"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"dangerouslyDisableHoisting"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Experimental")),(0,i.kt)("p",null,"Disable hoisting. Especially useful for rendering with react-native-web.\nNote that your layout might break in native!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," false"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L462"},"packages/render-html/src/shared-types.ts:462")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dangerouslydisablewhitespacecollapsing"},"dangerouslyDisableWhitespaceCollapsing"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"dangerouslyDisableWhitespaceCollapsing"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Experimental")),(0,i.kt)("p",null,"Disable whitespace collapsing. Especially useful if your html is\nbeing pre-processed server-side with a minifier."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," false"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L471"},"packages/render-html/src/shared-types.ts:471")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"domvisitors"},"domVisitors"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"domVisitors"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/domvisitorcallbacks"},(0,i.kt)("em",{parentName:"a"},"DomVisitorCallbacks"))),(0,i.kt)("p",null,"An object which callbacks will be invoked when a DOM element or text node\nhas been parsed and its children attached. This is great to tamper the dom,\nremove children, insert nodes, change text nodes data... etc."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remark"))," Each callback is applied during DOM parsing, thus with very little\noverhead. However, it means that one node next siblings won't be available\nsince it has not yet been parsed. If you need some siblings logic, apply\nthis logic to the children of this node."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L371"},"packages/render-html/src/shared-types.ts:371")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"emsize"},"emSize"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"emSize"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"The default value in pixels for 1em"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L439"},"packages/render-html/src/shared-types.ts:439")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"enablecssinlineprocessing"},"enableCSSInlineProcessing"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"enableCSSInlineProcessing"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Enable or disable inline CSS processing of inline styles."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks"))," If you want to allow or disallow specific properties, use\n",(0,i.kt)("inlineCode",{parentName:"p"},"allowedStyles")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ignoredStyles")," props."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," true"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L317"},"packages/render-html/src/shared-types.ts:317")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"enableuseragentstyles"},"enableUserAgentStyles"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"enableUserAgentStyles"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Enable or disable fallback styles for each tag. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"pre")," tags\nwill have ",(0,i.kt)("inlineCode",{parentName:"p"},"whiteSpace")," set to 'pre' by default."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," true"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L308"},"packages/render-html/src/shared-types.ts:308")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fallbackfonts"},"fallbackFonts"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fallbackFonts"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/interfaces/fallbackfontsdefinitions"},(0,i.kt)("em",{parentName:"a"},"FallbackFontsDefinitions"))),(0,i.kt)("p",null,"A record for specific CSS fonts."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Suggestion"),": Use Plaform.select({ ios: ..., android: ..., default: ...})"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L431"},"packages/render-html/src/shared-types.ts:431")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"htmlparseroptions"},"htmlParserOptions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"htmlParserOptions"),": ParserOptions"),(0,i.kt)("p",null,"ParserOptions for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fb55/htmlparser2/wiki/Parser-options"},"htmlparser2")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"{ decodeEntities: true }")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L301"},"packages/render-html/src/shared-types.ts:301")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"idsstyles"},"idsStyles"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"idsStyles"),": ",(0,i.kt)("em",{parentName:"p"},"Readonly"),"<Record<string, ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/api#mixedstyledeclaration"},(0,i.kt)("em",{parentName:"a"},"MixedStyleDeclaration")),">",">"),(0,i.kt)("p",null,"Provide your styles for specific element identifiers (id attribute)."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L335"},"packages/render-html/src/shared-types.ts:335")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ignoredomnode"},"ignoreDomNode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ignoreDomNode"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"node"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,i.kt)("em",{parentName:"a"},"DOMNode")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,i.kt)("em",{parentName:"a"},"DOMNodeWithChildren")),") => ",(0,i.kt)("em",{parentName:"p"},"unknown")),(0,i.kt)("p",null,"Ignore specific DOM nodes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning"),": when this function is invoked, the node has not yet been\nattached to its parent or siblings. Use the second argument (",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),")\nif you need to perform logic based on parent."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"ignoredDomTags")," if you just need to target specific tag names."),(0,i.kt)("li",{parentName:"ul"},"The function is applied during DOM parsing, thus with very little\noverhead. However, it means that one node next siblings won't be\navailable since it has not yet been parsed.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"returns"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if this node should not be included in the DOM, anything\nelse otherwise."),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"node"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnode"},(0,i.kt)("em",{parentName:"a"},"DOMNode")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,i.kt)("em",{parentName:"a"},"DOMNodeWithChildren")),"): ",(0,i.kt)("em",{parentName:"p"},"unknown")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"node")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/react-native-render-html/api/classes/domnode"},(0,i.kt)("em",{parentName:"a"},"DOMNode")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"parent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,i.kt)("em",{parentName:"a"},"DOMNodeWithChildren")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"unknown")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L357"},"packages/render-html/src/shared-types.ts:357")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L357"},"packages/render-html/src/shared-types.ts:357")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ignoreddomtags"},"ignoredDomTags"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ignoredDomTags"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"A list of tags which should not be included in the DOM."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remark"))," The filtering is happening during parsing, thus with very little\noverhead."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L378"},"packages/render-html/src/shared-types.ts:378")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ignoredstyles"},"ignoredStyles"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ignoredStyles"),": CSSPropertyNameList"),(0,i.kt)("p",null,"Blacklist specific inline CSS style properties and allow the others."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks"))," Property names must be camelCased: for example,\n'background-color' should be written 'backgroundColor'. Also note that if\nyou don't want inline style processing at all, you should set\n",(0,i.kt)("inlineCode",{parentName:"p"},"enableCSSInlineProcessing")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L404"},"packages/render-html/src/shared-types.ts:404")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selectdomroot"},"selectDomRoot"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"selectDomRoot"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"node"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,i.kt)("em",{parentName:"a"},"DOMNodeWithChildren")),") => ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Select the DOM root before TTree generation. For example, you could\niterate over children until you reach an article element and return this\nelement."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks"))," Applied after DOM parsing, before normalization and TTree\nconstruction. Before normalization implies that a body will be added in\nthe tree ",(0,i.kt)("strong",{parentName:"p"},"after")," selecting root."),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"node"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,i.kt)("em",{parentName:"a"},"DOMNodeWithChildren")),"): ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"node")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/react-native-render-html/api/classes/domnodewithchildren"},(0,i.kt)("em",{parentName:"a"},"DOMNodeWithChildren")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"any")),(0,i.kt)("p",null,"Defined in: node_modules/@native-html/transient-render-engine/lib/typescript/TRenderEngine.d.ts:73"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L388"},"packages/render-html/src/shared-types.ts:388")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setmarkersfortnode"},"setMarkersForTNode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"setMarkersForTNode"),": SetMarkersForTNode"),(0,i.kt)("p",null,"Set custom markers from a TNode and all its descendants. Markers will be\naccessible in custom renderers via ",(0,i.kt)("inlineCode",{parentName:"p"},"tnode.markers")," prop."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"param"))," The markers to modify."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"param"))," Markers from the parent TNode."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"param"))," The TNode to inspect"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks")),"\nChanges to this prop will cause a react tree update. Always memoize it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"() => null")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L453"},"packages/render-html/src/shared-types.ts:453")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"systemfonts"},"systemFonts"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"systemFonts"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"A list of fonts available in the current platform. These fonts will be used\nto select the first match in CSS ",(0,i.kt)("inlineCode",{parentName:"p"},"fontFamily")," property, which supports a\ncomma-separated list of fonts. By default, a handful of fonts are selected\nper platform."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need to specify any font family you wish to use via ",(0,i.kt)("inlineCode",{parentName:"li"},"*styles")," props\nhere, otherwise those styles will be ignored."),(0,i.kt)("li",{parentName:"ul"},"If you are using expo, you should use or extend ",(0,i.kt)("inlineCode",{parentName:"li"},"Constants.systemFonts"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import RenderHTML, {defaultSystemFonts} from 'react-native-render-html'\n// Replace defaultSystemFonts with Constants.systemFonts if you're using expo\nconst systemFonts = [...defaultSystemFonts, 'Mysuperfont']\n// ...\n<RenderHTML systemFonts={systemFonts} ... />\n")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L425"},"packages/render-html/src/shared-types.ts:425")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tagsstyles"},"tagsStyles"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"tagsStyles"),": ",(0,i.kt)("em",{parentName:"p"},"Readonly"),"<Record<string, ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/api/api#mixedstyledeclaration"},(0,i.kt)("em",{parentName:"a"},"MixedStyleDeclaration")),">",">"),(0,i.kt)("p",null,"Provide your styles for specific HTML tags."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks"))," Do NOT use the StyleSheet API to create the styles\nyou're going to feed to ",(0,i.kt)("inlineCode",{parentName:"p"},"tagsStyle and classesStyles"),"."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L324"},"packages/render-html/src/shared-types.ts:324")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"triggertreinvalidationpropnames"},"triggerTREInvalidationPropNames"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"triggerTREInvalidationPropNames"),": (",(0,i.kt)("inlineCode",{parentName:"p"},'"htmlParserOptions"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"enableUserAgentStyles"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"enableCSSInlineProcessing"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"tagsStyles"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"classesStyles"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"idsStyles"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"baseStyle"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"ignoreDomNode"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"domVisitors"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"ignoredDomTags"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"selectDomRoot"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"allowedStyles"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"ignoredStyles"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"systemFonts"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"fallbackFonts"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"customHTMLElementModels"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"emSize"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"setMarkersForTNode"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"dangerouslyDisableHoisting"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"dangerouslyDisableWhitespaceCollapsing"'),")[]"),(0,i.kt)("p",null,"Name of props which should trigger a rebuild of the Transient Render\nEngine (TRE)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"remarks"))," For performance sake, this component will not recreate an\ninstance of the engine on each prop change. If you need some props to\ntrigger a new instantiation, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"tagsStyles"),", pass a list of their\nnames in this array."),(0,i.kt)("p",null,"Please note that only props involved in the building of the transient render\ntree are concerned by this mechanism."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"triggerTREInvalidationPropNames = ['tagsStyles', 'allowedStyles']\n")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/ae02cfc/packages/render-html/src/shared-types.ts#L489"},"packages/render-html/src/shared-types.ts:489")))}d.isMDXComponent=!0}}]);