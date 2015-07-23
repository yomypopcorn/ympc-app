'use strict';

import React from 'react/addons';
import {NotFoundRoute, DefaultRoute} from 'react-router';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

import App from './components/App';
import Feed from './components/Feed';
import ShowsSubscriptions from './components/ShowsSubscriptions';
import ShowsSearch from './components/ShowsSearch';
import NotFound from './components/NotFound';

export default (
  <Router history={history}>
    <Route component={App} path='/'>

      <Route path='feed' component={Feed} />
      <Route path='shows' component={ShowsSubscriptions} />
      <Route path='shows/search' component={ShowsSearch} />
      <Route name='notfound' path='*' component={NotFound} />

    </Route>
  </Router>
);
