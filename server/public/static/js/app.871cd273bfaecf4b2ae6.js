webpackJsonp([1],[,,,,,function(t,e,a){"use strict";var s=a(3),i=a(81),n=a(40),r=a(37),l=a(39),o=a(38);window.axios=a(18),window.axios.defaults.baseURL="http://www.seusite.com.br",window.axios.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var c={modules:{user:n.a,email:r.a,list:l.a,lead:o.a}};s.a.use(i.a),e.a=new i.a.Store(c)},,,,,,,,,function(t,e,a){"use strict";var s=a(3),i=a(79),n=a(58),r=a.n(n),l=a(59),o=a.n(l),c=a(5),d=a(61),u=a.n(d),v=a(62),_=a.n(v),m=a(64),p=a.n(m),f=a(60),h=a.n(f),C=a(63),g=a.n(C),w=a(66),b=a.n(w),x=a(67),$=a.n(x),y=a(65),E=a.n(y);s.a.use(i.a);var A=new i.a({routes:[{path:"/",name:"Hello",component:r.a,meta:{requiresAuth:!0}},{path:"/email",name:"EmailList",component:u.a,meta:{requiresAuth:!0}},{path:"/email/new",name:"EmailNew",component:_.a,meta:{requiresAuth:!0}},{path:"/emails/view/:id",name:"EmailView",component:p.a,meta:{requiresAuth:!0}},{path:"/emails/edit/:id",name:"EmailEdit",component:h.a,meta:{requiresAuth:!0}},{path:"/emails/remove/:id",name:"EmailRemove",component:g.a,meta:{requiresAuth:!0}},{path:"/lists",name:"ListsList",component:b.a,meta:{requiresAuth:!0}},{path:"/lists/:id",name:"ListsView",component:$.a,meta:{requiresAuth:!0}},{path:"/leads/:id",name:"Lead",component:E.a,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:o.a}]});e.a=A,A.beforeEach(function(t,e,a){var s=t.meta.requiresAuth||!1,i=c.a.state.user.token;return i&&(window.axios.defaults.headers.common.Authorization="bearer "+i),s?c.a.dispatch("getCurrentUser").then(function(){return a()}).catch(function(){return a({path:"login"})}):a()})},function(t,e){},,function(t,e,a){function s(t){a(52)}var i=a(1)(a(41),a(74),s,null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(3),i=a(17),n=a.n(i),r=a(14),l=a(5),o=a(15);a.n(o);a(16),s.a.config.productionTip=!1,new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:n.a},store:l.a})},function(t,e,a){"use strict";var s=a(12);e.a={state:{emails:[],totals:[],email:{}},mutations:{updateEmails:function(t,e){t.emails=e},updateTotals:function(t,e){t.totals=e},updateEmail:function(t,e){t.email=e}},actions:{getAll:function(t){return window.axios.get("/api/campaigns").then(function(e){return t.commit("updateEmails",e.data.data),e})},totals:function(t){return window.axios.get("/api/campaigns/totals").then(function(e){return t.commit("updateTotals",e.data),e})},getOne:function(t,e){return window.axios.get("/api/campaigns/"+e).then(function(e){return t.commit("updateEmail",e.data.data),e})},insert:function(t,e){return window.axios.post("/api/campaigns",s.stringify(e)).then(function(t){return t})},update:function(t,e){return window.axios.put("/api/campaigns/"+e._id,s.stringify(e)).then(function(t){return t})},remove:function(t,e){return window.axios.delete("/api/campaigns/"+e).then(function(t){return t})}}}},function(t,e,a){"use strict";e.a={state:{leads:[],lead:{}},mutations:{updateLeads:function(t,e){t.leads=e},updateLead:function(t,e){t.lead=e}},actions:{getAllLeads:function(t,e){return window.axios.get("/api/leads-by-list/"+e).then(function(e){return t.commit("updateLeads",e.data.data),e})},getOneLead:function(t,e){return window.axios.get("/api/leads/"+e).then(function(e){return t.commit("updateLead",e.data.data),e})}}}},function(t,e,a){"use strict";e.a={state:{lists:[],list:{}},mutations:{updateLists:function(t,e){t.lists=e},updateList:function(t,e){t.list=e}},actions:{getAllList:function(t){return window.axios.get("/api/lists").then(function(e){return t.commit("updateLists",e.data.data),e})}}}},function(t,e,a){"use strict";var s=a(12);e.a={state:{me:null,token:window.localStorage.getItem("token")},mutations:{updateUser:function(t,e){t.me=e},updateToken:function(t,e){t.token=e}},actions:{getCurrentUser:function(t){return window.axios.get("/oauth/me").then(function(e){return t.commit("updateUser",e.data),e})},authentication:function(t,e){return window.axios.post("/oauth/token",s.stringify(e)).then(function(e){return t.commit("updateToken",e.data.token),window.localStorage.setItem("token",e.data.token),e})},register:function(t,e){return window.axios.post("/oauth/register",s.stringify(e)).then(function(a){var s={username:e.email,password:e.password};return t.dispatch("authentication",s)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),i=a.n(s);e.default={name:"app",computed:{me:function(){return this.$store.state.user.me}},mounted:function(){i()(".dropdown-button").dropdown({belowOrigin:!0})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{campaigns:function(){return this.$store.state.email.emails},totals:function(){return this.$store.state.email.totals}},mounted:function(){this.$store.dispatch("getAll"),this.$store.dispatch("totals")}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{login:{},register:{}}},methods:{userLogin:function(){var t=this;this.$store.dispatch("authentication",this.login).then(function(){t.$router.push({path:"/"})})},userRegister:function(){var t=this;this.$store.dispatch("register",this.register).then(function(){t.$router.push({path:"/"})})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{email:function(){var t=this.$store.state.email.email;return t.lists=t.lists||[],t},lists:function(){return this.$store.state.list.lists}},methods:{save:function(){var t=this;this.$store.dispatch("update",this.email).then(function(){t.$router.push("/emails/view/"+t.email._id)})}},mounted:function(){this.$store.dispatch("getOne",this.$route.params.id),this.$store.dispatch("getAllList")}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{emails:function(){return this.$store.state.email.emails}},mounted:function(){this.$store.dispatch("getAll")}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{data:{lists:[]}}},computed:{lists:function(){return this.$store.state.list.lists}},methods:{save:function(){var t=this;this.$store.dispatch("insert",this.data).then(function(){t.$router.push("/email")})}},mounted:function(){this.$store.dispatch("getAllList")}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{email:function(){return this.$store.state.email.email}},methods:{remove:function(){var t=this;confirm("Tem certeza?")&&this.$store.dispatch("remove",this.email._id).then(function(){t.$router.push("/email")})}},mounted:function(){this.$store.dispatch("getOne",this.$route.params.id)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{email:function(){return this.$store.state.email.email},leads:function(){return this.$store.state.lead.leads},rendered_mail:function(){return"http://www.seusite.com.br/campaigns/email-render/"+this.email._id}},methods:{getLeads:function(){if(this.email.lists){var t=this.email.lists.join(",");this.$store.dispatch("getAllLeads",t)}else setTimeout(this.getLeads(),2e3)}},mounted:function(){this.$store.dispatch("getOne",this.$route.params.id),this.getLeads()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{lead:function(){return this.$store.state.lead.lead}},mounted:function(){this.$store.dispatch("getOneLead",this.$route.params.id)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{lists:function(){return this.$store.state.list.lists}},mounted:function(){this.$store.dispatch("getAllList")}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{leads:function(){return this.$store.state.lead.leads}},mounted:function(){this.$store.dispatch("getAllLeads",this.$route.params.id)}}},function(t,e){},,,,,,function(t,e,a){var s=a(1)(a(42),a(76),null,null,null);t.exports=s.exports},function(t,e,a){var s=a(1)(a(43),a(72),null,null,null);t.exports=s.exports},function(t,e,a){var s=a(1)(a(44),a(71),null,null,null);t.exports=s.exports},function(t,e,a){var s=a(1)(a(45),a(69),null,null,null);t.exports=s.exports},function(t,e,a){var s=a(1)(a(46),a(75),null,null,null);t.exports=s.exports},function(t,e,a){var s=a(1)(a(47),a(73),null,null,null);t.exports=s.exports},function(t,e,a){var s=a(1)(a(48),a(68),null,null,null);t.exports=s.exports},function(t,e,a){var s=a(1)(a(49),a(70),null,null,null);t.exports=s.exports},function(t,e,a){var s=a(1)(a(50),a(77),null,null,null);t.exports=s.exports},function(t,e,a){var s=a(1)(a(51),a(78),null,null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("h5",[t._v(t._s(t.email.title)+" - campanha")])]),t._v(" "),a("div",{staticClass:"col s12"},[a("a",{staticClass:"btn blue",attrs:{href:"#/emails/edit/"+t.email._id}},[t._v("editar")]),t._v(" "),a("a",{staticClass:"btn red",attrs:{href:"#/emails/remove/"+t.email._id}},[t._v("remover")])]),t._v(" "),a("div",{staticClass:"col s6"},[a("div",{staticClass:"card grey lighten-4"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Detalhes")]),t._v(" "),a("table",[a("tr",[a("th",[t._v("Título")]),t._v(" "),a("td",[t._v(t._s(t.email.title))])]),t._v(" "),a("tr",[a("th",[t._v("Data de disparo")]),t._v(" "),a("td",[t._v(t._s(t.email.start))])]),t._v(" "),a("tr",[a("th",[t._v("Aberturas")]),t._v(" "),a("td",[t._v(t._s(t.email.opens))])]),t._v(" "),a("tr",[a("th",[t._v("Cliques")]),t._v(" "),a("td",[t._v(t._s(t.email.clicks))])]),t._v(" "),a("tr",[a("th",[t._v("Descadastros")]),t._v(" "),a("td",[t._v(t._s(t.email.unsubscribe))])]),t._v(" "),a("tr",[a("th",[t._v("bounces")]),t._v(" "),a("td",[t._v(t._s(t.email.bounces))])])])])])]),t._v(" "),a("div",{staticClass:"col s6"},[a("div",{staticClass:"card grey lighten-4"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Campanha enviada")]),t._v(" "),a("iframe",{staticStyle:{width:"100%",height:"300px",border:"none"},attrs:{src:t.rendered_mail}})])])]),t._v(" "),a("div",{staticClass:"col s12"},[a("div",{staticClass:"card grey lighten-4"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Leads enviados")]),t._v(" "),a("table",[t._m(0),t._v(" "),a("tbody",t._l(t.leads,function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.email))]),t._v(" "),a("td",t._l(e.lists,function(e){return a("div",{staticClass:"chip"},[t._v(t._s(e.title))])})),t._v(" "),a("td",[a("a",{staticClass:"btn",attrs:{href:"#/leads/"+e._id}},[t._v("ver")])])])}))])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("email")]),t._v(" "),a("th",[t._v("listas")]),t._v(" "),a("th")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col m9"},[a("div",{staticClass:"card grey lighten-4"},[a("div",{staticClass:"card-content"},[a("table",[t._m(1),t._v(" "),a("tbody",t._l(t.emails,function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",[t._v(t._s(e.status))]),t._v(" "),a("td",[t._v(t._s(e.start))]),t._v(" "),a("td",[t._v(t._s(e.list))]),t._v(" "),a("td",[a("a",{staticClass:"btn",attrs:{href:"#/emails/view/"+e._id}},[t._v("ver")]),t._v(" "),a("a",{staticClass:"btn blue",attrs:{href:"#/emails/edit/"+e._id}},[t._v("editar")]),t._v(" "),a("a",{staticClass:"btn red",attrs:{href:"#/emails/remove/"+e._id}},[t._v("remover")])])])}))])])])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12"},[a("h5",[t._v("Gerenciamento de campanha")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("titulo")]),t._v(" "),a("th",[t._v("status")]),t._v(" "),a("th",[t._v("inicio")]),t._v(" "),a("th",[t._v("lista")]),t._v(" "),a("th")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col m3"},[a("div",{staticClass:"card lime"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("\n                    Deseja iniciar uma nova campanha?\n                ")]),t._v(" "),a("p",[a("a",{staticClass:"btn blue",attrs:{href:"#/email/new"}},[t._v("começar")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("h5",[t._v(t._s(t.lead.email))])]),t._v(" "),a("div",{staticClass:"col s6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Informações coletadas")]),t._v(" "),a("table",[t._m(0),t._v(" "),a("tbody",t._l(t.lead.data,function(e){return a("tr",[a("td",[t._v(t._s(e.label))]),t._v(" "),a("td",[t._v(t._s(e.value))])])}))])])])]),t._v(" "),a("div",{staticClass:"col s6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Listas ativas")]),t._v(" "),a("table",[t._m(1),t._v(" "),a("tbody",t._l(t.lead.lists,function(e){return a("tr",[a("td",[t._v(t._s(e.title))])])}))])])])]),t._v(" "),a("div",{staticClass:"col s12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Ações em campanhas")]),t._v(" "),a("table",[t._m(2),t._v(" "),a("tbody",t._l(t.lead.actions,function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",["open"===e.action[0].typeAction?a("span",[t._v("abertura")]):t._e(),t._v(" "),"click"===e.action[0].typeAction?a("span",[t._v("click em link: "),a("a",{attrs:{href:e.action[0].link,target:"_blank"}},[t._v(t._s(e.action[0].link))])]):t._e()]),t._v(" "),a("td",[a("a",{attrs:{href:"#/emails/view/"+e.campaign._id}},[t._v(t._s(e.campaign.title))])]),t._v(" "),a("td",[t._v(t._s(e.action[0].date))])])}))])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("campo")]),t._v(" "),a("th",[t._v("valor")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("titulo")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("ação")]),t._v(" "),a("th",[t._v("campanha")]),t._v(" "),a("th",[t._v("data")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col s12"},[a("a",{staticClass:"btn",attrs:{href:"#/emails/view/"+t.email._id}},[t._v("ver")])]),t._v(" "),a("div",{staticClass:"col s12"},[a("div",{staticClass:"card grey lighten-4"},[a("div",{staticClass:"card-content"},[a("form",{attrs:{action:""},on:{submit:function(e){e.preventDefault(),t.save()}}},[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email.title,expression:"email.title"}],attrs:{type:"text",id:"campanhaTitle"},domProps:{value:t.email.title},on:{input:function(e){e.target.composing||(t.email.title=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"campanhaTitle"}},[t._v("Título")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.email.body,expression:"email.body"}],staticClass:"materialize-textarea",attrs:{id:"campanhaBody",rows:"10"},domProps:{value:t.email.body},on:{input:function(e){e.target.composing||(t.email.body=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"campanhaBody"}},[t._v("Conteúdo")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email.start,expression:"email.start"}],attrs:{type:"text",id:"campanhaStart"},domProps:{value:t.email.start},on:{input:function(e){e.target.composing||(t.email.start=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"campanhaStart"}},[t._v("Data de início")])]),t._v(" "),a("div",{staticClass:"input-filter"},[a("strong",[t._v("Disparar para a lista:")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.email.lists,expression:"email.lists"}],staticClass:"browser-default",attrs:{multiple:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.email.lists=e.target.multiple?a:a[0]}}},t._l(t.lists,function(e){return a("option",{domProps:{value:e._id}},[t._v(t._s(e.title))])}))]),t._v(" "),a("input",{staticClass:"btn",attrs:{type:"submit",value:"Salvar"}})])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12"},[a("h5",[t._v("Editando campanha")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col s6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Autenticação")]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.userLogin()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],staticClass:"validate",attrs:{id:"email",type:"email"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||(t.login.username=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("Email")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"validate",attrs:{id:"password",type:"password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||(t.login.password=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Senha")])])]),t._v(" "),t._m(0)])])])]),t._v(" "),a("div",{staticClass:"col s6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Registro")]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.userRegister()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.register.name,expression:"register.name"}],staticClass:"validate",attrs:{id:"name",type:"text"},domProps:{value:t.register.name},on:{input:function(e){e.target.composing||(t.register.name=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"name"}},[t._v("nome")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.register.email,expression:"register.email"}],staticClass:"validate",attrs:{id:"email",type:"email"},domProps:{value:t.register.email},on:{input:function(e){e.target.composing||(t.register.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("Email")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.register.account_name,expression:"register.account_name"}],staticClass:"validate",attrs:{id:"account_anme",type:"text"},domProps:{value:t.register.account_name},on:{input:function(e){e.target.composing||(t.register.account_name=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"account_anme"}},[t._v("Nome da conta")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],staticClass:"validate",attrs:{id:"password_register",type:"password"},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||(t.register.password=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"password_register"}},[t._v("Senha")])])]),t._v(" "),t._m(1)])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("\n                        Acessar "),a("i",{staticClass:"material-icons right"},[t._v("send")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("\n                        Registrar-se "),a("i",{staticClass:"material-icons right"},[t._v("send")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col s12"},[a("a",{staticClass:"btn blue",attrs:{href:"#/emails/view/"+t.email._id}},[t._v("ver")])]),t._v(" "),a("div",{staticClass:"col s12"},[a("div",{staticClass:"card red white-text"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Confirmação")]),t._v(" "),a("p",[t._v("Você confirma a remoção deste registro? Você não poderá desfazer esta ação")]),t._v(" "),a("a",{staticClass:"btn white black-text",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.remove(e)}}},[t._v("sim")]),t._v(" "),a("a",{staticClass:"btn black",attrs:{href:"#/email"}},[t._v("não")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12"},[a("h5",[t._v("Remoção de campanha")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.me?a("menu",{attrs:{type:"context",id:"menu"}},[a("ul",{staticClass:"side-nav"},[a("li",[a("div",{staticClass:"user-view"},[a("img",{staticClass:"circle",attrs:{src:"https://pt.gravatar.com/userimage/39013272/0bf8fded16e7a7c1bed675eb974a8027.jpeg"}}),t._v(" "),a("span",[t._v(t._s(t.me.user.name))])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])]):t._e(),t._v(" "),a("section",{attrs:{id:"page"}},[a("header",{attrs:{id:"header"}},[t._m(5),t._v(" "),a("nav",{staticClass:"row light-blue"},[a("div",{staticClass:"nav-wrapper col s12"},[a("a",{staticClass:"brand-logo hide-on-med-and-down",attrs:{href:""}},[t._v("Digital Marketing")]),t._v(" "),a("a",{staticClass:"brand-logo hide-on-large-only",attrs:{href:""}},[t._v("DM")]),t._v(" "),t.me?a("ul",{staticClass:"right",attrs:{id:"nav-mobile"}},[t._m(6)]):t._e()])])]),t._v(" "),a("main",{attrs:{id:"content"}},[a("section",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("router-view")],1)])]),t._v(" "),t._m(7)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#/"}},[a("i",{staticClass:"material-icons"},[t._v("home")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#/email"}},[a("i",{staticClass:"material-icons"},[t._v("email")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#/lists"}},[a("i",{staticClass:"material-icons"},[t._v("supervisor_account")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:""}},[a("i",{staticClass:"material-icons"},[t._v("lock")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:""}},[a("i",{staticClass:"material-icons"},[t._v("exit_to_app")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown1"}},[a("li",[a("a",{attrs:{href:""}},[t._v("temos 2 novos leads")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("sua companha teve novos clicks")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"dropdown-button",attrs:{href:"","data-activates":"dropdown1"}},[a("i",{staticClass:"material-icons black-text"},[t._v("notifications_active")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"row grey lighten-3",attrs:{id:"footer"}},[a("div",{staticClass:"col s12"},[a("small",[t._v("by Erik Figueiredo")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col s12"},[a("div",{staticClass:"card grey lighten-4"},[a("div",{staticClass:"card-content"},[a("form",{attrs:{action:""},on:{submit:function(e){e.preventDefault(),t.save()}}},[a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.title,expression:"data.title"}],attrs:{type:"text",id:"campanhaTitle"},domProps:{value:t.data.title},on:{input:function(e){e.target.composing||(t.data.title=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"campanhaTitle"}},[t._v("Título")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.body,expression:"data.body"}],staticClass:"materialize-textarea",attrs:{id:"campanhaBody",rows:"10"},domProps:{value:t.data.body},on:{input:function(e){e.target.composing||(t.data.body=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"campanhaBody"}},[t._v("Conteúdo")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.start,expression:"data.start"}],attrs:{type:"text",id:"campanhaStart"},domProps:{value:t.data.start},on:{input:function(e){e.target.composing||(t.data.start=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"campanhaStart"}},[t._v("Data de início")])]),t._v(" "),a("div",{staticClass:"input-filter"},[a("strong",[t._v("Disparar para a lista:")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.lists,expression:"data.lists"}],staticClass:"browser-default",attrs:{multiple:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.data.lists=e.target.multiple?a:a[0]}}},t._l(t.lists,function(e){return a("option",{domProps:{value:e._id}},[t._v(t._s(e.title))])}))]),t._v(" "),a("input",{staticClass:"btn",attrs:{type:"submit",value:"Salvar"}})])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12"},[a("h5",[t._v("Nova campanha")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{staticClass:"col s6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s6"},[a("div",{staticClass:"card blue white-text"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Total de aberturas")]),t._v(" "),a("h1",[t._v(t._s(t.totals[0].opens))])])])]),t._v(" "),a("div",{staticClass:"col s6"},[a("div",{staticClass:"card red white-text"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Total de clicks")]),t._v(" "),a("h1",[t._v(t._s(t.totals[0].clicks))])])])])])]),t._v(" "),a("div",{staticClass:"col s6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v("Dados por campanha")]),t._v(" "),a("table",[t._m(0),t._v(" "),a("tbody",t._l(t.campaigns,function(e){return a("tr",[a("td",[a("a",{attrs:{href:"#/emails/"+e.id}},[t._v(t._s(e.title))])]),t._v(" "),a("td",[t._v(t._s(e.opens))]),t._v(" "),a("td",[t._v(t._s(e.clicks))])])}))])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("campanha")]),t._v(" "),a("th",[t._v("aberturas")]),t._v(" "),a("th",[t._v("clicks")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col s12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("table",[t._m(1),t._v(" "),a("tbody",t._l(t.lists,function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",[t._v(t._s(e.quantity))]),t._v(" "),a("td",[a("a",{staticClass:"btn",attrs:{href:"#/lists/"+e._id}},[t._v("ver")])])])}))])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12"},[a("h5",[t._v("Listas de disparo")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("titulo")]),t._v(" "),a("th",[t._v("quatidade")]),t._v(" "),a("th")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col s12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("table",[t._m(1),t._v(" "),a("tbody",t._l(t.leads,function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.email))]),t._v(" "),a("td",t._l(e.lists,function(e){return a("div",{staticClass:"chip"},[t._v(t._s(e.title))])})),t._v(" "),a("td",[a("a",{staticClass:"btn",attrs:{href:"#/leads/"+e._id}},[t._v("ver")])])])}))])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12"},[a("h5",[t._v("Exibindo leads")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("email")]),t._v(" "),a("th",[t._v("listas")]),t._v(" "),a("th")])])}]}}],[36]);
//# sourceMappingURL=app.871cd273bfaecf4b2ae6.js.map