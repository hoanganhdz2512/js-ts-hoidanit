console.log("video 53");

const myBtnElement = document.getElementById("myBtn");

const myTextElement = document.getElementById("myText");
const backBtnElement = document.getElementById("backBtn");

myBtnElement.addEventListener("click", () => {
  console.log("click me");
  myTextElement.style.color = "red";
  myTextElement.style.backgroundColor = "black";
  myTextElement.classList.add("hoidanit", "eric");
});

backBtnElement.addEventListener("click", () => {
  myTextElement.style.color = "green";
  myTextElement.style.backgroundColor = "unset";
  myTextElement.classList.remove("hoidanit", "eric");
});
