import React from 'react';
import ReactDOM from 'react-dom';
import Home from './meetings/Home'
import Manage from './manage/Manage'
import Profile from './profile/Profile'
import {Register, Login} from './auth'


const e = React.createElement
const homeEl = document.getElementById('home')
if(homeEl) {
  ReactDOM.render(e(Home, homeEl.dataset), homeEl)
}

const manageEl = document.getElementById("manage")
if(manageEl) {
  ReactDOM.render(e(Manage, manageEl.dataset), manageEl)
}

const profileEl = document.getElementById("profile")
if(profileEl) {
  ReactDOM.render(e(Profile, profileEl.dataset), profileEl)
}

const registerEl = document.getElementById("register")
if(registerEl) {
  ReactDOM.render(e(Register, registerEl.dataset), registerEl)
}

const loginEl = document.getElementById("login")
if(loginEl) {
  ReactDOM.render(e(Login, loginEl.dataset), loginEl)
}