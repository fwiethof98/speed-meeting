import React from 'react';
import ReactDOM from 'react-dom';
import Manage from './manage/Manage'
import RegisterContainer from './register/RegisterContainer'
import EventContainer from './event/EventContainer'
import SuccessPage from './feedback/SuccessPage'

const e = React.createElement

const manageEl = document.getElementById("manage")
if(manageEl) {
  ReactDOM.render(e(Manage, manageEl.dataset), manageEl)
}

const registerContainerEl = document.getElementById("register-container")
if(registerContainerEl) {
  ReactDOM.render(e(RegisterContainer, registerContainerEl.dataset), registerContainerEl)
}

const successPageEl = document.getElementById("success-page")
if(successPageEl) {
  ReactDOM.render(e(SuccessPage, successPageEl.dataset), successPageEl)
}

const eventContainerEl = document.getElementById("event-container")
if(eventContainerEl) {
  ReactDOM.render(e(EventContainer, eventContainerEl.dataset), eventContainerEl)
}

