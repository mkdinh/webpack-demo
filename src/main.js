// import dependencies
//--------------------------------------------------------
import registerSW from './worker.js';
import generateNumber from './generateNumbers.js';
import { bubbleSort, bubbleSortLive } from './bubbleSort.js';
import { quickSort, quickSortLive } from './quickSort.js';
import { startCounter, stopCounter } from './counter.js';

// import styles file
//--------------------------------------------------------
import '../public/assets/css/main.css';

// registering service workers
//--------------------------------------------------------
registerSW();


// main logic
//--------------------------------------------------------
let randNum;

// generate random number array
function displayRandNum() {
  let len = window.document.getElementById('len-input').value;
  randNum = generateNumber(len);
  let container = window.document.getElementById('numbers');
  container.innerHTML = randNum;
}

// handle sorting on click
function handleSort(liveSort) {
  if (Array.isArray(randNum)) {
    let container = window.document.getElementById('numbers');
    let timeContainer = window.document.getElementById('calc-time');
    let t = Date.now();

    // type of sorting
    if (liveSort) {
      let sorted = quickSortLive(randNum)
        .then(function (sorted) {
          container.innerHTML = sorted;
          let duration = (Date.now() - t) / 1000;
          duration = duration.toFixed(2);
          timeContainer.innerHTML = 'It took: ' + duration + 's to sort ' + randNum.length + ' elements with DOM manipulation';
        });
    } else {
      let sorted = quickSort(randNum);
      container.innerHTML = sorted;
      let duration = (Date.now() - t) / 1000;
      duration = duration.toFixed(2);
      timeContainer.innerHTML = 'It took: ' + duration + 's to sort ' + randNum.length + ' elements without DOM manipulation';
    }
  }
}

// add listener to button clicks
//--------------------------------------------------------
window.document.getElementById('generate-button').onclick = displayRandNum;

window.document.getElementById('sort-button').onclick = handleSort.bind(this, false);

window.document.getElementById('sort-live-button').onclick = handleSort.bind(this, true);

window.document.getElementById('start-counter-button').onclick = startCounter;

window.document.getElementById('stop-counter-button').onclick = stopCounter;

// Accept file changes in hot module
//--------------------------------------------------------
// if (module.hot) {
//   module.hot.accept();
// }

