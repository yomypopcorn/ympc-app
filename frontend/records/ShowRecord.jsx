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

function getColor (showId) {
  var colorKey = 'color:' + showId;
  var color = localStorage.getItem(colorKey);

  if (!color) {
    color = colorNames.shift();
    colorNames.push(color);
    localStorage.setItem(colorKey, color);
  }

  return color;
}

var defaults = {
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
