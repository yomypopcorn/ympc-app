'use strict';

import moment from 'moment';
import React from 'react/addons';
import Router from 'react-router';

import Routes from './Routes';

if ( process.env.NODE_ENV !== 'production' ) {
  window.React = React;
}

React.render(Routes, document.getElementById('app'));
