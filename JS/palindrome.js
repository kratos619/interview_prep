function palindrome(word) {
  if (word == null) {
    return 0;
  }
  let arr = [];
  let finalWord = "";
  for (let index = 0; index < word.length; index++) {
    arr.push(word[index]);
  }
  for (let index = 0; index < word.length; index++) {
    finalWord += arr.pop();
  }
  return word === finalWord;
}

console.log(palindrome("abba"));
