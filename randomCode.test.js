const someNumbers = require('./randomCode'); //importing randomCode module into the variable called functionName

test("function should add two numbers", ()=>{
    expect(someNumbers(1,1)).toBe(2) 
})

test("adding 1 and 2 should give 3", ()=>{
    expect(someNumbers(1,2)).toBe(3)
})

test("adding bigger numbers together", ()=>{
    expect(someNumbers(700, 1000)).toBe(1700)
})

test("function should only take in numbers", ()=>{
    expect(someNumbers("hello", 2)).toBe(null)
})