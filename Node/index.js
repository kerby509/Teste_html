const {Person} = require ("./person");

// require ("./modules/path");
const person = new Person ("Kerby");

// require("./modules/fs");
require("./modules/http");


console.log(person.sayMyName());