let a = [6, 4, 15, 10];
let b = ["b", "a", "d", "c"];
var fruits = ["Banana", "Orange", "Apple", "Mango"];

//ascending order
function numAscendingOrder(num1, num2) {
  return num1 - num2;
}
//descending order
function numDescendingOrder(num1, num2) {
  return num2 - num1;
}
console.log(b.sort());
console.log(b.reverse());
console.log(fruits.sort());
console.log(fruits.reverse());
console.log(a.sort(numDescendingOrder));
console.log(a.sort(numAscendingOrder));
