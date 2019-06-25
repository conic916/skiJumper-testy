const assert = require('assert');
const stylePoints = require('./calculateStylePoints');
const colors = require('colors');

describe('Style Points'.yellow, () => {

    it('return number when notes are the same'.green, () => {
        const actual = stylePoints([20, 20, 20, 20, 20]);

        const expected = 60;

        assert.equal(actual, expected);
    });

    it('return number when two of notes are the same'.green, () => {
        const actual = stylePoints([17, 17.5, 18, 16.5, 17]);

        const expected = 51.5;

        assert.equal(actual, expected);
    });

    it('return number when notes are different'.green, () => {
        const actual = stylePoints([18, 17.5, 16, 16.5, 17]);

        const expected = 51;

        assert.equal(actual, expected);
    });

    it('return number when two of notes are the same'.green, () => {
        const actual = stylePoints([9, 9, 8, 8, 8.5]);

        const expected = 25.5;

        assert.equal(actual, expected);
    });
});