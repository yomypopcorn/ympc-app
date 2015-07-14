'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var colorNames = ['turquoise', 'emerald', 'peter', 'asphalt', 'green', 'sunflower', 'belize', 'alizarin'];
var apiBase = '/api';

var YoMyPopcornApp = React.createClass({
  displayName: 'YoMyPopcornApp',

  getInitialState: function getInitialState() {
    return {
      activeScreen: this.getScreenNameFromURL(),
      userName: this.getUsernameFromURL()
    };
  },

  getScreenNameFromURL: function getScreenNameFromURL() {
    return location.pathname.replace('/', '') === 'shows' ? 'shows' : 'feed';
  },

  setFeedActive: function setFeedActive() {
    this.setState({ activeScreen: 'feed' });
  },

  setShowsActive: function setShowsActive() {
    this.setState({ activeScreen: 'shows' });
  },

  getUsernameFromURL: function getUsernameFromURL() {
    var params = (location.search || '?').split('?').splice(1)[0];
    var parts = params.split('=');

    if (parts.length > 1) {
      return parts[1];
    }

    return 'crap_unknown_username';
  },

  render: function render() {
    var isFeedActive = this.state.activeScreen == 'feed';

    var isFeedTabActive = isFeedActive ? 'is-active tab' : 'tab';
    var isShowsTabActive = !isFeedActive ? 'is-active tab' : 'tab';

    var screen = isFeedActive ? React.createElement(Feed, { userName: this.state.userName }) : React.createElement(Shows, { userName: this.state.userName });

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'tabs' },
        React.createElement(
          'div',
          { className: isFeedTabActive, onClick: this.setFeedActive },
          'Feed'
        ),
        React.createElement(
          'div',
          { className: isShowsTabActive, onClick: this.setShowsActive },
          'Shows'
        )
      ),
      screen
    );
  }
});

var Feed = React.createClass({
  displayName: 'Feed',

  getInitialState: function getInitialState() {
    return {
      feed: []
    };
  },

  componentDidMount: function componentDidMount() {
    $.get(apiBase + '/users/' + this.props.userName + '/feed').then((function (data) {
      this.setState({ feed: data });
    }).bind(this));
  },

  render: function render() {
    var feedResults = this.state.feed.map(function (item) {
      return React.createElement(FeedItem, _extends({}, item, { key: item.imdb_id }));
    });

    var emptyState = null;
    if (feedResults.length === 0) {
      emptyState = React.createElement(
        'div',
        { className: 'empty-state' },
        'Nothing here yet...'
      );
    }

    return React.createElement(
      'div',
      null,
      emptyState || feedResults
    );
  }
});

