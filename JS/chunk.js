function chunk(arr,size){
    const chunked = [];
    for (const element of arr) {
        const last = chunked[chunked.length -1]    
        if(!last || last.length === size ){
            chunked.push([element]);
        }else{
            last.push(element)
        }
    }

    return chunked;
}

let a = [1,2,3, 4,5,6,7,8]
chunk(a,2);