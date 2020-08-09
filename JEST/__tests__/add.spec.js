const add = require("../src/add");
test('Addition of Two Numbers', function() {
    expect(add(4, 5)).toBe(9);
    // expect(add(4, 5)).toBeGreaterThan(9); //error
    expect(add(4, 5)).toBeLessThan(10);

});