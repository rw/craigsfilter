// ==UserScript==
// @name          Craigsfilter
// @namespace     http://rwinslow.com
// @description   Hide spammy results in Craigslist NY housing searches.
// @require       http://code.jquery.com/jquery-1.6.1.js
// @include       http://newyork.craigslist.org/*
// ==/UserScript==

// A Greasemonkey script for hiding spammy search results on craigslist.
// Tested in Firefox 4 (should work in Chrome if it includes jQuery).

$(document).ready(function() {
  var c = '#ccc'; // background color of hidden items

  // the only <p> elements are search results,
  // so detect those that match a regex:
  var lines = $("p").filter(function() {
    // match 4 contiguous capital letters
    // heuristic derived by John Workman @workmajj
    return this.innerHTML.match(/[A-Z]{4}/);
  });

  // update the styling to hide the lines:
  lines.css('background-color', c)
       .css('color', c);

  // style links
  lines.find('a').css('color', c);

  // and spans
  lines.find('span').css('color', c);

  // alternately, remove the lines altogether:
  // lines.remove()
});
