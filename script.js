var container = document.getElementById("container");
var element = document.getElementById("element");
var element1 = document.getElementById("element1");

element.style.left = "380px";
element.style.top = "380px";
element.style.width = "20px";
element.style.height = "20px";

element1.style.left = "30px";
element1.style.top = "30px";
element1.style.width = "20px";
element1.style.height = "20px";

function moveRight() {
  var left = parseInt(element.style.left, 10);
  if (left < 380) {
    left += 10;
    element.style.left = left + "px";
  }
}

function moveLeft() {
  var left = parseInt(element.style.left, 10);
  if (left > 0) {
    left -= 10;
    element.style.left = left + "px";
  }
}

function moveTop() {
  var top = parseInt(element.style.top, 10);
  if (top > 0) {
    top -= 10;
    element.style.top = top + "px";
  }
}

function moveBottom() {
  var top = parseInt(element.style.top, 10);
  if (top < 380) {
    top += 10;
    element.style.top = top + "px";
  }
}

function randomClick() {
  var btns = ["btnTop", "btnLeft", "btnRight", "btnBottom"];
  var rand = Math.floor(Math.random() * 4);
  var btn = document.getElementById(btns[rand]);
  btn.click();
}

function collusion() {
  // element
  var top = parseInt(element.style.top, 10);
  var right = parseInt(element.style.left, 10) + parseInt(element.style.width, 10);
  var left = parseInt(element.style.left, 10);
  var bottom = parseInt(element.style.top, 10) + parseInt(element.style.height, 10);

  // element 1
  var top1 = parseInt(element1.style.top, 10);
  var right1 = parseInt(element1.style.left, 10) + 20;
  var left1 = parseInt(element1.style.left, 10);
  var bottom1 = parseInt(element1.style.top, 10) + 20;

  if (
    
    !(bottom1 < top ||
    right1 < left ||
    top1 > bottom ||
    left1 > right)
  ) {
    console.log("collided");
  }
}

setInterval(function () {
  //   moveTop();
  //   moveLeft();
  collusion();
}, 600);

window.addEventListener("keydown", function (e) {
  var key = e.key;
  switch (key) {
    case "ArrowUp":
      moveTop();
      break;
    case "ArrowDown":
      moveBottom();
      break;
    case "ArrowRight":
      moveRight();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    default:
      break;
  }
});
