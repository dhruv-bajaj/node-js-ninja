const people= ["goku","vegeta"];
console.log(people);

const ages = ["40","42"];

//exporting explicitly

// module.exports = people;

//multiple exports
module.exports = {
    people:people,
    ages:ages
}