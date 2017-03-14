const React = require('react'),
    {Link, IndexLink} = require('react-router');

let Navigation;
Navigation = () => {
    "use strict";
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React Timer
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link">
                            Timer
                        </IndexLink>
                    </li>
                    <li>
                        <Link to="/Countdown" activeClassName="active-link">
                            Countdown
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="https://www.linkedin.com/in/dkgreco/" target="_blank">Dustin Greco</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

module.exports = Navigation;