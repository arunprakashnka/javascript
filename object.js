/*const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
  person.name;
  person.name[0];
  person.age;
  person.bio();
  person.introduceSelf();*/
  /*const person = {
    name: {
      first: "Bob",
      last: "Smith",
      age: 55
    },
    // …
  };
  console.log(person.name.first);
 console.log(person.name.last);
 person.name.first[0]="arun";
person.name.last[1]="prakash";
console.log(person.name.first);
console.log(person.name.last);
//bracket notation
console.log(person ["name"]["age"]);
console.log(person["name"]["first"]);*/
/*const person = {
    name: ["Bob", "Smith"],
    age: 32,
  };
  
  function logProperty(propertyName) {
    console.log(person[propertyName]);
  }
  
  logProperty("name");
  // ["Bob", "Smith"]
  logProperty("age");
  // 32
  //this keyword
  /*const person1 = {
    name: "Chris",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
  
  const person2 = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };*/
  /*
  function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }
  const salva = createPerson("Salva");
  salva.name;
  salva.introduceSelf();
  
  const frankie = createPerson("Frankie");
  frankie.name;
  frankie.introduceSelf();*/
  /*
  function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }
  const salva = new Person("Salva");
salva.name;
salva.introduceSelf();

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();*/

/*const myDate = new Date();
let object = myDate;
console.log(myDate);*/

/*do {
  object = Object.getPrototypeOf(object);//date
  console.log(object);
} while (object);*/
/*while(object){
  object = Object.getPrototypeOf(object);//date
  console.log(object);
}*/

// Date.prototype
// Object { }
// null
// const myDate = new Date(1995, 11, 17);//date()

// console.log(myDate.getDate()); // 95

// myDate.getYear = function () {
//   console.log("something else!");
// };

// myDate.getYear(); // 'something else!'

 // 'something else!'

// Date.prototype
// Object { }
// null
  

    

  

    
