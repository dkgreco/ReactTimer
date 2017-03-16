const React = require('react'),
    Clock = require('Clock'),
    Controls = require('Controls');

let Timer;
Timer = React.createClass({
    getInitialState: function() {
        "use strict";
        return {
            counter: 0,
            timerStatus: 'stopped',
            componentName: this.constructor.displayName
        }
    },
    componentDidUpdate: function(prevProps, prevState) {
        "use strict";
        if(this.state.timerStatus !== prevState.timerStatus) {
            switch(this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({counter:0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function() {
        "use strict";
        //console.log('Timer.jsx unmounted from DOM (ran prior to unmount of the rendered component)');
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function() {
        "use strict";
        this.timer = setInterval(() => {
             this.setState({
                counter: this.state.counter + 1
            });
        }, 1000);
    },
    handleStatusChange: function(statusChange) {
        "use strict";
        this.setState({
            timerStatus: statusChange
        });
    },
    render: function() {
        "use strict";
        let {counter, timerStatus, componentName} = this.state;

        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={counter}/>
                <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange} componentName={componentName}/>
            </div>
        )
    }
});

module.exports = Timer;