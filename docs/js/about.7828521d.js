(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1511:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("User")},n=[],r=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"user"},[e("div",{staticClass:"stats"},[e("h2",[s._v("\n        "+s._s(s.user.name)+"\n        "),2===parseInt(s.user.job.split("-")[1])?e("i",{staticClass:"fas fa-grip-lines-vertical rank"}):s._e(),1===parseInt(s.user.job.split("-")[1])?e("span",{staticClass:"fas fa-minus rank-single"}):s._e()]),e("div",{staticClass:"general-stats"},[s.user.job.split("-")[0]?e("span",{staticClass:"general-stats__element"},[s._v("Діловодство: "),e("strong",[s._v(s._s(s.user.job.split("-")[0]))])]):s._e(),e("span",{staticClass:"general-stats__element"},[s._v("Рейтинг: "),e("strong",[s._v(s._s(s.user.total))])]),e("span",{staticClass:"general-stats__element"},[s._v("Проба: "),e("strong",[s._v(s._s(s.user.testPassed/5))]),s._v("/"),e("strong",[s._v("53")])]),e("span",{staticClass:"general-stats__element"},[s._v("Кількість вмілостей:\n               "),e("strong",[s._v(s._s(s.user.skillsList.split(";").filter(function(s){return s.length>0}).length))])])]),e("h3",{staticClass:"block"},[s._v("Здані вмілості")]),e("ul",{staticClass:"task-list"},s._l(s.user.skillsList.split(";").filter(function(s){return s.length>0}),function(t){return e("li",[s._v(s._s(t))])}),0),e("h3",{staticClass:"block"},[s._v("Точкування")]),e("div",{staticClass:"stats-element"},[e("span",[s._v("Відвідування")]),e("span",[s._v(s._s(s.user.presence))])]),e("div",{staticClass:"stats-element"},[e("span",[s._v("Проба")]),e("span",[s._v(s._s(s.user.testPassed))])]),e("div",{staticClass:"stats-element"},[e("span",[s._v("Однострій")]),e("span",[s._v(s._s(s.user.uniform))])]),e("div",{staticClass:"stats-element"},[e("span",[s._v("Вмілості")]),e("span",[s._v(s._s(s.user.skills))])]),e("h3",{staticClass:"block"},[s._v("Завдання до наступних сходин")]),e("ul",{staticClass:"task-list"},s._l(s.getUserTasks,function(t){return e("li",[s._v(s._s(t))])}),0)])])},i=[],l=(e("28a5"),{name:"User",computed:{user:function(){var s=this.$route.params.id,t=this.$store.getters.getUserById(s);if(t.length>0)return t[0]},getUserTasks:function(){var s=this.$route.params.id,t=this.$store.getters.getUserById(s);if(t.length>0)return t[0].tasks.split(";")}},methods:{isLoading:function(){return console.log(this.$store.getters.isLoading),this.$store.getters.isLoading}},mounted:function(){this.$store.dispatch("fetchUsers")}}),u=l,c=e("2877"),o=Object(c["a"])(u,r,i,!1,null,null,null),_=o.exports,v={name:"user",components:{User:_}},p=v,g=(e("e8c3"),Object(c["a"])(p,a,n,!1,null,null,null));t["default"]=g.exports},e094:function(s,t,e){},e8c3:function(s,t,e){"use strict";var a=e("e094"),n=e.n(a);n.a}}]);
//# sourceMappingURL=about.7828521d.js.map