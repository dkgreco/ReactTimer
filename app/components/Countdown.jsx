const React = require('react'),
    Clock = require('Clock');

let Countdown;
Countdown = () => {
    "use strict";
    return (
        <div>
            <Clock totalSeconds={129}/>
        </div>
    )
};

module.exports = Countdown;