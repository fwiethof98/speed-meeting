(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{72:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(11),c=n.n(i),r=n(0),o=n(2);var l=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),s=0;s<n.length;s++){var a=n[s].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t};function d(e,t,n,s){var a=new XMLHttpRequest,i=JSON.stringify(n);a.responseType="json",a.open(e,window.location.protocol+"//"+window.location.hostname+"/api".concat(t));var c=l("csrftoken");"POST"!==e&&"DELETE"!==e||(a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-CSRFToken",c)),a.onload=function(){s(a.response,a.status)},a.send(i)}var m=function(e){var t=Object(s.useState)([]),n=Object(o.a)(t,2),a=n[0],i=n[1],c=Object(s.useState)([]),l=Object(o.a)(c,2),m=l[0],u=l[1];Object(s.useEffect)((function(){d("GET","/authenticated/",{},(function(e,t){200===t&&i(!0),u(e.username),400===t&&i(!1)}))}),[]);var b=function(e){console.log(e),window.location.href="/"+e+"/"};return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"col-sm-9",children:Object(r.jsx)("a",{href:"https://www.gathr.de",children:Object(r.jsxs)("div",{className:"logo-container",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("img",{src:"/static/assets/img/new_logo.png"})}),Object(r.jsx)("div",{className:"brand",children:"GATHR"})]})})}),Object(r.jsx)("div",{children:a?Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{style:{marginRight:10},children:m}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return b("logout")},children:"Logout"})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return b("login")},children:"Login"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return b("register")},children:"Register"})]})})]})};function u(e){var t=e.subtitle,n=e.content,s=e.name;return Object(r.jsx)("div",{className:"tab-pane",id:s,children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("h4",{className:"info-text",children:t}),n]})})}function b(e){var t=e.title,n=e.subtitle;return Object(r.jsxs)("div",{className:"wizard-header",children:[Object(r.jsx)("h3",{className:"wizard-title",children:t}),Object(r.jsx)("h5",{children:n})]})}function j(e){var t=e.tabNames.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#".concat(e),"data-toggle":"tab",children:e})},t+e)}));return Object(r.jsx)("div",{className:"wizard-navigation",children:Object(r.jsx)("ul",{children:t})})}function h(e){var t=e.handleFormSubmitButton;return Object(r.jsxs)("div",{className:"wizard-footer",children:[Object(r.jsxs)("div",{className:"pull-right",children:[Object(r.jsx)("input",{type:"button",className:"btn btn-next btn-fill btn-success btn-wd",name:"next",value:"Next"}),Object(r.jsx)("input",{type:"button",onClick:t,className:"btn btn-finish btn-fill btn-success btn-wd",name:"finish",value:"Finish"})]}),Object(r.jsx)("div",{className:"pull-left",children:Object(r.jsx)("input",{type:"button",className:"btn btn-previous btn-fill btn-default btn-wd",name:"previous",value:"Previous"})}),Object(r.jsx)("div",{className:"clearfix"})]})}var p=function(e){var t=e.handleFormSubmitButton,n=e.showButtons,s=e.tabData,a=s.tabs.map((function(e,t){return Object(r.jsx)(u,{subtitle:e.subtitle,content:e.component,name:e.name},e.name+t)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-sm-8 col-sm-offset-2",children:Object(r.jsx)("div",{className:"wizard-container",children:Object(r.jsx)("div",{className:"card wizard-card","data-color":"green",id:"wizardProfile",children:Object(r.jsxs)("form",{id:s.form_name+"-form",action:"",method:"",onSubmit:t,children:[Object(r.jsx)(b,{title:s.title,subtitle:s.subtitle}),s.title_component,Object(r.jsx)(j,{tabNames:s.tab_names}),Object(r.jsx)("div",{className:"tab-content",children:a}),n&&Object(r.jsx)(h,{handleFormSubmitButton:t})]})})})})})})]})};function f(e){var t=e.entries,n=e.title,s=e.img_url;return t=t.map((function(e){return Object(r.jsx)(O,{name:e.name,iconName:e.iconName,description:e.description,text_box:e.text_box})})),Object(r.jsxs)("div",{className:"row",children:[s&&Object(r.jsx)("div",{className:"flash_art",children:Object(r.jsx)("img",{src:s,alt:"GATHR"})}),Object(r.jsx)("div",{className:"unterschrift titel_trenner bold",children:Object(r.jsx)("p",{children:n})}),Object(r.jsx)("div",{className:"col-sm-10 col-sm-offset-1",children:t})]})}function x(e){var t=e.entries,n=e.img_url,s=e.title,a=e.n_columns,i=t.map((function(e,t){return Object(r.jsx)(v,{onClick:e.onClick,displayName:e.displayName,name:e.name,description:e.description,type:e.type,entries:e.entries},t+e.name)}));if(2===a){var c=[],o=[];i.map((function(e,t){t%2===0?c.push(e):o.push(e)})),i=Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"col-sm-5",children:c}),Object(r.jsx)("div",{className:"col-sm-5",children:o})]})}return Object(r.jsxs)("div",{className:"col-sm-12",children:[n&&Object(r.jsx)("div",{className:"flash_art",children:Object(r.jsx)("img",{src:n,alt:"GATHR"})}),Object(r.jsx)("div",{className:"unterschrift",children:Object(r.jsx)("p",{children:s})}),i]})}function O(e){var t=e.name,n=e.iconName,s=e.description,a=e.text_box;return Object(r.jsx)("div",{className:"col-sm-4",children:Object(r.jsxs)("div",{className:"choice","data-toggle":"wizard-radio",rel:"tooltip",title:a,children:[Object(r.jsx)("input",{type:"radio",name:"intent",value:t}),Object(r.jsx)("div",{className:"icon",children:Object(r.jsx)("i",{className:"material-icons",children:n})}),Object(r.jsx)("h6",{children:s})]})})}function v(e){var t,n=e.name,s=e.displayName,a=e.type,i=e.required,c=e.entries,o=e.iconName,l=e.onClick,d=Object(r.jsx)("label",{className:"",children:s}),m=Object(r.jsx)("input",{name:n,type:a,className:"form-control"});switch(i&&m.setAttribute("required",!0),a){case"dropdown":t=Object(r.jsxs)("div",{children:[d,Object(r.jsx)(y,{entries:c,name:n})]});break;case"radio":t=Object(r.jsxs)("div",{children:[m,d]});break;case"checkbox":m=Object(r.jsx)("input",{id:n,name:n,type:a,className:"form-control",onClick:l}),t=Object(r.jsxs)("div",{style:{textAlign:"center"},children:[m,d]});break;case"date":m=Object(r.jsx)("input",{name:n,type:a,className:"form-control",defaultValue:"2020-01-01"}),t=Object(r.jsxs)("div",{children:[d,m]});break;default:t=Object(r.jsxs)("div",{children:[d,m]})}return Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("span",{className:"input-group-addon",children:o&&Object(r.jsx)("i",{className:"material-icons",children:o})}),Object(r.jsx)("div",{className:"form-group label-floating",children:t})]})}function y(e){var t=e.entries,n=e.onChangeFun,s=e.name;return t.sort(),t=t.map((function(e,t){return Object(r.jsx)("option",{value:e,children:e},e+t)})),Object(r.jsx)("div",{children:Object(r.jsx)("select",{id:s.toLowerCase(),className:"form-control",onChange:n,children:t})})}function g(e){return Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{class:"col-sm-12",children:Object(r.jsxs)("div",{style:{textAlign:"center",marginRight:50,marginLeft:50},children:[Object(r.jsx)("h3",{children:"Event details"}),Object(r.jsxs)("u",{children:[Object(r.jsx)("li",{children:"Date: 22nd of January 2021"}),Object(r.jsx)("li",{children:"Time: 7pm German Time"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"/static/assets/calendar/GATHR_Event.ics",children:" Download .ics"}),Object(r.jsxs)("p",{class:"bold",children:[Object(r.jsx)("br",{}),"An invitation to the plattform will get to you via e-mail a few days before the event."]}),Object(r.jsx)("h3",{children:"What else can I do?"}),Object(r.jsx)("p",{class:"unterschrift",children:"Tell your friends! - The more people join the event, the more fun it will be!"}),Object(r.jsx)("a",{class:"ref_link",target:"_blank",href:"https://rebrand.ly/gathr_join_codeWU34",children:"https://rebrand.ly/gathr_join_codeWU34"}),Object(r.jsx)("p",{class:"ref_text bold",children:"Share this link, and they will receive prioritized access to make sure all of you participate in the same event."})]})})})}var N=function(e){return Object(r.jsx)(p,{tabData:z,showButtons:!1})},w=n(3),k=n.n(w);var _=function(e){var t=Object(s.useState)([]),n=Object(o.a)(t,2),a=n[0],i=n[1],c=Object(s.useState)([]),l=Object(o.a)(c,2),m=(l[0],l[1]);Object(s.useEffect)((function(){d("GET","/hobby/?action=all",{},(function(e,t){200===t&&i(e.map((function(e){return e.name})))})),d("GET","/preference/",{},(function(e,t){200===t&&m(e)}))}),[]);for(var u=[],b=0;b<J.hobbies.n_hobbies;b++)u.push({name:"hobby"+b,displayName:"Hobby "+b,type:"dropdown",entries:a});return console.log(u),Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{id:"matching-form",children:[Object(r.jsx)(x,{entries:u,title:J.hobbies.subtitle,n_columns:2}),Object(r.jsx)(x,{entries:J.language.entries,title:J.language.subtitle,n_columns:2}),Object(r.jsx)(x,{entries:J.studies.entries,title:J.studies.subtitle,n_columns:2})]}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=document.getElementById("matching-form");console.log(t);var n=new FormData(t),s={hobbies:[]};n.forEach((function(e,t){t.startsWith("language-")?s.language=t.replace("language-",""):t.startsWith("study-")&&(s.studies=t.replace("study-",""))}));for(var a=0;a<J.hobbies.n_hobbies;a++)s.hobbies.push({name:k()("#hobby"+a+" option:selected").val()});console.log(s),d("POST","/preference/assign/",s,(function(e,t){console.log(e)}))},children:"Submit"})]})};function E(e){var t=e.name,n=e.age,s=e.university,a=e.studies,i=e.status;return Object(r.jsxs)("div",{style:{borderColor:"black",borderStyle:"dashed",borderWidth:2,paddingLeft:5,textAlign:"left"},children:[Object(r.jsxs)("h5",{children:[t,", ",n]}),Object(r.jsx)("h6",{children:s}),Object(r.jsxs)("h6",{children:[a,", ",i]})]})}var S=function(e){var t=e.entries,n=e.user,s=e.setEventDisplay;console.log(n);var a=n.map((function(e){console.log(e);var t=Math.floor((new Date-new Date(e.birthday))/31536e6);return console.log(t),Object(r.jsx)(E,{name:e.first_name+" "+e.last_name,age:t,university:e.university,studies:e.studies,status:e.status})})),i=t.map((function(e,t){return Object(r.jsx)("div",{className:"col-sm-4",children:Object(r.jsx)(v,{name:e.name,displayName:e.displayName,type:e.type,onClick:function(){return function(e){for(var t=k()("input[type=checkbox]"),n=[],s=0;s<t.length;s++)t[s].getAttribute("name").startsWith("feedback")&&n.push(t[s]);console.log(n);for(var a=0;a<e;a++)n[a].checked=!0;for(var i=e+1;i<n.length;i++)n[i].checked=!1}(t)}})})}));return Object(r.jsx)("form",{method:"POST",id:"feedback-form",children:Object(r.jsxs)("div",{style:{paddingLeft:20,paddingRight:20,marginTop:10,textAlign:"center"},children:[Object(r.jsx)("h4",{children:"What do you want to do next?"}),Object(r.jsx)("div",{className:"col-sm-6",children:a}),Object(r.jsx)("div",{className:"col-sm-12",children:i}),Object(r.jsx)("div",{className:"col-sm-12",children:Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=document.getElementById("feedback-form"),n=new FormData(t),a={};n.forEach((function(e,t){a.content=t.replace("feedback-","")})),console.log(a),d("POST","/friends/",a,(function(e,t){console.log(e)})),s("current")},children:"Submit"})})]})})};function T(e){var t=e.name,n=e.title,s=e.text;return Object(r.jsxs)("div",{className:"panel panel-default",children:[Object(r.jsx)("div",{className:"panel-heading",children:Object(r.jsx)("h4",{className:"panel-title",children:Object(r.jsx)("a",{"data-toggle":"collapse","data-parent":"#accordion",href:"#"+t,children:n})})}),Object(r.jsx)("div",{id:t,className:"panel-collapse collapse",children:Object(r.jsx)("div",{className:"panel-body",children:s})})]})}var C=function(e){var t=e.entries;return t=t.map((function(e){return Object(r.jsx)(T,{name:e.name,title:e.title,text:e.text})})),Object(r.jsx)("div",{className:"panel-group",id:"accordion",children:t})};var I=function(e){return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{class:"col-sm-12",children:Object(r.jsxs)("div",{id:"content_aboutus",children:[Object(r.jsx)("p",{class:"unterschrift",children:Y.description}),Object(r.jsx)("img",{src:"/static/assets/img/explainer_low_qual_jpg_res15_qual80.jpg",alt:"Gathr pipeline",class:"explainer"})]})}),Object(r.jsx)("div",{class:"unterschrift bold",children:Object(r.jsxs)("p",{children:[Object(r.jsx)("br",{}),Y.subtitle]})}),Object(r.jsx)(C,{entries:Y.entries})]})};var D=function(e){return Object(r.jsxs)("div",{style:{marginTop:100,textAlign:"center"},children:[Object(r.jsx)("div",{className:"col-sm-5",children:Object(r.jsxs)("h4",{children:["Excited for the next event? ",Object(r.jsx)("br",{})," So are we!"]})}),Object(r.jsx)("div",{className:"col-sm-5",children:Object(r.jsx)("div",{class:"flash_art",children:Object(r.jsx)("img",{src:"/static/assets/img/flash_art.png",alt:"GATHR"})})})]})};var A=function(e){var t=e.days,n=e.hours,s=e.minutes,a=e.seconds,i=parseInt(t)>=0&&parseInt(n)>=0&&parseInt(s)>=0&&parseInt(a)>=0;return Object(r.jsx)("div",{id:"content-wrap",style:i?{display:"block"}:{display:"none"},children:Object(r.jsx)("main",{class:"row",children:Object(r.jsx)("div",{id:"main-content",class:"twelve columns",children:Object(r.jsxs)("div",{id:"counter",class:"group",children:[t&&Object(r.jsxs)("span",{children:[t," ",Object(r.jsx)("em",{children:"days"})]}),n&&Object(r.jsxs)("span",{children:[n," ",Object(r.jsx)("em",{children:"hours"})]}),s&&Object(r.jsxs)("span",{children:[s," ",Object(r.jsx)("em",{children:"minutes"})]}),a&&Object(r.jsxs)("span",{children:[a," ",Object(r.jsx)("em",{children:"seconds"})]})]})})})})};function P(e){var t=e.name,n=e.age,s=e.university,a=e.studies,i=e.status;return Object(r.jsxs)("div",{style:{borderColor:"black",borderStyle:"dashed",borderWidth:2,paddingLeft:5,textAlign:"left"},children:[Object(r.jsxs)("h5",{children:[t,", ",n]}),Object(r.jsx)("h6",{children:s}),Object(r.jsxs)("h6",{children:[a,", ",i]})]})}function q(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{style:{height:120,borderColor:"black",borderStyle:"dashed",borderWidth:2,paddingLeft:5,textAlign:"left"},children:"Chat"}),Object(r.jsxs)("div",{style:{marginTop:20,borderColor:"black",borderStyle:"dashed",borderWidth:2,paddingLeft:5,textAlign:"left"},children:[Object(r.jsx)("h5",{children:"Icebreakers"}),"This might be one"]})]})}var G=function(e){var t=e.user.map((function(e){return Object(r.jsx)(P,{name:e.name,age:e.age,university:e.university,studies:e.studies,status:e.status})}));return Object(r.jsxs)("div",{style:{marginTop:10,textAlign:"center"},children:[Object(r.jsxs)("div",{className:"col-sm-6",children:[Object(r.jsx)("h4",{children:"You are in an active video call!"}),t,Object(r.jsx)(A,{minutes:5,seconds:10})]}),Object(r.jsx)("div",{className:"col-sm-5",children:Object(r.jsx)(q,{})}),Object(r.jsxs)("div",{className:"form-inline",children:[Object(r.jsx)("button",{className:"btn btn-danger",children:"Pause"}),Object(r.jsx)("button",{className:"btn btn-warning",children:"Leave"})]})]})};function M(e,t,s){for(var a=Object.keys(t).map((function(e){return e+"="+t[e]})),i="",c=0;c<a.length;c++)i+=a[c]+"&";return(i=i.slice(0,-1))+"&checksum="+function(e,t,s){var a=n(41).create();return a.update(e+t+s),a.hex()}(e,i,s)}function B(e,t){return"http://bbb.fs.ei.tum.de/bigbluebutton/api/"+e+"?"+M(e,t,"MbSSeTTNWJb237XYFBMwOOAm3NAq03yYf0ztpv7XSI")}var H=function(e){var t=e.setParticipate,n=e.socket,s=e.nextEvent,a=function(){var e=document.getElementsByName("participating")[0].checked;d("POST","/participate/",{participate:e},(function(a,i){n.emit("UpdateMatch",{}),console.log("hallo");var c={};c.meetingID=s.meetingID,t(e),window.open(B("join",c))}))},i=[{name:"participating",displayName:"Yes, I want to join!",type:"checkbox",onClick:""}].map((function(e){return Object(r.jsx)(v,{name:e.name,displayName:e.displayName,type:e.type,onClick:a})}));return Object(r.jsxs)("div",{style:{marginTop:50,marginBottom:50,textAlign:"center"},children:[Object(r.jsxs)("div",{className:"col-sm-5",children:[Object(r.jsxs)("h4",{children:["An event is currently in process ",Object(r.jsx)("br",{})," Would you like to join?"]}),i]}),Object(r.jsx)("div",{className:"col-sm-5",children:Object(r.jsx)("div",{class:"flash_art",children:Object(r.jsx)("img",{src:"/static/assets/img/flash_art.png",alt:"GATHR"})})})]})};var R=function(e){var t=e.name,n=(e.field,Object(s.useState)([])),a=Object(o.a)(n,2),i=a[0],c=a[1],l=Object(s.useState)([]),m=Object(o.a)(l,2);m[0],m[1],Object(s.useEffect)((function(){d("GET","/"+t+"/?action=all",{},(function(e,t){200===t&&c(e)}))}),[]);var u=function(e){var t=k()("#event option:selected").val();"start"===e?d("GET","/event/?action=next",{},(function(e,n){var s={};s.meetingID=e.meetingID,s.moderatorPW=e.moderatorPW,window.open(B("create",s)),200===n&&d("GET","/event/start/",{name:t},(function(e,t){}))})):d("POST","/event/"+e+"/",{name:t},(function(e,t){}))},b=[{name:"event",displayName:"Upcoming events",type:"dropdown",entries:i.map((function(e){return e.name}))}];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{id:"event-form",children:[Object(r.jsx)(x,{entries:Z}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=document.getElementById("event-form"),n=new FormData(t),s={};n.forEach((function(e,t){s[t]=e})),""!==s.time?s.time=s.date+" "+s.time:s.time=s.date,delete s.date,d("POST","/event/create/",s,(function(e,t){}))},children:"Submit"}),Object(r.jsx)(x,{entries:b})]}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return u("delete")},children:"Delete"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return u("start")},children:"Start"})]})};var W=function(e){var t=e.name,n=(e.field,Object(s.useState)([])),a=Object(o.a)(n,2),i=a[0],c=a[1];Object(s.useEffect)((function(){d("GET","/"+t+"/?action=all",{},(function(e,t){200===t&&c(e),console.log(e)}))}),[]);var l=[{name:"hobby",displayName:"Existing hobbies",type:"dropdown",entries:i.map((function(e){return e.name}))}];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{id:"hobby-form",children:[Object(r.jsx)(x,{entries:$}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=document.getElementById("hobby-form"),n=new FormData(t),s={};n.forEach((function(e,t){s[t]=e})),""!==s.time?s.time=s.date+" "+s.time:s.time=s.date,d("POST","/hobby/create/",s,(function(e,t){console.log(e)}))},children:"Submit"}),Object(r.jsx)(x,{entries:l})]}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){d("POST","/hobby/"+"delete"+"/",{name:k()("#hobby option:selected").val()},(function(e,t){console.log(e)}))},children:"Delete"})]})};var L=function(e){var t=e.setParticipate,n=e.socket,s=function(){var e=document.getElementsByName("participating")[0].checked;d("POST","/participate/",{participate:e},(function(s,a){n.emit("UpdateMatch",{}),t(e)}))},a=[{name:"participating",displayName:"Yes, I want to join!",type:"checkbox",onClick:""}].map((function(e){return Object(r.jsx)(v,{name:e.name,displayName:e.displayName,type:e.type,onClick:s})}));return Object(r.jsxs)("div",{style:{marginTop:50,marginBottom:50,textAlign:"center"},children:[Object(r.jsxs)("div",{className:"col-sm-5",children:[Object(r.jsxs)("h4",{children:["There's no match for you this round. ",Object(r.jsx)("br",{})," Would you like to join the next?"]}),a]}),Object(r.jsx)("div",{className:"col-sm-5",children:Object(r.jsx)("div",{class:"flash_art",children:Object(r.jsx)("img",{src:"/static/assets/img/flash_art.png",alt:"GATHR"})})})]})},F=[{name:"first_name",displayName:"First Name",type:"text",required:!0},{name:"last_name",displayName:"Last Name",type:"text",required:!0},{name:"birthday",displayName:"Birthday",type:"date",required:!0},{name:"email",displayName:"E-Mail",type:"email",required:!0},{name:"password",displayName:"Password",type:"password",required:!0},{name:"phone",displayName:"Phone number (+xx xxxx xxxxxxxx)",type:"text",required:!1},{name:"university",displayName:"University",type:"dropdown",required:!0,entries:["A) TUM","B) LMU","C) Hochschule M\xfcnchen","D) Other"]},{name:"studies",displayName:"Field of Studies",type:"dropdown",required:!0,entries:["","- Electrical Engineering","- Biology","- Chemistry","- Physics","- Space Sciences","- Informatics","- Computer Engineering","- Mathematics","- Medicine & Health","- Business & Management","- Economics","- Communication & Media","- Political science","- Mechanical Engineering","- Law","- Philosophy","- Sport Sciences","Other Social Sciences","Other Humanities","Other Engineering Sciences","Other Natural Sciences","Other Arts","Other Studies"]},{name:"status",displayName:"Level",type:"dropdown",required:!0,entries:["Bachelor","Master","PhD"]},{name:"semester",displayName:"Semester (in your current studies)",type:"dropdown",required:!0,entries:[1,2,3,4,5,6,7,8,9]},{name:"data_check",displayName:"By clicking on the \u201cFinish\u201d-button, I confirm that my data can be used for purposes described in the Privacy Policy.*",type:"checkbox",required:!0},{name:"mail_check",displayName:"I agree to receive E-Mails reminding me of upcoming events and other useful information related to the services of Gathr.de*",type:"checkbox",required:!0}],U={title:"GATHR Meet&Mingle Roulette",subtitle:"Next online event: 22nd of January, 7pm",tab_names:["HOME","SIGN-UP"],title_component:"",form_name:"register",tabs:[{name:"HOME",subtitle:"GET TO KNOW OTHER STUDENTS",component:Object(r.jsx)(I,{})},{name:"SIGN-UP",subtitle:"Tell us about yourself!",component:Object(r.jsxs)("div",{children:[Object(r.jsx)(x,{entries:F,n_columns:2}),Object(r.jsx)(f,{entries:[{name:"students",description:"No, Simply Connect Me With Other Students",iconName:"groups",text_box:"Choose to get to know a variety of students from Munich!"},{name:"tandem",description:"Yes, Find Tandem Learning Partners",iconName:"menu_book",text_box:"Choose to find new study pals for university, languages, and skill exchanges!"},{name:"sports",description:"Yes, Find Sport Partners",iconName:"sports_handball",text_box:"Choose to get connected with athletes and sport friends around you!"},{name:"founder",description:"Yes, Find Start-Up Co-Founders",iconName:"emoji_objects",text_box:"Choose to connect with start-up enthusiasts!"}]})]})}]},Y={description:"Munich Universities - Sport Partners - Learning Groups - Co-Founders - Friends",entries:[{name:"faq1",title:"What is GATHR?",text:"GATHR is an exciting new online event that will match you with like-minded people! No matter if you want to find other students from your studies for a learning group, if you search for sports partners, or if you want to find the perfect co-founder for your next start-up."},{name:"faq2",title:"How does a GATHR event work?",text:"Every GATHR event aims at getting you in contact with as many other Munich students as possible! You will meet 1-2 other participants in speed-meeting video calls for 10 minutes. After getting to know each other, you can vote whether you want to stay in contact and meet again. Then, the next video round start and you will be connected with new participants."},{name:"faq3",title:"Who will I meet?",text:"Depending on the criteria you defined in your profile, you will meet a variety of students from Munich! Some are new in the city and search for connections, some others search for sport partners or learning exchanges, and some will invite you to found the next big start-up! Which group will you belong to? :)"},{name:"faq4",title:"What are the matching criteria?",text:"The matching ensures that you meet people which have similar interests and hobbies as you. After registration, you fill out a questionnaire that is used for matching. We ask about your studies, your hobbies, and what your goal for connecting with new people is."},{name:"faq5",title:"How does the voting work?",text:"The voting helps you and your conversation partners to quickly align on a common interest and on the next activity you want to do. After each video round, everyone gets to vote on whether you want to meet again. If two people select the same option, you get informed and can start organizing your next meeting!"},{name:"faq6",title:"Do I need to prepare anything?",text:"No :) You can just join our next online event, and we will connect you with other students in Munich! In order to help kickstart your conversations, we even provide you with ice-breaking questions!"},{name:"faq7",title:"Is it free?",text:"Yes, GATHR is free! Our goal is to become a plattform available for all Munich students to connect!"},{name:"faq8",title:"Who can I contact for questions or feedback?",text:"We would love to hear from you! You can always write us via e-mail at info@gathr.de !"}],subtitle:"FAQ"},z={title:"Your registration was successful!",subtitle:"We will help you GATHR!",title_component:"",tab_names:["HOME"],tabs:[{name:"WELCOME",subtitle:"",component:Object(r.jsx)(g,{})}]},J={subtitle:"Select y",language:{subtitle:"Which language do you prefer?",entries:[{name:"language-german",displayName:"Only speaking German",type:"checkbox"},{name:"language-english",displayName:"Only speaking English",type:"checkbox"}]},studies:{subtitle:"Which studies do you prefer?",entries:[{name:"study-same",displayName:"People in my course of study",type:"checkbox"},{name:"study-any",displayName:"People in all courses of study",type:"checkbox"}]},hobbies:{subtitle:"Which activities do you like?",entries:[1,2,3,4,5],n_hobbies:5}},X=[{name:"feedback-1",displayName:"Nothing",type:"checkbox"},{name:"feedback-2",displayName:"More",type:"checkbox"},{name:"feedback-3",displayName:"Even more!",type:"checkbox"}],V={title:"Welcome to Gathr",subtitle:"",title_component:"",tab_names:["Matching","Event"],tabs:[{name:"Matching",subtitle:"Select your five favourite hobbies",component:Object(r.jsx)(_,{})},{name:"Event",subtitle:"PLACEHOLDER",component:"PLACEHOLDER"}],event_tab_options:{waiting:{name:"Event",subtitle:"",component:Object(r.jsx)(D,{})},match:{name:"Event",subtitle:"",component:Object(r.jsx)(G,{})},feedback:{name:"Event",subtitle:"",component:Object(r.jsx)(S,{entries:X})},current:{name:"Event",subtitle:"",component:Object(r.jsx)(H,{})},nomatch:{name:"Event",subtitle:"",component:Object(r.jsx)(L,{})}}},K=[{name:"username",displayName:"Username (or mail address)",type:"text",required:!0},{name:"password",displayName:"Password",type:"password",required:!0}],Q={title:"Login to your account!",subtitle:"",title_component:"",form_name:"",tab_names:["LOGIN"],tabs:[{name:"LOGIN",subtitle:"",component:Object(r.jsx)(x,{entries:K,n_columns:2})}]},Z=[{name:"name",displayName:"Event Title",type:"text"},{name:"meetingID",displayName:"Meeting ID",type:"text"},{name:"date",displayName:"Date",type:"date"},{name:"time",displayName:"Time",type:"time"},{name:"moderatorPW",displayName:"Moderator password",type:"text"}],$=[{name:"name",displayName:"Hobby name",type:"text"}],ee={title:"Manage Gathr",subtitle:"Creation and deletion of models",title_component:"",tab_names:["EVENTS","HOBBIES"],tabs:[{name:"EVENTS",subtitle:"Create, delete or start events",component:Object(r.jsx)(R,{name:"event"})},{name:"HOBBIES",subtitle:"Create or delete hobbies",component:Object(r.jsx)(W,{name:"hobby"})}]};var te=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)(p,{tabData:ee,showButtons:!1})})};var ne=function(e){return Object(r.jsx)(p,{tabData:U,handleFormSubmitButton:function(e){e.preventDefault();var t=document.getElementById(U.form_name+"-form"),n=new FormData(t),s={};n.forEach((function(e,t){s[t]=e}));for(var a=0;a<F.length;a++)"dropdown"===F[a].type&&(s[F[a].name]=k()("#"+F[a].name+" option:selected").val());s.intent=k()("input[type=radio][checked=checked]").val(),d("POST","/register/",s,(function(e,t){console.log(e),200===t&&(window.location.href="/")}))},showButtons:!0})},se=n(35),ae=n.n(se);var ie=function(e){var t=Object(s.useState)("current"),n=Object(o.a)(t,2),a=n[0],i=n[1],c=Object(s.useState)([]),l=Object(o.a)(c,2),m=l[0],u=l[1],b=Object(s.useState)([]),j=Object(o.a)(b,2),h=j[0],f=j[1],x=Object(s.useState)([]),O=Object(o.a)(x,2),v=O[0],y=O[1],g=Object(s.useState)(!1),N=Object(o.a)(g,2),w=N[0],k=N[1],_=Object(s.useState)([]),E=Object(o.a)(_,2),T=E[0],C=E[1],I=Object(s.useState)(0),D=Object(o.a)(I,2),P=D[0],q=D[1],M=Object(s.useRef)(P),R=Object(s.useState)(!0),W=Object(o.a)(R,2),F=W[0],U=W[1];return w||k(ae()("https://localhost:4001",{transports:["websocket"]})),Object(s.useEffect)((function(){d("GET","/event/?action=next",{},(function(e,t){200===t&&u(e)})),d("GET","/room/?action=my",{},(function(e,t){200===t&&f(e)})),d("GET","/match/",{},(function(e,t){200===t&&y(e)}))}),[]),Object(s.useEffect)((function(){w.on("SetSocket",(function(e){console.log(e)})),w.on("TimerUpdate",(function(e){console.log(M.current),console.log(e.difference),e.difference<=0&&M.current>0&&i("current"),e.difference<0&&((parseInt(T.minutes)-5)%15<0&&(parseInt(e.timer.minutes)-5)%15===0?(i("match"),window.open(B("join",h))):(parseInt(T.minutes)-5)%15<10&&(parseInt(e.timer.minutes)-5)%15>10&&i("feedback")),C(e.timer),function(e){M.current=e,q(e)}(e.difference)}))}),[w]),V.title_component=Object(r.jsx)(A,{days:T.days,hours:T.hours,minutes:T.minutes,seconds:T.seconds}),V.event_tab_options.current.component=Object(r.jsx)(H,{nextEvent:m,socket:w,setParticipate:U}),V.event_tab_options.match.component=Object(r.jsx)(G,{socket:w,user:v}),V.event_tab_options.feedback.component=Object(r.jsx)(S,{setEventDisplay:i,user:v,entries:X}),V.event_tab_options.nomatch.component=Object(r.jsx)(L,{socket:w,setEventDisplay:i,user:v,entries:X}),F?"waiting"===a?V.tabs[1]=V.event_tab_options.waiting:"current"===a?V.tabs[1]=V.event_tab_options.current:a?V.tabs[1]=V.event_tab_options.match:a?V.tabs[1]=V.event_tab_options.nomatch:a&&(V.tabs[1]=V.event_tab_options.feedback):V.tabs[1]=V.event_tab_options.current,Object(r.jsx)(p,{tabData:V,showButtons:!1})};var ce=function(e){var t=e.entries,n=e.handleSubmit;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{id:"login-form",children:[Object(r.jsx)("div",{className:"col-sm-5",children:Object(r.jsx)(x,{entries:t})}),Object(r.jsx)("div",{className:"col-sm-5",style:{marginTop:50},children:Object(r.jsx)("div",{class:"flash_art",children:Object(r.jsx)("img",{src:"/static/assets/img/flash_art.png",alt:"GATHR"})})}),Object(r.jsxs)("div",{className:"col-sm-12",children:[Object(r.jsx)("button",{className:"btn btn-primary",onClick:n,children:"Login"}),Object(r.jsx)("button",{className:"btn btn-secondary",onClick:function(e){e.preventDefault(),window.location.href="/register/"},children:"Register"})]})]})})};var re=function(e){return Q.tabs[0].component=Object(r.jsx)(ce,{entries:K,handleSubmit:function(e){e.preventDefault();var t=document.getElementById("login-form");console.log(t);var n=new FormData(t),s={};n.forEach((function(e,t){s[t]=e})),console.log(s),d("POST","/login/",s,(function(e,t){console.log(e),200===t&&(window.location.href="/")}))}}),Object(r.jsx)(p,{tabData:Q,showButtons:!1})},oe=a.a.createElement,le=document.getElementById("manage-area");le&&c.a.render(oe(te,le.dataset),le);var de=document.getElementById("register-container");de&&c.a.render(oe(ne,de.dataset),de);var me=document.getElementById("success-page");me&&c.a.render(oe(N,me.dataset),me);var ue=document.getElementById("event-container");ue&&c.a.render(oe(ie,ue.dataset),ue);var be=document.getElementById("login-container");be&&c.a.render(oe(re,be.dataset),be)}},[[72,1,2]]]);
//# sourceMappingURL=main.a393212e.chunk.js.map