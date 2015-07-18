import {Record} from 'immutable';

var defaults = {
    imdb_id: null,
    title: '',
    episode_title: '',
    season: 0,
    episode: 0,
    poster: 'http://i.imgur.com/MNe2X.gif',
    first_aired: null
};

class FeedItemRecord extends Record(defaults) {
};

export default FeedItemRecord;
