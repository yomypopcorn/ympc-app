var colorNames = [
  'turquoise',
  'emerald',
  'peter',
  'asphalt',
  'green',
  'sunflower',
  'belize',
  'alizarin',
// Use amethyst and wisteria only for ui and background
];

var apiBase = '/api';
var apiToken = document.querySelector('html').getAttribute('x-token');

var YoMyPopcornApp = React.createClass({
  getInitialState(){
    return {
      activeScreen: this.getScreenNameFromURL(),
      userName: this.getUsernameFromURL()
    };
  },

  getScreenNameFromURL(){
    return location.pathname.replace("/", "") === "shows" ? "shows" : "feed";
  },

  setFeedActive(){
    this.setState({activeScreen: 'feed'});
  },

  setShowsActive(){
    this.setState({activeScreen: 'shows'});
  },

  getUsernameFromURL(){
    var params = (location.search || "?").split("?").splice(1)[0];
    var parts = params.split("=");

    if(parts.length > 1){
      return parts[1];
    }

    return 'crap_unknown_username';
  },

  render(){
    var isFeedActive = this.state.activeScreen == 'feed';

    var isFeedTabActive = isFeedActive ? 'is-active tab' : 'tab';
    var isShowsTabActive = !isFeedActive ? 'is-active tab' : 'tab'

    var screen = isFeedActive ? <Feed userName={this.state.userName} /> : <Shows userName={this.state.userName} />;

    return <div>
      <div className="tabs">
        <div className={isFeedTabActive} onClick={this.setFeedActive}>Feed</div>
        <div className={isShowsTabActive} onClick={this.setShowsActive}>Shows</div>
      </div>
      {screen}
    </div>;
  }
});

var Feed = React.createClass({
  getInitialState(){
    return {
      feed: []
    }
  },

  componentDidMount(){
    $.get(apiBase+'/users/' + this.props.userName + '/feed?token=' + apiToken).then(function(data){
      this.setState({feed: data});
    }.bind(this));
  },

  render(){
    var feedResults = this.state.feed.map(function(item){
      return <FeedItem {...item} key={item.imdb_id} />;
    });

    var emptyState = null;
    if(feedResults.length === 0){
      emptyState = <div className="empty-state">Nothing here yet...</div>;
    }

    return <div>{emptyState || feedResults}</div>;
  }
});

var FeedItem = React.createClass({
  render(){
    var localStyle = {
      backgroundImage: ('url('+this.props.poster+')')
    };

    var timeAgo = moment(this.props.first_aired * 1000).fromNow();

    return <div className="feed-item">
      <div className="feed-item-header emerald">{timeAgo}</div>
      <div className="feed-item-body" style={localStyle}>
        <div className="shadow">
          <div className="title">{this.props.title}</div>
        </div>
      </div>
      <div className="feed-item-footer emerald">Season {this.props.season}, Episode {this.props.episode}</div>
    </div>;
  }
});

var Shows = React.createClass({
  getInitialState(){
    return {
      isSearching: false,
      userName: this.props.userName,
      subscribedShows: [],
      shows: []
    }
  },

  componentDidMount(){
    $.getJSON(apiBase+'/shows?compact=1').then(function(data){
      this.setState({shows: data});
    }.bind(this));

    $.getJSON(apiBase+'/users/'+this.state.userName+'/shows?token='+apiToken+'&compact=1').then(function(data){
      this.setState({subscribedShows: data});
    }.bind(this));
  },

  setSearchActive(){
    this.setState({isSearching: true});
  },

  setSearchInactive(){
    this.setState({isSearching: false});
  },

  addSubscription(show){
    var shows = this.state.subscribedShows.push(show);
    var url = [apiBase, '/users/', this.state.userName, '/shows?token=', apiToken].join("");

    $.ajax({
      type: "POST",
      url: url,
      data: { imdb_id: show.imdb_id },
      success: function(){},
      dataType: 'json'
    });
    this.setSearchInactive()
  },

  removeSubscription(show){
    var newSubscriptions = this.state.subscribedShows.filter(function(item){
      return item.imdb_id !== show.imdb_id;
    });

    // optimistic remove
    this.setState({subscribedShows: newSubscriptions});

    var url = [apiBase, '/users/', this.state.userName, '/shows/', show.imdb_id, '?token=', apiToken].join("");

    $.ajax({
      type: "DELETE",
      url: url,
      data: {},
      success: function(){},
      dataType: 'json'
    });
  },

  render(){
    var subscribed = this.state.subscribedShows.map(function(show){
      show.isSubscribed = true;
      return show;
    });

    var childs = this.state.isSearching ?
      <Search shows={this.state.shows} onSearch={this.search} onCancel={this.setSearchInactive} onAddSubscription={this.addSubscription} onRemoveSubscription={this.removeSubscription}/>
      : <Subscriptions shows={subscribed} onAddClicked={this.setSearchActive} onAddSubscription={this.addSubscription} onRemoveSubscription={this.removeSubscription} />

    return <div>
      {childs}
    </div>
  }
});

