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
