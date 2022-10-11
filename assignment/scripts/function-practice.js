console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Mavis'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(addNumbers(3,-6));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
  return firstNumber * secondNumber * thirdNumber;
}
console.log(multiplyThree(5, 6, -10));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } 
    return false;
}
// Call the function to test each outcome (true & false) 
console.log(isPositive(4));
console.log(isPositive(-1));
console.log(isPositive(0));

// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length-1];
}

let testArray = [1, 2, 3, 4, 5, 6]
console.log('the last item in testArray is:', getLast(testArray));
let emptyArray = []
console.log('an empty array returns:', getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (x of array){
    if (x === value){
      return true
    } 
    return false
  }
}
console.log('testArray contains the value 1:', find(1,testArray));
console.log('testArray contains the value 0:', find(0,testArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0]==letter){
    return true
  }
  return false
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  for (x of array){
    sum += x;
  }
  // TODO: loop to add items
  return sum;
}

console.log('the sum of everything in testArray is:', sumAll(testArray));
let newTestArray = [-1, -2, 10, -5, -1];
console.log('the sum of everything in newTestArray is:', sumAll(newTestArray));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function purgeNeg ( array ){
  let allPositives = []
  for (x of array){
    if ( x>0 ){
      allPositives.push(x);
    }
  }
  return allPositives;
}
console.log('All the positives in testArray are:', purgeNeg(testArray));
console.log('All the positives in newTestArray are:', purgeNeg(newTestArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
// Find the smallest and biggest numbers in an array
function minMax (array) {
  let min = array[0];
  let max = array[0];
  for (x of array){
    if ( x < min ){
      min = x;
    }
  }
  for (x of array){
    if (x > max ){
      max = x;
    }
  }
  return [min, max]
}

//test with our test arrays
console.log('the smallest and largest numbers in testArray are', minMax(testArray));
console.log('the smallest and largest numbers in newTestArray are', minMax(newTestArray));

