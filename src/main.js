import registerSW from './worker.js';
import '../public/index.html';
import '../public/assets/css/main.css';
import generateNumber from './generateNumbers.js';
import bubbleSort from './bubbleSort.js';
registerSW();

function displayRandNum() {
  let randNum = generateNumber(1000);
  let container = window.document.getElementById('numbers');
  container.innerHTML = randNum;
}

window.document.getElementById('generate-button').onclick = displayRandNum;


