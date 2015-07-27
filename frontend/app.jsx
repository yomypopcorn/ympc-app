'use strict';

var secureUrl = location.pathname + location.search.replace(/&token=[^&]+(&?)/, '$1')
history.pushState('', '', secureUrl);

import moment from 'moment';
import React from 'react/addons';
import Router from 'react-router';

import Routes from './Routes';

if ( process.env.NODE_ENV !== 'production' ) {
  window.React = React;
}

React.render(Routes, document.getElementById('app'));
