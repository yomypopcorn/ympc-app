'use strict';

import alt from '../alt';
import LoginActions from '../actions/LoginActions';

class LoginStore {

  constructor () {
    this.username = '';
    this.token = '';

    this.bindListeners({
      handleUpdateCredentials: LoginActions.UPDATE_CREDENTIALS,
    });
  }

  handleUpdateCredentials (credentials) {
    this.username = credentials.username;
    this.token = credentials.token;
  }

}

export default alt.createStore(LoginStore, 'LoginStore');
