console.log("video 52");

const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");

const myTextElement = document.getElementById("myText");

myBtnElement.addEventListener("click", () => {
  console.log("you click a button");
  //   myTextElement.innerText = "Just the content has changed";
  myTextElement.innerHTML =
    "<strong>Chào bạn</strong>, <em>chúc bạn một ngày tốt lành</em>";
});

backBtnElement.addEventListener("click", () => {
  myTextElement.innerText = "video 52";
});
