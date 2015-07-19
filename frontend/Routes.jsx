'use strict';

import React from 'react/addons';
import {Route, NotFoundRoute, DefaultRoute} from 'react-router';

import App from './components/App';
import Feed from './components/Feed';
import ShowsSubscriptions from './components/ShowsSubscriptions';
import ShowsSearch from './components/ShowsSearch';
import NotFound from './components/NotFound';

export default (
  <Route handler={App} path='/'>

    <Route name='feed' path='/feed' handler={Feed} />
    <Route name='subscriptions' path='/shows'>
      <DefaultRoute handler={ShowsSubscriptions} />
      <Route name='showssearch' path='/shows/search' handler={ShowsSearch} />
    </Route>
    <NotFoundRoute handler={NotFound} />

  </Route>
);
