// Selectors
const count = document.querySelector('.count');
const countText = document.querySelector('.count-text');
const write = document.querySelector('.previous');
const total = document.querySelector('.total');

// Variables
let countEl = 0;
let totalCount = 0;
let rotate = 0;
// Functions
function updateCount() {
  countText.style.rotate = `${rotate}deg`;
  setTimeout(() => {
    countText.innerText = `${countEl}`;
  }, 100);
}

function increment() {
  rotate += 360;
  countEl++;
  updateCount();
}

function decrement() {
  rotate -= 360;
  if (countEl > 0) {
    countEl--;
    updateCount();
  }
}

function countReset() {
  countEl = 0;
  countText.innerText = `${countEl}`;
}

function save() {
  write.innerText += ` ${countEl} • `;
  totalCount += countEl;
  total.innerText = totalCount;

  localStorage.setItem('entry', write.innerText.substr(16));
  localStorage.setItem('total', totalCount);
}

function erase() {
  write.innerText = 'Previous Entry : ';
  total.innerText = '0';
  totalCount = 0;
  localStorage.clear();
}

function callStorage() {
  const storage = localStorage.getItem('entry');
  const totalStorage = localStorage.getItem('total');

  if (storage !== null) {
    write.innerText += ` ${storage}`;
    total.innerText += ` ${totalStorage}`;
    totalCount = parseInt(totalStorage);
  }
}

// Event listeners
window.onload = callStorage;
