const {Person} = require ("./person");

// require ("./modules/path");
const person = new Person ("Kerby");

require("./modules/fs");

console.log(person.sayMyName());