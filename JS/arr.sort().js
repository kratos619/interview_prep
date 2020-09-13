let a = [6, 4, 15, 10];
let b = ["b", "a", "d", "c"];
var fruits = ["Banana", "Orange", "Apple", "Mango"];

var strings = ["aa", "aaaa", "aaa", "a"];

//ascending order
function numAscendingOrder(num1, num2) {
  return num1 - num2;
}
//descending order
function numDescendingOrder(num1, num2) {
  return num2 - num1;
}

//function sort by length
function sortByLength(str1, str2) {
  return str1.length - str2.length;
}

console.log(strings.sort(sortByLength));
console.log(b.sort());
console.log(b.reverse());
console.log(fruits.sort());
console.log(fruits.reverse());
console.log(a.sort(numDescendingOrder));
console.log(a.sort(numAscendingOrder));
