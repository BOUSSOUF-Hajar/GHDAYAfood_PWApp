(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/menu.b3f49afd.svg"},36:function(e,t,a){e.exports=a.p+"static/media/logo.decbaf4e.jpeg"},37:function(e,t,a){e.exports=a.p+"static/media/close.2c5552a1.svg"},38:function(e,t,a){e.exports=a.p+"static/media/cart.8bf1af37.svg"},40:function(e,t,a){e.exports=a(70)},45:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),u=(a(45),a(5)),i=a(2),o=a.n(i),s=a(3),m=a(1),d=a(4),p=a.n(d);var b=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),u=l[0],i=l[1],d=Object(n.useState)(""),b=Object(m.a)(d,2),f=b[0],E=b[1],v=Object(n.useState)(""),h=Object(m.a)(v,2),O=h[0],j=h[1],g=Object(n.useState)(1),k=Object(m.a)(g,2),x=k[0],A=k[1],C=Object(n.useState)(0),y=Object(m.a)(C,2),w=y[0],N=y[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/plats?limit=".concat(9*x,"&").concat(f,"&title[regex]=").concat(O));case 2:t=e.sent,r(t.data.products),N(t.data.result);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u,f,O,x]),{products:[a,r],callback:[u,i],sort:[f,E],search:[O,j],page:[x,A],result:[w,N]}},f=a(7),E=a(10),v=a(6);a(17);var h=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!1),u=Object(m.a)(l,2),i=u[0],d=u[1],b=Object(n.useState)(!1),h=Object(m.a)(b,2),O=h[0],j=h[1],g=Object(n.useState)(!1),k=Object(m.a)(g,2),x=k[0],A=k[1],C=Object(n.useState)(""),y=Object(m.a)(C,2),w=y[0],N=y[1],_=Object(n.useState)(""),S=Object(m.a)(_,2),P=S[0],I=S[1],z=Object(n.useState)(""),L=Object(m.a)(z,2),D=L[0],q=L[1],F=Object(n.useState)([]),V=Object(m.a)(F,2),R=V[0],M=V[1],T=Object(n.useState)([]),K=Object(m.a)(T,2),U=K[0],J=K[1];Object(n.useEffect)((function(){e&&function(){var t=Object(s.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("/user/infor",{headers:{Authorization:e}});case 3:a=t.sent,c(!0),"FOURNISSEUR"===a.data.role?(d(!0),N(a.data._id)):"CLIENT"===a.data.role?(j(!0),I(a.data._id)):"LIVREUR"===a.data.role&&(A(!0),q(a.data._id)),M(a.data.cart),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var X=function(){var t=Object(s.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",Object(v.confirmAlert)({title:"Vous devez vous inscrir !",message:"",buttons:[{label:"Ok",onClick:function(){return null}}]}));case 2:if(!O){t.next=10;break}if(!R.every((function(e){return e._id!==a._id}))){t.next=8;break}return M([].concat(Object(E.a)(R),[Object(f.a)(Object(f.a)({},a),{},{quantity:1})])),t.next=8,p.a.patch("/user/addcart",{cart:[].concat(Object(E.a)(R),[Object(f.a)(Object(f.a)({},a),{},{quantity:1})])},{headers:{Authorization:e}});case 8:t.next=11;break;case 10:Object(v.confirmAlert)({title:"Vous n'\xe9tes pas un client !",message:"",buttons:[{label:"Ok",onClick:function(){return null}}]});case 11:return t.abrupt("return",Object(v.confirmAlert)({title:"Le produit est ajout\xe9 au panier .",message:"",buttons:[{label:"Ok",onClick:function(){return null}}]}));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{isLogged:[r,c],isAdmin:[i,d],isClient:[O,j],isLivreur:[x,A],idFournisseur:[w,N],idClient:[P,I],idLivreur:[D,q],cart:[R,M],addCart:X,history:[U,J]}},O=Object(n.createContext)(),j=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(m.a)(a,2),l=c[0],u=c[1];Object(n.useEffect)((function(){if(localStorage.getItem("firstLogin")){var e=function(){var t=Object(s.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/user/refresh_token");case 2:a=t.sent,u(a.data.accesstoken),setTimeout((function(){e()}),6e5);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}}),[]);var i={token:[l,u],productsAPI:b(),userAPI:h(l)};return r.a.createElement(O.Provider,{value:i},t)},g=a(35),k=a.n(g),x=a(36),A=a.n(x),C=a(37),y=a.n(C),w=a(38),N=a.n(w);var _=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0],c=Object(m.a)(e.userAPI.isClient,1)[0],l=(Object(m.a)(e.userAPI.isLivreur,1)[0],Object(m.a)(e.userAPI.cart,1)[0]),i=Object(n.useState)(!1),d=Object(m.a)(i,2),b=d[0],f=d[1],E=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(v.confirmAlert)({title:"Confirmation ",message:"Voulez-vous vraiment vous d\xe9connecter ?",buttons:[{label:"Oui",onClick:function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/user/logout");case 2:localStorage.removeItem("firstLogin"),window.location.href="/";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{label:"Non",onClick:function(){return null}}]});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h={left:b?0:"-100%"};return r.a.createElement("header",null,r.a.createElement("div",{className:"menu",onClick:function(){return f(!b)}},r.a.createElement("img",{src:k.a,alt:"",width:"30"})),r.a.createElement("div",{className:"logo"},r.a.createElement(u.b,{to:"/"}," ",r.a.createElement("img",{src:A.a,alt:""}))),r.a.createElement("ul",{style:h},a&&r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Mes plats")),c&&r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Accueil")),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/create_product"},"Ajouter plat"))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/history"},"Mes commandes")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/",onClick:E},"Logout"))):r.a.createElement("li",null,r.a.createElement("div",{className:"signupORsign"},r.a.createElement(u.b,{to:"/login"},"Se connecter / s'inscrire "))),r.a.createElement("li",{onClick:function(){return f(!b)}},r.a.createElement("img",{src:y.a,alt:"",width:"30",className:"menu"}))),c?r.a.createElement("div",{className:"cart-icon"},r.a.createElement("span",null,l.length),r.a.createElement(u.b,{to:"/cart"},r.a.createElement("img",{src:N.a,alt:"",width:"30"}))):"")},S=a(8);var P=function(e){var t=e.product,a=e.deleteProduct,c=Object(n.useContext)(O),l=Object(m.a)(c.userAPI.isAdmin,1)[0],i=(Object(m.a)(c.userAPI.isClient,1)[0],c.userAPI.addCart);return r.a.createElement("div",{className:"row_btn"},l?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{id:"btn_buy",to:"#!",onClick:function(){return a(t._id,t.images.public_id)}},"Supprimer"),r.a.createElement(u.b,{id:"btn_view",to:"/edit_product/".concat(t._id)},"Modifier")):r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{id:"btn_buy",to:"#!",onClick:function(){return i(t)}},"Ajouter au panier"),r.a.createElement(u.b,{id:"btn_view",to:"/detail/".concat(t._id)},"+D\xe9tails")))};var I=function(e){var t=e.product,a=e.isAdmin,n=e.deleteProduct,c=e.handleCheck;return r.a.createElement("div",{className:"product_card"},a&&r.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:function(){return c(t._id)}}),r.a.createElement("img",{src:t.images.url,alt:""}),r.a.createElement("div",{className:"product_box"},r.a.createElement("h2",{title:t.title},t.title),r.a.createElement("span",null,"MAD ",t.price),r.a.createElement("p",null,t.description)),r.a.createElement(P,{product:t,deleteProduct:n}))};a(69);var z=function(){return r.a.createElement("div",{className:"load-page"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null))))))))))};var L=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.productsAPI.sort,2),a=t[0],c=t[1],l=Object(m.a)(e.productsAPI.search,2),u=l[0],i=l[1];return r.a.createElement("div",{className:"filter_menu"},r.a.createElement("input",{type:"text",value:u,placeholder:"Rechercher un plat",onChange:function(e){return i(e.target.value.toLowerCase())}}),r.a.createElement("div",{className:"row sort"},r.a.createElement("span",null,"Tri\xe9 par: "),r.a.createElement("select",{value:a,onChange:function(e){return c(e.target.value)}},r.a.createElement("option",{value:""},"Plus r\xe9cent"),r.a.createElement("option",{value:"sort=oldest"},"Plus ancien"),r.a.createElement("option",{value:"sort=-sold"},"Recommander"),r.a.createElement("option",{value:"sort=-price"},"Prix \xe9lev\xe9 \xe0 bas"),r.a.createElement("option",{value:"sort=price"},"Prix bas \xe0 \xe9lev\xe9"))))};var D=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.productsAPI.page,2),a=t[0],c=t[1],l=Object(m.a)(e.productsAPI.result,1)[0];return r.a.createElement("div",{className:"load_more"},l<9*a?"":r.a.createElement("button",{onClick:function(){return c(a+1)}},"Load more"))};var q=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.productsAPI.products,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],u=Object(m.a)(e.token,1)[0],i=Object(m.a)(e.productsAPI.callback,2),d=i[0],b=i[1],f=Object(n.useState)(!1),v=Object(m.a)(f,2),h=v[0],j=v[1],g=Object(n.useState)(!1),k=Object(m.a)(g,2),x=k[0],A=k[1],C=function(e){a.forEach((function(t){t._id===e&&(t.checked=!t.checked)})),c(Object(E.a)(a))},y=function(){var e=Object(s.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),n=p.a.post("/api/destroy",{public_id:a},{headers:{Authorization:u}}),r=p.a.delete("/api/plats/".concat(t),{headers:{Authorization:u}}),e.next=6,n;case 6:return e.next=8,r;case 8:b(!d),j(!1),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}();return h?r.a.createElement("div",null,r.a.createElement(z,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),l&&r.a.createElement("div",{className:"delete-all"},r.a.createElement("span",null,"S\xe9lectionner tous"),r.a.createElement("input",{type:"checkbox",checked:x,onChange:function(){a.forEach((function(e){e.checked=!x})),c(Object(E.a)(a)),A(!x)}}),r.a.createElement("button",{onClick:function(){a.forEach((function(e){e.checked&&y(e._id,e.images.public_id)}))}},"Supprimer tous")),r.a.createElement("div",{className:"products"},a.map((function(e){return r.a.createElement(I,{key:e._id,product:e,isAdmin:l,deleteProduct:y,handleCheck:C})}))),r.a.createElement(D,null),0===a.length&&r.a.createElement(z,null))};var F=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.productsAPI.products,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],u=Object(m.a)(e.userAPI.idFournisseur,1)[0],i=Object(m.a)(e.token,1)[0],d=Object(m.a)(e.productsAPI.callback,2),b=d[0],f=d[1],h=Object(n.useState)(!1),j=Object(m.a)(h,2),g=j[0],k=j[1],x=Object(n.useState)(!1),A=Object(m.a)(x,2),C=A[0],y=A[1],w=function(e){a.forEach((function(t){t._id===e&&(t.checked=!t.checked)})),c(Object(E.a)(a))},N=function(){var e=Object(s.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(v.confirmAlert)({title:"Suppression ",message:" voulez-vous vraiment supprimer ce plat ?",buttons:[{label:"Oui",onClick:function(){var e=Object(s.a)(o.a.mark((function e(){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),n=p.a.post("/api/destroy",{public_id:a},{headers:{Authorization:i}}),r=p.a.delete("/api/plats/".concat(t),{headers:{Authorization:i}}),e.next=6,n;case 6:return e.next=8,r;case 8:f(!b),k(!1),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:Object(v.confirmAlert)({title:"Le plat a \xe9t\xe9 supprim\xe9 !",message:"",buttons:[{label:"OK",onClick:function(){return null}}]});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{label:"Non",onClick:function(){return null}}]});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(s.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),n=p.a.post("/api/destroy",{public_id:a},{headers:{Authorization:i}}),r=p.a.delete("/api/plats/".concat(t),{headers:{Authorization:i}}),e.next=6,n;case 6:return e.next=8,r;case 8:f(!b),k(!1),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}();return g?r.a.createElement("div",null,r.a.createElement(z,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),l&&r.a.createElement("div",{className:"delete-all"},r.a.createElement("span",null,"S\xe9lectionner tous"),r.a.createElement("input",{type:"checkbox",checked:C,onChange:function(){a.forEach((function(e){e.checked=!C})),c(Object(E.a)(a)),y(!C)}}),r.a.createElement("button",{onClick:function(){Object(v.confirmAlert)({title:"Suppression ",message:" Voulez-vous supprimer tous les plats ?",buttons:[{label:"Oui",onClick:function(){a.forEach((function(e){e.frns===u&&_(e._id,e.images.public_id)})),Object(v.confirmAlert)({title:"Vos plats ont \xe9t\xe9 bien supprim\xe9s ",message:"",buttons:[{label:"OK",onClick:function(){return null}}]})}},{label:"Non",onClick:function(){return null}}]})}},"Supprimer tous")),r.a.createElement("div",{className:"products"},a.map((function(e){if(e.frns===u)return r.a.createElement(I,{key:e._id,product:e,isAdmin:l,deleteProduct:N,handleCheck:w})}))),r.a.createElement(D,null),0===a.length&&r.a.createElement(z,null))};var V=function(){var e=Object(S.g)(),t=Object(n.useContext)(O),a=Object(m.a)(t.productsAPI.products,1)[0],c=t.userAPI.addCart,l=Object(n.useState)([]),i=Object(m.a)(l,2),o=i[0],s=i[1];return Object(n.useEffect)((function(){e.id&&a.forEach((function(t){t._id===e.id&&s(t)}))}),[e.id,a]),0===o.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"detail"},r.a.createElement("img",{src:o.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,o.title)),r.a.createElement("span",null,"MAD ",o.price),r.a.createElement("p",null,o.description),r.a.createElement("p",null,o.content),r.a.createElement(u.b,{to:"/cart",className:"cart",onClick:function(){return c(o)}},"Ajouter au panier"))),r.a.createElement("div",{className:"autres"},r.a.createElement("h2",{className:"titre"},"Plats similaires"),r.a.createElement("div",{className:"products"},a.map((function(e){return r.a.createElement(I,{key:e._id,product:e})})))))},R=a(15);var M=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(f.a)(Object(f.a)({},a),{},Object(R.a)({},n,r)))},i=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("/user/login",Object(f.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:i},r.a.createElement("h2",null,"Se connecter"),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:l,className:"info"}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:l,className:"info"}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Se connecter"),r.a.createElement(u.b,{to:"/register"},"Cr\xe9er un compte"))))};var T=function(){var e=Object(n.useState)({name:"",email:"",password:"",ROLE:"",adresse:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(f.a)(Object(f.a)({},a),{},Object(R.a)({},n,r)))},i=function(e){var t=e.target,n=t.name,r=t.value;c(Object(f.a)(Object(f.a)({},a),{},Object(R.a)({},n,r)))},d=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("/user/register",Object(f.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"register-page"},r.a.createElement("form",{onSubmit:d},r.a.createElement("h2",null,"s'inscrire"),r.a.createElement("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:a.name,onChange:i,className:"info"}),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:i,className:"info"}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:i,className:"info"}),r.a.createElement("input",{type:"adresse",name:"adresse",required:!0,placeholder:"Address",value:a.adresse,onChange:i,className:"info"}),r.a.createElement("div",{className:"role"},r.a.createElement("input",{type:"radio",value:"FOURNISSEUR",id:"frns",onChange:l,name:"role"}),r.a.createElement("label",{for:"frns"},"FOURNISSEUR DE REPAS ")),r.a.createElement("br",null),r.a.createElement("div",{className:"role"},r.a.createElement("input",{type:"radio",value:"CLIENT",id:"clnt",onChange:l,name:"role"}),r.a.createElement("label",{for:"clnt"},"CLIENT")),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"S'inscrire "),r.a.createElement(u.b,{to:"/login"},"Se connecter"))))};var K=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.history,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],i=Object(m.a)(e.userAPI.isClient,1)[0],d=Object(m.a)(e.userAPI.isLivreur,1)[0],b=Object(m.a)(e.userAPI.idFournisseur,1)[0],f=Object(m.a)(e.userAPI.idLivreur,1)[0],E=Object(m.a)(e.token,1)[0];return Object(n.useEffect)((function(){E&&function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l&&!d){e.next=7;break}return e.next=3,p.a.get("/api/commande",{headers:{Authorization:E}});case 3:t=e.sent,c(t.data),e.next=11;break;case 7:return e.next=9,p.a.get("/user/history",{headers:{Authorization:E}});case 9:a=e.sent,c(a.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[E,l,c]),r.a.createElement("div",{className:"history-page"},r.a.createElement("h2",null,"Vos commandes"),i?r.a.createElement("h4",null,"Vous avez ",a.length," commandes"):"",r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Commande ID"),r.a.createElement("th",null,"La date de la commande"),r.a.createElement("th",null,"Statut"),d&&r.a.createElement("th",null,"Adresse de livraison"),r.a.createElement("th",null))),r.a.createElement("tbody",null,l&&a.map((function(e){for(var t in e.cart){var a;if(e.cart[t].frns===b)return a++,r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e._id),r.a.createElement("td",null,new Date(e.createdAt).toLocaleDateString()),r.a.createElement("td",null,e.status),r.a.createElement("td",null,r.a.createElement(u.b,{to:"/history/".concat(e._id)}," D\xe9tails")));if(1===a)break}})),i&&a.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e._id),r.a.createElement("td",null,new Date(e.createdAt).toLocaleDateString()),r.a.createElement("td",null,e.status),r.a.createElement("td",null,r.a.createElement(u.b,{to:"/history/".concat(e._id)},"D\xe9tails")))})),d&&a.map((function(e){if(e.idLivreur==f)return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e._id),r.a.createElement("td",null,new Date(e.createdAt).toLocaleDateString()),r.a.createElement("td",null,e.status),r.a.createElement("td",null,e.adrssseLivr),r.a.createElement("td",null,r.a.createElement(u.b,{to:"/history/".concat(e._id)}," D\xe9tails")))})))))};var U=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.token,1)[0],a=Object(m.a)(e.userAPI.history,2),c=a[0],l=a[1],u=Object(n.useState)([]),i=Object(m.a)(u,2),d=i[0],b=i[1],f=Object(m.a)(e.userAPI.idFournisseur,1)[0],h=Object(m.a)(e.userAPI.isAdmin,1)[0],j=Object(S.f)(),g=Object(m.a)(e.userAPI.isClient,1)[0],k=Object(m.a)(e.userAPI.isLivreur,1)[0],x=Object(S.g)();Object(n.useEffect)((function(){x.id&&c.forEach((function(e){e._id===x.id&&b(e)}))}),[x.id,c]);var A,C=function(){var e=Object(s.a)(o.a.mark((function e(a,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(v.confirmAlert)({title:"Confirmation ",message:" Voulez-vous changer l'\xe9tat la commande ?",buttons:[{label:"Oui",onClick:function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.put("/api/commande/".concat(a),{statut:n},{headers:{Authorization:t}});case 2:j.push("/history");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{label:"Non",onClick:function(){return null}}]});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(o.a.mark((function e(a,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Non trait\xe9e"===n?Object(v.confirmAlert)({title:"Suppression ",message:"Voulez-vous vraiment supprimer cette commande ?",buttons:[{label:"Oui",onClick:function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.forEach((function(e,t){e._id===a&&(c.splice(t,1),l(Object(E.a)(c)))})),e.next=3,p.a.delete("/user/addHistory/".concat(a),{headers:{Authorization:t}});case 3:Object(v.confirmAlert)({title:"La commande a \xe9t\xe9 supprim\xe9e",message:"",buttons:[{label:"OK",onClick:function(){return null}}]}),j.push("/history");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{label:"Non",onClick:function(){return null}}]}):Object(v.confirmAlert)({title:"Vous ne pouvez pas supprimer cette commande",message:"",buttons:[{label:"Ok",onClick:function(){return null}}]});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return 0===d.length?null:r.a.createElement("div",{className:"history-page"},r.a.createElement("table",{style:{margin:"30px 0px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Plat"),r.a.createElement("th",null,"Quantit\xe9"),r.a.createElement("th",null,"Prix"),k&&r.a.createElement("th",null,"Adresse du fournissueur"))),r.a.createElement("tbody",null,h&&d.cart.map((function(e){if(e.frns===f)return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement("img",{src:e.images.url,alt:""})),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.quantity," "),r.a.createElement("td",null,"MAD ",e.price*e.quantity))})),g&&d.cart.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement("img",{src:e.images.url,alt:""})),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.quantity," "),r.a.createElement("td",null,"MAD ",e.price*e.quantity))})),k&&d.cart.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement("img",{src:e.images.url,alt:""})),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.quantity," "),r.a.createElement("td",null,"MAD ",e.price*e.quantity),r.a.createElement("td",null," ",e.adresse))})))),k?r.a.createElement("button",{onClick:function(){return C(x.id,"Livr\xe9e")},className:"traite"},"Commande livr\xe9e"):r.a.createElement("button",{onClick:function(){return y(x.id,d.status)},className:"annulerCMD"},"Annuler la commande"),h&&("Non trait\xe9e"===(A=d.status)?r.a.createElement("button",{onClick:function(){return C(x.id,"en cours de traitement")},className:"traite"},"Pr\xe9parer la  commande"):"en cours de traitement"===A?r.a.createElement("button",{onClick:function(){return C(x.id,"trait\xe9e")},className:"traite"},"Commande trait\xe9e"):void 0))};var J=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.cart,2),a=t[0],c=t[1],l=Object(m.a)(e.token,1)[0],u=Object(n.useState)(0),i=Object(m.a)(u,2),d=i[0],b=i[1];Object(n.useEffect)((function(){!function(){var e=a.reduce((function(e,t){return e+t.price*t.quantity}),0);b(e)}()}),[a]);var f=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.patch("/user/addcart",{cart:t},{headers:{Authorization:l}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(v.confirmAlert)({title:"Confirmation ",message:"Voulez-vous vraiment confirmer votre commande ?",buttons:[{label:"Oui",onClick:function(){return j()}},{label:"Non",onClick:function(){return null}}]});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/commande",{cart:a},{headers:{Authorization:l}});case 2:c([]),f([]),Object(v.confirmAlert)({title:"Votre commande a \xe9t\xe9 confirm\xe9e.",message:"",buttons:[{label:"Ok",onClick:function(){return null}}]});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 0===a.length?r.a.createElement("h2",{style:{textAlign:"center",fontSize:"5rem"}},"Panier vide"):r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{className:"detail cart",key:e._id},r.a.createElement("img",{src:e.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("h2",null,e.title),r.a.createElement("h3",null,"MAD ",e.price*e.quantity),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.content),r.a.createElement("div",{className:"amount"},r.a.createElement("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id===t&&(1===e.quantity?e.quantity=1:e.quantity-=1)})),c(Object(E.a)(a)),void f(a);var t}}," - "),r.a.createElement("span",null,e.quantity),r.a.createElement("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id===t&&(e.quantity+=1)})),c(Object(E.a)(a)),void f(a);var t}}," + ")),r.a.createElement("div",{className:"delete",onClick:function(){return t=e._id,void Object(v.confirmAlert)({title:"Confirmation ",message:"Voulez-vous vraiment supprimer ce plat de votre panier ?",buttons:[{label:"Oui",onClick:function(){a.forEach((function(e,n){e._id===t&&a.splice(n,1)})),c(Object(E.a)(a)),f(a)}},{label:"Non",onClick:function(){return null}}]});var t}},"X")))})),r.a.createElement("div",{className:"total"},r.a.createElement("h3",null,"Totale : MAD ",d),r.a.createElement("button",{onClick:function(){return h()}},"Confirmer")))};var X=function(){return r.a.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:"300px",fontSize:"75px",color:"red",backgroundColor:"white"}},"404 | Not Found")},B={title:"",price:0,description:"",_id:"",frns:""};var H=function(){var e=Object(n.useContext)(O),t=Object(n.useState)(B),a=Object(m.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!1),i=Object(m.a)(u,2),d=i[0],b=i[1],E=Object(n.useState)(!1),h=Object(m.a)(E,2),j=h[0],g=h[1],k=Object(m.a)(e.userAPI.idFournisseur,1)[0],x=Object(m.a)(e.userAPI.isAdmin,1)[0],A=Object(m.a)(e.token,1)[0],C=Object(S.f)(),y=Object(S.g)(),w=Object(m.a)(e.productsAPI.products,1)[0],N=Object(n.useState)(!1),_=Object(m.a)(N,2),P=_[0],I=_[1],L=Object(m.a)(e.productsAPI.callback,2),D=L[0],q=L[1];Object(n.useEffect)((function(){y.id?(I(!0),w.forEach((function(e){e._id===y.id&&(l(e),b(e.images))}))):(I(!1),l(B),b(!1))}),[y.id,w]);var F=function(){var e=Object(s.a)(o.a.mark((function e(t){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,x){e.next=4;break}return e.abrupt("return",Object(v.confirmAlert)({title:"Vous n'\xeates pas un fournisseur de repas",message:"",buttons:[{label:"Ok",onClick:function(){return null}}]}));case 4:if(a=t.target.files[0]){e.next=7;break}return e.abrupt("return",Object(v.confirmAlert)({title:"Le fichier n'existe pas.",message:"",buttons:[{label:"OK",onClick:function(){}}]}));case 7:if(!(a.size>1048576)){e.next=9;break}return e.abrupt("return",Object(v.confirmAlert)({title:"Le fichier est trop volumineux !",message:"",buttons:[{label:"Ok",onClick:function(){return null}}]}));case 9:if("image/jpeg"===a.type||"image/png"===a.type){e.next=11;break}return e.abrupt("return",Object(v.confirmAlert)({title:"Le format du fichier est incorrect.",message:"",buttons:[{label:"OK",onClick:function(){return null}}]}));case 11:return(n=new FormData).append("file",a),g(!0),e.next=16,p.a.post("/api/upload",n,{headers:{"content-type":"multipart/form-data",Authorization:A}});case 16:r=e.sent,g(!1),b(r.data),e.next=23;break;case 21:e.prev=21,e.t0=e.catch(1);case 23:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,x){e.next=3;break}return e.abrupt("return",Object(v.confirmAlert)({title:"Vous n'\xeates pas un fournisseur de repas!",message:"",buttons:[{label:"OK",onClick:function(){return null}}]}));case 3:return g(!0),e.next=6,p.a.post("/api/destroy",{public_id:d.public_id},{headers:{Authorization:A}});case 6:g(!1),b(!1),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),M=function(e){var t=e.target,a=t.name,n=t.value;c.frns=k,l(Object(f.a)(Object(f.a)({},c),{},Object(R.a)({},a,n)))},T=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),Object(v.confirmAlert)({title:"Confirmation ",message:"",buttons:[{label:"Oui",onClick:function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,x){e.next=3;break}return e.abrupt("return",Object(v.confirmAlert)({title:"Vous n'\xeates pas un fournisseur de repas!",message:"",buttons:[{label:"OK",onClick:function(){return null}}]}));case 3:if(d){e.next=5;break}return e.abrupt("return",Object(v.confirmAlert)({title:"Ajoutez une image !",message:"",buttons:[{label:"Ok",onClick:function(){return null}}]}));case 5:if(!P){e.next=10;break}return e.next=8,p.a.put("/api/plats/".concat(c._id),Object(f.a)(Object(f.a)({},c),{},{images:d}),{headers:{Authorization:A}});case 8:e.next=12;break;case 10:return e.next=12,p.a.post("/api/plats",Object(f.a)(Object(f.a)({},c),{},{images:d}),{headers:{Authorization:A}});case 12:q(!D),C.push("/"),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(0);case 18:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}()},{label:"Non",onClick:function(){return null}}]});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K={display:d?"block":"none"};return r.a.createElement("div",{className:"create_product"},r.a.createElement("div",{className:"upload"},r.a.createElement("input",{type:"file",name:"file",id:"file_up",onChange:F}),j?r.a.createElement("div",{id:"file_img"},r.a.createElement(z,null)):r.a.createElement("div",{id:"file_img",style:K},r.a.createElement("img",{src:d?d.url:"",alt:""}),r.a.createElement("span",{onClick:V},"X"))),r.a.createElement("form",{onSubmit:T},r.a.createElement("h1",null,P?"Changez les informations que vous voulez ":"Remplissez les informations suivantes"),r.a.createElement("div",{className:"row"},r.a.createElement("input",{type:"text",name:"frns",id:"frns",hidden:!0,value:k,onChange:M})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"title"},"Titre"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"title",id:"title",required:!0,value:c.title,onChange:M})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"price"},"Prix"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"price",id:"price",required:!0,value:c.price,onChange:M})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("br",null),r.a.createElement("textarea",{type:"text",name:"description",id:"description",required:!0,value:c.description,rows:"5",onChange:M})),r.a.createElement("button",{type:"submit"},P?"Modifier":"Ajouter plat")))};var Q=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0];return r.a.createElement(S.c,null,r.a.createElement(S.a,{path:"/",exact:!0,component:a?F:q}),r.a.createElement(S.a,{path:"/detail/:id",exact:!0,component:V}),r.a.createElement(S.a,{path:"/login",exact:!0,component:t?X:M}),r.a.createElement(S.a,{path:"/register",exact:!0,component:t?X:T}),r.a.createElement(S.a,{path:"/create_product",exact:!0,component:a?H:X}),r.a.createElement(S.a,{path:"/edit_product/:id",exact:!0,component:a?H:X}),r.a.createElement(S.a,{path:"/history",exact:!0,component:t?K:X}),r.a.createElement(S.a,{path:"/history/:id",exact:!0,component:t?U:X}),r.a.createElement(S.a,{path:"/cart",exact:!0,component:J}),r.a.createElement(S.a,{path:"*",exact:!0,component:X}))};var G=function(){return r.a.createElement(j,null,r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(_,null),r.a.createElement(Q,null))))};l.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.39a8d7c7.chunk.js.map