export default function generateNumber(num) {
  let array = [];

  for (let i = 0; i <= num; i++) {
    let assigned = false;
    while (!assigned) {
      let randIndex = Math.floor(Math.random() * num);
      if (!array[randIndex]) {
        array[randIndex] = i;
        assigned = true;
      }
    }
  }

  return array;
}