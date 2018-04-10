function swap(left, right, array) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}



export function bubbleSort(array) {
  let sorted = false;
  let len = array.length;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < len; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        sorted = false;
      }
      if (i === len) {
        len--;
      }
    }
  }

  return array;
}

export function bubbleSortLive(array, len) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let sorted = true;

      if (!len) {
        len = array.length;
      }

      for (let i = 0; i < len; i++) {
        if (array[i] > array[i + 1]) {
          swap(i, i + 1, array);
          sorted = false;
        }
      }

      window.document.getElementById('numbers').innerHTML = array;

      if (!sorted) {
        len--;
        resolve(bubbleSortLive(array, len));
      } else {
        resolve(array);
      }
    }, 0);
  })
}

