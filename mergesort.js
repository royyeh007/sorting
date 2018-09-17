function split(array) {
  if (array.length === 1) {
    return array;
  }
  else {
    let firstHalf = array.slice(0, Math.floor(array.length / 2));
    let secondHalf = array.slice(Math.floor(array.length / 2))
    
   return [firstHalf, secondHalf]
  }
}
split([4, 3, 2, 1]);


function merge(firstHalf, secondHalf){
  let result = [];
  let firstIndx = 0;
  let secondIndx = 0;
  while(firstIndx < firstHalf.length || secondIndx < secondHalf.length){
    if(firstHalf[firstIndx] <= secondHalf[secondIndx] || secondHalf.length === secondIndx){
     result.push(firstHalf[firstIndx])
     firstIndx ++;
     }else if (firstHalf[firstIndx] >= secondHalf[secondIndx] || firstHalf.length === firstIndx){
      result.push(secondHalf[secondIndx])
      secondIndx ++;
     }
    }
  return result;
}
merge([3, 4], [1, 2])

function mergeSort(array){
  let newArr = []
  if(array.length === 1){
    newArr.push(array);
  }else{
    mergeSort(split(array))
  }



  return merge(a, b)
}