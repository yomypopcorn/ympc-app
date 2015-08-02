(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactRouter = require('react-router');

var _reactRouterLibBrowserHistory = require('react-router/lib/BrowserHistory');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsFeed = require('./components/Feed');

var _componentsFeed2 = _interopRequireDefault(_componentsFeed);

var _componentsShowsSubscriptions = require('./components/ShowsSubscriptions');

var _componentsShowsSubscriptions2 = _interopRequireDefault(_componentsShowsSubscriptions);

var _componentsShowsSearch = require('./components/ShowsSearch');

var _componentsShowsSearch2 = _interopRequireDefault(_componentsShowsSearch);

var _componentsNotFound = require('./components/NotFound');

var _componentsNotFound2 = _interopRequireDefault(_componentsNotFound);

exports['default'] = _reactAddons2['default'].createElement(
  _reactRouter.Router,
  { history: _reactRouterLibBrowserHistory.history },
  _reactAddons2['default'].createElement(
    _reactRouter.Route,
    { component: _componentsApp2['default'], path: '/' },
    _reactAddons2['default'].createElement(_reactRouter.Route, { path: 'feed', component: _componentsFeed2['default'] }),
    _reactAddons2['default'].createElement(_reactRouter.Route, { path: 'shows', component: _componentsShowsSubscriptions2['default'] }),
    _reactAddons2['default'].createElement(_reactRouter.Route, { path: 'shows/search', component: _componentsShowsSearch2['default'] }),
    _reactAddons2['default'].createElement(_reactRouter.Route, { name: 'notfound', path: '*', component: _componentsNotFound2['default'] })
  )
);
module.exports = exports['default'];

},{"./components/App":7,"./components/Feed":8,"./components/NotFound":10,"./components/ShowsSearch":12,"./components/ShowsSubscriptions":14,"react-router":45,"react-router/lib/BrowserHistory":25,"react/addons":"react/addons"}],2:[function(require,module,exports){

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _sourcesFeedSource = require('../sources/FeedSource');

var _sourcesFeedSource2 = _interopRequireDefault(_sourcesFeedSource);

var FeedActions = (function () {
  function FeedActions() {
    _classCallCheck(this, FeedActions);
  }

  _createClass(FeedActions, [{
    key: 'updateFeed',
    value: function updateFeed(feed) {
      this.dispatch(feed);
    }
  }, {
    key: 'feedFailed',
    value: function feedFailed(err) {
      this.dispatch(err);
    }
  }, {
    key: 'fetchFeed',
    value: function fetchFeed() {
      var _this = this;

      this.dispatch();

      _sourcesFeedSource2['default'].fetch().then(function (shows) {
        _this.actions.updateFeed(shows);
      })['catch'](function (err) {
        _this.actions.feedFailed(err);
      });
    }
  }]);

  return FeedActions;
})();

exports['default'] = _alt2['default'].createActions(FeedActions);
module.exports = exports['default'];

},{"../alt":5,"../sources/FeedSource":18}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var LoginActions = (function () {
  function LoginActions() {
    _classCallCheck(this, LoginActions);
  }

  _createClass(LoginActions, [{
    key: 'updateCredentials',
    value: function updateCredentials(credentials) {
      this.dispatch(credentials);
    }
  }]);

  return LoginActions;
})();

exports['default'] = _alt2['default'].createActions(LoginActions);
module.exports = exports['default'];

},{"../alt":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _sourcesShowsSource = require('../sources/ShowsSource');

var _sourcesShowsSource2 = _interopRequireDefault(_sourcesShowsSource);

var ShowsActions = (function () {
  function ShowsActions() {
    _classCallCheck(this, ShowsActions);
  }

  _createClass(ShowsActions, [{
    key: 'updateShows',
    value: function updateShows(shows) {
      this.dispatch(shows);
    }
  }, {
    key: 'showsFailed',
    value: function showsFailed(err) {
      this.dispatch(err);
    }
  }, {
    key: 'subscribeShow',
    value: function subscribeShow(showId) {
      this.dispatch(showId);
      _sourcesShowsSource2['default'].subscribeShow(showId);
    }
  }, {
    key: 'unsubscribeShow',
    value: function unsubscribeShow(showId) {
      this.dispatch(showId);
      _sourcesShowsSource2['default'].unsubscribeShow(showId);
    }
  }, {
    key: 'search',
    value: function search(text) {
      this.dispatch(text);
    }
  }, {
    key: 'fetchShows',
    value: function fetchShows() {
      var _this = this;

      this.dispatch();

      _sourcesShowsSource2['default'].fetch().then(function (shows) {
        _this.actions.updateShows(shows);
      })['catch'](function (err) {
        _this.actions.showsFailed(err);
      });
    }
  }]);

  return ShowsActions;
})();

exports['default'] = _alt2['default'].createActions(ShowsActions);
module.exports = exports['default'];

},{"../alt":5,"../sources/ShowsSource":19}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

var alt = new _alt2['default']();

exports['default'] = alt;
module.exports = exports['default'];

},{"alt":"alt"}],6:[function(require,module,exports){
(function (process){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _Routes = require('./Routes');

var _Routes2 = _interopRequireDefault(_Routes);

if (process.env.NODE_ENV !== 'production') {
  window.React = _reactAddons2['default'];
}

_reactAddons2['default'].render(_Routes2['default'], document.getElementById('app'));

}).call(this,require('_process'))

},{"./Routes":1,"_process":23,"moment":"moment","react-router":45,"react/addons":"react/addons"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactRouter = require('react-router');

var _storesLoginStore = require('../stores/LoginStore');

var _storesLoginStore2 = _interopRequireDefault(_storesLoginStore);

var _actionsLoginActions = require('../actions/LoginActions');

var _actionsLoginActions2 = _interopRequireDefault(_actionsLoginActions);

var _actionsShowsActions = require('../actions/ShowsActions');

var _actionsShowsActions2 = _interopRequireDefault(_actionsShowsActions);

var _actionsFeedActions = require('../actions/FeedActions');

var _actionsFeedActions2 = _interopRequireDefault(_actionsFeedActions);

var App = _reactAddons2['default'].createClass({
  displayName: 'App',

  mixins: [_reactRouter.State],

  componentWillMount: function componentWillMount() {
    _actionsLoginActions2['default'].updateCredentials({
      username: this.props.location.query.username,
      token: this.props.location.query.token
    });
  },

  componentDidMount: function componentDidMount() {
    _actionsShowsActions2['default'].fetchShows();
    _actionsFeedActions2['default'].fetchFeed();
  },

  render: function render() {
    return _reactAddons2['default'].createElement(
      'div',
      null,
      _reactAddons2['default'].createElement(
        'div',
        { className: "tabs" },
        _reactAddons2['default'].createElement(
          _reactRouter.Link,
          { to: "/feed", className: "tab", activeClassName: "is-active", query: this.props.location.query },
          'Feed'
        ),
        _reactAddons2['default'].createElement(
          _reactRouter.Link,
          { to: "/shows", className: "tab", activeClassName: "is-active", query: this.props.location.query },
          'Shows'
        )
      ),
      this.props.children
    );
  }

});

exports['default'] = App;
module.exports = exports['default'];

},{"../actions/FeedActions":2,"../actions/LoginActions":3,"../actions/ShowsActions":4,"../stores/LoginStore":21,"react-router":45,"react/addons":"react/addons"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactRouter = require('react-router');

var _storesFeedStore = require('../stores/FeedStore');

var _storesFeedStore2 = _interopRequireDefault(_storesFeedStore);

var _actionsFeedActions = require('../actions/FeedActions');

var _actionsFeedActions2 = _interopRequireDefault(_actionsFeedActions);

var _FeedItem = require('./FeedItem');

var _FeedItem2 = _interopRequireDefault(_FeedItem);

var Feed = _reactAddons2['default'].createClass({
  displayName: 'Feed',

  getInitialState: function getInitialState() {
    return _storesFeedStore2['default'].getState();
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return !_immutable2['default'].is(nextState.feed, this.state.feed);
  },

  componentDidMount: function componentDidMount() {
    _storesFeedStore2['default'].listen(this.onChange);
    _actionsFeedActions2['default'].fetchFeed();
  },

  componentWillUnmount: function componentWillUnmount() {
    _storesFeedStore2['default'].unlisten(this.onChange);
  },

  onChange: function onChange(state) {
    this.setState(state);
  },

  render: function render() {
    var feed = this.state.feed;

    var feedItemList = feed.map(function (item) {
      return _reactAddons2['default'].createElement(_FeedItem2['default'], {
        key: item.get('show_id') + '-' + item.get('sien'),
        showId: item.get('show_id'),
        imdbId: item.get('imdb_id'),
        title: item.get('title'),
        episodeTitle: item.get('episode_title'),
        season: item.get('season'),
        episode: item.get('episode'),
        image: item.getPosterThumb(),
        firstAired: item.get('first_aired'),
        timestamp: item.get('timestamp') });
    });

    var emptyState = null;
    if (!feedItemList.size) {
      emptyState = _reactAddons2['default'].createElement(
        'div',
        { className: "empty-state" },
        'Nothing here yet.',
        _reactAddons2['default'].createElement('br', null),
        _reactAddons2['default'].createElement(
          _reactRouter.Link,
          { to: "/shows/search", query: this.props.location.query },
          'Subscribe to some shows'
        )
      );
    }

    return _reactAddons2['default'].createElement(
      'div',
      null,
      emptyState,
      feedItemList
    );
  }

});

exports['default'] = Feed;
module.exports = exports['default'];

},{"../actions/FeedActions":2,"../stores/FeedStore":20,"./FeedItem":9,"immutable":"immutable","react-router":45,"react/addons":"react/addons"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactLazyrenderMixin = require('react-lazyrender-mixin');

var _reactLazyrenderMixin2 = _interopRequireDefault(_reactLazyrenderMixin);

var FeedItem = _reactAddons2['default'].createClass({
  displayName: 'FeedItem',

  mixins: [_reactLazyrenderMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      placeholderClassName: 'feed-item-placeholder'
    };
  },

  propTypes: {
    showId: _reactAddons2['default'].PropTypes.string.isRequired,
    imdbId: _reactAddons2['default'].PropTypes.string,
    title: _reactAddons2['default'].PropTypes.string.isRequired,
    episodeTitle: _reactAddons2['default'].PropTypes.string,
    season: _reactAddons2['default'].PropTypes.number.isRequired,
    episode: _reactAddons2['default'].PropTypes.number.isRequired,
    image: _reactAddons2['default'].PropTypes.string.isRequired,
    firstAired: _reactAddons2['default'].PropTypes.number,
    timestamp: _reactAddons2['default'].PropTypes.number.isRequired
  },

  render: function render() {
    var localStyle = {
      backgroundImage: 'url(' + this.props.image + ')'
    };

    var ts = +this.props.timestamp || +this.props.firstAired;
    var timeAgo = (0, _moment2['default'])(ts).fromNow();

    return _reactAddons2['default'].createElement(
      'div',
      { className: "feed-item" },
      _reactAddons2['default'].createElement(
        'div',
        { className: "feed-item-header emerald" },
        timeAgo
      ),
      _reactAddons2['default'].createElement(
        'div',
        { className: "feed-item-body", style: localStyle },
        _reactAddons2['default'].createElement(
          'div',
          { className: "shadow" },
          _reactAddons2['default'].createElement(
            'div',
            { className: "title" },
            this.props.title
          )
        )
      ),
      _reactAddons2['default'].createElement(
        'div',
        { className: "feed-item-footer emerald" },
        'Season ',
        this.props.season,
        ', Episode ',
        this.props.episode
      )
    );
  }

});

exports['default'] = FeedItem;
module.exports = exports['default'];

},{"moment":"moment","react-lazyrender-mixin":"react-lazyrender-mixin","react/addons":"react/addons"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var NotFound = _reactAddons2['default'].createClass({
  displayName: 'NotFound',

  render: function render() {
    return _reactAddons2['default'].createElement(
      'div',
      null,
      'NotFound'
    );
  }

});

exports['default'] = NotFound;
module.exports = exports['default'];

},{"react/addons":"react/addons"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _actionsShowsActions = require('../actions/ShowsActions');

var _actionsShowsActions2 = _interopRequireDefault(_actionsShowsActions);

var ShowsListItem = _reactAddons2['default'].createClass({
  displayName: 'ShowsListItem',

  propTypes: {
    id: _reactAddons2['default'].PropTypes.string.isRequired,
    imdbId: _reactAddons2['default'].PropTypes.string,
    title: _reactAddons2['default'].PropTypes.string.isRequired,
    color: _reactAddons2['default'].PropTypes.string,
    rating: _reactAddons2['default'].PropTypes.number,
    isSubscribed: _reactAddons2['default'].PropTypes.bool,
    onSubscriptionChanged: _reactAddons2['default'].PropTypes.func
  },

  handleButtonClick: function handleButtonClick() {
    if (!this.props.isSubscribed) {
      _actionsShowsActions2['default'].subscribeShow(this.props.id);
    } else {
      _actionsShowsActions2['default'].unsubscribeShow(this.props.id);
    }

    if (this.props.onSubscriptionChanged) {
      this.props.onSubscriptionChanged();
    }
  },

  render: function render() {
    var className = ['list-item', this.props.color, this.props.color ? 'no-border' : ''].join(' ');

    var btn = this.props.isSubscribed ? _reactAddons2['default'].createElement(
      'div',
      { className: "btn" },
      'Unsubscribe'
    ) : _reactAddons2['default'].createElement(
      'div',
      { className: "btn" },
      'Subscribe'
    );

    return _reactAddons2['default'].createElement(
      'div',
      { className: className },
      _reactAddons2['default'].createElement(
        'div',
        { className: "list-item-title" },
        this.props.title
      ),
      _reactAddons2['default'].createElement(
        'div',
        { className: "list-item-end", onClick: this.handleButtonClick },
        btn
      )
    );
  }

});

exports['default'] = ShowsListItem;
module.exports = exports['default'];

},{"../actions/ShowsActions":4,"react/addons":"react/addons"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactRouter = require('react-router');

var _storesShowsStore = require('../stores/ShowsStore');

var _storesShowsStore2 = _interopRequireDefault(_storesShowsStore);

var _actionsShowsActions = require('../actions/ShowsActions');

var _actionsShowsActions2 = _interopRequireDefault(_actionsShowsActions);

var _ShowsListItem = require('./ShowsListItem');

var _ShowsListItem2 = _interopRequireDefault(_ShowsListItem);

var _ShowsSearchInput = require('./ShowsSearchInput');

var _ShowsSearchInput2 = _interopRequireDefault(_ShowsSearchInput);

var Shows = _reactAddons2['default'].createClass({
  displayName: 'Shows',

  mixins: [_reactRouter.Navigation],

  getInitialState: function getInitialState() {
    return _storesShowsStore2['default'].getState();
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return !_immutable2['default'].is(nextState.searchResults, this.state.searchResults);
  },

  componentDidMount: function componentDidMount() {
    _storesShowsStore2['default'].listen(this.onChange);
    _actionsShowsActions2['default'].search('');
  },

  componentWillUnmount: function componentWillUnmount() {
    _storesShowsStore2['default'].unlisten(this.onChange);
  },

  onChange: function onChange(state) {
    this.setState(state);
  },

  cancelSearch: function cancelSearch() {
    this.goToSubscriptions();
  },

  goToSubscriptions: function goToSubscriptions() {
    this.transitionTo('/shows', this.props.location.query);
  },

  render: function render() {
    var _this = this;

    var shows = this.state.searchResults;

    var showsList = shows.map(function (show) {
      return _reactAddons2['default'].createElement(_ShowsListItem2['default'], {
        key: show.get('id'),
        id: show.get('id'),
        imdbId: show.get('imdb_id'),
        title: show.get('title'),
        rating: show.get('rating'),
        isSubscribed: show.get('isSubscribed'),
        onSubscriptionChanged: _this.goToSubscriptions });
    }).toList();

    var emptyState = null;
    if (!this.state.shows.size) {
      emptyState = _reactAddons2['default'].createElement(
        'div',
        { className: "empty-state" },
        'Uhm..shows are still loading...'
      );
    }

    var noResultsState = null;
    if (!showsList.size) {
      noResultsState = _reactAddons2['default'].createElement(
        'div',
        { className: "empty-state" },
        'Found nothing. Try searching something else.'
      );
    }

    return _reactAddons2['default'].createElement(
      'div',
      null,
      _reactAddons2['default'].createElement(_ShowsSearchInput2['default'], { onCancel: this.cancelSearch }),
      emptyState || noResultsState || showsList
    );
  }

});

exports['default'] = Shows;
module.exports = exports['default'];

},{"../actions/ShowsActions":4,"../stores/ShowsStore":22,"./ShowsListItem":11,"./ShowsSearchInput":13,"immutable":"immutable","react-router":45,"react/addons":"react/addons"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _actionsShowsActions = require('../actions/ShowsActions');

var _actionsShowsActions2 = _interopRequireDefault(_actionsShowsActions);

var ShowsSearchInput = _reactAddons2['default'].createClass({
  displayName: 'ShowsSearchInput',

  getInitialState: function getInitialState() {
    return { value: '' };
  },

  search: function search(text) {
    _actionsShowsActions2['default'].search(text);
  },

  render: function render() {
    var _this = this;

    var cancel = _reactAddons2['default'].createElement(
      'div',
      { className: "search-cancel", onClick: this.props.onCancel },
      '×'
    );

    return _reactAddons2['default'].createElement(
      'div',
      { className: "search-input" },
      cancel,
      _reactAddons2['default'].createElement('input', {
        ref: "searchInput",
        className: "input-search",
        type: "search",
        placeholder: "Search shows",
        autoFocus: true,
        onChange: function (ev) {
          return _this.search(ev.target.value);
        } })
    );
  }

});

exports['default'] = ShowsSearchInput;
module.exports = exports['default'];

},{"../actions/ShowsActions":4,"react/addons":"react/addons"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactRouter = require('react-router');

var _storesShowsStore = require('../stores/ShowsStore');

var _storesShowsStore2 = _interopRequireDefault(_storesShowsStore);

var _actionsShowsActions = require('../actions/ShowsActions');

var _actionsShowsActions2 = _interopRequireDefault(_actionsShowsActions);

var _ShowsListItem = require('./ShowsListItem');

var _ShowsListItem2 = _interopRequireDefault(_ShowsListItem);

var _ShowsSearchInput = require('./ShowsSearchInput');

var _ShowsSearchInput2 = _interopRequireDefault(_ShowsSearchInput);

var ReactCSSTransitionGroup = _reactAddons2['default'].addons.CSSTransitionGroup;

var ShowsSubscriptions = _reactAddons2['default'].createClass({
  displayName: 'ShowsSubscriptions',

  getInitialState: function getInitialState() {
    return _storesShowsStore2['default'].getState();
  },

  componentDidMount: function componentDidMount() {
    _storesShowsStore2['default'].listen(this.onChange);
  },

  componentWillUnmount: function componentWillUnmount() {
    _storesShowsStore2['default'].unlisten(this.onChange);
  },

  onChange: function onChange(state) {
    this.setState(state);
  },

  render: function render() {

    var shows = this.state.shows;

    shows = shows.filter(function (show) {
      return show.get('isSubscribed');
    });

    var showsList = shows.map(function (show) {
      return _reactAddons2['default'].createElement(_ShowsListItem2['default'], {
        key: show.get('id'),
        id: show.get('id'),
        imdbId: show.get('imdb_id'),
        title: show.get('title'),
        rating: show.get('rating'),
        color: show.getColor(),
        isSubscribed: show.get('isSubscribed') });
    }).toList();

    var emptyState = null;
    if (!showsList.size) {
      emptyState = _reactAddons2['default'].createElement(
        'div',
        { className: "empty-state" },
        'Get started by adding your favorite shows. Tap below!'
      );
    }

    var addText = showsList.size ? '+ Add more shows' : '+ Add your first show';

    var addLink = _reactAddons2['default'].createElement(
      _reactRouter.Link,
      { to: "/shows/search", query: this.props.location.query, className: "list-btn list-item" },
      addText
    );

    var topAddLink = showsList.size >= 10 ? addLink : '';

    return _reactAddons2['default'].createElement(
      'div',
      null,
      emptyState,
      _reactAddons2['default'].createElement(
        ReactCSSTransitionGroup,
        {
          component: "div",
          transitionName: "add-link" },
        topAddLink
      ),
      _reactAddons2['default'].createElement(
        ReactCSSTransitionGroup,
        {
          component: "div",
          transitionName: "list-item-remove" },
        showsList
      ),
      addLink
    );
  }

});

exports['default'] = ShowsSubscriptions;
module.exports = exports['default'];

},{"../actions/ShowsActions":4,"../stores/ShowsStore":22,"./ShowsListItem":11,"./ShowsSearchInput":13,"react-router":45,"react/addons":"react/addons"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  apiBaseUrl: '/api'
};
module.exports = exports['default'];

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _immutable = require('immutable');

var defaults = {
  show_id: null,
  imdb_id: null,
  title: '',
  episode_title: '',
  sien: 0,
  season: 0,
  episode: 0,
  poster: 'http://i.imgur.com/MNe2X.gif',
  first_aired: null,
  timestamp: null
};

var FeedItemRecord = (function (_Record) {
  _inherits(FeedItemRecord, _Record);

  function FeedItemRecord() {
    _classCallCheck(this, FeedItemRecord);

    _get(Object.getPrototypeOf(FeedItemRecord.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FeedItemRecord, [{
    key: 'getPosterThumb',
    value: function getPosterThumb() {
      if (this.poster.indexOf('original') === -1) {
        return this.poster;
      }

      return this.poster.replace('original', 'thumb');
    }
  }, {
    key: 'getPosterMedium',
    value: function getPosterMedium() {
      if (this.poster.indexOf('original') === -1) {
        return this.poster;
      }

      return this.poster.replace('original', 'medium');
    }
  }]);

  return FeedItemRecord;
})((0, _immutable.Record)(defaults));

;

exports['default'] = FeedItemRecord;
module.exports = exports['default'];

},{"immutable":"immutable"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _immutable = require('immutable');

var colorNames = ['turquoise', 'emerald', 'peter', 'asphalt', 'green', 'sunflower', 'belize', 'alizarin'];

// Use amethyst and wisteria only for ui and background
function getColorIndex() {
  var idx = typeof localStorage.getItem('currentColorIndex') !== 'undefined' ? +localStorage.getItem('currentColorIndex') : 0;

  localStorage.setItem('currentColorIndex', (idx + 1) % colorNames.length);

  return idx;
}

var currentColorIndex = +localStorage.getItem('currentColorIndex') || 0;

function _getColor(showId) {
  var colorKey = 'show:' + showId + ':color';
  var color = localStorage.getItem(colorKey);

  if (!color) {
    color = colorNames[getColorIndex()];
    localStorage.setItem(colorKey, color);
  }

  return color;
}

var defaults = {
  id: null,
  imdb_id: null,
  title: '',
  isSubscribed: false,
  rating: 0
};

var ShowRecord = (function (_Record) {
  _inherits(ShowRecord, _Record);

  function ShowRecord() {
    _classCallCheck(this, ShowRecord);

    _get(Object.getPrototypeOf(ShowRecord.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ShowRecord, [{
    key: 'getColor',
    value: function getColor() {
      if (!this.isSubscribed) {
        return null;
      }
      return _getColor(this.imdb_id);
    }
  }]);

  return ShowRecord;
})((0, _immutable.Record)(defaults));

;

exports['default'] = ShowRecord;
module.exports = exports['default'];

},{"immutable":"immutable"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _storesLoginStore = require('../stores/LoginStore');

var _storesLoginStore2 = _interopRequireDefault(_storesLoginStore);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var apiBase = _config2['default'].apiBaseUrl;

var FeedSource = {

  fetch: function fetch() {
    var credentials = _storesLoginStore2['default'].getState();

    return _axios2['default'].get(apiBase + '/users/' + credentials.username + '/feed?token=' + credentials.token).then(function (response) {
      return response.data;
    });
  }

};

exports['default'] = FeedSource;
module.exports = exports['default'];

},{"../config":15,"../stores/LoginStore":21,"axios":"axios"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _storesLoginStore = require('../stores/LoginStore');

var _storesLoginStore2 = _interopRequireDefault(_storesLoginStore);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var apiBase = _config2['default'].apiBaseUrl;

var ShowsSource = {

  fetch: function fetch() {
    return new Promise(function (resolve, reject) {
      function getAllShows() {
        return _axios2['default'].get(apiBase + '/shows?compact=1').then(function (response) {
          return response.data;
        });
      }

      function getSubscribedShows() {
        var credentials = _storesLoginStore2['default'].getState();

        return _axios2['default'].get(apiBase + '/users/' + credentials.username + '/shows?compact=1&token=' + credentials.token).then(function (response) {
          return response.data;
        });
      }

      _axios2['default'].all([getAllShows(), getSubscribedShows()]).then(_axios2['default'].spread(function (shows, subscriptions) {
        subscriptions = subscriptions.reduce(function (subscriptions, show) {
          subscriptions[show.id] = true;
          return subscriptions;
        }, {});

        shows = shows.map(function (show) {
          show.isSubscribed = subscriptions[show.id] === true;
          return show;
        });

        shows.sort(function (a, b) {
          return b.rating - a.rating;
        });

        resolve(shows);
      }));
    });
  },

  subscribeShow: function subscribeShow(showId) {
    var credentials = _storesLoginStore2['default'].getState();
    return _axios2['default'].post(apiBase + '/users/' + credentials.username + '/shows?token=' + credentials.token, {
      show_id: showId
    }).then(function (response) {
      return response.data;
    });
  },

  unsubscribeShow: function unsubscribeShow(showId) {
    var credentials = _storesLoginStore2['default'].getState();
    return _axios2['default']['delete'](apiBase + '/users/' + credentials.username + '/shows/' + showId + '?token=' + credentials.token).then(function (response) {
      return response.data;
    });
  }

};

exports['default'] = ShowsSource;
module.exports = exports['default'];

},{"../config":15,"../stores/LoginStore":21,"axios":"axios"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _actionsFeedActions = require('../actions/FeedActions');

var _actionsFeedActions2 = _interopRequireDefault(_actionsFeedActions);

var _recordsFeedItemRecord = require('../records/FeedItemRecord');

var _recordsFeedItemRecord2 = _interopRequireDefault(_recordsFeedItemRecord);

var FeedStore = (function () {
  function FeedStore() {
    _classCallCheck(this, FeedStore);

    this.feed = _immutable2['default'].Set();

    this.bindListeners({
      handleUpdateFeed: _actionsFeedActions2['default'].UPDATE_FEED,
      handleFetchFeed: _actionsFeedActions2['default'].FETCH_FEED,
      handleFeedFailed: _actionsFeedActions2['default'].FEED_FAILED
    });
  }

  _createClass(FeedStore, [{
    key: 'handleUpdateFeed',
    value: function handleUpdateFeed(feed) {
      this.feed = _immutable2['default'].fromJS(feed, function (key, value) {
        if (value.get('show_id')) {
          return new _recordsFeedItemRecord2['default'](value);
        }
        return value.toSet();
      }).sortBy(function (item) {
        return item.get('timestamp');
      }).reverse();
    }
  }, {
    key: 'handleFetchFeed',
    value: function handleFetchFeed() {
      if (this.feed.size) {
        return;
      }
      this.feed = _immutable2['default'].Set();
    }
  }, {
    key: 'handleFeedFailed',
    value: function handleFeedFailed(err) {
      console.log(err);
    }
  }]);

  return FeedStore;
})();

exports['default'] = _alt2['default'].createStore(FeedStore, 'FeedStore');
module.exports = exports['default'];

},{"../actions/FeedActions":2,"../alt":5,"../records/FeedItemRecord":16,"immutable":"immutable","react/addons":"react/addons"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsLoginActions = require('../actions/LoginActions');

var _actionsLoginActions2 = _interopRequireDefault(_actionsLoginActions);

var LoginStore = (function () {
  function LoginStore() {
    _classCallCheck(this, LoginStore);

    this.username = '';
    this.token = '';

    this.bindListeners({
      handleUpdateCredentials: _actionsLoginActions2['default'].UPDATE_CREDENTIALS
    });
  }

  _createClass(LoginStore, [{
    key: 'handleUpdateCredentials',
    value: function handleUpdateCredentials(credentials) {
      this.username = credentials.username;
      this.token = credentials.token;
    }
  }]);

  return LoginStore;
})();

exports['default'] = _alt2['default'].createStore(LoginStore, 'LoginStore');
module.exports = exports['default'];

},{"../actions/LoginActions":3,"../alt":5}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _actionsShowsActions = require('../actions/ShowsActions');

var _actionsShowsActions2 = _interopRequireDefault(_actionsShowsActions);

var _recordsShowRecord = require('../records/ShowRecord');

var _recordsShowRecord2 = _interopRequireDefault(_recordsShowRecord);

var ShowsStore = (function () {
  function ShowsStore() {
    _classCallCheck(this, ShowsStore);

    this.search = '';
    this.shows = _immutable2['default'].Map({});
    this.searchResults = _immutable2['default'].Map({});

    this.bindListeners({
      handleUpdateShows: _actionsShowsActions2['default'].UPDATE_SHOWS,
      handleFetchShows: _actionsShowsActions2['default'].FETCH_SHOWS,
      handleShowsFailed: _actionsShowsActions2['default'].SHOWS_FAILED,
      handleSearch: _actionsShowsActions2['default'].SEARCH,
      handleSubscribeShow: _actionsShowsActions2['default'].SUBSCRIBE_SHOW,
      handleUnsubscribeShow: _actionsShowsActions2['default'].UNSUBSCRIBE_SHOW
    });
  }

  _createClass(ShowsStore, [{
    key: 'updateSearchResults',
    value: function updateSearchResults() {
      if (!this.search) {
        this.searchResults = this.shows;
        return;
      }

      var filter = ('' + this.search).toLowerCase().replace(/[^a-z0-9]/g, '');

      this.searchResults = this.shows.filter(function (show) {
        var showName = ('' + show.get('title')).toLowerCase().replace(/[^a-z0-9]/g, '');
        return showName.indexOf(filter) !== -1;
      });
    }
  }, {
    key: 'handleUpdateShows',
    value: function handleUpdateShows(shows) {
      shows = shows.reduce(function (shows, show) {
        shows[show.id] = show;
        return shows;
      }, {});

      this.shows = _immutable2['default'].fromJS(shows, function (key, value) {
        if (value.get('id')) {
          return new _recordsShowRecord2['default'](value);
        }
        return value.toMap();
      }).sort(function (a, b) {
        return b.get('rating') - a.get('rating');
      });

      this.updateSearchResults();
    }
  }, {
    key: 'handleFetchShows',
    value: function handleFetchShows() {
      this.shows = _immutable2['default'].Map({});
    }
  }, {
    key: 'handleShowsFailed',
    value: function handleShowsFailed(err) {
      console.log(err);
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(text) {
      this.search = text;
      this.updateSearchResults();
    }
  }, {
    key: 'handleSubscribeShow',
    value: function handleSubscribeShow(showId) {
      this.shows = this.shows.setIn([showId, 'isSubscribed'], true);
      this.updateSearchResults();
    }
  }, {
    key: 'handleUnsubscribeShow',
    value: function handleUnsubscribeShow(showId) {
      this.shows = this.shows.setIn([showId, 'isSubscribed'], false);
      this.updateSearchResults();
    }
  }]);

  return ShowsStore;
})();

exports['default'] = _alt2['default'].createStore(ShowsStore, 'ShowsStore');
module.exports = exports['default'];

},{"../actions/ShowsActions":4,"../alt":5,"../records/ShowRecord":17,"immutable":"immutable","react/addons":"react/addons"}],23:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],24:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;
exports.mapAsync = mapAsync;
exports.hashAsync = hashAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      currentTurn += 1;
      work.call(this, currentTurn - 1, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}

function mapAsync(array, work, callback) {
  var length = array.length;
  var values = [];

  if (length === 0) return callback(null, values);

  var isDone = false;
  var doneCount = 0;

  function done(index, error, value) {
    if (isDone) return;

    if (error) {
      isDone = true;
      callback(error);
    } else {
      values[index] = value;

      isDone = ++doneCount === length;

      if (isDone) callback(null, values);
    }
  }

  array.forEach(function (item, index) {
    work(item, index, function (error, value) {
      done(index, error, value);
    });
  });
}

function hashAsync(object, work, callback) {
  var keys = Object.keys(object);

  mapAsync(keys, function (key, index, callback) {
    work(object[key], callback);
  }, function (error, valuesArray) {
    if (error) {
      callback(error);
    } else {
      var values = valuesArray.reduce(function (memo, results, index) {
        memo[keys[index]] = results;
        return memo;
      }, {});

      callback(null, values);
    }
  });
}
},{}],25:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _DOMHistory2 = require('./DOMHistory');

