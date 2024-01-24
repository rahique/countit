let count = document.querySelector(".count");
let write = document.querySelector(".previous");

let countEl = 0;

function increment() {
  countEl++;
  count.innerText = countEl;
}
function decrement() {
  if (countEl === 0) {
    count.innerText == countEl;
  } else {
    countEl--;
    count.innerText = countEl;
  }
}
function save() {
  write.innerText += " " + countEl + " - ";
  let entryStore = write.innerText.substr(16);
  localStorage.setItem("entry", entryStore);
}
function erase() {
  write.innerText = "Previous Entry : ";
  localStorage.clear();
}
function callStorage() {
  let storage = localStorage.getItem("entry");
  if (storage != null) {
    write.innerText += " " + storage;
  } else {
    return;
  }
}
window.onload = callStorage;
