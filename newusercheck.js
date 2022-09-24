const isNew = localStorage.getItem("visit") == null;
if (isNew) {
 location = "/index.html"
} else {
  //It's not a new user
}
