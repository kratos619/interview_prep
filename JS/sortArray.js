let arr = [1, 3, 5, 2, 7, 6, 9];
function sortArray(arr) {
  var done = false;
  while (!done) {
    done = true;
    for (let index = 1; index < arr.length; index += 1) {
      if (arr[index - 1] > arr[index]) {
        done = false;
        var temp = arr[index - 1];
        arr[index - 1] = arr[index];
        arr[index] = temp;
      }
    }
  }
  return arr;
}
console.log(sortArray(arr));
