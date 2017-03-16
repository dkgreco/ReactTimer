const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let Controls = require('Controls');
let emptyFunc = () => {};

describe('Controls Component', () => {
    "use strict";
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('Render', () => {
       it('should render pause when started', () => {
            let controls = TestUtilsLib.renderIntoDocument(<Controls componentName="Countdown" countdownStatus="started" onStatusChange={emptyFunc}/>),
                $element = $(ReactDOM.findDOMNode(controls));

            let $pauseButton = $element.find('button:contains(Pause)');

            //length property on the jquery selector is equal to the # of items found
            expect($pauseButton.length).toBe(1);
        });

       it('should render start when paused', () => {
            let controls = TestUtilsLib.renderIntoDocument(<Controls componentName="Countdown" countdownStatus="paused" onStatusChange={emptyFunc}/>),
                $element = $(ReactDOM.findDOMNode(controls));

            let $startButton = $element.find('button:contains(Start)');

            //length property on the jquery selector is equal to the # of items found
            expect($startButton.length).toBe(1);
       });
    });
});