const React = require('react');

let Controls;
Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },
    render: function() {
        "use strict";
        let {countdownStatus} = this.props;
        let renderStartOrPause = () => {
            let button;
            if (countdownStatus === 'started') {
                button = <button className="button secondary">Pause</button>
            } else if (countdownStatus === 'paused') {
                button = <button className="button primary">Start</button>
            }
            return button;
        };
        return (
            <div className="controls">
                {renderStartOrPause()}
                <button className="button hollow alert">Clear</button>
            </div>
        )
    }
});

module.exports = Controls;