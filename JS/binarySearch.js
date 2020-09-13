function bsearch(arr, val) {
  //step one
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] == val) {
    return middle;
  }
  return 0;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8];
// return index
console.log(bsearch(a, 7));
