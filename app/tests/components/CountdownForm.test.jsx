const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    "use strict";
    it('should exist', () => {
       expect(CountdownForm).toExist();
    });

    it('should call setCountdown() if valid seconds entered', () => {
        let spy = expect.createSpy(),
            countdownForm = TestUtilsLib.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>),
            $element = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        TestUtilsLib.Simulate.submit($element.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call setCountdown() if invalid seconds entered', () => {
        let spy = expect.createSpy(),
            countdownForm = TestUtilsLib.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>),
            $element = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '';
        TestUtilsLib.Simulate.submit($element.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});