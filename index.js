let usersguess = window.prompt("whats the password");
console.log(usersguess);
let password = "this is a password";
if (password === usersguess) {
   window.location.replace("https://eternal587.github.io/TheBedroom/main.html");
   document.cookie = "passright";
   localStorage.setItem("visit", ".");
}
else {
let Usersguess = window.prompt("last try before i smack you");
}
