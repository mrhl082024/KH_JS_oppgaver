const myArray = ["apple", "banana", "cherry", "date", "eggplant"];

//1.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "for-loop"

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < myNumbers.length; index++) {
  //console.log(myNumbers[index]);
}

//2.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "while loop"

let i = 0;
while (i <= 10) {
  //console.log(i);
  i++;
}

//3.--------------------------------------------------------------------------------------
// Print each item in myArray using a "for loop".

for (let i = 0; i < myArray.length; i++) {
  //console.log(myArray[i]);
}

//4.--------------------------------------------------------------------------------------
// Using the myArray.push() method, add "mango" to the end of myArray.
//print myArray using a for... of loop.

myArray.push("mango");
let text = "";
for (let x of myArray) {
  text += x;
}
//console.log(text);

//5.--------------------------------------------------------------------------------------
//Using the myArray.splice() method, remove "cherry" from myArray
// print the result using myArray.foreach()

myArray.splice(2, 1);
//myArray.forEach((myElement) => console.log(myElement));

//6.--------------------------------------------------------------------------------------
// Using the .shift() and .pop() method, remove the first and last item from myArray.
//print the result

myArray.shift();
//console.log(myArray);
myArray.pop();
//console.log(myArray);

// 7.--------------------------------------------------------------------------------------
// create a variable and assign it the content of myArray as a string using .join().
// print your variable.
//BONUS - See if you can make the items be seperated by a spacemy

var string = myArray.join(" ");
//console.log(string);

//8--------------------------------------------------------------------------------------
//Create a function that takes a number as an argument and returns that number squared.
// call your function by using a valid argument

function squaredNumber(number) {
  return number ** 2;
}
//console.log(squaredNumber(4));

//9.--------------------------------------------------------------------------------------
//Using the "%" (modulo) operator complete the function,
// it should take "number" as an argument and return "even" if its even and "odd" if its odd.

function oddOrEven(number) {
  if (number % 2 == 0) {
    console.log("number is even");
  } else {
    console.log("number is odd");
  }
}
//oddOrEven(prompt());

//call your function by using one of the options below.
// oddOrEven(prompt());
// oddOrEven()

//10.--------------------------------------------------------------------------------------
//write a function that prints the fibbonacci sequence for the number passed into it
// HINT! fibbonacchi =
//  c = a + b;
//  a = b;
//  b = c;
function Fibbonacci(n) {
  let a = 0;
  let b = 1;
  let c = 0;
  let tempList = [];

  for (let i = 0; i < n; i++) {
    tempList.push(a);
    c = a + b;
    a = b;
    b = c;
  }
  return tempList;
}

console.log(Fibbonacci(30));

//11.--------------------------------------------------------------------------------------
//BONUS!Implement fizzbuzz, if a number is divisible by 3: Fizz, if a number is divisible by 5: Buzz, if the number is divisible by both 3 and 5, FizzBuzz
// https://www.geeksforgeeks.org/fizz-buzz-implementation/
function fizzbuzz(number) {}

fizzbuzz();

//12.--------------------------------------------------------------------------------------
//SUPERBONUS - we have not talked about recursion yet, but here is a fun one to try.
//recursion is when a function calls itself.
//Complete the function so that it returns the factorial of a number. Factorial (n!) is the product of all whole numbers between 1 and n
//example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  if (n === 0) return 1;
  return; /// din kode her
}
console.log(factorial(5));
