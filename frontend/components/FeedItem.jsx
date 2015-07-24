'use strict';

import React from 'react/addons';
import moment from 'moment';

var FeedItem = React.createClass({
  render () {
    var localStyle = {
      backgroundImage: ('url(' + this.props.image + ')')
    };

    var ts = +this.props.timestamp || +this.props.first_aired;
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
      </div>);
  }

});

export default FeedItem;
