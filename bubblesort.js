
function bubbleSort(array) {
  let count = 0;
  for(let j = array.length; j >= 0; j--){
    for(let i = 0 ; i < array.length - 1; i++){
      if(array[i] > array [i + 1]){
        let holder = array[i]
        array[i] = array[i + 1]
        array[i + 1] = holder;
        count++;
      }
    }
  }
  return array
}

function swap(array, currentVal){
  
}