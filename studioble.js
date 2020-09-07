var i = 0;
var txt = 'Welcome to StudioBLE!';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}