console.log("video 33");

let globalVar = "Tôi là biến toàn cục";
function show() {
  console.log(globalVar); // Truy cập được
}
show();
console.log(globalVar); // Truy cập được

function sayHi() {
  let name = "hoidanit";
  console.log("Hi " + name1);
  if (true) {
    let x = 10;
    const y = 20;
    console.log(x, y);
  }
  console.log(x);
}
sayHi();
console.log(name1); // Lỗi: name is not defined
