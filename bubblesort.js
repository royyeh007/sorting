
function bubbleSort(array) {
  for(let j = array.length; j >= 0; j--){
    for(let i = 0 ; i < array.length - 1; i++){
      if(array[i] > array [i + 1]){
        array = swap(array, i);
      }
    }
  }
  return array
}

function swap(array, currentVal){
  let holder = array[currentVal];
  array[currentVal] = array[currentVal + 1];
  array[currentVal + 1] = holder;
  return array;
}
