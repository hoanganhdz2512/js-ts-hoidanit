console.log("video 33");

let globalVar = "Tôi là biến toàn cục";
function show() {
  console.log(globalVar); // Truy cập được
}
show();
console.log(globalVar); // Truy cập được

function sayHi() {
  let name = "hoidanit";
  console.log("Hi " + name);
}
sayHi();
console.log(name);
