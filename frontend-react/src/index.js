import React from 'react';
import ReactDOM from 'react-dom';
import Manage from './components/manage/Manage'
import Register from './components/auth/register/Register'
import EventContainer from './components/event/Event'
import SuccessPage from './components/auth/register/SuccessPage'
import Login from './components/auth/login/Login'

const e = React.createElement

const manageEl = document.getElementById("manage")
if(manageEl) {
  ReactDOM.render(e(Manage, manageEl.dataset), manageEl)
}

const registerContainerEl = document.getElementById("register-container")
if(registerContainerEl) {
  ReactDOM.render(e(Register, registerContainerEl.dataset), registerContainerEl)
}

const successPageEl = document.getElementById("success-page")
if(successPageEl) {
  ReactDOM.render(e(SuccessPage, successPageEl.dataset), successPageEl)
}

const eventContainerEl = document.getElementById("event-container")
if(eventContainerEl) {
  ReactDOM.render(e(EventContainer, eventContainerEl.dataset), eventContainerEl)
}

const loginContainerEl = document.getElementById("login-container")
if(loginContainerEl) {
  ReactDOM.render(e(Login, loginContainerEl.dataset), loginContainerEl)
}

