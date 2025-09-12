console.log("video 44");

const sv1 = {
  name: "Nguyen Van A",
  score: 10,
};

const sv2 = {
  name: "Nguyen Van B",
  score: 8,
};

const sv3 = {
  name: "Nguyen Van C",
  score: 5,
};

const sinhvien = [sv1, sv2, sv3];

console.log("check sinhvien", sinhvien);

// sinhvien.forEach((item, index) => {
//   console.log("index =", index, "name =", item.name);
// });

const person = {
  name: "Nguyen Van A",
  age: 30,
  address: "Hanoi",
};
for (let key in person) {
  console.log(key, person[key]);
}

console.log("-----");
// for (let value of Object.values(person)) {
//   console.log(value);
// }

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
