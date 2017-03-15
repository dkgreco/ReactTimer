const React = require('react'),
    Clock = require('Clock'),
    CountdownForm = require('CountdownForm');

let Countdown;
Countdown = React.createClass({
    getInitialState: function() {
        "use strict";
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },
    handleSetCountdown: function(seconds) {
        "use strict";
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    componentDidUpdate: function(prevProps, prevState) {
        //This is called whenever  props or state is changed
        "use strict";
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    },
    startTimer: function() {
        "use strict";
        this.timer = setInterval(() => {
            let countdownInterval = this.state.count - 1;
            this.setState({
                count: countdownInterval >= 0 ? countdownInterval : 0
            });
        }, 1000);
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