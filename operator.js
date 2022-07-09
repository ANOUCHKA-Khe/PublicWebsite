function ab(bb){
  switch (bb) {
    case '=':{
      var Backlen=history.length;
      history.go(-Backlen);
      window.location.href='Welcometest.html';
      browser.history.deleteAll()
    }

      break;
    default:

  }
}
document.addEventListener("keypress", function(event) {
  if (event.key === "e") {
    event.preventDefault();
    document.getElementById("out").click();
  }
});
document.addEventListener("keypress", function(event) {
  if (event.key === "h") {
    event.preventDefault();
    document.getElementById("Home").click();
  }
});
document.addEventListener("keypress", function(event) {
  if (event.key === "b") {
    event.preventDefault();
    document.getElementById("b").click();
  }
});
document.addEventListener("keypress", function(event) {
  if (event.key === "f") {
    event.preventDefault();
    document.getElementById("f").click();
  }
});
