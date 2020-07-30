import calcPercentLostNoNegative from './calcPercentLossNoNegative';

describe("calcPercentLostNoNegative tests", () => {
    test("it should calculate the amount lost", () => {
        const oldValue = 100;
        const newValue = 50
        expect(calcPercentLostNoNegative(oldValue, newValue)).toEqual(0.5);
    });
    test("it should return 0 if it is a gain", () => {
        const oldValue = 10;
        const newValue = 50
        expect(calcPercentLostNoNegative(oldValue, newValue)).toEqual(0);
    });
    test("it should return 0 if the oldValue is 0", () => {
        const oldValue = 0;
        const newValue = 50
        expect(calcPercentLostNoNegative(oldValue, newValue)).toEqual(0);
    });
    test("it should return 0 if the newValue is 0", () => {
        const oldValue = 100;
        const newValue = 0
        expect(calcPercentLostNoNegative(oldValue, newValue)).toEqual(0);
    });
    test("it should return 0 if both values are 0", () => {
        const oldValue = 0;
        const newValue = 0
        expect(calcPercentLostNoNegative(oldValue, newValue)).toEqual(0);
    });
})