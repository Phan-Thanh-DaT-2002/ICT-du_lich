function canNest(a ,b){
  if(Math.max(...a) < Math.max(...b) && Math.min(...a) > Math.min(...b)) return true; 
    else return false;
}
console.log(canNest([1, 2, 3, 4], [0, 10])) //➞ true

console.log(canNest([3, 1], [6, 0]))// ➞ true

console.log(canNest([1, 2, 3], [2, 3]))// ➞ false