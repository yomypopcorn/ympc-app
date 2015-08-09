'use strict';

import React from 'react/addons';
import FeedActions from '../actions/FeedActions';
import moment from 'moment';
import cn from 'classnames';
import LazyRenderMixin from 'react-lazyrender-mixin';
import ReactSwipe from 'react-swipe';

var FeedItem = React.createClass({
  mixins: [ LazyRenderMixin ],

  getInitialState () {
    return {
      contextActive: false
    };
  },

  getDefaultProps () {
    return {
      placeholderClassName: 'feed-item-placeholder'
    };
  },

  propTypes: {
    showId: React.PropTypes.string.isRequired,
    imdbId: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    episodeTitle: React.PropTypes.string,
    season: React.PropTypes.number.isRequired,
    episode: React.PropTypes.number.isRequired,
    sien: React.PropTypes.number.isRequired,
    image: React.PropTypes.string.isRequired,
    firstAired: React.PropTypes.number,
    timestamp: React.PropTypes.number.isRequired
  },

  onSwipeIndexChanged (swipeIndex) {
    this.setState({
      contextActive: swipeIndex === 1
    });
  },

  cancelContext () {
    this.setState({
      contextActive: false
    });
  },

  removeFromFeed () {
    FeedActions.removeItem(this.props.showId, this.props.sien);
  },

  render () {
    var classNames = cn({
      'feed-item': true,
      'context-active': this.state.contextActive
    });

    var bodyStyle = {
      backgroundImage: ('url(' + this.props.image + ')')
    };

    var slideToIndex = this.state.contextActive ? 1 : 0;
    var ts = +this.props.timestamp || +this.props.firstAired;
    var timeAgo = moment(ts).fromNow();

    return (
      <div className={classNames}>
        <div className="feed-item-header emerald">{timeAgo}</div>
        <div className="feed-item-body" style={bodyStyle}>
          <div className="shadow">
            <ReactSwipe slideToIndex={slideToIndex} callback={this.onSwipeIndexChanged} continuous={false}>
              <div className="feed-item-swipe-body">
                <div className="feed-item-content title">{this.props.title}</div>
              </div>
              <div className="feed-item-swipe-body">
                <div className="feed-item-content">
                  <p>Do you want to remove this item from your feed?</p>
                  <div className="btn-row">
                    <button onClick={this.cancelContext} className="btn btn-cancel">Cancel</button>
                    <button onClick={this.removeFromFeed} className="btn btn-danger">Remove</button>
                  </div>
                </div>
              </div>
            </ReactSwipe>
          </div>
        </div>
        <div className="feed-item-footer emerald">Season {this.props.season}, Episode {this.props.episode}</div>
      </div>
    );
  }

});

export default FeedItem;
