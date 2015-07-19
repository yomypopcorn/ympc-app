'use strict';

import alt from '../alt';
import Immutable from 'immutable';
import React from 'react/addons';
import FeedActions from '../actions/FeedActions';
import FeedItemRecord from '../records/FeedItemRecord';

class FeedStore {

  constructor () {
    this.feed = Immutable.Set();

    this.bindListeners({
      handleUpdateFeed: FeedActions.UPDATE_FEED,
      handleFetchFeed: FeedActions.FETCH_FEED,
      handleFeedFailed: FeedActions.FEED_FAILED
    });
  }

  handleUpdateFeed (feed) {
    this.feed = Immutable.fromJS(feed, (key, value) => {
      if (value.get('imdb_id')) {
        return new FeedItemRecord(value);
      }
      return value.toSet();
    });
  }

  handleFetchFeed () {
    if (this.feed.size) { return; }
    this.feed = Immutable.Set();
  }

  handleFeedFailed (err) {
    console.log(err);
  }

}

export default alt.createStore(FeedStore, 'FeedStore');
