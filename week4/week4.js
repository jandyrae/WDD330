// const form = document.getElementsByTagname('form')[0]; //to be able to return the form object or
// const form = document.forms.search; 
// const input = form.searchInput // access form search input using dot.notation
const form = document.forms['search'];
// The form.action property can be used to set the action attribute of a form, so it’s sent to a different URL to be processed on the server:
// form.action = '/an/other.url'
// const [input, button] = form.elements; //A form object also has a method called elements that returns an HTML collection of all the 
// elements contained in the form. In this case the form contains two controls: an input element and a button element:

const button = form.elements.submit;
const input = form.elements.searchInput;
// input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('blur', () => alert('blurred'), false);
// input.addEventListener('change', () => alert('changed'), false); // alerts if a change occurs
// can use JavaScript to intercept the form before it’s sent by adding a submit event listener
form.addEventListener('submit', search, false);

function search() {
    alert(' Form Submitted');
}
// we can prevent the form from submitting
function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}

// Retrieving and Changing Values From a Form
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}
// input.value = 'Search Here'; this is problematic as we don't want to search for search here
// input.addEventListener('focus', function(){ // focus could also be set to blur as example below
//     if (input.value==='Search Here') {
//         input.value = '' 
//     }
// }, false);

//  **** I prefer to use placeholder in the html form

// input.addEventListener('blur', function(){
//     if(input.value === '') {
//         input.value = 'Search Here';
//     } }, false);

// OOP NOTES

const Dice = function (sides = 6) {
    this.sides = sides;
    this.roll = function () {
        return Math.floor(this.sides * Math.random() + 1)
    }
    this.description = function () {
        return 'A way of choosing random numbers'
    }
}
const redDice = new Dice();
console.log(redDice.sides);
console.log(redDice.roll());
const whiteDice = new Dice(4);
const blueDice = new Dice(20);
blueDice.constructor; // returns the function that created it
const greenDice = new redDice.constructor(10); // another copy of the redDice created with constructor method
console.log(redDice.description);

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack() {
        return `Feel the power of my ${this.weapon}!`;
    }
}
const leo = new Turtle('Leonardo');
leo.name;
leo.sayHi();

Turtle.prototype; // returns the object 'Turtle'
Turtle.prototype.weapon = 'Hands';
Turtle.prototype.attack = function () {
    return `Feel the power of my ${this.weapon}!`;
}

const raph = new Turtle('Raphael');
raph.name;
console.log(raph.sayHi());
raph.weapon;
raph.attack();

const don = new Turtle('Donatello'); // Turtle { name: 'Donatello' }
don.weapon;
Turtle.prototype.weapon = 'Feet'; // this will change the prototype's weapon from hands to feet

leo.weapon = 'Katana Blades'; // 'Katana Blades';
raph.weapon = 'Sai'; // 'Sai'
don.weapon = 'Bo Staff'; //  'Bo Staff'

console.log(leo);
console.log(leo.attack());

Turtle.prototype.food = 'Pizza';
Turtle.prototype.eat = function () {
    return 'Mmm, this ${this.food} tastes great!';
}

const mike = new Turtle('Michelangelo');
console.log(mike.eat());
mike.weapon = 'Nunchakus';

console.log(mike.attack());


//  Chapter 15
// if we wanted to add a class to a paragraph element referenced by the variable para, then append another paragraph on the end, we could do

// para.classList.add('important');
// const newPara = document.createElement('p');
// newPara.textContent = 'Another Paragraph';
// para.appendChild(newPara);

//  same thing using jquery
// $(para).addClass('important').append('<p>Another Paragraph</p>');

// Underscore and lodash (libraries of functions)
// flatten an array
// _.flatten([1, [2, [3, [4]], 5]]); //  [1, 2, [3, [4]], 5]
// return the last element in an array
// _.last([1, 2, 3]); //  3
// randomly shuffle an array
// _.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]


// a very simple Pi module would have the following code saved in a file called 'pi.js':
// export const PI = 3.1415926;
// then be imported into your main JavaScript file, main.js using the following code:
// import { PI } from './pi.js';

// entered in a js file called stats.js
function square(x) {
    return x * x;
}

function sum(array, callback) {
    if (callback) {
        array = array.map(callback);
    }
    return array.reduce((a, b) => a + b);
}

function variance(array) {
    return sum(array, square) / array.length - square(mean(array))
}

function mean(array) {
    return sum(array) / array.length;
}
// use export
// export {
//     variance, 
//     mean
// }
// then this could be imported with this code
// import  { mean, variance } from './stats.js';

// from chapter 15 array for todos
const tasks = [
    { name: 'Get Milk' },
    { name: 'Go for a run' },
    { name: 'Finish writing last chapter' },
    { name: 'Phone bank' },
    { name: 'Email Craig' }
    ]
// using template languages 
{/* <ul>
{{#tasks}}
<li>{{name}}</li>
{{/task}}
</ul> */}
//  and this 
{/* <ul>
    <% tasks.forEach(function(task) { %>
    <li><%= task.name %></li>
    <% }); %>
    </ul>
<% } %>> */}
// would yeild this
{/* <ul>
    <li>Get Milk</li>
    <li>Go for a run</li>
    <li>Finish writing last chapter</li>
    <li>Phone bank</li>
    <li>Email Craig</li>
</ul> */}
// using these language templates
// Handlebars
// Pug
// EJS
// Mustache
// Nunjucks