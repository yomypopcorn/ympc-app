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
      handleFeedFailed: FeedActions.FEED_FAILED,
      handleRemoveItem: FeedActions.REMOVE_ITEM
    });
  }

  handleUpdateFeed (feed) {
    this.feed = Immutable.fromJS(feed, (key, value) => {
      if (value.get('show_id')) {
        return new FeedItemRecord(value);
      }
      return value.toSet();
    })
      .sortBy(item => item.get('timestamp'))
      .reverse();
  }

  handleFetchFeed () {
    if (this.feed.size) { return; }
    this.feed = Immutable.Set();
  }

  handleFeedFailed (err) {
    console.log(err);
  }

  handleRemoveItem (data) {
    this.feed = this.feed.filter(function (item) {
      return item.get('showId') !== data.showId && item.get('sien') !== data.sien;
    });
  }

}

export default alt.createStore(FeedStore, 'FeedStore');
