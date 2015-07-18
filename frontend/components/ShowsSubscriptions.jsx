'use strict';

import React from 'react/addons';
import {Link} from 'react-router';
import ShowsStore from '../stores/ShowsStore';
import ShowsActions from '../actions/ShowsActions';
import ShowsListItem from './ShowsListItem';
import ShowsSearchInput from './ShowsSearchInput';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ShowsSubscriptions = React.createClass({

  getInitialState () {
    return ShowsStore.getState();
  },

  componentDidMount () {
    ShowsStore.listen(this.onChange);
  },

  componentWillUnmount () {
    ShowsStore.unlisten(this.onChange);
  },

  onChange (state) {
    this.setState(state);
  },

  render () {

    var shows = this.state.shows;

    shows = shows.filter((show) => show.get('isSubscribed'));

    var showsList = shows.map((show) => {
      return <ShowsListItem
        key={show.get('imdb_id')}
        imdb_id={show.get('imdb_id')}
        title={show.get('title')}
        rating={show.get('rating')}
        color={show.getColor()}
        isSubscribed={show.get('isSubscribed')} />;
    }).toList();

    var emptyState = null;
    if(!showsList.size){
      emptyState = <div className="empty-state">Get started by adding your favorite shows. Tap below!</div>;
    }

    var addText = showsList.size ? '+ Add more shows' : '+ Add your first show';

    var addLink = <Link to="showssearch" query={this.props.query} className="list-btn list-item">{addText}</Link>;

    var content = showsList.size < 10 ? 
      <div>{showsList} {addLink}</div>
      : <div>{addLink} {showsList}</div>;

    return (
      <div>
        {emptyState}
        {content}
        {/*<ReactCSSTransitionGroup transitionName="list-item-remove">
          {showsList}
        </ReactCSSTransitionGroup> */}
        
      </div>
    );
  }

});

export default ShowsSubscriptions;
