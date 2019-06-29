
import React from 'react';
import ReactDOM from 'react-dom';

import * as SessionUtil from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.signup = SessionUtil.signup;
  window.login = SessionUtil.login;
  window.logout = SessionUtil.logout;


  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});