console.log("video 38");

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log("0 =", names[0]);
console.log("2 =", names[1]);

names[2] = "Chuck";

console.log("befor", names);

// Add to the end
names.push(true, 123);
// Add to the beginning
names.unshift(null);
// Remove from the end
names.pop();
// Remove from the beginning
names.shift();
console.log("after", names);