var Search = React.createClass({
  getInitialState(){
    return {
      searchValue: null
    }
  },

  searchInputDidChange(){
    var input = React.findDOMNode(this.refs.searchInput);
    var text = input.value;
    this.setState({searchValue: text});
  },

  componentDidMount(){
    var input = React.findDOMNode(this.refs.searchInput);
    $(input).focus();
    if (window.scrollTo) window.scrollTo(0,0);
  },

  render(){
    var results = this.props.shows.filter(function(show){
      var value = (this.state.searchValue || "").toLowerCase();
      var showName = (show.title || "");
      return showName.toLowerCase().indexOf(value) !== -1;
    }.bind(this));

    var listItems = results.map(function(show){
      return <ListItem {...show}
        isSubscribed={false}
        onBtnUnsubscribe={this.props.onRemoveSubscription}
        onBtnSubscribe={this.props.onAddSubscription}
        key={show.imdb_id}/>
    }.bind(this));


    var cancel = <div className="search-cancel" onClick={this.props.onCancel}>×</div>;


    var emptyState = null;
    if(listItems.length === 0){
      emptyState = <div className="empty-state">Uhm..shows are still loading...</div>;
    }

    return <div>
      <div className="search-input">
        {cancel}
        <input ref="searchInput" className="input-search" type="search" onKeyUp={this.searchInputDidChange} placeholder="Search shows" />
      </div>
      {emptyState || listItems}
    </div>;
  }
});

var Subscriptions = React.createClass({
  render(){
    var listItems = this.props.shows.map(function(show){
      var className;
      var storageKey = 'color:' + show.imdb_id;
      var storedColor = localStorage.getItem(storageKey)

      if (storedColor) {
        className = storedColor
      } else {
        className = colorNames.shift();
        colorNames.push(className);
        localStorage.setItem(storageKey, className)
      }


      return <ListItem {...show}
        className={className}
        isSubscribed={true}
        onBtnUnsubscribe={this.props.onRemoveSubscription}
        onBtnSubscribe={this.props.onAddSubscription}
        key={show.imdb_id}/>
    }.bind(this));

    var emptyState = null;

    if(listItems.length === 0){
      emptyState = <div className="empty-state">Get started by adding your favorite shows. Tap below!</div>;
    }

    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
    var addText = listItems.length === 0 ? '+ Add your first show' : '+ Add more shows';

    return <div>
      <ReactCSSTransitionGroup transitionName="list-item-remove">
        {emptyState || listItems}
      </ReactCSSTransitionGroup>
      <div className="list-btn list-item" onClick={this.props.onAddClicked}>{addText}</div>
    </div>;
  }
});

var ListItem = React.createClass({
  getInitialState(){
    return {
      isSubscribed: this.props.isSubscribed
    }
  },

  handleBtnClick(){
    if(this.state.isSubscribed){
      this.props.onBtnUnsubscribe(this.props);
    }
    else {
      this.props.onBtnSubscribe(this.props)
    }

    this.setState({isSubscribed: !this.state.isSubscribed});
  },

  render(){
    var className = [
      'list-item',
      this.props.className,
      this.props.className ? 'no-border' : ''
    ].join(" ");

    var btn = this.state.isSubscribed ?
      <div className="btn" onClick={this.handleBtnClick}>Unsubscribe</div>
      : <div className="btn" onClick={this.handleBtnClick}>Subscribe</div>

    return <div className={className}>
      <div className="list-item-title">{this.props.title}</div>
      <div className="list-item-end">{btn}</div>
    </div>;
  }
});

React.render(<YoMyPopcornApp />, document.getElementById('app'));
