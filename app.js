// Selectors
const count = document.querySelector('.count');
const write = document.querySelector('.previous');
const total = document.querySelector('.total');

// Variables
let countEl = 0;
let totalCount = 0;

// Functions
function updateCount() {
  count.innerText = countEl;
}

function increment() {
  countEl++;
  updateCount();
}

function decrement() {
  if (countEl > 0) {
    countEl--;
    updateCount();
  }
}

function save() {
  write.innerText += ` ${countEl} • `;
  totalCount += countEl;
  total.innerText = totalCount;
  countEl = 0;
  count.innerText = `${countEl}`

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
