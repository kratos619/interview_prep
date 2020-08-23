function reverInteger(integer) {
  if (integer == null) {
    return 0;
  }
  let myInt;
  myInt = String(integer);
  if (typeof integer === "object") {
    myInt = myInt.split(",");
  }
  let arr = [];
  let revInt = "";

  for (let index = 0; index < myInt.length; index++) {
    console.log(myInt[index]);
    arr.push(myInt[index]);
  }
  console.log(arr);
  for (let index = 0; index < myInt.length; index++) {
    revInt += arr.pop();
  }
  return parseInt(revInt);
}

let a = [1, 2, 3, 4, 5];
console.log(reverInteger(1234566));
console.log(reverInteger(a));
