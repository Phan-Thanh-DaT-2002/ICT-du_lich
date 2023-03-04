//ex1
function repeatString(string, num) {
  return Array.from({ length: num }, () => string).join("");
}
console.log(repeatString("hey", 5));

//ex2
function reverseString(strings) {
  return Array.from(strings, (x, i) => x = strings[(strings.length - 1) - i]).join("");
}
console.log(reverseString("hello there"));


//ex3
function removeFromArray(array, deleteItem) {
  return Array.from(array, (x) => {
    if (x === deleteItem) array.splice(x, 0);
    else return x
  });
}

console.log("ex3", removeFromArray([1, 2, 3, 4, 2, 2], 2))

//ex4
function leapYears(year) {
  if (year % 4 === 0 && year % 400 === 0) return true;
  else return false;
}

console.log("ex4", leapYears(2000)); // is a leap year: returns true
console.log("ex4", leapYears(1985)); // is not a leap year: returns false

//ex5
var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

function checkUsersValid(goodUsers, test) {
  return goodUsers.some((goodUsers) => {
    return goodUsers.id === test
  })
}
// `checkUsersValid` is the function you'll define
var testAllValid = (test) => {
  return console.log("ex5", test.every(function (test) {
    return checkUsersValid(goodUsers, test.id)
  }))
}

testAllValid([{ id: 2 }, { id: 1 }])
// => true

testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }])
// => false


// ex6
function toBinary(a) {
  return parseInt(a, 10).toString(2);
}
console.log("ex6", toBinary(47))