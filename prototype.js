/*const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  myObject.greet(); // Greetings from Madrid
console.log(myObject.toString())  */
/*const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object {*/
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95
    
myDate.getYear = function () {
      console.log("something else!");
    };
    
myDate.getYear();
//setting a prototype
const greetings={
    welcome(){
        console.log("welcome to aspire");
    },
};
const greet=Object.create(greetings);
greet.welcome();
const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  
  function Person(name) {
    this.name = name;
  }
  
Object.assign(Person.prototype, personPrototype);
const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false

  // or
  // Person.prototype.greet = personPrototype.greet;
  