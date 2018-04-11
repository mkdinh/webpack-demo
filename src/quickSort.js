function swap(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

export function partition(array, low, high) {
  // declare pivot
  let pivot = array[high];
  // declare starting swap index
  let wall = low;
  for (let i = low; i < high; i++) {
    // if array is less than the pivot
    // move to the left of wall 
    // (swap wall index and increase index by 1)
    if (array[i] < pivot) {
      swap(array, i, wall);
      wall++;
    }
  }
  // swap pivot with wall
  // at this point everything to the left should be less than 
  // pivot
  swap(array, wall, high);
  // return new pivot index
  return wall;
}

export function quickSort(array, low, high) {

  if (!low) low = 0;
  if (!high) high = array.length - 1;
  if (array.length > 1) {
    let index = partition(array, low, high);

    if (low < index - 1) {
      quickSort(array, low, index - 1);
    }

    if (index + 1 < high) {
      quickSort(array, index + 1, high)
    }
  }

  return array;
}

export function quickSortLive(array, low, high, promises) {

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      window.document.getElementById('numbers').innerHTML = array;
      if (!low) low = 0;
      if (!high) high = array.length - 1;
      if (!promises) promises = [];
      let index = partition(array, low, high, promises);
      let p;
      if (low < index - 1) {
        p = quickSortLive(array, low, index - 1);
        promises.push(p);
        resolve(p);
      }

      if (index + 1 < high) {
        p = quickSortLive(array, index + 1, high, promises);
        promises.push(p);
        resolve(p);
      }

      console.log(promises)
      Promise.all(promises)
        .then(function () {
          console.log('done')
          resolve(array)
        })
    }, 0)
  })
}