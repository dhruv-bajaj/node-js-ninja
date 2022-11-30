// reuire is running the module as well
const xyz = require("./3_people")
// returns an empty object. we have to explicitly export
console.log(xyz); 
console.log(xyz.people);
console.log(xyz.ages);

//can also use destructuring
const {people,ages} = require("./3_people");
console.log(people +" "+ ages);