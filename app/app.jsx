const React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    Main = require('Main'),
    Timer = require('Timer'),
    Countdown = require('Countdown');

//Load Foundation and Custom CSS
require('style!css!sass!applicationStyles');
$('document').foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Timer}/>
            <Route path="/Countdown" component={Countdown}/>
        </Route>
    </Router>,
    document.getElementById('app')
);