var FeedItem = React.createClass({
  displayName: 'FeedItem',

  render: function render() {
    var localStyle = {
      backgroundImage: 'url(' + this.props.poster + ')'
    };

    var timeAgo = moment(Date.parse(this.props.first_aired)).fromNow();

    return React.createElement(
      'div',
      { className: 'feed-item' },
      React.createElement(
        'div',
        { className: 'feed-item-header emerald' },
        timeAgo
      ),
      React.createElement(
        'div',
        { className: 'feed-item-body', style: localStyle },
        React.createElement(
          'div',
          { className: 'shadow' },
          React.createElement(
            'div',
            { className: 'title' },
            this.props.title
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'feed-item-footer emerald' },
        'Season ',
        this.props.season,
        ', Episode ',
        this.props.episode
      )
    );
  }
});

var Shows = React.createClass({
  displayName: 'Shows',

  getInitialState: function getInitialState() {
    return {
      isSearching: false,
      userName: this.props.userName,
      subscribedShows: [],
      shows: []
    };
  },

  componentDidMount: function componentDidMount() {
    $.getJSON(apiBase + '/shows?compact=1').then((function (data) {
      this.setState({ shows: data });
    }).bind(this));

    $.getJSON(apiBase + '/users/' + this.state.userName + '/shows?compact=1').then((function (data) {
      this.setState({ subscribedShows: data });
    }).bind(this));
  },

  setSearchActive: function setSearchActive() {
    this.setState({ isSearching: true });
  },

  setSearchInactive: function setSearchInactive() {
    this.setState({ isSearching: false });
  },

  addSubscription: function addSubscription(show) {
    var shows = this.state.subscribedShows.push(show);
    var url = [apiBase, '/users/', this.state.userName, '/shows'].join('');

    $.ajax({
      type: 'POST',
      url: url,
      data: { imdb_id: show.imdb_id },
      success: function success() {},
      dataType: 'json'
    });
    this.setSearchInactive();
  },

  removeSubscription: function removeSubscription(show) {
    var newSubscriptions = this.state.subscribedShows.filter(function (item) {
      return item.imdb_id !== show.imdb_id;
    });

    // optimistic remove
    this.setState({ subscribedShows: newSubscriptions });

    var url = [apiBase, '/users/', this.state.userName, '/shows/', show.imdb_id].join('');

    $.ajax({
      type: 'DELETE',
      url: url,
      data: {},
      success: function success() {},
      dataType: 'json'
    });
  },

  render: function render() {
    var subscribed = this.state.subscribedShows.map(function (show) {
      show.isSubscribed = true;
      return show;
    });

    var childs = this.state.isSearching ? React.createElement(Search, { shows: this.state.shows, onSearch: this.search, onCancel: this.setSearchInactive, onAddSubscription: this.addSubscription, onRemoveSubscription: this.removeSubscription }) : React.createElement(Subscriptions, { shows: subscribed, onAddClicked: this.setSearchActive, onAddSubscription: this.addSubscription, onRemoveSubscription: this.removeSubscription });

    return React.createElement(
      'div',
      null,
      childs
    );
  }
});

var Search = React.createClass({
  displayName: 'Search',

  getInitialState: function getInitialState() {
    return {
      searchValue: null
    };
  },

  searchInputDidChange: function searchInputDidChange() {
    var input = React.findDOMNode(this.refs.searchInput);
    var text = input.value;
    this.setState({ searchValue: text });
  },

  componentDidMount: function componentDidMount() {
    var input = React.findDOMNode(this.refs.searchInput);
    $(input).focus();
    if (window.scrollTo) window.scrollTo(0, 0);
  },

  render: function render() {
    var results = this.props.shows.filter((function (show) {
      var value = (this.state.searchValue || '').toLowerCase();
      var showName = show.title || '';
      return showName.toLowerCase().indexOf(value) !== -1;
    }).bind(this));

    var listItems = results.map((function (show) {
      return React.createElement(ListItem, _extends({}, show, {
        isSubscribed: false,
        onBtnUnsubscribe: this.props.onRemoveSubscription,
        onBtnSubscribe: this.props.onAddSubscription,
        key: show.imdb_id }));
    }).bind(this));

    var cancel = React.createElement(
      'div',
      { className: 'search-cancel', onClick: this.props.onCancel },
      '×'
    );

    var emptyState = null;
    if (listItems.length === 0) {
      emptyState = React.createElement(
        'div',
        { className: 'empty-state' },
        'Uhm..shows are still loading...'
      );
    }

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'search-input' },
        cancel,
        React.createElement('input', { ref: 'searchInput', className: 'input-search', type: 'search', onKeyUp: this.searchInputDidChange, placeholder: 'Search shows' })
      ),
      emptyState || listItems
    );
  }
});

var Subscriptions = React.createClass({
  displayName: 'Subscriptions',

  render: function render() {
    var listItems = this.props.shows.map((function (show) {
      var className = colorNames.shift();
      colorNames.push(className);

      return React.createElement(ListItem, _extends({}, show, {
        className: className,
        isSubscribed: true,
        onBtnUnsubscribe: this.props.onRemoveSubscription,
        onBtnSubscribe: this.props.onAddSubscription,
        key: show.imdb_id }));
    }).bind(this));

    var emptyState = null;

    if (listItems.length === 0) {
      emptyState = React.createElement(
        'div',
        { className: 'empty-state' },
        'Get started by adding your favorite shows. Tap below!'
      );
    }

    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
    var addText = listItems.length === 0 ? '+ Add your first show' : '+ Add more shows';

    return React.createElement(
      'div',
      null,
      React.createElement(
        ReactCSSTransitionGroup,
        { transitionName: 'list-item-remove' },
        emptyState || listItems
      ),
      React.createElement(
        'div',
        { className: 'list-btn list-item', onClick: this.props.onAddClicked },
        addText
      )
    );
  }
});

var ListItem = React.createClass({
  displayName: 'ListItem',

  getInitialState: function getInitialState() {
    return {
      isSubscribed: this.props.isSubscribed
    };
  },

  handleBtnClick: function handleBtnClick() {
    if (this.state.isSubscribed) {
      this.props.onBtnUnsubscribe(this.props);
    } else {
      this.props.onBtnSubscribe(this.props);
    }

    this.setState({ isSubscribed: !this.state.isSubscribed });
  },

  render: function render() {
    var className = ['list-item', this.props.className, this.props.className ? 'no-border' : ''].join(' ');

    var btn = this.state.isSubscribed ? React.createElement(
      'div',
      { className: 'btn', onClick: this.handleBtnClick },
      'Unsubscribe'
    ) : React.createElement(
      'div',
      { className: 'btn', onClick: this.handleBtnClick },
      'Subscribe'
    );

    return React.createElement(
      'div',
      { className: className },
      React.createElement(
        'div',
        { className: 'list-item-title' },
        this.props.title
      ),
      React.createElement(
        'div',
        { className: 'list-item-end' },
        btn
      )
    );
  }
});

React.render(React.createElement(YoMyPopcornApp, null), document.getElementById('app'));

// Use amethyst and wisteria only for ui and background