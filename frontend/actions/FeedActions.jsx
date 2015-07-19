
'use strict';

import alt from '../alt';
import FeedSource from '../sources/FeedSource';

class FeedActions {

  updateFeed (feed) {
    this.dispatch(feed);
  }

  feedFailed (err) {
    this.dispatch(err);
  }

  fetchFeed () {
    this.dispatch();

    FeedSource.fetch()
      .then((shows) => {
        this.actions.updateFeed(shows);
      })
      .catch((err) => {
        this.actions.feedFailed(err);
      });
  }

}

export default alt.createActions(FeedActions);
