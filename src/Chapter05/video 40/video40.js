console.log("video 40");

const score = [10, 8, 3, 4, 5];

//read data
// score.forEach((element, index) => {
//   console.log("index =", index, "value =", element);
// });

//modify data
const scorex2 = score.map((element, index) => {
  return element * 2;
});
console.log("score", score);
console.log("scorex2", scorex2);
