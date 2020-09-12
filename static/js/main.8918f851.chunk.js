(this["webpackJsonptodo-redux-ts"]=this["webpackJsonptodo-redux-ts"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),l=(a(21),a(22),a(1)),i=(a(28),function(e){var t=e.checkActiveCategory,a=e.selectAllTaskBtn;return o.a.createElement("div",{className:t?"all-category active":"all-category",onClick:a},"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438")}),u=(a(29),function(e){var t=e.name,a=e.color,n=e.active,r=e.selectCategory,c=e.id,l=e.removeCategory;return o.a.createElement("div",{className:"category__item"},o.a.createElement("div",{className:n?"category__item-container active":"category__item-container",onClick:function(){return r(c)}},o.a.createElement("span",{className:"category__color",style:{backgroundColor:a}})," ",t),o.a.createElement("span",{className:"category__remove",onClick:function(){return l(c)}}))}),s=(a(30),function(e){var t=e.name,a=e.color;return o.a.createElement("h1",{className:"title",style:{color:a}},t)}),m=(a(31),function(e){var t=e.showForm;return o.a.createElement("div",{className:"show-create-category-form",onClick:t},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e")}),d=(a(32),[{id:"color-gray",color:"#C9D1D3"},{id:"color-green",color:"#42B883"},{id:"color-blue",color:"#64C4ED"},{id:"color-pink",color:"#FFBBCC"},{id:"color-lime",color:"#B6E6BD"},{id:"color-purple",color:"#C355F5"},{id:"color-black",color:"#09011A"},{id:"color-red",color:"#FF6464"}]),E=function(e){var t=e.setCategoryColor;return o.a.createElement("div",{className:"select-category-color"},d.map((function(e){return o.a.createElement("div",{className:"color-item",key:e.color},o.a.createElement("input",{className:e.id,type:"radio",id:e.id,onChange:function(){return t(e.color)},name:"select-color"}),o.a.createElement("label",{htmlFor:e.id,style:{backgroundColor:e.color}}))})))},f=function(e){var t=e.closeForm,a=e.sendData,n=e.inputFormHandler,r=e.setCategoryColor;return o.a.createElement("div",{className:"create-category-form"},o.a.createElement("div",{className:"create-category-form__close-btn",onClick:function(){return t(!1)}}),o.a.createElement("form",{onSubmit:a},o.a.createElement("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438",onChange:function(e){return n(e.target.value)},autoFocus:!0}),o.a.createElement(E,{setCategoryColor:r}),o.a.createElement("button",{className:"create-category-btn"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))},y=(a(33),function(e){var t=e.showForm;return o.a.createElement("div",{className:"show-create-todo-form",onClick:t},"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430")}),O=(a(34),function(e){var t=e.inputFormHandler,a=e.curValue,n=e.sendData,r=e.closeForm;return o.a.createElement("form",{className:"create-todo-item-form",onSubmit:n},o.a.createElement("input",{type:"text",placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",onChange:function(e){return t(e.target.value)},value:a,autoFocus:!0}),o.a.createElement("button",{className:"create-task"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"),o.a.createElement("button",{className:"cancel",onClick:r},"\u041e\u0442\u043c\u0435\u043d\u0430"))}),v=(a(35),function(e){var t=e.taskName,a=e.toggleTaskStatus,n=e.id,r=e.status,c=e.removeTask;return o.a.createElement("div",{className:"todo-item"},o.a.createElement("label",{className:"todo-item__container"},o.a.createElement("input",{type:"checkbox",checked:r,onChange:function(){return a(n)}}),o.a.createElement("span",null,t)),o.a.createElement("span",{className:"todo-item__remove",onClick:function(){return c(n)}}))}),g=function(e){return{type:"SELECT_TODO_CATEGORY_ID",payload:e}},b=function(e){return{type:"DELETE_TODO_ITEM",payload:e}},_=function(e){return{type:"HANDLER_TODO_STATUS_TASK",payload:e}},p=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.todo})),a=0===t.activeCategoryID;return t.todoCategoryList.length>0?o.a.createElement(i,{checkActiveCategory:a,selectAllTaskBtn:function(){a||e(g(0))}}):null},T=function(){var e=Object(l.c)((function(e){return e.todo.todoCategoryList})),t=Object(l.c)((function(e){return e.todo.todoTaskList})),a=Object(l.b)(),n=function(e){a(_(e))},r=function(e){a(b(e))};return t.length>0?o.a.createElement(o.a.Fragment,null,e.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement(s,{key:e.id,name:e.name,color:e.color}),t.filter((function(t){return t.category===e.id})).map((function(e){return o.a.createElement(v,{key:e.id,taskName:e.task,id:e.id,status:e.done,toggleTaskStatus:n,removeTask:r})})))}))):o.a.createElement("div",{className:"task-list-empty"},"\u0417\u0430\u0434\u0430\u0447\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442")},C=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.todo})),a=t.todoCategoryList,n=t.activeCategoryID,r=function(t){n!==t&&e(g(t))},c=function(t){e(function(e){return{type:"DELETE_TODO_CATEGORY_ITEM",payload:e}}(t)),e(g(0))};return a.map((function(e){var t=e.id===n;return o.a.createElement(u,{name:e.name,key:e.id,color:e.color,active:t,selectCategory:r,id:e.id,removeCategory:c})}))},k=function(){var e=Object(l.c)((function(e){return e.todo}));return(e.todoCategoryList.filter((function(t){return t.id===e.activeCategoryID}))||[]).map((function(e){return o.a.createElement(s,{name:e.name,key:e.id,color:e.color})}))},D=function(e){var t=e.statusForm;return o.a.createElement(m,{showForm:function(){t(!0)}})},j=function(e){var t=e.setStatusForm;return o.a.createElement(y,{showForm:function(){t(!0)}})},N=a(3),F=function(e){var t=e.setStatusForm,a=Object(l.c)((function(e){return e.todo})),r=a.nextTaskID,c=a.activeCategoryID,i=Object(l.b)(),u=Object(n.useState)(""),s=Object(N.a)(u,2),m=s[0],d=s[1];return o.a.createElement(O,{inputFormHandler:function(e){d(e)},curValue:m,closeForm:function(){t(!1)},sendData:function(e){if(e.preventDefault(),""===m.trim())return!1;i({type:"ADD_NEW_TODO_TASK_ITEM",payload:{id:r,category:c,task:m,done:!1}}),d(""),t(!1)}})},L=function(e){var t=e.statusForm,a=Object(l.b)(),r=Object(l.c)((function(e){return e.todo.nextCategoryID})),c=Object(n.useState)(""),i=Object(N.a)(c,2),u=i[0],s=i[1],m=Object(n.useState)("#525252"),d=Object(N.a)(m,2),E=d[0],y=d[1];return o.a.createElement(f,{closeForm:t,sendData:function(e){if(e.preventDefault(),""===u.trim())return!1;a({type:"ADD_NEW_TODO_CATEGORY_ITEM",payload:{id:r,color:E,name:u}}),t(!1)},inputFormHandler:s,setCategoryColor:y})},I=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),a=t[0],r=t[1];return a?o.a.createElement(L,{statusForm:r}):o.a.createElement(D,{statusForm:r})},h=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),a=t[0],r=t[1];return a?o.a.createElement(F,{setStatusForm:r}):o.a.createElement(j,{setStatusForm:r})},S=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.todo})),a=t.activeCategoryID,n=t.todoTaskList.filter((function(e){return a===e.category})),r=function(t){e(_(t))},c=function(t){e(b(t))};return n.map((function(e){return o.a.createElement(v,{taskName:e.task,key:e.id,id:e.id,status:e.done,toggleTaskStatus:r,removeTask:c})}))},A=function(){return Object(l.c)((function(e){return e.todo.activeCategoryID}))>0?o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(S,null),o.a.createElement(h,null)):o.a.createElement(T,null)},x=function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"app__container"},o.a.createElement("div",{className:"app__lcol"},o.a.createElement("div",{className:"category"},o.a.createElement("div",{className:"category__all"},o.a.createElement(p,null)),o.a.createElement("div",{className:"category__list"},o.a.createElement(C,null)),o.a.createElement("div",{className:"category__create"},o.a.createElement(I,null)))),o.a.createElement("div",{className:"app__rcol"},o.a.createElement(A,null))))},w=a(4),M=a(15),B=a.n(M),R=a(6),G=a(2),H={todoTaskList:[],todoCategoryList:[],activeCategoryID:0,nextTaskID:1,nextCategoryID:1},Y=Object(w.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_TODO_CATEGORY_ITEM":return Object(G.a)(Object(G.a)({},e),{},{todoCategoryList:[].concat(Object(R.a)(e.todoCategoryList),[t.payload]),nextCategoryID:e.nextCategoryID+1});case"DELETE_TODO_CATEGORY_ITEM":var a=e.todoCategoryList.filter((function(e){return e.id!==t.payload})),n=e.todoTaskList.filter((function(e){return e.category!==t.payload}));return Object(G.a)(Object(G.a)({},e),{},{todoCategoryList:a,todoTaskList:n});case"SELECT_TODO_CATEGORY_ID":return Object(G.a)(Object(G.a)({},e),{},{activeCategoryID:t.payload});case"ADD_NEW_TODO_TASK_ITEM":return Object(G.a)(Object(G.a)({},e),{},{todoTaskList:[].concat(Object(R.a)(e.todoTaskList),[t.payload]),nextTaskID:e.nextTaskID+1});case"DELETE_TODO_ITEM":var o=Object(R.a)(e.todoTaskList).filter((function(e){return e.id!==t.payload}));return Object(G.a)(Object(G.a)({},e),{},{todoTaskList:o});case"HANDLER_TODO_STATUS_TASK":var r=Object(R.a)(e.todoTaskList).map((function(e){return e.id===t.payload?Object(G.a)(Object(G.a)({},e),{},{done:!e.done}):e}));return Object(G.a)(Object(G.a)({},e),{},{todoTaskList:r});default:return e}}}),K=Object(w.d)(Y,Object(w.a)(B.a));c.a.render(o.a.createElement(l.a,{store:K},o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null))),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.8918f851.chunk.js.map