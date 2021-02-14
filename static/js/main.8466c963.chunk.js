(this["webpackJsonpbuyers-remorse-app"]=this["webpackJsonpbuyers-remorse-app"]||[]).push([[0],{30:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(16),s=t.n(r),i=t(9),o=t(34),l=t(31),d=t(17),u=t(35),j=t(32),h={HOME:"Home",EDIT_PRODUCT:"EDIT_PRODUCT"},b=t(1);var O=function(e){var a=e.product,t=a.id,c=a.name,n=a.daysLeft,r=a.likeCount;return Object(b.jsxs)(o.a,{className:"p-3",id:t,children:[Object(b.jsx)(o.a.Title,{children:c}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d.a,{children:0===n?Object(b.jsxs)(u.a,{variant:"outline-dark",className:"px-3",children:[Object(b.jsx)("i",{className:"fas fa-shopping-cart"})," Buy"]}):Object(b.jsxs)("span",{children:[Object(b.jsx)("i",{className:"far fa-clock"})," ",n," days left"]})}),Object(b.jsxs)(d.a,{className:"text-right",children:[Object(b.jsx)(u.a,{variant:"outline-dark",title:"Edit product",onClick:function(){e.changePage(h.EDIT_PRODUCT)},children:Object(b.jsx)("i",{className:"fas fa-pen"})}),Object(b.jsxs)(u.a,{variant:"outline-dark",style:{paddingLeft:"0.55em",paddingRight:"0.2em"},children:[Object(b.jsx)("i",{className:"fas fa-thumbs-up"}),Object(b.jsx)("sup",{children:Object(b.jsx)(j.a,{variant:"light",children:r})})]}),Object(b.jsx)(u.a,{variant:"outline-dark",children:Object(b.jsx)("i",{className:"fas fa-trash-alt"})})]})]})]},t)};var m=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(o.a,{className:"p-2",children:Object(b.jsxs)(o.a.Title,{className:"text-center",children:[Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d.a,{sm:{span:2}}),Object(b.jsx)(d.a,{sm:{span:8},children:"Buyer's regret"}),Object(b.jsx)(d.a,{sm:{span:2},style:{fontSize:"2em"},children:Object(b.jsx)("i",{className:"far fa-user-circle align-middle"})})]}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d.a,{sm:{span:2}}),Object(b.jsx)(d.a,{sm:{span:8},children:"My wishlist"}),Object(b.jsx)(d.a,{sm:{span:2}})]})]})}),e.allProducts.map((function(a){return Object(b.jsx)(O,{product:a,changePage:e.changePage},a.id)})),Object(b.jsx)(u.a,{variant:"primary",className:"float-right my-3",title:"Add new product",onClick:function(){e.changePage(h.EDIT_PRODUCT)},children:Object(b.jsx)("i",{className:"fas fa-plus"})})]})},x=function(e){return Object(b.jsx)(m,{allProducts:e.allProducts,changePage:e.changePage})},p=t(8),g=t(10),f=function(e){var a=e||{name:"",linkToBuy:"",reasonToBuy:"",reminderPeriod:7,coolingPeriod:30},t=Object(c.useState)(a),n=Object(i.a)(t,2),r=n[0],s=n[1];return{handleChange:function(e){var a=e.target,t=a.name,c=a.value;s(Object(g.a)(Object(g.a)({},r),{},Object(p.a)({},t,c)))},handleReset:function(){s(Object(g.a)({},a))},product:r}},P=t(33),y=function(e){var a=f(e.product),t=a.handleChange,c=a.handleReset,r=a.product,s=function(){c(),e.changePage(h.HOME)};return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(o.a,{className:"my-2",children:Object(b.jsxs)(o.a.Title,{className:"text-center",children:[Object(b.jsxs)(l.a,{className:"p-1",children:[Object(b.jsx)(d.a,{xs:{span:2},style:{fontSize:"2em"},children:Object(b.jsx)(u.a,{variant:"outline-dark",size:"lg",onClick:s,children:Object(b.jsx)("i",{className:"fas fa-chevron-left align-center"})})}),Object(b.jsx)(d.a,{xs:{span:8},children:"Buyer's regret"}),Object(b.jsx)(d.a,{xs:{span:2},style:{fontSize:"2em"},children:Object(b.jsx)("i",{className:"far fa-user-circle align-middle"})})]}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d.a,{sm:{span:2}}),Object(b.jsx)(d.a,{sm:{span:8},children:"Product Details"}),Object(b.jsx)(d.a,{sm:{span:2}})]})]})}),Object(b.jsxs)(P.a,{className:"product-form",onSubmit:function(a){a.preventDefault(),r.id?e.updateProduct(r.id,r):e.createProduct(r),e.changePage(h.HOME)},children:[Object(b.jsxs)(P.a.Group,{children:[Object(b.jsx)(P.a.Label,{htmlFor:"name",children:"Product name:"}),Object(b.jsx)(P.a.Control,{onChange:t,value:r.name,placeholder:"Product name ...",name:"name",id:"name","data-testid":"name",required:!0})]}),Object(b.jsxs)(P.a.Group,{children:[Object(b.jsx)(P.a.Label,{htmlFor:"linkToBuy",children:"Link to buy:"}),Object(b.jsx)(P.a.Control,{onChange:t,value:r.linkToBuy,placeholder:"Link to a website ...",name:"linkToBuy",id:"linkToBuy"})]}),Object(b.jsxs)(P.a.Group,{children:[Object(b.jsx)(P.a.Label,{htmlFor:"reasonToBuy",children:"Why would you like to buy this product?"}),Object(b.jsx)(P.a.Control,{onChange:t,value:r.reasonToBuy,placeholder:"Reason to buy ...",name:"reasonToBuy",id:"reasonToBuy",as:"textarea",rows:"3",required:!0})]}),Object(b.jsxs)(P.a.Row,{children:[Object(b.jsxs)(P.a.Group,{as:d.a,xs:"auto",children:[Object(b.jsx)(P.a.Label,{htmlFor:"reminderPeriod",children:"How long should I wait before I remind you about this product?"}),Object(b.jsx)(P.a.Control,{onChange:t,value:r.reminderPeriod,placeholder:"Days ...",name:"reminderPeriod",id:"reminderPeriod",type:"number",min:"1",max:"30",style:{maxWidth:"5rem"}})]}),Object(b.jsx)(d.a,{lg:"2"}),Object(b.jsxs)(P.a.Group,{as:d.a,xs:"auto",children:[Object(b.jsx)(P.a.Label,{htmlFor:"coolingPeriod",children:"How long should I lock the buy button?"}),Object(b.jsx)(P.a.Control,{onChange:t,value:r.coolingPeriod,placeholder:"Days ...",name:"coolingPeriod",id:"coolingPeriod",type:"number",min:"1",max:"90",style:{maxWidth:"5rem"}})]})]}),Object(b.jsxs)(P.a.Row,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(u.a,{variant:"outline-danger",aligned:"left aligned",size:"lg",onClick:s,children:Object(b.jsx)("i",{className:"fas fa-times-circle"})})}),Object(b.jsx)(d.a,{xs:"auto",children:Object(b.jsx)(u.a,{variant:"outline-success",aligned:"right aligned",type:"submit",size:"lg",title:"Save product",children:Object(b.jsx)("i",{className:"fas fa-check"})})})]})]})]})},T=function(e){var a=Object(c.useState)(h.HOME),t=Object(i.a)(a,2),n=t[0],r=t[1];return Object(b.jsxs)(c.Fragment,{children:[n===h.HOME&&Object(b.jsx)(x,{allProducts:e.allProducts,changePage:r}),n===h.EDIT_PRODUCT&&Object(b.jsx)(y,{changePage:r,createProduct:e.createProduct,updateProduct:e.updateProduct})]})},v=t(18),k=t(19),C=t(7),w={read:function(e){return C[e]},write:function(e,a,t){t&&(C[e]=C[e].filter((function(e){return e.id!==t}))),C[e].push(a)}},N=function(){function e(a){Object(v.a)(this,e),this.dataSource=a}return Object(k.a)(e,[{key:"getAll",value:function(){return this._readProductsFromSource()}},{key:"update",value:function(e,a){this._writeProductToSource(e,a)}},{key:"create",value:function(e){this._writeProductToSource(null,e)}},{key:"remove",value:function(e){}},{key:"_readProductsFromSource",value:function(){return this.dataSource.read("products")}},{key:"_writeProductToSource",value:function(e,a){return this.dataSource.write("products",a,e)}}]),e}(),B=t(20),D=(t(29),new N(w));function S(){var e=D.getAll(),a=D.create.bind(D),t=D.update.bind(D);return Object(b.jsx)(B.a,{children:Object(b.jsx)("header",{children:Object(b.jsx)(T,{pages:S.pages,allProducts:e,createProduct:a,updateProduct:t})})})}S.pages={HOME:"HOME",EDIT_PRODUCT:"EDIT_PRODUCT"};var E=S,F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),F()},7:function(e){e.exports=JSON.parse('{"products":[{"id":1,"name":"First product","daysLeft":2,"likeCount":3,"linkToBuy":"www.lorem.ipsum","reasonToBuy":"dolor","reminderPeriod":7,"coolingPeriod":30},{"id":2,"name":"Second product","daysLeft":4,"likeCount":1,"linkToBuy":"www.lorem.ipsum","reasonToBuy":"dolor","reminderPeriod":7,"coolingPeriod":30},{"id":3,"name":"Third product","daysLeft":0,"likeCount":5,"linkToBuy":"www.lorem.ipsum","reasonToBuy":"dolor","reminderPeriod":7,"coolingPeriod":30}]}')}},[[30,1,2]]]);
//# sourceMappingURL=main.8466c963.chunk.js.map