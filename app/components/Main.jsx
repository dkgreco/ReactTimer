const React = require('react'),
    Navigation = require('Navigation');

let Main;
Main = props => {
    "use strict";
    return (
        <div>
            <Navigation/>
            <div>
                <p>Main.jsx Rendered</p>
                {props.children}
            </div>
        </div>
    );
};

module.exports = Main;