"use strict";(self.webpackChunkhost=self.webpackChunkhost||[]).push([[721],{9721:(e,t,r)=>{r.d(t,{Z:()=>ne});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,c=String.fromCharCode,s=Object.assign;function i(e){return e.trim()}function u(e,t,r){return e.replace(t,r)}function o(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function h(e){return e.length}function p(e){return e.length}function d(e,t){return t.push(e),e}var b=1,g=1,v=0,y=0,k=0,m="";function w(e,t,r,n,a,c,s){return{value:e,root:t,parent:r,type:n,props:a,children:c,line:b,column:g,length:s,return:""}}function $(e,t){return s(w("",null,null,"",null,null,0),e,{length:-e.length},t)}function x(){return k=y>0?l(m,--y):0,g--,10===k&&(g=1,b--),k}function A(){return k=y<v?l(m,y++):0,g++,10===k&&(g=1,b++),k}function C(){return l(m,y)}function S(){return y}function P(e,t){return f(m,e,t)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E(e){return b=g=1,v=h(m=e),y=0,[]}function N(e){return m="",e}function T(e){return i(P(y-1,_(91===e?e+2:40===e?e+1:e)))}function j(e){for(;(k=C())&&k<33;)A();return z(e)>2||z(k)>3?"":" "}function O(e,t){for(;--t&&A()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return P(e,S()+(t<6&&32==C()&&32==A()))}function _(e){for(;A();)switch(k){case e:return y;case 34:case 39:34!==e&&39!==e&&_(k);break;case 40:41===e&&_(e);break;case 92:A()}return y}function q(e,t){for(;A()&&e+k!==57&&(e+k!==84||47!==C()););return"/*"+P(t,y-1)+"*"+c(47===e?e:A())}function M(e){for(;!z(C());)A();return P(e,y)}var R="-ms-",B="-moz-",W="-webkit-",Z="comm",D="rule",F="decl",G="@keyframes";function H(e,t){for(var r="",n=p(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function I(e,t,r,n){switch(e.type){case"@import":case F:return e.return=e.return||e.value;case Z:return"";case G:return e.return=e.value+"{"+H(e.children,n)+"}";case D:e.value=e.props.join(",")}return h(r=H(e.children,n))?e.return=e.value+"{"+r+"}":""}function J(e){return N(K("",null,null,null,[""],e=E(e),0,[0],e))}function K(e,t,r,n,a,s,i,f,p){for(var b=0,g=0,v=i,y=0,k=0,m=0,w=1,$=1,P=1,z=0,E="",N=a,_=s,R=n,B=E;$;)switch(m=z,z=A()){case 40:if(108!=m&&58==l(B,v-1)){-1!=o(B+=u(T(z),"&","&\f"),"&\f")&&(P=-1);break}case 34:case 39:case 91:B+=T(z);break;case 9:case 10:case 13:case 32:B+=j(m);break;case 92:B+=O(S()-1,7);continue;case 47:switch(C()){case 42:case 47:d(Q(q(A(),S()),t,r),p);break;default:B+="/"}break;case 123*w:f[b++]=h(B)*P;case 125*w:case 59:case 0:switch(z){case 0:case 125:$=0;case 59+g:k>0&&h(B)-v&&d(k>32?U(B+";",n,r,v-1):U(u(B," ","")+";",n,r,v-2),p);break;case 59:B+=";";default:if(d(R=L(B,t,r,b,g,a,f,E,N=[],_=[],v),s),123===z)if(0===g)K(B,t,R,R,N,s,v,f,_);else switch(99===y&&110===l(B,3)?100:y){case 100:case 109:case 115:K(e,R,R,n&&d(L(e,R,R,0,0,a,f,E,a,N=[],v),_),a,_,v,f,n?N:_);break;default:K(B,R,R,R,[""],_,0,f,_)}}b=g=k=0,w=P=1,E=B="",v=i;break;case 58:v=1+h(B),k=m;default:if(w<1)if(123==z)--w;else if(125==z&&0==w++&&125==x())continue;switch(B+=c(z),z*w){case 38:P=g>0?1:(B+="\f",-1);break;case 44:f[b++]=(h(B)-1)*P,P=1;break;case 64:45===C()&&(B+=T(A())),y=C(),g=v=h(E=B+=M(S())),z++;break;case 45:45===m&&2==h(B)&&(w=0)}}return s}function L(e,t,r,n,c,s,o,l,h,d,b){for(var g=c-1,v=0===c?s:[""],y=p(v),k=0,m=0,$=0;k<n;++k)for(var x=0,A=f(e,g+1,g=a(m=o[k])),C=e;x<y;++x)(C=i(m>0?v[x]+" "+A:u(A,/&\f/g,v[x])))&&(h[$++]=C);return w(e,t,r,0===c?D:l,h,d,b)}function Q(e,t,r){return w(e,t,r,Z,c(k),f(e,2,-2),0)}function U(e,t,r,n){return w(e,t,r,F,f(e,0,n),f(e,n+1,-1),n)}var V=function(e,t,r){for(var n=0,a=0;n=a,a=C(),38===n&&12===a&&(t[r]=1),!z(a);)A();return P(e,y)},X=new WeakMap,Y=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||X.get(r))&&!n){X.set(e,!0);for(var a=[],s=function(e,t){return N(function(e,t){var r=-1,n=44;do{switch(z(n)){case 0:38===n&&12===C()&&(t[r]=1),e[r]+=V(y-1,t,r);break;case 2:e[r]+=T(n);break;case 4:if(44===n){e[++r]=58===C()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=c(n)}}while(n=A());return e}(E(e),t))}(t,a),i=r.props,u=0,o=0;u<s.length;u++)for(var l=0;l<i.length;l++,o++)e.props[o]=a[u]?s[u].replace(/&\f/g,i[l]):i[l]+" "+s[u]}}},ee=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function te(e,t){switch(function(e,t){return 45^l(e,0)?(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3):0}(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+B+e+R+e+e;case 6828:case 4268:return W+e+R+e+e;case 6165:return W+e+R+"flex-"+e+e;case 5187:return W+e+u(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+R+"flex-$1$2")+e;case 5443:return W+e+R+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return W+e+R+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return W+e+R+u(e,"shrink","negative")+e;case 5292:return W+e+R+u(e,"basis","preferred-size")+e;case 6060:return W+"box-"+u(e,"-grow","")+W+e+R+u(e,"grow","positive")+e;case 4554:return W+u(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+B+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~o(e,"stretch")?te(u(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,h(e)-3-(~o(e,"!important")&&10))){case 107:return u(e,":",":"+W)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+W+(45===l(e,14)?"inline-":"")+"box$3$1"+W+"$2$3$1"+R+"$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return W+e+R+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+R+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+R+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return W+e+R+e+e}return e}var re=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case F:e.return=te(e.value,e.length);break;case G:return H([$(e,{value:u(e.value,"@","@"+W)})],n);case D:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return H([$(e,{props:[u(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return H([$(e,{props:[u(t,/:(plac\w+)/,":"+W+"input-$1")]}),$(e,{props:[u(t,/:(plac\w+)/,":-moz-$1")]}),$(e,{props:[u(t,/:(plac\w+)/,R+"input-$1")]})],n)}return""}))}}];const ne=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a,c,s=e.stylisPlugins||re,i={},u=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)i[t[r]]=!0;u.push(e)}));var o,l,f,h,d=[I,(h=function(e){o.insert(e)},function(e){e.root||(e=e.return)&&h(e)})],b=(l=[Y,ee].concat(s,d),f=p(l),function(e,t,r,n){for(var a="",c=0;c<f;c++)a+=l[c](e,t,r,n)||"";return a});c=function(e,t,r,n){o=r,H(J(e?e+"{"+t.styles+"}":t.styles),b),n&&(g.inserted[t.name]=!0)};var g={key:t,sheet:new n({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:c};return g.sheet.hydrate(u),g}}}]);