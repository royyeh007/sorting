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
    return split(firstHalf, secondHalf);
  }
}
let newArr = [];
newArr = (split([4, 3, 2, 1]));
console.log(newArr);
