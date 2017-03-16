const React = require('react');

let CountdownForm;
CountdownForm = React.createClass({
    onSubmitHandler: function(e) {
        "use strict";
        e.preventDefault();
        let strSeconds = this.refs.seconds.value;

        //console.log('input count', $('input').length);

        if(strSeconds.match(/^[0-9]*$/) && strSeconds !== '') {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },
    render: function() {
        "use strict";
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmitHandler} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter Time In Seconds Here"/>
                    <button className="button expanded">Begin</button>
                </form>
            </div>
        )
    }
});

module.exports = CountdownForm;