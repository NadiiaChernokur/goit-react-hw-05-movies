"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{909:function(n,e,t){t.d(e,{XT:function(){return i},au:function(){return v},dV:function(){return f},k4:function(){return p},q5:function(){return h}});var r=t(861),a=t(757),c=t.n(a),u=t(340),o="https://api.themoviedb.org/3/",s="c05ee9f567bd87945db696ab9482d765",i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/all/day?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get(" ".concat(o,"search/movie?api_key=").concat(s,"&language=en-US&page=1&query=").concat(e," "));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US&append_to_response=credits"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&append_to_response=reviews"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},518:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(861),a=t(439),c=t(757),u=t.n(c),o=t(791),s=t(689),i=t(909),p=t(184),f=function(n){return n.rev.map((function(n){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{children:["Author: ",n.author]}),(0,p.jsxs)("p",{children:[" ",n.content]})]},n.id)}))},v=function(){var n=(0,o.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],v=(0,s.UO)();return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.q5)(v.movieId);case 3:e=n.sent,c(e.data.reviews.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[v.movieId]),(0,p.jsx)("ul",{children:t.length>0?(0,p.jsx)(f,{rev:t}):(0,p.jsx)("div",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=518.d171e4da.chunk.js.map