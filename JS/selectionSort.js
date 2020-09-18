function selectionSort(arr) {
  for (let index = 0; index < arr.length; index++) {
    var lowest = index;
    for (let j = index + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      console.log(`i  => ${index} j  => ${j} lowest => ${lowest} `);
      console.log(
        `arr[index]  => ${arr[index]} arr[j]  => ${arr[j]} lowest => ${arr[lowest]} `
      );
    }
    var temp = arr[index];
    arr[index] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

let a = [23, 12, 44, 5, 66, 4, 10];
//0   1  2 3 4  5  6 - index
//
console.log(selectionSort(a));