var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

var _DOMUtils = require('./DOMUtils');

var _NavigationTypes = require('./NavigationTypes');

var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

function updateCurrentState(extraState) {
  var state = window.history.state;

  if (state) window.history.replaceState(_extends(state, extraState), '');
}

/**
 * A history implementation for DOM environments that support the
 * HTML5 history API (pushState, replaceState, and the popstate event).
 * Provides the cleanest URLs and should always be used in browser
 * environments if possible.
 *
 * Note: BrowserHistory automatically falls back to using full page
 * refreshes if HTML5 history is not available, so URLs are always
 * the same across browsers.
 */

var BrowserHistory = (function (_DOMHistory) {
  function BrowserHistory(options) {
    _classCallCheck(this, BrowserHistory);

    _DOMHistory.call(this, options);
    this.handlePopState = this.handlePopState.bind(this);
    this.isSupported = (0, _DOMUtils.supportsHistory)();
  }

  _inherits(BrowserHistory, _DOMHistory);

  BrowserHistory.prototype._updateLocation = function _updateLocation(navigationType) {
    var state = null;

    if (this.isSupported) {
      var historyState = window.history.state;
      state = this._createState(historyState);

      if (!historyState || !historyState.key) window.history.replaceState(state, '');
    }

    this.location = this.createLocation((0, _DOMUtils.getWindowPath)(), state, navigationType);
  };

  BrowserHistory.prototype.setup = function setup() {
    if (this.location == null) this._updateLocation();
  };

  BrowserHistory.prototype.handlePopState = function handlePopState(event) {
    if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

    this._updateLocation(_NavigationTypes2['default'].POP);
    this._notifyChange();
  };

  BrowserHistory.prototype.addChangeListener = function addChangeListener(listener) {
    _DOMHistory.prototype.addChangeListener.call(this, listener);

    if (this.changeListeners.length === 1) {
      if (window.addEventListener) {
        window.addEventListener('popstate', this.handlePopState, false);
      } else {
        window.attachEvent('onpopstate', this.handlePopState);
      }
    }
  };

  BrowserHistory.prototype.removeChangeListener = function removeChangeListener(listener) {
    _DOMHistory.prototype.removeChangeListener.call(this, listener);

    if (this.changeListeners.length === 0) {
      if (window.removeEventListener) {
        window.removeEventListener('popstate', this.handlePopState, false);
      } else {
        window.detachEvent('onpopstate', this.handlePopState);
      }
    }
  };

  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-pushstate

  BrowserHistory.prototype.pushState = function pushState(state, path) {
    if (this.isSupported) {
      updateCurrentState(this.getScrollPosition());

      state = this._createState(state);

      window.history.pushState(state, '', path);
      this.location = this.createLocation(path, state, _NavigationTypes2['default'].PUSH);
      this._notifyChange();
    } else {
      window.location = path;
    }
  };

  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-replacestate

  BrowserHistory.prototype.replaceState = function replaceState(state, path) {
    if (this.isSupported) {
      state = this._createState(state);

      window.history.replaceState(state, '', path);
      this.location = this.createLocation(path, state, _NavigationTypes2['default'].REPLACE);
      this._notifyChange();
    } else {
      window.location.replace(path);
    }
  };

  return BrowserHistory;
})(_DOMHistory3['default']);

var history = new BrowserHistory();
exports.history = history;
exports['default'] = BrowserHistory;
},{"./DOMHistory":26,"./DOMUtils":27,"./NavigationTypes":32}],26:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _History2 = require('./History');

var _History3 = _interopRequireDefault(_History2);

var _DOMUtils = require('./DOMUtils');

/**
 * A history interface that assumes a DOM environment.
 */

var DOMHistory = (function (_History) {
  function DOMHistory() {
    var options = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, DOMHistory);

    _History.call(this, options);
    this.getScrollPosition = options.getScrollPosition || _DOMUtils.getWindowScrollPosition;
  }

  _inherits(DOMHistory, _History);

  DOMHistory.prototype.go = function go(n) {
    if (n === 0) return;

    window.history.go(n);
  };

  return DOMHistory;
})(_History3['default']);

exports['default'] = DOMHistory;
module.exports = exports['default'];
},{"./DOMUtils":27,"./History":28}],27:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.getWindowScrollPosition = getWindowScrollPosition;
exports.setWindowScrollPosition = setWindowScrollPosition;
exports.supportsHistory = supportsHistory;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.canUseDOM = canUseDOM;

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search;
}

function getWindowScrollPosition() {
  return {
    scrollX: window.pageXOffset || document.documentElement.scrollLeft,
    scrollY: window.pageYOffset || document.documentElement.scrollTop
  };
}

function setWindowScrollPosition(scrollX, scrollY) {
  window.scrollTo(scrollX, scrollY);
}

/**
 * taken from modernizr
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}
},{}],28:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _URLUtils = require('./URLUtils');

var _Location = require('./Location');

var _Location2 = _interopRequireDefault(_Location);

var RequiredHistorySubclassMethods = ['pushState', 'replaceState', 'go'];

function createRandomKey() {
  return Math.random().toString(36).substr(2);
}

/**
 * A history interface that normalizes the differences across
 * various environments and implementations. Requires concrete
 * subclasses to implement the following methods:
 *
 * - pushState(state, path)
 * - replaceState(state, path)
 * - go(n)
 */

var History = (function () {
  function History() {
    var options = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, History);

    RequiredHistorySubclassMethods.forEach(function (method) {
      (0, _invariant2['default'])(typeof this[method] === 'function', '%s needs a "%s" method', this.constructor.name, method);
    }, this);

    this.parseQueryString = options.parseQueryString || _URLUtils.parseQueryString;
    this.changeListeners = [];
    this.location = null;
  }

  History.prototype._notifyChange = function _notifyChange() {
    for (var i = 0, len = this.changeListeners.length; i < len; ++i) this.changeListeners[i].call(this);
  };

  History.prototype.addChangeListener = function addChangeListener(listener) {
    this.changeListeners.push(listener);
  };

  History.prototype.removeChangeListener = function removeChangeListener(listener) {
    this.changeListeners = this.changeListeners.filter(function (li) {
      return li !== listener;
    });
  };

  History.prototype.back = function back() {
    this.go(-1);
  };

  History.prototype.forward = function forward() {
    this.go(1);
  };

  History.prototype._createState = function _createState(state) {
    state = state || {};

    if (!state.key) state.key = createRandomKey();

    return state;
  };

  History.prototype.createLocation = function createLocation(path, state, navigationType) {
    var pathname = (0, _URLUtils.getPathname)(path);
    var queryString = (0, _URLUtils.getQueryString)(path);
    var query = queryString ? this.parseQueryString(queryString) : null;
    return new _Location2['default'](pathname, query, state, navigationType);
  };

  return History;
})();

exports['default'] = History;
module.exports = exports['default'];
},{"./Location":30,"./URLUtils":44,"invariant":46}],29:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _React$PropTypes = _react2['default'].PropTypes;
var object = _React$PropTypes.object;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * <Link> components are used to create an <a> element that links to a route.
 * When that route is active, the link gets an "active" class name (or the
 * value of its `activeClassName` prop).
 *
 * For example, assuming you have the following route:
 *
 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
 *
 * You could use the following component to link to that route:
 *
 *   <Link to={`/posts/${post.id}`} />
 *
 * Links may pass along query string parameters
 * using the `query` prop.
 *
 *   <Link to="/posts/123" query={{ show:true }}/>
 */
var Link = _react2['default'].createClass({
  displayName: 'Link',

  contextTypes: {
    router: object
  },

  propTypes: {
    activeStyle: object,
    activeClassName: string,
    to: string.isRequired,
    query: object,
    state: object,
    onClick: func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      activeClassName: 'active',
      style: {}
    };
  },

  handleClick: function handleClick(event) {
    var allowTransition = true;
    var clickResult;

    if (this.props.onClick) clickResult = this.props.onClick(event);

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

    if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

    event.preventDefault();

    if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.query, this.props.state);
  },

  render: function render() {
    var router = this.context.router;
    var _props = this.props;
    var to = _props.to;
    var query = _props.query;

    var props = _extends({}, this.props, {
      href: router.makeHref(to, query),
      onClick: this.handleClick
    });

    // ignore if rendered outside of the context of a router, simplifies unit testing
    if (router && router.isActive(to, query)) {
      if (props.activeClassName) props.className += props.className !== '' ? ' ' + props.activeClassName : props.activeClassName;

      if (props.activeStyle) props.style = _extends({}, props.style, props.activeStyle);
    }

    return _react2['default'].createElement('a', props);
  }

});

exports.Link = Link;
exports['default'] = Link;
},{"react":"react"}],30:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _NavigationTypes = require('./NavigationTypes');

var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

/**
 * A Location answers two important questions:
 *
 * 1. Where am I?
 * 2. How did I get here?
 */

var Location = (function () {
  function Location() {
    var pathname = arguments[0] === undefined ? '/' : arguments[0];
    var query = arguments[1] === undefined ? null : arguments[1];
    var state = arguments[2] === undefined ? null : arguments[2];
    var navigationType = arguments[3] === undefined ? _NavigationTypes2['default'].POP : arguments[3];

    _classCallCheck(this, Location);

    this.pathname = pathname;
    this.query = query;
    this.state = state;
    this.navigationType = navigationType;
  }

  Location.isLocation = function isLocation(object) {
    return object instanceof Location;
  };

  return Location;
})();

exports['default'] = Location;
module.exports = exports['default'];
},{"./NavigationTypes":32}],31:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var object = _react2['default'].PropTypes.object;

/**
 * A mixin for components that modify the URL.
 *
 * Example:
 *
 *   import { Navigation } from 'react-router';
 *
 *   var MyLink = React.createClass({
 *     mixins: [ Navigation ],
 *     handleClick(event) {
 *       event.preventDefault();
 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
 *     },
 *     render() {
 *       return (
 *         <a onClick={this.handleClick}>Click me!</a>
 *       );
 *     }
 *   });
 */
var Navigation = {

  contextTypes: {
    router: object.isRequired
  }

};

var RouterNavigationMethods = ['makePath', 'makeHref', 'transitionTo', 'replaceWith', 'go', 'goBack', 'goForward'];

RouterNavigationMethods.forEach(function (method) {
  Navigation[method] = function () {
    var router = this.context.router;
    return router[method].apply(router, arguments);
  };
});

exports['default'] = Navigation;
module.exports = exports['default'];
},{"react":"react"}],32:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

var NavigationTypes = (0, _keymirror2['default'])({

  /**
   * Indicates that navigation was caused by a call to history.push.
   */
  PUSH: null,

  /**
   * Indicates that navigation was caused by a call to history.replace.
   */
  REPLACE: null,

  /**
   * Indicates that navigation was caused by some other action such
   * as using a browser's back/forward buttons and/or manually manipulating
   * the URL in a browser's location bar. This is the default.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
   * for more information.
   */
  POP: null

});

exports['default'] = NavigationTypes;
module.exports = exports['default'];
},{"keymirror":47}],33:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Location = require('./Location');

var _Location2 = _interopRequireDefault(_Location);

var _History = require('./History');

var _History2 = _interopRequireDefault(_History);

var _React$PropTypes = _react2['default'].PropTypes;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;
var arrayOf = _React$PropTypes.arrayOf;
var instanceOf = _React$PropTypes.instanceOf;
var oneOfType = _React$PropTypes.oneOfType;
var element = _React$PropTypes.element;

function falsy(props, propName, componentName) {
  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
}

var component = func;
var components = oneOfType([component, object]);
var history = instanceOf(_History2['default']);
var location = instanceOf(_Location2['default']);
var route = oneOfType([object, element]);
var routes = oneOfType([route, arrayOf(route)]);

module.exports = {
  falsy: falsy,
  component: component,
  components: components,
  history: history,
  location: location,
  route: route,
  routes: routes
};
},{"./History":28,"./Location":30,"react":"react"}],34:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _URLUtils = require('./URLUtils');

var _PropTypes = require('./PropTypes');

var _React$PropTypes = _react2['default'].PropTypes;
var string = _React$PropTypes.string;
var object = _React$PropTypes.object;
var Redirect = _react2['default'].createClass({
  displayName: 'Redirect',

  statics: {

    createRouteFromReactElement: function createRouteFromReactElement(element) {
      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

      if (route.from) route.path = route.from;

      route.onEnter = function (nextState, transition) {
        var location = nextState.location;
        var params = nextState.params;

        var pathname = route.to ? (0, _URLUtils.formatPattern)(route.to, params) : location.pathname;

        transition.to(pathname, route.query || location.query, route.state || location.state);
      };

      return route;
    }

  },

  propTypes: {
    path: string,
    from: string, // Alias for path
    to: string.isRequired,
    query: object,
    state: object,
    onEnter: _PropTypes.falsy,
    children: _PropTypes.falsy
  },

  render: function render() {
    (0, _invariant2['default'])(false, '<Redirect> elements are for router configuration only and should not be rendered');
  }

});

exports.Redirect = Redirect;
exports['default'] = Redirect;
},{"./PropTypes":33,"./RouteUtils":36,"./URLUtils":44,"invariant":46,"react":"react"}],35:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _PropTypes = require('./PropTypes');

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _React$PropTypes = _react2['default'].PropTypes;
var string = _React$PropTypes.string;
var bool = _React$PropTypes.bool;
var func = _React$PropTypes.func;

/**
 * A <Route> is used to declare which components are rendered to the page when
 * the URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is requested,
 * the tree is searched depth-first to find a route whose path matches the URL.
 * When one is found, all routes in the tree that lead to it are considered
 * "active" and their components are rendered into the DOM, nested in the same
 * order as they are in the tree.
 */
var Route = _react2['default'].createClass({
  displayName: 'Route',

  statics: {

    createRouteFromReactElement: function createRouteFromReactElement(element) {
      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

      if (route.handler) {
        (0, _warning2['default'])(false, '<Route handler> is deprecated, use <Route component> instead');
        route.component = route.handler;
        delete route.handler;
      }

      return route;
    }

  },

  propTypes: {
    path: string,
    ignoreScrollBehavior: bool,
    handler: _PropTypes.component,
    component: _PropTypes.component,
    components: _PropTypes.components,
    getComponents: func
  },

  render: function render() {
    (0, _invariant2['default'])(false, '<Route> elements are for router configuration only and should not be rendered');
  }

});

exports.Route = Route;
exports['default'] = Route;
},{"./PropTypes":33,"./RouteUtils":36,"invariant":46,"react":"react","warning":53}],36:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isReactChildren = isReactChildren;
exports.createRouteFromReactElement = createRouteFromReactElement;
exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
exports.createRoutes = createRoutes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function isValidChild(object) {
  return object == null || (0, _react.isValidElement)(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function checkPropTypes(componentName, propTypes, props) {
  componentName = componentName || 'UnknownComponent';

  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error = propTypes[propName](props, propName, componentName);

      if (error instanceof Error) (0, _warning2['default'])(false, error.message);
    }
  }
}

function createRouteFromReactElement(element) {
  var type = element.type;
  var route = _extends({}, type.defaultProps, element.props);

  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

  if (route.children) {
    route.childRoutes = createRoutesFromReactChildren(route.children);
    delete route.children;
  }

  return route;
}

/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router';
 *   
 *   var routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   );
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */

function createRoutesFromReactChildren(children) {
  var routes = [];

  _react2['default'].Children.forEach(children, function (element) {
    if ((0, _react.isValidElement)(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromReactElement) {
        routes.push(element.type.createRouteFromReactElement(element));
      } else {
        routes.push(createRouteFromReactElement(element));
      }
    }
  });

  return routes;
}

/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */

function createRoutes(routes) {
  if (isReactChildren(routes)) {
    routes = createRoutesFromReactChildren(routes);
  } else if (!Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}
},{"react":"react","warning":53}],37:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _AsyncUtils = require('./AsyncUtils');

var _RouteUtils = require('./RouteUtils');

var _RoutingUtils = require('./RoutingUtils');

var _PropTypes = require('./PropTypes');

var _RouterContextMixin = require('./RouterContextMixin');

var _RouterContextMixin2 = _interopRequireDefault(_RouterContextMixin);

var _ScrollManagementMixin = require('./ScrollManagementMixin');

var _ScrollManagementMixin2 = _interopRequireDefault(_ScrollManagementMixin);

var _Location = require('./Location');

var _Transition = require('./Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _React$PropTypes = _react2['default'].PropTypes;
var arrayOf = _React$PropTypes.arrayOf;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

function runTransition(prevState, routes, location, hooks, callback) {
  var transition = new _Transition2['default']();

  (0, _RoutingUtils.getState)(routes, location, function (error, nextState) {
    if (error || nextState == null || transition.isCancelled) {
      callback(error, null, transition);
    } else {
      nextState.location = location;

      var transitionHooks = (0, _RoutingUtils.getTransitionHooks)(prevState, nextState);
      if (Array.isArray(hooks)) transitionHooks.unshift.apply(transitionHooks, hooks);

      (0, _AsyncUtils.loopAsync)(transitionHooks.length, function (index, next, done) {
        transitionHooks[index](nextState, transition, function (error) {
          if (error || transition.isCancelled) {
            done(error); // No need to continue.
          } else {
            next();
          }
        });
      }, function (error) {
        if (error || transition.isCancelled) {
          callback(error, null, transition);
        } else {
          (0, _RoutingUtils.getComponents)(nextState.branch, function (error, components) {
            if (error || transition.isCancelled) {
              callback(error, null, transition);
            } else {
              nextState.components = components;
              callback(null, nextState, transition);
            }
          });
        }
      });
    }
  });
}

var Router = _react2['default'].createClass({
  displayName: 'Router',

  mixins: [_RouterContextMixin2['default'], _ScrollManagementMixin2['default']],

  statics: {

    /**
     * Runs a transition to the given location using the given routes and
     * transition hooks (optional) and calls callback(error, state, transition)
     * when finished. This is primarily useful for server-side rendering.
     */
    run: function run(routes, location, transitionHooks, callback) {
      if (typeof transitionHooks === 'function') {
        callback = transitionHooks;
        transitionHooks = null;
      }

      (0, _invariant2['default'])(typeof callback === 'function', 'Router.run needs a callback');

      runTransition(null, routes, location, transitionHooks, callback);
    }

  },

  propTypes: {
    createElement: func.isRequired,
    onAbort: func,
    onError: func,
    onUpdate: func,

    // Client-side
    history: _PropTypes.history,
    routes: _PropTypes.routes,
    // Routes may also be given as children (JSX)
    children: _PropTypes.routes,

    // Server-side
    location: _PropTypes.location,
    branch: _PropTypes.routes,
    params: object,
    components: arrayOf(_PropTypes.components)
  },

  getDefaultProps: function getDefaultProps() {
    return {
      createElement: _react.createElement
    };
  },

  getInitialState: function getInitialState() {
    return {
      isTransitioning: false,
      location: null,
      branch: null,
      params: null,
      components: null
    };
  },

  _updateState: function _updateState(location) {
    var _this = this;

    (0, _invariant2['default'])((0, _Location.isLocation)(location), 'A <Router> needs a valid Location');

    var hooks = this.transitionHooks;
    if (hooks) hooks = hooks.map(function (hook) {
      return (0, _RoutingUtils.createTransitionHook)(hook, _this);
    });

    this.setState({ isTransitioning: true });

    runTransition(this.state, this.routes, location, hooks, function (error, state, transition) {
      if (error) {
        _this.handleError(error);
      } else if (transition.isCancelled) {
        if (transition.redirectInfo) {
          var _transition$redirectInfo = transition.redirectInfo;
          var pathname = _transition$redirectInfo.pathname;
          var query = _transition$redirectInfo.query;
          var state = _transition$redirectInfo.state;

          _this.replaceWith(pathname, query, state);
        } else {
          (0, _invariant2['default'])(_this.state.location, 'You may not abort the initial transition');

          _this.handleAbort(transition.abortReason);
        }
      } else if (state == null) {
        (0, _warning2['default'])(false, 'Location "%s" did not match any routes', location.pathname);
      } else {
        _this.setState(state, _this.props.onUpdate);
      }

      _this.setState({ isTransitioning: false });
    });
  },

  /**
   * Adds a transition hook that runs before all route hooks in a
   * transition. The signature is the same as route transition hooks.
   */
  addTransitionHook: function addTransitionHook(hook) {
    if (!this.transitionHooks) this.transitionHooks = [];

    this.transitionHooks.push(hook);
  },

  /**
   * Removes the given transition hook.
   */
  removeTransitionHook: function removeTransitionHook(hook) {
    if (this.transitionHooks) this.transitionHooks = this.transitionHooks.filter(function (h) {
      return h !== hook;
    });
  },

  handleAbort: function handleAbort(reason) {
    if (this.props.onAbort) {
      this.props.onAbort.call(this, reason);
    } else {
      // The best we can do here is goBack so the location state reverts
      // to what it was. However, we also set a flag so that we know not
      // to run through _updateState again since state did not change.
      this._ignoreNextHistoryChange = true;
      this.goBack();
    }
  },

  handleError: function handleError(error) {
    if (this.props.onError) {
      this.props.onError.call(this, error);
    } else {
      // Throw errors by default so we don't silently swallow them!
      throw error; // This error probably originated in getChildRoutes or getComponents.
    }
  },

  handleHistoryChange: function handleHistoryChange() {
    if (this._ignoreNextHistoryChange) {
      this._ignoreNextHistoryChange = false;
    } else {
      this._updateState(this.props.history.location);
    }
  },

  componentWillMount: function componentWillMount() {
    var _props = this.props;
    var history = _props.history;
    var routes = _props.routes;
    var children = _props.children;
    var location = _props.location;
    var branch = _props.branch;
    var params = _props.params;
    var components = _props.components;

    if (history) {
      (0, _invariant2['default'])(routes || children, 'Client-side <Router>s need routes. Try using <Router routes> or ' + 'passing your routes as nested <Route> children');

      this.routes = (0, _RouteUtils.createRoutes)(routes || children);

      if (typeof history.setup === 'function') history.setup();

      // We need to listen first in case we redirect immediately.
      if (history.addChangeListener) history.addChangeListener(this.handleHistoryChange);

      this._updateState(history.location);
    } else {
      (0, _invariant2['default'])(location && branch && params && components, 'Server-side <Router>s need location, branch, params, and components ' + 'props. Try using Router.run to get all the props you need');

      this.setState({ location: location, branch: branch, params: params, components: components });
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    (0, _invariant2['default'])(this.props.history === nextProps.history, '<Router history> may not be changed');

    if (nextProps.history) {
      var currentRoutes = this.props.routes || this.props.children;
      var nextRoutes = nextProps.routes || nextProps.children;

      if (currentRoutes !== nextRoutes) {
        this.routes = (0, _RouteUtils.createRoutes)(nextRoutes);

        // Call this here because _updateState
        // uses this.routes to determine state.
        if (nextProps.history.location) this._updateState(nextProps.history.location);
      }
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    var history = this.props.history;

    if (history && history.removeChangeListener) history.removeChangeListener(this.handleHistoryChange);
  },

  _createElement: function _createElement(component, props) {
    return typeof component === 'function' ? this.props.createElement(component, props) : null;
  },

  render: function render() {
    var _this2 = this;

    var _state = this.state;
    var branch = _state.branch;
    var params = _state.params;
    var components = _state.components;

    var element = null;

    if (components) {
      element = components.reduceRight(function (element, components, index) {
        if (components == null) return element; // Don't create new children; use the grandchildren.

        var route = branch[index];
        var routeParams = (0, _RoutingUtils.getRouteParams)(route, params);
        var props = _extends({}, _this2.state, { route: route, routeParams: routeParams });

        if ((0, _react.isValidElement)(element)) {
          props.children = element;
        } else if (element) {
          // In render, do var { header, sidebar } = this.props;
          _extends(props, element);
        }

        if (typeof components === 'object') {
          var elements = {};

          for (var key in components) if (components.hasOwnProperty(key)) elements[key] = _this2._createElement(components[key], props);

          return elements;
        }

        return _this2._createElement(components, props);
      }, element);
    }

    (0, _invariant2['default'])(element === null || element === false || (0, _react.isValidElement)(element), 'The root route must render a single element');

    return element;
  }

});

exports['default'] = Router;
module.exports = exports['default'];
},{"./AsyncUtils":24,"./Location":30,"./PropTypes":33,"./RouteUtils":36,"./RouterContextMixin":38,"./RoutingUtils":39,"./ScrollManagementMixin":40,"./Transition":42,"invariant":46,"react":"react","warning":53}],38:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _URLUtils = require('./URLUtils');

var _React$PropTypes = _react2['default'].PropTypes;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;

function pathnameIsActive(pathname, activePathname) {
  if ((0, _URLUtils.stripLeadingSlashes)(activePathname).indexOf((0, _URLUtils.stripLeadingSlashes)(pathname)) === 0) return true; // This quick comparison satisfies most use cases.

  // TODO: Implement a more stringent comparison that checks
  // to see if the pathname matches any routes (and params)
  // in the currently active branch.

  return false;
}

function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;

  if (query == null) return true;

  for (var p in query) if (query.hasOwnProperty(p) && String(query[p]) !== String(activeQuery[p])) return false;

  return true;
}

var RouterContextMixin = {

  propTypes: {
    stringifyQuery: func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      stringifyQuery: _URLUtils.stringifyQuery
    };
  },

  childContextTypes: {
    router: object.isRequired
  },

  getChildContext: function getChildContext() {
    return {
      router: this
    };
  },

  /**
   * Returns a full URL path from the given pathname and query.
   */
  makePath: function makePath(pathname, query) {
    if (query) {
      if (typeof query !== 'string') query = this.props.stringifyQuery(query);

      if (query !== '') return pathname + '?' + query;
    }

    return pathname;
  },

  /**
   * Returns a string that may safely be used to link to the given
   * pathname and query.
   */
  makeHref: function makeHref(pathname, query) {
    var path = this.makePath(pathname, query);
    var history = this.props.history;

    if (history && history.makeHref) return history.makeHref(path);

    return path;
  },

  /**
   * Pushes a new Location onto the history stack.
   */
  transitionTo: function transitionTo(pathname, query) {
    var state = arguments[2] === undefined ? null : arguments[2];
    var history = this.props.history;

    (0, _invariant2['default'])(history, 'Router#transitionTo is client-side only (needs history)');

    history.pushState(state, this.makePath(pathname, query));
  },

  /**
   * Replaces the current Location on the history stack.
   */
  replaceWith: function replaceWith(pathname, query) {
    var state = arguments[2] === undefined ? null : arguments[2];
    var history = this.props.history;

    (0, _invariant2['default'])(history, 'Router#replaceWith is client-side only (needs history)');

    history.replaceState(state, this.makePath(pathname, query));
  },

  /**
   * Navigates forward/backward n entries in the history stack.
   */
  go: function go(n) {
    var history = this.props.history;

    (0, _invariant2['default'])(history, 'Router#go is client-side only (needs history)');

    history.go(n);
  },

  /**
   * Navigates back one entry in the history stack. This is identical to
   * the user clicking the browser's back button.
   */
  goBack: function goBack() {
    this.go(-1);
  },

  /**
   * Navigates forward one entry in the history stack. This is identical to
   * the user clicking the browser's forward button.
   */
  goForward: function goForward() {
    this.go(1);
  },

  /**
   * Returns true if a <Link> to the given pathname/query combination is
   * currently active.
   */
  isActive: function isActive(pathname, query) {
    var location = this.state.location;

    if (location == null) return false;

    return pathnameIsActive(pathname, location.pathname) && queryIsActive(query, location.query);
  }

};

exports['default'] = RouterContextMixin;
module.exports = exports['default'];
},{"./URLUtils":44,"invariant":46,"react":"react"}],39:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.getState = getState;
exports.createTransitionHook = createTransitionHook;
exports.getTransitionHooks = getTransitionHooks;
exports.getComponents = getComponents;
exports.getRouteParams = getRouteParams;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = require('./RouteUtils');

var _URLUtils = require('./URLUtils');

var _AsyncUtils = require('./AsyncUtils');

function getChildRoutes(route, locationState, callback) {
  if (route.childRoutes) {
    callback(null, route.childRoutes);
  } else if (route.getChildRoutes) {
    route.getChildRoutes(locationState, callback);
  } else {
    callback();
  }
}

function getIndexRoute(route, locationState, callback) {
  if (route.indexRoute) {
    callback(null, route.indexRoute);
  } else if (route.getIndexRoute) {
    route.getIndexRoute(callback, locationState);
  } else {
    callback();
  }
}

function assignParams(params, paramNames, paramValues) {
  return paramNames.reduceRight(function (params, paramName, index) {
    var paramValue = paramValues[index];

    if (Array.isArray(params[paramName])) {
      params[paramName].unshift(paramValue);
    } else if (paramName in params) {
      params[paramName] = [paramValue, params[paramName]];
    } else {
      params[paramName] = paramValue;
    }

    return params;
  }, params);
}

function createParams(paramNames, paramValues) {
  return assignParams({}, paramNames, paramValues);
}

function matchRouteDeep(route, pathname, locationState, callback) {
  var _matchPattern = (0, _URLUtils.matchPattern)(route.path, pathname);

  var remainingPathname = _matchPattern.remainingPathname;
  var paramNames = _matchPattern.paramNames;
  var paramValues = _matchPattern.paramValues;

  var isExactMatch = remainingPathname === '';

  if (isExactMatch && route.path) {
    var params = createParams(paramNames, paramValues);
    var branch = [route];

    getIndexRoute(route, locationState, function (error, indexRoute) {
      if (error) {
        callback(error);
      } else {
        if (indexRoute) branch.push(indexRoute);

        callback(null, { params: params, branch: branch });
      }
    });
  } else if (remainingPathname != null) {
    // This route matched at least some of the path.
    getChildRoutes(route, locationState, function (error, childRoutes) {
      if (error) {
        callback(error);
      } else if (childRoutes) {
        // Check the child routes to see if any of them match.
        matchRoutes(childRoutes, remainingPathname, locationState, function (error, match) {
          if (error) {
            callback(error);
          } else if (match) {
            // A child route matched! Augment the match and pass it up the stack.
            assignParams(match.params, paramNames, paramValues);
            match.branch.unshift(route);
            callback(null, match);
          } else {
            callback();
          }
        });
      } else {
        callback();
      }
    });
  } else {
    callback();
  }
}

function matchRoutes(routes, pathname, locationState, callback) {
  routes = (0, _RouteUtils.createRoutes)(routes);

  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
    matchRouteDeep(routes[index], pathname, locationState, function (error, match) {
      if (error || match) {
        done(error, match);
      } else {
        next();
      }
    });
  }, callback);
}

/**
 * Asynchronously matches the given location to a set of routes and calls
 * callback(error, state) when finished. The state object may have the
 * following properties:
 *
 * - branch       An array of routes that matched, in hierarchical order
 * - params       An object of URL parameters
 *
 * Note: This operation may return synchronously if no routes have an
 * asynchronous getChildRoutes method.
 */

function getState(routes, location, callback) {
  matchRoutes(routes, (0, _URLUtils.stripLeadingSlashes)(location.pathname), location.state, callback);
}

function routeParamsChanged(route, prevState, nextState) {
  if (!route.path) return false;

  var paramNames = (0, _URLUtils.getParamNames)(route.path);

  return paramNames.some(function (paramName) {
    return prevState.params[paramName] !== nextState.params[paramName];
  });
}

/**
 * Runs a diff on the two router states and returns an array of two
 * arrays: 1) the routes that we are leaving, starting with the leaf
 * route and 2) the routes that we are entering, ending with the leaf
 * route.
 */
