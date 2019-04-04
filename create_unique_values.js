let dataArray = [12,212,122,2,2,22,11,1,1,1,14,44,4,4,9,9,10,10];
let dataArrayStrings = ['a', 'b', 'a', 'b', 'c', 'gaurav', 'gaurav', 'saurav'];
let uniqueData= []
function createUniqueValue(data) {
     uniqueData.push(...new Set(data))
     console.log(uniqueData);
     
}

createUniqueValue(dataArrayStrings)
/*
Output
[ 12, 212, 122, 2, 22, 11, 1, 14, 44, 4, 9, 10 ]
[ 'a', 'b', 'c', 'gaurav', 'saurav' ]
/*

