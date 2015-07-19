'use strict';

import React from 'react/addons';
import {Link, RouteHandler} from 'react-router';

import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';
import ShowsActions from '../actions/ShowsActions';

var App = React.createClass({

  componentWillMount () {
    LoginActions.updateCredentials({
      username: this.props.query.username,
      token: this.props.query.token
    });
  },

  componentDidMount () {
    ShowsActions.fetchShows();
  },

  render () {
    return (
      <div>
        <div className="tabs">
          <Link to="feed" className="tab" activeClassName="is-active" query={this.props.query}>Feed</Link>
          <Link to="subscriptions" className="tab" activeClassName="is-active" query={this.props.query}>Shows</Link>
        </div>
        <RouteHandler params={this.props.params}
                      query={this.props.query} />
      </div>
    );
  }

});

export default App;
