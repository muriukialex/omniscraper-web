(self.webpackChunkomniscraper_frontend=self.webpackChunkomniscraper_frontend||[]).push([[255],{5513:(n,t,e)=>{"use strict";e.d(t,{VK:()=>T,rU:()=>H});var r=e(6353),o=e(3552),i=e(7294),a=e(2122),c=e(8273),f=e(2177);function u(n){return"/"===n.charAt(0)?n:"/"+n}function s(n){return"/"===n.charAt(0)?n.substr(1):n}function l(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function h(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function d(n){var t=n.pathname,e=n.search,r=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function v(n,t,e,r){var o;"string"===typeof n?(o=function(n){var t=n||"/",e="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(e=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===e?"":e,hash:"#"===r?"":r}}(n)).state=t:(void 0===(o=(0,a.Z)({},n)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=(0,c.Z)(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function p(){var n=null;var t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,r,o){if(null!=n){var i="function"===typeof n?n(t,e):n;"string"===typeof i?"function"===typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(n){var e=!0;function r(){e&&n.apply(void 0,arguments)}return t.push(r),function(){e=!1,t=t.filter((function(n){return n!==r}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];t.forEach((function(n){return n.apply(void 0,e)}))}}}var w=!("undefined"===typeof window||!window.document||!window.document.createElement);function m(n,t){t(window.confirm(n))}var y="popstate",g="hashchange";function O(){try{return window.history.state||{}}catch(n){return{}}}function P(n){void 0===n&&(n={}),w||(0,f.Z)(!1);var t,e=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=n,c=i.forceRefresh,s=void 0!==c&&c,P=i.getUserConfirmation,k=void 0===P?m:P,x=i.keyLength,A=void 0===x?6:x,b=n.basename?h(u(n.basename)):"";function E(n){var t=n||{},e=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return b&&(i=l(i,b)),v(i,r,e)}function C(){return Math.random().toString(36).substr(2,A)}var L=p();function T(n){(0,a.Z)(D,n),D.length=e.length,L.notifyListeners(D.location,D.action)}function R(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||U(E(n.state))}function Z(){U(E(O()))}var S=!1;function U(n){if(S)S=!1,T();else{L.confirmTransitionTo(n,"POP",k,(function(t){t?T({action:"POP",location:n}):function(n){var t=D.location,e=H.indexOf(t.key);-1===e&&(e=0);var r=H.indexOf(n.key);-1===r&&(r=0);var o=e-r;o&&(S=!0,N(o))}(n)}))}}var I=E(O()),H=[I.key];function K(n){return b+d(n)}function N(n){e.go(n)}var F=0;function _(n){1===(F+=n)&&1===n?(window.addEventListener(y,R),o&&window.addEventListener(g,Z)):0===F&&(window.removeEventListener(y,R),o&&window.removeEventListener(g,Z))}var B=!1;var D={length:e.length,action:"POP",location:I,createHref:K,push:function(n,t){var o="PUSH",i=v(n,t,C(),D.location);L.confirmTransitionTo(i,o,k,(function(n){if(n){var t=K(i),a=i.key,c=i.state;if(r)if(e.pushState({key:a,state:c},null,t),s)window.location.href=t;else{var f=H.indexOf(D.location.key),u=H.slice(0,f+1);u.push(i.key),H=u,T({action:o,location:i})}else window.location.href=t}}))},replace:function(n,t){var o="REPLACE",i=v(n,t,C(),D.location);L.confirmTransitionTo(i,o,k,(function(n){if(n){var t=K(i),a=i.key,c=i.state;if(r)if(e.replaceState({key:a,state:c},null,t),s)window.location.replace(t);else{var f=H.indexOf(D.location.key);-1!==f&&(H[f]=i.key),T({action:o,location:i})}else window.location.replace(t)}}))},go:N,goBack:function(){N(-1)},goForward:function(){N(1)},block:function(n){void 0===n&&(n=!1);var t=L.setPrompt(n);return B||(_(1),B=!0),function(){return B&&(B=!1,_(-1)),t()}},listen:function(n){var t=L.appendListener(n);return _(1),function(){_(-1),t()}}};return D}var k="hashchange",x={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+s(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:s,decodePath:u},slash:{encodePath:u,decodePath:u}};function A(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function b(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function E(n){window.location.replace(A(window.location.href)+"#"+n)}function C(n){void 0===n&&(n={}),w||(0,f.Z)(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),r=e.getUserConfirmation,o=void 0===r?m:r,i=e.hashType,c=void 0===i?"slash":i,s=n.basename?h(u(n.basename)):"",y=x[c],g=y.encodePath,O=y.decodePath;function P(){var n=O(b());return s&&(n=l(n,s)),v(n)}var C=p();function L(n){(0,a.Z)(B,n),B.length=t.length,C.notifyListeners(B.location,B.action)}var T=!1,R=null;function Z(){var n,t,e=b(),r=g(e);if(e!==r)E(r);else{var i=P(),a=B.location;if(!T&&(t=i,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(R===d(i))return;R=null,function(n){if(T)T=!1,L();else{var t="POP";C.confirmTransitionTo(n,t,o,(function(e){e?L({action:t,location:n}):function(n){var t=B.location,e=H.lastIndexOf(d(t));-1===e&&(e=0);var r=H.lastIndexOf(d(n));-1===r&&(r=0);var o=e-r;o&&(T=!0,K(o))}(n)}))}}(i)}}var S=b(),U=g(S);S!==U&&E(U);var I=P(),H=[d(I)];function K(n){t.go(n)}var N=0;function F(n){1===(N+=n)&&1===n?window.addEventListener(k,Z):0===N&&window.removeEventListener(k,Z)}var _=!1;var B={length:t.length,action:"POP",location:I,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=A(window.location.href)),e+"#"+g(s+d(n))},push:function(n,t){var e="PUSH",r=v(n,void 0,void 0,B.location);C.confirmTransitionTo(r,e,o,(function(n){if(n){var t=d(r),o=g(s+t);if(b()!==o){R=t,function(n){window.location.hash=n}(o);var i=H.lastIndexOf(d(B.location)),a=H.slice(0,i+1);a.push(t),H=a,L({action:e,location:r})}else L()}}))},replace:function(n,t){var e="REPLACE",r=v(n,void 0,void 0,B.location);C.confirmTransitionTo(r,e,o,(function(n){if(n){var t=d(r),o=g(s+t);b()!==o&&(R=t,E(o));var i=H.indexOf(d(B.location));-1!==i&&(H[i]=t),L({action:e,location:r})}}))},go:K,goBack:function(){K(-1)},goForward:function(){K(1)},block:function(n){void 0===n&&(n=!1);var t=C.setPrompt(n);return _||(F(1),_=!0),function(){return _&&(_=!1,F(-1)),t()}},listen:function(n){var t=C.appendListener(n);return F(1),function(){F(-1),t()}}};return B}e(5697);var L=e(9756),T=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=P(t.props),t}return(0,o.Z)(t,n),t.prototype.render=function(){return i.createElement(r.F0,{history:this.history,children:this.props.children})},t}(i.Component);i.Component;var R=function(n,t){return"function"===typeof n?n(t):n},Z=function(n,t){return"string"===typeof n?v(n,null,null,t):n},S=function(n){return n},U=i.forwardRef;"undefined"===typeof U&&(U=S);var I=U((function(n,t){var e=n.innerRef,r=n.navigate,o=n.onClick,c=(0,L.Z)(n,["innerRef","navigate","onClick"]),f=c.target,u=(0,a.Z)({},c,{onClick:function(n){try{o&&o(n)}catch(t){throw n.preventDefault(),t}n.defaultPrevented||0!==n.button||f&&"_self"!==f||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),r())}});return u.ref=S!==U&&t||e,i.createElement("a",u)}));var H=U((function(n,t){var e=n.component,o=void 0===e?I:e,c=n.replace,u=n.to,s=n.innerRef,l=(0,L.Z)(n,["component","replace","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(n){n||(0,f.Z)(!1);var e=n.history,r=Z(R(u,n.location),n.location),h=r?e.createHref(r):"",d=(0,a.Z)({},l,{href:h,navigate:function(){var t=R(u,n.location);(c?e.replace:e.push)(t)}});return S!==U?d.ref=t||s:d.innerRef=s,i.createElement(o,d)}))})),K=function(n){return n},N=i.forwardRef;"undefined"===typeof N&&(N=K);N((function(n,t){var e=n["aria-current"],o=void 0===e?"page":e,c=n.activeClassName,u=void 0===c?"active":c,s=n.activeStyle,l=n.className,h=n.exact,d=n.isActive,v=n.location,p=n.sensitive,w=n.strict,m=n.style,y=n.to,g=n.innerRef,O=(0,L.Z)(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(n){n||(0,f.Z)(!1);var e=v||n.location,c=Z(R(y,e),e),P=c.pathname,k=P&&P.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=k?(0,r.LX)(e.pathname,{path:k,exact:h,sensitive:p,strict:w}):null,A=!!(d?d(x,e):x),b=A?function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter((function(n){return n})).join(" ")}(l,u):l,E=A?(0,a.Z)({},m,{},s):m,C=(0,a.Z)({"aria-current":A&&o||null,className:b,style:E,to:c},O);return K!==N?C.ref=t||g:C.innerRef=g,i.createElement(H,C)}))}))}}]);