const React = require('react');

let Controls;

Controls = React.createClass({
    propTypes: {
        timerStatus: React.PropTypes.string,
        countdownStatus: React.PropTypes.string,
        onStatusChange: React.PropTypes.func.isRequired,
        componentName: React.PropTypes.string.isRequired
    },
    onStatusChange: function(statusUpdate) {
        "use strict";
        //currying
        return () => {
            this.props.onStatusChange(statusUpdate);
        }
    },
    componentWillReceiveProps: function(nextProps) {
        "use strict";
        //console.log(`Component will receive new props: ${nextProps.toString()}`);
    },
    render: function() {
        "use strict";
        let {componentName, countdownStatus, timerStatus} = this.props;
        let renderStartOrPause = () => {
            let button,
                pausedState = (countdownStatus === 'paused' || timerStatus === 'paused'),
                startedState = (countdownStatus === 'started' || timerStatus === 'started'),
                stoppedState = timerStatus === 'stopped',
                timer = componentName === 'Timer',
                countdown = componentName === 'Countdown';

            if (timer && startedState) {
                button = <button className="button secondary" onClick={this.onStatusChange('paused')}>Stop</button>
            } else if (((timer || countdown) && pausedState) || (timer && stoppedState)) {
                button = <button className="button secondary" onClick={this.onStatusChange('started')}>Start</button>;
            } else if (countdown && startedState) {
                button = <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            }

            return button;
        };
        return (
            <div className="controls">
                {renderStartOrPause()}
                <button className="button hollow alert" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        )
    }
});

module.exports = Controls;