(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+pmV":function(e,A,t){e.exports={post:"post-module--post--2iiGQ",title:"post-module--title--3CF5R",coverImage:"post-module--coverImage--2AdMw",meta:"post-module--meta--duw4c",tags:"post-module--tags--2jRm2",tag:"post-module--tag--3Tz-t",readMore:"post-module--readMore--1HLfk",postContent:"post-module--postContent--1132g",profImgDiv:"post-module--profImgDiv--1yLdO",profIntro:"post-module--profIntro--3B-5l",researchInfoDiv:"post-module--researchInfoDiv--2GsJy",researchInfo:"post-module--researchInfo--1r6ve",researchInfoText:"post-module--researchInfoText--1wYOT",readMore2:"post-module--readMore2--322OP",researchLink:"post-module--researchLink--2Dgep"}},BgVd:function(e,A,t){"use strict";t.r(A),t.d(A,"lectureQuery",(function(){return x}));var a=t("q1tI"),r=t.n(a),n=t("17x9"),o=t.n(n),c=t("vrFN"),s=t("Bl7J"),i=t("Wbzz"),l=t("zpb6"),u=t("Zfhm"),m=t.n(u),p=t("+pmV"),v=t.n(p),f=function(e){var A=e.title,t=e.dateStr,a=e.path,n=e.coverImage,o=e.author,c=e.excerpt,s=e.tags,u=e.html;return r.a.createElement("div",{className:v.a.post},r.a.createElement("div",{className:v.a.postContent},r.a.createElement("h1",{className:v.a.title},c?r.a.createElement(i.Link,{to:a},A):A),r.a.createElement("div",{className:v.a.meta},t," ",o&&r.a.createElement(r.a.Fragment,null,"— Written by ",o),s?r.a.createElement("div",{className:v.a.tags},s.map((function(e){return r.a.createElement(i.Link,{to:"/tag/"+Object(l.toKebabCase)(e)+"/",key:Object(l.toKebabCase)(e)},r.a.createElement("span",{className:v.a.tag},"#",e))}))):null),r.a.createElement("div",{className:v.a.coverImage},n&&r.a.createElement("img",{src:m.a})),c?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,c)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}}))))};f.propTypes={title:o.a.string,dateStr:o.a.string,path:o.a.string,coverImage:o.a.object,author:o.a.string,excerpt:o.a.string,html:o.a.string,tags:o.a.arrayOf(o.a.string)};var d=f,g=function(e){var A=e.data.markdownRemark,t=A.frontmatter,a=t.title,n=t.dateStr,o=t.path,i=t.author,l=t.coverImage,u=t.excerpt,m=t.tags,p=A.excerpt,v=A.id,f=A.html;return r.a.createElement(s.a,null,r.a.createElement(c.a,{title:a,description:u||p}),r.a.createElement(d,{key:v,title:a,dateStr:n,path:o,author:i,coverImage:l,html:f,tags:m}))};A.default=g;g.propTypes={data:o.a.object.isRequired};var x="1321859585"},TWNs:function(e,A,t){var a=t("g6v/"),r=t("2oRo"),n=t("lMq5"),o=t("cVYH"),c=t("m/L8").f,s=t("JBy8").f,i=t("ROdP"),l=t("rW0t"),u=t("n3/R"),m=t("busE"),p=t("0Dky"),v=t("afO8").set,f=t("JiZb"),d=t("tiKp")("match"),g=r.RegExp,x=g.prototype,h=/a/g,b=/a/g,y=new g(h)!==h,E=u.UNSUPPORTED_Y;if(a&&n("RegExp",!y||E||p((function(){return b[d]=!1,g(h)!=h||g(b)==b||"/a/i"!=g(h,"i")})))){for(var I=function(e,A){var t,a=this instanceof I,r=i(e),n=void 0===A;if(!a&&r&&e.constructor===I&&n)return e;y?r&&!n&&(e=e.source):e instanceof I&&(n&&(A=l.call(e)),e=e.source),E&&(t=!!A&&A.indexOf("y")>-1)&&(A=A.replace(/y/g,""));var c=o(y?new g(e,A):g(e,A),a?this:x,I);return E&&t&&v(c,{sticky:t}),c},U=function(e){e in I||c(I,e,{configurable:!0,get:function(){return g[e]},set:function(A){g[e]=A}})},k=s(g),z=0;k.length>z;)U(k[z++]);x.constructor=I,I.prototype=x,m(r,"RegExp",I)}f("RegExp")},UxlC:function(e,A,t){"use strict";var a=t("14Sl"),r=t("glrk"),n=t("ewvW"),o=t("UMSQ"),c=t("ppGB"),s=t("HYAF"),i=t("iqWW"),l=t("FMNM"),u=Math.max,m=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,f=/\$([$&'`]|\d\d?)/g;a("replace",2,(function(e,A,t,a){var d=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=a.REPLACE_KEEPS_$0,x=d?"$":"$0";return[function(t,a){var r=s(this),n=null==t?void 0:t[e];return void 0!==n?n.call(t,r,a):A.call(String(r),t,a)},function(e,a){if(!d&&g||"string"==typeof a&&-1===a.indexOf(x)){var n=t(A,e,this,a);if(n.done)return n.value}var s=r(e),p=String(this),v="function"==typeof a;v||(a=String(a));var f=s.global;if(f){var b=s.unicode;s.lastIndex=0}for(var y=[];;){var E=l(s,p);if(null===E)break;if(y.push(E),!f)break;""===String(E[0])&&(s.lastIndex=i(p,o(s.lastIndex),b))}for(var I,U="",k=0,z=0;z<y.length;z++){E=y[z];for(var Y=String(E[0]),R=u(m(c(E.index),p.length),0),S=[],J=1;J<E.length;J++)S.push(void 0===(I=E[J])?I:String(I));var q=E.groups;if(v){var T=[Y].concat(S,R,p);void 0!==q&&T.push(q);var M=String(a.apply(void 0,T))}else M=h(Y,p,R,S,q,a);R>=k&&(U+=p.slice(k,R)+M,k=R+Y.length)}return U+p.slice(k)}];function h(e,t,a,r,o,c){var s=a+e.length,i=r.length,l=f;return void 0!==o&&(o=n(o),l=v),A.call(c,l,(function(A,n){var c;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(s);case"<":c=o[n.slice(1,-1)];break;default:var l=+n;if(0===l)return A;if(l>i){var u=p(l/10);return 0===u?A:u<=i?void 0===r[u-1]?n.charAt(1):r[u-1]+n.charAt(1):A}c=r[l-1]}return void 0===c?"":c}))}}))},Zfhm:function(e,A){e.exports="data:image/png;base64,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"},zpb6:function(e,A,t){t("TWNs"),t("UxlC"),e.exports.toKebabCase=function(e){return e.replace(new RegExp("(\\s|_|-)+","gmi"),"-")}}}]);
//# sourceMappingURL=component---src-templates-template-lecture-js-2f7b14577746e19a2f9d.js.map