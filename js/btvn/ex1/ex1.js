// var arr = [ 'FF', 'FA', 'AA', 21, 12, 2**53-1, 2**53]
// function toBinary(a) {
//   return parseInt(a, 16).toString(2);
// }
// for (var i = 0; i < arr.length; i++) {
//   if (Number.isSafeInteger(parseInt(arr[i],16))) {
//     console.log(toBinary(arr[i]));
//   }
//   else {
//     console.log('so nay khong phai so an toan');
//   }

// }
// console.log(parseInt(2**53,16));

// tao mang
var array = [13, 22, 12, 2, 209, 1];
// tinh %
a = eval(array.join("+")) / array.length;
// xep lop;
a < 70 ? console.log(" D grade") :
  a < 80 ? console.log("C grade") :
    a < 90 ? console.log("B grade") : console.log("A grade")

