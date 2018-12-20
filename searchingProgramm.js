function lenearSearch(array,value){
  if(array == null){
    return 0;
  }
  if(value == null){
    return 0;
  }
  for(var i = 0; i < array.length;i++){
    if(array[i] == value){
      return "At Position " + i;
      break;
    }else{
      return "no Seach value " + value;
    }
  }

  return true;
}


//lenearSearch([12,43,112,444,11,34,44],1);

// retunring index position of element
function binarySearch(arr,elem){
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor( (start + end ) / 2);

  while(arr[middle] !== elem && start <= end){
    if(elem < arr[middle]){
      end = middle -1;

    }else{
      start = middle + 1;
    }

    middle = Math.floor((start+end) /2);
  }

  if(arr[middle] == elem){
    return middle;
  }
  return -1
}

binarySearch([1,2,3,4,5,6,7,8,9],4);



