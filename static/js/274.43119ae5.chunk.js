"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[274],{909:function(n,e,t){t.d(e,{XT:function(){return u},au:function(){return l},dV:function(){return d},k4:function(){return p},q5:function(){return f}});var r=t(861),c=t(757),a=t.n(c),i=t(340),o="https://api.themoviedb.org/3/",s="c05ee9f567bd87945db696ab9482d765",u=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"trending/all/day?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get(" ".concat(o,"search/movie?api_key=").concat(s,"&language=en-US&page=1&query=").concat(e," "));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US&append_to_response=credits"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&append_to_response=reviews"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},274:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,c,a,i,o,s=t(861),u=t(439),p=t(757),d=t.n(p),l=t(689),f=t(87),h=t(909),x=t(791),v=t(168),m=t(867),w=m.ZP.div(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),b=m.ZP.div(c||(c=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  box-shadow: 0px 3px 0px 0px #046c44;\n  padding-bottom: 14px;\n"]))),g=m.ZP.p(a||(a=(0,v.Z)(["\n  color: #ff1a75;\n  cursor: pointer;\n  margin-left: 40px;\n"]))),j=m.ZP.button(i||(i=(0,v.Z)(["\n  margin-bottom: 14px;\n  padding: 6px;\n  width: 100px;\n  background-color: #ffccff;\n  color: #009900;\n  font-weight: bold;\n  cursor: pointer;\n"]))),Z=m.ZP.img(o||(o=(0,v.Z)(["\n  width: 240;\n  height: 360px;\n"]))),k=t(184),y=function(n){var e,t=n.film;return(0,k.jsxs)(w,{children:[(0,k.jsxs)(b,{children:[(0,k.jsx)(Z,{src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlxdVwOBOgwB0FAK_obeLbTw9U1A3geRqqh6RPvXrudBjPmwttyFdI9VacYfzx_FO4dE&usqp=CAU",alt:t.title?t.title:t.name,width:240}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h1",{children:t.title?t.title:t.name}),(0,k.jsxs)("p",{children:["User score: ",100*t.popularity," %"]}),(0,k.jsx)("p",{children:(0,k.jsx)("b",{children:"Overview"})}),(0,k.jsx)("p",{children:t.overview}),(0,k.jsx)("p",{children:(0,k.jsx)("b",{children:"Genres"})}),(0,k.jsx)("p",{children:null===(e=t.genres)||void 0===e?void 0:e.map((function(n){return n.name})).join(", ")})]})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{children:"Additional information"}),(0,k.jsx)(f.rU,{to:"cast",children:(0,k.jsx)(g,{children:(0,k.jsx)("b",{children:"Cast"})})}),(0,k.jsx)(f.rU,{to:"reviews",children:(0,k.jsx)(g,{children:(0,k.jsx)("b",{children:"Reviews"})})})]}),(0,k.jsx)(l.j3,{})]})},_=function(){var n,e=(0,l.UO)().movieId,t=(0,x.useState)([]),r=(0,u.Z)(t,2),c=r[0],a=r[1],i=(0,l.TH)(),o=(0,x.useRef)(i.state);return(0,x.useEffect)((function(){var n=function(){var n=(0,s.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.dV)(e);case 3:t=n.sent,a(t.data),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,k.jsxs)("div",{children:[(0,k.jsx)(f.rU,{to:(null===(n=o.current)||void 0===n?void 0:n.visibleLocation)||"/movies",children:(0,k.jsx)(j,{type:"button",children:"On back"})}),(0,k.jsx)(y,{film:c})]})}}}]);
//# sourceMappingURL=274.43119ae5.chunk.js.map