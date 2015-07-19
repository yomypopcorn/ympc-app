'use strict';

import Immutable from 'immutable';
import React from 'react/addons';
import {Link} from 'react-router';
import FeedStore from '../stores/FeedStore';
import FeedActions from '../actions/FeedActions';
import FeedItem from './FeedItem';

var Feed = React.createClass({

  getInitialState () {
    return FeedStore.getState();
  },

  shouldComponentUpdate (nextProps, nextState) {
    return !Immutable.is(nextState.feed, this.state.feed);
  },

  componentDidMount () {
    FeedStore.listen(this.onChange);
    FeedActions.fetchFeed();
  },

  componentWillUnmount () {
    FeedStore.unlisten(this.onChange);
  },

  onChange (state) {
    this.setState(state);
  },

  render () {
    var feed = this.state.feed;

    var feedItemList = feed.map((item) => {
      return <FeedItem
        key={item.get('imdb_id')}
        imdb_id={item.get('imdb_id')}
        title={item.get('title')}
        episode_title={item.get('episode_title')}
        season={item.get('season')}
        episode={item.get('episode')}
        poster={item.get('poster')}
        first_aired={item.get('first_aired')} />;
    });

    var emptyState = null;
    if (!feedItemList.size) {
      emptyState = <div className="empty-state">Nothing here yet.<br/><Link to="showssearch" query={this.props.query}>Subscribe to some shows</Link></div>;
    }

    return (
      <div>
        {emptyState}
        {feedItemList}
      </div>
    );
  }

});

export default Feed;
