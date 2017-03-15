const React = require('react'),
    Navigation = require('Navigation');

let Main;
Main = props => {
    "use strict";
    return (
        <div>
            <Navigation/>
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;