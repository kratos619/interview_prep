let n = 10;

function fizzbuzz(n) {
  if (n == null) {
    return 0;
  }
  let finalAns = [];
  for (let index = 1; index < n; index++) {
    if (index % 5 === 0 && index % 5 === 0) {
      finalAns.push("fizzbuzz");
    } else if (index % 5 === 0) {
      finalAns.push("fizz");
    } else if (index % 3 === 0) {
      finalAns.push("buzz");
    } else {
      finalAns.push(index);
    }
  }
  return finalAns;
}
console.log(fizzbuzz(11));
