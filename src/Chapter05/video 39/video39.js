console.log("video 39");

const myClasses = ["btn", "btn-primary", "btn-lg"];

console.log(myClasses, myClasses.length);

for (let i = 0; i < myClasses.length; i++) {
  console.log("i =", i, "and value", myClasses[i]);
}

console.log("-----");

for (let i = 1; i <= myClasses.length; i++) {
  console.log("i =", i, "and value", myClasses[i - 1]);
}

//for-each
console.log("-----");
myClasses.forEach(function (value, index) {
  console.log("value =", value, "and index =", index);
});

console.log("-----");
myClasses.forEach((value, index) => {
  console.log("value =", value, "and index =", index);
});
