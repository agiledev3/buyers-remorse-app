(this["webpackJsonpbuyers-remorse-app"]=this["webpackJsonpbuyers-remorse-app"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"products":[{"id":1,"name":"First product","daysLeft":2,"likeCount":3},{"id":2,"name":"Second product","daysLeft":4,"likeCount":1},{"id":3,"name":"Third product","daysLeft":0,"likeCount":5}]}')},20:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a.n(s),r=a(7),i=a.n(r),j=a(12),d=a(24),l=a(21),u=a(22),o=a(25),h=a(23),O={HOME:"Home",EDIT_PRODUCT:"EDIT_PRODUCT"};var b=function(e){var t=e.product,a=t.id,s=t.name,n=t.daysLeft,r=t.likeCount;return Object(c.jsxs)(d.a,{className:"p-3",id:a,children:[Object(c.jsx)(d.a.Title,{children:s}),Object(c.jsxs)(l.a,{children:[Object(c.jsx)(u.a,{children:0===n?Object(c.jsxs)(o.a,{variant:"outline-dark",className:"px-3",children:[Object(c.jsx)("i",{className:"fas fa-shopping-cart"})," Buy"]}):Object(c.jsxs)("span",{children:[Object(c.jsx)("i",{className:"far fa-clock"})," ",n," days left"]})}),Object(c.jsxs)(u.a,{className:"text-right",children:[Object(c.jsx)(o.a,{variant:"outline-dark",onClick:function(){e.changePage(O.EDIT_PRODUCT)},children:Object(c.jsx)("i",{className:"fas fa-pen"})}),Object(c.jsxs)(o.a,{variant:"outline-dark",style:{paddingLeft:"0.55em",paddingRight:"0.2em"},children:[Object(c.jsx)("i",{className:"fas fa-thumbs-up"}),Object(c.jsx)("sup",{children:Object(c.jsx)(h.a,{variant:"light",children:r})})]}),Object(c.jsx)(o.a,{variant:"outline-dark",children:Object(c.jsx)("i",{className:"fas fa-trash-alt"})})]})]})]})};var p=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(d.a,{className:"p-2",children:Object(c.jsxs)(d.a.Title,{className:"text-center",children:[Object(c.jsxs)(l.a,{children:[Object(c.jsx)(u.a,{sm:{span:2}}),Object(c.jsx)(u.a,{sm:{span:8},children:"Buyer's regret"}),Object(c.jsx)(u.a,{sm:{span:2},style:{fontSize:"2em"},children:Object(c.jsx)("i",{className:"far fa-user-circle align-middle"})})]}),Object(c.jsxs)(l.a,{children:[Object(c.jsx)(u.a,{sm:{span:2}}),Object(c.jsx)(u.a,{sm:{span:8},children:"My wishlist"}),Object(c.jsx)(u.a,{sm:{span:2}})]})]})}),e.allProducts.map((function(t){return Object(c.jsx)(b,{product:t,changePage:e.changePage},t.id)})),Object(c.jsx)(o.a,{variant:"primary",className:"float-right my-3",children:Object(c.jsx)("i",{className:"fas fa-plus"})})]})},x=function(e){return Object(c.jsx)(p,{allProducts:e.allProducts,changePage:e.changePage})},m=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"This is the (dummy) edit product page"}),Object(c.jsx)("p",{children:"This is a dummy EditProduct page to be updated when the page has been completed"}),Object(c.jsx)("button",{onClick:function(){return e.changePage(O.HOME)},children:"Home"})]})},f=function(e){var t=Object(s.useState)(O.HOME),a=Object(j.a)(t,2),n=a[0],r=a[1];return Object(c.jsxs)(s.Fragment,{children:[n===O.HOME&&Object(c.jsx)(x,{allProducts:e.allProducts,changePage:r}),n===O.EDIT_PRODUCT&&Object(c.jsx)(m,{changePage:r})]})},g=a(8),P=a(9),v=a(10),y={read:function(e){return v[e]}},T=function(){function e(t){Object(g.a)(this,e),this.dataSource=t}return Object(P.a)(e,[{key:"getAll",value:function(){return this._readProductsFromSource()}},{key:"update",value:function(e,t){}},{key:"create",value:function(e){}},{key:"remove",value:function(e){}},{key:"_readProductsFromSource",value:function(){return this.dataSource.read("products")}}]),e}(),k=a(11),C=(a(19),new T(y));function E(){var e=C.getAll();return Object(c.jsx)(k.a,{children:Object(c.jsx)("header",{children:Object(c.jsx)(f,{pages:E.pages,allProducts:e})})})}E.pages={HOME:"HOME",EDIT_PRODUCT:"EDIT_PRODUCT"};var N=E,D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),D()}},[[20,1,2]]]);
//# sourceMappingURL=main.b5b8d3f1.chunk.js.map