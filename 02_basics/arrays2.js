const marvel_heros = ["thor","spiderman","ironman"]
const dc_heros = ["superman", "flash","batman"]
console.log(marvel_heros.concat(dc_heros));
// use spread instead of concat

const allHeros = [...marvel_heros, ...dc_heros]
console.log(allHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anotherArray = anotherArray.flat(Infinity)
console.log(real_anotherArray)

console.log(Array.isArray("Preksha"))
console.log(Array.from("preksha"))

console.log(Array.from({name : "preksha"}))//important

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))

