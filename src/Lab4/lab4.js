console.log("lab 4");

const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", () => {
  const username = usernameElement.value;
  const password = passwordElement.value;

  if (username === "hoidanit@gmail.com" && password === "123456") {
    alert("Đăng nhập thành công");
    window.location.href = "success.html";
  } else {
    alert("Username/password không chính xác");
    usernameElement.style.borderColor = "red";
    passwordElement.style.borderColor = "red";
  }
  console.log(usernameElement.value, passwordElement.value);
});
