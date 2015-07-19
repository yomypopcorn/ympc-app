'use strict';

import alt from '../alt';

class LoginActions {

  updateCredentials (credentials) {
    this.dispatch(credentials);
  }

}

export default alt.createActions(LoginActions);
