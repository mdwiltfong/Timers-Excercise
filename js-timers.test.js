const { test, expect } = require("@jest/globals");
const countDown = require('./js-timers')

test('function is able to countdown to 1',async ()=>{
console.log = jest.fn();
countDown(4);

expect(console.log.mock.calls).toBe('hello')

})