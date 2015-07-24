'use strict';

import axios from 'axios';
import LoginStore from '../stores/LoginStore';
import config from '../config';

var apiBase = config.apiBaseUrl;

var ShowsSource = {

  fetch () {
    return new Promise((resolve, reject) => {
      function getAllShows () {
        return axios.get(apiBase + '/shows?compact=1')
          .then(response => response.data);
      }

      function getSubscribedShows () {
        var credentials = LoginStore.getState();

        return axios.get(apiBase + '/users/' + credentials.username + '/shows?compact=1&token=' + credentials.token)
          .then(response => response.data);
      }

      axios.all([ getAllShows(), getSubscribedShows() ])
        .then(axios.spread((shows, subscriptions) => {
          subscriptions = subscriptions.reduce((subscriptions, show) => {
            subscriptions[show.id] = true;
            return subscriptions;
          }, {});

          shows = shows.map((show) => {
            show.isSubscribed = (subscriptions[show.id] === true);
            return show;
          });

          shows.sort((a, b) => {
            return b.rating - a.rating;
          });

          resolve(shows);
        }));
    });
  },

  subscribeShow (showId) {
    var credentials = LoginStore.getState();
    return axios.post(apiBase + '/users/' + credentials.username + '/shows?token=' + credentials.token, {
      show_id: showId
    })
      .then(response => response.data);
  },

  unsubscribeShow (showId) {
    var credentials = LoginStore.getState();
    return axios.delete(apiBase + '/users/' + credentials.username + '/shows/' + showId + '?token=' + credentials.token)
      .then(response => response.data);
  }

};

export default ShowsSource;
