(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,c,a){},12:function(e,c,a){"use strict";a.r(c);var t=a(5),n=a.n(t),i=a(4),r=a(1),s=(a(10),a(3)),l=a.n(s);function o(e,c){for(var a=[],t=e;t<=c;t+=1)a.push(t);return a}var j=a(0),d=function(e){var c=e.total,a=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(c/a),r=o(1,i),s=o(1,c).map((function(e){return"Item ".concat(e)})).slice((t-1)*a,t*a),d={first:1===t,second:t===i};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:l()("page-item",{disabled:d.first}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev",onClick:function(){t>1&&n(t-1)},"aria-disabled":d.first,children:"\xab"})}),r.map((function(e){return Object(j.jsx)("li",{className:"page-item ".concat(t===e?"active":""),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return function(e){e!==t&&n(e)}(e)},type:"button",children:e})},e)})),Object(j.jsx)("li",{className:l()("page-item",{disabled:d.second}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next",onClick:function(){t<i&&n(t+1)},"aria-disabled":d.second,children:"\xbb"})})]}),Object(j.jsx)("ul",{children:s.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})},u=[3,5,10,20],b=function(){var e=Object(r.useState)(1),c=Object(i.a)(e,2),a=c[0],t=c[1],n=Object(r.useState)(5),s=Object(i.a)(n,2),l=s[0],o=s[1],b=(a-1)*l+1,m=a*l<42?a*l:42;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(a," (items ").concat(b," - ").concat(m," of ").concat(42,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){o(+e.target.value),t(1)},value:l.toString(),children:u.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:42,perPage:l,currentPage:a,onPageChange:t})]})};n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c4cd329a.chunk.js.map