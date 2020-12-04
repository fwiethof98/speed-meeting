import React from 'react';
import ReactDOM from 'react-dom';
import Home from './meetings/Home'

const e = React.createElement
const homeEl = document.getElementById('home')
if(homeEl) {
  ReactDOM.render(e(Home, homeEl.dataset), homeEl)
}
