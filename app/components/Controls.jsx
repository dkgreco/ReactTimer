const React = require('react');

let Controls;
Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
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
        console.log(`Component will receive new props: ${nextProps.countdownStatus}`);
    },
    render: function() {
        "use strict";
        let {countdownStatus} = this.props;
        let renderStartOrPause = () => {
            let button;
            if (countdownStatus === 'started') {
                button = <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            } else if (countdownStatus === 'paused') {
                button = <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
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