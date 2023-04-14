//create a new object constructor called Person
//name, age, occupation, sayName

function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
  this.sayName = function () {
    console.log(name, age, occupation);
  };
}

const person1 = new Person("Christian", 38, "Butcher");
const person2 = new Person("Rosmel", 35, "Teacher");

console.log([person1.name], [person1.age], [person1.occupation]);
