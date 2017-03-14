const React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    Main = require('Main');

//Load Foundation and Custom CSS
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');

$('document').foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
    </Router>,
    document.getElementById('app')
);