'use strict';

import Immutable from 'immutable';
import React from 'react/addons';
import {Navigation} from 'react-router';
import ShowsStore from '../stores/ShowsStore';
import ShowsActions from '../actions/ShowsActions';
import ShowsListItem from './ShowsListItem';
import ShowsSearchInput from './ShowsSearchInput';

var Shows = React.createClass({

  mixins: [ Navigation ],

  getInitialState () {
    return ShowsStore.getState();
  },

  shouldComponentUpdate (nextProps, nextState) {
    return !Immutable.is(nextState.searchResults, this.state.searchResults);
  },

  componentDidMount () {
    ShowsStore.listen(this.onChange);
    ShowsActions.search('');
  },

  componentWillUnmount () {
    ShowsStore.unlisten(this.onChange);
  },

  onChange (state) {
    this.setState(state);
  },

  cancelSearch () {
    this.goToSubscriptions();
  },

  goToSubscriptions () {
    this.transitionTo('/shows', this.props.location.query);
  },

  render () {
    var shows = this.state.searchResults;

    var showsList = shows.map((show) => {
      return <ShowsListItem
        key={show.get('imdb_id')}
        imdb_id={show.get('imdb_id')}
        title={show.get('title')}
        rating={show.get('rating')}
        isSubscribed={show.get('isSubscribed')}
        onSubscriptionChanged={this.goToSubscriptions} />;
    }).toList();

    var emptyState = null;
    if(!this.state.shows.size){
      emptyState = <div className="empty-state">Uhm..shows are still loading...</div>;
    }

    var noResultsState = null;
    if (!showsList.size) {
      noResultsState = <div className="empty-state">Found nothing. Try searching something else.</div>;
    }

    return (
      <div>
      <ShowsSearchInput onCancel={this.cancelSearch} />
      {emptyState || noResultsState || showsList}
      </div>
    );
  }

});

export default Shows;
