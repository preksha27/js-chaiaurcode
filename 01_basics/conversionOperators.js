let score = "33"

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// "33" =>33
// "33abc" => NaN (not a number) but whose type is number
// true => 1, false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 -> true,0 => false
// "" => false
// "Preksha" => true

let someNum = 33
let stringNumber = String(someNum)
console.log(stringNumber);
console.log(typeof stringNumber);