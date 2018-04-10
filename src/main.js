import registerSW from './worker.js';
import '../public/assets/css/main.css';
import generateNumber from './generateNumbers.js';
import { bubbleSort, bubbleSortLive } from './bubbleSort.js';
registerSW();

let randNum;

function displayRandNum() {
  let len = window.document.getElementById('len-input').value;
  randNum = generateNumber(len);
  let container = window.document.getElementById('numbers');
  container.innerHTML = randNum;
}

function handleSort(liveSort) {
  if (Array.isArray(randNum)) {
    let container = window.document.getElementById('numbers');
    let timeContainer = window.document.getElementById('calc-time');
    let t = Date.now();
    if (liveSort) {
      let sorted = bubbleSortLive(randNum)
        .then(function (sorted) {
          container.innerHTML = sorted;
          let duration = (Date.now() - t) / 1000;
          duration = duration.toFixed(2);
          timeContainer.innerHTML = 'It took: ' + duration + 's to sort ' + randNum.length + ' elements with DOM manipulation';
        });
    } else {
      let sorted = bubbleSort(randNum);
      container.innerHTML = sorted;
      let duration = (Date.now() - t) / 1000;
      duration = duration.toFixed(2);
      timeContainer.innerHTML = 'It took: ' + duration + 's to sort ' + randNum.length + ' elements without DOM manipulation';
    }
  }
}

window.document.getElementById('generate-button').onclick = displayRandNum;

window.document.getElementById('sort-button').onclick = handleSort.bind(this, false);

window.document.getElementById('sort-live-button').onclick = handleSort.bind(this, true);

