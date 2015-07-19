'use strict';

import React from 'react/addons';
import ShowsActions from '../actions/ShowsActions';

var ShowsSearchInput = React.createClass({

  getInitialState () {
    return { value: '' };
  },

  search (text) {
    ShowsActions.search(text);
  },

  render () {
    var cancel = <div className="search-cancel" onClick={this.props.onCancel}>×</div>;

    return (
      <div className="search-input">
        {cancel}
        <input
          ref="searchInput"
          className="input-search"
          type="search"
          placeholder="Search shows"
          autoFocus={true}
          onChange={(ev) => this.search(ev.target.value)} />
      </div>
    );
  }

});

export default ShowsSearchInput;
