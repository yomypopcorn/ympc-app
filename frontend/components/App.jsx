'use strict';

import React from 'react/addons';
import {Link, State} from 'react-router';

import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';
import ShowsActions from '../actions/ShowsActions';
import FeedActions from '../actions/FeedActions';

var App = React.createClass({

  mixins: [ State ],

  componentWillMount () {
    LoginActions.updateCredentials({
      username: this.props.location.query.username,
      token: this.props.location.query.token
    });
  },

  componentDidMount () {
    ShowsActions.fetchShows();
    FeedActions.fetchFeed();
  },

  render () {
    return (
      <div>
        <div className="tabs">
          <Link to="/feed" className="tab" activeClassName="is-active" query={this.props.location.query}>Feed</Link>
          <Link to="/shows" className="tab" activeClassName="is-active" query={this.props.location.query}>Shows</Link>
        </div>
        {this.props.children}
      </div>
    );
  }

});

export default App;
