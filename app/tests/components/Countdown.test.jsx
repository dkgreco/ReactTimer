const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let Countdown = require('Countdown');

describe('Countdown', () => {
    "use strict";
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state of count to seconds specified, as well as set countdownStatus to started, finally' +
            ' it should decrement as expected.', (done) => {
            let countdown = TestUtilsLib.renderIntoDocument(<Countdown/>),
                expectedCount = 10,
                expectedState = 'started';
            countdown.handleSetCountdown(expectedCount);

            let actualCount = countdown.state.count,
                actualState = countdown.state.countdownStatus;

            expect(actualCount).toBe(expectedCount);
            expect(actualState).toBe(expectedState);

            setTimeout(() => {
                let postProcessActualCount = countdown.state.count,
                    postProcessExpectedCount = expectedCount - 1;
                expect(postProcessActualCount).toBe(postProcessExpectedCount);
                done();
            }, 1001);
        });

        it('should never set a negative integer', (done) => {
            let countdown = TestUtilsLib.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                let postProcessActualCount = countdown.state.count,
                    postProcessExpectedCount = 0;
                expect(postProcessActualCount).toBe(postProcessExpectedCount);
                done();
            }, 2000);
        });

        it('should not decrement integer when countdownStatus is paused', (done) => {
            let countdown = TestUtilsLib.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(5);
            countdown.handleStatusChange('paused');

            setTimeout(() => {
                let postProcessActualCount = countdown.state.count,
                    postProcessExpectedCount = 5,
                    postProcessActualStatus = countdown.state.countdownStatus,
                    postProcessExpectedStatus = 'paused';
                expect(postProcessActualCount).toBe(postProcessExpectedCount);
                expect(postProcessActualStatus).toBe(postProcessExpectedStatus);
                done();
            }, 1005);
        });

        it('should reset count to 0 and status to stopped when cleared', (done) => {
            let countdown = TestUtilsLib.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(5);
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
                let postProcessActualCount = countdown.state.count,
                    postProcessExpectedCount = 0,
                    postProcessActualStatus = countdown.state.countdownStatus,
                    postProcessExpectedStatus = 'stopped';
                expect(postProcessActualCount).toBe(postProcessExpectedCount);
                expect(postProcessActualStatus).toBe(postProcessExpectedStatus);
                done();
            }, 1005);
        });
    });
});