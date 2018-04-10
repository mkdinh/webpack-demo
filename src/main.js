import registerSW from './worker.js';
import '../public/index.html';
import '../public/assets/css/main.css';
import generateNumber from './generateNumbers.js';
import { bubbleSort, bubbleSortLive } from './bubbleSort.js';
registerSW();

let randNum;

function displayRandNum() {
  randNum = generateNumber(1500);
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
          timeContainer.innerHTML = 'It took: ' + duration + 's to sort ' + randNum.length + ' elements';
        });
    } else {
      let sorted = bubbleSort(randNum);
      container.innerHTML = sorted;
      let duration = (Date.now() - t) / 1000;
      duration = duration.toFixed(2);
      timeContainer.innerHTML = 'It took: ' + duration + 's to sort ' + randNum.length + ' elements';
    }
  }
}

window.document.getElementById('generate-button').onclick = displayRandNum;

window.document.getElementById('sort-button').onclick = handleSort.bind(this, false);

window.document.getElementById('sort-live-button').onclick = handleSort.bind(this, true);

