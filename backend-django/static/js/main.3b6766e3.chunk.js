(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{72:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),a=n(11),c=n.n(a),r=n(0);var o=function(e){return Object(r.jsx)("a",{href:"https://www.gathr.de",children:Object(r.jsxs)("div",{className:"logo-container",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("img",{src:"/static/assets/img/new_logo.png"})}),Object(r.jsx)("div",{className:"brand",children:"GATHR"})]})})};function l(e){var t=e.subtitle,n=e.content,s=e.name;return Object(r.jsx)("div",{className:"tab-pane",id:s,children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("h4",{className:"info-text",children:t}),n]})})}function d(e){var t=e.title,n=e.subtitle;return Object(r.jsxs)("div",{className:"wizard-header",children:[Object(r.jsx)("h3",{className:"wizard-title",children:t}),Object(r.jsx)("h5",{children:n})]})}function u(e){var t=e.tabNames.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#".concat(e),"data-toggle":"tab",children:e})},t+e)}));return Object(r.jsx)("div",{className:"wizard-navigation",children:Object(r.jsx)("ul",{children:t})})}function m(e){var t=e.handleFormSubmitButton;return Object(r.jsxs)("div",{className:"wizard-footer",children:[Object(r.jsxs)("div",{className:"pull-right",children:[Object(r.jsx)("input",{type:"button",className:"btn btn-next btn-fill btn-success btn-wd",name:"next",value:"Next"}),Object(r.jsx)("input",{type:"button",onClick:t,className:"btn btn-finish btn-fill btn-success btn-wd",name:"finish",value:"Finish"})]}),Object(r.jsx)("div",{className:"pull-left",children:Object(r.jsx)("input",{type:"button",className:"btn btn-previous btn-fill btn-default btn-wd",name:"previous",value:"Previous"})}),Object(r.jsx)("div",{className:"clearfix"})]})}var b=function(e){var t=e.handleFormSubmitButton,n=e.showButtons,s=e.tabData,i=s.tabs.map((function(e,t){return Object(r.jsx)(l,{subtitle:e.subtitle,content:e.component,name:e.name},e.name+t)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-sm-8 col-sm-offset-2",children:Object(r.jsx)("div",{className:"wizard-container",children:Object(r.jsx)("div",{className:"card wizard-card","data-color":"green",id:"wizardProfile",children:Object(r.jsxs)("form",{id:s.form_name+"-form",action:"",method:"",onSubmit:t,children:[Object(r.jsx)(d,{title:s.title,subtitle:s.subtitle}),s.title_component,Object(r.jsx)(u,{tabNames:s.tab_names}),Object(r.jsx)("div",{className:"tab-content",children:i}),n&&Object(r.jsx)(m,{handleFormSubmitButton:t})]})})})})})})]})};function j(e){var t=e.entries,n=e.title,s=e.img_url;return t=t.map((function(e){return Object(r.jsx)(p,{name:e.name,iconName:e.iconName,description:e.description,text_box:e.text_box})})),Object(r.jsxs)("div",{className:"row",children:[s&&Object(r.jsx)("div",{className:"flash_art",children:Object(r.jsx)("img",{src:s,alt:"GATHR"})}),Object(r.jsx)("div",{className:"unterschrift titel_trenner bold",children:Object(r.jsx)("p",{children:n})}),Object(r.jsx)("div",{className:"col-sm-10 col-sm-offset-1",children:t})]})}function h(e){var t=e.entries,n=e.img_url,s=e.title,i=t.map((function(e,t){return Object(r.jsx)(f,{onClick:e.onClick,displayName:e.displayName,name:e.name,description:e.description,type:e.type,entries:e.entries},t+e.name)}));return console.log(i),Object(r.jsxs)("div",{children:[n&&Object(r.jsx)("div",{className:"flash_art",children:Object(r.jsx)("img",{src:n,alt:"GATHR"})}),Object(r.jsx)("div",{className:"unterschrift",children:Object(r.jsx)("p",{children:s})}),i]})}function p(e){var t=e.name,n=e.iconName,s=e.description,i=e.text_box;return Object(r.jsx)("div",{className:"col-sm-4",children:Object(r.jsxs)("div",{className:"choice","data-toggle":"wizard-radio",rel:"tooltip",title:i,children:[Object(r.jsx)("input",{type:"radio",name:"intent",value:t}),Object(r.jsx)("div",{className:"icon",children:Object(r.jsx)("i",{className:"material-icons",children:n})}),Object(r.jsx)("h6",{children:s})]})})}function f(e){var t,n=e.name,s=e.displayName,i=e.type,a=e.required,c=e.entries,o=e.iconName,l=e.onClick,d=Object(r.jsx)("label",{className:"",children:s}),u=Object(r.jsx)("input",{name:n,type:i,className:"form-control"});switch(a&&u.setAttribute("required",!0),i){case"dropdown":t=Object(r.jsxs)("div",{children:[d,Object(r.jsx)(x,{entries:c,name:n})]});break;case"radio":t=Object(r.jsxs)("div",{children:[u,d]});break;case"checkbox":u=Object(r.jsx)("input",{id:n,name:n,type:i,className:"form-control",onClick:l}),t=Object(r.jsxs)("div",{children:[u,d]});break;case"date":u=Object(r.jsx)("input",{name:n,type:i,className:"form-control",defaultValue:"2020-01-01"}),t=Object(r.jsxs)("div",{children:[d,u]});break;default:t=Object(r.jsxs)("div",{children:[d,u]})}return Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("span",{className:"input-group-addon",children:o&&Object(r.jsx)("i",{className:"material-icons",children:o})}),Object(r.jsx)("div",{className:"form-group label-floating",children:t})]})}function x(e){var t=e.entries,n=e.onChangeFun,s=e.name;return t.sort(),t=t.map((function(e,t){return Object(r.jsx)("option",{value:e,children:e},e+t)})),Object(r.jsx)("div",{children:Object(r.jsx)("select",{id:s.toLowerCase(),className:"form-control",onChange:n,children:t})})}function O(e){return Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{class:"col-sm-12",children:Object(r.jsxs)("div",{style:{textAlign:"center",marginRight:50,marginLeft:50},children:[Object(r.jsx)("h3",{children:"Event details"}),Object(r.jsxs)("u",{children:[Object(r.jsx)("li",{children:"Date: 22nd of January 2021"}),Object(r.jsx)("li",{children:"Time: 7pm German Time"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"/static/assets/calendar/GATHR_Event.ics",children:" Download .ics"}),Object(r.jsxs)("p",{class:"bold",children:[Object(r.jsx)("br",{}),"An invitation to the plattform will get to you via e-mail a few days before the event."]}),Object(r.jsx)("h3",{children:"What else can I do?"}),Object(r.jsx)("p",{class:"unterschrift",children:"Tell your friends! - The more people join the event, the more fun it will be!"}),Object(r.jsx)("a",{class:"ref_link",target:"_blank",href:"https://rebrand.ly/gathr_join_codeWU34",children:"https://rebrand.ly/gathr_join_codeWU34"}),Object(r.jsx)("p",{class:"ref_text bold",children:"Share this link, and they will receive prioritized access to make sure all of you participate in the same event."})]})})})}var v=function(e){return Object(r.jsx)(b,{tabData:X,showButtons:!1})},y=n(2),g=n(3),w=n.n(g);var N=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),s=0;s<n.length;s++){var i=n[s].trim();if(i.substring(0,e.length+1)===e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}return t};function E(e,t,n,s){var i=new XMLHttpRequest,a=JSON.stringify(n);i.responseType="json",i.open(e,"http://"+window.location.hostname+"/api".concat(t));var c=N("csrftoken");"POST"!==e&&"DELETE"!==e||(i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("X-CSRFToken",c)),i.onload=function(){s(i.response,i.status)},i.send(a)}var k=function(e){var t=Object(s.useState)([]),n=Object(y.a)(t,2),i=n[0],a=n[1],c=Object(s.useState)([]),o=Object(y.a)(c,2),l=(o[0],o[1]);Object(s.useEffect)((function(){E("GET","/hobbies/",{},(function(e,t){200===t&&a(e.map((function(e){return e.name})))})),E("GET","/preference/",{},(function(e,t){200===t&&l(e)}))}),[]);for(var d=[],u=0;u<V.hobbies.n_hobbies;u++)d.push({name:"hobby"+u,displayName:"Hobby "+u,type:"dropdown",entries:i});return console.log(d),Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{id:"matching-form",children:[Object(r.jsx)(h,{entries:d,title:V.hobbies.subtitle}),Object(r.jsx)(h,{entries:V.language.entries,title:V.language.subtitle}),Object(r.jsx)(h,{entries:V.studies.entries,title:V.studies.subtitle})]}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=document.getElementById("matching-form");console.log(t);var n=new FormData(t),s={hobbies:[]};n.forEach((function(e,t){t.startsWith("language-")?s.language=t.replace("language-",""):t.startsWith("study-")&&(s.studies=t.replace("study-",""))}));for(var i=0;i<V.hobbies.n_hobbies;i++)s.hobbies.push({name:w()("#hobby"+i+" option:selected").val()});console.log(s),E("POST","/preference/assign/",s,(function(e,t){console.log(e)}))},children:"Submit"})]})};function S(e){var t=e.name,n=e.age,s=e.university,i=e.studies,a=e.status;return Object(r.jsxs)("div",{style:{borderColor:"black",borderStyle:"dashed",borderWidth:2,paddingLeft:5,textAlign:"left"},children:[Object(r.jsxs)("h5",{children:[t,", ",n]}),Object(r.jsx)("h6",{children:s}),Object(r.jsxs)("h6",{children:[i,", ",a]})]})}var _=function(e){e.showEventDisplay,e.showFeedbackDisplay;var t=e.entries,n=[{name:"Florian Wiethof",age:"23",university:"TUM",studies:"Informatics",status:"Bachelor"}].map((function(e){return Object(r.jsx)(S,{name:e.name,age:e.age,university:e.university,studies:e.studies,status:e.status})})),s=t.map((function(e,t){return Object(r.jsx)("div",{className:"col-sm-4",children:Object(r.jsx)(f,{name:e.name,displayName:e.displayName,type:e.type,onClick:function(){return function(e){for(var t=w()("input[type=checkbox]"),n=[],s=0;s<t.length;s++)t[s].getAttribute("name").startsWith("feedback")&&n.push(t[s]);console.log(n);for(var i=0;i<e;i++)n[i].checked=!0;for(var a=e+1;a<n.length;a++)n[a].checked=!1}(t)}})})}));return Object(r.jsx)("form",{method:"POST",id:"feedback-form",children:Object(r.jsxs)("div",{style:{paddingLeft:20,paddingRight:20,marginTop:10,textAlign:"center"},children:[Object(r.jsx)("h4",{children:"What do you want to do next?"}),Object(r.jsx)("div",{className:"col-sm-6",children:n}),Object(r.jsx)("div",{className:"col-sm-12",children:s}),Object(r.jsx)("div",{className:"col-sm-12",children:Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=document.getElementById("feedback-form"),n=new FormData(t),s={};n.forEach((function(e,t){s[t]=e})),console.log(s)},children:"Submit"})})]})})};var T=function(e){var t=e.days,n=e.hours,s=e.minutes,i=e.seconds;return Object(r.jsx)("div",{id:"content-wrap",children:Object(r.jsx)("main",{class:"row",children:Object(r.jsx)("div",{id:"main-content",class:"twelve columns",children:Object(r.jsxs)("div",{id:"counter",class:"group",children:[t&&Object(r.jsxs)("span",{children:[t," ",Object(r.jsx)("em",{children:"days"})]}),n&&Object(r.jsxs)("span",{children:[n," ",Object(r.jsx)("em",{children:"hours"})]}),s&&Object(r.jsxs)("span",{children:[s," ",Object(r.jsx)("em",{children:"minutes"})]}),i&&Object(r.jsxs)("span",{children:[i," ",Object(r.jsx)("em",{children:"seconds"})]})]})})})})},C=n(35),D=n.n(C);function I(e,t,s){for(var i=Object.keys(t).map((function(e){return e+"="+t[e]})),a="",c=0;c<i.length;c++)a+=i[c]+"&";return(a=a.slice(0,-1))+"&checksum="+function(e,t,s){var i=n(70).create();return i.update(e+t+s),i.hex()}(e,a,s)}function q(e,t){return"http://bbb.fs.ei.tum.de/bigbluebutton/api/"+e+"?"+I(e,t,"MbSSeTTNWJb237XYFBMwOOAm3NAq03yYf0ztpv7XSI")}var M="http://"+window.location.hostname+":4001";var B=function(e){var t=Object(s.useState)(!1),n=Object(y.a)(t,2),i=n[0],a=n[1],c=Object(s.useState)([]),o=Object(y.a)(c,2),l=o[0],d=o[1],u=Object(s.useState)(0),m=Object(y.a)(u,2),b=m[0],j=m[1],h=Object(s.useState)([]),p=Object(y.a)(h,2),f=p[0],x=p[1],O=Object(s.useState)([]),v=Object(y.a)(O,2),g=v[0],w=v[1],N=(new Date,e.showEventDisplay),k=e.showFeedbackDisplay;return i||a(D()(M,{transports:["websocket"]})),Object(s.useEffect)((function(){E("GET","/matching/events/?action=next",{},(function(e,t){x(e)})),E("GET","/matching/events/?action=main",{},(function(e,t){w(e)}))}),[]),Object(s.useEffect)((function(){i.on("SetSocket",(function(e){console.log(e)})),i.on("TimerUpdate",(function(e){e.difference<0&&b>0&&(N(!0),window.open(q("join",g))),e.difference<0&&((parseInt(l.minutes)-5)%15<0&&(parseInt(e.timer.minutes)-5)%15===0?(N(!0),k(!1),window.open(q("join",f))):(parseInt(l.minutes)-5)%15<10&&(parseInt(e.timer.minutes)-5)%15>10&&(N(!1),k(!1))),2===parseInt(l.hours)&&(N(!0),k(!1),i.emit("EndEvent",{})),d(e.timer),j(e.difference)}))}),[i]),Object(r.jsx)("div",{children:l&&b>=0&&Object(r.jsx)(T,{days:l.days,hours:l.hours,minutes:l.minutes,seconds:l.seconds})})};function A(e){var t=e.name,n=e.title,s=e.text;return Object(r.jsxs)("div",{className:"panel panel-default",children:[Object(r.jsx)("div",{className:"panel-heading",children:Object(r.jsx)("h4",{className:"panel-title",children:Object(r.jsx)("a",{"data-toggle":"collapse","data-parent":"#accordion",href:"#"+t,children:n})})}),Object(r.jsx)("div",{id:t,className:"panel-collapse collapse",children:Object(r.jsx)("div",{className:"panel-body",children:s})})]})}var G=function(e){var t=e.entries;return t=t.map((function(e){return Object(r.jsx)(A,{name:e.name,title:e.title,text:e.text})})),Object(r.jsx)("div",{className:"panel-group",id:"accordion",children:t})};var H=function(e){return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{class:"col-sm-12",children:Object(r.jsxs)("div",{id:"content_aboutus",children:[Object(r.jsx)("p",{class:"unterschrift",children:J.description}),Object(r.jsx)("img",{src:"/static/assets/img/explainer_low_qual_jpg_res15_qual80.jpg",alt:"Gathr pipeline",class:"explainer"})]})}),Object(r.jsx)("div",{class:"unterschrift bold",children:Object(r.jsxs)("p",{children:[Object(r.jsx)("br",{}),J.subtitle]})}),Object(r.jsx)(G,{entries:J.entries})]})};var P=function(e){return Object(r.jsxs)("div",{style:{marginTop:100,textAlign:"center"},children:[Object(r.jsx)("div",{className:"col-sm-5",children:Object(r.jsxs)("h4",{children:["Excited for the next event? ",Object(r.jsx)("br",{})," So are we!"]})}),Object(r.jsx)("div",{className:"col-sm-5",children:Object(r.jsx)("div",{class:"flash_art",children:Object(r.jsx)("img",{src:"/static/assets/img/flash_art.png",alt:"GATHR"})})})]})};function W(e){var t=e.name,n=e.age,s=e.university,i=e.studies,a=e.status;return Object(r.jsxs)("div",{style:{borderColor:"black",borderStyle:"dashed",borderWidth:2,paddingLeft:5,textAlign:"left"},children:[Object(r.jsxs)("h5",{children:[t,", ",n]}),Object(r.jsx)("h6",{children:s}),Object(r.jsxs)("h6",{children:[i,", ",a]})]})}function F(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{style:{height:120,borderColor:"black",borderStyle:"dashed",borderWidth:2,paddingLeft:5,textAlign:"left"},children:"Chat"}),Object(r.jsxs)("div",{style:{marginTop:20,borderColor:"black",borderStyle:"dashed",borderWidth:2,paddingLeft:5,textAlign:"left"},children:[Object(r.jsx)("h5",{children:"Icebreakers"}),"This might be one"]})]})}var R=function(e){var t=[{name:"Florian Wiethof",age:"23",university:"TUM",studies:"Informatics",status:"Bachelor"}].map((function(e){return Object(r.jsx)(W,{name:e.name,age:e.age,university:e.university,studies:e.studies,status:e.status})}));return Object(r.jsxs)("div",{style:{marginTop:10,textAlign:"center"},children:[Object(r.jsxs)("div",{className:"col-sm-6",children:[Object(r.jsx)("h4",{children:"You are in an active video call!"}),t,Object(r.jsx)(T,{minutes:5,seconds:10})]}),Object(r.jsx)("div",{className:"col-sm-5",children:Object(r.jsx)(F,{})}),Object(r.jsxs)("div",{className:"form-inline",children:[Object(r.jsx)("button",{className:"btn btn-danger",children:"Pause"}),Object(r.jsx)("button",{className:"btn btn-warning",children:"Leave"})]})]})};var L=function(e){var t=e.name,n=(e.field,Object(s.useState)([])),i=Object(y.a)(n,2),a=i[0],c=i[1];Object(s.useEffect)((function(){E("GET","/"+t+"/?action=all",{},(function(e,t){200===t&&c(e),console.log(e)}))}),[]);var o=function(e){E("POST","/event/"+e+"/",{name:w()("#event option:selected").val()},(function(e,t){console.log(e)}))},l=[{name:"event",displayName:"Upcoming events",type:"dropdown",entries:a.map((function(e){return e.name}))}];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{id:"event-form",children:[Object(r.jsx)(h,{entries:$}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=document.getElementById("event-form"),n=new FormData(t),s={};n.forEach((function(e,t){s[t]=e})),""!==s.time?s.time=s.date+" "+s.time:s.time=s.date,delete s.date,E("POST","/event/create/",s,(function(e,t){console.log(e)}))},children:"Submit"}),Object(r.jsx)(h,{entries:l})]}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return o("delete")},children:"Delete"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return o("start")},children:"Start"})]})};var U=function(e){var t=e.name,n=(e.field,Object(s.useState)([])),i=Object(y.a)(n,2),a=i[0],c=i[1];Object(s.useEffect)((function(){E("GET","/"+t+"/?action=all",{},(function(e,t){200===t&&c(e),console.log(e)}))}),[]);var o=[{name:"hobby",displayName:"Existing hobbies",type:"dropdown",entries:a.map((function(e){return e.name}))}];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{id:"hobby-form",children:[Object(r.jsx)(h,{entries:ee}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var t=document.getElementById("hobby-form"),n=new FormData(t),s={};n.forEach((function(e,t){s[t]=e})),""!==s.time?s.time=s.date+" "+s.time:s.time=s.date,delete s.date,E("POST","/event/create/",s,(function(e,t){console.log(e)}))},children:"Submit"}),Object(r.jsx)(h,{entries:o})]}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){E("POST","/hobby/"+"delete"+"/",{name:w()("#hobby option:selected").val()},(function(e,t){console.log(e)}))},children:"Delete"})]})},z=[{name:"first_name",displayName:"First Name",type:"text",required:!0},{name:"last_name",displayName:"Last Name",type:"text",required:!0},{name:"birthday",displayName:"Birthday",type:"date",required:!0},{name:"email",displayName:"E-Mail",type:"email",required:!0},{name:"password",displayName:"Password",type:"password",required:!0},{name:"privacy_accept",displayName:"By clicking on the \u201cFinish\u201d-button, I confirm that my data can be used for purposes described in the Privacy Policy.*",type:"checkbox",required:!0},{name:"mobile_number",displayName:"Phone number (+xx xxxx xxxxxxxx)",type:"text",required:!1},{name:"university",displayName:"University",type:"dropdown",required:!0,entries:["A) TUM","B) LMU","C) Hochschule M\xfcnchen","D) Other"]},{name:"studies",displayName:"Field of Studies",type:"dropdown",required:!0,entries:["","- Electrical Engineering","- Biology","- Chemistry","- Physics","- Space Sciences","- Informatics","- Computer Engineering","- Mathematics","- Medicine & Health","- Business & Management","- Economics","- Communication & Media","- Political science","- Mechanical Engineering","- Law","- Philosophy","- Sport Sciences","Other Social Sciences","Other Humanities","Other Engineering Sciences","Other Natural Sciences","Other Arts","Other Studies"]},{name:"study_level",displayName:"Level",type:"dropdown",required:!0,entries:["Bachelor","Master","PhD"]},{name:"semester",displayName:"Semester (in your current studies)",type:"dropdown",required:!0,entries:[1,2,3,4,5,6,7,8,9]},{name:"mail_accept",displayName:"I agree to receive E-Mails reminding me of upcoming events and other useful information related to the services of Gathr.de*",type:"checkbox",required:!0}],Y={title:"GATHR Meet&Mingle Roulette",subtitle:"Next online event: 22nd of January, 7pm",tab_names:["HOME","SIGN-UP"],title_component:"",form_name:"register",tabs:[{name:"HOME",subtitle:"GET TO KNOW OTHER STUDENTS",component:Object(r.jsx)(H,{})},{name:"SIGN-UP",subtitle:"Tell us about yourself!",component:Object(r.jsxs)("div",{children:[Object(r.jsx)(h,{entries:z}),Object(r.jsx)(j,{entries:[{name:"students",description:"No, Simply Connect Me With Other Students",iconName:"groups",text_box:"Choose to get to know a variety of students from Munich!"},{name:"tandem",description:"Yes, Find Tandem Learning Partners",iconName:"menu_book",text_box:"Choose to find new study pals for university, languages, and skill exchanges!"},{name:"sports",description:"Yes, Find Sport Partners",iconName:"sports_handball",text_box:"Choose to get connected with athletes and sport friends around you!"},{name:"founder",description:"Yes, Find Start-Up Co-Founders",iconName:"emoji_objects",text_box:"Choose to connect with start-up enthusiasts!"}]})]})}]},J={description:"Munich Universities - Sport Partners - Learning Groups - Co-Founders - Friends",entries:[{name:"faq1",title:"What is GATHR?",text:"GATHR is an exciting new online event that will match you with like-minded people! No matter if you want to find other students from your studies for a learning group, if you search for sports partners, or if you want to find the perfect co-founder for your next start-up."},{name:"faq2",title:"How does a GATHR event work?",text:"Every GATHR event aims at getting you in contact with as many other Munich students as possible! You will meet 1-2 other participants in speed-meeting video calls for 10 minutes. After getting to know each other, you can vote whether you want to stay in contact and meet again. Then, the next video round start and you will be connected with new participants."},{name:"faq3",title:"Who will I meet?",text:"Depending on the criteria you defined in your profile, you will meet a variety of students from Munich! Some are new in the city and search for connections, some others search for sport partners or learning exchanges, and some will invite you to found the next big start-up! Which group will you belong to? :)"},{name:"faq4",title:"What are the matching criteria?",text:"The matching ensures that you meet people which have similar interests and hobbies as you. After registration, you fill out a questionnaire that is used for matching. We ask about your studies, your hobbies, and what your goal for connecting with new people is."},{name:"faq5",title:"How does the voting work?",text:"The voting helps you and your conversation partners to quickly align on a common interest and on the next activity you want to do. After each video round, everyone gets to vote on whether you want to meet again. If two people select the same option, you get informed and can start organizing your next meeting!"},{name:"faq6",title:"Do I need to prepare anything?",text:"No :) You can just join our next online event, and we will connect you with other students in Munich! In order to help kickstart your conversations, we even provide you with ice-breaking questions!"},{name:"faq7",title:"Is it free?",text:"Yes, GATHR is free! Our goal is to become a plattform available for all Munich students to connect!"},{name:"faq8",title:"Who can I contact for questions or feedback?",text:"We would love to hear from you! You can always write us via e-mail at info@gathr.de !"}],subtitle:"FAQ"},X={title:"Your registration was successful!",subtitle:"We will help you GATHR!",title_component:"",tab_names:["HOME"],tabs:[{name:"WELCOME",subtitle:"",component:Object(r.jsx)(O,{})}]},V={subtitle:"Select y",language:{subtitle:"Which language do you prefer?",entries:[{name:"language-german",displayName:"Only speaking German",type:"checkbox"},{name:"language-english",displayName:"Only speaking English",type:"checkbox"}]},studies:{subtitle:"Which studies do you prefer?",entries:[{name:"study-same",displayName:"People in my course of study",type:"checkbox"},{name:"study-any",displayName:"People in all courses of study",type:"checkbox"}]},hobbies:{subtitle:"Which activities do you like?",entries:[1,2,3,4,5],n_hobbies:5}},K={title:"Welcome to Gathr",subtitle:"",title_component:Object(r.jsx)(B,{}),tab_names:["Matching","Event"],tabs:[{name:"Matching",subtitle:"Select your five favourite hobbies",component:Object(r.jsx)(k,{})},{name:"Event",subtitle:"PLACEHOLDER",component:"PLACEHOLDER"}],event_tab_options:[{name:"Event",subtitle:"",component:Object(r.jsx)(P,{})},{name:"Event",subtitle:"",component:Object(r.jsx)(R,{})},{name:"Event",subtitle:"Subtitle",component:Object(r.jsx)(_,{entries:[{name:"feedback-1",displayName:"Nothing",type:"checkbox"},{name:"feedback-2",displayName:"More",type:"checkbox"},{name:"feedback-3",displayName:"Even more!",type:"checkbox"}]})}]},Q=[{name:"username",displayName:"Username (or mail address)",type:"text",required:!0},{name:"password",displayName:"Password",type:"password",required:!0}],Z={title:"Login to your account!",subtitle:"",title_component:"",form_name:"",tab_names:["LOGIN"],tabs:[{name:"LOGIN",subtitle:"",component:Object(r.jsx)(h,{entries:Q})}]},$=[{name:"name",displayName:"Event Title",type:"text"},{name:"meeting_id",displayName:"Meeting ID",type:"text"},{name:"date",displayName:"Date",type:"date"},{name:"time",displayName:"Time",type:"time"},{name:"mod_pw",displayName:"Moderator password",type:"text"}],ee=[{name:"name",displayName:"Hobby name",type:"text"}],te={title:"Manage Gathr",subtitle:"Creation and deletion of models",title_component:"",tab_names:["EVENTS","HOBBIES"],tabs:[{name:"EVENTS",subtitle:"Create, delete or start events",component:Object(r.jsx)(L,{name:"event"})},{name:"HOBBIES",subtitle:"Create or delete hobbies",component:Object(r.jsx)(U,{name:"hobby"})}]};var ne=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)(b,{tabData:te,showButtons:!1})})};var se=function(e){return Object(r.jsx)(b,{tabData:Y,handleFormSubmitButton:function(e){e.preventDefault();var t=document.getElementById(Y.form_name+"-form"),n=new FormData(t),s={};n.forEach((function(e,t){s[t]=e}));for(var i=0;i<z.length;i++)"dropdown"===z[i].type&&(s[z[i].name]=w()("#"+z[i].name+" option:selected").val());E("POST","/register/",s,(function(e,t){console.log(e),200===t&&(window.location.href=window.location.hostname)}))},showButtons:!0})};var ie=function(e){var t=Object(s.useState)(!1),n=Object(y.a)(t,2),i=n[0],a=(n[1],Object(s.useState)(!0)),c=Object(y.a)(a,2),o=c[0],l=(c[1],Object(s.useState)([])),d=Object(y.a)(l,2),u=(d[0],d[1]),m=Object(s.useState)([]),j=Object(y.a)(m,2),h=(j[0],j[1]),p=Object(s.useState)([]),f=Object(y.a)(p,2),x=(f[0],f[1]);return Object(s.useEffect)((function(){E("GET","/event/",{},(function(e,t){200===t&&u(e)})),E("GET","/room/",{},(function(e,t){200===t&&h(e)})),E("GET","/match/",{},(function(e,t){200===t&&x(e)}))}),[]),!i&&o?K.tabs[1]=K.event_tab_options[0]:i&&!o?K.tabs[1]=K.event_tab_options[1]:i&&o&&(K.tabs[1]=K.event_tab_options[2]),Object(r.jsx)(b,{tabData:K,showButtons:!1})};var ae=function(e){var t=e.entries,n=e.handleSubmit;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{id:"login-form",children:[Object(r.jsx)(h,{entries:t}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:n,children:"Login"}),Object(r.jsx)("button",{className:"btn btn-secondary",onClick:function(e){e.preventDefault(),window.location.href="/register/"},children:"Register"})]})})};var ce=function(e){return Z.tabs[0].component=Object(r.jsx)(ae,{entries:Q,handleSubmit:function(e){e.preventDefault();var t=document.getElementById(Z.form_name+"-form"),n=new FormData(t),s={};n.forEach((function(e,t){s[t]=e})),console.log(s),E("POST","/login/",s,(function(e,t){console.log(e),200===t&&(window.location.href="")}))}}),Object(r.jsx)(b,{tabData:Z,showButtons:!1})},re=i.a.createElement,oe=document.getElementById("manage-area");oe&&c.a.render(re(ne,oe.dataset),oe);var le=document.getElementById("register-container");le&&c.a.render(re(se,le.dataset),le);var de=document.getElementById("success-page");de&&c.a.render(re(v,de.dataset),de);var ue=document.getElementById("event-container");ue&&c.a.render(re(ie,ue.dataset),ue);var me=document.getElementById("login-container");me&&c.a.render(re(ce,me.dataset),me)}},[[72,1,2]]]);
//# sourceMappingURL=main.3b6766e3.chunk.js.map