
let ob = {
    name : "gaurav",
    lname : "pal",
    fullName : function(){
        var self = this;
        console.log(self.lname);
         (function () {
           console.log("inner func: " + this);
           console.log("inner func:  self " + self);
         })();
    }
};

ob.fullName();


(function () {
  var a = (b = 3);
})();

console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));


function charMap(string) {
  let cSet = {};
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (cSet[element]) {
      cSet[element]++;
    } else {
      cSet[element] = 1;
    }
  }
  return cSet;
}

console.log(charMap("gaurav"));

function mostUsedChar(string) {
  let charSet = charMap(string);
  console.log(charMap);
}
mostUsedChar("prajakkta");

function isPalindrome(w) { 
  let a=[];let f="";for(let i=0;i<w.length;i++) {a.push(w[i]);}for(let i = 0; i < w.length; i++){f += a.pop();}
  console.log(w.split("").reverse().join());
  return w === f;

}

function sum(x){
    console.log(x);
    return function (x){
        console.log(x);
        return function (x) {
          return function (x) {
            console.log(x);
          };
        };
    };
}

console.log(sum(1)(2)(3)(4));


console.log(isPalindrome("nitin"));

function intRev(integers) {
  if (integers == null) {
    return 0;
  }
  let numString = String(integers);
  let arr = [];
  let revInt = "";

  for (let index = 0; index < numString.length; index++) {
    const element = numString[index];
    arr.push(element);
  }
  for (let index = 0; index < numString.length; index++) {
    revInt += arr.pop();
    //  arr.push(element);
  }

  return Number(revInt);
}

console.log(intRev(123456));
function strRev(string) {
  if (string == null) {
    return 0;
  }

  let arr = [];
  let revrseStr = "";
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    arr.push(element);
  }

  for (let index = 0; index < string.length; index++) {
    revrseStr += arr.pop();
  }

  console.log(revrseStr);
  return revrseStr;
}

console.log(strRev("gaurav"));
