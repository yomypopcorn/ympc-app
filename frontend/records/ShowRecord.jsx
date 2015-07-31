import {Record} from 'immutable';

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

function getColorIndex () {
  var idx = typeof localStorage.getItem('currentColorIndex') !== 'undefined' ?
    +localStorage.getItem('currentColorIndex')
    : 0;

  localStorage.setItem('currentColorIndex', (idx + 1) % colorNames.length);

  return idx;
}

var currentColorIndex = +localStorage.getItem('currentColorIndex') || 0;

function getColor (showId) {
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

class ShowRecord extends Record(defaults) {

  getColor () {
    if (!this.isSubscribed) { return null; }
    return getColor(this.imdb_id);
  }

};

export default ShowRecord;
