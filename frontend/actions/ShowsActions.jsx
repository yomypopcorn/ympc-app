'use strict';

import alt from '../alt';
import ShowsSource from '../sources/ShowsSource';

class ShowsActions {

  updateShows (shows) {
    this.dispatch(shows);
  }

  showsFailed (err) {
    this.dispatch(err);
  }

  subscribeShow (showId) {
    this.dispatch(showId);
    ShowsSource.subscribeShow(showId);
  }

  unsubscribeShow (showId) {
    this.dispatch(showId);
    ShowsSource.unsubscribeShow(showId);
  }

  search (text) {
    this.dispatch(text);
  }

  fetchShows () {
    this.dispatch();

    ShowsSource.fetch()
      .then((shows) => {
        this.actions.updateShows(shows);
      })
      .catch((err) => {
        this.actions.showsFailed(err);
      });
  }

}

export default alt.createActions(ShowsActions);
