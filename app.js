let count = document.querySelector('.count');
let write = document.querySelector('.previous');
let total = document.querySelector('.total');

let countEl = 0;
let totalCount = 0;

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
  write.innerText += ' ' + countEl + ' • ';
  totalCount += countEl;
  total.innerText = totalCount;
  let entryStore = write.innerText.substr(16);
  localStorage.setItem('entry', entryStore);
  localStorage.setItem('total', totalCount);
}
function erase() {
  write.innerText = 'Previous Entry : ';
  total.innerText = ' ';
  totalCount = 0;
  localStorage.clear();
}
function callStorage() {
  let storage = localStorage.getItem('entry');
  let totalStorage = localStorage.getItem('total');
  if (storage != null) {
    write.innerText += ' ' + storage;
    total.innerText += ' ' + totalStorage;
    totalCount = parseInt(totalStorage);
    
  } else {
    return;
  }
}
window.onload = callStorage;
