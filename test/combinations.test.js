const combinations = require("../combinations")

test('Input: "23", Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]', () => {
    const input = "23";
    const expectedOutput = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    expect(combinations(input).sort()).toEqual(expectedOutput.sort());
});
test('Input: "", Output: []', () => {
    const input = "";
    const expectedOutput = [];
    expect(combinations(input)).toEqual(expectedOutput);
});
test('Input: "2", Output: ["a","b","c"]', () => {
    const input = "2";
    const expectedOutput = ["a","b","c"];
    expect(combinations(input).sort()).toEqual(expectedOutput.sort());
});
test('Input: 2, Output: []', () => {
    const input = 2;
    const expectedOutput = [];
    expect(combinations(input)).toEqual(expectedOutput);
});
test('Input: "a", Output: []', () => {
    const input = "a";
    const expectedOutput = [];
    expect(combinations(input)).toEqual(expectedOutput);
});
test('Input: "1234", Output: []', () => {
    const input = "1234";
    const expectedOutput = [];
    expect(combinations(input)).toEqual(expectedOutput);
});
test('Input: "92344", Output: []', () => {
    const input = "92344";
    const expectedOutput = [];
    expect(combinations(input)).toEqual(expectedOutput);
});