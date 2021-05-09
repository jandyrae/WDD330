// create array
const myArray = []; // or const myArray = new Array(); can use typeof[] to see is type object

const avengers = ['Captain America', 'Iron Man', 'Hulk', 'Hawkeye', 'Black Widow'];
 avengers.length; // 5 can access last item with list length - 1
 avengers.pop(); // removes the last in array and returns
 avengers.shift(); // same thing but from the front of the array
 avengers.push('Thor'); // will add to the end of the array and returns length 4
 avengers.unshift('Captain America'); // appends to beginning and returns list length

 avengers.concat(['Black Widow', 'Ant Man']); // merge an array with another (or even more)
//  An alternative is to use the new spread operator that was added to ES6. 
// The spread operator is three dots, ... that are placed in front of an array, with 
// the effect of spreading out the elements of that array. This can be used to spread 
// the elements of two arrays and put them together in a new array, like so:

// avengers = [ ...avengers, ...['Hulk','Hawkeye', 'Black Widow'] ];
avengers.join(); // turns array into string that is comma delimited

avengers.join(' & '); // << 'Captain America & Iron Man & Thor & Hulk & Hawkeye & Black Widow'
avengers.slice(2,4); // creates a subarray that is the 3rd and 4th item -- non destructive
avengers.splice(3, 1, 'Scarlet Witch'); // removes and inserts into its place -- is destructive
avengers.splice(4,0,'Quicksilver'); // insert without removing (0) would return an empty array as nothing was removed 
delete  avengers[3]; // removes and leaves an undefined (array length not changed)
avengers.indexOf('Black Widow'); // returns the position 
// multi-dimensional arrays - arrays within arrays 
const summer = ['Jun', 'Jul', 'Aug'];
const winter = ['Dec', 'Jan', 'Feb'];
const nested = [ summer, winter ]; // [ [ 'Jun', 'Jul', 'Aug' ], [ 'Dec', 'Jan', 'Feb' ] ] nests arrays within arrays
const flat = [...summer, ...winter]; // [ 'Jun', 'Jul', 'Aug', 'Dec', 'Jan', 'Feb' ] removes the nested arrays by leveling
// sets - no repeating data
const list = new Set(); // empty set created use .add(), .has(), .delete(), .clear() and .size()
// maps - key value pairs
const romanNumerals = new Map(); // how an empty map is created use .set( , ) to add key-value pair

//condition ? (//code to run if condition is true) : (//code to run if condition is false)  - ternary operators
const n = 5;
n%2 === 0 ? console.log('n is an even number') : console.log('n is an odd number'); // example of one used

// if - else vs. switch statements
let number = 0;
if (number === 4) {
  console.log('You rolled a four');
  } else if (number === 5) {
  console.log('You rolled a five');
  } else if(number === 6){
  console.log('You rolled a six');
  } else {
  console.log('You rolled a number less than four');
  }
  //  or
  switch (number) {
    case 4:
    console.log('You rolled a four');
    break;
    case 5:
    console.log('You rolled a five');
    break;
    case 6:
    console.log('You rolled a six');
    break;
    default:
    console.log('You rolled a number less than four');
    break;
}
//  nested for loops
let j = 1;
for(let i=1 ; i<13 ; i++){
  // debugger // book did this wrong, fixed it
  for( j=1 ; j<13 ; j++){
      console.log(`${j} multiplied by ${i} is ${i*j}`);
      }
  } // outer loops counts up and inner loop counts up to make  multiplication table up to 12 * 12

 // looping 
//  let number = 0;
 while (number <= 12) {
     console.log(number);
     number = number + 2;
 }
 // will execute only while test is true
 let result = 1;
 let counter = 0;
 while (counter < 10) {
     result = result * 2;
     counter = counter + 1;
 }
 console.log(result);
 /* do loop - will execute at least once whereas while will only 
  * loop if the criteria is met*/

//  let yourName;
//  do {
//      yourName = prompt("Who are you?");
//  } while (!yourName);
//  console.log(yourName);

 const c = { value: 1 }; // array not primitive so can be changed
 let d = c; // c.value = 1, d.value = 1
 d.value = 2; // c.value = 2, d.value = 2


 // You can also create a string object using the following constructor function:
 new String("hello")
 // [String: 'hello']
 // same as 'hello'

 // Single quote marks \'
 // Double quote marks \"
 // End of line \n
 // Carriage return \r
 // Tab \t

 'JavaScript'.concat('Ninja');
 // << 'JavaScriptNinja' 
 'Hello' .concat(' ',' World','!'); 
 // << 'Hello World!' also use + to concat
 'Hello'.repeat(2); // method to repeat what is prior dot notation

 '    Hello World     '.trim(); // the space in the middle will be preserved but surrounding removed

 // const uniqueID = Symbol(); 
 const uniqueID = Symbol('this is a unique ID'); // best practice, description within parens
 // You can manually access the description using the String() function:

 String(uniqueID)
 // << 'Symbol(this is a unique ID)'

// defining functions  -  set variable to return of function - this binds the value of the function
const square = function(x){
    return x * x;
};
console.log(square(12));
// → 144
 
// example of nested scope function within a function
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };
hummus(2);
// debugger;
//   declaration notation for functions NOT bound to top to bottom code reading.
function cube(x){
    return x*x*x;
}
console.log(cube(3));

// arrow functions, the arrow 'says' the function produces this result...
// if a parameter is set to a value it will keep it if one isn't provided ... function power(base, exponent = 2) {
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result*=base;
    } 
    return result;
};
power(2,3);
// can look different if only one parameter is required - these are the same
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
//  or even this if no parameters are named
const horn = () => {
    console.log("Toot");
  };

  horn(); // to call the function

// debugger; 

  function multiplier(factor) {
    return number => number * factor;
  }
  
  let twice = multiplier(2); // sets the multiplier to * 2
  console.log(twice(5)); // calculates the multiplier of 2 to the parameter of 5 which yields 10



