function reverString(name) {
  if (name == null) {
    return 0;
  }
  var letter = [];
  var rword = "";
  for (var i = 0; i < name.length; i++) {
    letter.push(name[i]);
  }
  // pop of stack in reverse order
  for (var i = 0; i < name.length; i++) {
    rword += letter.pop();
  }
  console.log(rword);
  return rword;
}

console.log(reverString("gaurav"));
