import Month from "./month";
import Year from "./year";


describe("Base Test", () => {


    const inputs2019 = [83000, 190000, 140000, 140000, 110000, 100000, 100000, 100000, 100000, 100000, 100000, 100000];
    const inputs2020 = [175000, 200000, 140000, 65000, 100000, 60000, 85000, 85000, 100000, 0, 0, 0];
    const expectedOldGeneral = [0, 0, .00, .75, .75, .75, .75, 0];
    const expectedOldAlt = [0, 0, .75, .75, .75, .75, .75, .75];

    const expectedGeneral = [0, 0, 0, 0.75, 0.75, 0.75, 0.75, 0.18, 0.15, 0, 0, 0.21];
    const expectedAlt = [0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.61, 0.40, 0.21, 0.25];
    //setupOldTest(inputs2019, inputs2020, expectedOldGeneral, expectedOldAlt);
    setupFullTest(inputs2019, inputs2020, expectedGeneral, expectedAlt);
});

describe("Joe Test 1", () => {

    const inputs2019 = [83000, 190000, 140000, 140000, 110000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
    const inputs2020 = [175000, 200000, 140000, 65000, 100000, 60000, 85000, 85000, 85000, 0, 0, 0];
    const expectedOldGeneral = [0, 0, 0, 0.75, 0.75, 0.75, 0.75, 0.18, 0.15, 0.12, 0, 0.09];
    const expectedOldAlt = [0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.61, 0.46, 0.06, 0.25];

    setupFullTest(inputs2019, inputs2020, expectedOldGeneral, expectedOldAlt);
});

describe("Joe Test 2", () => {

    const inputs2019 = [83000, 190000, 140000, 140000, 110000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
    const inputs2020 = [175000, 200000, 140000, 65000, 100000, 60000, 85000, 8000, 85000, 0, 0, 0, 0];
    const expectedOldGeneral = [0, 0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.5, 0.12, 0.2375, 0.25];
    const expectedOldAlt = [0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.629444444444444, 0.25, 0.25];

    setupFullTest(inputs2019, inputs2020, expectedOldGeneral, expectedOldAlt);
});

describe("Joe Test 3", () => {

    const inputs2019 = [83000, 190000, 140000, 140000, 110000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
    const inputs2020 = [85000, 85000, 140000, 65000, 100000, 60000, 8000, 85000, 8000, 0, 0, 0];
    const expectedOldGeneral = [0, 0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.5, 0.604166666666667, 0.2375, 0.25];
    const expectedOldAlt = [0, 0, 0, 0, 0, 0, 0.75, 0.75, 0.5, 0.529901960784314, 0.169117647058823, 0.25];

    setupFullTest(inputs2019, inputs2020, expectedOldGeneral, expectedOldAlt);
});

describe("Joe Test 4", () => {

    const inputs2019 = [83000, 190000, 140000, 140000, 110000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
    const inputs2020 = [10000, 100000, 140000, 65000, 100000, 60000, 8000, 40000, 85000, 0, 0, 0];
    const expectedOldGeneral = [0, 0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.675, 0.190833333333333, 0.104166666666667, 0.25];
    const expectedOldAlt = [0, 0, 0, 0, 0, 0, 0.75, 0.75, 0.272727272727273, 0, 0, 0];

    setupFullTest(inputs2019, inputs2020, expectedOldGeneral, expectedOldAlt);
});
describe("Joe Test 5", () => {

    const inputs2019 = [83000, 190000, 140000, 140000, 110000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
    const inputs2020 = [40000, 40000, 140000, 65000, 100000, 10000, 20000, 40000, 20000, 0, 0, 0];
    const expectedOldGeneral = [0, 0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.65, 0.25, 0.25];
    const expectedOldAlt = [0, 0, 0, 0, 0, 0.75, 0.75, 0.75, 0.5, 0.4, 0, 0.25];

    setupFullTest(inputs2019, inputs2020, expectedOldGeneral, expectedOldAlt);
});
describe("Joe Test 6", () => {

    const inputs2019 = [83000, 190000, 140000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
    const inputs2020 = [40000, 40000, 140000, 10000, 20000, 40000, 20000, 40000, 20000, 0, 0, 0];
    const expectedOldGeneral = [0, 0, 0, 0.75, 0.75, 0.75, 0.85, 0.85, 0.708333333333333, 0.65, 0.25, 0.25];
    const expectedOldAlt = [0, 0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.5, 0.4, 0, 0.25];

    setupFullTest(inputs2019, inputs2020, expectedOldGeneral, expectedOldAlt);
});
describe("Joe Test 7", () => {

    const inputs2019 = [83000, 190000, 140000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
    const inputs2020 = [175000, 200000, 140000, 65000, 100000, 60000, 85000, 85000, 85000, 0, 0, 0];
    const expectedOldGeneral = [0, 0, 0, 0.75, 0.75, 0.75, 0.75, 0.18, 0.15, 0.12, 0, 0.25];
    const expectedOldAlt = [0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.613888888888889, 0.458333333333333, 0.247222222222222, 0.25];

    setupFullTest(inputs2019, inputs2020, expectedOldGeneral, expectedOldAlt);
});
// describe("Joe Test 8", () => {

//     const inputs2019 = [83000, 190000, 140000, 140000, 110000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
//     const inputs2020 = [85000, 85000, 140000, 65000, 100000, 60000, 8000, 85000, 8000, 0, 0, 0];
//     const expectedOldGeneral = [0, 0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.15, 0.12, 0, 0.25];
//     const expectedOldAlt = [0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.61, 0.51, 0.25, 0.25];

//     setupFullTest(inputs2019, inputs2020, expectedOldGeneral, expectedOldAlt);
// });

function setupOldTest(inputs2019: number[], inputs2020: number[], expectedOldGeneral: number[], expectedOldAlt: number[]) {
    let year = new Year(inputs2019, inputs2020);

    let testData = [];
    for (let i = 0; i < 8; i++) {
        testData.push([i, year, expectedOldGeneral[i], expectedOldAlt[i]]);
    }
    test.each(testData)('Test Inputs(%i, %o, %i, %i)', (input, year, oldGen, oldAlt) => {
        let y = (year as Year);
        let i = (input as number);
        let month = new Month(i, i, y.revenue2019, y.revenue2020);
        expect(month.oldgeneralEligiblePercent).toEqual(oldGen);
        expect(month.oldAlternativeEligiblePercent).toEqual(oldAlt);

    });
}


// describe("Joe Test 1", () => {

//     const inputs2019 = [83000, 190000, 140000, 140000, 110000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
//     const inputs2020 = [175000, 200000, 140000, 65000, 100000, 60000, 85000, 8000, 85000, 0, 0, 0];
//     const expectedOldGeneral = [0, 0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0];
//     const expectedOldAlt = [0, 0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0];

//     setupOldTest(inputs2019, inputs2020, expectedOldGeneral, expectedOldAlt);
// });

function setupFullTest(inputs2019: number[], inputs2020: number[], expectedOldGeneral: number[], expectedOldAlt: number[]) {
    let year = new Year(inputs2019, inputs2020);
    year.getvalues();
    let testData = [];
    for (let i = 0; i < 10; i++) {
        testData.push([i, year.finalGeneralResults[i], year.finalAltResults[i], expectedOldGeneral[i], expectedOldAlt[i]]);
    }
    test.each(testData)('Test Inputs(%i, %i, %i, %i)', (input, finalResults, finalAltResults, expectedGeneralResult, expectedAltResult) => {


        expect(finalResults.toFixed(2)).toEqual(expectedGeneralResult.toFixed(2));
        expect(finalAltResults.toFixed(2)).toEqual(expectedAltResult.toFixed(2));

    });
}
