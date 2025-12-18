function addNum(a, b) {
    return a + b;
}
console.log(addNum(5, 10));
function arrayLee(arr) {
    return arr.length;
}
console.log(arrayLee([1, 2, 3, 4, 5]));

function evenNum(num) {
  return num % 2 === 0;
}
console.log(evenNum(4));
console.log(evenNum(7));

function localVar() {
  let message = "Hello, World!";
  return message;
}
console.log(localVar()); 

let globalMessage = "This is a global variable.";

function globalVar() {
  return globalMessage;
}
console.log(globalVar());
console.log(globalMessage);