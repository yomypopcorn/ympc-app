'use strict';

import React from 'react/addons';
import ShowsActions from '../actions/ShowsActions';

var ShowsListItem = React.createClass({

  propTypes: {
    id: React.PropTypes.string.isRequired,
    imdbId: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    color: React.PropTypes.string,
    rating: React.PropTypes.number,
    isSubscribed: React.PropTypes.bool,
    onSubscriptionChanged: React.PropTypes.func
  },

  handleButtonClick () {
    if (!this.props.isSubscribed) {
      ShowsActions.subscribeShow(this.props.id);
    } else {
      ShowsActions.unsubscribeShow(this.props.id);
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
