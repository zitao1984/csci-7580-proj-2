(this.webpackJsonpzitao_shen_assignment2=this.webpackJsonpzitao_shen_assignment2||[]).push([[0],{17:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),i=c(11),r=c.n(i),n=(c(16),c(17),c(24),c(6)),l=c(3),o=c(8),j="text",d="link",m=Object(o.a)({"Learn React":[{type:j,title:"Create a new project",text:"cd to the project directory\nnpx create-react-app project-name\ncd project-name\nnpm start"},{type:d,url:"https://reactjs.org/docs/getting-started.html",text:"React docs"},{type:d,url:"https://reactstrap.github.io/",text:"Reactstrap docs"}]},"no project",[{type:j,title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Justo nec ultrices dui sapien eget mi proin sed libero. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Nisi quis eleifend quam adipiscing. Sit amet tellus cras adipiscing enim eu. Tincidunt tortor aliquam nulla facilisi cras fermentum. Orci phasellus egestas tellus rutrum. Tortor dignissim convallis aenean et. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Purus semper eget duis at tellus. Ut consequat semper viverra nam libero justo laoreet sit amet. Sed enim ut sem viverra aliquet eget. Amet volutpat consequat mauris nunc congue nisi. Aliquet nibh praesent tristique magna."},{type:d,url:"https://loremipsum.io/generator/",text:"Lorem Ipsum generator"}]),b=c(4),u=c(5),h=c(0),x=function(e){var t=Object(s.useState)({project:"",isValid:void 0}),c=Object(l.a)(t,2),a=c[0],i=c[1],r=a.isValid;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Got a new project?"}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.submit({project:a.project},"Unnamed project")},noValidate:!0,className:"projectWindow",children:[Object(h.jsxs)("div",{className:"row my-2",children:[Object(h.jsx)("label",{className:"col-sm-3 col-form-label projectWindowFont",htmlFor:"newProject",children:"Submit a new project name:"}),Object(h.jsxs)("div",{className:"col-sm-9",children:[Object(h.jsx)("input",{id:"newProject",className:"form-control",type:"text",value:a.project,onChange:function(e){var t;i({project:(t=e).target.value,isValid:t.target.value.length>0})}}),Object(h.jsx)("div",{className:"invalid-feedback",style:!1===a.isValid?{display:"block"}:{display:"none"},children:"Project name cannot be empty"})]})]}),Object(h.jsx)("div",{className:"row my-2",children:Object(h.jsx)("div",{className:"col text-end",children:Object(h.jsxs)("button",{className:"btn btn-primary btn-lg",type:"submit",disabled:!r,color:r?"primary":"secondary",children:["Submit, Lets GO !! ",Object(h.jsx)(b.a,{icon:u.a})]})})})]})]})},p=function(e){return Object(h.jsx)("div",{className:"col gy-4 ",children:Object(h.jsxs)("div",{className:"card border-primary border-2 mb-4",children:[Object(h.jsx)("div",{className:"card-header",children:"Link Note"}),Object(h.jsx)("div",{className:"card-body text-primary ",children:""!==e.text?Object(h.jsx)("p",{className:"card-text whitespace",children:Object(h.jsx)("a",{href:e.url,children:e.text})}):Object(h.jsx)("p",{className:"card-text whitespace",children:Object(h.jsx)("a",{href:e.url,children:e.url})})})]})})},O=function(e){return Object(h.jsx)("div",{className:"col gy-4",children:Object(h.jsxs)("div",{className:"card border-success mb-3 border-2",children:[Object(h.jsx)("div",{className:"card-header",children:"Text Note"}),Object(h.jsxs)("div",{className:"card-body text-success",children:[Object(h.jsx)("h4",{className:"card-title",children:e.title}),Object(h.jsx)("p",{className:"card-text whiteSpace",children:e.text})]})]})})},v=function(e){return e.notes.type===d?Object(h.jsx)(p,{url:e.notes.url,text:e.notes.text}):e.notes.type===j?Object(h.jsx)(O,{title:e.notes.title,text:e.notes.text}):""},N=function(e){var t=Object(s.useState)({url:"",isValid:void 0}),c=Object(l.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)({title:"",isValid:void 0}),n=Object(l.a)(r,2),o=n[0],m=n[1],b=Object(s.useState)({text:"",isValid:void 0}),u=Object(l.a)(b,2),x=u[0],p=u[1],O=Object(s.useState)({type:""}),v=Object(l.a)(O,2),N=v[0],f=v[1],y=function(){return!(N!==d||!a.isValid)||!!(N===j&&x.isValid||N===j&&o.isValid)};return Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.submit({title:o.title,type:N,url:a.url,text:x.text},"Controlled Form with Validation")},noValidate:!0,children:[Object(h.jsx)("h4",{children:"Add a new note"}),Object(h.jsxs)("div",{className:"fontAddNote",children:[Object(h.jsxs)("div",{className:"row my-2 ",children:[Object(h.jsx)("legend",{className:"col-form-label col-sm-3 pt-0",children:"Note type:"}),Object(h.jsxs)("div",{className:"col-auto",children:[Object(h.jsx)("input",{type:"radio",className:"form-check-input",id:"text",name:"noteType",checked:N===j,onChange:function(e){return f(e.target.id)}})," ",Object(h.jsxs)("label",{className:"form-check-label",htmlFor:"text",children:["Text"," "]}),Object(h.jsx)("div",{className:"invalid-feedback feedbackCustomize",style:N===j?{display:"block"}:{display:"none"},children:"For Text note: text and title cannot both be empty"})]}),Object(h.jsxs)("div",{className:"col-auto",children:[Object(h.jsx)("input",{type:"radio",className:"form-check-input",id:"link",name:"noteType",checked:N===d,onChange:function(e){return f(e.target.id)}})," ",Object(h.jsx)("label",{className:"form-check-label",htmlFor:"link",children:"Link"}),Object(h.jsx)("div",{className:"invalid-feedback feedbackCustomize",style:N===d?{display:"block"}:{display:"none"},children:"For Link note: it must have URL"})]})]}),Object(h.jsxs)("div",{className:"row my-2",children:[Object(h.jsx)("label",{className:"col-sm-3 col-form-label",htmlFor:"title",children:"Title:"}),Object(h.jsx)("div",{className:"col-sm-9",children:Object(h.jsx)("input",{id:"title",className:"form-control",type:"text",value:o.title,onChange:function(e){var t;m({title:(t=e).target.value,isValid:t.target.value.length>0})}})})]}),Object(h.jsxs)("div",{className:"row my-2",children:[Object(h.jsx)("label",{className:"col-sm-3 col-form-label",htmlFor:"text",children:"Text:"}),Object(h.jsx)("div",{className:"col-sm-9",children:Object(h.jsx)("input",{id:"text",className:"form-control",type:"text",value:x.text,onChange:function(e){var t;p({text:(t=e).target.value,isValid:t.target.value.length>0})}})})]}),Object(h.jsxs)("div",{className:"row my-2",children:[Object(h.jsx)("label",{className:"col-sm-3 col-form-label",htmlFor:"url",children:"URL:"}),Object(h.jsxs)("div",{className:"col-sm-9",children:[Object(h.jsx)("input",{id:"url",className:"form-control",type:"text",value:a.url,onChange:function(e){var t;i({url:(t=e).target.value,isValid:t.target.value.length>1})}}),Object(h.jsx)("div",{className:"invalid-feedback",style:N===d&&!1===a.isValid?{display:"block"}:{display:"none"},children:"For link note: you must have URL"})]})]})]}),Object(h.jsx)("div",{className:"row my-2",children:Object(h.jsx)("div",{className:"col text-end",children:Object(h.jsx)("button",{className:"btn btn-primary",type:"submit",disabled:!y(),color:y?"primary":"secondary",children:"Submit"})})})]})},f=function(e){var t=Object(s.useState)(!1),c=Object(l.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)({type:"",text:"",title:"",url:""}),o=Object(l.a)(r,2),j=o[0],d=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object.entries(e.subject).map((function(e,t){var c=Object(l.a)(e,2),s=(c[0],c[1]);return Object(h.jsx)(v,{notes:s})}))}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(v,{notes:j})})}),Object(h.jsx)("div",{className:"row newNoteButton",children:Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)("input",{className:"btn-check",type:"checkbox",id:"addNotes"+e.projectName,checked:a,onChange:function(){return i(!a)}}),Object(h.jsxs)("label",{className:"btn btn-primary buttonCustom",htmlFor:"addNotes"+e.projectName,children:[" ",Object(h.jsx)(b.a,{icon:u.b})," add notes"]})]})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:a?Object(h.jsx)(N,{submit:function(e,t){d(Object(n.a)(Object(n.a)({},e),{},{noteName:t}))}}):""})})]})},y=function(e){var t=Object(s.useState)(!0),c=Object(l.a)(t,2),a=c[0],i=c[1];return Object(h.jsxs)("div",{className:"projectContainer",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.projectName}),Object(h.jsxs)("div",{className:"form-check ",children:[Object(h.jsx)("input",{className:"form-check-input",type:"checkbox",id:"showFor"+e.projectName,checked:a,onChange:function(){return i(!a)}}),Object(h.jsx)("label",{className:"form-check-label",htmlFor:"showFor"+e.projectName,children:"Show related notes"})]})]}),Object(h.jsx)("div",{children:a?Object(h.jsx)(f,{subject:e.subject,projectName:e.projectName}):""})]})},g=function(e){return Object(h.jsxs)("h1",{className:"title",children:[e.text," ",Object(h.jsx)(b.a,{icon:u.c})]})},k=function(){var e=Object(s.useState)({project:""}),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(h.jsxs)("div",{className:"container my-4",children:[Object(h.jsx)(g,{text:"Zitao's Note App"}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(x,{submit:function(e,t){a(Object(n.a)(Object(n.a)({},e),{},{projectName:t}))}})})}),Object(h.jsx)("div",{id:"section",children:Object(h.jsx)("h2",{children:"Your Projects"})}),Object(h.jsxs)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3",children:[Object.entries(m).map((function(e,t){var c=Object(l.a)(e,2),s=c[0],a=c[1];return Object(h.jsx)(y,{subject:a,projectName:s})})),""!==c.project&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(y,{projectName:c.project,subject:""})})]})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),w()}},[[25,1,2]]]);
//# sourceMappingURL=main.2850590e.chunk.js.map