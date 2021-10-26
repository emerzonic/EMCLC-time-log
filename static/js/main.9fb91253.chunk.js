(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(11),s=n.n(c),l=(n(17),n(2)),r=n(7),d=n(4),o=n(3);function j(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null}function b(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function u(e){localStorage.removeItem(e)}function m(){return O({weekday:"long",year:"numeric",month:"long",day:"numeric"})}function h(){return O({timeStyle:"short"})}function O(e,t){return new Intl.DateTimeFormat("en-US",e).format(null!==t&&void 0!==t?t:new Date)}var x,f,v,N,p=function(e){return Date.parse(Intl.DateTimeFormat("en-US").format(new Date(e)))};!function(e){e.SIGN_IN="Sign In",e.SIGN_OUT="Sign Out",e.CANCEL="Cancel"}(x||(x={})),function(e){e.VIEW="view",e.EDIT="edit",e.DELETE="delete"}(f||(f={})),function(e){e.TIME_SHEET="time sheet",e.MANAGE_STUDENTS="manage students",e.REPORTS="reports"}(v||(v={})),function(e){e.ACTION_PAYLOAD="__$actionPayload",e.TIME_SHEETS="__$timelogs",e.STUDENT_LIST="__$studentList",e.DETAIL_ACTION="__$detailActionPayload",e.VIEW="__$time_sheet_view"}(N||(N={}));var S,g,T=n(0);function E(e){var t={id:null,firstName:"",lastName:"",isActive:!0,parents:{parentOne:""}},n=Object(a.useState)(t),i=Object(l.a)(n,2),c=i[0],s=i[1],h=Object(a.useState)(""),O=Object(l.a)(h,2),x=O[0],v=O[1],p=Object(a.useState)(""),S=Object(l.a)(p,2),g=S[0],E=S[1],I=Object(a.useState)(""),y=Object(l.a)(I,2),_=y[0],C=y[1],A=Object(a.useState)(1),w=Object(l.a)(A,2),L=w[0],D=w[1],k=Object(a.useState)(!1),M=Object(l.a)(k,2),R=M[0],P=M[1],H=Object(a.useState)(!1),U=Object(l.a)(H,2),G=U[0],F=U[1];Object(a.useEffect)((function(){var e=j(N.DETAIL_ACTION);if((null===e||void 0===e?void 0:e.action)===f.EDIT){var t,n=(null!==(t=j(N.STUDENT_LIST))&&void 0!==t?t:[]).find((function(t){return t.id===e.id}));n&&(s(n),v(n.parents.parentOne||""),E(n.parents.parentTwo||""),C(n.parents.parentThree||""),D(Object.values(n.parents).filter((function(e){return e})).length))}}),[e.signal]);var B=function(e){s(Object(o.a)(Object(o.a)({},c),e))},V=function(){s(t),v(""),E(""),C(""),D(1),P(!1),F(!1)},W=Object(T.jsx)("div",{className:"card w-100 text-left",children:Object(T.jsxs)("div",{className:"card-body",children:[Object(T.jsx)("h6",{className:"card-title border-bottom",children:"Student"}),Object(T.jsxs)("p",{className:"card-text",children:["First Name: ",c.firstName]}),Object(T.jsxs)("p",{className:"card-text",children:["Last Name: ",c.lastName]}),Object(T.jsxs)("p",{className:"card-text",children:["Student Status: ",c.isActive?"Active":"Not Active"]}),Object(T.jsx)("div",{className:"hr"}),Object(T.jsx)("h6",{className:"card-text border-bottom",children:"Parents/Guardians"}),Object(T.jsx)("div",{className:"hr"}),x&&Object(T.jsxs)("p",{className:"card-text",children:["1. ",x]}),g&&Object(T.jsxs)("p",{className:"card-text",children:["2. ",g]}),_&&Object(T.jsxs)("p",{className:"card-text",children:["3. ",_]})]})}),Y=Object(T.jsx)("div",{className:"text-danger fade-in",children:"Required."}),$=Object(T.jsxs)("div",{className:"modal-body text-left",children:[Object(T.jsxs)("form",{children:[Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{className:"text-font-bold",children:"First Name"}),Object(T.jsx)("input",{type:"text",onChange:function(e){return B({firstName:e.target.value})},value:c.firstName,className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter first name."}),G&&!c.firstName?Y:""]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{className:"text-font-bold",children:"Last Name"}),Object(T.jsx)("input",{type:"text",onChange:function(e){return B({lastName:e.target.value})},value:c.lastName,className:"form-control",placeholder:"Enter last name."}),G&&!c.lastName?Y:""]}),Object(T.jsx)("div",{className:"form-group",children:Object(T.jsx)("button",{onClick:function(){s(Object(o.a)(Object(o.a)({},c),{},{isActive:!c.isActive}))},type:"button",className:"btn btn-primary btn-sm",children:c.isActive?"Deactivate Student":"Activate Student"})}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)("label",{className:"text-font-bold",children:"Parent/Guardian 1"}),Object(T.jsx)("input",{type:"text",onChange:function(e){return v(e.target.value)},value:x,className:"form-control",placeholder:"Enter first parent or guadian full name."}),G&&!x?Y:""]}),Object(T.jsxs)("div",{className:L>1?"form-group":"form-group d-none",children:[Object(T.jsx)("label",{className:"text-font-bold",children:"Parent/Guardian 2"}),Object(T.jsx)("input",{type:"text",onChange:function(e){return E(e.target.value)},value:g,className:"form-control",placeholder:"Enter second parent or guadian full name."})]}),Object(T.jsxs)("div",{className:L>2?"form-group":"form-group d-none",children:[Object(T.jsx)("label",{className:"text-font-bold",children:"Parent/Guardian 3"}),Object(T.jsx)("input",{type:"text",onChange:function(e){return C(e.target.value)},value:_,className:"form-control",placeholder:"Enter third parent or guadian full name."})]})]}),Object(T.jsxs)("button",{onClick:function(){L<=2&&D(L+1)},type:"button",className:3===L?"btn btn-primary btn-sm d-none":"btn btn-primary btn-sm",children:[Object(T.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})," Add another parent or guardian"]})]});return Object(T.jsx)("div",{className:"modal fade",id:"addStudentModal",role:"dialog","aria-labelledby":"addStudentModalLabel","aria-hidden":"true",children:Object(T.jsx)("div",{className:"modal-dialog",role:"document",children:Object(T.jsxs)("div",{className:"modal-content",children:[Object(T.jsxs)("div",{className:"modal-header",children:[Object(T.jsx)("h5",{className:"modal-title",id:"addStudentModalLabel",children:R?"Review Student Detail":"Add Student Information"}),Object(T.jsx)("button",{onClick:V,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(T.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),R?W:$,Object(T.jsxs)("div",{className:"modal-footer",children:[R&&Object(T.jsxs)("button",{onClick:function(){P(!1)},type:"button",className:"btn btn-warning",children:[Object(T.jsx)("i",{className:"fa fa-edit","aria-hidden":"true"})," Edit"]}),Object(T.jsxs)("button",{onClick:V,type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:[Object(T.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})," Cancel"]}),Object(T.jsxs)("button",{onClick:R?function(t){var n,a=null!==(n=j(N.STUDENT_LIST))&&void 0!==n?n:[],i={parentOne:x.trim(),parentTwo:g.trim(),parentThree:_.trim()},s=j(N.DETAIL_ACTION);(null===s||void 0===s?void 0:s.action)===f.EDIT?function(e,t){var n,a=e.map((function(e){return e.id===c.id?Object(o.a)(Object(o.a)({},c),{},{parents:t}):e}));b(N.STUDENT_LIST,a);var i,s=null!==(n=j(N.TIME_SHEETS))&&void 0!==n?n:[],l=c.id,d=c.firstName,h=c.lastName,O=c.isActive,x=Object(r.a)(s);try{for(x.s();!(i=x.n()).done;){var f=i.value,v=f.timeSheetRecords.findIndex((function(e){return e.id===l})),p=f.timeSheetRecords[v];(null===p||void 0===p?void 0:p.id)===l&&(f.timeSheetRecords[v]=Object(o.a)(Object(o.a)({},p),{},{firstName:d,lastName:h})),f.date===m()&&(!p&&O&&f.timeSheetRecords.push({id:l,firstName:d,lastName:h}),p&&!O&&(f.timeSheetRecords=f.timeSheetRecords.filter((function(e){return e.id!==l}))))}}catch(S){x.e(S)}finally{x.f()}b(N.TIME_SHEETS,s),u(N.DETAIL_ACTION)}(a,i):function(e,t){var n,a={id:Date.now(),firstName:c.firstName.trim(),lastName:c.lastName.trim(),isActive:c.isActive,parents:t},i=[].concat(Object(d.a)(e),[a]);b(N.STUDENT_LIST,i);var s=null!==(n=j(N.TIME_SHEETS))&&void 0!==n?n:[];s.length&&(s.forEach((function(e){e.date===m()&&e.timeSheetRecords.push({id:a.id,firstName:a.firstName,lastName:a.lastName})})),b(N.TIME_SHEETS,s))}(a,i),e.setSignal(t),V()}:function(){c.firstName.trim()&&c.lastName.trim()&&x.trim()?P(!0):F(!0)},"data-dismiss":R?"modal":"",type:"button",className:"btn btn-primary",children:[" ",Object(T.jsx)("i",{className:"fa fa-save","aria-hidden":"true"})," Submit"]})]})]})})})}function I(e){var t=Object(a.useState)((function(){return m()})),n=Object(l.a)(t,1)[0],i={hasWarning:!1,message:""},c=Object(a.useState)(i),s=Object(l.a)(c,2),r=s[0],o=s[1],u="Clicking Create button will create new time sheet for today",h=Object(a.useState)(u),O=Object(l.a)(h,2),x=O[0],f=O[1],p=Object(a.useState)([]),S=Object(l.a)(p,2),g=S[0],E=S[1],I=Object(a.useState)([]),y=Object(l.a)(I,2),_=y[0],C=y[1],A=function(){o(i)},w=Object(T.jsx)("div",{className:"font-weight-bold text-info modal-title fade-in",children:r.message}),L=Object(T.jsx)("div",{className:"font-weight-bold modal-title",children:x});return Object(a.useEffect)((function(){var e,t,a=null!==(e=j(N.TIME_SHEETS))&&void 0!==e?e:[];if(a.some((function(e){return e.date===n})))o({hasWarning:!0,message:"Time sheet already exist for today!"});else{var i=null!==(t=j(N.STUDENT_LIST))&&void 0!==t?t:[];i.length?(E(a),C(i)):o({hasWarning:!0,message:"At least one child is requred to create new time sheet."})}}),[e.singnal]),Object(T.jsx)("div",{className:"modal fade",id:"addNewTimeLogModal",role:"dialog","aria-labelledby":"addNewTimeLogLabel","aria-hidden":"true",children:Object(T.jsx)("div",{className:"modal-dialog",role:"document",children:Object(T.jsxs)("div",{className:"modal-content",children:[Object(T.jsx)("div",{className:"modal-header",children:Object(T.jsx)("button",{onClick:A,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(T.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})}),Object(T.jsxs)("div",{className:"modal-body text-center h6",children:[r.hasWarning?w:L,Object(T.jsx)("h3",{className:"mt-3",children:n})]}),Object(T.jsxs)("div",{className:"modal-footer",children:[Object(T.jsxs)("button",{onClick:A,type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:[Object(T.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})," ",r.hasWarning?"Close":"Cancel"]}),Object(T.jsx)("button",{onClick:function(t){var a=_.map((function(e){return{id:e.id,firstName:e.firstName,lastName:e.lastName}})),i={id:Date.now(),date:n,timeSheetRecords:a},c=[].concat(Object(d.a)(g),[i]);b(N.TIME_SHEETS,c),f("A new time sheet has been created for today."),e.setView(v.TIME_SHEET),e.setSignal(t)},type:"button","data-dismiss":"modal",className:r.hasWarning||x!==u?"btn btn-primary d-none":"btn btn-primary",children:"Create"})]})]})})})}function y(e){var t=Object(a.useState)(null),n=Object(l.a)(t,2),i=n[0],c=n[1];Object(a.useEffect)((function(){var e=j(N.ACTION_PAYLOAD);if(e){var t,n="Confirm ".concat(null===e||void 0===e?void 0:e.action),a=(null!==(t=j(N.STUDENT_LIST))&&void 0!==t?t:[]).find((function(t){return t.id===(null===e||void 0===e?void 0:e.id)})),i=Object.values((null===a||void 0===a?void 0:a.parents)||{}).filter((function(e){return e})),s=i.map((function(e,t){return 0===t}));c({payload:e,checks:s,confirmButtonText:n,parents:i,disabled:!1})}}),[e.signal]);var s=null===i||void 0===i?void 0:i.payload,r=null===i||void 0===i?void 0:i.parents,d=null===i||void 0===i?void 0:i.checks,O=null===i||void 0===i?void 0:i.disabled,f=null===i||void 0===i?void 0:i.confirmButtonText,v=function(){c(null)},p=(null===s||void 0===s?void 0:s.action)===x.CANCEL?"Please Confirm you want to cancel last action!":"Select your name from below and confirm ".concat(null===s||void 0===s?void 0:s.action,"."),S=Object(T.jsx)("div",{className:"text-success modal-title fade-in",children:"".concat(null===s||void 0===s?void 0:s.action," succcessfully completed!")}),g=Object(T.jsx)("div",{className:"modal-title",children:p});return Object(T.jsx)("div",{className:"modal fade",id:"SignInModal",role:"dialog","aria-labelledby":"SignInModalLabel","aria-hidden":"true",children:Object(T.jsx)("div",{className:"modal-dialog",role:"document",children:Object(T.jsxs)("div",{className:"modal-content",children:[Object(T.jsxs)("div",{className:"modal-header",children:[Object(T.jsx)("div",{className:"font-weight-bold modal-title",children:null===s||void 0===s?void 0:s.action}),Object(T.jsx)("button",{onClick:v,type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(T.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(T.jsxs)("div",{className:"modal-body text-left",children:[O?S:g,(null===s||void 0===s?void 0:s.action)!==x.CANCEL&&(null===r||void 0===r?void 0:r.map((function(e,t){return Object(T.jsxs)("div",{className:"form-check",children:[Object(T.jsx)("input",{onChange:function(){return function(e){var t,n=null===i||void 0===i||null===(t=i.checks)||void 0===t?void 0:t.map((function(t,n){return n===e}));c(Object(o.a)(Object(o.a)({},i),{},{checks:n}))}(t)},className:"form-check-input",type:"radio",name:"exampleRadios",id:"".concat(t),value:e,checked:null===d||void 0===d?void 0:d[t]}),Object(T.jsx)("label",{className:"form-check-label",htmlFor:"".concat(t),children:e})]},t)})))]}),Object(T.jsxs)("div",{className:"modal-footer",children:[Object(T.jsxs)("button",{onClick:v,type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:[Object(T.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})," ",O?"Close":"Cancel"]}),Object(T.jsx)("button",{onClick:function(t){var n,a=(null!==(n=j(N.TIME_SHEETS))&&void 0!==n?n:[]).map((function(e){return e.date!==m()||(e.timeSheetRecords=e.timeSheetRecords.map((function(e){return(null===s||void 0===s?void 0:s.action)===x.SIGN_IN&&e.id===(null===s||void 0===s?void 0:s.id)&&(e.signInTime=h(),e.signInHour=Date.now(),e.signInParent=null===r||void 0===r?void 0:r[null===d||void 0===d?void 0:d.indexOf(!0)]),(null===s||void 0===s?void 0:s.action)===x.SIGN_OUT&&e.id===(null===s||void 0===s?void 0:s.id)&&(e.signOutTime=h(),e.signOutHour=Date.now(),e.totalDayHours=e.signOutHour-e.signInHour,e.signOutParent=null===r||void 0===r?void 0:r[null===d||void 0===d?void 0:d.indexOf(!0)]),(null===s||void 0===s?void 0:s.action)===x.CANCEL&&e.id===(null===s||void 0===s?void 0:s.id)&&(e.signOutTime&&e.signInTime?(e.signOutTime=null,e.signOutParent=null,e.totalDayHours=0,e.signOutHour=0):e.signInTime&&!e.signOutTime&&(e.signInTime=null,e.signInParent=null,e.totalDayHours=0,e.signInHour=0)),e}))),e}));b(N.TIME_SHEETS,a),u(N.ACTION_PAYLOAD),e.setTimeSheet(a.find((function(e){return e.date===m()}))),c(Object(o.a)(Object(o.a)({},i),{},{disabled:!0}))},type:"button",className:"btn btn-primary","data-dismiss":"modal",children:f})]})]})})})}function _(e){var t=e.row,n=e.number,a=e.setPayload,i=t.signInTime?"btn btn-success btn-sm disabled":"btn btn-primary btn-sm",c=t.signInTime?"btn btn-primary btn-sm mx-2":"btn btn-primary btn-sm disabled mx-2",s=t.signInTime?"btn btn-warning btn-sm":"btn btn-warning btn-sm disabled";return Object(T.jsxs)("tr",{children:[Object(T.jsxs)("td",{children:[n,"."]}),Object(T.jsx)("td",{children:t.firstName}),Object(T.jsx)("td",{children:t.lastName}),Object(T.jsx)("td",{children:t.signInTime}),Object(T.jsx)("td",{children:t.signInParent}),Object(T.jsx)("td",{children:t.signOutTime}),Object(T.jsx)("td",{children:t.signOutParent}),Object(T.jsxs)("td",{className:"text-right",children:[Object(T.jsxs)("button",{onClick:function(e){return a(e,{id:t.id,action:x.SIGN_IN})},"data-toggle":"modal","data-target":!t.signInTime&&"#SignInModal",type:"button",className:i,children:[Object(T.jsx)("i",{className:"fa fa-sign-in"})," ",x.SIGN_IN]}),Object(T.jsxs)("button",{onClick:function(e){return a(e,{id:t.id,action:x.SIGN_OUT})},"data-toggle":"modal","data-target":t.signInTime&&"#SignInModal",type:"button",className:c,children:[Object(T.jsx)("i",{className:"fa fa-sign-out"})," ",x.SIGN_OUT]}),Object(T.jsxs)("button",{onClick:function(e){return a(e,{id:t.id,action:x.CANCEL})},"data-toggle":"modal","data-target":t.signInTime&&"#SignInModal",type:"button",className:s,children:[Object(T.jsx)("i",{className:"fa fa-repeat"})," ",x.CANCEL]})]})]})}function C(e){var t,n=Object(a.useState)([{field:S.FIRST_NAME,order:g.ASC,type:"string"},{field:S.LAST_NAME,order:g.ASC,type:"string"},{field:S.SIGN_IN,order:g.ASC,type:"number"},{field:S.SIGN_OUT,order:g.ASC,type:"number"}]),i=Object(l.a)(n,2),c=i[0],s=i[1],r=function(t,n){b(N.ACTION_PAYLOAD,n),e.setSignal(t)},d=function(t){var n=c.map((function(e){return t!==(null===e||void 0===e?void 0:e.field)?e:e.order===g.ASC?(e.order=g.DESC,e):(e.order=g.ASC,e)}));s(n);var a=c.find((function(e){return e.field===t}));e.sort(a)},o=function(e){var t=c.find((function(t){return t.field===e}));return(null===t||void 0===t?void 0:t.order)===g.ASC?Object(T.jsx)("i",{className:"fa fa-sort-amount-asc text-primary","aria-hidden":"true"}):Object(T.jsx)("i",{className:"fa fa-sort-amount-desc text-primary","aria-hidden":"true"})};return Object(T.jsxs)("table",{className:"table table-hover table-sm table-light text-left d-print-none",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{className:"bg-dark text-light",children:[Object(T.jsx)("th",{scope:"col",children:"#"}),Object(T.jsxs)("th",{className:"table_sort",onClick:function(){return d(S.FIRST_NAME)},scope:"col",children:["First Name ",o(S.FIRST_NAME)]}),Object(T.jsxs)("th",{className:"table_sort",onClick:function(){return d(S.LAST_NAME)},scope:"col",children:["Last Name ",o(S.LAST_NAME)]}),Object(T.jsxs)("th",{className:"table_sort",onClick:function(){return d(S.SIGN_IN)},scope:"col",children:["Time In ",o(S.SIGN_IN)]}),Object(T.jsx)("th",{scope:"col",children:"Sign In By"}),Object(T.jsxs)("th",{className:"table_sort",onClick:function(){return d(S.SIGN_OUT)},scope:"col",children:["Time Out ",o(S.SIGN_OUT)]}),Object(T.jsx)("th",{scope:"col",children:"Sign Out By"}),Object(T.jsx)("th",{scope:"col"})]})}),Object(T.jsx)("tbody",{children:e.timeSheet?null===(t=e.timeSheet.timeSheetRecords)||void 0===t?void 0:t.map((function(e,t){return Object(T.jsx)(_,{number:t+1,setPayload:r,row:e},t)})):Object(T.jsx)("tr",{className:"text-left",children:Object(T.jsx)("td",{colSpan:7,children:"No time sheet has been created for today. Check that you have at least on active student."})})})]})}function A(e,t){return"number"===t.type?e.sort(function(e){return function(t,n){var a,i,c=null!==(a=t[e.field])&&void 0!==a?a:0,s=null!==(i=n[e.field])&&void 0!==i?i:0;return e.order===g.ASC?c-s:s-c}}(t)):e.sort(function(e){return function(t,n){var a,i,c=null===(a=t[e.field])||void 0===a?void 0:a.toLowerCase(),s=null===(i=n[e.field])||void 0===i?void 0:i.toLowerCase();return e.order===g.ASC?function(e,t){if(e>t)return-1;if(e<t)return 1;return 0}(c,s):w(c,s)}}(t))}function w(e,t){return e<t?-1:e>t?1:0}function L(e){var t=Object(a.useState)(m()),n=Object(l.a)(t,1)[0],i=Object(a.useState)(x()),c=Object(l.a)(i,2),s=c[0],r=c[1],o=Object(a.useState)(null),u=Object(l.a)(o,2),h=u[0],O=u[1];function x(){var e,t,a=null!==(e=j(N.TIME_SHEETS))&&void 0!==e?e:[],i=a.find((function(e){return e.date===m()}));if(i)return i;var c=null!==(t=j(N.STUDENT_LIST))&&void 0!==t?t:[];if(c.length){var s=c.filter((function(e){return e.isActive})).map((function(e){return{id:e.id,firstName:e.firstName,lastName:e.lastName}}));if(s.length){var l={id:Date.now(),date:n,timeSheetRecords:s},r=a.filter((function(e){var t=p(e.date);return Math.round((t-p(n))/864e5)<99})),o=[].concat(Object(d.a)(r),[l]);return b(N.TIME_SHEETS,o),l}}}return Object(a.useEffect)((function(){var e=x();r(e)}),[e.signal]),Object(T.jsxs)("div",{className:"fade-in",children:[Object(T.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(T.jsx)("h2",{className:"text-left d-print-none",children:"Time Sheet"}),Object(T.jsxs)("button",{onClick:e.setSignal,type:"button",className:"btn btn-primary btn-md mb-2","data-toggle":"modal","data-target":"#addNewTimeLogModal",children:[Object(T.jsx)("i",{className:"fa fa-plus-circle","aria-hidden":"true"})," Create New Time Sheet"]})]}),Object(T.jsx)(C,{timeSheet:s,setSignal:O,sort:function(e){var t=x();t&&(t.timeSheetRecords=A(null===t||void 0===t?void 0:t.timeSheetRecords,e)),r(t)}}),Object(T.jsx)(y,{setTimeSheet:r,signal:h})]})}function D(e){var t,n=Object(a.useState)(),i=Object(l.a)(n,2),c=i[0],s=i[1];Object(a.useEffect)((function(){var e,t,n=null!==(e=j(N.STUDENT_LIST))&&void 0!==e?e:[],a=j(N.DETAIL_ACTION),i=(null!==(t=j(N.TIME_SHEETS))&&void 0!==t?t:[]).reduce((function(e,t){var n=t.timeSheetRecords.find((function(e){return e.id===(null===a||void 0===a?void 0:a.id)}));return n?[].concat(Object(d.a)(e),[Object(o.a)(Object(o.a)({},n),{},{date:t.date})]):e}),[]),c=n.find((function(e){return e.id===(null===a||void 0===a?void 0:a.id)}));s({student:c,timeSheets:i})}),[e.signal]);var r=null===c||void 0===c?void 0:c.student,b=null===r||void 0===r?void 0:r.parents;return Object(T.jsx)("div",{className:"modal fade detail-modal text-left",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true",children:Object(T.jsx)("div",{className:"modal-dialog modal-lg",children:Object(T.jsx)("div",{className:"modal-content",children:Object(T.jsxs)("div",{className:"card w-100",children:[Object(T.jsxs)("div",{className:"card-body",children:[Object(T.jsx)("h5",{className:"card-title border-bottom",children:"Student Information"}),Object(T.jsxs)("p",{children:[null===r||void 0===r?void 0:r.firstName," ",null===r||void 0===r?void 0:r.lastName]}),Object(T.jsxs)("p",{children:["Student Status: ",(null===r||void 0===r?void 0:r.isActive)?"Active":"Not Active"]}),Object(T.jsx)("h5",{className:"card-title border-bottom",children:"Parents/Guardians"}),(null===b||void 0===b?void 0:b.parentOne)&&Object(T.jsx)("p",{children:null===b||void 0===b?void 0:b.parentOne}),(null===b||void 0===b?void 0:b.parentOne)&&Object(T.jsx)("p",{children:null===b||void 0===b?void 0:b.parentTwo}),(null===b||void 0===b?void 0:b.parentOne)&&Object(T.jsx)("p",{children:null===b||void 0===b?void 0:b.parentThree}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h5",{className:"card-title border-bottom",children:"Student Time Sheets"}),Object(T.jsxs)("table",{className:"table table-hover table-sm table-light text-left",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{className:"bg-dark text-light",children:[Object(T.jsx)("th",{scope:"col",children:"#"}),Object(T.jsx)("th",{scope:"col",children:"Date"}),Object(T.jsx)("th",{scope:"col",children:"Time In"}),Object(T.jsx)("th",{scope:"col",children:"Sign In By"}),Object(T.jsx)("th",{scope:"col",children:"Time Out"}),Object(T.jsx)("th",{scope:"col",children:"Sign Out By"})]})}),Object(T.jsx)("tbody",{children:(null===c||void 0===c||null===(t=c.timeSheets)||void 0===t?void 0:t.length)?c.timeSheets.map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsxs)("td",{children:[t+1,"."]}),Object(T.jsx)("td",{children:e.date||"-"}),Object(T.jsx)("td",{children:e.signInTime||"-"}),Object(T.jsx)("td",{children:e.signInParent||"-"}),Object(T.jsx)("td",{children:e.signOutTime||"-"}),Object(T.jsx)("td",{children:e.signOutParent||"-"})]},t)})):null})]})]})]}),Object(T.jsx)("div",{className:"modal-footer",children:Object(T.jsxs)("button",{type:"button",className:"btn btn-secondary d-print-none","data-dismiss":"modal",children:[Object(T.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})," Close"]})})]})})})})}function k(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),i=n[0],c=n[1];Object(a.useEffect)((function(){var e,t=null!==(e=j(N.STUDENT_LIST))&&void 0!==e?e:[];c(t)}),[e.signal]);var s=function(t,n){b(N.DETAIL_ACTION,n),e.setSignal(t)};return Object(T.jsxs)("div",{className:"fade-in",children:[Object(T.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(T.jsx)("h2",{className:"text-left d-print-none",children:"Manage Students"}),Object(T.jsxs)("button",{type:"button",className:"btn btn-primary mb-2","data-toggle":"modal","data-target":"#addStudentModal",children:[Object(T.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})," Add New Student"]})]}),Object(T.jsxs)("table",{className:"table table-hover table-sm table-light text-left fade-in d-print-none",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{className:"bg-dark text-light",children:[Object(T.jsx)("th",{scope:"col",children:"#"}),Object(T.jsx)("th",{scope:"col",children:"First Name"}),Object(T.jsx)("th",{scope:"col",children:"Last Name"}),Object(T.jsx)("th",{scope:"col",children:"Parent 1"}),Object(T.jsx)("th",{scope:"col",children:"Parent 2"}),Object(T.jsx)("th",{scope:"col",children:"Parent 3"}),Object(T.jsx)("th",{scope:"col",children:"Student Status"}),Object(T.jsx)("th",{scope:"col"})]})}),Object(T.jsx)("tbody",{children:i.length?i.map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:t+1}),Object(T.jsx)("td",{children:e.firstName}),Object(T.jsx)("td",{children:e.lastName}),Object(T.jsx)("td",{children:e.parents.parentOne}),Object(T.jsx)("td",{children:e.parents.parentTwo}),Object(T.jsx)("td",{children:e.parents.parentThree}),Object(T.jsx)("td",{children:e.isActive?"Active":"Not Active"}),Object(T.jsxs)("td",{className:"text-right",children:[Object(T.jsxs)("button",{onClick:function(t){return s(t,{id:e.id,action:f.EDIT})},"data-toggle":"modal","data-target":"#addStudentModal",type:"button",className:"btn btn-warning btn-sm mr-2 font-weight-bold",children:[Object(T.jsx)("i",{className:"fa fa-edit","aria-hidden":"true"})," Edit"]}),Object(T.jsxs)("button",{onClick:function(t){return s(t,{id:e.id,action:f.VIEW})},"data-toggle":"modal","data-target":".detail-modal",type:"button",className:"btn btn-secondary btn-sm mr-2 font-weight-bold",children:[Object(T.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})," Details"]})]})]},e.id)})):Object(T.jsx)("tr",{children:Object(T.jsx)("td",{className:"py-2",colSpan:7,children:"No student exist. Student information will displace here when added."})})})]}),Object(T.jsx)(D,{signal:e.signal,setSignal:e.setSignal})]})}function M(e){return Object(T.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark justify-content-between border-bottom",children:[Object(T.jsx)("div",{className:"ml-5 navbar-brand h1",children:"EMCLC Time Tracking"}),Object(T.jsx)("div",{className:"nav text-light mr-5 border-bottom",children:"Powered By D3E Apps"})]})}!function(e){e.FIRST_NAME="firstName",e.LAST_NAME="lastName",e.SIGN_IN="signInHour",e.SIGN_OUT="signOutHour"}(S||(S={})),function(e){e.ASC="asc",e.DESC="desc"}(g||(g={}));var R,P=n(12);function H(e){return Object(T.jsx)(P.CSVLink,{data:e.data,filename:"".concat(e.title,".csv"),children:Object(T.jsxs)("button",{className:"btn  btn-sm btn-dark",children:[Object(T.jsx)("i",{className:"fa fa-download","aria-hidden":"true"})," Download"]})})}function U(e){var t=Object(a.useState)(R.ALL_TIME_SHEETS),n=Object(l.a)(t,2),i=n[0],c=n[1],s=Object(a.useState)((function(){var e,t,n,a=null!==(e=j(N.STUDENT_LIST))&&void 0!==e?e:[],i=null!==(t=j(N.TIME_SHEETS))&&void 0!==t?t:[],c=[],s=Object(r.a)(a);try{var l=function(){var e=n.value,t=i.reduce((function(t,n){var a=n.timeSheetRecords.find((function(t){return t.id===e.id}));return[].concat(Object(d.a)(t),[Object(o.a)(Object(o.a)({},a),{},{date:n.date})])}),[]);c=[].concat(Object(d.a)(c),[{student:e,timeSheets:t}])};for(s.s();!(n=s.n()).done;)l()}catch(b){s.e(b)}finally{s.f()}return{studentReports:c,students:a,timeSheets:i}})),b=Object(l.a)(s,1)[0],u=function(){return window.print()};return Object(T.jsxs)("div",{children:[Object(T.jsx)("button",{onClick:function(){return c(i===R.ALL_TIME_SHEETS?R.STUDENT_TIME_SHEET:R.ALL_TIME_SHEETS)},className:"btn btn-md btn-secondary d-block d-print-none mb-2 fade-in",type:"button",children:i===R.ALL_TIME_SHEETS?"View Students Report":"View Time Sheets Report"}),i===R.STUDENT_TIME_SHEET?Object(T.jsx)(B,{studentReports:b.studentReports,print:u}):Object(T.jsx)(F,{timeSheets:b.timeSheets,print:u})]})}function G(e){return Object(T.jsx)("div",{className:"card card-body pt-0",children:Object(T.jsxs)("table",{className:"table table-light table-sm",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{scope:"col",children:"#"}),Object(T.jsx)("th",{scope:"col",children:"Name"}),Object(T.jsx)("th",{scope:"col",children:"Sign In"}),Object(T.jsx)("th",{scope:"col",children:"Sign In By"}),Object(T.jsx)("th",{scope:"col",children:"Sign Out"}),Object(T.jsx)("th",{scope:"col",children:"Sign Out By"})]})}),Object(T.jsx)("tbody",{children:e.records.map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsxs)("th",{scope:"row",children:[t+1,"."]}),Object(T.jsxs)("td",{children:[e.firstName," ",e.lastName]}),Object(T.jsx)("td",{children:e.signInTime}),Object(T.jsx)("td",{children:e.signInParent}),Object(T.jsx)("td",{children:e.signOutTime}),Object(T.jsx)("td",{children:e.signOutParent})]},t)}))})]})})}function F(e){var t=function(e){return e.toString().length<2?"0"+e:e},n=new Date,i="".concat(n.getFullYear(),"-").concat(t(n.getMonth()+1),"-").concat(t(n.getDate())),c=Object(a.useState)(i),s=Object(l.a)(c,2),r=s[0],d=s[1],o=Object(a.useState)(i),j=Object(l.a)(o,2),b=j[0],u=j[1],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e,t){var n,a,i,c;return{"#":t+1,Name:"".concat(e.firstName," ").concat(e.lastName),"Time In":null!==(n=e.signInTime)&&void 0!==n?n:"-","Sign In By":null!==(a=e.signInParent)&&void 0!==a?a:"-","Time Out":null!==(i=e.signOutTime)&&void 0!==i?i:"-","Sign Out By":null!==(c=e.signOutParent)&&void 0!==c?c:"-"}}))},h=function(){var t=r.replace("-","/"),n=b.replace("-","/");return e.timeSheets.filter((function(e){var a=p(e.date),i=p(t),c=p(n);return a>=i&&a<=c}))}();return Object(T.jsxs)("div",{className:"fade-in",children:[Object(T.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(T.jsx)("h3",{className:"text-left h3",children:"Time Sheet Reports"}),h.length>0&&Object(T.jsxs)("button",{onClick:e.print,className:"btn btn-sm btn-success d-block d-print-none",type:"button",children:[Object(T.jsx)("i",{className:"fa fa-print","aria-hidden":"true"})," Print All Time Sheets"]})]}),Object(T.jsxs)("div",{className:"text-left d-print-none",children:[Object(T.jsx)("label",{className:"font-weight-bold",htmlFor:"start",children:"Start Date:"}),Object(T.jsx)("input",{onChange:function(e){return d(e.target.value)},className:"mx-2",type:"date",id:"start",name:"start-date",value:r,min:"2021-01-01",max:b||"2050-01-01"}),Object(T.jsx)("label",{className:"font-weight-bold",htmlFor:"end",children:"End Date:"}),Object(T.jsx)("input",{onChange:function(e){return u(e.target.value)},className:"mx-2",type:"date",id:"end",name:"end-date",value:b,min:r||"2021-01-01",max:"2050-01-01"})]}),Object(T.jsx)("div",{className:"text-left d-print-block d-none",children:h.length>0?Object(T.jsxs)("p",{children:["Report Date Range: ",h[0].date," to ",h[h.length-1].date]}):""}),h.length?h.map((function(e,t){return Object(T.jsxs)("div",{className:"text-left d-print-none",children:[Object(T.jsxs)("p",{className:"mb-2 mt-3",children:[Object(T.jsxs)("button",{className:"btn  btn-sm btn-outline-primary text-left mr-2 width-15",type:"button","data-toggle":"collapse","data-target":"#".concat(e.id),"aria-expanded":"false","aria-controls":"#".concat(e.id),children:[e.date,"  ",Object(T.jsx)("i",{className:"fa fa-caret-down","aria-hidden":"true"})]}),Object(T.jsx)(H,{data:m(e.timeSheetRecords),title:"Time Sheet ".concat(e.date)})]}),Object(T.jsx)("div",{className:0===t?"collapse show":"collapse",id:"".concat(e.id),children:Object(T.jsx)(G,{records:e.timeSheetRecords})})]},t)})):Object(T.jsx)("p",{className:"text-left",children:"Not time sheet report is available."}),h.length>0&&h.map((function(e,t){return Object(T.jsxs)("div",{className:"text-left d-print-block d-none mt-3",children:[Object(T.jsx)("h5",{className:"d-none d-print-block",children:e.date}),Object(T.jsx)(G,{records:e.timeSheetRecords})]},t)}))]})}function B(e){var t=e.studentReports.sort((function(e,t){return w(e.student.firstName.toLowerCase(),t.student.firstName.toLowerCase())})),n=Object(a.useState)(t[0]),i=Object(l.a)(n,2),c=i[0],s=i[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"d-flex justify-content-end fade-in d-print-none",children:[Object(T.jsxs)("div",{className:"w-25",children:[Object(T.jsx)("h3",{className:"text-left h3 border-bottom",children:"Students"}),Object(T.jsx)("ul",{className:"list-group text-left scroll_content",children:t.length?t.map((function(t,n){var a=t.student;return Object(T.jsxs)("li",{onClick:function(){return function(t){var n=e.studentReports.find((function(e){return e.student.id===t}));s(n)}(a.id)},className:"".concat(a.id===(null===c||void 0===c?void 0:c.student.id)?"list-group-item pointer active":"list-group-item pointer"),children:[a.firstName," ",a.lastName]},a.id)})):"No student exist."})]}),Object(T.jsx)("div",{className:"col",children:Object(T.jsx)("div",{className:"card w-100",children:Object(T.jsxs)("div",{className:"card-body text-left",children:[Object(T.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(T.jsxs)("h5",{className:"card-title",children:[null===c||void 0===c?void 0:c.student.firstName," ",null===c||void 0===c?void 0:c.student.lastName]}),e.studentReports.length>0&&Object(T.jsxs)("button",{onClick:e.print,className:"btn btn-sm btn-success text-left d-block d-print-none mb-2",type:"button",children:[Object(T.jsx)("i",{className:"fa fa-print","aria-hidden":"true"})," Print"]})]}),Object(T.jsxs)("table",{className:"table table-hover table-sm table-light text-left",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{className:"bg-dark text-light",children:[Object(T.jsx)("th",{scope:"col",children:"#"}),Object(T.jsx)("th",{scope:"col",children:"Date"}),Object(T.jsx)("th",{scope:"col",children:"Time In"}),Object(T.jsx)("th",{scope:"col",children:"Sign In By"}),Object(T.jsx)("th",{scope:"col",children:"Time Out"}),Object(T.jsx)("th",{scope:"col",children:"Sign Out By"})]})}),Object(T.jsx)("tbody",{children:null===c||void 0===c?void 0:c.timeSheets.map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsxs)("td",{children:[t+1,"."]}),Object(T.jsx)("td",{children:e.date||"-"}),Object(T.jsx)("td",{children:e.signInTime||"-"}),Object(T.jsx)("td",{children:e.signInParent||"-"}),Object(T.jsx)("td",{children:e.signOutTime||"-"}),Object(T.jsx)("td",{children:e.signOutParent||"-"})]},t)}))})]})]})})})]}),Object(T.jsx)("div",{className:"card d-none d-print-block",children:Object(T.jsxs)("div",{className:"card-body text-left",children:[Object(T.jsxs)("h5",{className:"card-title",children:[null===c||void 0===c?void 0:c.student.firstName," ",null===c||void 0===c?void 0:c.student.lastName]}),Object(T.jsxs)("table",{className:"table table-sm text-left",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{className:"bg-dark text-light",children:[Object(T.jsx)("th",{scope:"col",children:"#"}),Object(T.jsx)("th",{scope:"col",children:"Date"}),Object(T.jsx)("th",{scope:"col",children:"Time In"}),Object(T.jsx)("th",{scope:"col",children:"Sign In By"}),Object(T.jsx)("th",{scope:"col",children:"Time Out"}),Object(T.jsx)("th",{scope:"col",children:"Sign Out By"})]})}),Object(T.jsx)("tbody",{children:null===c||void 0===c?void 0:c.timeSheets.map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsxs)("td",{children:[t+1,"."]}),Object(T.jsx)("td",{children:e.date||"-"}),Object(T.jsx)("td",{children:e.signInTime||"-"}),Object(T.jsx)("td",{children:e.signInParent||"-"}),Object(T.jsx)("td",{children:e.signOutTime||"-"}),Object(T.jsx)("td",{children:e.signOutParent||"-"})]},t)}))})]})]})})]})}!function(e){e.ALL_TIME_SHEETS="allTimeSheets",e.STUDENT_TIME_SHEET="studentTimeSheet"}(R||(R={}));n(25);function V(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],c=function e(){i(h()),setTimeout(e,15e3)};return Object(a.useEffect)((function(){return c(),function(){return c()}}),[]),Object(T.jsx)("div",{className:"display-3 d-print-none",children:n})}var W=function(){var e=Object(a.useState)((function(){var e=j(N.VIEW);return e||v.TIME_SHEET})),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(),s=Object(l.a)(c,2),r=s[0],d=s[1],o=n===v.TIME_SHEET,u=n===v.MANAGE_STUDENTS,h=n===v.REPORTS,O=function(e){b(N.VIEW,e),i(e)};return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(M,{}),Object(T.jsx)("header",{className:"App-header d-print-none",children:Object(T.jsxs)("div",{className:"py-5",children:[Object(T.jsx)("h1",{className:"pt-4 d-print-none",children:m()}),Object(T.jsx)(V,{})]})}),Object(T.jsxs)("div",{className:"my-5 mx-auto col-lg-10 col-md-10",children:[o&&Object(T.jsx)(L,{signal:r,setSignal:d}),u&&Object(T.jsx)(k,{setSignal:d,signal:r}),h&&Object(T.jsx)(U,{})]}),Object(T.jsxs)("div",{className:"btn-group pb-4 d-print-none",role:"group","aria-label":"Basic example",children:[Object(T.jsxs)("button",{onClick:function(){return O(v.TIME_SHEET)},type:"button",className:"btn btn-primary btn-lg mx-2",children:[Object(T.jsx)("i",{className:"fa fa-calendar","aria-hidden":"true"})," Time Sheet"]}),Object(T.jsxs)("button",{onClick:function(){return O(v.MANAGE_STUDENTS)},type:"button",className:"btn btn-primary btn-lg mx-2",children:[Object(T.jsx)("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})," Manage Students"]}),Object(T.jsxs)("button",{onClick:function(){return O(v.REPORTS)},type:"button",className:"btn btn-primary btn-lg mx-2",children:[Object(T.jsx)("i",{className:"fa fa-calendar","aria-hidden":"true"})," Report"]})]}),Object(T.jsx)(E,{setView:O,signal:r,setSignal:d}),Object(T.jsx)(I,{setSignal:d,setView:O,singnal:r})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(W,{})}),document.getElementById("root")),Y()}},[[26,1,2]]]);
//# sourceMappingURL=main.9fb91253.chunk.js.map