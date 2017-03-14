const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let Clock = require('Clock');
describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
        "use strict";
        it('should render clock to output', () => {
            let clock = TestUtilsLib.renderIntoDocument(<Clock totalSeconds={62}/>);
            let $element = $(ReactDOM.findDOMNode(clock));
            let actualText = $element.find('.clock-text').text();
            let expected = '01:02';

            expect(actualText).toBe(expected);
        });
    });

    describe('formatSeconds', () => {
        "use strict";
        it('should format seconds', () => {
            let clock = TestUtilsLib.renderIntoDocument(<Clock/>),
                seconds = 615,
                expected = '10:15',
                actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
        it('should format seconds when min/sec are less than 10', () => {
            let clock = TestUtilsLib.renderIntoDocument(<Clock/>),
                seconds = 61,
                expected = '01:01',
                actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
});