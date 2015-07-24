'use strict';

import alt from '../alt';
import Immutable from 'immutable';
import React from 'react/addons';
import ShowsActions from '../actions/ShowsActions';
import ShowRecord from '../records/ShowRecord';

class ShowsStore {

  constructor () {
    this.search = '';
    this.shows = Immutable.Map({});
    this.searchResults = Immutable.Map({});

    this.bindListeners({
      handleUpdateShows: ShowsActions.UPDATE_SHOWS,
      handleFetchShows: ShowsActions.FETCH_SHOWS,
      handleShowsFailed: ShowsActions.SHOWS_FAILED,
      handleSearch: ShowsActions.SEARCH,
      handleSubscribeShow: ShowsActions.SUBSCRIBE_SHOW,
      handleUnsubscribeShow: ShowsActions.UNSUBSCRIBE_SHOW
    });
  }

  updateSearchResults () {
    if (!this.search) {
      this.searchResults = this.shows;
      return;
    }

    var filter = ('' + this.search).toLowerCase().replace(/[^a-z0-9]/g, '');

    this.searchResults = this.shows.filter(function (show) {
      var showName = ('' + show.get('title')).toLowerCase().replace(/[^a-z0-9]/g, '');
      return showName.indexOf(filter) !== -1;
    });
  }

  handleUpdateShows (shows) {
    shows = shows.reduce((shows, show) => {
      shows[show.id] = show;
      return shows;
    }, {});

    this.shows = Immutable.fromJS(shows, (key, value) => {
      if (value.get('id')) {
        return new ShowRecord(value);
      }
      return value.toMap();
    })
    .sort((a, b) => {
      return b.get('rating') - a.get('rating');
    });

    this.updateSearchResults();
  }

  handleFetchShows () {
    this.shows = Immutable.Map({});
  }

  handleShowsFailed (err) {
    console.log(err);
  }

  handleSearch (text) {
    this.search = text;
    this.updateSearchResults();
  }

  handleSubscribeShow (showId) {
    this.shows = this.shows.setIn([showId, 'isSubscribed'], true);
    this.updateSearchResults();
  }

  handleUnsubscribeShow (showId) {
    this.shows = this.shows.setIn([showId, 'isSubscribed'], false);
    this.updateSearchResults();
  }

}

export default alt.createStore(ShowsStore, 'ShowsStore');
