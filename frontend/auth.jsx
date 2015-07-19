'use strict';

var Auth = {

  username: '',
  token: '',

  setCredentials (credentials) {
    this.username = credentials.username;
    this.token = credentials.token;
  },

  getCredentials () {
    return {
      username: this.username,
      token: this.token
    };
  }

};
