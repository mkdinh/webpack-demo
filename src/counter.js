
let counterDOM = window.document.getElementById('counter');
let intervalId = null;
let count = 0;
let increment = 2;

export function startCounter() {
  intervalId = setInterval(function () {
    count += increment;
    counterDOM.innerHTML = (count + ' (' + increment + ')');
  }, 1000);
}


export function stopCounter() {
  return clearInterval(intervalId);
  counterDOM.innerHTML = (count + ' (paused)');
}




