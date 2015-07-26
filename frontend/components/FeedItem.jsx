'use strict';

import React from 'react/addons';
import moment from 'moment';
import LazyRenderMixin from 'react-lazyrender-mixin';

var FeedItem = React.createClass({
  mixins: [ LazyRenderMixin ],

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
    image: React.PropTypes.string.isRequired,
    firstAired: React.PropTypes.number,
    timestamp: React.PropTypes.number.isRequired
  },

  render () {
    var localStyle = {
      backgroundImage: ('url(' + this.props.image + ')')
    };

    var ts = +this.props.timestamp || +this.props.firstAired;
    var timeAgo = moment(ts).fromNow();

    return (
      <div className="feed-item">
        <div className="feed-item-header emerald">{timeAgo}</div>
        <div className="feed-item-body" style={localStyle}>
          <div className="shadow">
            <div className="title">{this.props.title}</div>
          </div>
        </div>
        <div className="feed-item-footer emerald">Season {this.props.season}, Episode {this.props.episode}</div>
      </div>
    );
  }

});

export default FeedItem;
