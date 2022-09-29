const {Person} = require ("./person");

require ("./modules/path");
const person = new Person ("Kerby");

console.log(person.sayMyName());