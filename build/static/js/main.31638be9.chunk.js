(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),c=a.n(r),s=a(21),i=a.n(s),u=(a(12),a(5)),o=a(22),l=a.n(o).a.create({baseURL:"https://intense-reef-03949.herokuapp.com",responseType:"json"}),j=a(49),d=a(50),b=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(""),i=Object(u.a)(s,2),o=i[0],b=i[1],g=Object(r.useState)(""),f=Object(u.a)(g,2),h=f[0],m=f[1],O=Object(r.useState)(""),p=Object(u.a)(O,2),x=p[0],v=p[1],N=Object(r.useState)(""),S=Object(u.a)(N,2),w=S[0],y=S[1],C=Object(r.useState)("add"),q=Object(u.a)(C,2),k=q[0],W=q[1];return Object(n.jsxs)(j.a,{className:"pt-3",onSubmit:function(e){if(e.preventDefault(),"add"===k)l.post("/api/guitarists",{name:a,guitar:h,band:x,age:w}).then((function(e){return console.log(e)})).catch((function(e){return console.warn(e)}));else{var t=a.replace(/\W/g,"%20");l.put("/api/guitarists/".concat(t),{name:a,guitar:h,band:x,age:w}).then((function(e){return console.log(e)})).catch((function(e){return console.warn(e)}))}c(""),m(""),v(""),y("")},style:{width:"40%",margin:"auto",textAlign:"left"},children:["add"===k?Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Name of guitarist to add"}),Object(n.jsx)("input",{className:"form-control",autoFocus:!0,required:!0,value:a,onChange:function(e){return c(e.target.value)}})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Name of guitarist to edit"}),Object(n.jsx)("input",{className:"form-control",autoFocus:!0,required:!0,value:a,onChange:function(e){return c(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Name of new guitarist"}),Object(n.jsx)("input",{className:"form-control",required:!0,value:o,onChange:function(e){return b(e.target.value)}})]})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"What is his signature guitar?"}),Object(n.jsx)("input",{className:"form-control",required:!0,value:h,onChange:function(e){return m(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"What is his band?"}),Object(n.jsx)("input",{className:"form-control",required:!0,value:x,onChange:function(e){return v(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"What is his age?"}),Object(n.jsx)("input",{className:"form-control",required:!0,value:w,onChange:function(e){return y(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group d-flex justify-content-between",children:["add"===k?Object(n.jsx)(d.a,{type:"submit",children:"Add Guitarist"}):Object(n.jsx)(d.a,{type:"submit",children:"Edit Guitarist"}),Object(n.jsx)(d.a,{onClick:function(){W("add"===k?"edit":"add")},children:"Toggle between add or edit"})]})]})},g=a(51),f=function(e){var t=e.name,a=e.guitar,r=e.band,c=e.age;return Object(n.jsx)(g.a,{className:"py-3",children:Object(n.jsxs)("div",{children:["Guitarist: ",t,", Guitar: ",a,", Band: ",r,", age: ",c," \xa0",Object(n.jsx)(d.a,{className:"btn-sm",color:"danger",onClick:function(){var e=t.replace(/\W/g,"-");l.delete("/api/guitarists/".concat(e)).then((function(e){return console.log(e)}))},children:"Delete guitarist"})]})})},h=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){l.get("/api/guitarists").then((function(e){c(e.data.data)}))}),[]),Object(n.jsxs)("div",{style:{textAlign:"center"},children:[a.map((function(e){return Object(n.jsx)(f,{name:e.name,guitar:e.guitar,band:e.band,age:e.age},e._id)})),Object(n.jsx)(b,{})]})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.31638be9.chunk.js.map