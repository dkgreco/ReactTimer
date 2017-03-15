const React = require('react'),
    Clock = require('Clock'),
    CountdownForm = require('CountdownForm');

let Countdown;
Countdown = React.createClass({
    getInitialState: function() {
        "use strict";
        return {count: 0};
    },
    handleSetCountdown: function(seconds) {
        "use strict";
        this.setState({count: seconds});
    },
    render: function() {
        "use strict";
        let {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        )
    }
});

module.exports = Countdown;