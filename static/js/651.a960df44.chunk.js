"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[651],{105:function(n,t,e){var r=e(689),a=e(87),u=e(184);t.Z=function(n){var t=n.array,e=(0,r.TH)();return t.map((function(n){return(0,u.jsx)(a.rU,{to:"/movies/".concat(n.id),state:{visibleLocation:e},children:(0,u.jsx)("li",{children:n.title?n.title:n.name},n.id)})}))}},909:function(n,t,e){e.d(t,{XT:function(){return s},au:function(){return l},dV:function(){return f},k4:function(){return p},q5:function(){return v}});var r=e(861),a=e(757),u=e.n(a),c=e(340),o="https://api.themoviedb.org/3/",i="c05ee9f567bd87945db696ab9482d765",s=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"trending/all/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(" ".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&page=1&query=").concat(t," "));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US&append_to_response=credits"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&append_to_response=reviews"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},651:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,u=e(861),c=e(439),o=e(757),i=e.n(o),s=e(791),p=e(909),f=e(105),l=e(87),v=e(168),d=e(867),h=d.ZP.form(r||(r=(0,v.Z)(["\n  margin-bottom: 20px;\n"]))),x=d.ZP.ul(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),m=e(430),g=e(184),w=function(){var n,t=(0,s.useState)([]),e=(0,c.Z)(t,2),r=e[0],a=e[1],o=(0,s.useState)(!1),v=(0,c.Z)(o,2),d=v[0],w=v[1],Z=(0,s.useState)(null),b=(0,c.Z)(Z,2),k=b[0],y=b[1],_=(0,l.lr)(),j=(0,c.Z)(_,2),S=j[0],q=j[1],U=null!==(n=S.get("query"))&&void 0!==n?n:"";console.log("0000000000"),(0,s.useEffect)((function(){var n=function(){var n=(0,u.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.k4)(U);case 3:t=n.sent,e=t.data.results,a(e),n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),y(n.t0),n.abrupt("return");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n(),w(!1)}),[U]);return(0,g.jsxs)("div",{children:[(0,g.jsxs)(h,{onSubmit:function(n){return function(n){n.preventDefault(),w(!0);var t=n.target[0].value;q({query:t})}(n)},children:[(0,g.jsx)("input",{}),(0,g.jsx)("button",{type:"submit",children:"Search"})]}),d&&(0,g.jsx)(m.ne,{height:"80",width:"80",color:"#ea1699",ariaLabel:"hearts-loading",wrapperStyle:{},wrapperClass:"",visible:!0}),k&&(0,g.jsx)("div",{children:" Something went wrong.."}),(0,g.jsx)(x,{children:r.length>0&&(0,g.jsx)(f.Z,{array:r})})]})}}}]);
//# sourceMappingURL=651.a960df44.chunk.js.map