'use strict';

import moment from 'moment';
import React from 'react/addons';
import Router from 'react-router';

import routes from './Routes';

if ( process.env.NODE_ENV !== 'production' ) {
  window.React = React;
}

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler params={state.params} query={state.query} />, document.getElementById('app'));
});
