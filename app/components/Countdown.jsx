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
            countdownStatus: 'stopped',
            componentName: this.constructor.displayName
        };
    },
    handleSetCountdown: function(seconds) {
        "use strict";
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    componentWillUpdate: function(nextProps, nextState) {
        "use strict";
        //console.log('Props and State Change will cause update');
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
    componentWillMount: function() {
        "use strict";
        //console.log('Countdown.jsx will be mounted to the DOM (ran prior to render of mounted component)');
    },
    componentDidMount: function() {
        "use strict";
        //console.log('Countdown.jsx was mounted to the DOM (ran post render of component into DOM');
    },
    componentWillUnmount: function() {
        "use strict";
        //console.log('Countdown.jsx unmounted from DOM (ran prior to unmount of the rendered component)');
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function() {
        "use strict";
        this.timer = setInterval(() => {
            let countdownInterval = this.state.count - 1;
            this.setState({
                count: countdownInterval >= 0 ? countdownInterval : 0
            });

            if (countdownInterval === 0) {
                this.setState({countdownStatus:'stopped'});
            }
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
        let {count, countdownStatus, componentName} = this.state,
            renderControlArea = () => {
                if(countdownStatus !== 'stopped') {
                    return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} componentName={componentName}/>
                } else {
                    return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
                }
            };
        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        )
    }
});

module.exports = Countdown;