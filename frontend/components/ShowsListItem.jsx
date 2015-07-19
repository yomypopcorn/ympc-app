'use strict';

import React from 'react/addons';
import ShowsActions from '../actions/ShowsActions';

var ShowsListItem = React.createClass({

  handleButtonClick () {
    if (!this.props.isSubscribed) {
      ShowsActions.subscribeShow(this.props.imdb_id);
    } else {
      ShowsActions.unsubscribeShow(this.props.imdb_id);
    }

    if (this.props.onSubscriptionChanged) {
      this.props.onSubscriptionChanged();
    }
  },

  render () {
    var className = [
      'list-item',
      this.props.color,
      this.props.color ? 'no-border' : ''
    ].join(' ');

    var btn = this.props.isSubscribed ?
      <div className="btn">Unsubscribe</div>
      : <div className="btn">Subscribe</div>;

    return (
      <div className={className}>
        <div className="list-item-title">{this.props.title}</div>
        <div className="list-item-end" onClick={this.handleButtonClick}>{btn}</div>
      </div>
    );
  }

});

export default ShowsListItem;
