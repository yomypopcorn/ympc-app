import {Record} from 'immutable';

var defaults = {
    show_id: null,
    imdb_id: null,
    title: '',
    episode_title: '',
    sien: 0,
    season: 0,
    episode: 0,
    poster: 'http://i.imgur.com/MNe2X.gif',
    first_aired: null,
    timestamp: null
};

class FeedItemRecord extends Record(defaults) {

  getPosterThumb () {
    if (this.poster.indexOf('original') === -1) {
      return this.poster;
    }

    return this.poster.replace('original', 'thumb')
  }

  getPosterMedium () {
    if (this.poster.indexOf('original') === -1) {
      return this.poster;
    }

    return this.poster.replace('original', 'medium')
  }

};

export default FeedItemRecord;
