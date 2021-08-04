(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(t,e,o){},28:function(t,e,o){},41:function(t,e,o){"use strict";o.r(e);var n=o(0),c=o.n(n),a=o(20),r=o.n(a),s=(o(28),o(23)),i=o(7),l=o(8),d=o(10),u=o(9),p=o(13),j=o(2),b=o(1),h={padding:"6px 12px",border:"none",background:"crimson",color:"#fff",position:"relative",float:"right",pointer:"cursor",borderRadius:"50%"},m=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title,n=t.completed,c={textDecoration:n?"line-through":"none",color:n?"gray":"black"};return Object(b.jsx)("div",{className:"todos-container",style:c,children:Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",o," "," ",Object(b.jsx)("button",{className:"delete-todo-btn",style:h,onClick:this.props.deleteToDo.bind(this,e),children:"X"})]})})}}]),o}(n.Component),f=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return Object(b.jsx)(m,{todo:e,markComplete:t.props.markComplete,deleteToDo:t.props.deleteToDo},"".concat(e.id,"-").concat(e.title))}))}}]),o}(n.Component);var O=function(){var t={textDecoration:"none",color:"#fff"};return Object(b.jsxs)("header",{style:{background:"teal",color:"#fff",textAlign:"center",padding:20,boxShadow:"1px 4px 8px #5f8f88",marginBottom:"25px",wordSpacing:"1ch",letterSpacing:".5ch"},children:[Object(b.jsx)("h1",{style:{marginBottom:12,color:"#000"},children:"SIMPLE REACT TODO LIST"}),Object(b.jsx)(p.b,{style:t,to:"/",children:"Home"})," | ",Object(b.jsx)(p.b,{style:t,to:"/about",children:"About"})]})},x=o(22),v=(o(19),function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(t){var n;return Object(i.a)(this,o),(n=e.call(this,t)).handleOnChange=function(t){n.setState(Object(x.a)({},t.target.name,t.target.value))},n.handleOnSubmit=function(t){t.preventDefault(),n.props.addToDo(n.state.titleInput),n.setState({titleInput:""})},n.state={titleInput:""},n}return Object(l.a)(o,[{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.handleOnSubmit,className:"todo-form",children:[Object(b.jsx)("input",{className:"todo-title-input",type:"text",name:"titleInput",onChange:this.handleOnChange,placeholder:"Add new ToDo task...",value:this.state.titleInput,required:!0}),Object(b.jsx)("input",{className:"todo-submit-btn",type:"submit",value:"Submit"})]})}}]),o}(n.Component));function g(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("div",{className:"about-container",children:Object(b.jsx)("p",{children:"This is a ToDo app made by Dexter Reyes"})})})}var y=o(43),T=o.p+"static/media/todo.a4e28354.jpg";o(35).config();var D=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(t){var n;return Object(i.a)(this,o),(n=e.call(this,t)).markCompleted=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n.delToDo=function(t){n.setState({todos:n.state.todos.filter((function(e){return e.id!==t}))})},n.addToDo=function(t){if(n.state.todos.some((function(e){return e.title===t})))alert("ToDo already exists.");else{var e={id:Object(y.a)(),title:t,completed:!1};n.setState({todos:[].concat(Object(s.a)(n.state.todos),[e])})}},n.callToAPI=function(){return new Promise((function(t,e){setTimeout((function(){var o=fetch("https://jsonplaceholder.typicode.com/users/1/todos");o?(console.log("DATA RETRIEVED!"),t(o)):e("SERVER ERROR!")}),1e3)}))},n.state={todos:[]},n}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=this;this.callToAPI().then((function(t){return t.json()})).then((function(e){var o=e.map((function(t){var e=t.title,o=t.completed;return{id:Object(y.a)(),title:e,completed:o}}));t.setState({todos:o})}))}},{key:"render",value:function(){var t=this,e={margin:"50px 0",textAlign:"center",color:"#c3c3c3"};return Object(b.jsx)(p.a,{basename:"ToDoList-React",children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsx)(j.a,{exact:!0,path:"/",render:function(o){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(v,{addToDo:t.addToDo}),t.state.todos.length<=0&&Object(b.jsxs)("div",{style:e,children:[Object(b.jsxs)("h1",{children:["Your list is currently empty.",Object(b.jsx)("br",{}),"Add some tasks to keep yourself productive."]}),Object(b.jsx)("img",{style:{maxWidth:"100%",width:"55%"},src:T}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{style:{textDecoration:"none",color:"teal"},href:"https://www.vecteezy.com/free-vector/task-management",children:"Task Management Vectors by Vecteezy"})]}),Object(b.jsx)(f,{todos:t.state.todos,markComplete:t.markCompleted,deleteToDo:t.delToDo})]})})}}),Object(b.jsx)(j.a,{path:"/about",component:g})]})})}}]),o}(n.Component),k=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,44)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;o(t),n(t),c(t),a(t),r(t)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),k()}},[[41,1,2]]]);
//# sourceMappingURL=main.f3f60be3.chunk.js.map