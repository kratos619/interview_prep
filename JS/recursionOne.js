function hello(){
    console.log("this is hello");
}
function hi(){
    console.log("hi hello");
}
function How(){
    console.log("how are you?");
}

function call(){
    hello();
    hi();
    How()
}

call()


function countDown(num){
    if (num === 0 || num == null ) {
        return 0;
    }
    console.log(num);
    num--;
   countDown(num)
}
countDown(4);

function sumRange(num){
    if(num === 1 ) return 0;
    return num + sumRange(num - 1);
}

console.log(sumRange(10));
// 4! = 4 × 3 × 2 × 1 = 24
// 7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
// 1! = 1
//n! = n × (n−1)!



function factorial(num){
    let factorial = 1;
    for (let index = 1; index <= num; index++) {
        console.log(index);
    }
    for (let index = num; index > 0; index--) {
        factorial *= index;
    }
    console.log(factorial);
    return factorial;
}


console.log(factorial(4));

function factorialRecursion(num){
  if (num == 0) {
    return 1;
    return num * factorialRecursion(num - 1);
  }
}

console.log("factorialRecursion",factorialRecursion(4));

function sum(num){
    if(num === 0){
        return 1;
    }
    return num + sum(num - 1);
}

console.log(sum(10));
function isOdd(num) {
    return num % 
}


// functon find oddNumber
console.log(23455676755 % 2);


function isOdd(num){
    return num % 2 ? false : true
}

console.log(isOdd(1000));

let arr = [333434,12333123,34433434353,123123123,3242342342,235252524,23455676755,453453345345324];

function findOdds(arr){
    let farr =[]
    for (let index = 0; index < arr.length; index++) {
        if (isOdd(arr[index]) == false ){
               farr.push(arr[index]);
        }
    }
    return farr;
}

console.log(findOdds(arr));