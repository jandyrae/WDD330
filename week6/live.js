// From Gary James to Everyone:  07:31 PM
// let name = "Gary Thomas James";
let name = "Jandy Rae Kiger"
let initials = "";

for(let i = 0; i < name.length; i++) {
    initials += (i === 0 || name.charAt(i-1) === ' ' ? name.charAt(i) : "");
}
console.log(initials);
initials = name.split(' ').reduce((init, n) => init + n.charAt(0), "" );
console.log(initials)
