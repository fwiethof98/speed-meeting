(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{41:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(10),r=n.n(a),c=n(0);var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),i=0;i<n.length;i++){var s=n[i].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t};function l(e,t,n,i){var s=new XMLHttpRequest,a=JSON.stringify(n);s.responseType="json",s.open(e,"http://localhost:8000"+"/api".concat(t));var r=o("csrftoken");"POST"!==e&&"DELETE"!==e||(s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",r)),s.onload=function(){i(s.response,s.status)},s.send(a)}function d(e){var t=e.selectRef,n=e.options,i=e.onChangeFun,s=e.field;return console.log(n),(n=n.map((function(e){return e[s]}))).sort(),n=n.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},e+t)})),Object(c.jsx)("div",{children:Object(c.jsx)("select",{ref:t,onChange:i,children:n})})}function u(e){var t=e.name,n=e.fields;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)(m,{name:t,fields:n,onClickCreate:function(e){e.preventDefault();var n=document.getElementById(t+"-form"),i=new FormData(n),s={};i.forEach((function(e,t){s[t]=e})),l("POST","/"+t+"/create/",s,(function(e,t){console.log(e),n.reset()}))}}),Object(c.jsx)(b,{url:"/"+t,field:"name"})]})}function m(e){var t=e.name,n=e.onClickCreate,i=e.fields.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("input",{name:e,placeholder:" "+e})},t+e)}));return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{id:t+"-form",method:"POST",onSubmit:n,children:[i,Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create"})]})})}function b(e){var t=e.url,n=e.field,i=s.a.createRef();return Object(c.jsxs)("div",{children:[Object(c.jsx)(d,{url:t+"/?action=all",selectRef:i,field:n}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){l("DELETE",t+"/delete/",{name:i.current.value},(function(e,t){console.log(e)}))},children:"Delete"})]})}n(41);var h=function(e){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(u,{name:"meetings",fields:["name","attendeePW","moderatorPW"]}),Object(c.jsx)(u,{name:"events",fields:["name","date"]}),Object(c.jsx)(u,{name:"criteria",fields:["name"]})]})},j=n(12),p=n.n(j);function f(e){var t=e.entries,n=e.title,i=e.img_url;return t=t.map((function(e){return Object(c.jsx)(O,{name:e.name,iconName:e.iconName,description:e.description,text_box:e.text_box})})),Object(c.jsxs)("div",{class:"row",children:[i&&Object(c.jsx)("div",{class:"flash_art",children:Object(c.jsx)("img",{src:i,alt:"GATHR"})}),Object(c.jsx)("div",{class:"unterschrift titel_trenner bold",children:Object(c.jsx)("p",{children:n})}),Object(c.jsx)("div",{class:"col-sm-10 col-sm-offset-1",children:t})]})}function x(e){var t=e.entries,n=e.img_url,i=e.title,s=t.map((function(e){return Object(c.jsx)(v,{name:e.name,description:e.description,type:e.type,entries:e.entries})}));return Object(c.jsxs)("div",{children:[n&&Object(c.jsx)("div",{class:"flash_art",children:Object(c.jsx)("img",{src:n,alt:"GATHR"})}),Object(c.jsx)("div",{class:"unterschrift",children:Object(c.jsx)("p",{children:i})}),s]})}function O(e){var t=e.name,n=e.iconName,i=e.description,s=e.text_box;return Object(c.jsx)("div",{class:"col-sm-4",children:Object(c.jsxs)("div",{class:"choice","data-toggle":"wizard-radio",rel:"tooltip",title:s,children:[Object(c.jsx)("input",{type:"radio",name:"intent",value:t}),Object(c.jsx)("div",{class:"icon",children:Object(c.jsx)("i",{class:"material-icons",children:n})}),Object(c.jsx)("h6",{children:i})]})})}function v(e){var t,n=e.name,i=e.displayName,s=e.type,a=e.required,r=e.entries,o=e.iconName,l=Object(c.jsx)("label",{className:"",children:i}),d=Object(c.jsx)("input",{name:n,type:s,className:"form-control"});switch(a&&d.setAttribute("required",!0),s){case"dropdown":t=Object(c.jsxs)("div",{children:[l,Object(c.jsx)(y,{entries:r,name:n})]});break;case"radio":t=Object(c.jsxs)("div",{children:[d,l]});break;case"checkbox":d=Object(c.jsx)("input",{id:n,name:n,type:s,className:"form-control"}),t=Object(c.jsxs)("div",{children:[d,l]});break;case"date":d=Object(c.jsx)("input",{name:n,type:s,className:"form-control",defaultValue:"2020-01-01"}),t=Object(c.jsxs)("div",{children:[l,d]});break;default:t=Object(c.jsxs)("div",{children:[l,d]})}return Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)("span",{className:"input-group-addon",children:o&&Object(c.jsx)("i",{className:"material-icons",children:o})}),Object(c.jsx)("div",{className:"form-group label-floating",children:t})]})}function y(e){var t=e.entries,n=e.onChangeFun,i=e.name;return t.sort(),t=t.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},e+t)})),Object(c.jsx)("div",{children:Object(c.jsx)("select",{id:i.toLowerCase(),className:"form-control",onChange:n,children:t})})}var g=function(e){return Object(c.jsx)("a",{href:"https://www.gathr.de",children:Object(c.jsxs)("div",{class:"logo-container",children:[Object(c.jsx)("div",{class:"logo",children:Object(c.jsx)("img",{src:"/static/assets/img/new_logo.png"})}),Object(c.jsx)("div",{class:"brand",children:"GATHR"})]})})};function w(e){var t=e.subtitle,n=e.content,i=e.name;return Object(c.jsx)("div",{className:"tab-pane",id:i,children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h4",{className:"info-text",children:t}),n]})})}function N(e){var t=e.title,n=e.subtitle;return Object(c.jsxs)("div",{className:"wizard-header",children:[Object(c.jsx)("h3",{className:"wizard-title",children:t}),Object(c.jsx)("h5",{children:n})]})}function k(e){var t=e.tabNames.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#".concat(e),"data-toggle":"tab",children:e})})}));return Object(c.jsx)("div",{className:"wizard-navigation",children:Object(c.jsx)("ul",{children:t})})}function S(e){var t=e.handleFormSubmitButton;return Object(c.jsxs)("div",{className:"wizard-footer",children:[Object(c.jsxs)("div",{className:"pull-right",children:[Object(c.jsx)("input",{type:"button",className:"btn btn-next btn-fill btn-success btn-wd",name:"next",value:"Next"}),Object(c.jsx)("input",{type:"button",onClick:t,className:"btn btn-finish btn-fill btn-success btn-wd",name:"finish",value:"Finish"})]}),Object(c.jsx)("div",{className:"pull-left",children:Object(c.jsx)("input",{type:"button",className:"btn btn-previous btn-fill btn-default btn-wd",name:"previous",value:"Previous"})}),Object(c.jsx)("div",{className:"clearfix"})]})}var E=function(e){var t=e.handleFormSubmitButton,n=e.showButtons,i=e.tabData,s=i.tabs.map((function(e){return Object(c.jsx)(w,{subtitle:e.subtitle,content:e.component,name:e.name})}));return Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-sm-8 col-sm-offset-2",children:Object(c.jsx)("div",{className:"wizard-container",children:Object(c.jsx)("div",{className:"card wizard-card","data-color":"green",id:"wizardProfile",children:Object(c.jsxs)("form",{id:i.form_name+"-form",action:"",method:"",onSubmit:t,children:[Object(c.jsx)(N,{title:i.title,subtitle:i.subtitle}),i.title_component,Object(c.jsx)(k,{tabNames:i.tab_names}),Object(c.jsx)("div",{className:"tab-content",children:s}),n&&Object(c.jsx)(S,{handleFormSubmitButton:t})]})})})})})})]})};function _(e){return Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{class:"col-sm-12",children:Object(c.jsxs)("div",{style:{textAlign:"center",marginRight:50,marginLeft:50},children:[Object(c.jsx)("h3",{children:"Event details"}),Object(c.jsxs)("u",{children:[Object(c.jsx)("li",{children:"Date: 22nd of January 2021"}),Object(c.jsx)("li",{children:"Time: 7pm German Time"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"/static/assets/calendar/GATHR_Event.ics",children:" Download .ics"}),Object(c.jsxs)("p",{class:"bold",children:[Object(c.jsx)("br",{}),"An invitation to the plattform will get to you via e-mail a few days before the event."]}),Object(c.jsx)("h3",{children:"What else can I do?"}),Object(c.jsx)("p",{class:"unterschrift",children:"Tell your friends! - The more people join the event, the more fun it will be!"}),Object(c.jsx)("a",{class:"ref_link",target:"_blank",href:"https://rebrand.ly/gathr_join_codeWU34",children:"https://rebrand.ly/gathr_join_codeWU34"}),Object(c.jsx)("p",{class:"ref_text bold",children:"Share this link, and they will receive prioritized access to make sure all of you participate in the same event."})]})})})}var T=function(e){return Object(c.jsx)(E,{tabData:X,showButtons:!1})};var q=function(e){var t=new Array(K.hobbies.n_hobbies).map((function(e,t){return{name:"hobby"+t,displayName:"Hobby "+t,type:"dropwdown"}}));return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{id:"matching-form",method:"POST",onSubmit:function(e){e.preventDefault();var t=document.getElementById("matching-form"),n=new FormData(t),i={};n.forEach((function(e,t){i[t]=e}));for(var s=0;s<K.hobbies.n_hobbies;s++)i["hobby"+s]=p()("#hobby"+s+" option:selected").val();console.log(i),l("POST","/matching/update/",i,(function(e,t){console.log(e)}))},children:[Object(c.jsx)(x,{entries:t,title:K.hobbies.subtitle}),Object(c.jsx)(x,{entries:K.language.entries,title:K.language.subtitle}),Object(c.jsx)(x,{entries:K.studies.entries,title:K.studies.subtitle}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})};function D(e){var t=e.name,n=e.age,i=e.university,s=e.studies,a=e.status;return Object(c.jsxs)("div",{style:{borderColor:"black",borderStyle:"dashed",borderWidth:2,paddingLeft:5,textAlign:"left"},children:[Object(c.jsxs)("h5",{children:[t,", ",n]}),Object(c.jsx)("h6",{children:i}),Object(c.jsxs)("h6",{children:[s,", ",a]})]})}var I=function(e){var t=e.showEventDisplay,n=e.showFeedbackDisplay,i=e.entries,s=[{name:"Florian Wiethof",age:"23",university:"TUM",studies:"Informatics",status:"Bachelor"}].map((function(e){return Object(c.jsx)(D,{name:e.name,age:e.age,university:e.university,studies:e.studies,status:e.status})})),a=i.map((function(e){return Object(c.jsx)("div",{className:"col-sm-4",children:Object(c.jsx)(v,{name:e.name,displayName:e.displayName,type:e.type})})}));return Object(c.jsx)("form",{method:"POST",id:"feedback-form",children:Object(c.jsxs)("div",{style:{paddingLeft:20,paddingRight:20,marginTop:10,textAlign:"center"},children:[Object(c.jsx)("h4",{children:"What do you want to do next?"}),Object(c.jsx)("div",{className:"col-sm-6",children:s}),Object(c.jsx)("div",{className:"col-sm-12",children:a}),Object(c.jsx)("div",{className:"col-sm-12",children:Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var i=document.getElementById("feedback-form"),s=new FormData(i),a={};s.forEach((function(e,t){a[t]=e})),l("POST","/matching/feedback/",a,(function(e,t){console.log(e)})),t(!0),n(!1)},children:"Submit"})})]})})},M=n(7);var F=function(e){var t=e.days,n=e.hours,i=e.minutes,s=e.seconds;return Object(c.jsx)("div",{id:"content-wrap",children:Object(c.jsx)("main",{class:"row",children:Object(c.jsx)("div",{id:"main-content",class:"twelve columns",children:Object(c.jsxs)("div",{id:"counter",class:"group",children:[t&&Object(c.jsxs)("span",{children:[t," ",Object(c.jsx)("em",{children:"days"})]}),n&&Object(c.jsxs)("span",{children:[n," ",Object(c.jsx)("em",{children:"hours"})]}),i&&Object(c.jsxs)("span",{children:[i," ",Object(c.jsx)("em",{children:"minutes"})]}),s&&Object(c.jsxs)("span",{children:[s," ",Object(c.jsx)("em",{children:"seconds"})]})]})})})})},B=n(19),C=n.n(B);function P(e,t,i){for(var s=Object.keys(t).map((function(e){return e+"="+t[e]})),a="",r=0;r<s.length;r++)a+=s[r]+"&";return(a=a.slice(0,-1))+"&checksum="+function(e,t,i){var s=n(71).create();return s.update(e+t+i),s.hex()}(e,a,i)}function H(e,t){return"http://bbb.fs.ei.tum.de/bigbluebutton/api/"+e+"?"+P(e,t,"MbSSeTTNWJb237XYFBMwOOAm3NAq03yYf0ztpv7XSI")}var R="http://"+window.location.hostname+":4001";var A=function(e){var t=Object(i.useState)(!1),n=Object(M.a)(t,2),s=n[0],a=n[1],r=Object(i.useState)([]),o=Object(M.a)(r,2),d=o[0],u=o[1],m=Object(i.useState)(0),b=Object(M.a)(m,2),h=b[0],j=b[1],p=Object(i.useState)([]),f=Object(M.a)(p,2),x=f[0],O=f[1],v=Object(i.useState)([]),y=Object(M.a)(v,2),g=y[0],w=y[1],N=(new Date,e.showEventDisplay),k=e.showFeedbackDisplay;return s||a(C()(R,{transports:["websocket"]})),Object(i.useEffect)((function(){l("GET","/matching/events/?action=next",{},(function(e,t){O(e)})),l("GET","/matching/events/?action=main",{},(function(e,t){w(e)}))}),[]),Object(i.useEffect)((function(){s.on("SetSocket",(function(e){console.log(e)})),s.on("TimerUpdate",(function(e){e.difference<0&&h>0&&(N(!0),window.open(H("join",g))),e.difference<0&&((parseInt(d.minutes)-5)%15<0&&(parseInt(e.timer.minutes)-5)%15===0?(N(!0),k(!1),window.open(H("join",x))):(parseInt(d.minutes)-5)%15<10&&(parseInt(e.timer.minutes)-5)%15>10&&(N(!1),k(!1))),2===parseInt(d.hours)&&(N(!0),k(!1),s.emit("EndEvent",{})),u(e.timer),j(e.difference)}))}),[s]),Object(c.jsx)("div",{children:d&&h>=0&&Object(c.jsx)(F,{days:d.days,hours:d.hours,minutes:d.minutes,seconds:d.seconds})})};function W(e){var t=e.name,n=e.title,i=e.text;return Object(c.jsxs)("div",{className:"panel panel-default",children:[Object(c.jsx)("div",{className:"panel-heading",children:Object(c.jsx)("h4",{className:"panel-title",children:Object(c.jsx)("a",{"data-toggle":"collapse","data-parent":"#accordion",href:"#"+t,children:n})})}),Object(c.jsx)("div",{id:t,className:"panel-collapse collapse",children:Object(c.jsx)("div",{className:"panel-body",children:i})})]})}var G=function(e){var t=e.entries;return t=t.map((function(e){return Object(c.jsx)(W,{name:e.name,title:e.title,text:e.text})})),Object(c.jsx)("div",{className:"panel-group",id:"accordion",children:t})};var L=function(e){return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{class:"col-sm-12",children:Object(c.jsxs)("div",{id:"content_aboutus",children:[Object(c.jsx)("p",{class:"unterschrift",children:J.description}),Object(c.jsx)("img",{src:"/static/assets/img/explainer_low_qual_jpg_res15_qual80.jpg",alt:"Gathr pipeline",class:"explainer"})]})}),Object(c.jsx)("div",{class:"unterschrift bold",children:Object(c.jsxs)("p",{children:[Object(c.jsx)("br",{}),J.subtitle]})}),Object(c.jsx)(G,{entries:J.entries})]})};var U=function(e){return Object(c.jsx)(E,{tabData:V,handleFormSubmitButton:function(e){e.preventDefault();var t=document.getElementById("register-form"),n=new FormData(t),i={};n.forEach((function(e,t){i[t]=e}))},showButtons:!0})},z=[{name:"first_name",displayName:"First Name",type:"text",required:!0},{name:"last_name",displayName:"Last Name",type:"text",required:!0},{name:"birthday",displayName:"Birthday",type:"date",required:!0},{name:"email",displayName:"E-Mail",type:"email",required:!0},{name:"password",displayName:"Password",type:"password",required:!0},{name:"privacy_accept",displayName:"By clicking on the \u201cFinish\u201d-button, I confirm that my data can be used for purposes described in the Privacy Policy.*",type:"checkbox",required:!0},{name:"mobile_number",displayName:"Phone number (+xx xxxx xxxxxxxx)",type:"text",required:!1},{name:"university",displayName:"University",type:"dropdown",required:!0,entries:["A) TUM","B) LMU","C) Hochschule M\xfcnchen","D) Other"]},{name:"studies",displayName:"Field of Studies",type:"dropdown",required:!0,entries:["","- Electrical Engineering","- Biology","- Chemistry","- Physics","- Space Sciences","- Informatics","- Computer Engineering","- Mathematics","- Medicine & Health","- Business & Management","- Economics","- Communication & Media","- Political science","- Mechanical Engineering","- Law","- Philosophy","- Sport Sciences","Other Social Sciences","Other Humanities","Other Engineering Sciences","Other Natural Sciences","Other Arts","Other Studies"]},{name:"study_level",displayName:"Level",type:"dropdown",required:!0,entries:["Bachelor","Master","PhD"]},{name:"semester",displayName:"Semester (in your current studies)",type:"dropdown",required:!0,entries:[1,2,3,4,5,6,7,8,9]},{name:"mail_accept",displayName:"I agree to receive E-Mails reminding me of upcoming events and other useful information related to the services of Gathr.de*",type:"checkbox",required:!0}],Y={title:"GATHR Meet&Mingle Roulette",subtitle:"Next online event: 22nd of January, 7pm",tab_names:["HOME","SIGN-UP"],title_component:"",form_name:"register",tabs:[{name:"HOME",subtitle:"GET TO KNOW OTHER STUDENTS",component:Object(c.jsx)(L,{})},{name:"SIGN-UP",subtitle:"Tell us about yourself!",component:Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{entries:z}),Object(c.jsx)(f,{entries:[{name:"students",description:"No, Simply Connect Me With Other Students",iconName:"groups",text_box:"Choose to get to know a variety of students from Munich!"},{name:"tandem",description:"Yes, Find Tandem Learning Partners",iconName:"menu_book",text_box:"Choose to find new study pals for university, languages, and skill exchanges!"},{name:"sports",description:"Yes, Find Sport Partners",iconName:"sports_handball",text_box:"Choose to get connected with athletes and sport friends around you!"},{name:"founder",description:"Yes, Find Start-Up Co-Founders",iconName:"emoji_objects",text_box:"Choose to connect with start-up enthusiasts!"}]})]})}]},J={description:"Munich Universities - Sport Partners - Learning Groups - Co-Founders - Friends",entries:[{name:"faq1",title:"What is GATHR?",text:"GATHR is an exciting new online event that will match you with like-minded people! No matter if you want to find other students from your studies for a learning group, if you search for sports partners, or if you want to find the perfect co-founder for your next start-up."},{name:"faq2",title:"How does a GATHR event work?",text:"Every GATHR event aims at getting you in contact with as many other Munich students as possible! You will meet 1-2 other participants in speed-meeting video calls for 10 minutes. After getting to know each other, you can vote whether you want to stay in contact and meet again. Then, the next video round start and you will be connected with new participants."},{name:"faq3",title:"Who will I meet?",text:"Depending on the criteria you defined in your profile, you will meet a variety of students from Munich! Some are new in the city and search for connections, some others search for sport partners or learning exchanges, and some will invite you to found the next big start-up! Which group will you belong to? :)"},{name:"faq4",title:"What are the matching criteria?",text:"The matching ensures that you meet people which have similar interests and hobbies as you. After registration, you fill out a questionnaire that is used for matching. We ask about your studies, your hobbies, and what your goal for connecting with new people is."},{name:"faq5",title:"How does the voting work?",text:"The voting helps you and your conversation partners to quickly align on a common interest and on the next activity you want to do. After each video round, everyone gets to vote on whether you want to meet again. If two people select the same option, you get informed and can start organizing your next meeting!"},{name:"faq6",title:"Do I need to prepare anything?",text:"No :) You can just join our next online event, and we will connect you with other students in Munich! In order to help kickstart your conversations, we even provide you with ice-breaking questions!"},{name:"faq7",title:"Is it free?",text:"Yes, GATHR is free! Our goal is to become a plattform available for all Munich students to connect!"},{name:"faq8",title:"Who can I contact for questions or feedback?",text:"We would love to hear from you! You can always write us via e-mail at info@gathr.de !"}],subtitle:"FAQ"},X={title:"Your registration was successful!",subtitle:"We will help you GATHR!",title_component:"",tab_names:["HOME"],tabs:[{name:"WELCOME",subtitle:"",component:Object(c.jsx)(_,{})}]},K={subtitle:"Select y",language:{subtitle:"Which language do you prefer?",entries:[{name:"german",displayName:"Only speaking German",type:"checkbox"},{name:"english",displayName:"Only speaking English",type:"checkbox"}]},studies:{subtitle:"Which studies do you prefer?",entries:[{name:"same_study",displayName:"People in my course of study",type:"checkbox"},{name:"any_study",displayName:"People in all courses of study",type:"checkbox"}]},hobbies:{subtitle:"Which activities do you like?",entries:[1,2,3,4,5],n_hobbies:5}},Q={title:"Welcome to Gathr",subtitle:"",title_component:Object(c.jsx)(A,{}),tab_names:["Matching","Event"],tabs:[{name:"Matching",subtitle:"Select your five favourite hobbies",component:Object(c.jsx)(q,{})},{name:"Event",subtitle:"",component:""},{},{name:"Feedback",subtitle:"Subtitle",component:Object(c.jsx)(I,{entries:[{name:"feedback-1",displayName:"Nothing",type:"checkbox"},{name:"feedback-2",displayName:"More",type:"checkbox"},{name:"feedback-3",displayName:"Even more!",type:"checkbox"}]})}]},V={title:"Login to your account!",subtitle:"",title_component:"",tab_names:["Login"],tabs:[{name:"LOGIN",subtitle:"",component:Object(c.jsx)(x,{entries:[{name:"name",displayName:"Username",type:"text",required:!0},{name:"password",displayName:"Password",type:"password",required:!0}]})}]};var Z=function(e){return Object(c.jsx)(E,{tabData:Y,handleFormSubmitButton:function(e){e.preventDefault();var t=document.getElementById(Y.form_name+"-form"),n=new FormData(t),i={};n.forEach((function(e,t){i[t]=e})),console.log(p()("#university option:selected").val()),console.log(z);for(var s=0;s<z.length;s++)console.log("dropdown"===z[s].type),"dropdown"===z[s].type&&(console.log(s),i[z[s].name]=p()("#"+z[s].name+" option:selected").val());console.log(i),l("POST","/register/",i,(function(e,t){console.log(e),200===t&&(window.location.href="/submission_successful/")}))},showButtons:!0})};var $=function(e){var t=Object(i.useState)(!1),n=Object(M.a)(t,2),s=n[0],a=(n[1],Object(i.useState)(!0)),r=Object(M.a)(a,2),o=r[0];return r[1],s&&!o?Q.tabs[1]=Q.tabs[1]:s&&o?Q.tabs[1]=Q.tabs[2]:!s&&o&&(Q.tabs[1]=Q.tabs[3]),Q.tabs[1].component=undefined,Object(c.jsx)(E,{tabData:Q,handleFormSubmitButton:function(e){e.preventDefault();var t=document.getElementById("register-form"),n=new FormData(t),i={};n.forEach((function(e,t){i[t]=e}))},showButtons:!1})},ee=s.a.createElement,te=document.getElementById("manage");te&&r.a.render(ee(h,te.dataset),te);var ne=document.getElementById("register-container");ne&&r.a.render(ee(Z,ne.dataset),ne);var ie=document.getElementById("success-page");ie&&r.a.render(ee(T,ie.dataset),ie);var se=document.getElementById("event-container");se&&r.a.render(ee($,se.dataset),se);var ae=document.getElementById("login-container");ae&&r.a.render(ee(U,ae.dataset),ae)}},[[73,1,2]]]);
//# sourceMappingURL=main.c1fb00fe.chunk.js.map