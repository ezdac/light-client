(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12baf7f0"],{"248b":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"backup-state"},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"backup-state__description",attrs:{cols:"12"}},[t._v(" "+t._s(t.$t("backup-state.description"))+" ")])],1),o("v-list",{staticClass:"backup-state__buttons"},[o("v-tooltip",{attrs:{color:"#ea6464",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("div",t._g({},t.isConnected?null:r),[o("v-list-item",{staticClass:"backup-state__buttons__download-state",attrs:{disabled:!t.isConnected},on:{click:function(e){t.downloadState=!0}}},[o("div",{staticClass:"backup-state__buttons__download-state__icon",class:{"backup-state__buttons__download-state__icon disabled-icon":!t.isConnected}},[o("v-img",{attrs:{src:n("e038")}})],1),o("v-list-item-content",[o("div",{staticClass:"backup-state__buttons__download-state__title"},[t._v(" "+t._s(t.$t("backup-state.download"))+" ")])])],1)],1)]}}])},[o("span",[t._v(t._s(t.$t("backup-state.disabled-download")))])]),o("v-tooltip",{attrs:{color:"#ea6464",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("div",t._g({},t.isConnected?r:null),[o("v-list-item",{staticClass:"backup-state__buttons__upload-state",on:{click:function(e){t.uploadState=!0}}},[o("div",{staticClass:"backup-state__buttons__upload-state__icon",class:{"backup-state__buttons__upload-state__icon disabled-icon":t.isConnected}},[o("v-img",{attrs:{src:n("3549")}})],1),o("v-list-item-content",[o("div",{staticClass:"backup-state__buttons__upload-state__title"},[t._v(" "+t._s(t.$t("backup-state.upload"))+" ")])])],1)],1)]}}])},[o("span",[t._v(t._s(t.$t("backup-state.disabled-upload")))])])],1),o("download-state-dialog",{attrs:{visible:t.downloadState},on:{cancel:function(e){t.downloadState=!1}}}),o("upload-state-dialog",{attrs:{visible:t.uploadState},on:{cancel:function(e){t.uploadState=!1}}})],1)},r=[],a=n("9ab4"),c=n("60a3"),i=n("2f62"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("raiden-dialog",{staticClass:"download-state",attrs:{visible:t.visible},on:{close:t.cancel}},[o("v-card-title",[t._v(" "+t._s(t.$t("backup-state.download"))+" ")]),o("v-card-text",[o("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[o("v-col",{attrs:{cols:"6"}},[o("v-img",{staticClass:"download-state__warning",attrs:{src:n("afb7")}})],1),o("v-col",{attrs:{cols:"12"}},[t._v(" "+t._s(t.$t("backup-state.download-warning"))+" ")])],1)],1),o("v-card-actions",[o("action-button",{attrs:{enabled:"","full-width":"",text:t.$t("backup-state.download-button")},on:{click:function(e){return t.getAndDownloadState()}}})],1)],1)},u=[],l=n("4795"),f=n.n(l),p=n("66bc"),d=n("750b"),b=n("152b");function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t}function g(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function w(t){var e=j();return function(){var n,o=S(t);if(e){var r=S(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==k(e)&&"function"!==typeof e?O(t):e}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}function k(t){return k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}var C=function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"===typeof Reflect?"undefined":k(Reflect))&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},D=function(t,e,n,o){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function c(t){try{s(o.next(t))}catch(e){a(e)}}function i(t){try{s(o["throw"](t))}catch(e){a(e)}}function s(t){t.done?n(t.value):r(t.value).then(c,i)}s((o=o.apply(t,e||[])).next())}))},P=function(t){g(n,t);var e=w(n);function n(){return v(this,n),e.apply(this,arguments)}return _(n,[{key:"cancel",value:function(){}},{key:"getAndDownloadState",value:function(){return D(this,void 0,void 0,f.a.mark((function t(){var e,n,o,r,a,c;return f.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.navigateToHome(),t.next=3,this.$raiden.getState();case 3:e=t.sent,n=JSON.stringify(e),o="raiden_lc_state_".concat((new Date).toISOString(),".json"),r=new File([n],o,{type:"application/json"}),a=URL.createObjectURL(r),c=document.createElement("a"),c.href=a,c.download=o,c.style.display="none",document.body.appendChild(c),c.click(),setTimeout((function(){URL.revokeObjectURL(a),document.body.removeChild(c)}),0);case 15:case"end":return t.stop()}}),t,this)})))}}]),n}(Object(c["c"])(b["a"]));C([Object(c["d"])({required:!0,type:Boolean,default:!1})],P.prototype,"visible",void 0),C([Object(c["b"])()],P.prototype,"cancel",null),P=C([Object(c["a"])({components:{RaidenDialog:p["a"],ActionButton:d["a"]}})],P);var R=P,z=R,E=(n("2597"),n("2877")),x=n("6544"),V=n.n(x),$=n("99d9"),T=n("62ad"),L=n("adda"),I=n("0fd9"),A=Object(E["a"])(z,s,u,!1,null,"eb26b892",null),U=A.exports;V()(A,{VCardActions:$["a"],VCardText:$["c"],VCardTitle:$["d"],VCol:T["a"],VImg:L["a"],VRow:I["a"]});var B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("raiden-dialog",{staticClass:"upload-state",attrs:{visible:t.visible},on:{close:t.cancel}},[n("v-card-title",[t._v(t._s(t.$t("backup-state.upload")))]),t.dropzoneErrorMessage?n("v-card-text",[n("v-row",{staticClass:"upload-state__error",attrs:{justify:"center","no-gutters":""}},[t._v(" "+t._s(t.$t("backup-state.upload-error"))+" ")])],1):t.uploadingStateProgress?n("v-card-actions",[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-progress-circular",{staticClass:"upload-state__progress",attrs:{size:110,width:7,indeterminate:""}})],1)],1):n("v-card-actions",[n("div",{staticClass:"upload-state__dropzone",class:{"upload-state__dropzone active-dropzone":t.activeDropzone},on:{dragenter:t.onDropzoneEnter,dragleave:t.onDropzoneLeave,dragover:function(t){t.preventDefault()},drop:t.onDropzoneDrop}},[n("v-row",{staticClass:"upload-state__dropzone__icon",attrs:{justify:"center","no-gutters":""}},[n("v-icon",{staticClass:"upload-state__dropzone__icon--inactive-dropzone",class:{"upload-state__dropzone__icon--active-dropzone":t.activeDropzone},attrs:{size:"90px"}},[t._v(" mdi-upload ")])],1),n("v-row",{staticClass:"upload-state__dropzone__description",attrs:{justify:"center","no-gutters":""}},[t._v(" "+t._s(t.$t("backup-state.upload-drag-and-drop"))+" ")]),n("v-row",{staticClass:"upload-state__dropzone__description",attrs:{justify:"center","no-gutters":""}},[t._v(" "+t._s(t.$t("backup-state.upload-divider"))+" ")]),n("v-row",{staticClass:"upload-state__dropzone__button"},[n("input",{ref:"stateInput",attrs:{type:"file",hidden:""},on:{change:t.onFileSelect}}),n("action-button",{attrs:{enabled:!t.activeDropzone,ghost:"",text:t.$t("backup-state.upload-button")},on:{click:function(e){return t.$refs.stateInput.click()}}})],1)],1)])],1)},F=[];function J(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function q(t,e,n){return e&&M(t.prototype,e),n&&M(t,n),t}function N(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&H(t,e)}function H(t,e){return H=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},H(t,e)}function G(t){var e=W();return function(){var n,o=X(t);if(e){var r=X(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return K(this,n)}}function K(t,e){return!e||"object"!==Y(e)&&"function"!==typeof e?Q(t):e}function Q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function X(t){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},X(t)}function Y(t){return Y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(t)}var Z=function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"===typeof Reflect?"undefined":Y(Reflect))&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},tt=function(t){N(n,t);var e=G(n);function n(){var t;return J(this,n),t=e.apply(this,arguments),t.dragCount=0,t.activeDropzone=!1,t.dropzoneErrorMessage=!1,t.uploadingStateProgress=!1,t}return q(n,[{key:"cancel",value:function(){}},{key:"onDropzoneEnter",value:function(t){t.preventDefault(),this.dragCount++,this.activeDropzone=!0}},{key:"onDropzoneLeave",value:function(t){t.preventDefault(),this.dragCount--,this.dragCount<=0&&(this.activeDropzone=!1)}},{key:"onDropzoneDrop",value:function(t){var e,n;if(t.preventDefault(),this.activeDropzone=!1,null===(e=t.dataTransfer)||void 0===e?void 0:e.files){var o=null===(n=t.dataTransfer)||void 0===n?void 0:n.files;this.uploadState(o)}}},{key:"onFileSelect",value:function(t){if(t.target.files){var e=t.target.files;this.uploadState(e)}}},{key:"dropzoneError",value:function(){var t=this;this.uploadingStateProgress=!1,this.dropzoneErrorMessage=!0,setTimeout((function(){t.dropzoneErrorMessage=!1}),2e3)}},{key:"uploadState",value:function(t){var e=this;t.length>1&&this.dropzoneError();var n=new FileReader;n.onload=function(t){var n=t.target;if(t.target)try{e.uploadingStateProgress=!0;var o=n.result;JSON.parse(String(o)),e.$store.commit("backupState",o),setTimeout((function(){e.uploadingStateProgress=!1,e.cancel()}),1e3)}catch(r){e.dropzoneError()}},n.readAsText(t[0])}}]),n}(c["e"]);Z([Object(c["d"])({required:!0,type:Boolean,default:!1})],tt.prototype,"visible",void 0),Z([Object(c["b"])()],tt.prototype,"cancel",null),tt=Z([Object(c["a"])({components:{RaidenDialog:p["a"],ActionButton:d["a"]}})],tt);var et=tt,nt=et,ot=(n("ec77"),n("132d")),rt=n("490a"),at=Object(E["a"])(nt,B,F,!1,null,"2e3e6b30",null),ct=at.exports;function it(t){return it="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it(t)}function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function ut(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach((function(e){lt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function lt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ft(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pt(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&dt(t,e)}function dt(t,e){return dt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},dt(t,e)}function bt(t){var e=_t();return function(){var n,o=gt(t);if(e){var r=gt(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return vt(this,n)}}function vt(t,e){return!e||"object"!==it(e)&&"function"!==typeof e?yt(t):e}function yt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function gt(t){return gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},gt(t)}V()(at,{VCardActions:$["a"],VCardText:$["c"],VCardTitle:$["d"],VIcon:ot["a"],VProgressCircular:rt["a"],VRow:I["a"]});var ht=function(t){pt(n,t);var e=bt(n);function n(){var t;return ft(this,n),t=e.apply(this,arguments),t.downloadState=!1,t.uploadState=!1,t}return n}(c["e"]);ht=Object(a["b"])([Object(c["a"])({components:{DownloadStateDialog:U,UploadStateDialog:ct},computed:ut({},Object(i["b"])(["isConnected"]))})],ht);var wt=ht,mt=wt,Ot=(n("81b8"),n("88605")),jt=n("da13"),St=n("5d23"),kt=n("3a2f"),Ct=Object(E["a"])(mt,o,r,!1,null,"5a9a62f0",null);e["default"]=Ct.exports;V()(Ct,{VCol:T["a"],VImg:L["a"],VList:Ot["a"],VListItem:jt["a"],VListItemContent:St["b"],VRow:I["a"],VTooltip:kt["a"]})},2597:function(t,e,n){"use strict";var o=n("48ae"),r=n.n(o);r.a},3307:function(t,e,n){},3549:function(t,e,n){t.exports=n.p+"img/state_upload.dea399eb.png"},"48ae":function(t,e,n){},"81b8":function(t,e,n){"use strict";var o=n("bcd0"),r=n.n(o);r.a},bcd0:function(t,e,n){},e038:function(t,e,n){t.exports=n.p+"img/state_download.fc1f0473.png"},ec77:function(t,e,n){"use strict";var o=n("3307"),r=n.n(o);r.a}}]);