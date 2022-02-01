let count = document.querySelector(".count");
let write = document.querySelector(".previous");

let countEl = 0;

function increment() {
  countEl++;
  count.innerHTML = countEl;
}
function decrement() {
  if (countEl == "0") {
    count.innerHTML != countEl;
  } else {
    countEl--;
    count.innerHTML = countEl;
  }
}
function save() {
  write.innerHTML += countEl + " - ";
}
function erase() {
  write.innerHTML = "Previous Entry : ";
}
