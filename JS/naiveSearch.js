function naiveSearch(lognString, pattern) {
  var counter = 0;
  for (let i = 0; i < lognString.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      console.log(pattern[j], lognString[i + j]);

      if (pattern[j] !== lognString[i + j]) {
        console.log("break");
        break;
      }
      if (j === pattern.length - 1) {
        console.log("found one");
        counter++;
      }
    }
  }
  return counter;
}

console.log(naiveSearch("loollaaa lolita", "laaa"));
