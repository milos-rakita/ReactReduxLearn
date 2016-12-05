var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// //load foundation 
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation()

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <p>React Redux Learn</p>,
    document.getElementById('app')
);
  
// require('./redux-example.jsx');
require('./redux-todo-example.jsx');