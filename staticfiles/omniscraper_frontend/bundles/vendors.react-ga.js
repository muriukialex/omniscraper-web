(self.webpackChunkomniscraper_frontend=self.webpackChunkomniscraper_frontend||[]).push([[700],{1516:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>fe});var r={};n.r(r),n.d(r,{addTrackers:()=>$,default:()=>ae,event:()=>ee,exception:()=>te,ga:()=>U,initialize:()=>B,modalview:()=>X,outboundLink:()=>re,pageview:()=>W,plugin:()=>ne,send:()=>Q,set:()=>H,testModeAPI:()=>oe,timing:()=>Y});var o=n(7294),a=n(5697),i=n.n(a);function c(e){console.warn("[react-ga]",e)}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O="_blank",w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,r,a=y(i);function i(){var e;p(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(v(e=a.call.apply(a,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,a=n.to,c=n.onClick,l=n.trackerNames,u={label:o},f=r!==O,s=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);f&&s?(t.preventDefault(),i.trackLink(u,(function(){window.location.href=a}),l)):i.trackLink(u,(function(){}),l),c&&c(t)})),e}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=f(f({},s(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return n===O&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,o.createElement("a",r)}}])&&g(t.prototype,n),r&&g(t,r),i}(o.Component);h(w,"trackLink",(function(){c("ga tracking not enabled")})),w.propTypes={eventLabel:i().string.isRequired,target:i().string,to:i().string,onClick:i().func,trackerNames:i().arrayOf(i().string)},w.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function j(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(c("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function k(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var P=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function A(e){return k(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(P)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var S=!1;function E(e){console.info("[react-ga]",e)}var D=[];const C={calls:D,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];D.push([].concat(t))},resetCalls:function(){D.length=0}};function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e){return(q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _="undefined"===typeof window||"undefined"===typeof document,R=!1,J=!0,z=!1,G=!0,M=!0,F=function(){var e;return z?C.ga.apply(C,arguments):!_&&(window.ga?(e=window).ga.apply(e,arguments):c("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function K(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return(arguments.length>1?arguments[1]:void 0)&&(n=A(e)),t&&(n=j(n)),n}(e,J,M)}function V(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!G&&Array.isArray(e)||F.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){F.apply(void 0,L(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):c("ga command must be a string")}function Z(e,t){e?t&&(t.debug&&!0===t.debug&&(R=!0),!1===t.titleCase&&(J=!1),!1===t.redactEmail&&(M=!1),t.useExistingGa)||(t&&t.gaOptions?F("create",e,t.gaOptions):F("create",e,"auto")):c("gaTrackingID is required in initialize()")}function $(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===q(e)?Z(e.trackingId,e):c("All configs must be an object")})):Z(e,t),!0}function B(e,t){if(t&&!0===t.testMode)z=!0;else{if(_)return;t&&!0===t.standardImplementation||function(e){if(!S){S=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,a,i,c,l,u=e&&e.onerror;n=window,r=document,o="script",a=t,i="ga",n.GoogleAnalyticsObject=i,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),l=r.getElementsByTagName(o)[0],c.async=1,c.src=a,c.onerror=u,l.parentNode.insertBefore(c,l)}}(t)}G=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,$(e,t)}function U(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(F.apply(void 0,t),R&&(E("called ga('arguments');"),E("with arguments: ".concat(JSON.stringify(t))))),window.ga}function H(e,t){e?"object"===q(e)?(0===Object.keys(e).length&&c("empty `fieldsObject` given to .set()"),V(t,"set",e),R&&(E("called ga('set', fieldsObject);"),E("with fieldsObject: ".concat(JSON.stringify(e))))):c("Expected `fieldsObject` arg to be an Object"):c("`fieldsObject` is required in .set()")}function Q(e,t){V(t,"send",e),R&&(E("called ga('send', fieldObject);"),E("with fieldObject: ".concat(JSON.stringify(e))),E("with trackers: ".concat(JSON.stringify(t))))}function W(e,t,n){if(e){var r=k(e);if(""!==r){var o={};if(n&&(o.title=n),V(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),R){E("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),E("with path: ".concat(r).concat(a))}}else c("path cannot be an empty string in .pageview()")}else c("path is required in .pageview()")}function X(e,t){if(e){var n,r="/"===(n=k(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);V(t,"send","pageview",o),R&&(E("called ga('send', 'pageview', path);"),E("with path: ".concat(o)))}else c("modalName cannot be an empty string or a single / in .modalview()")}else c("modalName is required in .modalview(modalName)")}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var i={hitType:"timing",timingCategory:K(t),timingVar:K(n),timingValue:r};o&&(i.timingLabel=K(o)),Q(i,a)}else c("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,l=x(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var f={hitType:"event",eventCategory:K(t),eventAction:K(n)};r&&(f.eventLabel=K(r)),"undefined"!==typeof o&&("number"!==typeof o?c("Expected `args.value` arg to be a Number."):f.eventValue=o),"undefined"!==typeof a&&("boolean"!==typeof a?c("`args.nonInteraction` must be a boolean."):f.nonInteraction=a),"undefined"!==typeof i&&("string"!==typeof i?c("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&c("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),f.transport=i)),Object.keys(l).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){f[e]=l[e]})),Object.keys(l).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){f[e]=l[e]})),Q(f,u)}else c("args.category AND args.action are required in event()")}function te(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=K(n)),"undefined"!==typeof r&&("boolean"!==typeof r?c("`args.fatal` must be a boolean."):o.exFatal=r),Q(o,t)}var ne={require:function(e,t,n){if(e){var r=k(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==q(t))return void c("Expected `options` arg to be an Object");0===Object.keys(t).length&&c("Empty `options` given to .require()"),U(o,r,t),R&&E("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else U(o,r),R&&E("called ga('require', '".concat(r,"');"))}else c("`name` cannot be an empty string in .require()")}else c("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];if(1===a.length?n=a[0]:(r=a[0],n=a[1]),"string"!==typeof e)c("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)c("Expected `action` arg to be a String.");else{var l="".concat(e,":").concat(t);n=n||null,r&&n?(U(l,r,n),R&&(E("called ga('".concat(l,"');")),E('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(U(l,n),R&&(E("called ga('".concat(l,"');")),E("with payload: ".concat(JSON.stringify(n))))):(U(l),R&&E("called ga('".concat(l,"');")))}}};function re(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:K(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},Q(r,n)}else c("args.label is required in outboundLink()");else c("hitCallback function is required")}var oe=C;const ae={initialize:B,ga:U,set:H,send:Q,pageview:W,modalview:X,timing:Y,event:ee,exception:te,plugin:ne,outboundLink:re,testModeAPI:C};function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}w.origTrackLink=w.trackLink,w.trackLink=re;var ue=w;const fe=ce(ce({},r),{},{OutboundLink:ue})}}]);