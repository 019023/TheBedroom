let usersguess = window.prompt("whats the password");
console.log(usersguess);
let password = echo $SITEPASSWORD;
if (password === usersguess) {
   window.location.replace("/main.html");
   document.cookie = "passright";
   localStorage.setItem("visit", ".");
}
else {
let Usersguess = window.prompt("last try before i smack you");
}
