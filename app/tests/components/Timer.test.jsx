const React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtilsLib = require('react-addons-test-utils');

let Timer;
Timer = require('Timer');

describe('Timer Component', () => {
    "use strict";
    it('should exist', () => {
        expect(Timer).toExist();
    })

    describe('handleStartTimer', () => {
        it('should set state of count to seconds as timer increments, and set status to started', done => {
            let timer = TestUtilsLib.renderIntoDocument(<Timer/>),
                expectedCount = 0,
                expectedState = 'stopped';

            let actualCount = timer.state.counter,
                actualState = timer.state.timerStatus;

            expect(actualCount).toBe(expectedCount);
            expect(actualState).toBe(expectedState);

            timer.handleStatusChange('started');

            setTimeout(() => {
                let postProcessActualCount = timer.state.counter,
                    postProcessExpectedCount = expectedCount + 1,
                    postProcessActualState = timer.state.timerStatus,
                    postProcessExpectedState = 'started';
                expect(postProcessActualCount).toBe(postProcessExpectedCount);
                expect(postProcessActualState).toBe(postProcessExpectedState);
                done();
            }, 1001);
        });

        it('should stop incrementation when status is set to paused', done => {
            let timer = TestUtilsLib.renderIntoDocument(<Timer/>),
                expectedCount = 0,
                expectedState = 'paused';

            timer.handleStatusChange(expectedState);

            setTimeout(() => {
                let postProcessActualCount = timer.state.counter,
                    postProcessExpectedCount = expectedCount,
                    postProcessActualState = timer.state.timerStatus,
                    postProcessExpectedState = expectedState;
                expect(postProcessActualCount).toBe(postProcessExpectedCount);
                expect(postProcessActualState).toBe(postProcessExpectedState);
                done();
            }, 1001);
        });

        it('should reset count to 0 and status to stopped when cleared', (done) => {
            let timer = TestUtilsLib.renderIntoDocument(<Timer/>),
                expectedCount = 0,
                expectedState = 'stopped';
            timer.handleStatusChange('stopped');

            setTimeout(() => {
                let postProcessActualCount = timer.state.counter,
                    postProcessActualStatus = timer.state.timerStatus;
                expect(postProcessActualCount).toBe(expectedCount);
                expect(postProcessActualStatus).toBe(expectedState);
                done();
            }, 1005);
        });
    });
});