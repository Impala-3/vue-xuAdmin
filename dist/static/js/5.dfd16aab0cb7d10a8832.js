webpackJsonp([5],{Z27E:function(s,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",[i("el-radio",{attrs:{label:"superAdmin",border:""},model:{value:s.permissions,callback:function(e){s.permissions=e},expression:"permissions"}},[s._v("超级管理员")]),s._v(" "),i("el-radio",{attrs:{label:"admin",border:""},model:{value:s.permissions,callback:function(e){s.permissions=e},expression:"permissions"}},[s._v("管理员")]),s._v(" "),i("el-radio",{attrs:{label:"ordinary",border:""},model:{value:s.permissions,callback:function(e){s.permissions=e},expression:"permissions"}},[s._v("普通用户")]),s._v(" "),i("div",{staticStyle:{margin:"50px 0px"}},[s._v('\n    [权限:  "'+s._s(s.options.permissions)+'",    角色:   "'+s._s(s.options.role)+'"]\n  ')]),s._v(" "),i("p",[s._v("需要权限的目录：")]),s._v(" "),i("p",[s._v('“上传”：["超级管理员"]')]),s._v(" "),i("p",[s._v('“编辑器”：["超级管理员", “管理员”’]')]),s._v(" "),i("p",[s._v('“系统设置”：["超级管理员"]')])],1)},staticRenderFns:[]};var r=i("VU/8")({name:"permissions",data:function(){return{permissions:this.$store.getters.info.role,options:{role:this.$store.getters.info.role,permissions:this.$store.getters.info.permissions}}},mounted:function(){this.$store.dispatch("setRole",this.options)},watch:{permissions:function(s,e){switch(s){case"superAdmin":this.options={role:"superAdmin",permissions:"超级管理员"};break;case"admin":this.options={role:"admin",permissions:"管理员"};break;case"ordinary":this.options={role:"ordinary",permissions:"普通用户"}}this.$store.dispatch("setRole",this.options),this.$store.dispatch("removeOtherTab",{tabItem:{title:"control",path:"/permissions"},router:this.$router})}}},o,!1,function(s){i("m4MH")},"data-v-9872b04c",null);e.default=r.exports},m4MH:function(s,e){}});
//# sourceMappingURL=5.dfd16aab0cb7d10a8832.js.map