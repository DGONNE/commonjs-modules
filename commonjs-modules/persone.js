// persone.js
const createFullName = require("./names");
const createHobbies = require("./hobbies");

function createPerson() {
  const fullName = createFullName("John", "Doe");
  const hobbies = createHobbies("Football", "Reading", "Coding");

  return {
    fullName: fullName,
    hobbies: hobbies,
  };
}

console.log(createPerson());
