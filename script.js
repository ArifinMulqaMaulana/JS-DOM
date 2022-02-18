// Get Element
const button = document.querySelector("button"),
  username = document.querySelector("input[name=username]"),
  password = document.querySelector("input[name=password]");


button.addEventListener("click", function (e) {
  // Check isempty
  if (username.value == "" && password.value == "") {
    alert("please enter correct username or password");
  }
  // Register Page
  if (button.className == "register") {
    let data = [username.value, password.value];
    localStorage.setItem("user", JSON.stringify(data));

    // Login page
  } else if (button.className == "login") {
    let data = JSON.parse(localStorage.getItem("user"));
    if (username.value == data[0] && password.value == data[1]) {
      alert("You're loged in");
      window.location.href = "home.html";
    } else {
      alert("username or password incorect");
    }
  }
});