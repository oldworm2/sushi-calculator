(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(20),c=n.n(r),o=(n(77),n(38)),l=n(37),u=n(55),s=n(56),m=n(70),d=n(57),h=n(71),E=n(58),p=n.n(E),f=n(60),v=n.n(f),b=n(22),y=n.n(b),w=n(9),k=n.n(w),g=n(21),j=n.n(g),S=n(68),O=n.n(S),C=n(69),x=n.n(C),A=n(61),B=n.n(A),F=n(67),J=n.n(F),W=n(63),I=n.n(W),P=n(62),R=n.n(P),T=n(64),$=n.n(T),q=n(65),z=n.n(q),D=n(66),G=n.n(D),H=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={total:{amount:0,count:0},menus:[{title:"Sushi",price:1,count:0},{title:"Sushi",price:1.2,count:0},{title:"Sushi",price:1.5,count:0},{title:"Sushi",price:1.8,count:0},{title:"Sushi",price:2,count:0},{title:"Sushi",price:2.5,count:0},{title:"Sushi",price:2.8,count:0},{title:"Sushi",price:3,count:0}]},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"add",value:function(t){var e=Object(l.a)(this.state.menus),n=Object(o.a)({},this.state.total);e[t].count++,n.count++,n.amount+=e[t].price,this.setState({menus:e,total:n})}},{key:"del",value:function(t){var e=Object(l.a)(this.state.menus),n=Object(o.a)({},this.state.total);0!==e[t].count&&(e[t].count--,n.count--,n.amount-=e[t].price,this.setState({menus:e,total:n}))}},{key:"reset",value:function(){var t=this.state.menus.map(function(t){return t.count=0,t});this.setState({menus:t,total:{amount:0,count:0}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(K,{title:"Sushi Calculator"}),i.a.createElement("main",null,i.a.createElement(L,{menus:this.state.menus,total:this.state.total,add:this.add.bind(this),del:this.del.bind(this),reset:this.reset.bind(this)})))}}]),e}(a.Component),K=function(t){return i.a.createElement(p.a,{position:"static",color:"primary"},i.a.createElement(v.a,null,i.a.createElement(y.a,{variant:"h6",color:"inherit"},t.title)))},L=function(t){return i.a.createElement(k.a,{direction:"row",container:!0,justify:"center",spacing:24,style:{padding:10,width:"100%",margin:"auto"}},i.a.createElement(k.a,{xs:12,item:!0},i.a.createElement(y.a,{variant:"h4"},"Total : ",t.total.count," Price : ",t.total.amount.toFixed(2)),i.a.createElement(j.a,{onClick:function(){return t.reset()},variant:"outlined"},"Reset")),t.menus.map(function(e,n){return i.a.createElement(k.a,{key:n,item:!0,xs:12,sm:6,md:4,lg:3},i.a.createElement(B.a,null,i.a.createElement(R.a,{onClick:function(){return t.add(n)}},i.a.createElement(I.a,null,i.a.createElement(k.a,{direction:"row",justify:"center",container:!0,spacing:24},i.a.createElement(k.a,{item:!0},i.a.createElement($.a,{"aria-label":"Cart"},i.a.createElement(z.a,{badgeContent:e.count,color:0===e.count?"primary":"secondary"},i.a.createElement(G.a,null)))),i.a.createElement(k.a,{item:!0},i.a.createElement(y.a,{variant:"h6"},e.title),i.a.createElement(y.a,{variant:"subtitle1"},e.price.toFixed(2)))))),i.a.createElement(J.a,null,i.a.createElement(k.a,{direction:"row",justify:"center",container:!0,spacing:24},i.a.createElement(k.a,{item:!0},i.a.createElement(j.a,{onClick:function(){return t.add(n)},variant:"contained",color:"primary","aria-label":"Add"},i.a.createElement(O.a,null)),i.a.createElement(j.a,{onClick:function(){return t.del(n)},variant:"contained",color:"secondary","aria-label":"Add"},i.a.createElement(x.a,null)))))))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},72:function(t,e,n){t.exports=n(181)},77:function(t,e,n){}},[[72,2,1]]]);
//# sourceMappingURL=main.af8e99c8.chunk.js.map