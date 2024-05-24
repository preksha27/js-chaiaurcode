const name = "preksha"
const repoCount = 20

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount} `);// this is called string interpolation

const gameName = new String("Preksha");//we can declare with the help of object

console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));// give index to get value
console.log(gameName.indexOf('r'));//give value to get index

const newString = gameName.substring(0,4);
console.log(newString)
 
const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newString1 = "      preksha    ";
console.log(newString1);
console.log(newString1.trim());

const url= "https://preksha.com/prek@nc";
console.log(url.replace('@','-'));

console.log(url.includes('rani'));

//conver string to array
 const firstName = "Preksha-n-c";

 console.log(firstName.split('-'));
 