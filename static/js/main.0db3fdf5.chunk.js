(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{26:function(e,t,a){e.exports=a(42)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=a(10),o=(a(36),a(12)),s=(a(37),a(15)),m=a(7),u=a(11),E=function(e){return e.user},d=Object(u.a)([E],(function(e){return e.orderHistory})),p=Object(u.a)([E],(function(e){return e.currentUser})),h={FETCH_ORDERS_START:"FETCH_ORDERS_START",FETCH_ORDERS_SUCCESS:"FETCH_ORDERS_SUCCESS",FETCH_ORDERS_FAILURE:"FETCH_ORDERS_FAILURE",USER_SIGN_OUT:"USER_SIGN_OUT",USER_SIGN_IN:"USER_SIGN_IN"},f=Object(i.b)((function(e){return{currentUser:p(e),orderHistory:d(e)}}),(function(e){return{fetchUserOrdersStart:function(t){return e(function(e){return{type:h.FETCH_ORDERS_START,payload:e}}(t))},signInUser:function(t){return e(function(e){return{type:h.USER_SIGN_IN,payload:e}}(t))},signOutUser:function(){return e({type:h.USER_SIGN_OUT})}}}))((function(e){var t=e.currentUser,a=e.orderHistory,c=e.fetchUserOrdersStart,l=e.signInUser,i=e.signOutUser,u=Object(n.useState)({loginEmail:"",searchEmail:""}),E=Object(o.a)(u,2),d=E[0],p=E[1],h=d.loginEmail,f=d.searchEmail,N=function(e){var t=e.target,a=t.value,n=t.name;p(Object(m.a)({},d,Object(s.a)({},n,a)))};return r.a.createElement("div",null,r.a.createElement("div",{className:"details"},r.a.createElement("h1",null,r.a.createElement("center",null,"A Simple New Action Implementation")),r.a.createElement("p",null),r.a.createElement("p",null,"This is a simple implementation of a redux-saga action - the order search. In this app, when a user signs in, redux-saga will automatically fetch the user's orders. When a user signs out, those orders disappear."),r.a.createElement("p",null,"The same order search feature is made available independently, as in searching for orders by email. You can see the different action calls in the console upon user login and order search."),r.a.createElement("p",null,"This app focuses solely on the redux-saga code and configuration. The database and authentication setup is irrelevant here. For this app, order data is stored in a file, and the SIGN_IN action provides a currentUser object that would be similar to a real application. For this app, the currentUser object is just an email address."),r.a.createElement("p",null,"To see an explanation of this implementation, visit this ",r.a.createElement("a",{href:"https://catscoding.blogspot.com/2020/04/create-new-redux-saga-action.html"},"blog post"),"."),r.a.createElement("p",null,"Open the Javascript Console to see log output.")),r.a.createElement("div",{className:"component-list-three"},r.a.createElement("div",{className:"component"},r.a.createElement("div",{className:"title"},"Sign In User"),r.a.createElement("div",{className:"title"},r.a.createElement("form",null,r.a.createElement("select",{name:"loginEmail",onChange:N},r.a.createElement("option",{value:""},"...select account..."),r.a.createElement("option",{value:"mary@mail.com"},"mary@mail.com"),r.a.createElement("option",{value:"jane@mail.com"},"jane@mail.com"),r.a.createElement("option",{value:"chris@mail.com"},"chris@mail.com")))),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){""!==h&&l(h)}},"Sign In User"))),r.a.createElement("div",{className:"component"},r.a.createElement("div",{className:"title"},"Fetch Orders By Email"),r.a.createElement("div",{className:"title"},r.a.createElement("form",null,r.a.createElement("select",{name:"searchEmail",onChange:N},r.a.createElement("option",{value:""},"...select account..."),r.a.createElement("option",{value:"mary@mail.com"},"mary@mail.com"),r.a.createElement("option",{value:"jane@mail.com"},"jane@mail.com"),r.a.createElement("option",{value:"chris@mail.com"},"chris@mail.com")))),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){""!==f&&c(f)}},"Fetch Orders "))),r.a.createElement("div",{className:"component"},r.a.createElement("div",{className:"title"},"Sign Out User"),r.a.createElement("div",{className:"description"},"Will only execute if a user was already signed in."),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){t&&i()}},"Sign Out User ")))),r.a.createElement("div",{className:"component-wide"},r.a.createElement("div",{className:"title"},"User Signed In:"),r.a.createElement("div",{className:"description"},t||"~ No one is signed in at the moment. ~"),r.a.createElement("div",{className:"title"},"Orders:"),a?a.map((function(e){return r.a.createElement("div",{className:"description",key:e.id},e.id," - ",e.email," - ",e.date," - $",e.amount)})):"No orders found."),r.a.createElement("br",null))})),N={INCREMENT:"INCREMENT",INCREMENT_TAKE:"INCREMENT_TAKE",INCREMENT_TAKEEVERY:"INCREMENT_TAKEEVERY",INCREMENT_TAKELATEST:"INCREMENT_TAKELATEST",DECREMENT:"DECREMENT",RESET:"RESET",INCREMENT_FROM_SAGA:"INCREMENT_FROM_SAGA",SET_TAKE:"SET_TAKE",SET_TAKEEVERY:"SET_TAKEEVERY",SET_TAKELATEST:"SET_TAKELATEST"},T=function(e,t){return{type:e,payload:t}},v=function(e){return e.app},b=Object(u.a)([v],(function(e){return e.value})),S=(Object(u.a)([v],(function(e){return e.sagaValue})),Object(i.b)((function(e){return{value:b(e)}}),(function(e){return{increment:function(t){return e(T(N.INCREMENT,t))},incrementTake:function(t){return e(T(N.INCREMENT_TAKE,t))},incrementTakeEvery:function(t){return e(T(N.INCREMENT_TAKEEVERY,t))},incrementTakeLatest:function(t){return e(T(N.INCREMENT_TAKELATEST,t))},decrement:function(t){return e(T(N.DECREMENT,t))},reset:function(t){return e(T(N.RESET,t))}}}))((function(e){var t=e.incrementTake,a=e.incrementTakeEvery,n=e.incrementTakeLatest,c=e.increment,l=e.decrement,i=e.reset,o=e.value;return r.a.createElement("div",null,r.a.createElement("div",{className:"details"},r.a.createElement("h1",null,r.a.createElement("center",null,"Difference between take(), takeEvery(), takeLatest()")),r.a.createElement("p",null),r.a.createElement("p",null,"The take(), takeEvery(), takeLatest() calls have been placed within their own separate generators and can be executed from the buttons below. "),r.a.createElement("p",null,"Each Saga generator will call the incrementFromSaga() function. The incrementFromSaga() function delays for 3 seconds and then dispatches the INCREMENT_FROM_SAGA action. The delay is added to demonstrate the control redux-saga has over the order of function calls."),r.a.createElement("p",null,"The INCREMENT_FROM_SAGA action simply increments the value by 1."),r.a.createElement("p",null,"Open the Javascript Console to see log output.")),r.a.createElement("div",{className:"component-wide"},r.a.createElement("center",null,r.a.createElement("div",{className:"title"},"Value: ",o),r.a.createElement("div",{className:"description"},"Simple add, minus, reset with no Saga generators called."),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return c(o)}},"Add 1 "),r.a.createElement("button",{onClick:function(){return l(o)}},"Minus 1"),r.a.createElement("button",{onClick:function(){return i(o)}},"Reset")))),r.a.createElement("div",{className:"component-list-three"},r.a.createElement("div",{className:"component"},r.a.createElement("div",{className:"title"},"Using take()"),r.a.createElement("div",{className:"description"},"It will take only the first action dispatched of a certain type. It returns the payload from that specific action. If the action is dispatched again, it will not be called. It has blocking behavior."),r.a.createElement("div",{className:"description"},"Click the button 3x quickly and watch the log."),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return t(o)}},"Add 1 (take) ")),r.a.createElement("div",{className:"description"},'You will find "incrementFromSaga() started." only once. Then, 3 seconds after that you will see the dispatch call for INCREMENT_FROM_SAGA. This is called only once. Any more clicks will be ignored.')),r.a.createElement("div",{className:"component"},r.a.createElement("div",{className:"title"},"Using takeEvery()"),r.a.createElement("div",{className:"description"},"This will execute upon every time the specified action is dispatched. It executes the function specified in the second parameter whenever that action type is dispatched. A payload is also returned."),r.a.createElement("div",{className:"description"},"Click the button 3x quickly and watch the log."),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return a(o)}},"Add 1 (takeEvery) ")),r.a.createElement("div",{className:"description"},' You will see three instance of "incrementFromSaga() started." in the log, one for each call. Each call will be delayed 3 seconds before dispatching INCREMENT_FROM_SAGA. The value will be incremented 3 times.')),r.a.createElement("div",{className:"component"},r.a.createElement("div",{className:"title"},"Using takeLatest()"),r.a.createElement("div",{className:"description"},"This will take only the last action dispatched of a certain type. If someone dispatches 10 actions in a row for an async task, this will only execute upon the last one, all previous calls are cancelled."),r.a.createElement("div",{className:"description"},"Click the button 3x quickly and watch the log. "),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return n(o)}},"Add 1 (takeLatest) ")),r.a.createElement("div",{className:"description"},'You will see three instance of "incrementFromSaga() started." in the log for each call. Since all subsequent call completed before incrementFromSaga() finished, you will only see one dispatch of INCREMENT_FROM_SAGA in the log. The value will be incremented from the latest value, and only once.'))))}))),R=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),s=i[0],m=i[1];return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"details"},r.a.createElement("center",null,r.a.createElement("h1",null,"Redux-Saga Snippets"),r.a.createElement("p",null),r.a.createElement("p",null,"A small collection of redux-saga sample implementations."),r.a.createElement("p",null,"The repistory for this app can be found on ",r.a.createElement("a",{href:"https://github.com/tanyamiranda/redux-saga"},"Github")))),r.a.createElement("div",{className:"component-list"},r.a.createElement("div",{className:"component-selection",onClick:function(){c(!0),m(!1)}},r.a.createElement("div",{className:"title"},"Order Search"),r.a.createElement("div",{className:"details"},"A simple implementation of a few redux-saga actions.")),r.a.createElement("div",{className:"component-selection",onClick:function(){c(!1),m(!0)}},r.a.createElement("div",{className:"title"},"Take/TakeEvery/TakeLatest"),r.a.createElement("div",{className:"details"},"An explanation of these redux-saga functions."))),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{className:"component-page"},a?r.a.createElement(f,null):null),r.a.createElement("div",{className:"component-page"},s?r.a.createElement(S,null):null))},y=(a(38),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null))}),O=a(8),_=a(25),g=a(23),A=a.n(g),C=a(16),k=a(24),I={value:0,takeValue:0,takeEveryValue:0,takeLatestValue:0},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.SET_TAKE:return Object(m.a)({},e,{takeValue:t.payload});case N.SET_TAKEEVERY:return Object(m.a)({},e,{takeEveryValue:t.payload});case N.SET_TAKELATEST:return Object(m.a)({},e,{takeLatestValue:t.payload});case N.INCREMENT:case N.INCREMENT_TAKE:case N.INCREMENT_TAKEEVERY:case N.INCREMENT_TAKELATEST:case N.INCREMENT_FROM_SAGA:return Object(m.a)({},e,{value:e.value+1});case N.DECREMENT:return Object(m.a)({},e,{value:e.value-1});case N.RESET:return Object(m.a)({},e,{value:0});default:return e}},w={currentUser:null,orderHistory:[],error:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.USER_SIGN_IN:return Object(m.a)({},e,{currentUser:t.payload});case h.USER_SIGN_OUT:return Object(m.a)({},e,{currentUser:null,orderHistory:[],error:null});case h.FETCH_ORDERS_SUCCESS:return Object(m.a)({},e,{orderHistory:t.payload});case h.FETCH_ORDERS_FAILURE:return Object(m.a)({},e,{orderHistory:[],error:t.payload});default:return e}},U={key:"root",storage:a.n(k).a,whitelist:["cart"]},M=Object(O.c)({app:j,user:x}),F=Object(C.a)(U,M),K=a(4),L=a.n(K),G=a(5),H=L.a.mark(J),D=L.a.mark(B),V=L.a.mark(W),Y=L.a.mark($),q=L.a.mark(z);function J(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("incrementFromSaga() started."),e.next=3,Object(G.c)(3e3);case 3:return e.next=5,Object(G.d)({type:N.INCREMENT_FROM_SAGA});case 5:console.log("incrementFromSaga() completed.");case 6:case"end":return e.stop()}}),H)}function B(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.g)(N.INCREMENT_TAKELATEST,J);case 2:case"end":return e.stop()}}),D)}function W(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.e)(N.INCREMENT_TAKE);case 2:return e.next=4,J();case 4:case"end":return e.stop()}}),V)}function $(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.f)(N.INCREMENT_TAKEEVERY,J);case 2:case"end":return e.stop()}}),Y)}function z(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)($),Object(G.b)(W),Object(G.b)(B)]);case 2:case"end":return e.stop()}}),q)}var P=[{email:"chris@mail.com",id:100000001,amount:125,date:"1/1/2020"},{email:"jane@mail.com",id:100000002,amount:125,date:"1/1/2020"},{email:"mary@mail.com",id:100000003,amount:125,date:"1/1/2020"},{email:"mary@mail.com",id:100000004,amount:125,date:"1/1/2020"},{email:"chris@mail.com",id:100000005,amount:125,date:"1/1/2020"},{email:"chris@mail.com",id:100000006,amount:125,date:"1/1/2020"},{email:"mary@mail.com",id:100000007,amount:125,date:"1/1/2020"},{email:"jane@mail.com",id:100000008,amount:125,date:"1/1/2020"},{email:"mary@mail.com",id:200000001,amount:125,date:"1/1/2020"},{email:"mary@mail.com",id:200000002,amount:125,date:"1/1/2020"},{email:"jane@mail.com",id:200000003,amount:125,date:"1/1/2020"},{email:"chris@mail.com",id:200000004,amount:125,date:"1/1/2020"},{email:"mary@mail.com",id:300000001,amount:125,date:"1/1/2020"},{email:"jane@mail.com",id:300000002,amount:125,date:"1/1/2020"},{email:"mary@mail.com",id:300000003,amount:125,date:"1/1/2020"},{email:"jane@mail.com",id:300000004,amount:125,date:"1/1/2020"},{email:"mary@mail.com",id:999999999,amount:125,date:"1/1/2020"},{email:"chris@mail.com",id:999999998,amount:125,date:"1/1/2020"},{email:"mary@mail.com",id:999999997,amount:125,date:"1/1/2020"},{email:"chris@mail.com",id:999999996,amount:125,date:"1/1/2020"}],Q=L.a.mark(te),X=L.a.mark(ae),Z=L.a.mark(ne),ee=L.a.mark(re);function te(e){var t,a;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,a=P.filter((function(e){return e.email===t})),n.next=5,Object(G.d)({type:h.FETCH_ORDERS_SUCCESS,payload:a});case 5:n.next=11;break;case 7:return n.prev=7,n.t0=n.catch(1),n.next=11,Object(G.d)((r=n.t0.message,{type:h.FETCH_ORDERS_FAILURE,payload:r}));case 11:case"end":return n.stop()}var r}),Q,null,[[1,7]])}function ae(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.g)(h.USER_SIGN_IN,te);case 2:case"end":return e.stop()}}),X)}function ne(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.g)(h.FETCH_ORDERS_START,te);case 2:case"end":return e.stop()}}),Z)}function re(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(ne),Object(G.b)(ae)]);case 2:case"end":return e.stop()}}),ee)}var ce=L.a.mark(le);function le(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(z),Object(G.b)(re)]);case 2:case"end":return e.stop()}}),ce)}var ie=Object(_.a)(),oe=[A.a,ie],se=Object(O.e)(F,O.a.apply(void 0,oe));ie.run(le);Object(C.b)(se);l.a.render(r.a.createElement(i.a,{store:se},r.a.createElement(y,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0db3fdf5.chunk.js.map