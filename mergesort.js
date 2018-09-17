function split(array) {
  if (array.length === 1) {
    return array;
  }
  else {
    let firstHalf = array.slice(0, Math.floor(array.length / 2));
    let secondHalf = array.slice(Math.floor(array.length / 2))
    // split(firstHalf);
    // split(secondHalf);
    // return (split(firstHalf), split(secondHalf));
    return merge(split(firstHalf), split(secondHalf));
  }
}
split([4, 3, 2, 1]);


function merge(firstHalf, secondHalf){
    return [firstHalf, secondHalf];
}

function mergeSort(){

}