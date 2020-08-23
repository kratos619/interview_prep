
function findMostUsedWord(string) {
  if (string == null) {
    throw new Error("Enter pair of strings");
  }
  let maxUsedCount = 0;
  let maxUsedWord = "";

  let wordsArr = string.split(" ");
  let wordSet = {};
  for (const iterator of wordsArr) {
    if (wordSet[iterator]) {
      wordSet[iterator]++;
    } else {
      wordSet[iterator] = 1;
    }
  }
  for (const key in wordSet) {
    if (wordSet.hasOwnProperty(key)) {
      console.log(wordSet[key]);
      if (wordSet[key] > maxUsedCount) {
        maxUsedCount = wordSet[key];
        maxUsedWord = key;
      }
    }
  }
  return {
    maxUsedWord,
    maxUsedCount,
  };
}

console.log(findMostUsedWord(string));
