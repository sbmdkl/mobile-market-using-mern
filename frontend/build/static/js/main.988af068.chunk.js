(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(t,e,r){t.exports={product:"Product_product__3mvhN",productImage:"Product_productImage__wd_YE",section:"Product_section__2Akyj"}},16:function(t,e,r){t.exports={cart:"Cart_cart__SpPRA",cartDropdown:"Cart_cartDropdown__36HlJ",cartItemName:"Cart_cartItemName__B9Lsn",cartItem:"Cart_cartItem__3Fytz"}},26:function(t,e,r){t.exports={navbarBrand:"Header_navbarBrand__DYIuT",searchBar:"Header_searchBar__3v-1Q",navbarContainer:"Header_navbarContainer__3ZjNR"}},42:function(t,e,r){t.exports={footer:"Footer_footer__CY5Cx"}},44:function(t,e,r){t.exports={products:"Products_products__2Z8fs"}},45:function(t,e,r){t.exports={sort:"Sort_sort__2Wo1L"}},46:function(t,e,r){t.exports={App:"App_App__-ZrvQ"}},53:function(t,e,r){},78:function(t,e,r){"use strict";r.r(e);var c=r(0),n=r.n(c),a=r(18),o=r.n(a),s=(r(53),r(20)),i=r(21),u=r(25),d=r(24),l=r(23),j=r(3),p=r(1),b=function(t){Object(u.a)(r,t);var e=Object(d.a)(r);function r(t){var c;return Object(s.a)(this,r),(c=e.call(this,t)).state={hasError:!1},c}return Object(i.a)(r,[{key:"render",value:function(){return this.state.hasError?Object(p.jsx)("p",{children:"Error. Please Go Back"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(t){return{hasError:!0}}}]),r}(n.a.Component),h=r(8),O="CART_ADD_PRODUCT",f="CART_RESTORE_PRODUCT",m="CART_REMOVE_PRODUCT",x="CART_REMOVE_ALL",y="PRODUCT_DECREMENT_ON_ADD_TO_CART",_="PRODUCT_INCREMENT_ON_REMOVE_FROM_CART",v="PRODUCT_DECREMENT_ON_RESTORE_CART",C="PRODUCT_FETCH_SUCCESS",g="HOME_SEARCH_PRODUCT",T="HOME_SORT_PRICE",R=r(48),N=r(16),E=r.n(N);var P={removeProductFromCart:function(t){return{type:m,payload:t}},increaseProductQuantity:function(t,e){return{type:_,payload:{id:t,quantity:e}}}},S=Object(h.b)((function(t){return{carts:t.carts}}),P)((function(t){Object(c.useEffect)((function(){return document.addEventListener("mousedown",u),function(){document.removeEventListener("mousedown",u)}}),[]);var e=Object(c.useState)(!1),r=Object(R.a)(e,2),a=r[0],o=r[1],s=Object(c.useRef)(),i=Object(c.useRef)(),u=function(t){i.current&&(i.current.contains(t.target)||s.current.contains(t.target)||o(!1))};return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsxs)("div",{className:E.a.cart,children:[Object(p.jsxs)("div",{ref:s,onClick:function(){return o(!0)},children:[Object(p.jsx)("i",{className:"fas fa-shopping-cart"}),"Cart (",t.carts.length,")"]}),a&&Object(p.jsx)("div",{ref:i,className:"".concat(E.a.cartDropdown),children:t.carts.length?Object(p.jsxs)(n.a.Fragment,{children:[t.carts.map((function(e,r){return Object(p.jsxs)("div",{className:"".concat(E.a.cartItem),children:[Object(p.jsxs)("div",{className:"".concat(E.a.cartItemName),children:[Object(p.jsx)("p",{children:e.name}),Object(p.jsx)("button",{onClick:function(){!function(e){t.removeProductFromCart(e.id),t.increaseProductQuantity(e.id,e.quantity)}(e)},className:"btn btn-sm btn-danger",children:"X"})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["Quantity ",e.quantity]}),Object(p.jsxs)("p",{children:["price Rs.",e.price]}),Object(p.jsxs)("p",{children:["total Rs.",e.quantity*e.price]})]}),Object(p.jsx)("hr",{})]},r)})),Object(p.jsxs)("p",{children:["Total:"," ",t.carts.reduce((function(t,e){return parseFloat(t)+parseFloat(e.quantity*e.price)}),[0]).toString()]})]}):Object(p.jsx)("p",{className:"text-center",children:"Cart is Empty"})})]})})})),D=r(26),B=r.n(D);var w={updateSearchText:function(t){return{type:g,payload:t}}},A=Object(h.b)((function(t){return{searchText:t.home.searchText}}),w)((function(t){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{children:Object(p.jsx)("nav",{className:"container mt-2",children:Object(p.jsxs)("div",{className:B.a.navbarContainer,children:[Object(p.jsxs)("div",{className:B.a.navbarBrand,children:[Object(p.jsx)(l.b,{to:"/",children:"Mobile Store"}),Object(p.jsx)("input",{onChange:function(e){return t.updateSearchText(e.target.value)},type:"text",className:B.a.searchBar,placeholder:"Search Mobiles",defaultValue:t.searchText})]}),Object(p.jsx)(S,{})]})})})})})),k=r(42),F=r.n(k);function I(){return Object(p.jsx)("footer",{className:F.a.footer,children:Object(p.jsxs)("p",{children:[(new Date).getFullYear()," \xa9 Mobile Store"]})})}var M=r(15),L=r(43),H=r.n(L),q=r(10),Q=r.n(q);var U={addProductToCart:function(t){return{type:O,payload:t}},decreaseProductQuantity:function(t){return{type:y,payload:t}}},J=Object(h.b)((function(t){return{products:t.products}}),U)((function(t){return Object(p.jsxs)("div",{className:Q.a.product,children:[Object(p.jsx)("img",{className:Q.a.productImage,src:t.product.image,alt:""}),Object(p.jsxs)("div",{className:Q.a.section,children:[Object(p.jsx)("p",{className:Q.a.name,children:t.product.name}),Object(p.jsx)("p",{className:Q.a.price,children:Object(p.jsxs)("strong",{children:["Rs. ",t.product.price]})}),Object(p.jsx)("p",{className:Q.a.price,children:t.product.stock>0?"Available Stock: ".concat(t.product.stock):"Currently out of stock"}),Object(p.jsxs)("p",{children:["Created On: ",t.product.date]})]}),Object(p.jsx)("div",{className:Q.a.addCart,children:Object(p.jsx)("button",{onClick:function(){t.addProductToCart(t.product),t.decreaseProductQuantity(t.product.id)},className:"btn btn-outline-secondary",disabled:!(t.product.stock>0),children:"ADD TO CART"})})]})})),V=r(44),Y=r.n(V);var Z={fetchProducts:function(t){return{type:C,payload:t}},restoreCartProducts:function(t){return{type:f,payload:t}},decreaseProductQuantityOnCartRestore:function(t){return{type:v,payload:t}}},W=Object(h.b)((function(t){return{searchText:t.home.searchText,sortBy:t.home.sortBy,products:t.products}}),Z)((function(t){return Object(c.useEffect)((function(){H.a.get("/api/mobiles").then((function(e){t.fetchProducts(e.data);var r=JSON.parse(localStorage.getItem("carts"));r&&(t.restoreCartProducts(r),t.decreaseProductQuantityOnCartRestore(r))}))}),[]),Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("div",{className:"row ".concat(Y.a.products),children:!!t.products.length&&function(){var e=Object(M.a)(t.products);return"priceLowToHigh"===t.sortBy?e=e.sort((function(t,e){return t.price-e.price})):"priceHighToLow"===t.sortBy?(console.log("high"),e=e.sort((function(t,e){return e.price-t.price}))):e=Object(M.a)(t.products),e.filter((function(e){return e.name.toLowerCase().includes(t.searchText.toLowerCase())})).map((function(t,e){return Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsx)(J,{product:t})},e)}))}()})})})),z=r(45),G=r.n(z);var X={sortByPrice:function(t){return{type:T,payload:t}}},K=Object(h.b)(null,X)((function(t){return Object(p.jsxs)("div",{className:G.a.sort,children:[Object(p.jsx)("p",{children:"Sort By:"}),Object(p.jsxs)("select",{onChange:function(e){return t.sortByPrice(e.target.value)},name:"",id:"",children:[Object(p.jsx)("option",{value:"priceBestMatch",children:"Best Match"}),Object(p.jsx)("option",{value:"priceLowToHigh",children:"Price low to high"}),Object(p.jsx)("option",{value:"priceHighToLow",children:"Price high to low"})]})]})}));function $(){return Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsx)(A,{}),Object(p.jsx)(K,{}),Object(p.jsx)(W,{}),Object(p.jsx)(I,{})]})}var tt=r(46),et=r.n(tt),rt=function(t){Object(u.a)(r,t);var e=Object(d.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(p.jsx)("div",{className:et.a.App,children:Object(p.jsx)(b,{children:Object(p.jsx)(l.a,{children:Object(p.jsx)(j.a,{exact:!0,path:"/",component:$})})})})}}]),r}(c.Component),ct=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,79)).then((function(e){var r=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,o=e.getTTFB;r(t),c(t),n(t),a(t),o(t)}))},nt=r(11),at=r(47),ot=[],st=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:var r=Object.assign({},e.payload),c=[],n=t.filter((function(t){return t.id===e.payload.id}));return n.length?(r.quantity=n[0].quantity+1,c=t.map((function(t){return t.id===n[0].id&&(t=r),t}),r)):(r.quantity=1,c=[].concat(Object(M.a)(t),[r])),localStorage.setItem("carts",JSON.stringify(c)),c;case m:var a=t.filter((function(t){return t.id!==e.payload}));return localStorage.setItem("carts",JSON.stringify(a)),a;case f:return e.payload;case x:return[];default:return t}},it=[],ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C:return e.payload;case y:return t.map((function(t){return t.id===e.payload&&(t.stock-=1),t}));case _:return t.map((function(t){return t.id===e.payload.id&&(t.stock+=e.payload.quantity),t}));case v:return t.map((function(t){return e.payload.forEach((function(e){e.id===t.id&&(t.stock-=e.quantity)})),t}));default:return t}},dt=r(17),lt={searchText:"",sortBy:"priceBestMatch"},jt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(dt.a)(Object(dt.a)({},t),{},{searchText:e.payload});case T:return Object(dt.a)(Object(dt.a)({},t),{},{sortBy:e.payload});default:return t}},pt=Object(nt.combineReducers)({carts:st,products:ut,home:jt}),bt=Object(nt.createStore)(pt,Object(at.composeWithDevTools)());o.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(h.a,{store:bt,children:Object(p.jsx)(rt,{})})}),document.getElementById("root")),ct()}},[[78,1,2]]]);
//# sourceMappingURL=main.988af068.chunk.js.map