function computeDiff(prevState, nextState) {
  var fromRoutes = prevState && prevState.branch;
  var toRoutes = nextState.branch;

  var leavingRoutes, enteringRoutes;
  if (fromRoutes) {
    leavingRoutes = fromRoutes.filter(function (route) {
      return toRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
    });

    // onLeave hooks start at the leaf route.
    leavingRoutes.reverse();

    enteringRoutes = toRoutes.filter(function (route) {
      return fromRoutes.indexOf(route) === -1 || leavingRoutes.indexOf(route) !== -1;
    });
  } else {
    leavingRoutes = [];
    enteringRoutes = toRoutes;
  }

  return [leavingRoutes, enteringRoutes];
}

function createTransitionHook(fn, context) {
  return function (nextState, transition, callback) {
    if (fn.length > 2) {
      fn.call(context, nextState, transition, callback);
    } else {
      // Assume fn executes synchronously and
      // automatically call the callback for them.
      fn.call(context, nextState, transition);
      callback();
    }
  };
}

function getTransitionHooksFromRoutes(routes, hookName) {
  return routes.reduce(function (hooks, route) {
    if (route[hookName]) hooks.push(createTransitionHook(route[hookName], route));

    return hooks;
  }, []);
}

/**
 * Compiles and returns an array of transition hook functions that
 * should be called before we transition to a new state. Transition
 * hook signatures are:
 *
 *   - route.onLeave(nextState, transition[, callback ])
 *   - route.onEnter(nextState, transition[, callback ])
 *
 * Transition hooks run in order from the leaf route in the branch
 * we're leaving, up the tree to the common parent route, and back
 * down the branch we're entering to the leaf route.
 *
 * If a transition hook needs to execute asynchronously it may have
 * a 3rd argument that it should call when it is finished. Otherwise
 * the transition executes synchronously.
 */

function getTransitionHooks(prevState, nextState) {
  var _computeDiff = computeDiff(prevState, nextState);

  var leavingRoutes = _computeDiff[0];
  var enteringRoutes = _computeDiff[1];

  var hooks = getTransitionHooksFromRoutes(leavingRoutes, 'onLeave');

  hooks.push.apply(hooks, getTransitionHooksFromRoutes(enteringRoutes, 'onEnter'));

  return hooks;
}

function getComponentsForRoute(route, callback) {
  if (route.component || route.components) {
    callback(null, route.component || route.components);
  } else if (route.getComponents) {
    route.getComponents(callback);
  } else {
    callback();
  }
}

/**
 * Asynchronously fetches all components needed for the given router
 * state and calls callback(error, components) when finished.
 *
 * Note: This operation may return synchronously if no routes have an
 * asynchronous getComponents method.
 */

function getComponents(routes, callback) {
  (0, _AsyncUtils.mapAsync)(routes, function (route, index, callback) {
    getComponentsForRoute(route, callback);
  }, callback);
}

/**
 * Extracts an object of params the given route cares about from
 * the given params object.
 */

function getRouteParams(route, params) {
  var routeParams = {};

  if (!route.path) return routeParams;

  var paramNames = (0, _URLUtils.getParamNames)(route.path);

  for (var p in params) if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];

  return routeParams;
}
},{"./AsyncUtils":24,"./RouteUtils":36,"./URLUtils":44,"invariant":46}],40:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DOMUtils = require('./DOMUtils');

var _NavigationTypes = require('./NavigationTypes');

var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

var func = _react2['default'].PropTypes.func;

function getCommonAncestors(branch, otherBranch) {
  return branch.filter(function (route) {
    return otherBranch.indexOf(route) !== -1;
  });
}

function shouldUpdateScrollPosition(state, prevState) {
  var location = state.location;
  var branch = state.branch;
  var prevLocation = prevState.location;
  var prevBranch = prevState.branch;

  // When an onEnter hook uses transition.to to redirect
  // on the initial load prevLocation is null, so assume
  // we don't want to update the scroll position.
  if (prevLocation === null) return false;

  // Don't update scroll position if only the query has changed.
  if (location.pathname === prevLocation.pathname) return false;

  // Don't update scroll position if any of the ancestors
  // has `ignoreScrollPosition` set to `true` on the route.
  var sharedAncestors = getCommonAncestors(branch, prevBranch);
  if (sharedAncestors.some(function (route) {
    return route.ignoreScrollBehavior;
  })) return false;

  return true;
}

function updateWindowScrollPosition(navigationType, scrollX, scrollY) {
  if (_DOMUtils.canUseDOM) {
    if (navigationType === _NavigationTypes2['default'].POP) {
      (0, _DOMUtils.setWindowScrollPosition)(scrollX, scrollY);
    } else {
      (0, _DOMUtils.setWindowScrollPosition)(0, 0);
    }
  }
}

var ScrollManagementMixin = {

  propTypes: {
    shouldUpdateScrollPosition: func.isRequired,
    updateScrollPosition: func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      shouldUpdateScrollPosition: shouldUpdateScrollPosition,
      updateScrollPosition: updateWindowScrollPosition
    };
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    var location = this.state.location;

    var locationState = location && location.state;

    if (locationState && this.props.shouldUpdateScrollPosition(this.state, prevState)) {
      var scrollX = locationState.scrollX;
      var scrollY = locationState.scrollY;

      this.props.updateScrollPosition(location.navigationType, scrollX || 0, scrollY || 0);
    }
  }

};

exports['default'] = ScrollManagementMixin;
module.exports = exports['default'];
},{"./DOMUtils":27,"./NavigationTypes":32,"react":"react"}],41:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var object = _react2['default'].PropTypes.object;

/**
 * A mixin for components that need to know the path, routes, URL
 * params and query that are currently active.
 *
 * Example:
 *
 *   import { State } from 'react-router';
 *
 *   var AboutLink = React.createClass({
 *     mixins: [ State ],
 *     render() {
 *       var className = this.props.className;
 *
 *       if (this.isActive('about'))
 *         className += ' is-active';
 *
 *       return React.createElement('a', { className: className }, this.props.children);
 *     }
 *   });
 */
var State = {

  contextTypes: {
    router: object.isRequired
  }

};

var RouterStateMethods = ['isActive'];

RouterStateMethods.forEach(function (method) {
  State[method] = function () {
    var router = this.context.router;
    return router[method].apply(router, arguments);
  };
});

exports['default'] = State;
module.exports = exports['default'];
},{"react":"react"}],42:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transition = (function () {
  function Transition() {
    _classCallCheck(this, Transition);

    this.isCancelled = false;
    this.redirectInfo = null;
    this.abortReason = null;
  }

  Transition.prototype.to = function to(pathname, query, state) {
    this.redirectInfo = { pathname: pathname, query: query, state: state };
    this.isCancelled = true;
  };

  Transition.prototype.abort = function abort(reason) {
    this.abortReason = reason;
    this.isCancelled = true;
  };

  return Transition;
})();

exports["default"] = Transition;
module.exports = exports["default"];
},{}],43:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var object = _react2['default'].PropTypes.object;

var TransitionHook = {

  contextTypes: {
    router: object.isRequired
  },

  componentDidMount: function componentDidMount() {
    (0, _warning2['default'])(typeof this.routerWillLeave === 'function', 'Components that mixin TransitionHook should have a routerWillLeave method, check %s', this.constructor.displayName || this.constructor.name);

    if (this.routerWillLeave) this.context.router.addTransitionHook(this.routerWillLeave);
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.routerWillLeave) this.context.router.removeTransitionHook(this.routerWillLeave);
  }

};

exports['default'] = TransitionHook;
module.exports = exports['default'];
},{"react":"react","warning":53}],44:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.stringifyQuery = stringifyQuery;
exports.getPathname = getPathname;
exports.getQueryString = getQueryString;
exports.stripLeadingSlashes = stripLeadingSlashes;
exports.isAbsolutePath = isAbsolutePath;
exports.compilePattern = compilePattern;
exports.matchPattern = matchPattern;
exports.getParamNames = getParamNames;
exports.getParams = getParams;
exports.formatPattern = formatPattern;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var parseQueryString = _qs2['default'].parse;

exports.parseQueryString = parseQueryString;

function stringifyQuery(query) {
  return _qs2['default'].stringify(query, { arrayFormat: 'brackets' });
}

var queryMatcher = /\?([\s\S]*)$/;

function getPathname(path) {
  return path.replace(queryMatcher, '');
}

function getQueryString(path) {
  var match = path.match(queryMatcher);
  return match ? match[1] : '';
}

function stripLeadingSlashes(path) {
  return path ? path.replace(/^\/+/, '') : '';
}

function isAbsolutePath(path) {
  return typeof path === 'string' && path.charAt(0) === '/';
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeSource(string) {
  return escapeRegExp(string).replace(/\/+/g, '/+');
}

function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];

  var match,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*|\(|\)/g;
  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/?#]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '*') {
      regexpSource += '([\\s\\S]*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    }

    tokens.push(match[0]);

    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}

var CompiledPatternsCache = {};

function compilePattern(pattern) {
  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

  return CompiledPatternsCache[pattern];
}

/**
 * Attempts to match a pattern on the given pathname. Patterns may use
 * the following special characters:
 *
 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
 *                  captured string is considered a "param"
 * - ()             Wraps a segment of the URL that is optional
 * - *              Consumes (non-greedy) all characters up to the next
 *                  character in the pattern, or to the end of the URL if
 *                  there is none
 *
 * The return value is an object with the following properties:
 *
 * - remainingPathname
 * - paramNames
 * - paramValues
 */

function matchPattern(pattern, pathname) {
  var _compilePattern2 = compilePattern(stripLeadingSlashes(pattern));

  var regexpSource = _compilePattern2.regexpSource;
  var paramNames = _compilePattern2.paramNames;
  var tokens = _compilePattern2.tokens;

  regexpSource += '/*'; // Ignore trailing slashes

  var captureRemaining = tokens[tokens.length - 1] !== '*';

  if (captureRemaining) regexpSource += '([\\s\\S]*?)';

  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

  var remainingPathname, paramValues;
  if (match != null) {
    paramValues = Array.prototype.slice.call(match, 1).map(function (v) {
      return v != null ? decodeURIComponent(v.replace(/\+/g, '%20')) : v;
    });

    if (captureRemaining) {
      remainingPathname = paramValues.pop();
    } else {
      remainingPathname = pathname.replace(match[0], '');
    }
  } else {
    remainingPathname = paramValues = null;
  }

  return {
    remainingPathname: remainingPathname,
    paramNames: paramNames,
    paramValues: paramValues
  };
}

function getParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}

function getParams(pattern, pathname) {
  var _matchPattern = matchPattern(pattern, stripLeadingSlashes(pathname));

  var paramNames = _matchPattern.paramNames;
  var paramValues = _matchPattern.paramValues;

  if (paramValues != null) {
    return paramNames.reduce(function (memo, paramName, index) {
      memo[paramName] = paramValues[index];
      return memo;
    }, {});
  }

  return null;
}

/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */

function formatPattern(pattern, params) {
  params = params || {};

  var _compilePattern3 = compilePattern(pattern);

  var tokens = _compilePattern3.tokens;

  var parenCount = 0,
      pathname = '',
      splatIndex = 0;

  var token, paramName, paramValue;
  for (var i = 0, len = tokens.length; i < len; ++i) {
    token = tokens[i];

    if (token === '*') {
      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

      (0, _invariant2['default'])(paramValue != null || parenCount > 0, 'Missing splat #%s for path "%s"', splatIndex, pattern);

      if (paramValue != null) pathname += encodeURI(paramValue).replace(/%20/g, '+');
    } else if (token === '(') {
      parenCount += 1;
    } else if (token === ')') {
      parenCount -= 1;
    } else if (token.charAt(0) === ':') {
      paramName = token.substring(1);
      paramValue = params[paramName];

      (0, _invariant2['default'])(paramValue != null || parenCount > 0, 'Missing "%s" parameter for path "%s"', paramName, pattern);

      if (paramValue != null) pathname += encodeURIComponent(paramValue).replace(/%20/g, '+');
    } else {
      pathname += token;
    }
  }

  return pathname.replace(/\/+/g, '/');
}
},{"invariant":46,"qs":48}],45:[function(require,module,exports){
/* components */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Router2 = require('./Router');

var _Router3 = _interopRequireDefault(_Router2);

exports.Router = _Router3['default'];

var _Link2 = require('./Link');

var _Link3 = _interopRequireDefault(_Link2);

exports.Link = _Link3['default'];

/* components (configuration) */

var _Redirect2 = require('./Redirect');

var _Redirect3 = _interopRequireDefault(_Redirect2);

exports.Redirect = _Redirect3['default'];

var _Route2 = require('./Route');

var _Route3 = _interopRequireDefault(_Route2);

exports.Route = _Route3['default'];

/* mixins */

var _Navigation2 = require('./Navigation');

var _Navigation3 = _interopRequireDefault(_Navigation2);

exports.Navigation = _Navigation3['default'];

var _TransitionHook2 = require('./TransitionHook');

var _TransitionHook3 = _interopRequireDefault(_TransitionHook2);

exports.TransitionHook = _TransitionHook3['default'];

var _State2 = require('./State');

var _State3 = _interopRequireDefault(_State2);

exports.State = _State3['default'];

/* utils */

var _RouteUtils = require('./RouteUtils');

exports.createRoutesFromReactChildren = _RouteUtils.createRoutesFromReactChildren;

var _PropTypes2 = require('./PropTypes');

var _PropTypes3 = _interopRequireDefault(_PropTypes2);

exports.PropTypes = _PropTypes3['default'];

var _Router4 = _interopRequireDefault(_Router2);

exports['default'] = _Router4['default'];
},{"./Link":29,"./Navigation":31,"./PropTypes":33,"./Redirect":34,"./Route":35,"./RouteUtils":36,"./Router":37,"./State":41,"./TransitionHook":43}],46:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if ("dev" !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

},{}],47:[function(require,module,exports){
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

"use strict";

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var keyMirror = function(obj) {
  var ret = {};
  var key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

module.exports = keyMirror;

},{}],48:[function(require,module,exports){
module.exports = require('./lib/');

},{"./lib/":49}],49:[function(require,module,exports){
// Load modules

var Stringify = require('./stringify');
var Parse = require('./parse');


// Declare internals

var internals = {};


module.exports = {
    stringify: Stringify,
    parse: Parse
};

},{"./parse":50,"./stringify":51}],50:[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    depth: 5,
    arrayLimit: 20,
    parameterLimit: 1000
};


internals.parseValues = function (str, options) {

    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0, il = parts.length; i < il; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        if (pos === -1) {
            obj[Utils.decode(part)] = '';
        }
        else {
            var key = Utils.decode(part.slice(0, pos));
            var val = Utils.decode(part.slice(pos + 1));

            if (Object.prototype.hasOwnProperty(key)) {
                continue;
            }

            if (!obj.hasOwnProperty(key)) {
                obj[key] = val;
            }
            else {
                obj[key] = [].concat(obj[key]).concat(val);
            }
        }
    }

    return obj;
};


internals.parseObject = function (chain, val, options) {

    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj = {};
    if (root === '[]') {
        obj = [];
        obj = obj.concat(internals.parseObject(chain, val, options));
    }
    else {
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
        var index = parseInt(cleanRoot, 10);
        var indexString = '' + index;
        if (!isNaN(index) &&
            root !== cleanRoot &&
            indexString === cleanRoot &&
            index >= 0 &&
            index <= options.arrayLimit) {

            obj = [];
            obj[index] = internals.parseObject(chain, val, options);
        }
        else {
            obj[cleanRoot] = internals.parseObject(chain, val, options);
        }
    }

    return obj;
};


internals.parseKeys = function (key, val, options) {

    if (!key) {
        return;
    }

    // The regex chunks

    var parent = /^([^\[\]]*)/;
    var child = /(\[[^\[\]]*\])/g;

    // Get the parent

    var segment = parent.exec(key);

    // Don't allow them to overwrite object prototype properties

    if (Object.prototype.hasOwnProperty(segment[1])) {
        return;
    }

    // Stash the parent if it exists

    var keys = [];
    if (segment[1]) {
        keys.push(segment[1]);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {

        ++i;
        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
            keys.push(segment[1]);
        }
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return internals.parseObject(keys, val, options);
};


module.exports = function (str, options) {

    if (str === '' ||
        str === null ||
        typeof str === 'undefined') {

        return {};
    }

    options = options || {};
    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
    var obj = {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        var newObj = internals.parseKeys(key, tempObj[key], options);
        obj = Utils.merge(obj, newObj);
    }

    return Utils.compact(obj);
};

},{"./utils":52}],51:[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    arrayPrefixGenerators: {
        brackets: function (prefix, key) {
            return prefix + '[]';
        },
        indices: function (prefix, key) {
            return prefix + '[' + key + ']';
        },
        repeat: function (prefix, key) {
            return prefix;
        }
    }
};


internals.stringify = function (obj, prefix, generateArrayPrefix) {

    if (Utils.isBuffer(obj)) {
        obj = obj.toString();
    }
    else if (obj instanceof Date) {
        obj = obj.toISOString();
    }
    else if (obj === null) {
        obj = '';
    }

    if (typeof obj === 'string' ||
        typeof obj === 'number' ||
        typeof obj === 'boolean') {

        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        if (Array.isArray(obj)) {
            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
        }
        else {
            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
        }
    }

    return values;
};


module.exports = function (obj, options) {

    options = options || {};
    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

    var keys = [];

    if (typeof obj !== 'object' ||
        obj === null) {

        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in internals.arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    }
    else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    }
    else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
    }

    return keys.join(delimiter);
};

},{"./utils":52}],52:[function(require,module,exports){
// Load modules


// Declare internals

var internals = {};


exports.arrayToObject = function (source) {

    var obj = {};
    for (var i = 0, il = source.length; i < il; ++i) {
        if (typeof source[i] !== 'undefined') {

            obj[i] = source[i];
        }
    }

    return obj;
};


exports.merge = function (target, source) {

    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        }
        else {
            target[source] = true;
        }

        return target;
    }

    if (typeof target !== 'object') {
        target = [target].concat(source);
        return target;
    }

    if (Array.isArray(target) &&
        !Array.isArray(source)) {

        target = exports.arrayToObject(target);
    }

    var keys = Object.keys(source);
    for (var k = 0, kl = keys.length; k < kl; ++k) {
        var key = keys[k];
        var value = source[key];

        if (!target[key]) {
            target[key] = value;
        }
        else {
            target[key] = exports.merge(target[key], value);
        }
    }

    return target;
};


exports.decode = function (str) {

    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};


exports.compact = function (obj, refs) {

    if (typeof obj !== 'object' ||
        obj === null) {

        return obj;
    }

    refs = refs || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0, il = obj.length; i < il; ++i) {
            if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    for (i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        obj[key] = exports.compact(obj[key], refs);
    }

    return obj;
};


exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};


