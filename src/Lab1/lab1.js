
let FullName = "Nguyễn Quang Hoàng Anh";

const birthYear = 2004;

const isStudent = false;

const today = new Date();
const currentYear = today.getFullYear();

const age = currentYear - birthYear;

console.log(`
Tên: ${FullName} 
Tuổi: ${age}
Sinh viên: ${isStudent}
`);

console.log("-----");
console.log("Tên: " + FullName);
console.log("Tuổi: " + age);
console.log("Sinh viên: " + isStudent);