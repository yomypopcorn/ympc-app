'use strict';

import Immutable from 'immutable';
import React from 'react/addons';
import {Link} from 'react-router';
import FeedStore from '../stores/FeedStore';
import FeedActions from '../actions/FeedActions';
import FeedItem from './FeedItem';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

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
        key={item.get('show_id') + '-' + item.get('sien')}
        showId={item.get('show_id')}
        imdbId={item.get('imdb_id')}
        title={item.get('title')}
        episodeTitle={item.get('episode_title')}
        season={item.get('season')}
        episode={item.get('episode')}
        sien={item.get('sien')}
        image={item.getPosterThumb()}
        firstAired={item.get('first_aired')}
        timestamp={item.get('timestamp')} />;
    });

    var emptyState = null;
    if (!feedItemList.size) {
      emptyState = <div className="empty-state">Nothing here yet.<br/><Link to="/shows/search" query={this.props.location.query}>Subscribe to some shows</Link></div>;
    }

    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionEnter={false}
        transitionLeave={true}
        transitionName="list-item-remove">
      {emptyState}
      {feedItemList}
      </ReactCSSTransitionGroup>
    );
  }

});

export default Feed;
