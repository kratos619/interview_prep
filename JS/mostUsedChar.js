function findMostUsedChar(string) {
  if (string == null) {
    throw new Error("Enter strings");
  }
  const charSet = {};
  let max = 0;
  let maxUsedChar = "";
  for (let iterator of string) {
    if (charSet[iterator]) {
      charSet[iterator]++;
    } else {
      charSet[iterator] = 1;
    }
  }
  for (const key in charSet) {
    if (charSet.hasOwnProperty(key)) {
      console.log(key);
      if (charSet[key] > max) {
        console.log(key);
        max = charSet[key];
        maxUsedChar = key;
      }
    }
  }
  console.log(max);
  console.log(maxUsedChar);
  console.log(charSet);
  return {
    maxUsedChar,
    max,
  };
}
