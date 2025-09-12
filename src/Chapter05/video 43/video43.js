console.log("video 43");

const person = {
  name1: "Eric",
  age: 30,
};

console.log("person before", person);

//get data
console.log("age", person.age);
console.log("name", person["name1"]);

//set data
person.address = "hanoi";
person["language"] = "vietnamese";
console.log("person after", person);

//delete
delete person.name1;
delete person.address;
console.log("person after", person);
