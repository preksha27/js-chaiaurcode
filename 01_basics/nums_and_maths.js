const score = 400;
console.log(score);

const balance = new Number(100);

console.log(balance);

console.log(balance.toString().length);
//console.log(typeof(balance));
console.log(balance.toFixed(2));

const otherNumber = 23.165;
console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//////////////////////MATHS/////////////////

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.max(4, 7, 9 ,9));
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);
const min = 0;
const max = 6;
console.log(Math.floor(Math.random()*(max-min+1))+min);//formula for generating random numbers between certain numbers.used in dice game(ex)

