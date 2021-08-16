(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a,i,c,s,l=n(1),r=n.n(l),d=n(11),o=n.n(d),j=(n(17),n(2)),b=n(7),u=n(4),m=n(3);function h(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null}function O(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function x(e){localStorage.removeItem(e)}function f(){return v({weekday:"long",year:"numeric",month:"long",day:"numeric"})}function N(){return v({timeStyle:"short"})}function v(e,t){return new Intl.DateTimeFormat("en-US",e).format(null!==t&&void 0!==t?t:new Date)}!function(e){e.SIGN_IN="Sign In",e.SIGN_OUT="Sign Out",e.CANCEL="Cancel"}(a||(a={})),function(e){e.VIEW="view",e.EDIT="edit",e.DELETE="delete"}(i||(i={})),function(e){e.TIME_SHEET="time sheet",e.MANAGE_STUDENTS="manage students",e.REPORTS="reports"}(c||(c={})),function(e){e.ACTION_PAYLOAD="__$actionPayload",e.TIME_SHEETS="__$timelogs",e.STUDENT_LIST="__$studentList",e.DETAIL_ACTION="__$detailActionPayload",e.VIEW="__$time_sheet_view"}(s||(s={}));var p,g,S=n(0);function T(e){var t={id:null,firstName:"",lastName:"",parents:{parentOne:""}},n=Object(l.useState)(t),a=Object(j.a)(n,2),c=a[0],r=a[1],d=Object(l.useState)(""),o=Object(j.a)(d,2),N=o[0],v=o[1],p=Object(l.useState)(""),g=Object(j.a)(p,2),T=g[0],E=g[1],I=Object(l.useState)(""),y=Object(j.a)(I,2),_=y[0],C=y[1],A=Object(l.useState)(1),w=Object(j.a)(A,2),L=w[0],k=w[1],M=Object(l.useState)(!1),D=Object(j.a)(M,2),P=D[0],H=D[1],R=Object(l.useState)(!1),U=Object(j.a)(R,2),G=U[0],B=U[1];Object(l.useEffect)((function(){var e=h(s.DETAIL_ACTION);if((null===e||void 0===e?void 0:e.action)===i.EDIT){var t,n=(null!==(t=h(s.STUDENT_LIST))&&void 0!==t?t:[]).find((function(t){return t.id===e.id}));n&&(r(n),v(n.parents.parentOne||""),E(n.parents.parentTwo||""),C(n.parents.parentThree||""),k(Object.values(n.parents).filter((function(e){return e})).length))}}),[e.signal]);var F=function(e){r(Object(m.a)(Object(m.a)({},c),e))},V=function(){r(t),v(""),E(""),C(""),k(1),H(!1),B(!1)},W=Object(S.jsx)("div",{className:"card w-100 text-left",children:Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("h6",{className:"card-title border-bottom",children:"Student"}),Object(S.jsxs)("p",{className:"card-text",children:["First Name: ",c.firstName]}),Object(S.jsxs)("p",{className:"card-text",children:["Last Name: ",c.lastName]}),Object(S.jsx)("div",{className:"hr"}),Object(S.jsx)("h6",{className:"card-text border-bottom",children:"Parents/Guardians"}),Object(S.jsx)("div",{className:"hr"}),N&&Object(S.jsxs)("p",{className:"card-text",children:["1. ",N]}),T&&Object(S.jsxs)("p",{className:"card-text",children:["2. ",T]}),_&&Object(S.jsxs)("p",{className:"card-text",children:["3. ",_]})]})}),$=Object(S.jsx)("div",{className:"text-danger fade-in",children:"Required."});return Object(S.jsx)("div",{className:"modal fade",id:"addStudentModal",role:"dialog","aria-labelledby":"addStudentModalLabel","aria-hidden":"true",children:Object(S.jsx)("div",{className:"modal-dialog",role:"document",children:Object(S.jsxs)("div",{className:"modal-content",children:[Object(S.jsxs)("div",{className:"modal-header",children:[Object(S.jsx)("h5",{className:"modal-title",id:"addStudentModalLabel",children:P?"Review Student Detail":"Add Student Information"}),Object(S.jsx)("button",{onClick:V,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(S.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),P?W:Object(S.jsxs)("div",{className:"modal-body text-left",children:[Object(S.jsxs)("form",{children:[Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{className:"text-font-bold",children:"First Name"}),Object(S.jsx)("input",{type:"text",onChange:function(e){return F({firstName:e.target.value})},value:c.firstName,className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter first name."}),G&&!c.firstName?$:""]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{className:"text-font-bold",children:"Last Name"}),Object(S.jsx)("input",{type:"text",onChange:function(e){return F({lastName:e.target.value})},value:c.lastName,className:"form-control",placeholder:"Enter last name."}),G&&!c.lastName?$:""]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{className:"text-font-bold",children:"Parent/Guardian 1"}),Object(S.jsx)("input",{type:"text",onChange:function(e){return v(e.target.value)},value:N,className:"form-control",placeholder:"Enter first parent or guadian full name."}),G&&!N?$:""]}),Object(S.jsxs)("div",{className:L>1?"form-group":"form-group d-none",children:[Object(S.jsx)("label",{className:"text-font-bold",children:"Parent/Guardian 2"}),Object(S.jsx)("input",{type:"text",onChange:function(e){return E(e.target.value)},value:T,className:"form-control",placeholder:"Enter second parent or guadian full name."})]}),Object(S.jsxs)("div",{className:L>2?"form-group":"form-group d-none",children:[Object(S.jsx)("label",{className:"text-font-bold",children:"Parent/Guardian 3"}),Object(S.jsx)("input",{type:"text",onChange:function(e){return C(e.target.value)},value:_,className:"form-control",placeholder:"Enter third parent or guadian full name."})]})]}),Object(S.jsxs)("button",{onClick:function(){L<=2&&k(L+1)},type:"button",className:3===L?"btn btn-primary btn-sm d-none":"btn btn-primary btn-sm",children:[Object(S.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})," Add another parent or guardian"]})]}),Object(S.jsxs)("div",{className:"modal-footer",children:[P&&Object(S.jsxs)("button",{onClick:function(){H(!1)},type:"button",className:"btn btn-warning",children:[Object(S.jsx)("i",{className:"fa fa-edit","aria-hidden":"true"})," Edit"]}),Object(S.jsxs)("button",{onClick:V,type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:[Object(S.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})," Cancel"]}),Object(S.jsxs)("button",{onClick:P?function(t){var n,a=null!==(n=h(s.STUDENT_LIST))&&void 0!==n?n:[],l={parentOne:N.trim(),parentTwo:T.trim(),parentThree:_.trim()},r=h(s.DETAIL_ACTION);(null===r||void 0===r?void 0:r.action)===i.EDIT?function(e,t){var n,a=e.map((function(e){return e.id===c.id?Object(m.a)(Object(m.a)({},c),{},{parents:t}):e}));O(s.STUDENT_LIST,a);var i,l=null!==(n=h(s.TIME_SHEETS))&&void 0!==n?n:[],r=Object(b.a)(l);try{for(r.s();!(i=r.n()).done;)i.value.timeSheetRecords.forEach((function(e){e.id===c.id&&(e.firstName=c.firstName,e.lastName=c.lastName)}))}catch(d){r.e(d)}finally{r.f()}O(s.TIME_SHEETS,l),x(s.DETAIL_ACTION)}(a,l):function(e,t){var n,a={id:Date.now(),firstName:c.firstName.trim(),lastName:c.lastName.trim(),parents:t},i=[].concat(Object(u.a)(e),[a]);O(s.STUDENT_LIST,i);var l=null!==(n=h(s.TIME_SHEETS))&&void 0!==n?n:[];l.length&&(l.forEach((function(e){e.date===f()&&e.timeSheetRecords.push({id:a.id,firstName:a.firstName,lastName:a.lastName})})),O(s.TIME_SHEETS,l))}(a,l),e.setSignal(t),V()}:function(){c.firstName.trim()&&c.lastName.trim()&&N.trim()?H(!0):B(!0)},"data-dismiss":P?"modal":"",type:"button",className:"btn btn-primary",children:[" ",Object(S.jsx)("i",{className:"fa fa-save","aria-hidden":"true"})," Submit"]})]})]})})})}function E(e){var t=Object(l.useState)((function(){return f()})),n=Object(j.a)(t,1)[0],a={hasWarning:!1,message:""},i=Object(l.useState)(a),r=Object(j.a)(i,2),d=r[0],o=r[1],b="Clicking Create button will create new time sheet for today",m=Object(l.useState)(b),x=Object(j.a)(m,2),N=x[0],v=x[1],p=Object(l.useState)([]),g=Object(j.a)(p,2),T=g[0],E=g[1],I=Object(l.useState)([]),y=Object(j.a)(I,2),_=y[0],C=y[1],A=function(){o(a)},w=Object(S.jsx)("div",{className:"font-weight-bold text-info modal-title fade-in",children:d.message}),L=Object(S.jsx)("div",{className:"font-weight-bold modal-title",children:N});return Object(l.useEffect)((function(){var e,t,a=null!==(e=h(s.TIME_SHEETS))&&void 0!==e?e:[];if(a.some((function(e){return e.date===n})))o({hasWarning:!0,message:"Time sheet already exist for today!"});else{var i=null!==(t=h(s.STUDENT_LIST))&&void 0!==t?t:[];i.length?(E(a),C(i)):o({hasWarning:!0,message:"At least one child is requred to create new time sheet."})}}),[e.singnal]),Object(S.jsx)("div",{className:"modal fade",id:"addNewTimeLogModal",role:"dialog","aria-labelledby":"addNewTimeLogLabel","aria-hidden":"true",children:Object(S.jsx)("div",{className:"modal-dialog",role:"document",children:Object(S.jsxs)("div",{className:"modal-content",children:[Object(S.jsx)("div",{className:"modal-header",children:Object(S.jsx)("button",{onClick:A,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(S.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})}),Object(S.jsxs)("div",{className:"modal-body text-center h6",children:[d.hasWarning?w:L,Object(S.jsx)("h3",{className:"mt-3",children:n})]}),Object(S.jsxs)("div",{className:"modal-footer",children:[Object(S.jsxs)("button",{onClick:A,type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:[Object(S.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})," ",d.hasWarning?"Close":"Cancel"]}),Object(S.jsx)("button",{onClick:function(t){var a=_.map((function(e){return{id:e.id,firstName:e.firstName,lastName:e.lastName}})),i={id:Date.now(),date:n,timeSheetRecords:a};10===T.length&&T.shift();var l=[].concat(Object(u.a)(T),[i]);O(s.TIME_SHEETS,l),v("A new time sheet has been created for today."),e.setView(c.TIME_SHEET),e.setSignal(t)},type:"button","data-dismiss":"modal",className:d.hasWarning||N!==b?"btn btn-primary d-none":"btn btn-primary",children:"Create"})]})]})})})}function I(e){var t=Object(l.useState)(null),n=Object(j.a)(t,2),i=n[0],c=n[1];Object(l.useEffect)((function(){var e=h(s.ACTION_PAYLOAD);if(e){var t,n="Confirm ".concat(null===e||void 0===e?void 0:e.action),a=(null!==(t=h(s.STUDENT_LIST))&&void 0!==t?t:[]).find((function(t){return t.id===(null===e||void 0===e?void 0:e.id)})),i=Object.values((null===a||void 0===a?void 0:a.parents)||{}).filter((function(e){return e})),l=i.map((function(e,t){return 0===t}));c({payload:e,checks:l,confirmButtonText:n,parents:i,disabled:!1})}}),[e.signal]);var r=null===i||void 0===i?void 0:i.payload,d=null===i||void 0===i?void 0:i.parents,o=null===i||void 0===i?void 0:i.checks,b=null===i||void 0===i?void 0:i.disabled,u=null===i||void 0===i?void 0:i.confirmButtonText,v=function(){c(null)},p=(null===r||void 0===r?void 0:r.action)===a.CANCEL?"Please Confirm you want to cancel last action!":"Select your name from below and confirm ".concat(null===r||void 0===r?void 0:r.action,"."),g=Object(S.jsx)("div",{className:"text-success modal-title fade-in",children:"".concat(null===r||void 0===r?void 0:r.action," succcessfully completed!")}),T=Object(S.jsx)("div",{className:"modal-title",children:p});return Object(S.jsx)("div",{className:"modal fade",id:"SignInModal",role:"dialog","aria-labelledby":"SignInModalLabel","aria-hidden":"true",children:Object(S.jsx)("div",{className:"modal-dialog",role:"document",children:Object(S.jsxs)("div",{className:"modal-content",children:[Object(S.jsxs)("div",{className:"modal-header",children:[Object(S.jsx)("div",{className:"font-weight-bold modal-title",children:null===r||void 0===r?void 0:r.action}),Object(S.jsx)("button",{onClick:v,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(S.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(S.jsxs)("div",{className:"modal-body text-left",children:[b?g:T,(null===r||void 0===r?void 0:r.action)!==a.CANCEL&&(null===d||void 0===d?void 0:d.map((function(e,t){return Object(S.jsxs)("div",{className:"form-check",children:[Object(S.jsx)("input",{onChange:function(){return function(e){var t,n=null===i||void 0===i||null===(t=i.checks)||void 0===t?void 0:t.map((function(t,n){return n===e}));c(Object(m.a)(Object(m.a)({},i),{},{checks:n}))}(t)},className:"form-check-input",type:"radio",name:"exampleRadios",id:"".concat(t),value:e,checked:null===o||void 0===o?void 0:o[t]}),Object(S.jsx)("label",{className:"form-check-label",htmlFor:"".concat(t),children:e})]},t)})))]}),Object(S.jsxs)("div",{className:"modal-footer",children:[Object(S.jsxs)("button",{onClick:v,type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:[Object(S.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})," ",b?"Close":"Cancel"]}),Object(S.jsx)("button",{onClick:function(t){var n,l=(null!==(n=h(s.TIME_SHEETS))&&void 0!==n?n:[]).map((function(e){return e.date!==f()||(e.timeSheetRecords=e.timeSheetRecords.map((function(e){return(null===r||void 0===r?void 0:r.action)===a.SIGN_IN&&e.id===(null===r||void 0===r?void 0:r.id)&&(e.signInTime=N(),e.signInHour=Date.now(),e.signInParent=null===d||void 0===d?void 0:d[null===o||void 0===o?void 0:o.indexOf(!0)]),(null===r||void 0===r?void 0:r.action)===a.SIGN_OUT&&e.id===(null===r||void 0===r?void 0:r.id)&&(e.signOutTime=N(),e.signOutHour=Date.now(),e.totalDayHours=e.signOutHour-e.signInHour,e.signOutParent=null===d||void 0===d?void 0:d[null===o||void 0===o?void 0:o.indexOf(!0)]),(null===r||void 0===r?void 0:r.action)===a.CANCEL&&e.id===(null===r||void 0===r?void 0:r.id)&&(e.signOutTime&&e.signInTime?(e.signOutTime=null,e.signOutParent=null,e.totalDayHours=0,e.signOutHour=0):e.signInTime&&!e.signOutTime&&(e.signInTime=null,e.signInParent=null,e.totalDayHours=0,e.signInHour=0)),e}))),e}));O(s.TIME_SHEETS,l),x(s.ACTION_PAYLOAD),e.setTimeSheet(l.find((function(e){return e.date===f()}))),c(Object(m.a)(Object(m.a)({},i),{},{disabled:!0}))},type:"button",className:"btn btn-primary",disabled:b,children:u})]})]})})})}function y(e){var t=e.row,n=e.number,i=e.setPayload,c=t.signInTime?"btn btn-success btn-sm disabled":"btn btn-primary btn-sm",s=t.signInTime?"btn btn-primary btn-sm mx-2":"btn btn-primary btn-sm disabled mx-2",l=t.signInTime?"btn btn-warning btn-sm":"btn btn-warning btn-sm disabled";return Object(S.jsxs)("tr",{children:[Object(S.jsxs)("td",{children:[n,"."]}),Object(S.jsx)("td",{children:t.firstName}),Object(S.jsx)("td",{children:t.lastName}),Object(S.jsx)("td",{children:t.signInTime}),Object(S.jsx)("td",{children:t.signInParent}),Object(S.jsx)("td",{children:t.signOutTime}),Object(S.jsx)("td",{children:t.signOutParent}),Object(S.jsxs)("td",{className:"text-right",children:[Object(S.jsxs)("button",{onClick:function(e){return i(e,{id:t.id,action:a.SIGN_IN})},"data-toggle":"modal","data-target":!t.signInTime&&"#SignInModal",type:"button",className:c,children:[Object(S.jsx)("i",{className:"fa fa-sign-in"})," ",a.SIGN_IN]}),Object(S.jsxs)("button",{onClick:function(e){return i(e,{id:t.id,action:a.SIGN_OUT})},"data-toggle":"modal","data-target":t.signInTime&&"#SignInModal",type:"button",className:s,children:[Object(S.jsx)("i",{className:"fa fa-sign-out"})," ",a.SIGN_OUT]}),Object(S.jsxs)("button",{onClick:function(e){return i(e,{id:t.id,action:a.CANCEL})},"data-toggle":"modal","data-target":t.signInTime&&"#SignInModal",type:"button",className:l,children:[Object(S.jsx)("i",{className:"fa fa-repeat"})," ",a.CANCEL]})]})]})}function _(e){var t,n=Object(l.useState)([{field:p.FIRST_NAME,order:g.ASC,type:"string"},{field:p.LAST_NAME,order:g.ASC,type:"string"},{field:p.SIGN_IN,order:g.ASC,type:"number"},{field:p.SIGN_OUT,order:g.ASC,type:"number"}]),a=Object(j.a)(n,2),i=a[0],c=a[1],r=function(t,n){O(s.ACTION_PAYLOAD,n),e.setSignal(t)},d=function(t){var n=i.map((function(e){return t!==(null===e||void 0===e?void 0:e.field)?e:e.order===g.ASC?(e.order=g.DESC,e):(e.order=g.ASC,e)}));c(n);var a=i.find((function(e){return e.field===t}));e.sort(a)},o=function(e){var t=i.find((function(t){return t.field===e}));return(null===t||void 0===t?void 0:t.order)===g.ASC?Object(S.jsx)("i",{className:"fa fa-sort-amount-asc text-primary","aria-hidden":"true"}):Object(S.jsx)("i",{className:"fa fa-sort-amount-desc text-primary","aria-hidden":"true"})};return Object(S.jsxs)("table",{className:"table table-hover table-sm table-light text-left d-print-none",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{className:"bg-dark text-light",children:[Object(S.jsx)("th",{scope:"col",children:"#"}),Object(S.jsxs)("th",{className:"table_sort",onClick:function(){return d(p.FIRST_NAME)},scope:"col",children:["First Name ",o(p.FIRST_NAME)]}),Object(S.jsxs)("th",{className:"table_sort",onClick:function(){return d(p.LAST_NAME)},scope:"col",children:["Last Name ",o(p.LAST_NAME)]}),Object(S.jsxs)("th",{className:"table_sort",onClick:function(){return d(p.SIGN_IN)},scope:"col",children:["Time In ",o(p.SIGN_IN)]}),Object(S.jsx)("th",{scope:"col",children:"Sign In By"}),Object(S.jsxs)("th",{className:"table_sort",onClick:function(){return d(p.SIGN_OUT)},scope:"col",children:["Time Out ",o(p.SIGN_OUT)]}),Object(S.jsx)("th",{scope:"col",children:"Sign Out By"}),Object(S.jsx)("th",{scope:"col"})]})}),Object(S.jsx)("tbody",{children:e.timeSheet?null===(t=e.timeSheet.timeSheetRecords)||void 0===t?void 0:t.map((function(e,t){return Object(S.jsx)(y,{number:t+1,setPayload:r,row:e},t)})):Object(S.jsx)("tr",{className:"text-left",children:Object(S.jsx)("td",{colSpan:7,children:"No time sheet has been created for today."})})})]})}function C(e,t){return"number"===t.type?e.sort(function(e){return function(t,n){var a,i,c=null!==(a=t[e.field])&&void 0!==a?a:0,s=null!==(i=n[e.field])&&void 0!==i?i:0;return e.order===g.ASC?c-s:s-c}}(t)):e.sort(function(e){return function(t,n){var a,i,c=null===(a=t[e.field])||void 0===a?void 0:a.toLowerCase(),s=null===(i=n[e.field])||void 0===i?void 0:i.toLowerCase();return e.order===g.ASC?function(e,t){if(e>t)return-1;if(e<t)return 1;return 0}(c,s):A(c,s)}}(t))}function A(e,t){return e<t?-1:e>t?1:0}function w(e){var t=Object(l.useState)(b()),n=Object(j.a)(t,2),a=n[0],i=n[1],c=Object(l.useState)(null),r=Object(j.a)(c,2),d=r[0],o=r[1];function b(){var e;return(null!==(e=h(s.TIME_SHEETS))&&void 0!==e?e:[]).find((function(e){return e.date===f()}))}return Object(l.useEffect)((function(){var e=b();i(e)}),[e.signal]),Object(S.jsxs)("div",{className:"fade-in",children:[Object(S.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(S.jsx)("h2",{className:"text-left d-print-none",children:"Time Sheet"}),Object(S.jsxs)("button",{onClick:e.setSignal,type:"button",className:"btn btn-primary btn-md mb-2","data-toggle":"modal","data-target":"#addNewTimeLogModal",children:[Object(S.jsx)("i",{className:"fa fa-plus-circle","aria-hidden":"true"})," Create New Time Sheet"]})]}),Object(S.jsx)(_,{timeSheet:a,setSignal:o,sort:function(e){var t=b();t&&(t.timeSheetRecords=C(null===t||void 0===t?void 0:t.timeSheetRecords,e)),i(t)}}),Object(S.jsx)(I,{setTimeSheet:i,signal:d})]})}function L(e){var t,n=Object(l.useState)(),a=Object(j.a)(n,2),i=a[0],c=a[1];Object(l.useEffect)((function(){var e,t,n=null!==(e=h(s.STUDENT_LIST))&&void 0!==e?e:[],a=h(s.DETAIL_ACTION),i=(null!==(t=h(s.TIME_SHEETS))&&void 0!==t?t:[]).reduce((function(e,t){var n=t.timeSheetRecords.find((function(e){return e.id===(null===a||void 0===a?void 0:a.id)}));return n?[].concat(Object(u.a)(e),[Object(m.a)(Object(m.a)({},n),{},{date:t.date})]):e}),[]),l=n.find((function(e){return e.id===(null===a||void 0===a?void 0:a.id)}));c({student:l,timeSheets:i})}),[e.signal]);var r=null===i||void 0===i?void 0:i.student,d=null===r||void 0===r?void 0:r.parents;return Object(S.jsx)("div",{className:"modal fade detail-modal text-left",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true",children:Object(S.jsx)("div",{className:"modal-dialog modal-lg",children:Object(S.jsx)("div",{className:"modal-content",children:Object(S.jsxs)("div",{className:"card w-100",children:[Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("h5",{className:"card-title border-bottom",children:"Student Information"}),Object(S.jsxs)("p",{children:[null===r||void 0===r?void 0:r.firstName," ",null===r||void 0===r?void 0:r.lastName]}),Object(S.jsx)("h5",{className:"card-title border-bottom",children:"Parents/Guardians"}),(null===d||void 0===d?void 0:d.parentOne)&&Object(S.jsx)("p",{children:null===d||void 0===d?void 0:d.parentOne}),(null===d||void 0===d?void 0:d.parentOne)&&Object(S.jsx)("p",{children:null===d||void 0===d?void 0:d.parentTwo}),(null===d||void 0===d?void 0:d.parentOne)&&Object(S.jsx)("p",{children:null===d||void 0===d?void 0:d.parentThree}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h5",{className:"card-title border-bottom",children:"Student Time Sheets"}),Object(S.jsxs)("table",{className:"table table-hover table-sm table-light text-left",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{className:"bg-dark text-light",children:[Object(S.jsx)("th",{scope:"col",children:"#"}),Object(S.jsx)("th",{scope:"col",children:"Date"}),Object(S.jsx)("th",{scope:"col",children:"Time In"}),Object(S.jsx)("th",{scope:"col",children:"Sign In By"}),Object(S.jsx)("th",{scope:"col",children:"Time Out"}),Object(S.jsx)("th",{scope:"col",children:"Sign Out By"})]})}),Object(S.jsx)("tbody",{children:(null===i||void 0===i||null===(t=i.timeSheets)||void 0===t?void 0:t.length)?i.timeSheets.map((function(e,t){return Object(S.jsxs)("tr",{children:[Object(S.jsxs)("td",{children:[t+1,"."]}),Object(S.jsx)("td",{children:e.date||"-"}),Object(S.jsx)("td",{children:e.signInTime||"-"}),Object(S.jsx)("td",{children:e.signInParent||"-"}),Object(S.jsx)("td",{children:e.signOutTime||"-"}),Object(S.jsx)("td",{children:e.signOutParent||"-"})]},t)})):null})]})]})]}),Object(S.jsx)("div",{className:"modal-footer",children:Object(S.jsxs)("button",{type:"button",className:"btn btn-secondary d-print-none","data-dismiss":"modal",children:[Object(S.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})," Close"]})})]})})})})}function k(e){var t=Object(l.useState)([]),n=Object(j.a)(t,2),a=n[0],c=n[1];Object(l.useEffect)((function(){var e,t=null!==(e=h(s.STUDENT_LIST))&&void 0!==e?e:[];c(t)}),[e.signal]);var r=function(t,n){O(s.DETAIL_ACTION,n),e.setSignal(t)};return Object(S.jsxs)("div",{className:"fade-in",children:[Object(S.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(S.jsx)("h2",{className:"text-left d-print-none",children:"Manage Students"}),Object(S.jsxs)("button",{type:"button",className:"btn btn-primary mb-2","data-toggle":"modal","data-target":"#addStudentModal",children:[Object(S.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})," Add New Student"]})]}),Object(S.jsxs)("table",{className:"table table-hover table-sm table-light text-left fade-in d-print-none",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{className:"bg-dark text-light",children:[Object(S.jsx)("th",{scope:"col",children:"#"}),Object(S.jsx)("th",{scope:"col",children:"First Name"}),Object(S.jsx)("th",{scope:"col",children:"Last Name"}),Object(S.jsx)("th",{scope:"col",children:"Parent 1"}),Object(S.jsx)("th",{scope:"col",children:"Parent 2"}),Object(S.jsx)("th",{scope:"col",children:"Parent 3"}),Object(S.jsx)("th",{scope:"col"})]})}),Object(S.jsx)("tbody",{children:a.length?a.map((function(e,t){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:t+1}),Object(S.jsx)("td",{children:e.firstName}),Object(S.jsx)("td",{children:e.lastName}),Object(S.jsx)("td",{children:e.parents.parentOne}),Object(S.jsx)("td",{children:e.parents.parentTwo}),Object(S.jsx)("td",{children:e.parents.parentThree}),Object(S.jsxs)("td",{className:"text-right",children:[Object(S.jsxs)("button",{onClick:function(t){return r(t,{id:e.id,action:i.EDIT})},"data-toggle":"modal","data-target":"#addStudentModal",type:"button",className:"btn btn-warning btn-sm mr-2 font-weight-bold",children:[Object(S.jsx)("i",{className:"fa fa-edit","aria-hidden":"true"})," Edit"]}),Object(S.jsxs)("button",{onClick:function(t){return r(t,{id:e.id,action:i.VIEW})},"data-toggle":"modal","data-target":".detail-modal",type:"button",className:"btn btn-secondary btn-sm mr-0 font-weight-bold",children:[Object(S.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})," Details"]})]})]},e.id)})):Object(S.jsx)("tr",{children:Object(S.jsx)("td",{className:"py-2",colSpan:7,children:"No student exist. Student information will displace here when added."})})})]}),Object(S.jsx)(L,{signal:e.signal,setSignal:e.setSignal})]})}function M(e){return Object(S.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark justify-content-between border-bottom",children:[Object(S.jsx)("div",{className:"ml-5 navbar-brand h1",children:"EMCLC Time Tracking"}),Object(S.jsx)("div",{className:"nav text-light mr-5 border-bottom",children:"Powered By D3E Apps"})]})}!function(e){e.FIRST_NAME="firstName",e.LAST_NAME="lastName",e.SIGN_IN="signInHour",e.SIGN_OUT="signOutHour"}(p||(p={})),function(e){e.ASC="asc",e.DESC="desc"}(g||(g={}));var D,P=n(12);function H(e){return Object(S.jsx)(P.CSVLink,{data:e.data,filename:"".concat(e.title),children:Object(S.jsxs)("button",{className:"btn  btn-sm btn-dark",children:[Object(S.jsx)("i",{className:"fa fa-download","aria-hidden":"true"})," Download"]})})}function R(e){var t=Object(l.useState)(D.ALL_TIME_SHEETS),n=Object(j.a)(t,2),a=n[0],i=n[1],c=Object(l.useState)((function(){var e,t,n,a=null!==(e=h(s.STUDENT_LIST))&&void 0!==e?e:[],i=null!==(t=h(s.TIME_SHEETS))&&void 0!==t?t:[],c=[],l=Object(b.a)(a);try{var r=function(){var e=n.value,t=i.reduce((function(t,n){var a=n.timeSheetRecords.find((function(t){return t.id===e.id}));return[].concat(Object(u.a)(t),[Object(m.a)(Object(m.a)({},a),{},{date:n.date})])}),[]);c=[].concat(Object(u.a)(c),[{student:e,timeSheets:t}])};for(l.s();!(n=l.n()).done;)r()}catch(d){l.e(d)}finally{l.f()}return{studentReports:c,students:a,timeSheets:i}})),r=Object(j.a)(c,1)[0],d=function(){return window.print()};return Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{onClick:function(){return i(a===D.ALL_TIME_SHEETS?D.STUDENT_TIME_SHEET:D.ALL_TIME_SHEETS)},className:"btn btn-md btn-secondary d-block d-print-none mb-2 fade-in",type:"button",children:a===D.ALL_TIME_SHEETS?"View Students Report":"View Time Sheets Report"}),a===D.STUDENT_TIME_SHEET?Object(S.jsx)(B,{studentReports:r.studentReports,print:d}):Object(S.jsx)(G,{timeSheets:r.timeSheets,print:d})]})}function U(e){return Object(S.jsx)("div",{className:"card card-body pt-0",children:Object(S.jsxs)("table",{className:"table table-light table-sm",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"col",children:"#"}),Object(S.jsx)("th",{scope:"col",children:"Name"}),Object(S.jsx)("th",{scope:"col",children:"Sign In"}),Object(S.jsx)("th",{scope:"col",children:"Sign In By"}),Object(S.jsx)("th",{scope:"col",children:"Sign Out"}),Object(S.jsx)("th",{scope:"col",children:"Sign Out By"})]})}),Object(S.jsx)("tbody",{children:e.records.map((function(e,t){return Object(S.jsxs)("tr",{children:[Object(S.jsxs)("th",{scope:"row",children:[t+1,"."]}),Object(S.jsxs)("td",{children:[e.firstName," ",e.lastName]}),Object(S.jsx)("td",{children:e.signInTime}),Object(S.jsx)("td",{children:e.signInParent}),Object(S.jsx)("td",{children:e.signOutTime}),Object(S.jsx)("td",{children:e.signOutParent})]},t)}))})]})})}function G(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e,t){var n,a,i,c;return{"#":t+1,Name:"".concat(e.firstName," ").concat(e.lastName),"Time In":null!==(n=e.signInTime)&&void 0!==n?n:"-","Sign In By":null!==(a=e.signInParent)&&void 0!==a?a:"-","Time Out":null!==(i=e.signOutTime)&&void 0!==i?i:"-","Sign Out By":null!==(c=e.signOutParent)&&void 0!==c?c:"-"}}))};return Object(S.jsxs)("div",{className:"fade-in",children:[Object(S.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(S.jsx)("h3",{className:"text-left h3",children:"Time Sheet Reports"}),e.timeSheets.length>0&&Object(S.jsxs)("button",{onClick:e.print,className:"btn btn-sm btn-success d-block d-print-none",type:"button",children:[Object(S.jsx)("i",{className:"fa fa-print","aria-hidden":"true"})," Print All Time Sheets"]})]}),e.timeSheets.length?e.timeSheets.map((function(e,n){return Object(S.jsxs)("div",{className:"text-left d-print-none",children:[Object(S.jsxs)("p",{className:"mb-2 mt-3",children:[Object(S.jsxs)("button",{className:"btn  btn-sm btn-outline-primary text-left mr-2 width-15",type:"button","data-toggle":"collapse","data-target":"#".concat(e.id),"aria-expanded":"false","aria-controls":"#".concat(e.id),children:[e.date,"  ",Object(S.jsx)("i",{className:"fa fa-caret-down","aria-hidden":"true"})]}),Object(S.jsx)(H,{data:t(e.timeSheetRecords),title:"Time Sheet ".concat(e.date)})]}),Object(S.jsx)("div",{className:0===n?"collapse show":"collapse",id:"".concat(e.id),children:Object(S.jsx)(U,{records:e.timeSheetRecords})})]},n)})):Object(S.jsx)("p",{className:"text-left",children:"Not time sheet report is available."}),e.timeSheets.length>0&&e.timeSheets.map((function(e,t){return Object(S.jsxs)("div",{className:"text-left d-print-block d-none mt-3",children:[Object(S.jsx)("h5",{className:"d-none d-print-block",children:e.date}),Object(S.jsx)(U,{records:e.timeSheetRecords})]},t)}))]})}function B(e){var t=e.studentReports.sort((function(e,t){return A(e.student.firstName.toLowerCase(),t.student.firstName.toLowerCase())})),n=Object(l.useState)(t[0]),a=Object(j.a)(n,2),i=a[0],c=a[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"d-flex justify-content-end fade-in d-print-none",children:[Object(S.jsxs)("div",{className:"w-25",children:[Object(S.jsx)("h3",{className:"text-left h3 border-bottom",children:"Students"}),Object(S.jsx)("ul",{className:"list-group text-left scroll_content",children:t.length?t.map((function(t,n){var a=t.student;return Object(S.jsxs)("li",{onClick:function(){return function(t){var n=e.studentReports.find((function(e){return e.student.id===t}));c(n)}(a.id)},className:"".concat(a.id===(null===i||void 0===i?void 0:i.student.id)?"list-group-item pointer active":"list-group-item pointer"),children:[a.firstName," ",a.lastName]},a.id)})):"No student exist."})]}),Object(S.jsx)("div",{className:"col",children:Object(S.jsx)("div",{className:"card w-100",children:Object(S.jsxs)("div",{className:"card-body text-left",children:[Object(S.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(S.jsxs)("h5",{className:"card-title",children:[null===i||void 0===i?void 0:i.student.firstName," ",null===i||void 0===i?void 0:i.student.lastName]}),e.studentReports.length>0&&Object(S.jsxs)("button",{onClick:e.print,className:"btn btn-sm btn-success text-left d-block d-print-none mb-2",type:"button",children:[Object(S.jsx)("i",{className:"fa fa-print","aria-hidden":"true"})," Print"]})]}),Object(S.jsxs)("table",{className:"table table-hover table-sm table-light text-left",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{className:"bg-dark text-light",children:[Object(S.jsx)("th",{scope:"col",children:"#"}),Object(S.jsx)("th",{scope:"col",children:"Date"}),Object(S.jsx)("th",{scope:"col",children:"Time In"}),Object(S.jsx)("th",{scope:"col",children:"Sign In By"}),Object(S.jsx)("th",{scope:"col",children:"Time Out"}),Object(S.jsx)("th",{scope:"col",children:"Sign Out By"})]})}),Object(S.jsx)("tbody",{children:null===i||void 0===i?void 0:i.timeSheets.map((function(e,t){return Object(S.jsxs)("tr",{children:[Object(S.jsxs)("td",{children:[t+1,"."]}),Object(S.jsx)("td",{children:e.date||"-"}),Object(S.jsx)("td",{children:e.signInTime||"-"}),Object(S.jsx)("td",{children:e.signInParent||"-"}),Object(S.jsx)("td",{children:e.signOutTime||"-"}),Object(S.jsx)("td",{children:e.signOutParent||"-"})]},t)}))})]})]})})})]}),Object(S.jsx)("div",{className:"card d-none d-print-block",children:Object(S.jsxs)("div",{className:"card-body text-left",children:[Object(S.jsxs)("h5",{className:"card-title",children:[null===i||void 0===i?void 0:i.student.firstName," ",null===i||void 0===i?void 0:i.student.lastName]}),Object(S.jsxs)("table",{className:"table table-sm text-left",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{className:"bg-dark text-light",children:[Object(S.jsx)("th",{scope:"col",children:"#"}),Object(S.jsx)("th",{scope:"col",children:"Date"}),Object(S.jsx)("th",{scope:"col",children:"Time In"}),Object(S.jsx)("th",{scope:"col",children:"Sign In By"}),Object(S.jsx)("th",{scope:"col",children:"Time Out"}),Object(S.jsx)("th",{scope:"col",children:"Sign Out By"})]})}),Object(S.jsx)("tbody",{children:null===i||void 0===i?void 0:i.timeSheets.map((function(e,t){return Object(S.jsxs)("tr",{children:[Object(S.jsxs)("td",{children:[t+1,"."]}),Object(S.jsx)("td",{children:e.date||"-"}),Object(S.jsx)("td",{children:e.signInTime||"-"}),Object(S.jsx)("td",{children:e.signInParent||"-"}),Object(S.jsx)("td",{children:e.signOutTime||"-"}),Object(S.jsx)("td",{children:e.signOutParent||"-"})]},t)}))})]})]})})]})}!function(e){e.ALL_TIME_SHEETS="allTimeSheets",e.STUDENT_TIME_SHEET="studentTimeSheet"}(D||(D={}));n(25);function F(){var e=Object(l.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],i=function e(){a(N()),setTimeout(e,15e3)};return Object(l.useEffect)((function(){return i(),function(){return i()}}),[]),Object(S.jsx)("div",{className:"display-3 d-print-none",children:n})}var V=function(){var e=Object(l.useState)((function(){var e=h(s.VIEW);return e||c.TIME_SHEET})),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(l.useState)(),r=Object(j.a)(i,2),d=r[0],o=r[1],b=n===c.TIME_SHEET,u=n===c.MANAGE_STUDENTS,m=n===c.REPORTS,x=function(e){O(s.VIEW,e),a(e)};return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(M,{}),Object(S.jsx)("header",{className:"App-header d-print-none",children:Object(S.jsxs)("div",{className:"py-5",children:[Object(S.jsx)("h1",{className:"pt-4 d-print-none",children:f()}),Object(S.jsx)(F,{})]})}),Object(S.jsxs)("div",{className:"container-fluid my-5 px-4",children:[b&&Object(S.jsx)(w,{signal:d,setSignal:o}),u&&Object(S.jsx)(k,{setSignal:o,signal:d}),m&&Object(S.jsx)(R,{})]}),Object(S.jsxs)("div",{className:"btn-group pb-4 d-print-none",role:"group","aria-label":"Basic example",children:[Object(S.jsxs)("button",{onClick:function(){return x(c.TIME_SHEET)},type:"button",className:"btn btn-primary btn-lg mx-2",children:[Object(S.jsx)("i",{className:"fa fa-calendar","aria-hidden":"true"})," Time Sheet"]}),Object(S.jsxs)("button",{onClick:function(){return x(c.MANAGE_STUDENTS)},type:"button",className:"btn btn-primary btn-lg mx-2",children:[Object(S.jsx)("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})," Manage Students"]}),Object(S.jsxs)("button",{onClick:function(){return x(c.REPORTS)},type:"button",className:"btn btn-primary btn-lg mx-2",children:[Object(S.jsx)("i",{className:"fa fa-calendar","aria-hidden":"true"})," Report"]})]}),Object(S.jsx)(T,{setView:x,signal:d,setSignal:o}),Object(S.jsx)(E,{setSignal:o,setView:x,singnal:d})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};o.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(V,{})}),document.getElementById("root")),W()}},[[26,1,2]]]);
//# sourceMappingURL=main.01be9b78.chunk.js.map