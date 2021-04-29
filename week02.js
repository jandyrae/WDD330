 // looping 
 let number = 0;
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
 let yourName;
 do {
     yourName = prompt("Who are you?");
 } while (!yourName);
 console.log(yourName);

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

debugger; 

  function multiplier(factor) {
    return number => number * factor;
  }
  
  let twice = multiplier(2); // sets the multiplier to * 2
  console.log(twice(5)); // calculates the multiplier of 2 to the parameter of 5 which yields 10



