// // object in this example is user a real world entity
// let user = {
//     name: 'John', age: 30
// };

// function sayHello() {
//     console.log('hello');
// };
// user.sayHello = sayHello; 
// user.sayHello(); // outputs hello

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         // "this" is the "current object"
//         console.log(this.name);
//     }

// };

// user.sayHi(); // John

let user = {
    name: "John"
};
let admin = {
    name: "Admin"
};

function sayHi() {
    alert(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;
// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
/* Summary
    Functions that are stored in object properties are called “methods”.
    Methods allow objects to “act” like object.doSomething().
    Methods can reference the object as this.
    */

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () { // shows the current step
        alert(this.step);
    }
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1 
// same as ladder.up().up().down().showStep(); // 1


function Human (name) {
    return {
      name,
      getName() {
        return this.name;
      }
    };
}
  
  const zell = new Human('Zell');
  const vincy = new Human('Vincy');
  
  console.log(zell.getName()); // Zell


//   with event listeners
let button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log(this); // button
});

// novice to ninja chapter 5 Objects
const spiderman = {}; // created an object literal assigned to the variable spiderman
// const spiderman = new Object(); alternate way to create using constructor (also empty object)
const name = 'Iron Man';
const realName = 'Tony Stark';
// long way
// const ironMan = { name: name, realName: realName };
// short ES6 way
const ironMan = { name, realName };
// to access the properties use dot notation ironMan.name or bracket notation superman['name] 
const hulk = {name = 'Hulk', catchPhrase: 'Hulk Smash!' };

superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

for(const key in superman) {
    console.log(key + ": " + superman[key]);
}
//  "name: Superman"
//  "real name: Clark Kent"
//  "height: 75"
//  "weight: 235"
//  "hero: true"
//  "villain: false"
//  "allies: Batman,Supergirl,Superboy"
//  "fly: function (){
//     console.log(\"Up, up and away!\");
// }"