exports.isBuffer = function (obj) {

    if (obj === null ||
        typeof obj === 'undefined') {

        return false;
    }

    return !!(obj.constructor &&
        obj.constructor.isBuffer &&
        obj.constructor.isBuffer(obj));
};

},{}],53:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":23}]},{},[6])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9tYXgvcHJvamVjdHMveW9teXBvcGNvcm4vc2VydmljZS9mcm9udGVuZC9Sb3V0ZXMuanN4IiwiL2hvbWUvbWF4L3Byb2plY3RzL3lvbXlwb3Bjb3JuL3NlcnZpY2UvZnJvbnRlbmQvYWN0aW9ucy9GZWVkQWN0aW9ucy5qc3giLCIvaG9tZS9tYXgvcHJvamVjdHMveW9teXBvcGNvcm4vc2VydmljZS9mcm9udGVuZC9hY3Rpb25zL0xvZ2luQWN0aW9ucy5qc3giLCIvaG9tZS9tYXgvcHJvamVjdHMveW9teXBvcGNvcm4vc2VydmljZS9mcm9udGVuZC9hY3Rpb25zL1Nob3dzQWN0aW9ucy5qc3giLCIvaG9tZS9tYXgvcHJvamVjdHMveW9teXBvcGNvcm4vc2VydmljZS9mcm9udGVuZC9hbHQuanN4IiwiL2hvbWUvbWF4L3Byb2plY3RzL3lvbXlwb3Bjb3JuL3NlcnZpY2UvZnJvbnRlbmQvYXBwLmpzeCIsIi9ob21lL21heC9wcm9qZWN0cy95b215cG9wY29ybi9zZXJ2aWNlL2Zyb250ZW5kL2NvbXBvbmVudHMvQXBwLmpzeCIsIi9ob21lL21heC9wcm9qZWN0cy95b215cG9wY29ybi9zZXJ2aWNlL2Zyb250ZW5kL2NvbXBvbmVudHMvRmVlZC5qc3giLCIvaG9tZS9tYXgvcHJvamVjdHMveW9teXBvcGNvcm4vc2VydmljZS9mcm9udGVuZC9jb21wb25lbnRzL0ZlZWRJdGVtLmpzeCIsIi9ob21lL21heC9wcm9qZWN0cy95b215cG9wY29ybi9zZXJ2aWNlL2Zyb250ZW5kL2NvbXBvbmVudHMvTm90Rm91bmQuanN4IiwiL2hvbWUvbWF4L3Byb2plY3RzL3lvbXlwb3Bjb3JuL3NlcnZpY2UvZnJvbnRlbmQvY29tcG9uZW50cy9TaG93c0xpc3RJdGVtLmpzeCIsIi9ob21lL21heC9wcm9qZWN0cy95b215cG9wY29ybi9zZXJ2aWNlL2Zyb250ZW5kL2NvbXBvbmVudHMvU2hvd3NTZWFyY2guanN4IiwiL2hvbWUvbWF4L3Byb2plY3RzL3lvbXlwb3Bjb3JuL3NlcnZpY2UvZnJvbnRlbmQvY29tcG9uZW50cy9TaG93c1NlYXJjaElucHV0LmpzeCIsIi9ob21lL21heC9wcm9qZWN0cy95b215cG9wY29ybi9zZXJ2aWNlL2Zyb250ZW5kL2NvbXBvbmVudHMvU2hvd3NTdWJzY3JpcHRpb25zLmpzeCIsIi9ob21lL21heC9wcm9qZWN0cy95b215cG9wY29ybi9zZXJ2aWNlL2Zyb250ZW5kL2NvbmZpZy5qc3giLCIvaG9tZS9tYXgvcHJvamVjdHMveW9teXBvcGNvcm4vc2VydmljZS9mcm9udGVuZC9yZWNvcmRzL0ZlZWRJdGVtUmVjb3JkLmpzeCIsIi9ob21lL21heC9wcm9qZWN0cy95b215cG9wY29ybi9zZXJ2aWNlL2Zyb250ZW5kL3JlY29yZHMvU2hvd1JlY29yZC5qc3giLCIvaG9tZS9tYXgvcHJvamVjdHMveW9teXBvcGNvcm4vc2VydmljZS9mcm9udGVuZC9zb3VyY2VzL0ZlZWRTb3VyY2UuanN4IiwiL2hvbWUvbWF4L3Byb2plY3RzL3lvbXlwb3Bjb3JuL3NlcnZpY2UvZnJvbnRlbmQvc291cmNlcy9TaG93c1NvdXJjZS5qc3giLCIvaG9tZS9tYXgvcHJvamVjdHMveW9teXBvcGNvcm4vc2VydmljZS9mcm9udGVuZC9zdG9yZXMvRmVlZFN0b3JlLmpzeCIsIi9ob21lL21heC9wcm9qZWN0cy95b215cG9wY29ybi9zZXJ2aWNlL2Zyb250ZW5kL3N0b3Jlcy9Mb2dpblN0b3JlLmpzeCIsIi9ob21lL21heC9wcm9qZWN0cy95b215cG9wY29ybi9zZXJ2aWNlL2Zyb250ZW5kL3N0b3Jlcy9TaG93c1N0b3JlLmpzeCIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Bc3luY1V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvQnJvd3Nlckhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9ET01IaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvRE9NVXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9IaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvTGluay5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL0xvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvTmF2aWdhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL05hdmlnYXRpb25UeXBlcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1Byb3BUeXBlcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1JlZGlyZWN0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUm91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZVV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUm91dGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUm91dGVyQ29udGV4dE1peGluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUm91dGluZ1V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvU2Nyb2xsTWFuYWdlbWVudE1peGluLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvU3RhdGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9UcmFuc2l0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvVHJhbnNpdGlvbkhvb2suanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9VUkxVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9rZXltaXJyb3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi9wYXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi9zdHJpbmdpZnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9saWIvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7Ozs7Ozs7OzJCQUVLLGNBQWM7Ozs7MkJBQ1UsY0FBYzs7NENBRWhDLGlDQUFpQzs7NkJBRXpDLGtCQUFrQjs7Ozs4QkFDakIsbUJBQW1COzs7OzRDQUNMLGlDQUFpQzs7OztxQ0FDeEMsMEJBQTBCOzs7O2tDQUM3Qix1QkFBdUI7Ozs7cUJBRzFDO2VBVk8sTUFBTTtJQVVMLE9BQU8sZ0NBVFIsT0FBTyxBQVNXO0VBQ3ZCO2lCQVhhLEtBQUs7TUFXWCxTQUFTLDRCQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUc7SUFFN0Isb0RBYlcsS0FBSyxJQWFULElBQUksRUFBQyxNQUFNLEVBQUMsU0FBUyw2QkFBTyxHQUFHO0lBQ3RDLG9EQWRXLEtBQUssSUFjVCxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsMkNBQXFCLEdBQUc7SUFDckQs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9RQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0L2FkZG9ucyc7XG5pbXBvcnQge05vdEZvdW5kUm91dGUsIERlZmF1bHRSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci9saWIvQnJvd3Nlckhpc3RvcnknO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IEZlZWQgZnJvbSAnLi9jb21wb25lbnRzL0ZlZWQnO1xuaW1wb3J0IFNob3dzU3Vic2NyaXB0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvU2hvd3NTdWJzY3JpcHRpb25zJztcbmltcG9ydCBTaG93c1NlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvU2hvd3NTZWFyY2gnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICA8Um91dGUgY29tcG9uZW50PXtBcHB9IHBhdGg9Jy8nPlxuXG4gICAgICA8Um91dGUgcGF0aD0nZmVlZCcgY29tcG9uZW50PXtGZWVkfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9J3Nob3dzJyBjb21wb25lbnQ9e1Nob3dzU3Vic2NyaXB0aW9uc30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPSdzaG93cy9zZWFyY2gnIGNvbXBvbmVudD17U2hvd3NTZWFyY2h9IC8+XG4gICAgICA8Um91dGUgbmFtZT0nbm90Zm91bmQnIHBhdGg9JyonIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbik7XG4iLCJcbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IEZlZWRTb3VyY2UgZnJvbSAnLi4vc291cmNlcy9GZWVkU291cmNlJztcblxuY2xhc3MgRmVlZEFjdGlvbnMge1xuXG4gIHVwZGF0ZUZlZWQgKGZlZWQpIHtcbiAgICB0aGlzLmRpc3BhdGNoKGZlZWQpO1xuICB9XG5cbiAgZmVlZEZhaWxlZCAoZXJyKSB7XG4gICAgdGhpcy5kaXNwYXRjaChlcnIpO1xuICB9XG5cbiAgZmV0Y2hGZWVkICgpIHtcbiAgICB0aGlzLmRpc3BhdGNoKCk7XG5cbiAgICBGZWVkU291cmNlLmZldGNoKClcbiAgICAgIC50aGVuKChzaG93cykgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMudXBkYXRlRmVlZChzaG93cyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmZlZWRGYWlsZWQoZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZUFjdGlvbnMoRmVlZEFjdGlvbnMpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIExvZ2luQWN0aW9ucyB7XG5cbiAgdXBkYXRlQ3JlZGVudGlhbHMgKGNyZWRlbnRpYWxzKSB7XG4gICAgdGhpcy5kaXNwYXRjaChjcmVkZW50aWFscyk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhMb2dpbkFjdGlvbnMpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQgU2hvd3NTb3VyY2UgZnJvbSAnLi4vc291cmNlcy9TaG93c1NvdXJjZSc7XG5cbmNsYXNzIFNob3dzQWN0aW9ucyB7XG5cbiAgdXBkYXRlU2hvd3MgKHNob3dzKSB7XG4gICAgdGhpcy5kaXNwYXRjaChzaG93cyk7XG4gIH1cblxuICBzaG93c0ZhaWxlZCAoZXJyKSB7XG4gICAgdGhpcy5kaXNwYXRjaChlcnIpO1xuICB9XG5cbiAgc3Vic2NyaWJlU2hvdyAoc2hvd0lkKSB7XG4gICAgdGhpcy5kaXNwYXRjaChzaG93SWQpO1xuICAgIFNob3dzU291cmNlLnN1YnNjcmliZVNob3coc2hvd0lkKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlU2hvdyAoc2hvd0lkKSB7XG4gICAgdGhpcy5kaXNwYXRjaChzaG93SWQpO1xuICAgIFNob3dzU291cmNlLnVuc3Vic2NyaWJlU2hvdyhzaG93SWQpO1xuICB9XG5cbiAgc2VhcmNoICh0ZXh0KSB7XG4gICAgdGhpcy5kaXNwYXRjaCh0ZXh0KTtcbiAgfVxuXG4gIGZldGNoU2hvd3MgKCkge1xuICAgIHRoaXMuZGlzcGF0Y2goKTtcblxuICAgIFNob3dzU291cmNlLmZldGNoKClcbiAgICAgIC50aGVuKChzaG93cykgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMudXBkYXRlU2hvd3Moc2hvd3MpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5zaG93c0ZhaWxlZChlcnIpO1xuICAgICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhTaG93c0FjdGlvbnMpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQWx0IGZyb20gJ2FsdCc7XG5cbnZhciBhbHQgPSBuZXcgQWx0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFsdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0L2FkZG9ucyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9Sb3V0ZXMnO1xuXG5pZiAoIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgKSB7XG4gIHdpbmRvdy5SZWFjdCA9IFJlYWN0O1xufVxuXG5SZWFjdC5yZW5kZXIoUm91dGVzLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QvYWRkb25zJztcbmltcG9ydCB7TGluaywgU3RhdGV9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBMb2dpblN0b3JlIGZyb20gJy4uL3N0b3Jlcy9Mb2dpblN0b3JlJztcbmltcG9ydCBMb2dpbkFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9Mb2dpbkFjdGlvbnMnO1xuaW1wb3J0IFNob3dzQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL1Nob3dzQWN0aW9ucyc7XG5pbXBvcnQgRmVlZEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9GZWVkQWN0aW9ucyc7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgbWl4aW5zOiBbIFN0YXRlIF0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBMb2dpbkFjdGlvbnMudXBkYXRlQ3JlZGVudGlhbHMoe1xuICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMubG9jYXRpb24ucXVlcnkudXNlcm5hbWUsXG4gICAgICB0b2tlbjogdGhpcy5wcm9wcy5sb2NhdGlvbi5xdWVyeS50b2tlblxuICAgIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBTaG93c0FjdGlvbnMuZmV0Y2hTaG93cygpO1xuICAgIEZlZWRBY3Rpb25zLmZldGNoRmVlZCgpO1xuICB9LFxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2ZlZWRcIiBjbGFzc05hbWU9XCJ0YWJcIiBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIiBxdWVyeT17dGhpcy5wcm9wcy5sb2NhdGlvbi5xdWVyeX0+RmVlZDwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz1cIi9zaG93c1wiIGNsYXNzTmFtZT1cInRhYlwiIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiIHF1ZXJ5PXt0aGlzLnByb3BzLmxvY2F0aW9uLnF1ZXJ5fT5TaG93czwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QvYWRkb25zJztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBGZWVkU3RvcmUgZnJvbSAnLi4vc3RvcmVzL0ZlZWRTdG9yZSc7XG5pbXBvcnQgRmVlZEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9GZWVkQWN0aW9ucyc7XG5pbXBvcnQgRmVlZEl0ZW0gZnJvbSAnLi9GZWVkSXRlbSc7XG5cbnZhciBGZWVkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgcmV0dXJuIEZlZWRTdG9yZS5nZXRTdGF0ZSgpO1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gIUltbXV0YWJsZS5pcyhuZXh0U3RhdGUuZmVlZCwgdGhpcy5zdGF0ZS5mZWVkKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgRmVlZFN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgICBGZWVkQWN0aW9ucy5mZXRjaEZlZWQoKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgRmVlZFN0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICB9LFxuXG4gIG9uQ2hhbmdlIChzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9LFxuXG4gIHJlbmRlciAoKSB7XG4gICAgdmFyIGZlZWQgPSB0aGlzLnN0YXRlLmZlZWQ7XG5cbiAgICB2YXIgZmVlZEl0ZW1MaXN0ID0gZmVlZC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiA8RmVlZEl0ZW1cbiAgICAgICAga2V5PXtpdGVtLmdldCgnc2hvd19pZCcpICsgJy0nICsgaXRlbS5nZXQoJ3NpZW4nKX1cbiAgICAgICAgc2hvd0lkPXtpdGVtLmdldCgnc2hvd19pZCcpfVxuICAgICAgICBpbWRiSWQ9e2l0ZW0uZ2V0KCdpbWRiX2lkJyl9XG4gICAgICAgIHRpdGxlPXtpdGVtLmdldCgndGl0bGUnKX1cbiAgICAgICAgZXBpc29kZVRpdGxlPXtpdGVtLmdldCgnZXBpc29kZV90aXRsZScpfVxuICAgICAgICBzZWFzb249e2l0ZW0uZ2V0KCdzZWFzb24nKX1cbiAgICAgICAgZXBpc29kZT17aXRlbS5nZXQoJ2VwaXNvZGUnKX1cbiAgICAgICAgaW1hZ2U9e2l0ZW0uZ2V0UG9zdGVyVGh1bWIoKX1cbiAgICAgICAgZmlyc3RBaXJlZD17aXRlbS5nZXQoJ2ZpcnN0X2FpcmVkJyl9XG4gICAgICAgIHRpbWVzdGFtcD17aXRlbS5nZXQoJ3RpbWVzdGFtcCcpfSAvPjtcbiAgICB9KTtcblxuICAgIHZhciBlbXB0eVN0YXRlID0gbnVsbDtcbiAgICBpZiAoIWZlZWRJdGVtTGlzdC5zaXplKSB7XG4gICAgICBlbXB0eVN0YXRlID0gPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1zdGF0ZVwiPk5vdGhpbmcgaGVyZSB5ZXQuPGJyLz48TGluayB0bz1cIi9zaG93cy9zZWFyY2hcIiBxdWVyeT17dGhpcy5wcm9wcy5sb2NhdGlvbi5xdWVyeX0+U3Vic2NyaWJlIHRvIHNvbWUgc2hvd3M8L0xpbms+PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7ZW1wdHlTdGF0ZX1cbiAgICAgICAge2ZlZWRJdGVtTGlzdH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdC9hZGRvbnMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IExhenlSZW5kZXJNaXhpbiBmcm9tICdyZWFjdC1sYXp5cmVuZGVyLW1peGluJztcblxudmFyIEZlZWRJdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFsgTGF6eVJlbmRlck1peGluIF0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxhY2Vob2xkZXJDbGFzc05hbWU6ICdmZWVkLWl0ZW0tcGxhY2Vob2xkZXInXG4gICAgfTtcbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBzaG93SWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpbWRiSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBlcGlzb2RlVGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2Vhc29uOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZXBpc29kZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGltYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZmlyc3RBaXJlZDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICB0aW1lc3RhbXA6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9LFxuXG4gIHJlbmRlciAoKSB7XG4gICAgdmFyIGxvY2FsU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICgndXJsKCcgKyB0aGlzLnByb3BzLmltYWdlICsgJyknKVxuICAgIH07XG5cbiAgICB2YXIgdHMgPSArdGhpcy5wcm9wcy50aW1lc3RhbXAgfHwgK3RoaXMucHJvcHMuZmlyc3RBaXJlZDtcbiAgICB2YXIgdGltZUFnbyA9IG1vbWVudCh0cykuZnJvbU5vdygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC1pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC1pdGVtLWhlYWRlciBlbWVyYWxkXCI+e3RpbWVBZ299PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC1pdGVtLWJvZHlcIiBzdHlsZT17bG9jYWxTdHlsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC1pdGVtLWZvb3RlciBlbWVyYWxkXCI+U2Vhc29uIHt0aGlzLnByb3BzLnNlYXNvbn0sIEVwaXNvZGUge3RoaXMucHJvcHMuZXBpc29kZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRJdGVtO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QvYWRkb25zJztcblxudmFyIE5vdEZvdW5kID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICBOb3RGb3VuZFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdC9hZGRvbnMnO1xuaW1wb3J0IFNob3dzQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL1Nob3dzQWN0aW9ucyc7XG5cbnZhciBTaG93c0xpc3RJdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIHByb3BUeXBlczoge1xuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW1kYklkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY29sb3I6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmF0aW5nOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGlzU3Vic2NyaWJlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TdWJzY3JpcHRpb25DaGFuZ2VkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGhhbmRsZUJ1dHRvbkNsaWNrICgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNTdWJzY3JpYmVkKSB7XG4gICAgICBTaG93c0FjdGlvbnMuc3Vic2NyaWJlU2hvdyh0aGlzLnByb3BzLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgU2hvd3NBY3Rpb25zLnVuc3Vic2NyaWJlU2hvdyh0aGlzLnByb3BzLmlkKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblN1YnNjcmlwdGlvbkNoYW5nZWQpIHtcbiAgICAgIHRoaXMucHJvcHMub25TdWJzY3JpcHRpb25DaGFuZ2VkKCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IFtcbiAgICAgICdsaXN0LWl0ZW0nLFxuICAgICAgdGhpcy5wcm9wcy5jb2xvcixcbiAgICAgIHRoaXMucHJvcHMuY29sb3IgPyAnbm8tYm9yZGVyJyA6ICcnXG4gICAgXS5qb2luKCcgJyk7XG5cbiAgICB2YXIgYnRuID0gdGhpcy5wcm9wcy5pc1N1YnNjcmliZWQgP1xuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5VbnN1YnNjcmliZTwvZGl2PlxuICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImJ0blwiPlN1YnNjcmliZTwvZGl2PjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tZW5kXCIgb25DbGljaz17dGhpcy5oYW5kbGVCdXR0b25DbGlja30+e2J0bn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dzTGlzdEl0ZW07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdC9hZGRvbnMnO1xuaW1wb3J0IHtOYXZpZ2F0aW9ufSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFNob3dzU3RvcmUgZnJvbSAnLi4vc3RvcmVzL1Nob3dzU3RvcmUnO1xuaW1wb3J0IFNob3dzQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL1Nob3dzQWN0aW9ucyc7XG5pbXBvcnQgU2hvd3NMaXN0SXRlbSBmcm9tICcuL1Nob3dzTGlzdEl0ZW0nO1xuaW1wb3J0IFNob3dzU2VhcmNoSW5wdXQgZnJvbSAnLi9TaG93c1NlYXJjaElucHV0JztcblxudmFyIFNob3dzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIG1peGluczogWyBOYXZpZ2F0aW9uIF0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlICgpIHtcbiAgICByZXR1cm4gU2hvd3NTdG9yZS5nZXRTdGF0ZSgpO1xuICB9LFxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gIUltbXV0YWJsZS5pcyhuZXh0U3RhdGUuc2VhcmNoUmVzdWx0cywgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgU2hvd3NTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gICAgU2hvd3NBY3Rpb25zLnNlYXJjaCgnJyk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIFNob3dzU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH0sXG5cbiAgb25DaGFuZ2UgKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH0sXG5cbiAgY2FuY2VsU2VhcmNoICgpIHtcbiAgICB0aGlzLmdvVG9TdWJzY3JpcHRpb25zKCk7XG4gIH0sXG5cbiAgZ29Ub1N1YnNjcmlwdGlvbnMgKCkge1xuICAgIHRoaXMudHJhbnNpdGlvblRvKCcvc2hvd3MnLCB0aGlzLnByb3BzLmxvY2F0aW9uLnF1ZXJ5KTtcbiAgfSxcblxuICByZW5kZXIgKCkge1xuICAgIHZhciBzaG93cyA9IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cztcblxuICAgIHZhciBzaG93c0xpc3QgPSBzaG93cy5tYXAoKHNob3cpID0+IHtcbiAgICAgIHJldHVybiA8U2hvd3NMaXN0SXRlbVxuICAgICAgICBrZXk9e3Nob3cuZ2V0KCdpZCcpfVxuICAgICAgICBpZD17c2hvdy5nZXQoJ2lkJyl9XG4gICAgICAgIGltZGJJZD17c2hvdy5nZXQoJ2ltZGJfaWQnKX1cbiAgICAgICAgdGl0bGU9e3Nob3cuZ2V0KCd0aXRsZScpfVxuICAgICAgICByYXRpbmc9e3Nob3cuZ2V0KCdyYXRpbmcnKX1cbiAgICAgICAgaXNTdWJzY3JpYmVkPXtzaG93LmdldCgnaXNTdWJzY3JpYmVkJyl9XG4gICAgICAgIG9uU3Vic2NyaXB0aW9uQ2hhbmdlZD17dGhpcy5nb1RvU3Vic2NyaXB0aW9uc30gLz47XG4gICAgfSkudG9MaXN0KCk7XG5cbiAgICB2YXIgZW1wdHlTdGF0ZSA9IG51bGw7XG4gICAgaWYoIXRoaXMuc3RhdGUuc2hvd3Muc2l6ZSl7XG4gICAgICBlbXB0eVN0YXRlID0gPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1zdGF0ZVwiPlVobS4uc2hvd3MgYXJlIHN0aWxsIGxvYWRpbmcuLi48L2Rpdj47XG4gICAgfVxuXG4gICAgdmFyIG5vUmVzdWx0c1N0YXRlID0gbnVsbDtcbiAgICBpZiAoIXNob3dzTGlzdC5zaXplKSB7XG4gICAgICBub1Jlc3VsdHNTdGF0ZSA9IDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktc3RhdGVcIj5Gb3VuZCBub3RoaW5nLiBUcnkgc2VhcmNoaW5nIHNvbWV0aGluZyBlbHNlLjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxTaG93c1NlYXJjaElucHV0IG9uQ2FuY2VsPXt0aGlzLmNhbmNlbFNlYXJjaH0gLz5cbiAgICAgIHtlbXB0eVN0YXRlIHx8IG5vUmVzdWx0c1N0YXRlIHx8IHNob3dzTGlzdH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QvYWRkb25zJztcbmltcG9ydCBTaG93c0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9TaG93c0FjdGlvbnMnO1xuXG52YXIgU2hvd3NTZWFyY2hJbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBnZXRJbml0aWFsU3RhdGUgKCkge1xuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9LFxuXG4gIHNlYXJjaCAodGV4dCkge1xuICAgIFNob3dzQWN0aW9ucy5zZWFyY2godGV4dCk7XG4gIH0sXG5cbiAgcmVuZGVyICgpIHtcbiAgICB2YXIgY2FuY2VsID0gPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtY2FuY2VsXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNhbmNlbH0+w5c8L2Rpdj47XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIj5cbiAgICAgICAge2NhbmNlbH1cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPVwic2VhcmNoSW5wdXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXNlYXJjaFwiXG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggc2hvd3NcIlxuICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiB0aGlzLnNlYXJjaChldi50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd3NTZWFyY2hJbnB1dDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0L2FkZG9ucyc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgU2hvd3NTdG9yZSBmcm9tICcuLi9zdG9yZXMvU2hvd3NTdG9yZSc7XG5pbXBvcnQgU2hvd3NBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvU2hvd3NBY3Rpb25zJztcbmltcG9ydCBTaG93c0xpc3RJdGVtIGZyb20gJy4vU2hvd3NMaXN0SXRlbSc7XG5pbXBvcnQgU2hvd3NTZWFyY2hJbnB1dCBmcm9tICcuL1Nob3dzU2VhcmNoSW5wdXQnO1xuXG52YXIgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgPSBSZWFjdC5hZGRvbnMuQ1NTVHJhbnNpdGlvbkdyb3VwO1xuXG52YXIgU2hvd3NTdWJzY3JpcHRpb25zID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZSAoKSB7XG4gICAgcmV0dXJuIFNob3dzU3RvcmUuZ2V0U3RhdGUoKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgU2hvd3NTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIFNob3dzU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH0sXG5cbiAgb25DaGFuZ2UgKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH0sXG5cbiAgcmVuZGVyICgpIHtcblxuICAgIHZhciBzaG93cyA9IHRoaXMuc3RhdGUuc2hvd3M7XG5cbiAgICBzaG93cyA9IHNob3dzLmZpbHRlcigoc2hvdykgPT4gc2hvdy5nZXQoJ2lzU3Vic2NyaWJlZCcpKTtcblxuICAgIHZhciBzaG93c0xpc3QgPSBzaG93cy5tYXAoKHNob3cpID0+IHtcbiAgICAgIHJldHVybiA8U2hvd3NMaXN0SXRlbVxuICAgICAgICBrZXk9e3Nob3cuZ2V0KCdpZCcpfVxuICAgICAgICBpZD17c2hvdy5nZXQoJ2lkJyl9XG4gICAgICAgIGltZGJJZD17c2hvdy5nZXQoJ2ltZGJfaWQnKX1cbiAgICAgICAgdGl0bGU9e3Nob3cuZ2V0KCd0aXRsZScpfVxuICAgICAgICByYXRpbmc9e3Nob3cuZ2V0KCdyYXRpbmcnKX1cbiAgICAgICAgY29sb3I9e3Nob3cuZ2V0Q29sb3IoKX1cbiAgICAgICAgaXNTdWJzY3JpYmVkPXtzaG93LmdldCgnaXNTdWJzY3JpYmVkJyl9IC8+O1xuICAgIH0pLnRvTGlzdCgpO1xuXG4gICAgdmFyIGVtcHR5U3RhdGUgPSBudWxsO1xuICAgIGlmKCFzaG93c0xpc3Quc2l6ZSl7XG4gICAgICBlbXB0eVN0YXRlID0gPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1zdGF0ZVwiPkdldCBzdGFydGVkIGJ5IGFkZGluZyB5b3VyIGZhdm9yaXRlIHNob3dzLiBUYXAgYmVsb3chPC9kaXY+O1xuICAgIH1cblxuICAgIHZhciBhZGRUZXh0ID0gc2hvd3NMaXN0LnNpemUgPyAnKyBBZGQgbW9yZSBzaG93cycgOiAnKyBBZGQgeW91ciBmaXJzdCBzaG93JztcblxuICAgIHZhciBhZGRMaW5rID0gPExpbmsgdG89XCIvc2hvd3Mvc2VhcmNoXCIgcXVlcnk9e3RoaXMucHJvcHMubG9jYXRpb24ucXVlcnl9IGNsYXNzTmFtZT1cImxpc3QtYnRuIGxpc3QtaXRlbVwiPnthZGRUZXh0fTwvTGluaz47XG5cbiAgICB2YXIgdG9wQWRkTGluayA9IHNob3dzTGlzdC5zaXplID49IDEwID8gYWRkTGluayA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtlbXB0eVN0YXRlfVxuICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwiYWRkLWxpbmtcIj5cbiAgICAgICAgICB7dG9wQWRkTGlua31cbiAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cImxpc3QtaXRlbS1yZW1vdmVcIj5cbiAgICAgICAgICB7c2hvd3NMaXN0fVxuICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICAgICB7YWRkTGlua31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dzU3Vic2NyaXB0aW9ucztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXBpQmFzZVVybDogJy9hcGknXG59O1xuIiwiaW1wb3J0IHtSZWNvcmR9IGZyb20gJ2ltbXV0YWJsZSc7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgICBzaG93X2lkOiBudWxsLFxuICAgIGltZGJfaWQ6IG51bGwsXG4gICAgdGl0bGU6ICcnLFxuICAgIGVwaXNvZGVfdGl0bGU6ICcnLFxuICAgIHNpZW46IDAsXG4gICAgc2Vhc29uOiAwLFxuICAgIGVwaXNvZGU6IDAsXG4gICAgcG9zdGVyOiAnaHR0cDovL2kuaW1ndXIuY29tL01OZTJYLmdpZicsXG4gICAgZmlyc3RfYWlyZWQ6IG51bGwsXG4gICAgdGltZXN0YW1wOiBudWxsXG59O1xuXG5jbGFzcyBGZWVkSXRlbVJlY29yZCBleHRlbmRzIFJlY29yZChkZWZhdWx0cykge1xuXG4gIGdldFBvc3RlclRodW1iICgpIHtcbiAgICBpZiAodGhpcy5wb3N0ZXIuaW5kZXhPZignb3JpZ2luYWwnKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc3RlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wb3N0ZXIucmVwbGFjZSgnb3JpZ2luYWwnLCAndGh1bWInKVxuICB9XG5cbiAgZ2V0UG9zdGVyTWVkaXVtICgpIHtcbiAgICBpZiAodGhpcy5wb3N0ZXIuaW5kZXhPZignb3JpZ2luYWwnKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvc3RlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wb3N0ZXIucmVwbGFjZSgnb3JpZ2luYWwnLCAnbWVkaXVtJylcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWVkSXRlbVJlY29yZDtcbiIsImltcG9ydCB7UmVjb3JkfSBmcm9tICdpbW11dGFibGUnO1xuXG52YXIgY29sb3JOYW1lcyA9IFtcbiAgJ3R1cnF1b2lzZScsXG4gICdlbWVyYWxkJyxcbiAgJ3BldGVyJyxcbiAgJ2FzcGhhbHQnLFxuICAnZ3JlZW4nLFxuICAnc3VuZmxvd2VyJyxcbiAgJ2JlbGl6ZScsXG4gICdhbGl6YXJpbicsXG4vLyBVc2UgYW1ldGh5c3QgYW5kIHdpc3RlcmlhIG9ubHkgZm9yIHVpIGFuZCBiYWNrZ3JvdW5kXG5dO1xuXG5mdW5jdGlvbiBnZXRDb2xvckluZGV4ICgpIHtcbiAgdmFyIGlkeCA9IHR5cGVvZiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudENvbG9ySW5kZXgnKSAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgICtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudENvbG9ySW5kZXgnKVxuICAgIDogMDtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudENvbG9ySW5kZXgnLCAoaWR4ICsgMSkgJSBjb2xvck5hbWVzLmxlbmd0aCk7XG5cbiAgcmV0dXJuIGlkeDtcbn1cblxudmFyIGN1cnJlbnRDb2xvckluZGV4ID0gK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50Q29sb3JJbmRleCcpIHx8IDA7XG5cbmZ1bmN0aW9uIGdldENvbG9yIChzaG93SWQpIHtcbiAgdmFyIGNvbG9yS2V5ID0gJ3Nob3c6JyArIHNob3dJZCArICc6Y29sb3InO1xuICB2YXIgY29sb3IgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb2xvcktleSk7XG5cbiAgaWYgKCFjb2xvcikge1xuICAgIGNvbG9yID0gY29sb3JOYW1lc1tnZXRDb2xvckluZGV4KCldO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGNvbG9yS2V5LCBjb2xvcik7XG4gIH1cblxuICByZXR1cm4gY29sb3I7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgaWQ6IG51bGwsXG4gIGltZGJfaWQ6IG51bGwsXG4gIHRpdGxlOiAnJyxcbiAgaXNTdWJzY3JpYmVkOiBmYWxzZSxcbiAgcmF0aW5nOiAwXG59O1xuXG5jbGFzcyBTaG93UmVjb3JkIGV4dGVuZHMgUmVjb3JkKGRlZmF1bHRzKSB7XG5cbiAgZ2V0Q29sb3IgKCkge1xuICAgIGlmICghdGhpcy5pc1N1YnNjcmliZWQpIHsgcmV0dXJuIG51bGw7IH1cbiAgICByZXR1cm4gZ2V0Q29sb3IodGhpcy5pbWRiX2lkKTtcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93UmVjb3JkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExvZ2luU3RvcmUgZnJvbSAnLi4vc3RvcmVzL0xvZ2luU3RvcmUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG52YXIgYXBpQmFzZSA9IGNvbmZpZy5hcGlCYXNlVXJsO1xuXG52YXIgRmVlZFNvdXJjZSA9IHtcblxuICBmZXRjaCAoKSB7XG4gICAgdmFyIGNyZWRlbnRpYWxzID0gTG9naW5TdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGF4aW9zLmdldChhcGlCYXNlICsgJy91c2Vycy8nICsgY3JlZGVudGlhbHMudXNlcm5hbWUgKyAnL2ZlZWQ/dG9rZW49JyArIGNyZWRlbnRpYWxzLnRva2VuKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSk7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZFNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMb2dpblN0b3JlIGZyb20gJy4uL3N0b3Jlcy9Mb2dpblN0b3JlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxudmFyIGFwaUJhc2UgPSBjb25maWcuYXBpQmFzZVVybDtcblxudmFyIFNob3dzU291cmNlID0ge1xuXG4gIGZldGNoICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZnVuY3Rpb24gZ2V0QWxsU2hvd3MgKCkge1xuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGFwaUJhc2UgKyAnL3Nob3dzP2NvbXBhY3Q9MScpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFN1YnNjcmliZWRTaG93cyAoKSB7XG4gICAgICAgIHZhciBjcmVkZW50aWFscyA9IExvZ2luU3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGFwaUJhc2UgKyAnL3VzZXJzLycgKyBjcmVkZW50aWFscy51c2VybmFtZSArICcvc2hvd3M/Y29tcGFjdD0xJnRva2VuPScgKyBjcmVkZW50aWFscy50b2tlbilcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKTtcbiAgICAgIH1cblxuICAgICAgYXhpb3MuYWxsKFsgZ2V0QWxsU2hvd3MoKSwgZ2V0U3Vic2NyaWJlZFNob3dzKCkgXSlcbiAgICAgICAgLnRoZW4oYXhpb3Muc3ByZWFkKChzaG93cywgc3Vic2NyaXB0aW9ucykgPT4ge1xuICAgICAgICAgIHN1YnNjcmlwdGlvbnMgPSBzdWJzY3JpcHRpb25zLnJlZHVjZSgoc3Vic2NyaXB0aW9ucywgc2hvdykgPT4ge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uc1tzaG93LmlkXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9ucztcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICBzaG93cyA9IHNob3dzLm1hcCgoc2hvdykgPT4ge1xuICAgICAgICAgICAgc2hvdy5pc1N1YnNjcmliZWQgPSAoc3Vic2NyaXB0aW9uc1tzaG93LmlkXSA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gc2hvdztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNob3dzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiLnJhdGluZyAtIGEucmF0aW5nO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmVzb2x2ZShzaG93cyk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbiAgfSxcblxuICBzdWJzY3JpYmVTaG93IChzaG93SWQpIHtcbiAgICB2YXIgY3JlZGVudGlhbHMgPSBMb2dpblN0b3JlLmdldFN0YXRlKCk7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYXBpQmFzZSArICcvdXNlcnMvJyArIGNyZWRlbnRpYWxzLnVzZXJuYW1lICsgJy9zaG93cz90b2tlbj0nICsgY3JlZGVudGlhbHMudG9rZW4sIHtcbiAgICAgIHNob3dfaWQ6IHNob3dJZFxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKTtcbiAgfSxcblxuICB1bnN1YnNjcmliZVNob3cgKHNob3dJZCkge1xuICAgIHZhciBjcmVkZW50aWFscyA9IExvZ2luU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGFwaUJhc2UgKyAnL3VzZXJzLycgKyBjcmVkZW50aWFscy51c2VybmFtZSArICcvc2hvd3MvJyArIHNob3dJZCArICc/dG9rZW49JyArIGNyZWRlbnRpYWxzLnRva2VuKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSk7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd3NTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdC9hZGRvbnMnO1xuaW1wb3J0IEZlZWRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvRmVlZEFjdGlvbnMnO1xuaW1wb3J0IEZlZWRJdGVtUmVjb3JkIGZyb20gJy4uL3JlY29yZHMvRmVlZEl0ZW1SZWNvcmQnO1xuXG5jbGFzcyBGZWVkU3RvcmUge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmZlZWQgPSBJbW11dGFibGUuU2V0KCk7XG5cbiAgICB0aGlzLmJpbmRMaXN0ZW5lcnMoe1xuICAgICAgaGFuZGxlVXBkYXRlRmVlZDogRmVlZEFjdGlvbnMuVVBEQVRFX0ZFRUQsXG4gICAgICBoYW5kbGVGZXRjaEZlZWQ6IEZlZWRBY3Rpb25zLkZFVENIX0ZFRUQsXG4gICAgICBoYW5kbGVGZWVkRmFpbGVkOiBGZWVkQWN0aW9ucy5GRUVEX0ZBSUxFRFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlVXBkYXRlRmVlZCAoZmVlZCkge1xuICAgIHRoaXMuZmVlZCA9IEltbXV0YWJsZS5mcm9tSlMoZmVlZCwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgIGlmICh2YWx1ZS5nZXQoJ3Nob3dfaWQnKSkge1xuICAgICAgICByZXR1cm4gbmV3IEZlZWRJdGVtUmVjb3JkKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZS50b1NldCgpO1xuICAgIH0pXG4gICAgICAuc29ydEJ5KGl0ZW0gPT4gaXRlbS5nZXQoJ3RpbWVzdGFtcCcpKVxuICAgICAgLnJldmVyc2UoKTtcbiAgfVxuXG4gIGhhbmRsZUZldGNoRmVlZCAoKSB7XG4gICAgaWYgKHRoaXMuZmVlZC5zaXplKSB7IHJldHVybjsgfVxuICAgIHRoaXMuZmVlZCA9IEltbXV0YWJsZS5TZXQoKTtcbiAgfVxuXG4gIGhhbmRsZUZlZWRGYWlsZWQgKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoRmVlZFN0b3JlLCAnRmVlZFN0b3JlJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBMb2dpbkFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9Mb2dpbkFjdGlvbnMnO1xuXG5jbGFzcyBMb2dpblN0b3JlIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy51c2VybmFtZSA9ICcnO1xuICAgIHRoaXMudG9rZW4gPSAnJztcblxuICAgIHRoaXMuYmluZExpc3RlbmVycyh7XG4gICAgICBoYW5kbGVVcGRhdGVDcmVkZW50aWFsczogTG9naW5BY3Rpb25zLlVQREFURV9DUkVERU5USUFMUyxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZUNyZWRlbnRpYWxzIChjcmVkZW50aWFscykge1xuICAgIHRoaXMudXNlcm5hbWUgPSBjcmVkZW50aWFscy51c2VybmFtZTtcbiAgICB0aGlzLnRva2VuID0gY3JlZGVudGlhbHMudG9rZW47XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoTG9naW5TdG9yZSwgJ0xvZ2luU3RvcmUnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0L2FkZG9ucyc7XG5pbXBvcnQgU2hvd3NBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvU2hvd3NBY3Rpb25zJztcbmltcG9ydCBTaG93UmVjb3JkIGZyb20gJy4uL3JlY29yZHMvU2hvd1JlY29yZCc7XG5cbmNsYXNzIFNob3dzU3RvcmUge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgIHRoaXMuc2hvd3MgPSBJbW11dGFibGUuTWFwKHt9KTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSBJbW11dGFibGUuTWFwKHt9KTtcblxuICAgIHRoaXMuYmluZExpc3RlbmVycyh7XG4gICAgICBoYW5kbGVVcGRhdGVTaG93czogU2hvd3NBY3Rpb25zLlVQREFURV9TSE9XUyxcbiAgICAgIGhhbmRsZUZldGNoU2hvd3M6IFNob3dzQWN0aW9ucy5GRVRDSF9TSE9XUyxcbiAgICAgIGhhbmRsZVNob3dzRmFpbGVkOiBTaG93c0FjdGlvbnMuU0hPV1NfRkFJTEVELFxuICAgICAgaGFuZGxlU2VhcmNoOiBTaG93c0FjdGlvbnMuU0VBUkNILFxuICAgICAgaGFuZGxlU3Vic2NyaWJlU2hvdzogU2hvd3NBY3Rpb25zLlNVQlNDUklCRV9TSE9XLFxuICAgICAgaGFuZGxlVW5zdWJzY3JpYmVTaG93OiBTaG93c0FjdGlvbnMuVU5TVUJTQ1JJQkVfU0hPV1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU2VhcmNoUmVzdWx0cyAoKSB7XG4gICAgaWYgKCF0aGlzLnNlYXJjaCkge1xuICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGhpcy5zaG93cztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZmlsdGVyID0gKCcnICsgdGhpcy5zZWFyY2gpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldL2csICcnKTtcblxuICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuc2hvd3MuZmlsdGVyKGZ1bmN0aW9uIChzaG93KSB7XG4gICAgICB2YXIgc2hvd05hbWUgPSAoJycgKyBzaG93LmdldCgndGl0bGUnKSkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0vZywgJycpO1xuICAgICAgcmV0dXJuIHNob3dOYW1lLmluZGV4T2YoZmlsdGVyKSAhPT0gLTE7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVVcGRhdGVTaG93cyAoc2hvd3MpIHtcbiAgICBzaG93cyA9IHNob3dzLnJlZHVjZSgoc2hvd3MsIHNob3cpID0+IHtcbiAgICAgIHNob3dzW3Nob3cuaWRdID0gc2hvdztcbiAgICAgIHJldHVybiBzaG93cztcbiAgICB9LCB7fSk7XG5cbiAgICB0aGlzLnNob3dzID0gSW1tdXRhYmxlLmZyb21KUyhzaG93cywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgIGlmICh2YWx1ZS5nZXQoJ2lkJykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTaG93UmVjb3JkKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZS50b01hcCgpO1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBiLmdldCgncmF0aW5nJykgLSBhLmdldCgncmF0aW5nJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZVNlYXJjaFJlc3VsdHMoKTtcbiAgfVxuXG4gIGhhbmRsZUZldGNoU2hvd3MgKCkge1xuICAgIHRoaXMuc2hvd3MgPSBJbW11dGFibGUuTWFwKHt9KTtcbiAgfVxuXG4gIGhhbmRsZVNob3dzRmFpbGVkIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoICh0ZXh0KSB7XG4gICAgdGhpcy5zZWFyY2ggPSB0ZXh0O1xuICAgIHRoaXMudXBkYXRlU2VhcmNoUmVzdWx0cygpO1xuICB9XG5cbiAgaGFuZGxlU3Vic2NyaWJlU2hvdyAoc2hvd0lkKSB7XG4gICAgdGhpcy5zaG93cyA9IHRoaXMuc2hvd3Muc2V0SW4oW3Nob3dJZCwgJ2lzU3Vic2NyaWJlZCddLCB0cnVlKTtcbiAgICB0aGlzLnVwZGF0ZVNlYXJjaFJlc3VsdHMoKTtcbiAgfVxuXG4gIGhhbmRsZVVuc3Vic2NyaWJlU2hvdyAoc2hvd0lkKSB7XG4gICAgdGhpcy5zaG93cyA9IHRoaXMuc2hvd3Muc2V0SW4oW3Nob3dJZCwgJ2lzU3Vic2NyaWJlZCddLCBmYWxzZSk7XG4gICAgdGhpcy51cGRhdGVTZWFyY2hSZXN1bHRzKCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoU2hvd3NTdG9yZSwgJ1Nob3dzU3RvcmUnKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmxvb3BBc3luYyA9IGxvb3BBc3luYztcbmV4cG9ydHMubWFwQXN5bmMgPSBtYXBBc3luYztcbmV4cG9ydHMuaGFzaEFzeW5jID0gaGFzaEFzeW5jO1xuXG5mdW5jdGlvbiBsb29wQXN5bmModHVybnMsIHdvcmssIGNhbGxiYWNrKSB7XG4gIHZhciBjdXJyZW50VHVybiA9IDA7XG4gIHZhciBpc0RvbmUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlzRG9uZSA9IHRydWU7XG4gICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKGlzRG9uZSkgcmV0dXJuO1xuXG4gICAgaWYgKGN1cnJlbnRUdXJuIDwgdHVybnMpIHtcbiAgICAgIGN1cnJlbnRUdXJuICs9IDE7XG4gICAgICB3b3JrLmNhbGwodGhpcywgY3VycmVudFR1cm4gLSAxLCBuZXh0LCBkb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTtcbn1cblxuZnVuY3Rpb24gbWFwQXN5bmMoYXJyYXksIHdvcmssIGNhbGxiYWNrKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHZhciB2YWx1ZXMgPSBbXTtcblxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gY2FsbGJhY2sobnVsbCwgdmFsdWVzKTtcblxuICB2YXIgaXNEb25lID0gZmFsc2U7XG4gIHZhciBkb25lQ291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIGRvbmUoaW5kZXgsIGVycm9yLCB2YWx1ZSkge1xuICAgIGlmIChpc0RvbmUpIHJldHVybjtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgaXNEb25lID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuXG4gICAgICBpc0RvbmUgPSArK2RvbmVDb3VudCA9PT0gbGVuZ3RoO1xuXG4gICAgICBpZiAoaXNEb25lKSBjYWxsYmFjayhudWxsLCB2YWx1ZXMpO1xuICAgIH1cbiAgfVxuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgd29yayhpdGVtLCBpbmRleCwgZnVuY3Rpb24gKGVycm9yLCB2YWx1ZSkge1xuICAgICAgZG9uZShpbmRleCwgZXJyb3IsIHZhbHVlKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc2hBc3luYyhvYmplY3QsIHdvcmssIGNhbGxiYWNrKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBtYXBBc3luYyhrZXlzLCBmdW5jdGlvbiAoa2V5LCBpbmRleCwgY2FsbGJhY2spIHtcbiAgICB3b3JrKG9iamVjdFtrZXldLCBjYWxsYmFjayk7XG4gIH0sIGZ1bmN0aW9uIChlcnJvciwgdmFsdWVzQXJyYXkpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZhbHVlcyA9IHZhbHVlc0FycmF5LnJlZHVjZShmdW5jdGlvbiAobWVtbywgcmVzdWx0cywgaW5kZXgpIHtcbiAgICAgICAgbWVtb1trZXlzW2luZGV4XV0gPSByZXN1bHRzO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgY2FsbGJhY2sobnVsbCwgdmFsdWVzKTtcbiAgICB9XG4gIH0pO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX0RPTUhpc3RvcnkyID0gcmVxdWlyZSgnLi9ET01IaXN0b3J5Jyk7XG5cbnZhciBfRE9NSGlzdG9yeTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ET01IaXN0b3J5Mik7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfTmF2aWdhdGlvblR5cGVzID0gcmVxdWlyZSgnLi9OYXZpZ2F0aW9uVHlwZXMnKTtcblxudmFyIF9OYXZpZ2F0aW9uVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2aWdhdGlvblR5cGVzKTtcblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudFN0YXRlKGV4dHJhU3RhdGUpIHtcbiAgdmFyIHN0YXRlID0gd2luZG93Lmhpc3Rvcnkuc3RhdGU7XG5cbiAgaWYgKHN0YXRlKSB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoc3RhdGUsIGV4dHJhU3RhdGUpLCAnJyk7XG59XG5cbi8qKlxuICogQSBoaXN0b3J5IGltcGxlbWVudGF0aW9uIGZvciBET00gZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCB0aGVcbiAqIEhUTUw1IGhpc3RvcnkgQVBJIChwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudCkuXG4gKiBQcm92aWRlcyB0aGUgY2xlYW5lc3QgVVJMcyBhbmQgc2hvdWxkIGFsd2F5cyBiZSB1c2VkIGluIGJyb3dzZXJcbiAqIGVudmlyb25tZW50cyBpZiBwb3NzaWJsZS5cbiAqXG4gKiBOb3RlOiBCcm93c2VySGlzdG9yeSBhdXRvbWF0aWNhbGx5IGZhbGxzIGJhY2sgdG8gdXNpbmcgZnVsbCBwYWdlXG4gKiByZWZyZXNoZXMgaWYgSFRNTDUgaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLCBzbyBVUkxzIGFyZSBhbHdheXNcbiAqIHRoZSBzYW1lIGFjcm9zcyBicm93c2Vycy5cbiAqL1xuXG52YXIgQnJvd3Nlckhpc3RvcnkgPSAoZnVuY3Rpb24gKF9ET01IaXN0b3J5KSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJIaXN0b3J5KG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJvd3Nlckhpc3RvcnkpO1xuXG4gICAgX0RPTUhpc3RvcnkuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmhhbmRsZVBvcFN0YXRlID0gdGhpcy5oYW5kbGVQb3BTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaXNTdXBwb3J0ZWQgPSAoMCwgX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSkoKTtcbiAgfVxuXG4gIF9pbmhlcml0cyhCcm93c2VySGlzdG9yeSwgX0RPTUhpc3RvcnkpO1xuXG4gIEJyb3dzZXJIaXN0b3J5LnByb3RvdHlwZS5fdXBkYXRlTG9jYXRpb24gPSBmdW5jdGlvbiBfdXBkYXRlTG9jYXRpb24obmF2aWdhdGlvblR5cGUpIHtcbiAgICB2YXIgc3RhdGUgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHZhciBoaXN0b3J5U3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5zdGF0ZTtcbiAgICAgIHN0YXRlID0gdGhpcy5fY3JlYXRlU3RhdGUoaGlzdG9yeVN0YXRlKTtcblxuICAgICAgaWYgKCFoaXN0b3J5U3RhdGUgfHwgIWhpc3RvcnlTdGF0ZS5rZXkpIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZSwgJycpO1xuICAgIH1cblxuICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLmNyZWF0ZUxvY2F0aW9uKCgwLCBfRE9NVXRpbHMuZ2V0V2luZG93UGF0aCkoKSwgc3RhdGUsIG5hdmlnYXRpb25UeXBlKTtcbiAgfTtcblxuICBCcm93c2VySGlzdG9yeS5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICBpZiAodGhpcy5sb2NhdGlvbiA9PSBudWxsKSB0aGlzLl91cGRhdGVMb2NhdGlvbigpO1xuICB9O1xuXG4gIEJyb3dzZXJIaXN0b3J5LnByb3RvdHlwZS5oYW5kbGVQb3BTdGF0ZSA9IGZ1bmN0aW9uIGhhbmRsZVBvcFN0YXRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnN0YXRlID09PSB1bmRlZmluZWQpIHJldHVybjsgLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cblxuICAgIHRoaXMuX3VwZGF0ZUxvY2F0aW9uKF9OYXZpZ2F0aW9uVHlwZXMyWydkZWZhdWx0J10uUE9QKTtcbiAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoKTtcbiAgfTtcblxuICBCcm93c2VySGlzdG9yeS5wcm90b3R5cGUuYWRkQ2hhbmdlTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIF9ET01IaXN0b3J5LnByb3RvdHlwZS5hZGRDaGFuZ2VMaXN0ZW5lci5jYWxsKHRoaXMsIGxpc3RlbmVyKTtcblxuICAgIGlmICh0aGlzLmNoYW5nZUxpc3RlbmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLmhhbmRsZVBvcFN0YXRlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ucG9wc3RhdGUnLCB0aGlzLmhhbmRsZVBvcFN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgQnJvd3Nlckhpc3RvcnkucHJvdG90eXBlLnJlbW92ZUNoYW5nZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBfRE9NSGlzdG9yeS5wcm90b3R5cGUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIuY2FsbCh0aGlzLCBsaXN0ZW5lcik7XG5cbiAgICBpZiAodGhpcy5jaGFuZ2VMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5oYW5kbGVQb3BTdGF0ZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmRldGFjaEV2ZW50KCdvbnBvcHN0YXRlJywgdGhpcy5oYW5kbGVQb3BTdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvV0QtaHRtbDUtMjAxMTAxMTMvaGlzdG9yeS5odG1sI2RvbS1oaXN0b3J5LXB1c2hzdGF0ZVxuXG4gIEJyb3dzZXJIaXN0b3J5LnByb3RvdHlwZS5wdXNoU3RhdGUgPSBmdW5jdGlvbiBwdXNoU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICBpZiAodGhpcy5pc1N1cHBvcnRlZCkge1xuICAgICAgdXBkYXRlQ3VycmVudFN0YXRlKHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKSk7XG5cbiAgICAgIHN0YXRlID0gdGhpcy5fY3JlYXRlU3RhdGUoc3RhdGUpO1xuXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsICcnLCBwYXRoKTtcbiAgICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLmNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBfTmF2aWdhdGlvblR5cGVzMlsnZGVmYXVsdCddLlBVU0gpO1xuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHBhdGg7XG4gICAgfVxuICB9O1xuXG4gIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvV0QtaHRtbDUtMjAxMTAxMTMvaGlzdG9yeS5odG1sI2RvbS1oaXN0b3J5LXJlcGxhY2VzdGF0ZVxuXG4gIEJyb3dzZXJIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlU3RhdGUgPSBmdW5jdGlvbiByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICBpZiAodGhpcy5pc1N1cHBvcnRlZCkge1xuICAgICAgc3RhdGUgPSB0aGlzLl9jcmVhdGVTdGF0ZShzdGF0ZSk7XG5cbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZSwgJycsIHBhdGgpO1xuICAgICAgdGhpcy5sb2NhdGlvbiA9IHRoaXMuY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIF9OYXZpZ2F0aW9uVHlwZXMyWydkZWZhdWx0J10uUkVQTEFDRSk7XG4gICAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocGF0aCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBCcm93c2VySGlzdG9yeTtcbn0pKF9ET01IaXN0b3J5M1snZGVmYXVsdCddKTtcblxudmFyIGhpc3RvcnkgPSBuZXcgQnJvd3Nlckhpc3RvcnkoKTtcbmV4cG9ydHMuaGlzdG9yeSA9IGhpc3Rvcnk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBCcm93c2VySGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9IaXN0b3J5MiA9IHJlcXVpcmUoJy4vSGlzdG9yeScpO1xuXG52YXIgX0hpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGlzdG9yeTIpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG4vKipcbiAqIEEgaGlzdG9yeSBpbnRlcmZhY2UgdGhhdCBhc3N1bWVzIGEgRE9NIGVudmlyb25tZW50LlxuICovXG5cbnZhciBET01IaXN0b3J5ID0gKGZ1bmN0aW9uIChfSGlzdG9yeSkge1xuICBmdW5jdGlvbiBET01IaXN0b3J5KCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBET01IaXN0b3J5KTtcblxuICAgIF9IaXN0b3J5LmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5nZXRTY3JvbGxQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0U2Nyb2xsUG9zaXRpb24gfHwgX0RPTVV0aWxzLmdldFdpbmRvd1Njcm9sbFBvc2l0aW9uO1xuICB9XG5cbiAgX2luaGVyaXRzKERPTUhpc3RvcnksIF9IaXN0b3J5KTtcblxuICBET01IaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBpZiAobiA9PT0gMCkgcmV0dXJuO1xuXG4gICAgd2luZG93Lmhpc3RvcnkuZ28obik7XG4gIH07XG5cbiAgcmV0dXJuIERPTUhpc3Rvcnk7XG59KShfSGlzdG9yeTNbJ2RlZmF1bHQnXSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERPTUhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldEhhc2hQYXRoID0gZ2V0SGFzaFBhdGg7XG5leHBvcnRzLnJlcGxhY2VIYXNoUGF0aCA9IHJlcGxhY2VIYXNoUGF0aDtcbmV4cG9ydHMuZ2V0V2luZG93UGF0aCA9IGdldFdpbmRvd1BhdGg7XG5leHBvcnRzLmdldFdpbmRvd1Njcm9sbFBvc2l0aW9uID0gZ2V0V2luZG93U2Nyb2xsUG9zaXRpb247XG5leHBvcnRzLnNldFdpbmRvd1Njcm9sbFBvc2l0aW9uID0gc2V0V2luZG93U2Nyb2xsUG9zaXRpb247XG5leHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IHN1cHBvcnRzSGlzdG9yeTtcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5leHBvcnRzLmNhblVzZURPTSA9IGNhblVzZURPTTtcblxuZnVuY3Rpb24gZ2V0SGFzaFBhdGgoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMV0gfHwgJyc7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93UGF0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbFg6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxZOiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBzZXRXaW5kb3dTY3JvbGxQb3NpdGlvbihzY3JvbGxYLCBzY3JvbGxZKSB7XG4gIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxYLCBzY3JvbGxZKTtcbn1cblxuLyoqXG4gKiB0YWtlbiBmcm9tIG1vZGVybml6clxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9VUkxVdGlscyA9IHJlcXVpcmUoJy4vVVJMVXRpbHMnKTtcblxudmFyIF9Mb2NhdGlvbiA9IHJlcXVpcmUoJy4vTG9jYXRpb24nKTtcblxudmFyIF9Mb2NhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Mb2NhdGlvbik7XG5cbnZhciBSZXF1aXJlZEhpc3RvcnlTdWJjbGFzc01ldGhvZHMgPSBbJ3B1c2hTdGF0ZScsICdyZXBsYWNlU3RhdGUnLCAnZ28nXTtcblxuZnVuY3Rpb24gY3JlYXRlUmFuZG9tS2V5KCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xufVxuXG4vKipcbiAqIEEgaGlzdG9yeSBpbnRlcmZhY2UgdGhhdCBub3JtYWxpemVzIHRoZSBkaWZmZXJlbmNlcyBhY3Jvc3NcbiAqIHZhcmlvdXMgZW52aXJvbm1lbnRzIGFuZCBpbXBsZW1lbnRhdGlvbnMuIFJlcXVpcmVzIGNvbmNyZXRlXG4gKiBzdWJjbGFzc2VzIHRvIGltcGxlbWVudCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XG4gKlxuICogLSBwdXNoU3RhdGUoc3RhdGUsIHBhdGgpXG4gKiAtIHJlcGxhY2VTdGF0ZShzdGF0ZSwgcGF0aClcbiAqIC0gZ28obilcbiAqL1xuXG52YXIgSGlzdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhpc3RvcnkoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhpc3RvcnkpO1xuXG4gICAgUmVxdWlyZWRIaXN0b3J5U3ViY2xhc3NNZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgKDAsIF9pbnZhcmlhbnQyWydkZWZhdWx0J10pKHR5cGVvZiB0aGlzW21ldGhvZF0gPT09ICdmdW5jdGlvbicsICclcyBuZWVkcyBhIFwiJXNcIiBtZXRob2QnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIG1ldGhvZCk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICB0aGlzLnBhcnNlUXVlcnlTdHJpbmcgPSBvcHRpb25zLnBhcnNlUXVlcnlTdHJpbmcgfHwgX1VSTFV0aWxzLnBhcnNlUXVlcnlTdHJpbmc7XG4gICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcbiAgfVxuXG4gIEhpc3RvcnkucHJvdG90eXBlLl9ub3RpZnlDaGFuZ2UgPSBmdW5jdGlvbiBfbm90aWZ5Q2hhbmdlKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmNoYW5nZUxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkgdGhpcy5jaGFuZ2VMaXN0ZW5lcnNbaV0uY2FsbCh0aGlzKTtcbiAgfTtcblxuICBIaXN0b3J5LnByb3RvdHlwZS5hZGRDaGFuZ2VMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIH07XG5cbiAgSGlzdG9yeS5wcm90b3R5cGUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzID0gdGhpcy5jaGFuZ2VMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsaSkge1xuICAgICAgcmV0dXJuIGxpICE9PSBsaXN0ZW5lcjtcbiAgICB9KTtcbiAgfTtcblxuICBIaXN0b3J5LnByb3RvdHlwZS5iYWNrID0gZnVuY3Rpb24gYmFjaygpIHtcbiAgICB0aGlzLmdvKC0xKTtcbiAgfTtcblxuICBIaXN0b3J5LnByb3RvdHlwZS5mb3J3YXJkID0gZnVuY3Rpb24gZm9yd2FyZCgpIHtcbiAgICB0aGlzLmdvKDEpO1xuICB9O1xuXG4gIEhpc3RvcnkucHJvdG90eXBlLl9jcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uIF9jcmVhdGVTdGF0ZShzdGF0ZSkge1xuICAgIHN0YXRlID0gc3RhdGUgfHwge307XG5cbiAgICBpZiAoIXN0YXRlLmtleSkgc3RhdGUua2V5ID0gY3JlYXRlUmFuZG9tS2V5KCk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgSGlzdG9yeS5wcm90b3R5cGUuY3JlYXRlTG9jYXRpb24gPSBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwgbmF2aWdhdGlvblR5cGUpIHtcbiAgICB2YXIgcGF0aG5hbWUgPSAoMCwgX1VSTFV0aWxzLmdldFBhdGhuYW1lKShwYXRoKTtcbiAgICB2YXIgcXVlcnlTdHJpbmcgPSAoMCwgX1VSTFV0aWxzLmdldFF1ZXJ5U3RyaW5nKShwYXRoKTtcbiAgICB2YXIgcXVlcnkgPSBxdWVyeVN0cmluZyA/IHRoaXMucGFyc2VRdWVyeVN0cmluZyhxdWVyeVN0cmluZykgOiBudWxsO1xuICAgIHJldHVybiBuZXcgX0xvY2F0aW9uMlsnZGVmYXVsdCddKHBhdGhuYW1lLCBxdWVyeSwgc3RhdGUsIG5hdmlnYXRpb25UeXBlKTtcbiAgfTtcblxuICByZXR1cm4gSGlzdG9yeTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1JlYWN0JFByb3BUeXBlcyA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXM7XG52YXIgb2JqZWN0ID0gX1JlYWN0JFByb3BUeXBlcy5vYmplY3Q7XG52YXIgc3RyaW5nID0gX1JlYWN0JFByb3BUeXBlcy5zdHJpbmc7XG52YXIgZnVuYyA9IF9SZWFjdCRQcm9wVHlwZXMuZnVuYztcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG4vKipcbiAqIDxMaW5rPiBjb21wb25lbnRzIGFyZSB1c2VkIHRvIGNyZWF0ZSBhbiA8YT4gZWxlbWVudCB0aGF0IGxpbmtzIHRvIGEgcm91dGUuXG4gKiBXaGVuIHRoYXQgcm91dGUgaXMgYWN0aXZlLCB0aGUgbGluayBnZXRzIGFuIFwiYWN0aXZlXCIgY2xhc3MgbmFtZSAob3IgdGhlXG4gKiB2YWx1ZSBvZiBpdHMgYGFjdGl2ZUNsYXNzTmFtZWAgcHJvcCkuXG4gKlxuICogRm9yIGV4YW1wbGUsIGFzc3VtaW5nIHlvdSBoYXZlIHRoZSBmb2xsb3dpbmcgcm91dGU6XG4gKlxuICogICA8Um91dGUgbmFtZT1cInNob3dQb3N0XCIgcGF0aD1cIi9wb3N0cy86cG9zdElEXCIgaGFuZGxlcj17UG9zdH0vPlxuICpcbiAqIFlvdSBjb3VsZCB1c2UgdGhlIGZvbGxvd2luZyBjb21wb25lbnQgdG8gbGluayB0byB0aGF0IHJvdXRlOlxuICpcbiAqICAgPExpbmsgdG89e2AvcG9zdHMvJHtwb3N0LmlkfWB9IC8+XG4gKlxuICogTGlua3MgbWF5IHBhc3MgYWxvbmcgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnNcbiAqIHVzaW5nIHRoZSBgcXVlcnlgIHByb3AuXG4gKlxuICogICA8TGluayB0bz1cIi9wb3N0cy8xMjNcIiBxdWVyeT17eyBzaG93OnRydWUgfX0vPlxuICovXG52YXIgTGluayA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTGluaycsXG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBvYmplY3RcbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhY3RpdmVTdHlsZTogb2JqZWN0LFxuICAgIGFjdGl2ZUNsYXNzTmFtZTogc3RyaW5nLFxuICAgIHRvOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBxdWVyeTogb2JqZWN0LFxuICAgIHN0YXRlOiBvYmplY3QsXG4gICAgb25DbGljazogZnVuY1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgYWN0aXZlQ2xhc3NOYW1lOiAnYWN0aXZlJyxcbiAgICAgIHN0eWxlOiB7fVxuICAgIH07XG4gIH0sXG5cbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgdmFyIGFsbG93VHJhbnNpdGlvbiA9IHRydWU7XG4gICAgdmFyIGNsaWNrUmVzdWx0O1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykgY2xpY2tSZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKGlzTW9kaWZpZWRFdmVudChldmVudCkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZXZlbnQpKSByZXR1cm47XG5cbiAgICBpZiAoY2xpY2tSZXN1bHQgPT09IGZhbHNlIHx8IGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIGFsbG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChhbGxvd1RyYW5zaXRpb24pIHRoaXMuY29udGV4dC5yb3V0ZXIudHJhbnNpdGlvblRvKHRoaXMucHJvcHMudG8sIHRoaXMucHJvcHMucXVlcnksIHRoaXMucHJvcHMuc3RhdGUpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciByb3V0ZXIgPSB0aGlzLmNvbnRleHQucm91dGVyO1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciB0byA9IF9wcm9wcy50bztcbiAgICB2YXIgcXVlcnkgPSBfcHJvcHMucXVlcnk7XG5cbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgaHJlZjogcm91dGVyLm1ha2VIcmVmKHRvLCBxdWVyeSksXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrXG4gICAgfSk7XG5cbiAgICAvLyBpZ25vcmUgaWYgcmVuZGVyZWQgb3V0c2lkZSBvZiB0aGUgY29udGV4dCBvZiBhIHJvdXRlciwgc2ltcGxpZmllcyB1bml0IHRlc3RpbmdcbiAgICBpZiAocm91dGVyICYmIHJvdXRlci5pc0FjdGl2ZSh0bywgcXVlcnkpKSB7XG4gICAgICBpZiAocHJvcHMuYWN0aXZlQ2xhc3NOYW1lKSBwcm9wcy5jbGFzc05hbWUgKz0gcHJvcHMuY2xhc3NOYW1lICE9PSAnJyA/ICcgJyArIHByb3BzLmFjdGl2ZUNsYXNzTmFtZSA6IHByb3BzLmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgICAgaWYgKHByb3BzLmFjdGl2ZVN0eWxlKSBwcm9wcy5zdHlsZSA9IF9leHRlbmRzKHt9LCBwcm9wcy5zdHlsZSwgcHJvcHMuYWN0aXZlU3R5bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnYScsIHByb3BzKTtcbiAgfVxuXG59KTtcblxuZXhwb3J0cy5MaW5rID0gTGluaztcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExpbms7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX05hdmlnYXRpb25UeXBlcyA9IHJlcXVpcmUoJy4vTmF2aWdhdGlvblR5cGVzJyk7XG5cbnZhciBfTmF2aWdhdGlvblR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdmlnYXRpb25UeXBlcyk7XG5cbi8qKlxuICogQSBMb2NhdGlvbiBhbnN3ZXJzIHR3byBpbXBvcnRhbnQgcXVlc3Rpb25zOlxuICpcbiAqIDEuIFdoZXJlIGFtIEk/XG4gKiAyLiBIb3cgZGlkIEkgZ2V0IGhlcmU/XG4gKi9cblxudmFyIExvY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG9jYXRpb24oKSB7XG4gICAgdmFyIHBhdGhuYW1lID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAnLycgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIHF1ZXJ5ID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgbmF2aWdhdGlvblR5cGUgPSBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IF9OYXZpZ2F0aW9uVHlwZXMyWydkZWZhdWx0J10uUE9QIDogYXJndW1lbnRzWzNdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2F0aW9uKTtcblxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMubmF2aWdhdGlvblR5cGUgPSBuYXZpZ2F0aW9uVHlwZTtcbiAgfVxuXG4gIExvY2F0aW9uLmlzTG9jYXRpb24gPSBmdW5jdGlvbiBpc0xvY2F0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiBMb2NhdGlvbjtcbiAgfTtcblxuICByZXR1cm4gTG9jYXRpb247XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBMb2NhdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBvYmplY3QgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm9iamVjdDtcblxuLyoqXG4gKiBBIG1peGluIGZvciBjb21wb25lbnRzIHRoYXQgbW9kaWZ5IHRoZSBVUkwuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgIGltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuICpcbiAqICAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICBtaXhpbnM6IFsgTmF2aWdhdGlvbiBdLFxuICogICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gKiAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICogICAgICAgdGhpcy50cmFuc2l0aW9uVG8oJ2FSb3V0ZScsIHsgdGhlOiAncGFyYW1zJyB9LCB7IHRoZTogJ3F1ZXJ5JyB9KTtcbiAqICAgICB9LFxuICogICAgIHJlbmRlcigpIHtcbiAqICAgICAgIHJldHVybiAoXG4gKiAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkNsaWNrIG1lITwvYT5cbiAqICAgICAgICk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqL1xudmFyIE5hdmlnYXRpb24gPSB7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBvYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbn07XG5cbnZhciBSb3V0ZXJOYXZpZ2F0aW9uTWV0aG9kcyA9IFsnbWFrZVBhdGgnLCAnbWFrZUhyZWYnLCAndHJhbnNpdGlvblRvJywgJ3JlcGxhY2VXaXRoJywgJ2dvJywgJ2dvQmFjaycsICdnb0ZvcndhcmQnXTtcblxuUm91dGVyTmF2aWdhdGlvbk1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIE5hdmlnYXRpb25bbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVyID0gdGhpcy5jb250ZXh0LnJvdXRlcjtcbiAgICByZXR1cm4gcm91dGVyW21ldGhvZF0uYXBwbHkocm91dGVyLCBhcmd1bWVudHMpO1xuICB9O1xufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE5hdmlnYXRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9rZXltaXJyb3IgPSByZXF1aXJlKCdrZXltaXJyb3InKTtcblxudmFyIF9rZXltaXJyb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5bWlycm9yKTtcblxudmFyIE5hdmlnYXRpb25UeXBlcyA9ICgwLCBfa2V5bWlycm9yMlsnZGVmYXVsdCddKSh7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBhIGNhbGwgdG8gaGlzdG9yeS5wdXNoLlxuICAgKi9cbiAgUFVTSDogbnVsbCxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnJlcGxhY2UuXG4gICAqL1xuICBSRVBMQUNFOiBudWxsLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgc29tZSBvdGhlciBhY3Rpb24gc3VjaFxuICAgKiBhcyB1c2luZyBhIGJyb3dzZXIncyBiYWNrL2ZvcndhcmQgYnV0dG9ucyBhbmQvb3IgbWFudWFsbHkgbWFuaXB1bGF0aW5nXG4gICAqIHRoZSBVUkwgaW4gYSBicm93c2VyJ3MgbG9jYXRpb24gYmFyLiBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICAgKlxuICAgKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0V2ZW50SGFuZGxlcnMvb25wb3BzdGF0ZVxuICAgKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovXG4gIFBPUDogbnVsbFxuXG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTmF2aWdhdGlvblR5cGVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Mb2NhdGlvbiA9IHJlcXVpcmUoJy4vTG9jYXRpb24nKTtcblxudmFyIF9Mb2NhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Mb2NhdGlvbik7XG5cbnZhciBfSGlzdG9yeSA9IHJlcXVpcmUoJy4vSGlzdG9yeScpO1xuXG52YXIgX0hpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGlzdG9yeSk7XG5cbnZhciBfUmVhY3QkUHJvcFR5cGVzID0gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcztcbnZhciBmdW5jID0gX1JlYWN0JFByb3BUeXBlcy5mdW5jO1xudmFyIG9iamVjdCA9IF9SZWFjdCRQcm9wVHlwZXMub2JqZWN0O1xudmFyIGFycmF5T2YgPSBfUmVhY3QkUHJvcFR5cGVzLmFycmF5T2Y7XG52YXIgaW5zdGFuY2VPZiA9IF9SZWFjdCRQcm9wVHlwZXMuaW5zdGFuY2VPZjtcbnZhciBvbmVPZlR5cGUgPSBfUmVhY3QkUHJvcFR5cGVzLm9uZU9mVHlwZTtcbnZhciBlbGVtZW50ID0gX1JlYWN0JFByb3BUeXBlcy5lbGVtZW50O1xuXG5mdW5jdGlvbiBmYWxzeShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKHByb3BzW3Byb3BOYW1lXSkgcmV0dXJuIG5ldyBFcnJvcignPCcgKyBjb21wb25lbnROYW1lICsgJz4gc2hvdWxkIG5vdCBoYXZlIGEgXCInICsgcHJvcE5hbWUgKyAnXCIgcHJvcCcpO1xufVxuXG52YXIgY29tcG9uZW50ID0gZnVuYztcbnZhciBjb21wb25lbnRzID0gb25lT2ZUeXBlKFtjb21wb25lbnQsIG9iamVjdF0pO1xudmFyIGhpc3RvcnkgPSBpbnN0YW5jZU9mKF9IaXN0b3J5MlsnZGVmYXVsdCddKTtcbnZhciBsb2NhdGlvbiA9IGluc3RhbmNlT2YoX0xvY2F0aW9uMlsnZGVmYXVsdCddKTtcbnZhciByb3V0ZSA9IG9uZU9mVHlwZShbb2JqZWN0LCBlbGVtZW50XSk7XG52YXIgcm91dGVzID0gb25lT2ZUeXBlKFtyb3V0ZSwgYXJyYXlPZihyb3V0ZSldKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZhbHN5OiBmYWxzeSxcbiAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXG4gIGhpc3Rvcnk6IGhpc3RvcnksXG4gIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgcm91dGU6IHJvdXRlLFxuICByb3V0ZXM6IHJvdXRlc1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX1JvdXRlVXRpbHMgPSByZXF1aXJlKCcuL1JvdXRlVXRpbHMnKTtcblxudmFyIF9VUkxVdGlscyA9IHJlcXVpcmUoJy4vVVJMVXRpbHMnKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG52YXIgX1JlYWN0JFByb3BUeXBlcyA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXM7XG52YXIgc3RyaW5nID0gX1JlYWN0JFByb3BUeXBlcy5zdHJpbmc7XG52YXIgb2JqZWN0ID0gX1JlYWN0JFByb3BUeXBlcy5vYmplY3Q7XG52YXIgUmVkaXJlY3QgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JlZGlyZWN0JyxcblxuICBzdGF0aWNzOiB7XG5cbiAgICBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgcm91dGUgPSAoMCwgX1JvdXRlVXRpbHMuY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KShlbGVtZW50KTtcblxuICAgICAgaWYgKHJvdXRlLmZyb20pIHJvdXRlLnBhdGggPSByb3V0ZS5mcm9tO1xuXG4gICAgICByb3V0ZS5vbkVudGVyID0gZnVuY3Rpb24gKG5leHRTdGF0ZSwgdHJhbnNpdGlvbikge1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBuZXh0U3RhdGUubG9jYXRpb247XG4gICAgICAgIHZhciBwYXJhbXMgPSBuZXh0U3RhdGUucGFyYW1zO1xuXG4gICAgICAgIHZhciBwYXRobmFtZSA9IHJvdXRlLnRvID8gKDAsIF9VUkxVdGlscy5mb3JtYXRQYXR0ZXJuKShyb3V0ZS50bywgcGFyYW1zKSA6IGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgICAgIHRyYW5zaXRpb24udG8ocGF0aG5hbWUsIHJvdXRlLnF1ZXJ5IHx8IGxvY2F0aW9uLnF1ZXJ5LCByb3V0ZS5zdGF0ZSB8fCBsb2NhdGlvbi5zdGF0ZSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGZyb206IHN0cmluZywgLy8gQWxpYXMgZm9yIHBhdGhcbiAgICB0bzogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcXVlcnk6IG9iamVjdCxcbiAgICBzdGF0ZTogb2JqZWN0LFxuICAgIG9uRW50ZXI6IF9Qcm9wVHlwZXMuZmFsc3ksXG4gICAgY2hpbGRyZW46IF9Qcm9wVHlwZXMuZmFsc3lcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAoMCwgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSkoZmFsc2UsICc8UmVkaXJlY3Q+IGVsZW1lbnRzIGFyZSBmb3Igcm91dGVyIGNvbmZpZ3VyYXRpb24gb25seSBhbmQgc2hvdWxkIG5vdCBiZSByZW5kZXJlZCcpO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzLlJlZGlyZWN0ID0gUmVkaXJlY3Q7XG5leHBvcnRzWydkZWZhdWx0J10gPSBSZWRpcmVjdDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX1JvdXRlVXRpbHMgPSByZXF1aXJlKCcuL1JvdXRlVXRpbHMnKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9SZWFjdCRQcm9wVHlwZXMgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzO1xudmFyIHN0cmluZyA9IF9SZWFjdCRQcm9wVHlwZXMuc3RyaW5nO1xudmFyIGJvb2wgPSBfUmVhY3QkUHJvcFR5cGVzLmJvb2w7XG52YXIgZnVuYyA9IF9SZWFjdCRQcm9wVHlwZXMuZnVuYztcblxuLyoqXG4gKiBBIDxSb3V0ZT4gaXMgdXNlZCB0byBkZWNsYXJlIHdoaWNoIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIHRvIHRoZSBwYWdlIHdoZW5cbiAqIHRoZSBVUkwgbWF0Y2hlcyBhIGdpdmVuIHBhdHRlcm4uXG4gKlxuICogUm91dGVzIGFyZSBhcnJhbmdlZCBpbiBhIG5lc3RlZCB0cmVlIHN0cnVjdHVyZS4gV2hlbiBhIG5ldyBVUkwgaXMgcmVxdWVzdGVkLFxuICogdGhlIHRyZWUgaXMgc2VhcmNoZWQgZGVwdGgtZmlyc3QgdG8gZmluZCBhIHJvdXRlIHdob3NlIHBhdGggbWF0Y2hlcyB0aGUgVVJMLlxuICogV2hlbiBvbmUgaXMgZm91bmQsIGFsbCByb3V0ZXMgaW4gdGhlIHRyZWUgdGhhdCBsZWFkIHRvIGl0IGFyZSBjb25zaWRlcmVkXG4gKiBcImFjdGl2ZVwiIGFuZCB0aGVpciBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBpbnRvIHRoZSBET00sIG5lc3RlZCBpbiB0aGUgc2FtZVxuICogb3JkZXIgYXMgdGhleSBhcmUgaW4gdGhlIHRyZWUuXG4gKi9cbnZhciBSb3V0ZSA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUm91dGUnLFxuXG4gIHN0YXRpY3M6IHtcblxuICAgIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudDogZnVuY3Rpb24gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciByb3V0ZSA9ICgwLCBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQpKGVsZW1lbnQpO1xuXG4gICAgICBpZiAocm91dGUuaGFuZGxlcikge1xuICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKGZhbHNlLCAnPFJvdXRlIGhhbmRsZXI+IGlzIGRlcHJlY2F0ZWQsIHVzZSA8Um91dGUgY29tcG9uZW50PiBpbnN0ZWFkJyk7XG4gICAgICAgIHJvdXRlLmNvbXBvbmVudCA9IHJvdXRlLmhhbmRsZXI7XG4gICAgICAgIGRlbGV0ZSByb3V0ZS5oYW5kbGVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGlnbm9yZVNjcm9sbEJlaGF2aW9yOiBib29sLFxuICAgIGhhbmRsZXI6IF9Qcm9wVHlwZXMuY29tcG9uZW50LFxuICAgIGNvbXBvbmVudDogX1Byb3BUeXBlcy5jb21wb25lbnQsXG4gICAgY29tcG9uZW50czogX1Byb3BUeXBlcy5jb21wb25lbnRzLFxuICAgIGdldENvbXBvbmVudHM6IGZ1bmNcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAoMCwgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSkoZmFsc2UsICc8Um91dGU+IGVsZW1lbnRzIGFyZSBmb3Igcm91dGVyIGNvbmZpZ3VyYXRpb24gb25seSBhbmQgc2hvdWxkIG5vdCBiZSByZW5kZXJlZCcpO1xuICB9XG5cbn0pO1xuXG5leHBvcnRzLlJvdXRlID0gUm91dGU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBSb3V0ZTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuaXNSZWFjdENoaWxkcmVuID0gaXNSZWFjdENoaWxkcmVuO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQgPSBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQ7XG5leHBvcnRzLmNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW47XG5leHBvcnRzLmNyZWF0ZVJvdXRlcyA9IGNyZWF0ZVJvdXRlcztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBpc1ZhbGlkQ2hpbGQob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCB8fCAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBpc1JlYWN0Q2hpbGRyZW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc1ZhbGlkQ2hpbGQob2JqZWN0KSB8fCBBcnJheS5pc0FycmF5KG9iamVjdCkgJiYgb2JqZWN0LmV2ZXJ5KGlzVmFsaWRDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKGNvbXBvbmVudE5hbWUsIHByb3BUeXBlcywgcHJvcHMpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgJ1Vua25vd25Db21wb25lbnQnO1xuXG4gIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BUeXBlcykge1xuICAgIGlmIChwcm9wVHlwZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICB2YXIgZXJyb3IgPSBwcm9wVHlwZXNbcHJvcE5hbWVdKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKGZhbHNlLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIHZhciByb3V0ZSA9IF9leHRlbmRzKHt9LCB0eXBlLmRlZmF1bHRQcm9wcywgZWxlbWVudC5wcm9wcyk7XG5cbiAgaWYgKHR5cGUucHJvcFR5cGVzKSBjaGVja1Byb3BUeXBlcyh0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSwgdHlwZS5wcm9wVHlwZXMsIHJvdXRlKTtcblxuICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICByb3V0ZS5jaGlsZFJvdXRlcyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKHJvdXRlLmNoaWxkcmVuKTtcbiAgICBkZWxldGUgcm91dGUuY2hpbGRyZW47XG4gIH1cblxuICByZXR1cm4gcm91dGU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIHJvdXRlcyBvYmplY3QgZnJvbSB0aGUgZ2l2ZW4gUmVhY3RDaGlsZHJlbi4gSlNYXG4gKiBwcm92aWRlcyBhIGNvbnZlbmllbnQgd2F5IHRvIHZpc3VhbGl6ZSBob3cgcm91dGVzIGluIHRoZSBoaWVyYXJjaHkgYXJlXG4gKiBuZXN0ZWQuXG4gKlxuICogICBpbXBvcnQgeyBSb3V0ZSwgY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4gfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuICogICBcbiAqICAgdmFyIHJvdXRlcyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKFxuICogICAgIDxSb3V0ZSBjb21wb25lbnQ9e0FwcH0+XG4gKiAgICAgICA8Um91dGUgcGF0aD1cImhvbWVcIiBjb21wb25lbnQ9e0Rhc2hib2FyZH0vPlxuICogICAgICAgPFJvdXRlIHBhdGg9XCJuZXdzXCIgY29tcG9uZW50PXtOZXdzRmVlZH0vPlxuICogICAgIDwvUm91dGU+XG4gKiAgICk7XG4gKlxuICogTm90ZTogVGhpcyBtZXRob2QgaXMgYXV0b21hdGljYWxseSB1c2VkIHdoZW4geW91IHByb3ZpZGUgPFJvdXRlPiBjaGlsZHJlblxuICogdG8gYSA8Um91dGVyPiBjb21wb25lbnQuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIHJvdXRlcyA9IFtdO1xuXG4gIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGlmICgoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShlbGVtZW50KSkge1xuICAgICAgLy8gQ29tcG9uZW50IGNsYXNzZXMgbWF5IGhhdmUgYSBzdGF0aWMgY3JlYXRlKiBtZXRob2QuXG4gICAgICBpZiAoZWxlbWVudC50eXBlLmNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudCkge1xuICAgICAgICByb3V0ZXMucHVzaChlbGVtZW50LnR5cGUuY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlcy5wdXNoKGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcm91dGVzO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYW4gYXJyYXkgb2Ygcm91dGVzIGZyb20gdGhlIGdpdmVuIG9iamVjdCB3aGljaFxuICogbWF5IGJlIGEgSlNYIHJvdXRlLCBhIHBsYWluIG9iamVjdCByb3V0ZSwgb3IgYW4gYXJyYXkgb2YgZWl0aGVyLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlcyhyb3V0ZXMpIHtcbiAgaWYgKGlzUmVhY3RDaGlsZHJlbihyb3V0ZXMpKSB7XG4gICAgcm91dGVzID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4ocm91dGVzKTtcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShyb3V0ZXMpKSB7XG4gICAgcm91dGVzID0gW3JvdXRlc107XG4gIH1cblxuICByZXR1cm4gcm91dGVzO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0FzeW5jVXRpbHMgPSByZXF1aXJlKCcuL0FzeW5jVXRpbHMnKTtcblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbnZhciBfUm91dGluZ1V0aWxzID0gcmVxdWlyZSgnLi9Sb3V0aW5nVXRpbHMnKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG52YXIgX1JvdXRlckNvbnRleHRNaXhpbiA9IHJlcXVpcmUoJy4vUm91dGVyQ29udGV4dE1peGluJyk7XG5cbnZhciBfUm91dGVyQ29udGV4dE1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlckNvbnRleHRNaXhpbik7XG5cbnZhciBfU2Nyb2xsTWFuYWdlbWVudE1peGluID0gcmVxdWlyZSgnLi9TY3JvbGxNYW5hZ2VtZW50TWl4aW4nKTtcblxudmFyIF9TY3JvbGxNYW5hZ2VtZW50TWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2Nyb2xsTWFuYWdlbWVudE1peGluKTtcblxudmFyIF9Mb2NhdGlvbiA9IHJlcXVpcmUoJy4vTG9jYXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uJyk7XG5cbnZhciBfVHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFuc2l0aW9uKTtcblxudmFyIF9SZWFjdCRQcm9wVHlwZXMgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzO1xudmFyIGFycmF5T2YgPSBfUmVhY3QkUHJvcFR5cGVzLmFycmF5T2Y7XG52YXIgZnVuYyA9IF9SZWFjdCRQcm9wVHlwZXMuZnVuYztcbnZhciBvYmplY3QgPSBfUmVhY3QkUHJvcFR5cGVzLm9iamVjdDtcblxuZnVuY3Rpb24gcnVuVHJhbnNpdGlvbihwcmV2U3RhdGUsIHJvdXRlcywgbG9jYXRpb24sIGhvb2tzLCBjYWxsYmFjaykge1xuICB2YXIgdHJhbnNpdGlvbiA9IG5ldyBfVHJhbnNpdGlvbjJbJ2RlZmF1bHQnXSgpO1xuXG4gICgwLCBfUm91dGluZ1V0aWxzLmdldFN0YXRlKShyb3V0ZXMsIGxvY2F0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIG5leHRTdGF0ZSkge1xuICAgIGlmIChlcnJvciB8fCBuZXh0U3RhdGUgPT0gbnVsbCB8fCB0cmFuc2l0aW9uLmlzQ2FuY2VsbGVkKSB7XG4gICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCwgdHJhbnNpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRTdGF0ZS5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgICB2YXIgdHJhbnNpdGlvbkhvb2tzID0gKDAsIF9Sb3V0aW5nVXRpbHMuZ2V0VHJhbnNpdGlvbkhvb2tzKShwcmV2U3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShob29rcykpIHRyYW5zaXRpb25Ib29rcy51bnNoaWZ0LmFwcGx5KHRyYW5zaXRpb25Ib29rcywgaG9va3MpO1xuXG4gICAgICAoMCwgX0FzeW5jVXRpbHMubG9vcEFzeW5jKSh0cmFuc2l0aW9uSG9va3MubGVuZ3RoLCBmdW5jdGlvbiAoaW5kZXgsIG5leHQsIGRvbmUpIHtcbiAgICAgICAgdHJhbnNpdGlvbkhvb2tzW2luZGV4XShuZXh0U3RhdGUsIHRyYW5zaXRpb24sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGlmIChlcnJvciB8fCB0cmFuc2l0aW9uLmlzQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBkb25lKGVycm9yKTsgLy8gTm8gbmVlZCB0byBjb250aW51ZS5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIHx8IHRyYW5zaXRpb24uaXNDYW5jZWxsZWQpIHtcbiAgICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCwgdHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKDAsIF9Sb3V0aW5nVXRpbHMuZ2V0Q29tcG9uZW50cykobmV4dFN0YXRlLmJyYW5jaCwgZnVuY3Rpb24gKGVycm9yLCBjb21wb25lbnRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgfHwgdHJhbnNpdGlvbi5pc0NhbmNlbGxlZCkge1xuICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgbnVsbCwgdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXh0U3RhdGUuY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG5leHRTdGF0ZSwgdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBSb3V0ZXIgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JvdXRlcicsXG5cbiAgbWl4aW5zOiBbX1JvdXRlckNvbnRleHRNaXhpbjJbJ2RlZmF1bHQnXSwgX1Njcm9sbE1hbmFnZW1lbnRNaXhpbjJbJ2RlZmF1bHQnXV0sXG5cbiAgc3RhdGljczoge1xuXG4gICAgLyoqXG4gICAgICogUnVucyBhIHRyYW5zaXRpb24gdG8gdGhlIGdpdmVuIGxvY2F0aW9uIHVzaW5nIHRoZSBnaXZlbiByb3V0ZXMgYW5kXG4gICAgICogdHJhbnNpdGlvbiBob29rcyAob3B0aW9uYWwpIGFuZCBjYWxscyBjYWxsYmFjayhlcnJvciwgc3RhdGUsIHRyYW5zaXRpb24pXG4gICAgICogd2hlbiBmaW5pc2hlZC4gVGhpcyBpcyBwcmltYXJpbHkgdXNlZnVsIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAgICovXG4gICAgcnVuOiBmdW5jdGlvbiBydW4ocm91dGVzLCBsb2NhdGlvbiwgdHJhbnNpdGlvbkhvb2tzLCBjYWxsYmFjaykge1xuICAgICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uSG9va3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSB0cmFuc2l0aW9uSG9va3M7XG4gICAgICAgIHRyYW5zaXRpb25Ib29rcyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgICgwLCBfaW52YXJpYW50MlsnZGVmYXVsdCddKSh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicsICdSb3V0ZXIucnVuIG5lZWRzIGEgY2FsbGJhY2snKTtcblxuICAgICAgcnVuVHJhbnNpdGlvbihudWxsLCByb3V0ZXMsIGxvY2F0aW9uLCB0cmFuc2l0aW9uSG9va3MsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jLmlzUmVxdWlyZWQsXG4gICAgb25BYm9ydDogZnVuYyxcbiAgICBvbkVycm9yOiBmdW5jLFxuICAgIG9uVXBkYXRlOiBmdW5jLFxuXG4gICAgLy8gQ2xpZW50LXNpZGVcbiAgICBoaXN0b3J5OiBfUHJvcFR5cGVzLmhpc3RvcnksXG4gICAgcm91dGVzOiBfUHJvcFR5cGVzLnJvdXRlcyxcbiAgICAvLyBSb3V0ZXMgbWF5IGFsc28gYmUgZ2l2ZW4gYXMgY2hpbGRyZW4gKEpTWClcbiAgICBjaGlsZHJlbjogX1Byb3BUeXBlcy5yb3V0ZXMsXG5cbiAgICAvLyBTZXJ2ZXItc2lkZVxuICAgIGxvY2F0aW9uOiBfUHJvcFR5cGVzLmxvY2F0aW9uLFxuICAgIGJyYW5jaDogX1Byb3BUeXBlcy5yb3V0ZXMsXG4gICAgcGFyYW1zOiBvYmplY3QsXG4gICAgY29tcG9uZW50czogYXJyYXlPZihfUHJvcFR5cGVzLmNvbXBvbmVudHMpXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUVsZW1lbnQ6IF9yZWFjdC5jcmVhdGVFbGVtZW50XG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNUcmFuc2l0aW9uaW5nOiBmYWxzZSxcbiAgICAgIGxvY2F0aW9uOiBudWxsLFxuICAgICAgYnJhbmNoOiBudWxsLFxuICAgICAgcGFyYW1zOiBudWxsLFxuICAgICAgY29tcG9uZW50czogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgX3VwZGF0ZVN0YXRlOiBmdW5jdGlvbiBfdXBkYXRlU3RhdGUobG9jYXRpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgKDAsIF9pbnZhcmlhbnQyWydkZWZhdWx0J10pKCgwLCBfTG9jYXRpb24uaXNMb2NhdGlvbikobG9jYXRpb24pLCAnQSA8Um91dGVyPiBuZWVkcyBhIHZhbGlkIExvY2F0aW9uJyk7XG5cbiAgICB2YXIgaG9va3MgPSB0aGlzLnRyYW5zaXRpb25Ib29rcztcbiAgICBpZiAoaG9va3MpIGhvb2tzID0gaG9va3MubWFwKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICByZXR1cm4gKDAsIF9Sb3V0aW5nVXRpbHMuY3JlYXRlVHJhbnNpdGlvbkhvb2spKGhvb2ssIF90aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1RyYW5zaXRpb25pbmc6IHRydWUgfSk7XG5cbiAgICBydW5UcmFuc2l0aW9uKHRoaXMuc3RhdGUsIHRoaXMucm91dGVzLCBsb2NhdGlvbiwgaG9va3MsIGZ1bmN0aW9uIChlcnJvciwgc3RhdGUsIHRyYW5zaXRpb24pIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBfdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zaXRpb24uaXNDYW5jZWxsZWQpIHtcbiAgICAgICAgaWYgKHRyYW5zaXRpb24ucmVkaXJlY3RJbmZvKSB7XG4gICAgICAgICAgdmFyIF90cmFuc2l0aW9uJHJlZGlyZWN0SW5mbyA9IHRyYW5zaXRpb24ucmVkaXJlY3RJbmZvO1xuICAgICAgICAgIHZhciBwYXRobmFtZSA9IF90cmFuc2l0aW9uJHJlZGlyZWN0SW5mby5wYXRobmFtZTtcbiAgICAgICAgICB2YXIgcXVlcnkgPSBfdHJhbnNpdGlvbiRyZWRpcmVjdEluZm8ucXVlcnk7XG4gICAgICAgICAgdmFyIHN0YXRlID0gX3RyYW5zaXRpb24kcmVkaXJlY3RJbmZvLnN0YXRlO1xuXG4gICAgICAgICAgX3RoaXMucmVwbGFjZVdpdGgocGF0aG5hbWUsIHF1ZXJ5LCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKDAsIF9pbnZhcmlhbnQyWydkZWZhdWx0J10pKF90aGlzLnN0YXRlLmxvY2F0aW9uLCAnWW91IG1heSBub3QgYWJvcnQgdGhlIGluaXRpYWwgdHJhbnNpdGlvbicpO1xuXG4gICAgICAgICAgX3RoaXMuaGFuZGxlQWJvcnQodHJhbnNpdGlvbi5hYm9ydFJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gbnVsbCkge1xuICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKGZhbHNlLCAnTG9jYXRpb24gXCIlc1wiIGRpZCBub3QgbWF0Y2ggYW55IHJvdXRlcycsIGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlLCBfdGhpcy5wcm9wcy5vblVwZGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNUcmFuc2l0aW9uaW5nOiBmYWxzZSB9KTtcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkcyBhIHRyYW5zaXRpb24gaG9vayB0aGF0IHJ1bnMgYmVmb3JlIGFsbCByb3V0ZSBob29rcyBpbiBhXG4gICAqIHRyYW5zaXRpb24uIFRoZSBzaWduYXR1cmUgaXMgdGhlIHNhbWUgYXMgcm91dGUgdHJhbnNpdGlvbiBob29rcy5cbiAgICovXG4gIGFkZFRyYW5zaXRpb25Ib29rOiBmdW5jdGlvbiBhZGRUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaWYgKCF0aGlzLnRyYW5zaXRpb25Ib29rcykgdGhpcy50cmFuc2l0aW9uSG9va3MgPSBbXTtcblxuICAgIHRoaXMudHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGdpdmVuIHRyYW5zaXRpb24gaG9vay5cbiAgICovXG4gIHJlbW92ZVRyYW5zaXRpb25Ib29rOiBmdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbkhvb2tzKSB0aGlzLnRyYW5zaXRpb25Ib29rcyA9IHRoaXMudHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaCkge1xuICAgICAgcmV0dXJuIGggIT09IGhvb2s7XG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlQWJvcnQ6IGZ1bmN0aW9uIGhhbmRsZUFib3J0KHJlYXNvbikge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQWJvcnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25BYm9ydC5jYWxsKHRoaXMsIHJlYXNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBiZXN0IHdlIGNhbiBkbyBoZXJlIGlzIGdvQmFjayBzbyB0aGUgbG9jYXRpb24gc3RhdGUgcmV2ZXJ0c1xuICAgICAgLy8gdG8gd2hhdCBpdCB3YXMuIEhvd2V2ZXIsIHdlIGFsc28gc2V0IGEgZmxhZyBzbyB0aGF0IHdlIGtub3cgbm90XG4gICAgICAvLyB0byBydW4gdGhyb3VnaCBfdXBkYXRlU3RhdGUgYWdhaW4gc2luY2Ugc3RhdGUgZGlkIG5vdCBjaGFuZ2UuXG4gICAgICB0aGlzLl9pZ25vcmVOZXh0SGlzdG9yeUNoYW5nZSA9IHRydWU7XG4gICAgICB0aGlzLmdvQmFjaygpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVFcnJvcjogZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkVycm9yKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXJyb3IuY2FsbCh0aGlzLCBlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRocm93IGVycm9ycyBieSBkZWZhdWx0IHNvIHdlIGRvbid0IHNpbGVudGx5IHN3YWxsb3cgdGhlbSFcbiAgICAgIHRocm93IGVycm9yOyAvLyBUaGlzIGVycm9yIHByb2JhYmx5IG9yaWdpbmF0ZWQgaW4gZ2V0Q2hpbGRSb3V0ZXMgb3IgZ2V0Q29tcG9uZW50cy5cbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlSGlzdG9yeUNoYW5nZTogZnVuY3Rpb24gaGFuZGxlSGlzdG9yeUNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5faWdub3JlTmV4dEhpc3RvcnlDaGFuZ2UpIHtcbiAgICAgIHRoaXMuX2lnbm9yZU5leHRIaXN0b3J5Q2hhbmdlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlKHRoaXMucHJvcHMuaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBoaXN0b3J5ID0gX3Byb3BzLmhpc3Rvcnk7XG4gICAgdmFyIHJvdXRlcyA9IF9wcm9wcy5yb3V0ZXM7XG4gICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgIHZhciBsb2NhdGlvbiA9IF9wcm9wcy5sb2NhdGlvbjtcbiAgICB2YXIgYnJhbmNoID0gX3Byb3BzLmJyYW5jaDtcbiAgICB2YXIgcGFyYW1zID0gX3Byb3BzLnBhcmFtcztcbiAgICB2YXIgY29tcG9uZW50cyA9IF9wcm9wcy5jb21wb25lbnRzO1xuXG4gICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgICgwLCBfaW52YXJpYW50MlsnZGVmYXVsdCddKShyb3V0ZXMgfHwgY2hpbGRyZW4sICdDbGllbnQtc2lkZSA8Um91dGVyPnMgbmVlZCByb3V0ZXMuIFRyeSB1c2luZyA8Um91dGVyIHJvdXRlcz4gb3IgJyArICdwYXNzaW5nIHlvdXIgcm91dGVzIGFzIG5lc3RlZCA8Um91dGU+IGNoaWxkcmVuJyk7XG5cbiAgICAgIHRoaXMucm91dGVzID0gKDAsIF9Sb3V0ZVV0aWxzLmNyZWF0ZVJvdXRlcykocm91dGVzIHx8IGNoaWxkcmVuKTtcblxuICAgICAgaWYgKHR5cGVvZiBoaXN0b3J5LnNldHVwID09PSAnZnVuY3Rpb24nKSBoaXN0b3J5LnNldHVwKCk7XG5cbiAgICAgIC8vIFdlIG5lZWQgdG8gbGlzdGVuIGZpcnN0IGluIGNhc2Ugd2UgcmVkaXJlY3QgaW1tZWRpYXRlbHkuXG4gICAgICBpZiAoaGlzdG9yeS5hZGRDaGFuZ2VMaXN0ZW5lcikgaGlzdG9yeS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLmhhbmRsZUhpc3RvcnlDaGFuZ2UpO1xuXG4gICAgICB0aGlzLl91cGRhdGVTdGF0ZShoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKDAsIF9pbnZhcmlhbnQyWydkZWZhdWx0J10pKGxvY2F0aW9uICYmIGJyYW5jaCAmJiBwYXJhbXMgJiYgY29tcG9uZW50cywgJ1NlcnZlci1zaWRlIDxSb3V0ZXI+cyBuZWVkIGxvY2F0aW9uLCBicmFuY2gsIHBhcmFtcywgYW5kIGNvbXBvbmVudHMgJyArICdwcm9wcy4gVHJ5IHVzaW5nIFJvdXRlci5ydW4gdG8gZ2V0IGFsbCB0aGUgcHJvcHMgeW91IG5lZWQnKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uOiBsb2NhdGlvbiwgYnJhbmNoOiBicmFuY2gsIHBhcmFtczogcGFyYW1zLCBjb21wb25lbnRzOiBjb21wb25lbnRzIH0pO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICgwLCBfaW52YXJpYW50MlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmhpc3RvcnkgPT09IG5leHRQcm9wcy5oaXN0b3J5LCAnPFJvdXRlciBoaXN0b3J5PiBtYXkgbm90IGJlIGNoYW5nZWQnKTtcblxuICAgIGlmIChuZXh0UHJvcHMuaGlzdG9yeSkge1xuICAgICAgdmFyIGN1cnJlbnRSb3V0ZXMgPSB0aGlzLnByb3BzLnJvdXRlcyB8fCB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgdmFyIG5leHRSb3V0ZXMgPSBuZXh0UHJvcHMucm91dGVzIHx8IG5leHRQcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGN1cnJlbnRSb3V0ZXMgIT09IG5leHRSb3V0ZXMpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSAoMCwgX1JvdXRlVXRpbHMuY3JlYXRlUm91dGVzKShuZXh0Um91dGVzKTtcblxuICAgICAgICAvLyBDYWxsIHRoaXMgaGVyZSBiZWNhdXNlIF91cGRhdGVTdGF0ZVxuICAgICAgICAvLyB1c2VzIHRoaXMucm91dGVzIHRvIGRldGVybWluZSBzdGF0ZS5cbiAgICAgICAgaWYgKG5leHRQcm9wcy5oaXN0b3J5LmxvY2F0aW9uKSB0aGlzLl91cGRhdGVTdGF0ZShuZXh0UHJvcHMuaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB2YXIgaGlzdG9yeSA9IHRoaXMucHJvcHMuaGlzdG9yeTtcblxuICAgIGlmIChoaXN0b3J5ICYmIGhpc3RvcnkucmVtb3ZlQ2hhbmdlTGlzdGVuZXIpIGhpc3RvcnkucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5oYW5kbGVIaXN0b3J5Q2hhbmdlKTtcbiAgfSxcblxuICBfY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcykge1xuICAgIHJldHVybiB0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nID8gdGhpcy5wcm9wcy5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpIDogbnVsbDtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBicmFuY2ggPSBfc3RhdGUuYnJhbmNoO1xuICAgIHZhciBwYXJhbXMgPSBfc3RhdGUucGFyYW1zO1xuICAgIHZhciBjb21wb25lbnRzID0gX3N0YXRlLmNvbXBvbmVudHM7XG5cbiAgICB2YXIgZWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoY29tcG9uZW50cykge1xuICAgICAgZWxlbWVudCA9IGNvbXBvbmVudHMucmVkdWNlUmlnaHQoZnVuY3Rpb24gKGVsZW1lbnQsIGNvbXBvbmVudHMsIGluZGV4KSB7XG4gICAgICAgIGlmIChjb21wb25lbnRzID09IG51bGwpIHJldHVybiBlbGVtZW50OyAvLyBEb24ndCBjcmVhdGUgbmV3IGNoaWxkcmVuOyB1c2UgdGhlIGdyYW5kY2hpbGRyZW4uXG5cbiAgICAgICAgdmFyIHJvdXRlID0gYnJhbmNoW2luZGV4XTtcbiAgICAgICAgdmFyIHJvdXRlUGFyYW1zID0gKDAsIF9Sb3V0aW5nVXRpbHMuZ2V0Um91dGVQYXJhbXMpKHJvdXRlLCBwYXJhbXMpO1xuICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgX3RoaXMyLnN0YXRlLCB7IHJvdXRlOiByb3V0ZSwgcm91dGVQYXJhbXM6IHJvdXRlUGFyYW1zIH0pO1xuXG4gICAgICAgIGlmICgoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShlbGVtZW50KSkge1xuICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgLy8gSW4gcmVuZGVyLCBkbyB2YXIgeyBoZWFkZXIsIHNpZGViYXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgX2V4dGVuZHMocHJvcHMsIGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhciBlbGVtZW50cyA9IHt9O1xuXG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudHMpIGlmIChjb21wb25lbnRzLmhhc093blByb3BlcnR5KGtleSkpIGVsZW1lbnRzW2tleV0gPSBfdGhpczIuX2NyZWF0ZUVsZW1lbnQoY29tcG9uZW50c1trZXldLCBwcm9wcyk7XG5cbiAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXMyLl9jcmVhdGVFbGVtZW50KGNvbXBvbmVudHMsIHByb3BzKTtcbiAgICAgIH0sIGVsZW1lbnQpO1xuICAgIH1cblxuICAgICgwLCBfaW52YXJpYW50MlsnZGVmYXVsdCddKShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IGZhbHNlIHx8ICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGVsZW1lbnQpLCAnVGhlIHJvb3Qgcm91dGUgbXVzdCByZW5kZXIgYSBzaW5nbGUgZWxlbWVudCcpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJvdXRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfVVJMVXRpbHMgPSByZXF1aXJlKCcuL1VSTFV0aWxzJyk7XG5cbnZhciBfUmVhY3QkUHJvcFR5cGVzID0gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcztcbnZhciBmdW5jID0gX1JlYWN0JFByb3BUeXBlcy5mdW5jO1xudmFyIG9iamVjdCA9IF9SZWFjdCRQcm9wVHlwZXMub2JqZWN0O1xuXG5mdW5jdGlvbiBwYXRobmFtZUlzQWN0aXZlKHBhdGhuYW1lLCBhY3RpdmVQYXRobmFtZSkge1xuICBpZiAoKDAsIF9VUkxVdGlscy5zdHJpcExlYWRpbmdTbGFzaGVzKShhY3RpdmVQYXRobmFtZSkuaW5kZXhPZigoMCwgX1VSTFV0aWxzLnN0cmlwTGVhZGluZ1NsYXNoZXMpKHBhdGhuYW1lKSkgPT09IDApIHJldHVybiB0cnVlOyAvLyBUaGlzIHF1aWNrIGNvbXBhcmlzb24gc2F0aXNmaWVzIG1vc3QgdXNlIGNhc2VzLlxuXG4gIC8vIFRPRE86IEltcGxlbWVudCBhIG1vcmUgc3RyaW5nZW50IGNvbXBhcmlzb24gdGhhdCBjaGVja3NcbiAgLy8gdG8gc2VlIGlmIHRoZSBwYXRobmFtZSBtYXRjaGVzIGFueSByb3V0ZXMgKGFuZCBwYXJhbXMpXG4gIC8vIGluIHRoZSBjdXJyZW50bHkgYWN0aXZlIGJyYW5jaC5cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5SXNBY3RpdmUocXVlcnksIGFjdGl2ZVF1ZXJ5KSB7XG4gIGlmIChhY3RpdmVRdWVyeSA9PSBudWxsKSByZXR1cm4gcXVlcnkgPT0gbnVsbDtcblxuICBpZiAocXVlcnkgPT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgZm9yICh2YXIgcCBpbiBxdWVyeSkgaWYgKHF1ZXJ5Lmhhc093blByb3BlcnR5KHApICYmIFN0cmluZyhxdWVyeVtwXSkgIT09IFN0cmluZyhhY3RpdmVRdWVyeVtwXSkpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIFJvdXRlckNvbnRleHRNaXhpbiA9IHtcblxuICBwcm9wVHlwZXM6IHtcbiAgICBzdHJpbmdpZnlRdWVyeTogZnVuYy5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0cmluZ2lmeVF1ZXJ5OiBfVVJMVXRpbHMuc3RyaW5naWZ5UXVlcnlcbiAgICB9O1xuICB9LFxuXG4gIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBvYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldENoaWxkQ29udGV4dDogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICByb3V0ZXI6IHRoaXNcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVsbCBVUkwgcGF0aCBmcm9tIHRoZSBnaXZlbiBwYXRobmFtZSBhbmQgcXVlcnkuXG4gICAqL1xuICBtYWtlUGF0aDogZnVuY3Rpb24gbWFrZVBhdGgocGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBpZiAodHlwZW9mIHF1ZXJ5ICE9PSAnc3RyaW5nJykgcXVlcnkgPSB0aGlzLnByb3BzLnN0cmluZ2lmeVF1ZXJ5KHF1ZXJ5KTtcblxuICAgICAgaWYgKHF1ZXJ5ICE9PSAnJykgcmV0dXJuIHBhdGhuYW1lICsgJz8nICsgcXVlcnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhuYW1lO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgbWF5IHNhZmVseSBiZSB1c2VkIHRvIGxpbmsgdG8gdGhlIGdpdmVuXG4gICAqIHBhdGhuYW1lIGFuZCBxdWVyeS5cbiAgICovXG4gIG1ha2VIcmVmOiBmdW5jdGlvbiBtYWtlSHJlZihwYXRobmFtZSwgcXVlcnkpIHtcbiAgICB2YXIgcGF0aCA9IHRoaXMubWFrZVBhdGgocGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICB2YXIgaGlzdG9yeSA9IHRoaXMucHJvcHMuaGlzdG9yeTtcblxuICAgIGlmIChoaXN0b3J5ICYmIGhpc3RvcnkubWFrZUhyZWYpIHJldHVybiBoaXN0b3J5Lm1ha2VIcmVmKHBhdGgpO1xuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFB1c2hlcyBhIG5ldyBMb2NhdGlvbiBvbnRvIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgdHJhbnNpdGlvblRvOiBmdW5jdGlvbiB0cmFuc2l0aW9uVG8ocGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgdmFyIHN0YXRlID0gYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuICAgIHZhciBoaXN0b3J5ID0gdGhpcy5wcm9wcy5oaXN0b3J5O1xuXG4gICAgKDAsIF9pbnZhcmlhbnQyWydkZWZhdWx0J10pKGhpc3RvcnksICdSb3V0ZXIjdHJhbnNpdGlvblRvIGlzIGNsaWVudC1zaWRlIG9ubHkgKG5lZWRzIGhpc3RvcnkpJyk7XG5cbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgdGhpcy5tYWtlUGF0aChwYXRobmFtZSwgcXVlcnkpKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgTG9jYXRpb24gb24gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICByZXBsYWNlV2l0aDogZnVuY3Rpb24gcmVwbGFjZVdpdGgocGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgdmFyIHN0YXRlID0gYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuICAgIHZhciBoaXN0b3J5ID0gdGhpcy5wcm9wcy5oaXN0b3J5O1xuXG4gICAgKDAsIF9pbnZhcmlhbnQyWydkZWZhdWx0J10pKGhpc3RvcnksICdSb3V0ZXIjcmVwbGFjZVdpdGggaXMgY2xpZW50LXNpZGUgb25seSAobmVlZHMgaGlzdG9yeSknKTtcblxuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCB0aGlzLm1ha2VQYXRoKHBhdGhuYW1lLCBxdWVyeSkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgZm9yd2FyZC9iYWNrd2FyZCBuIGVudHJpZXMgaW4gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICBnbzogZnVuY3Rpb24gZ28obikge1xuICAgIHZhciBoaXN0b3J5ID0gdGhpcy5wcm9wcy5oaXN0b3J5O1xuXG4gICAgKDAsIF9pbnZhcmlhbnQyWydkZWZhdWx0J10pKGhpc3RvcnksICdSb3V0ZXIjZ28gaXMgY2xpZW50LXNpZGUgb25seSAobmVlZHMgaGlzdG9yeSknKTtcblxuICAgIGhpc3RvcnkuZ28obik7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyBiYWNrIG9uZSBlbnRyeSBpbiB0aGUgaGlzdG9yeSBzdGFjay4gVGhpcyBpcyBpZGVudGljYWwgdG9cbiAgICogdGhlIHVzZXIgY2xpY2tpbmcgdGhlIGJyb3dzZXIncyBiYWNrIGJ1dHRvbi5cbiAgICovXG4gIGdvQmFjazogZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHRoaXMuZ28oLTEpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgZm9yd2FyZCBvbmUgZW50cnkgaW4gdGhlIGhpc3Rvcnkgc3RhY2suIFRoaXMgaXMgaWRlbnRpY2FsIHRvXG4gICAqIHRoZSB1c2VyIGNsaWNraW5nIHRoZSBicm93c2VyJ3MgZm9yd2FyZCBidXR0b24uXG4gICAqL1xuICBnb0ZvcndhcmQ6IGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICB0aGlzLmdvKDEpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYSA8TGluaz4gdG8gdGhlIGdpdmVuIHBhdGhuYW1lL3F1ZXJ5IGNvbWJpbmF0aW9uIGlzXG4gICAqIGN1cnJlbnRseSBhY3RpdmUuXG4gICAqL1xuICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUocGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgdmFyIGxvY2F0aW9uID0gdGhpcy5zdGF0ZS5sb2NhdGlvbjtcblxuICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gcGF0aG5hbWVJc0FjdGl2ZShwYXRobmFtZSwgbG9jYXRpb24ucGF0aG5hbWUpICYmIHF1ZXJ5SXNBY3RpdmUocXVlcnksIGxvY2F0aW9uLnF1ZXJ5KTtcbiAgfVxuXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSb3V0ZXJDb250ZXh0TWl4aW47XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldFN0YXRlID0gZ2V0U3RhdGU7XG5leHBvcnRzLmNyZWF0ZVRyYW5zaXRpb25Ib29rID0gY3JlYXRlVHJhbnNpdGlvbkhvb2s7XG5leHBvcnRzLmdldFRyYW5zaXRpb25Ib29rcyA9IGdldFRyYW5zaXRpb25Ib29rcztcbmV4cG9ydHMuZ2V0Q29tcG9uZW50cyA9IGdldENvbXBvbmVudHM7XG5leHBvcnRzLmdldFJvdXRlUGFyYW1zID0gZ2V0Um91dGVQYXJhbXM7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbnZhciBfVVJMVXRpbHMgPSByZXF1aXJlKCcuL1VSTFV0aWxzJyk7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG5mdW5jdGlvbiBnZXRDaGlsZFJvdXRlcyhyb3V0ZSwgbG9jYXRpb25TdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKHJvdXRlLmNoaWxkUm91dGVzKSB7XG4gICAgY2FsbGJhY2sobnVsbCwgcm91dGUuY2hpbGRSb3V0ZXMpO1xuICB9IGVsc2UgaWYgKHJvdXRlLmdldENoaWxkUm91dGVzKSB7XG4gICAgcm91dGUuZ2V0Q2hpbGRSb3V0ZXMobG9jYXRpb25TdGF0ZSwgY2FsbGJhY2spO1xuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhSb3V0ZShyb3V0ZSwgbG9jYXRpb25TdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKHJvdXRlLmluZGV4Um91dGUpIHtcbiAgICBjYWxsYmFjayhudWxsLCByb3V0ZS5pbmRleFJvdXRlKTtcbiAgfSBlbHNlIGlmIChyb3V0ZS5nZXRJbmRleFJvdXRlKSB7XG4gICAgcm91dGUuZ2V0SW5kZXhSb3V0ZShjYWxsYmFjaywgbG9jYXRpb25TdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NpZ25QYXJhbXMocGFyYW1zLCBwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcykge1xuICByZXR1cm4gcGFyYW1OYW1lcy5yZWR1Y2VSaWdodChmdW5jdGlvbiAocGFyYW1zLCBwYXJhbU5hbWUsIGluZGV4KSB7XG4gICAgdmFyIHBhcmFtVmFsdWUgPSBwYXJhbVZhbHVlc1tpbmRleF07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNbcGFyYW1OYW1lXSkpIHtcbiAgICAgIHBhcmFtc1twYXJhbU5hbWVdLnVuc2hpZnQocGFyYW1WYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChwYXJhbU5hbWUgaW4gcGFyYW1zKSB7XG4gICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IFtwYXJhbVZhbHVlLCBwYXJhbXNbcGFyYW1OYW1lXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtc1twYXJhbU5hbWVdID0gcGFyYW1WYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9LCBwYXJhbXMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXJhbXMocGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMpIHtcbiAgcmV0dXJuIGFzc2lnblBhcmFtcyh7fSwgcGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMpO1xufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlRGVlcChyb3V0ZSwgcGF0aG5hbWUsIGxvY2F0aW9uU3RhdGUsIGNhbGxiYWNrKSB7XG4gIHZhciBfbWF0Y2hQYXR0ZXJuID0gKDAsIF9VUkxVdGlscy5tYXRjaFBhdHRlcm4pKHJvdXRlLnBhdGgsIHBhdGhuYW1lKTtcblxuICB2YXIgcmVtYWluaW5nUGF0aG5hbWUgPSBfbWF0Y2hQYXR0ZXJuLnJlbWFpbmluZ1BhdGhuYW1lO1xuICB2YXIgcGFyYW1OYW1lcyA9IF9tYXRjaFBhdHRlcm4ucGFyYW1OYW1lcztcbiAgdmFyIHBhcmFtVmFsdWVzID0gX21hdGNoUGF0dGVybi5wYXJhbVZhbHVlcztcblxuICB2YXIgaXNFeGFjdE1hdGNoID0gcmVtYWluaW5nUGF0aG5hbWUgPT09ICcnO1xuXG4gIGlmIChpc0V4YWN0TWF0Y2ggJiYgcm91dGUucGF0aCkge1xuICAgIHZhciBwYXJhbXMgPSBjcmVhdGVQYXJhbXMocGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMpO1xuICAgIHZhciBicmFuY2ggPSBbcm91dGVdO1xuXG4gICAgZ2V0SW5kZXhSb3V0ZShyb3V0ZSwgbG9jYXRpb25TdGF0ZSwgZnVuY3Rpb24gKGVycm9yLCBpbmRleFJvdXRlKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGluZGV4Um91dGUpIGJyYW5jaC5wdXNoKGluZGV4Um91dGUpO1xuXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHsgcGFyYW1zOiBwYXJhbXMsIGJyYW5jaDogYnJhbmNoIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHJlbWFpbmluZ1BhdGhuYW1lICE9IG51bGwpIHtcbiAgICAvLyBUaGlzIHJvdXRlIG1hdGNoZWQgYXQgbGVhc3Qgc29tZSBvZiB0aGUgcGF0aC5cbiAgICBnZXRDaGlsZFJvdXRlcyhyb3V0ZSwgbG9jYXRpb25TdGF0ZSwgZnVuY3Rpb24gKGVycm9yLCBjaGlsZFJvdXRlcykge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGRSb3V0ZXMpIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhlIGNoaWxkIHJvdXRlcyB0byBzZWUgaWYgYW55IG9mIHRoZW0gbWF0Y2guXG4gICAgICAgIG1hdGNoUm91dGVzKGNoaWxkUm91dGVzLCByZW1haW5pbmdQYXRobmFtZSwgbG9jYXRpb25TdGF0ZSwgZnVuY3Rpb24gKGVycm9yLCBtYXRjaCkge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIC8vIEEgY2hpbGQgcm91dGUgbWF0Y2hlZCEgQXVnbWVudCB0aGUgbWF0Y2ggYW5kIHBhc3MgaXQgdXAgdGhlIHN0YWNrLlxuICAgICAgICAgICAgYXNzaWduUGFyYW1zKG1hdGNoLnBhcmFtcywgcGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMpO1xuICAgICAgICAgICAgbWF0Y2guYnJhbmNoLnVuc2hpZnQocm91dGUpO1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbWF0Y2gpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hSb3V0ZXMocm91dGVzLCBwYXRobmFtZSwgbG9jYXRpb25TdGF0ZSwgY2FsbGJhY2spIHtcbiAgcm91dGVzID0gKDAsIF9Sb3V0ZVV0aWxzLmNyZWF0ZVJvdXRlcykocm91dGVzKTtcblxuICAoMCwgX0FzeW5jVXRpbHMubG9vcEFzeW5jKShyb3V0ZXMubGVuZ3RoLCBmdW5jdGlvbiAoaW5kZXgsIG5leHQsIGRvbmUpIHtcbiAgICBtYXRjaFJvdXRlRGVlcChyb3V0ZXNbaW5kZXhdLCBwYXRobmFtZSwgbG9jYXRpb25TdGF0ZSwgZnVuY3Rpb24gKGVycm9yLCBtYXRjaCkge1xuICAgICAgaWYgKGVycm9yIHx8IG1hdGNoKSB7XG4gICAgICAgIGRvbmUoZXJyb3IsIG1hdGNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IG1hdGNoZXMgdGhlIGdpdmVuIGxvY2F0aW9uIHRvIGEgc2V0IG9mIHJvdXRlcyBhbmQgY2FsbHNcbiAqIGNhbGxiYWNrKGVycm9yLCBzdGF0ZSkgd2hlbiBmaW5pc2hlZC4gVGhlIHN0YXRlIG9iamVjdCBtYXkgaGF2ZSB0aGVcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqIC0gYnJhbmNoICAgICAgIEFuIGFycmF5IG9mIHJvdXRlcyB0aGF0IG1hdGNoZWQsIGluIGhpZXJhcmNoaWNhbCBvcmRlclxuICogLSBwYXJhbXMgICAgICAgQW4gb2JqZWN0IG9mIFVSTCBwYXJhbWV0ZXJzXG4gKlxuICogTm90ZTogVGhpcyBvcGVyYXRpb24gbWF5IHJldHVybiBzeW5jaHJvbm91c2x5IGlmIG5vIHJvdXRlcyBoYXZlIGFuXG4gKiBhc3luY2hyb25vdXMgZ2V0Q2hpbGRSb3V0ZXMgbWV0aG9kLlxuICovXG5cbmZ1bmN0aW9uIGdldFN0YXRlKHJvdXRlcywgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIG1hdGNoUm91dGVzKHJvdXRlcywgKDAsIF9VUkxVdGlscy5zdHJpcExlYWRpbmdTbGFzaGVzKShsb2NhdGlvbi5wYXRobmFtZSksIGxvY2F0aW9uLnN0YXRlLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHJvdXRlUGFyYW1zQ2hhbmdlZChyb3V0ZSwgcHJldlN0YXRlLCBuZXh0U3RhdGUpIHtcbiAgaWYgKCFyb3V0ZS5wYXRoKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIHBhcmFtTmFtZXMgPSAoMCwgX1VSTFV0aWxzLmdldFBhcmFtTmFtZXMpKHJvdXRlLnBhdGgpO1xuXG4gIHJldHVybiBwYXJhbU5hbWVzLnNvbWUoZnVuY3Rpb24gKHBhcmFtTmFtZSkge1xuICAgIHJldHVybiBwcmV2U3RhdGUucGFyYW1zW3BhcmFtTmFtZV0gIT09IG5leHRTdGF0ZS5wYXJhbXNbcGFyYW1OYW1lXTtcbiAgfSk7XG59XG5cbi8qKlxuICogUnVucyBhIGRpZmYgb24gdGhlIHR3byByb3V0ZXIgc3RhdGVzIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHR3b1xuICogYXJyYXlzOiAxKSB0aGUgcm91dGVzIHRoYXQgd2UgYXJlIGxlYXZpbmcsIHN0YXJ0aW5nIHdpdGggdGhlIGxlYWZcbiAqIHJvdXRlIGFuZCAyKSB0aGUgcm91dGVzIHRoYXQgd2UgYXJlIGVudGVyaW5nLCBlbmRpbmcgd2l0aCB0aGUgbGVhZlxuICogcm91dGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVEaWZmKHByZXZTdGF0ZSwgbmV4dFN0YXRlKSB7XG4gIHZhciBmcm9tUm91dGVzID0gcHJldlN0YXRlICYmIHByZXZTdGF0ZS5icmFuY2g7XG4gIHZhciB0b1JvdXRlcyA9IG5leHRTdGF0ZS5icmFuY2g7XG5cbiAgdmFyIGxlYXZpbmdSb3V0ZXMsIGVudGVyaW5nUm91dGVzO1xuICBpZiAoZnJvbVJvdXRlcykge1xuICAgIGxlYXZpbmdSb3V0ZXMgPSBmcm9tUm91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJldHVybiB0b1JvdXRlcy5pbmRleE9mKHJvdXRlKSA9PT0gLTEgfHwgcm91dGVQYXJhbXNDaGFuZ2VkKHJvdXRlLCBwcmV2U3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBvbkxlYXZlIGhvb2tzIHN0YXJ0IGF0IHRoZSBsZWFmIHJvdXRlLlxuICAgIGxlYXZpbmdSb3V0ZXMucmV2ZXJzZSgpO1xuXG4gICAgZW50ZXJpbmdSb3V0ZXMgPSB0b1JvdXRlcy5maWx0ZXIoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXR1cm4gZnJvbVJvdXRlcy5pbmRleE9mKHJvdXRlKSA9PT0gLTEgfHwgbGVhdmluZ1JvdXRlcy5pbmRleE9mKHJvdXRlKSAhPT0gLTE7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbGVhdmluZ1JvdXRlcyA9IFtdO1xuICAgIGVudGVyaW5nUm91dGVzID0gdG9Sb3V0ZXM7XG4gIH1cblxuICByZXR1cm4gW2xlYXZpbmdSb3V0ZXMsIGVudGVyaW5nUm91dGVzXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHJhbnNpdGlvbkhvb2soZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0U3RhdGUsIHRyYW5zaXRpb24sIGNhbGxiYWNrKSB7XG4gICAgaWYgKGZuLmxlbmd0aCA+IDIpIHtcbiAgICAgIGZuLmNhbGwoY29udGV4dCwgbmV4dFN0YXRlLCB0cmFuc2l0aW9uLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFzc3VtZSBmbiBleGVjdXRlcyBzeW5jaHJvbm91c2x5IGFuZFxuICAgICAgLy8gYXV0b21hdGljYWxseSBjYWxsIHRoZSBjYWxsYmFjayBmb3IgdGhlbS5cbiAgICAgIGZuLmNhbGwoY29udGV4dCwgbmV4dFN0YXRlLCB0cmFuc2l0aW9uKTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uSG9va3NGcm9tUm91dGVzKHJvdXRlcywgaG9va05hbWUpIHtcbiAgcmV0dXJuIHJvdXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGhvb2tzLCByb3V0ZSkge1xuICAgIGlmIChyb3V0ZVtob29rTmFtZV0pIGhvb2tzLnB1c2goY3JlYXRlVHJhbnNpdGlvbkhvb2socm91dGVbaG9va05hbWVdLCByb3V0ZSkpO1xuXG4gICAgcmV0dXJuIGhvb2tzO1xuICB9LCBbXSk7XG59XG5cbi8qKlxuICogQ29tcGlsZXMgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdHJhbnNpdGlvbiBob29rIGZ1bmN0aW9ucyB0aGF0XG4gKiBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSB3ZSB0cmFuc2l0aW9uIHRvIGEgbmV3IHN0YXRlLiBUcmFuc2l0aW9uXG4gKiBob29rIHNpZ25hdHVyZXMgYXJlOlxuICpcbiAqICAgLSByb3V0ZS5vbkxlYXZlKG5leHRTdGF0ZSwgdHJhbnNpdGlvblssIGNhbGxiYWNrIF0pXG4gKiAgIC0gcm91dGUub25FbnRlcihuZXh0U3RhdGUsIHRyYW5zaXRpb25bLCBjYWxsYmFjayBdKVxuICpcbiAqIFRyYW5zaXRpb24gaG9va3MgcnVuIGluIG9yZGVyIGZyb20gdGhlIGxlYWYgcm91dGUgaW4gdGhlIGJyYW5jaFxuICogd2UncmUgbGVhdmluZywgdXAgdGhlIHRyZWUgdG8gdGhlIGNvbW1vbiBwYXJlbnQgcm91dGUsIGFuZCBiYWNrXG4gKiBkb3duIHRoZSBicmFuY2ggd2UncmUgZW50ZXJpbmcgdG8gdGhlIGxlYWYgcm91dGUuXG4gKlxuICogSWYgYSB0cmFuc2l0aW9uIGhvb2sgbmVlZHMgdG8gZXhlY3V0ZSBhc3luY2hyb25vdXNseSBpdCBtYXkgaGF2ZVxuICogYSAzcmQgYXJndW1lbnQgdGhhdCBpdCBzaG91bGQgY2FsbCB3aGVuIGl0IGlzIGZpbmlzaGVkLiBPdGhlcndpc2VcbiAqIHRoZSB0cmFuc2l0aW9uIGV4ZWN1dGVzIHN5bmNocm9ub3VzbHkuXG4gKi9cblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkhvb2tzKHByZXZTdGF0ZSwgbmV4dFN0YXRlKSB7XG4gIHZhciBfY29tcHV0ZURpZmYgPSBjb21wdXRlRGlmZihwcmV2U3RhdGUsIG5leHRTdGF0ZSk7XG5cbiAgdmFyIGxlYXZpbmdSb3V0ZXMgPSBfY29tcHV0ZURpZmZbMF07XG4gIHZhciBlbnRlcmluZ1JvdXRlcyA9IF9jb21wdXRlRGlmZlsxXTtcblxuICB2YXIgaG9va3MgPSBnZXRUcmFuc2l0aW9uSG9va3NGcm9tUm91dGVzKGxlYXZpbmdSb3V0ZXMsICdvbkxlYXZlJyk7XG5cbiAgaG9va3MucHVzaC5hcHBseShob29rcywgZ2V0VHJhbnNpdGlvbkhvb2tzRnJvbVJvdXRlcyhlbnRlcmluZ1JvdXRlcywgJ29uRW50ZXInKSk7XG5cbiAgcmV0dXJuIGhvb2tzO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRzRm9yUm91dGUocm91dGUsIGNhbGxiYWNrKSB7XG4gIGlmIChyb3V0ZS5jb21wb25lbnQgfHwgcm91dGUuY29tcG9uZW50cykge1xuICAgIGNhbGxiYWNrKG51bGwsIHJvdXRlLmNvbXBvbmVudCB8fCByb3V0ZS5jb21wb25lbnRzKTtcbiAgfSBlbHNlIGlmIChyb3V0ZS5nZXRDb21wb25lbnRzKSB7XG4gICAgcm91dGUuZ2V0Q29tcG9uZW50cyhjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IGZldGNoZXMgYWxsIGNvbXBvbmVudHMgbmVlZGVkIGZvciB0aGUgZ2l2ZW4gcm91dGVyXG4gKiBzdGF0ZSBhbmQgY2FsbHMgY2FsbGJhY2soZXJyb3IsIGNvbXBvbmVudHMpIHdoZW4gZmluaXNoZWQuXG4gKlxuICogTm90ZTogVGhpcyBvcGVyYXRpb24gbWF5IHJldHVybiBzeW5jaHJvbm91c2x5IGlmIG5vIHJvdXRlcyBoYXZlIGFuXG4gKiBhc3luY2hyb25vdXMgZ2V0Q29tcG9uZW50cyBtZXRob2QuXG4gKi9cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50cyhyb3V0ZXMsIGNhbGxiYWNrKSB7XG4gICgwLCBfQXN5bmNVdGlscy5tYXBBc3luYykocm91dGVzLCBmdW5jdGlvbiAocm91dGUsIGluZGV4LCBjYWxsYmFjaykge1xuICAgIGdldENvbXBvbmVudHNGb3JSb3V0ZShyb3V0ZSwgY2FsbGJhY2spO1xuICB9LCBjYWxsYmFjayk7XG59XG5cbi8qKlxuICogRXh0cmFjdHMgYW4gb2JqZWN0IG9mIHBhcmFtcyB0aGUgZ2l2ZW4gcm91dGUgY2FyZXMgYWJvdXQgZnJvbVxuICogdGhlIGdpdmVuIHBhcmFtcyBvYmplY3QuXG4gKi9cblxuZnVuY3Rpb24gZ2V0Um91dGVQYXJhbXMocm91dGUsIHBhcmFtcykge1xuICB2YXIgcm91dGVQYXJhbXMgPSB7fTtcblxuICBpZiAoIXJvdXRlLnBhdGgpIHJldHVybiByb3V0ZVBhcmFtcztcblxuICB2YXIgcGFyYW1OYW1lcyA9ICgwLCBfVVJMVXRpbHMuZ2V0UGFyYW1OYW1lcykocm91dGUucGF0aCk7XG5cbiAgZm9yICh2YXIgcCBpbiBwYXJhbXMpIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocCkgJiYgcGFyYW1OYW1lcy5pbmRleE9mKHApICE9PSAtMSkgcm91dGVQYXJhbXNbcF0gPSBwYXJhbXNbcF07XG5cbiAgcmV0dXJuIHJvdXRlUGFyYW1zO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfTmF2aWdhdGlvblR5cGVzID0gcmVxdWlyZSgnLi9OYXZpZ2F0aW9uVHlwZXMnKTtcblxudmFyIF9OYXZpZ2F0aW9uVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2aWdhdGlvblR5cGVzKTtcblxudmFyIGZ1bmMgPSBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmM7XG5cbmZ1bmN0aW9uIGdldENvbW1vbkFuY2VzdG9ycyhicmFuY2gsIG90aGVyQnJhbmNoKSB7XG4gIHJldHVybiBicmFuY2guZmlsdGVyKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHJldHVybiBvdGhlckJyYW5jaC5pbmRleE9mKHJvdXRlKSAhPT0gLTE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVcGRhdGVTY3JvbGxQb3NpdGlvbihzdGF0ZSwgcHJldlN0YXRlKSB7XG4gIHZhciBsb2NhdGlvbiA9IHN0YXRlLmxvY2F0aW9uO1xuICB2YXIgYnJhbmNoID0gc3RhdGUuYnJhbmNoO1xuICB2YXIgcHJldkxvY2F0aW9uID0gcHJldlN0YXRlLmxvY2F0aW9uO1xuICB2YXIgcHJldkJyYW5jaCA9IHByZXZTdGF0ZS5icmFuY2g7XG5cbiAgLy8gV2hlbiBhbiBvbkVudGVyIGhvb2sgdXNlcyB0cmFuc2l0aW9uLnRvIHRvIHJlZGlyZWN0XG4gIC8vIG9uIHRoZSBpbml0aWFsIGxvYWQgcHJldkxvY2F0aW9uIGlzIG51bGwsIHNvIGFzc3VtZVxuICAvLyB3ZSBkb24ndCB3YW50IHRvIHVwZGF0ZSB0aGUgc2Nyb2xsIHBvc2l0aW9uLlxuICBpZiAocHJldkxvY2F0aW9uID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gRG9uJ3QgdXBkYXRlIHNjcm9sbCBwb3NpdGlvbiBpZiBvbmx5IHRoZSBxdWVyeSBoYXMgY2hhbmdlZC5cbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBwcmV2TG9jYXRpb24ucGF0aG5hbWUpIHJldHVybiBmYWxzZTtcblxuICAvLyBEb24ndCB1cGRhdGUgc2Nyb2xsIHBvc2l0aW9uIGlmIGFueSBvZiB0aGUgYW5jZXN0b3JzXG4gIC8vIGhhcyBgaWdub3JlU2Nyb2xsUG9zaXRpb25gIHNldCB0byBgdHJ1ZWAgb24gdGhlIHJvdXRlLlxuICB2YXIgc2hhcmVkQW5jZXN0b3JzID0gZ2V0Q29tbW9uQW5jZXN0b3JzKGJyYW5jaCwgcHJldkJyYW5jaCk7XG4gIGlmIChzaGFyZWRBbmNlc3RvcnMuc29tZShmdW5jdGlvbiAocm91dGUpIHtcbiAgICByZXR1cm4gcm91dGUuaWdub3JlU2Nyb2xsQmVoYXZpb3I7XG4gIH0pKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdpbmRvd1Njcm9sbFBvc2l0aW9uKG5hdmlnYXRpb25UeXBlLCBzY3JvbGxYLCBzY3JvbGxZKSB7XG4gIGlmIChfRE9NVXRpbHMuY2FuVXNlRE9NKSB7XG4gICAgaWYgKG5hdmlnYXRpb25UeXBlID09PSBfTmF2aWdhdGlvblR5cGVzMlsnZGVmYXVsdCddLlBPUCkge1xuICAgICAgKDAsIF9ET01VdGlscy5zZXRXaW5kb3dTY3JvbGxQb3NpdGlvbikoc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICgwLCBfRE9NVXRpbHMuc2V0V2luZG93U2Nyb2xsUG9zaXRpb24pKDAsIDApO1xuICAgIH1cbiAgfVxufVxuXG52YXIgU2Nyb2xsTWFuYWdlbWVudE1peGluID0ge1xuXG4gIHByb3BUeXBlczoge1xuICAgIHNob3VsZFVwZGF0ZVNjcm9sbFBvc2l0aW9uOiBmdW5jLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlU2Nyb2xsUG9zaXRpb246IGZ1bmMuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG91bGRVcGRhdGVTY3JvbGxQb3NpdGlvbjogc2hvdWxkVXBkYXRlU2Nyb2xsUG9zaXRpb24sXG4gICAgICB1cGRhdGVTY3JvbGxQb3NpdGlvbjogdXBkYXRlV2luZG93U2Nyb2xsUG9zaXRpb25cbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgdmFyIGxvY2F0aW9uID0gdGhpcy5zdGF0ZS5sb2NhdGlvbjtcblxuICAgIHZhciBsb2NhdGlvblN0YXRlID0gbG9jYXRpb24gJiYgbG9jYXRpb24uc3RhdGU7XG5cbiAgICBpZiAobG9jYXRpb25TdGF0ZSAmJiB0aGlzLnByb3BzLnNob3VsZFVwZGF0ZVNjcm9sbFBvc2l0aW9uKHRoaXMuc3RhdGUsIHByZXZTdGF0ZSkpIHtcbiAgICAgIHZhciBzY3JvbGxYID0gbG9jYXRpb25TdGF0ZS5zY3JvbGxYO1xuICAgICAgdmFyIHNjcm9sbFkgPSBsb2NhdGlvblN0YXRlLnNjcm9sbFk7XG5cbiAgICAgIHRoaXMucHJvcHMudXBkYXRlU2Nyb2xsUG9zaXRpb24obG9jYXRpb24ubmF2aWdhdGlvblR5cGUsIHNjcm9sbFggfHwgMCwgc2Nyb2xsWSB8fCAwKTtcbiAgICB9XG4gIH1cblxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2Nyb2xsTWFuYWdlbWVudE1peGluO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIG9iamVjdCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub2JqZWN0O1xuXG4vKipcbiAqIEEgbWl4aW4gZm9yIGNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGtub3cgdGhlIHBhdGgsIHJvdXRlcywgVVJMXG4gKiBwYXJhbXMgYW5kIHF1ZXJ5IHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgIGltcG9ydCB7IFN0YXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbiAqXG4gKiAgIHZhciBBYm91dExpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgbWl4aW5zOiBbIFN0YXRlIF0sXG4gKiAgICAgcmVuZGVyKCkge1xuICogICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICpcbiAqICAgICAgIGlmICh0aGlzLmlzQWN0aXZlKCdhYm91dCcpKVxuICogICAgICAgICBjbGFzc05hbWUgKz0gJyBpcy1hY3RpdmUnO1xuICpcbiAqICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICovXG52YXIgU3RhdGUgPSB7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBvYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbn07XG5cbnZhciBSb3V0ZXJTdGF0ZU1ldGhvZHMgPSBbJ2lzQWN0aXZlJ107XG5cblJvdXRlclN0YXRlTWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgU3RhdGVbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcm91dGVyID0gdGhpcy5jb250ZXh0LnJvdXRlcjtcbiAgICByZXR1cm4gcm91dGVyW21ldGhvZF0uYXBwbHkocm91dGVyLCBhcmd1bWVudHMpO1xuICB9O1xufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0YXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUcmFuc2l0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVHJhbnNpdGlvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNpdGlvbik7XG5cbiAgICB0aGlzLmlzQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZWRpcmVjdEluZm8gPSBudWxsO1xuICAgIHRoaXMuYWJvcnRSZWFzb24gPSBudWxsO1xuICB9XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUudG8gPSBmdW5jdGlvbiB0byhwYXRobmFtZSwgcXVlcnksIHN0YXRlKSB7XG4gICAgdGhpcy5yZWRpcmVjdEluZm8gPSB7IHBhdGhuYW1lOiBwYXRobmFtZSwgcXVlcnk6IHF1ZXJ5LCBzdGF0ZTogc3RhdGUgfTtcbiAgICB0aGlzLmlzQ2FuY2VsbGVkID0gdHJ1ZTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uIGFib3J0KHJlYXNvbikge1xuICAgIHRoaXMuYWJvcnRSZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5pc0NhbmNlbGxlZCA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb247XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFRyYW5zaXRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgb2JqZWN0ID0gX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vYmplY3Q7XG5cbnZhciBUcmFuc2l0aW9uSG9vayA9IHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IG9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkodHlwZW9mIHRoaXMucm91dGVyV2lsbExlYXZlID09PSAnZnVuY3Rpb24nLCAnQ29tcG9uZW50cyB0aGF0IG1peGluIFRyYW5zaXRpb25Ib29rIHNob3VsZCBoYXZlIGEgcm91dGVyV2lsbExlYXZlIG1ldGhvZCwgY2hlY2sgJXMnLCB0aGlzLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG5cbiAgICBpZiAodGhpcy5yb3V0ZXJXaWxsTGVhdmUpIHRoaXMuY29udGV4dC5yb3V0ZXIuYWRkVHJhbnNpdGlvbkhvb2sodGhpcy5yb3V0ZXJXaWxsTGVhdmUpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXJXaWxsTGVhdmUpIHRoaXMuY29udGV4dC5yb3V0ZXIucmVtb3ZlVHJhbnNpdGlvbkhvb2sodGhpcy5yb3V0ZXJXaWxsTGVhdmUpO1xuICB9XG5cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRyYW5zaXRpb25Ib29rO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdHJpbmdpZnlRdWVyeSA9IHN0cmluZ2lmeVF1ZXJ5O1xuZXhwb3J0cy5nZXRQYXRobmFtZSA9IGdldFBhdGhuYW1lO1xuZXhwb3J0cy5nZXRRdWVyeVN0cmluZyA9IGdldFF1ZXJ5U3RyaW5nO1xuZXhwb3J0cy5zdHJpcExlYWRpbmdTbGFzaGVzID0gc3RyaXBMZWFkaW5nU2xhc2hlcztcbmV4cG9ydHMuaXNBYnNvbHV0ZVBhdGggPSBpc0Fic29sdXRlUGF0aDtcbmV4cG9ydHMuY29tcGlsZVBhdHRlcm4gPSBjb21waWxlUGF0dGVybjtcbmV4cG9ydHMubWF0Y2hQYXR0ZXJuID0gbWF0Y2hQYXR0ZXJuO1xuZXhwb3J0cy5nZXRQYXJhbU5hbWVzID0gZ2V0UGFyYW1OYW1lcztcbmV4cG9ydHMuZ2V0UGFyYW1zID0gZ2V0UGFyYW1zO1xuZXhwb3J0cy5mb3JtYXRQYXR0ZXJuID0gZm9ybWF0UGF0dGVybjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3FzID0gcmVxdWlyZSgncXMnKTtcblxudmFyIF9xczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9xcyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBwYXJzZVF1ZXJ5U3RyaW5nID0gX3FzMlsnZGVmYXVsdCddLnBhcnNlO1xuXG5leHBvcnRzLnBhcnNlUXVlcnlTdHJpbmcgPSBwYXJzZVF1ZXJ5U3RyaW5nO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeShxdWVyeSkge1xuICByZXR1cm4gX3FzMlsnZGVmYXVsdCddLnN0cmluZ2lmeShxdWVyeSwgeyBhcnJheUZvcm1hdDogJ2JyYWNrZXRzJyB9KTtcbn1cblxudmFyIHF1ZXJ5TWF0Y2hlciA9IC9cXD8oW1xcc1xcU10qKSQvO1xuXG5mdW5jdGlvbiBnZXRQYXRobmFtZShwYXRoKSB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UocXVlcnlNYXRjaGVyLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGdldFF1ZXJ5U3RyaW5nKHBhdGgpIHtcbiAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChxdWVyeU1hdGNoZXIpO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xufVxuXG5mdW5jdGlvbiBzdHJpcExlYWRpbmdTbGFzaGVzKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGggPyBwYXRoLnJlcGxhY2UoL15cXC8rLywgJycpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGlzQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJyAmJiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlU291cmNlKHN0cmluZykge1xuICByZXR1cm4gZXNjYXBlUmVnRXhwKHN0cmluZykucmVwbGFjZSgvXFwvKy9nLCAnLysnKTtcbn1cblxuZnVuY3Rpb24gX2NvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgdmFyIHJlZ2V4cFNvdXJjZSA9ICcnO1xuICB2YXIgcGFyYW1OYW1lcyA9IFtdO1xuICB2YXIgdG9rZW5zID0gW107XG5cbiAgdmFyIG1hdGNoLFxuICAgICAgbGFzdEluZGV4ID0gMCxcbiAgICAgIG1hdGNoZXIgPSAvOihbYS16QS1aXyRdW2EtekEtWjAtOV8kXSopfFxcKnxcXCh8XFwpL2c7XG4gIHdoaWxlIChtYXRjaCA9IG1hdGNoZXIuZXhlYyhwYXR0ZXJuKSkge1xuICAgIGlmIChtYXRjaC5pbmRleCAhPT0gbGFzdEluZGV4KSB7XG4gICAgICB0b2tlbnMucHVzaChwYXR0ZXJuLnNsaWNlKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgIHJlZ2V4cFNvdXJjZSArPSBlc2NhcGVTb3VyY2UocGF0dGVybi5zbGljZShsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoWzFdKSB7XG4gICAgICByZWdleHBTb3VyY2UgKz0gJyhbXi8/I10rKSc7XG4gICAgICBwYXJhbU5hbWVzLnB1c2gobWF0Y2hbMV0pO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT09ICcqJykge1xuICAgICAgcmVnZXhwU291cmNlICs9ICcoW1xcXFxzXFxcXFNdKj8pJztcbiAgICAgIHBhcmFtTmFtZXMucHVzaCgnc3BsYXQnKTtcbiAgICB9IGVsc2UgaWYgKG1hdGNoWzBdID09PSAnKCcpIHtcbiAgICAgIHJlZ2V4cFNvdXJjZSArPSAnKD86JztcbiAgICB9IGVsc2UgaWYgKG1hdGNoWzBdID09PSAnKScpIHtcbiAgICAgIHJlZ2V4cFNvdXJjZSArPSAnKT8nO1xuICAgIH1cblxuICAgIHRva2Vucy5wdXNoKG1hdGNoWzBdKTtcblxuICAgIGxhc3RJbmRleCA9IG1hdGNoZXIubGFzdEluZGV4O1xuICB9XG5cbiAgaWYgKGxhc3RJbmRleCAhPT0gcGF0dGVybi5sZW5ndGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXR0ZXJuLnNsaWNlKGxhc3RJbmRleCwgcGF0dGVybi5sZW5ndGgpKTtcbiAgICByZWdleHBTb3VyY2UgKz0gZXNjYXBlU291cmNlKHBhdHRlcm4uc2xpY2UobGFzdEluZGV4LCBwYXR0ZXJuLmxlbmd0aCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICAgIHJlZ2V4cFNvdXJjZTogcmVnZXhwU291cmNlLFxuICAgIHBhcmFtTmFtZXM6IHBhcmFtTmFtZXMsXG4gICAgdG9rZW5zOiB0b2tlbnNcbiAgfTtcbn1cblxudmFyIENvbXBpbGVkUGF0dGVybnNDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBjb21waWxlUGF0dGVybihwYXR0ZXJuKSB7XG4gIGlmICghKHBhdHRlcm4gaW4gQ29tcGlsZWRQYXR0ZXJuc0NhY2hlKSkgQ29tcGlsZWRQYXR0ZXJuc0NhY2hlW3BhdHRlcm5dID0gX2NvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pO1xuXG4gIHJldHVybiBDb21waWxlZFBhdHRlcm5zQ2FjaGVbcGF0dGVybl07XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gbWF0Y2ggYSBwYXR0ZXJuIG9uIHRoZSBnaXZlbiBwYXRobmFtZS4gUGF0dGVybnMgbWF5IHVzZVxuICogdGhlIGZvbGxvd2luZyBzcGVjaWFsIGNoYXJhY3RlcnM6XG4gKlxuICogLSA6cGFyYW1OYW1lICAgICBNYXRjaGVzIGEgVVJMIHNlZ21lbnQgdXAgdG8gdGhlIG5leHQgLywgPywgb3IgIy4gVGhlXG4gKiAgICAgICAgICAgICAgICAgIGNhcHR1cmVkIHN0cmluZyBpcyBjb25zaWRlcmVkIGEgXCJwYXJhbVwiXG4gKiAtICgpICAgICAgICAgICAgIFdyYXBzIGEgc2VnbWVudCBvZiB0aGUgVVJMIHRoYXQgaXMgb3B0aW9uYWxcbiAqIC0gKiAgICAgICAgICAgICAgQ29uc3VtZXMgKG5vbi1ncmVlZHkpIGFsbCBjaGFyYWN0ZXJzIHVwIHRvIHRoZSBuZXh0XG4gKiAgICAgICAgICAgICAgICAgIGNoYXJhY3RlciBpbiB0aGUgcGF0dGVybiwgb3IgdG8gdGhlIGVuZCBvZiB0aGUgVVJMIGlmXG4gKiAgICAgICAgICAgICAgICAgIHRoZXJlIGlzIG5vbmVcbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAtIHJlbWFpbmluZ1BhdGhuYW1lXG4gKiAtIHBhcmFtTmFtZXNcbiAqIC0gcGFyYW1WYWx1ZXNcbiAqL1xuXG5mdW5jdGlvbiBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcGF0aG5hbWUpIHtcbiAgdmFyIF9jb21waWxlUGF0dGVybjIgPSBjb21waWxlUGF0dGVybihzdHJpcExlYWRpbmdTbGFzaGVzKHBhdHRlcm4pKTtcblxuICB2YXIgcmVnZXhwU291cmNlID0gX2NvbXBpbGVQYXR0ZXJuMi5yZWdleHBTb3VyY2U7XG4gIHZhciBwYXJhbU5hbWVzID0gX2NvbXBpbGVQYXR0ZXJuMi5wYXJhbU5hbWVzO1xuICB2YXIgdG9rZW5zID0gX2NvbXBpbGVQYXR0ZXJuMi50b2tlbnM7XG5cbiAgcmVnZXhwU291cmNlICs9ICcvKic7IC8vIElnbm9yZSB0cmFpbGluZyBzbGFzaGVzXG5cbiAgdmFyIGNhcHR1cmVSZW1haW5pbmcgPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdICE9PSAnKic7XG5cbiAgaWYgKGNhcHR1cmVSZW1haW5pbmcpIHJlZ2V4cFNvdXJjZSArPSAnKFtcXFxcc1xcXFxTXSo/KSc7XG5cbiAgdmFyIG1hdGNoID0gcGF0aG5hbWUubWF0Y2gobmV3IFJlZ0V4cCgnXicgKyByZWdleHBTb3VyY2UgKyAnJCcsICdpJykpO1xuXG4gIHZhciByZW1haW5pbmdQYXRobmFtZSwgcGFyYW1WYWx1ZXM7XG4gIGlmIChtYXRjaCAhPSBudWxsKSB7XG4gICAgcGFyYW1WYWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChtYXRjaCwgMSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdiAhPSBudWxsID8gZGVjb2RlVVJJQ29tcG9uZW50KHYucmVwbGFjZSgvXFwrL2csICclMjAnKSkgOiB2O1xuICAgIH0pO1xuXG4gICAgaWYgKGNhcHR1cmVSZW1haW5pbmcpIHtcbiAgICAgIHJlbWFpbmluZ1BhdGhuYW1lID0gcGFyYW1WYWx1ZXMucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbWFpbmluZ1BhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZShtYXRjaFswXSwgJycpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZW1haW5pbmdQYXRobmFtZSA9IHBhcmFtVmFsdWVzID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVtYWluaW5nUGF0aG5hbWU6IHJlbWFpbmluZ1BhdGhuYW1lLFxuICAgIHBhcmFtTmFtZXM6IHBhcmFtTmFtZXMsXG4gICAgcGFyYW1WYWx1ZXM6IHBhcmFtVmFsdWVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMocGF0dGVybikge1xuICByZXR1cm4gY29tcGlsZVBhdHRlcm4ocGF0dGVybikucGFyYW1OYW1lcztcbn1cblxuZnVuY3Rpb24gZ2V0UGFyYW1zKHBhdHRlcm4sIHBhdGhuYW1lKSB7XG4gIHZhciBfbWF0Y2hQYXR0ZXJuID0gbWF0Y2hQYXR0ZXJuKHBhdHRlcm4sIHN0cmlwTGVhZGluZ1NsYXNoZXMocGF0aG5hbWUpKTtcblxuICB2YXIgcGFyYW1OYW1lcyA9IF9tYXRjaFBhdHRlcm4ucGFyYW1OYW1lcztcbiAgdmFyIHBhcmFtVmFsdWVzID0gX21hdGNoUGF0dGVybi5wYXJhbVZhbHVlcztcblxuICBpZiAocGFyYW1WYWx1ZXMgIT0gbnVsbCkge1xuICAgIHJldHVybiBwYXJhbU5hbWVzLnJlZHVjZShmdW5jdGlvbiAobWVtbywgcGFyYW1OYW1lLCBpbmRleCkge1xuICAgICAgbWVtb1twYXJhbU5hbWVdID0gcGFyYW1WYWx1ZXNbaW5kZXhdO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfSwge30pO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIGdpdmVuIHBhdHRlcm4gd2l0aCBwYXJhbXMgaW50ZXJwb2xhdGVkLiBUaHJvd3NcbiAqIGlmIHRoZXJlIGlzIGEgZHluYW1pYyBzZWdtZW50IG9mIHRoZSBwYXR0ZXJuIGZvciB3aGljaCB0aGVyZSBpcyBubyBwYXJhbS5cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRQYXR0ZXJuKHBhdHRlcm4sIHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgdmFyIF9jb21waWxlUGF0dGVybjMgPSBjb21waWxlUGF0dGVybihwYXR0ZXJuKTtcblxuICB2YXIgdG9rZW5zID0gX2NvbXBpbGVQYXR0ZXJuMy50b2tlbnM7XG5cbiAgdmFyIHBhcmVuQ291bnQgPSAwLFxuICAgICAgcGF0aG5hbWUgPSAnJyxcbiAgICAgIHNwbGF0SW5kZXggPSAwO1xuXG4gIHZhciB0b2tlbiwgcGFyYW1OYW1lLCBwYXJhbVZhbHVlO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gdG9rZW5zLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICBpZiAodG9rZW4gPT09ICcqJykge1xuICAgICAgcGFyYW1WYWx1ZSA9IEFycmF5LmlzQXJyYXkocGFyYW1zLnNwbGF0KSA/IHBhcmFtcy5zcGxhdFtzcGxhdEluZGV4KytdIDogcGFyYW1zLnNwbGF0O1xuXG4gICAgICAoMCwgX2ludmFyaWFudDJbJ2RlZmF1bHQnXSkocGFyYW1WYWx1ZSAhPSBudWxsIHx8IHBhcmVuQ291bnQgPiAwLCAnTWlzc2luZyBzcGxhdCAjJXMgZm9yIHBhdGggXCIlc1wiJywgc3BsYXRJbmRleCwgcGF0dGVybik7XG5cbiAgICAgIGlmIChwYXJhbVZhbHVlICE9IG51bGwpIHBhdGhuYW1lICs9IGVuY29kZVVSSShwYXJhbVZhbHVlKS5yZXBsYWNlKC8lMjAvZywgJysnKTtcbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnKCcpIHtcbiAgICAgIHBhcmVuQ291bnQgKz0gMTtcbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnKScpIHtcbiAgICAgIHBhcmVuQ291bnQgLT0gMTtcbiAgICB9IGVsc2UgaWYgKHRva2VuLmNoYXJBdCgwKSA9PT0gJzonKSB7XG4gICAgICBwYXJhbU5hbWUgPSB0b2tlbi5zdWJzdHJpbmcoMSk7XG4gICAgICBwYXJhbVZhbHVlID0gcGFyYW1zW3BhcmFtTmFtZV07XG5cbiAgICAgICgwLCBfaW52YXJpYW50MlsnZGVmYXVsdCddKShwYXJhbVZhbHVlICE9IG51bGwgfHwgcGFyZW5Db3VudCA+IDAsICdNaXNzaW5nIFwiJXNcIiBwYXJhbWV0ZXIgZm9yIHBhdGggXCIlc1wiJywgcGFyYW1OYW1lLCBwYXR0ZXJuKTtcblxuICAgICAgaWYgKHBhcmFtVmFsdWUgIT0gbnVsbCkgcGF0aG5hbWUgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtVmFsdWUpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRobmFtZSArPSB0b2tlbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGF0aG5hbWUucmVwbGFjZSgvXFwvKy9nLCAnLycpO1xufSIsIi8qIGNvbXBvbmVudHMgKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX1JvdXRlcjIgPSByZXF1aXJlKCcuL1JvdXRlcicpO1xuXG52YXIgX1JvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIyKTtcblxuZXhwb3J0cy5Sb3V0ZXIgPSBfUm91dGVyM1snZGVmYXVsdCddO1xuXG52YXIgX0xpbmsyID0gcmVxdWlyZSgnLi9MaW5rJyk7XG5cbnZhciBfTGluazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rMik7XG5cbmV4cG9ydHMuTGluayA9IF9MaW5rM1snZGVmYXVsdCddO1xuXG4vKiBjb21wb25lbnRzIChjb25maWd1cmF0aW9uKSAqL1xuXG52YXIgX1JlZGlyZWN0MiA9IHJlcXVpcmUoJy4vUmVkaXJlY3QnKTtcblxudmFyIF9SZWRpcmVjdDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZWRpcmVjdDIpO1xuXG5leHBvcnRzLlJlZGlyZWN0ID0gX1JlZGlyZWN0M1snZGVmYXVsdCddO1xuXG52YXIgX1JvdXRlMiA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxudmFyIF9Sb3V0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZTIpO1xuXG5leHBvcnRzLlJvdXRlID0gX1JvdXRlM1snZGVmYXVsdCddO1xuXG4vKiBtaXhpbnMgKi9cblxudmFyIF9OYXZpZ2F0aW9uMiA9IHJlcXVpcmUoJy4vTmF2aWdhdGlvbicpO1xuXG52YXIgX05hdmlnYXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2aWdhdGlvbjIpO1xuXG5leHBvcnRzLk5hdmlnYXRpb24gPSBfTmF2aWdhdGlvbjNbJ2RlZmF1bHQnXTtcblxudmFyIF9UcmFuc2l0aW9uSG9vazIgPSByZXF1aXJlKCcuL1RyYW5zaXRpb25Ib29rJyk7XG5cbnZhciBfVHJhbnNpdGlvbkhvb2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbkhvb2syKTtcblxuZXhwb3J0cy5UcmFuc2l0aW9uSG9vayA9IF9UcmFuc2l0aW9uSG9vazNbJ2RlZmF1bHQnXTtcblxudmFyIF9TdGF0ZTIgPSByZXF1aXJlKCcuL1N0YXRlJyk7XG5cbnZhciBfU3RhdGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3RhdGUyKTtcblxuZXhwb3J0cy5TdGF0ZSA9IF9TdGF0ZTNbJ2RlZmF1bHQnXTtcblxuLyogdXRpbHMgKi9cblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbmV4cG9ydHMuY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4gPSBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbjtcblxudmFyIF9Qcm9wVHlwZXMyID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxudmFyIF9Qcm9wVHlwZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvcFR5cGVzMik7XG5cbmV4cG9ydHMuUHJvcFR5cGVzID0gX1Byb3BUeXBlczNbJ2RlZmF1bHQnXTtcblxudmFyIF9Sb3V0ZXI0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVyMik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF9Sb3V0ZXI0WydkZWZhdWx0J107IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChcImRldlwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnSW52YXJpYW50IFZpb2xhdGlvbjogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTQgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29uc3RydWN0cyBhbiBlbnVtZXJhdGlvbiB3aXRoIGtleXMgZXF1YWwgdG8gdGhlaXIgdmFsdWUuXG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogICB2YXIgQ09MT1JTID0ga2V5TWlycm9yKHtibHVlOiBudWxsLCByZWQ6IG51bGx9KTtcbiAqICAgdmFyIG15Q29sb3IgPSBDT0xPUlMuYmx1ZTtcbiAqICAgdmFyIGlzQ29sb3JWYWxpZCA9ICEhQ09MT1JTW215Q29sb3JdO1xuICpcbiAqIFRoZSBsYXN0IGxpbmUgY291bGQgbm90IGJlIHBlcmZvcm1lZCBpZiB0aGUgdmFsdWVzIG9mIHRoZSBnZW5lcmF0ZWQgZW51bSB3ZXJlXG4gKiBub3QgZXF1YWwgdG8gdGhlaXIga2V5cy5cbiAqXG4gKiAgIElucHV0OiAge2tleTE6IHZhbDEsIGtleTI6IHZhbDJ9XG4gKiAgIE91dHB1dDoge2tleTE6IGtleTEsIGtleTI6IGtleTJ9XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG52YXIga2V5TWlycm9yID0gZnVuY3Rpb24ob2JqKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgdmFyIGtleTtcbiAgaWYgKCEob2JqIGluc3RhbmNlb2YgT2JqZWN0ICYmICFBcnJheS5pc0FycmF5KG9iaikpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdrZXlNaXJyb3IoLi4uKTogQXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QuJyk7XG4gIH1cbiAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJldFtrZXldID0ga2V5O1xuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleU1pcnJvcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvJyk7XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG52YXIgUGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHt9O1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHN0cmluZ2lmeTogU3RyaW5naWZ5LFxuICAgIHBhcnNlOiBQYXJzZVxufTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHtcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBkZXB0aDogNSxcbiAgICBhcnJheUxpbWl0OiAyMCxcbiAgICBwYXJhbWV0ZXJMaW1pdDogMTAwMFxufTtcblxuXG5pbnRlcm5hbHMucGFyc2VWYWx1ZXMgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLCBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSBJbmZpbml0eSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMucGFyYW1ldGVyTGltaXQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gcGFydHMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICB2YXIgcG9zID0gcGFydC5pbmRleE9mKCddPScpID09PSAtMSA/IHBhcnQuaW5kZXhPZignPScpIDogcGFydC5pbmRleE9mKCddPScpICsgMTtcblxuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgICAgb2JqW1V0aWxzLmRlY29kZShwYXJ0KV0gPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBVdGlscy5kZWNvZGUocGFydC5zbGljZSgwLCBwb3MpKTtcbiAgICAgICAgICAgIHZhciB2YWwgPSBVdGlscy5kZWNvZGUocGFydC5zbGljZShwb3MgKyAxKSk7XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSBbXS5jb25jYXQob2JqW2tleV0pLmNvbmNhdCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cblxuaW50ZXJuYWxzLnBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gKGNoYWluLCB2YWwsIG9wdGlvbnMpIHtcblxuICAgIGlmICghY2hhaW4ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgdmFyIHJvb3QgPSBjaGFpbi5zaGlmdCgpO1xuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGlmIChyb290ID09PSAnW10nKSB7XG4gICAgICAgIG9iaiA9IFtdO1xuICAgICAgICBvYmogPSBvYmouY29uY2F0KGludGVybmFscy5wYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgY2xlYW5Sb290ID0gcm9vdFswXSA9PT0gJ1snICYmIHJvb3Rbcm9vdC5sZW5ndGggLSAxXSA9PT0gJ10nID8gcm9vdC5zbGljZSgxLCByb290Lmxlbmd0aCAtIDEpIDogcm9vdDtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoY2xlYW5Sb290LCAxMCk7XG4gICAgICAgIHZhciBpbmRleFN0cmluZyA9ICcnICsgaW5kZXg7XG4gICAgICAgIGlmICghaXNOYU4oaW5kZXgpICYmXG4gICAgICAgICAgICByb290ICE9PSBjbGVhblJvb3QgJiZcbiAgICAgICAgICAgIGluZGV4U3RyaW5nID09PSBjbGVhblJvb3QgJiZcbiAgICAgICAgICAgIGluZGV4ID49IDAgJiZcbiAgICAgICAgICAgIGluZGV4IDw9IG9wdGlvbnMuYXJyYXlMaW1pdCkge1xuXG4gICAgICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgICAgIG9ialtpbmRleF0gPSBpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYmpbY2xlYW5Sb290XSA9IGludGVybmFscy5wYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmludGVybmFscy5wYXJzZUtleXMgPSBmdW5jdGlvbiAoa2V5LCB2YWwsIG9wdGlvbnMpIHtcblxuICAgIGlmICgha2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGUgcmVnZXggY2h1bmtzXG5cbiAgICB2YXIgcGFyZW50ID0gL14oW15cXFtcXF1dKikvO1xuICAgIHZhciBjaGlsZCA9IC8oXFxbW15cXFtcXF1dKlxcXSkvZztcblxuICAgIC8vIEdldCB0aGUgcGFyZW50XG5cbiAgICB2YXIgc2VnbWVudCA9IHBhcmVudC5leGVjKGtleSk7XG5cbiAgICAvLyBEb24ndCBhbGxvdyB0aGVtIHRvIG92ZXJ3cml0ZSBvYmplY3QgcHJvdG90eXBlIHByb3BlcnRpZXNcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHNlZ21lbnRbMV0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTdGFzaCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0c1xuXG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBpZiAoc2VnbWVudFsxXSkge1xuICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNoaWxkcmVuIGFwcGVuZGluZyB0byB0aGUgYXJyYXkgdW50aWwgd2UgaGl0IGRlcHRoXG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKChzZWdtZW50ID0gY2hpbGQuZXhlYyhrZXkpKSAhPT0gbnVsbCAmJiBpIDwgb3B0aW9ucy5kZXB0aCkge1xuXG4gICAgICAgICsraTtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHNlZ21lbnRbMV0ucmVwbGFjZSgvXFxbfFxcXS9nLCAnJykpKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSdzIGEgcmVtYWluZGVyLCBqdXN0IGFkZCB3aGF0ZXZlciBpcyBsZWZ0XG5cbiAgICBpZiAoc2VnbWVudCkge1xuICAgICAgICBrZXlzLnB1c2goJ1snICsga2V5LnNsaWNlKHNlZ21lbnQuaW5kZXgpICsgJ10nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGtleXMsIHZhbCwgb3B0aW9ucyk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0ciwgb3B0aW9ucykge1xuXG4gICAgaWYgKHN0ciA9PT0gJycgfHxcbiAgICAgICAgc3RyID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBzdHIgPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuZGVsaW1pdGVyID0gdHlwZW9mIG9wdGlvbnMuZGVsaW1pdGVyID09PSAnc3RyaW5nJyB8fCBVdGlscy5pc1JlZ0V4cChvcHRpb25zLmRlbGltaXRlcikgPyBvcHRpb25zLmRlbGltaXRlciA6IGludGVybmFscy5kZWxpbWl0ZXI7XG4gICAgb3B0aW9ucy5kZXB0aCA9IHR5cGVvZiBvcHRpb25zLmRlcHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuZGVwdGggOiBpbnRlcm5hbHMuZGVwdGg7XG4gICAgb3B0aW9ucy5hcnJheUxpbWl0ID0gdHlwZW9mIG9wdGlvbnMuYXJyYXlMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmFycmF5TGltaXQgOiBpbnRlcm5hbHMuYXJyYXlMaW1pdDtcbiAgICBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID0gdHlwZW9mIG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09ICdudW1iZXInID8gb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA6IGludGVybmFscy5wYXJhbWV0ZXJMaW1pdDtcblxuICAgIHZhciB0ZW1wT2JqID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBpbnRlcm5hbHMucGFyc2VWYWx1ZXMoc3RyLCBvcHRpb25zKSA6IHN0cjtcbiAgICB2YXIgb2JqID0ge307XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGtleXMgYW5kIHNldHVwIHRoZSBuZXcgb2JqZWN0XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRlbXBPYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIG5ld09iaiA9IGludGVybmFscy5wYXJzZUtleXMoa2V5LCB0ZW1wT2JqW2tleV0sIG9wdGlvbnMpO1xuICAgICAgICBvYmogPSBVdGlscy5tZXJnZShvYmosIG5ld09iaik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWxzLmNvbXBhY3Qob2JqKTtcbn07XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7XG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgYXJyYXlQcmVmaXhHZW5lcmF0b3JzOiB7XG4gICAgICAgIGJyYWNrZXRzOiBmdW5jdGlvbiAocHJlZml4LCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXggKyAnW10nO1xuICAgICAgICB9LFxuICAgICAgICBpbmRpY2VzOiBmdW5jdGlvbiAocHJlZml4LCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgICAgIH0sXG4gICAgICAgIHJlcGVhdDogZnVuY3Rpb24gKHByZWZpeCwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5pbnRlcm5hbHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG9iaiwgcHJlZml4LCBnZW5lcmF0ZUFycmF5UHJlZml4KSB7XG5cbiAgICBpZiAoVXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBvYmogPSBvYmoudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvYmogPSBvYmoudG9JU09TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIG9iaiA9ICcnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJyB8fFxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicpIHtcblxuICAgICAgICByZXR1cm4gW2VuY29kZVVSSUNvbXBvbmVudChwcmVmaXgpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9iaildO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHZhciBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoaW50ZXJuYWxzLnN0cmluZ2lmeShvYmpba2V5XSwgZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSksIGdlbmVyYXRlQXJyYXlQcmVmaXgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoaW50ZXJuYWxzLnN0cmluZ2lmeShvYmpba2V5XSwgcHJlZml4ICsgJ1snICsga2V5ICsgJ10nLCBnZW5lcmF0ZUFycmF5UHJlZml4KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIG9wdGlvbnMpIHtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBkZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gaW50ZXJuYWxzLmRlbGltaXRlciA6IG9wdGlvbnMuZGVsaW1pdGVyO1xuXG4gICAgdmFyIGtleXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBvYmogPT09IG51bGwpIHtcblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRpb25zLmFycmF5Rm9ybWF0IGluIGludGVybmFscy5hcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRpb25zLmFycmF5Rm9ybWF0O1xuICAgIH1cbiAgICBlbHNlIGlmICgnaW5kaWNlcycgaW4gb3B0aW9ucykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdGlvbnMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSAnaW5kaWNlcyc7XG4gICAgfVxuXG4gICAgdmFyIGdlbmVyYXRlQXJyYXlQcmVmaXggPSBpbnRlcm5hbHMuYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIHZhciBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG4gICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChpbnRlcm5hbHMuc3RyaW5naWZ5KG9ialtrZXldLCBrZXksIGdlbmVyYXRlQXJyYXlQcmVmaXgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cy5qb2luKGRlbGltaXRlcik7XG59O1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHt9O1xuXG5cbmV4cG9ydHMuYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcblxuICAgIHZhciBvYmogPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBzb3VyY2UubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgb2JqW2ldID0gc291cmNlW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cblxuZXhwb3J0cy5tZXJnZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtzb3VyY2VdID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRhcmdldCA9IFt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuXG4gICAgICAgIHRhcmdldCA9IGV4cG9ydHMuYXJyYXlUb09iamVjdCh0YXJnZXQpO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICBmb3IgKHZhciBrID0gMCwga2wgPSBrZXlzLmxlbmd0aDsgayA8IGtsOyArK2spIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNba107XG4gICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuXG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGV4cG9ydHMubWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gKHN0cikge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59O1xuXG5cbmV4cG9ydHMuY29tcGFjdCA9IGZ1bmN0aW9uIChvYmosIHJlZnMpIHtcblxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBvYmogPT09IG51bGwpIHtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHJlZnMgPSByZWZzIHx8IFtdO1xuICAgIHZhciBsb29rdXAgPSByZWZzLmluZGV4T2Yob2JqKTtcbiAgICBpZiAobG9va3VwICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gcmVmc1tsb29rdXBdO1xuICAgIH1cblxuICAgIHJlZnMucHVzaChvYmopO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICB2YXIgY29tcGFjdGVkID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gb2JqLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbXBhY3RlZC5wdXNoKG9ialtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcGFjdGVkO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IgKGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgb2JqW2tleV0gPSBleHBvcnRzLmNvbXBhY3Qob2JqW2tleV0sIHJlZnMpO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmV4cG9ydHMuaXNSZWdFeHAgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cblxuZXhwb3J0cy5pc0J1ZmZlciA9IGZ1bmN0aW9uIChvYmopIHtcblxuICAgIGlmIChvYmogPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJlxuICAgICAgICBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiZcbiAgICAgICAgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iXX0=
