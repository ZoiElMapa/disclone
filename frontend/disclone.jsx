import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import {register, login, logout} from './actions/session_actions.js';
import { fetchServer } from './actions/server_actions.js';
import { fetchMessages } from './actions/message_actions.js';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { currentUser: window.currentUser,
      servers: window.currentUser.servers,
      channels: window.currentUser.channels,
   };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});