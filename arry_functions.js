
function reverseStrin(name) {
  if (name == null) {
    return 0;
  }
  var letter = [];
  var rword = '';
  for (var i = 0; i < name.length; i++) {
    letter.push(name[i]);
  }
  // pop of stack in reverse order
  for (var i = 0; i < name.length; i++) {
    rword += letter.pop();
  }
  console.log(rword);
}


function margeSort(arrOne, arrTwo){
  if(arrOne == null) {
    return 0;
  }
  if(arrTwo == null){
    return 0;
  }

  var temparray = [];
  //var tempTwo = [];

  for (var i = 0; i < arrOne.length ; i++) {
    temparray.push(arrOne[i]);
//    console.log(tempOne);
  }
  for (var i = 0; i < arrTwo.length ; i++) {
    temparray.push(arrTwo[i]);
  //  console.log(tempTwo);
  }
    console.log(temparray);
}
var arrone = [1,2,3,4];
var arrtwo = [5,6,7,8];

margeSort(arrone,arrtwo)

//console.log(...arrone,...arrtwo)
