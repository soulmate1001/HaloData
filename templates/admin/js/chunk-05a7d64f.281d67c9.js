(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05a7d64f"],{1439:function(e,t,a){"use strict";var i=a("8712"),n=a.n(i);n.a},8712:function(e,t,a){},ac2a:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-wrapper"},[e._m(0),a("div",{staticClass:"animated"},[a("a-form",{attrs:{layout:"vertical"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}}},[a("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.1s"}},[a("a-input",{attrs:{placeholder:"用户名/邮箱"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.2s"}},[a("a-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),a("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.3s"}},[a("a-button",{attrs:{type:"primary",block:!0},on:{click:e.handleLogin}},[e._v("登录")])],1),a("a-row",[a("router-link",{attrs:{to:{name:"ResetPassword"}}},[e.resetPasswordButton?a("a",{staticClass:"tip animated fadeInRight",attrs:{href:"javascript:void(0);"}},[e._v("\n            找回密码\n          ")]):e._e()]),a("a",{staticClass:"tip animated fadeInUp",style:{"animation-delay":"0.4s"},on:{click:e.handleApiModifyModalOpen}},[e._v("\n          API 设置\n        ")])],1),a("a-modal",{attrs:{title:"API 设置",visible:e.apiModifyVisible},on:{ok:e.handleApiModifyOk,cancel:e.handleApiModifyCancel}},[a("a-form",[a("a-form-item",{attrs:{extra:"如果 halo admin 不是独立部署，请不要更改此 API"}},[a("a-input",{model:{value:e.apiUrl,callback:function(t){e.apiUrl=t},expression:"apiUrl"}})],1),a("a-form-item",[a("a-button",{on:{click:e.handleApiUrlRestore}},[e._v("\n              恢复默认\n            ")])],1)],1)],1)],1)],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"halo-logo animated fadeInUp"},[a("span",[e._v("Halo")])])}],r=(a("efce"),a("4634"),a("ed8b"),a("c041"),a("97a3")),s=a("591a");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(a,!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={data:function(){return{username:null,password:null,apiModifyVisible:!1,defaultApiBefore:window.location.protocol+"//",apiUrl:window.location.host,resetPasswordButton:!1}},computed:l({},Object(s["c"])({defaultApiUrl:"apiUrl"})),created:function(){var e=this;document.addEventListener("keydown",(function(t){72===t.keyCode&&t.altKey&&t.shiftKey&&e.toggleHidden()}))},methods:l({},Object(s["b"])(["login","loadUser","loadOptions"]),{},Object(s["d"])({setApiUrl:"SET_API_URL",restoreApiUrl:"RESTORE_API_URL"}),{handleLogin:function(){var e=this;this.username?this.password?this.login({username:this.username,password:this.password}).then((function(t){e.loginSuccess()})):this.$message.warn("密码不能为空！"):this.$message.warn("用户名不能为空！")},loginSuccess:function(){this.loadUser(),this.loadOptions(),this.$route.query.redirect?this.$router.replace(this.$route.query.redirect):this.$router.replace({name:"Dashboard"})},handleApiModifyModalOpen:function(){this.apiUrl=this.defaultApiUrl,this.apiModifyVisible=!0},handleApiModifyOk:function(){this.setApiUrl(this.apiUrl),this.apiModifyVisible=!1},handleApiModifyCancel:function(){this.apiModifyVisible=!1},handleApiUrlRestore:function(){this.restoreApiUrl(),this.apiUrl=this.defaultApiUrl},toggleHidden:function(){this.resetPasswordButton=!this.resetPasswordButton}})},d=c,p=(a("1439"),a("6691")),u=Object(p["a"])(d,i,n,!1,null,null,null);t["default"]=u.exports}}]);