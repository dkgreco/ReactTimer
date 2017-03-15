const React = require('react'),
    Clock = require('Clock'),
    CountdownForm = require('CountdownForm'),
    Controls = require('Controls');

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
                case 'stopped':
                    this.setState({count:0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
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
    handleStatusChange: function(statusUpdate) {
        "use strict";
        this.setState({
            countdownStatus: statusUpdate
        });
    },
    render: function() {
        "use strict";
        let {count, countdownStatus} = this.state,
            renderControlArea = () => {
                if(countdownStatus !== 'stopped') {
                    return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
                } else {
                    return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
                }
            };
        return (
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        )
    }
});

module.exports = Countdown;