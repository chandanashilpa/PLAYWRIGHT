console.log(process.platform)
console.log(process.version)
console.log(process.arch)
// Function to reverse a string
function reverse_string(s) {

    return s.split('').reverse().join('');

}
function add(a, b) {
    return a + b;
}

// Copilot might generate a test like this:
function test_add() {
    console.assert(add(2, 3) === 5, "Test failed: add(2, 3) should equal 5");
    console.assert(add(-1, 1) === 0, "Test failed: add(-1, 1) should equal 0");
    console.assert(add(0, 0) === 0, "Test failed: add(0, 0) should equal 0");
}
