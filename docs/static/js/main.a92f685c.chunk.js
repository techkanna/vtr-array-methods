(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),o=n(7),u=n(2),i=n.n(u),s=n(3),m=n(6),f=n(5);n(16);var h=function(e){var t=e.doubleMoney,n=e.addNewUser,a=e.showMillionaires,c=e.sortByRichest,l=e.calcWealth;return r.a.createElement("aside",null,r.a.createElement("button",{onClick:n},"Add User",r.a.createElement("span",{role:"img","aria-label":"smile face"},"\ud83d\udc71\u200d\u2642\ufe0f")),r.a.createElement("button",{onClick:t},"Double Money",r.a.createElement("span",{role:"img","aria-label":"money"},"\ud83d\udcb0")),r.a.createElement("button",{onClick:a},"Show Only Millionaires",r.a.createElement("span",{role:"img","aria-label":"money"},"\ud83d\udcb5")),r.a.createElement("button",{onClick:c},"Sort by Richest",r.a.createElement("span",{role:"img","aria-label":"down arrow"},"\u2193")),r.a.createElement("button",{onClick:l},"Calculate entire Wealth",r.a.createElement("span",{role:"img","aria-label":"calculate"},"\ud83e\uddee")))};var p=function(e){var t=e.users,n=e.loading,a=e.wealth,c=function(e){return"$"+e.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")};return r.a.createElement("main",null,r.a.createElement("h2",null,r.a.createElement("strong",null,"Person")," Wealth"),n&&r.a.createElement("h1",null,"loading"),t.map((function(e,t){return r.a.createElement("div",{key:t,className:"person"},r.a.createElement("img",{src:e.picture,alt:e.name}),r.a.createElement("strong",null,"$",e.name),r.a.createElement("span",{className:"money"},c(e.money)))})),a&&r.a.createElement("div",null,r.a.createElement("h3",null,"Total Wealth: ",r.a.createElement("strong",null,c(a)))))};var b=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!0),u=Object(f.a)(l,2),b=u[0],E=u[1],d=Object(a.useState)(null),y=Object(f.a)(d,2),j=y[0],v=y[1];return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://randomuser.me/api/?results=3");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,E(!1),n.results.forEach((function(e){var t={name:"".concat(e.name.first," ").concat(e.name.last),money:Math.floor(1e6*Math.random()),picture:e.picture.thumbnail};c((function(e){return[].concat(Object(s.a)(e),[t])}))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Array Methods"),r.a.createElement("div",{className:"container"},r.a.createElement(h,{doubleMoney:function(){c((function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{money:2*e.money})}))}))},addNewUser:function(){(function(){var e=Object(m.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://randomuser.me/api/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.results[0],r={name:"".concat(a.name.first," ").concat(a.name.last),money:Math.floor(1e6*Math.random()),picture:a.picture.thumbnail},c((function(e){return[].concat(Object(s.a)(e),[r])}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},showMillionaires:function(){c((function(e){return Object(s.a)(e.filter((function(e){return e.money>1e6})))}))},sortByRichest:function(){c((function(e){return Object(s.a)(e.sort((function(e,t){return t.money-e.money})))}))},calcWealth:function(){v(n.reduce((function(e,t){return e+t.money}),0))}}),r.a.createElement(p,{users:n,loading:b,wealth:j})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a92f685c.chunk.js.map