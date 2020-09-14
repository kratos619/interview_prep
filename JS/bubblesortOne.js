function bblsort(arr) {
  let pass = 1;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[i] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log(pass++, "pass complete");
  }
  return arr;
}

let arr = [77, 90, 33, 67];
//0   1
console.log(bblsort(arr));
