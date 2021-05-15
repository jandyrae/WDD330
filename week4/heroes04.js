// document.forms.hero.heroName.focus(); does the same thing as autofocus witthin the input line in a form
const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}
hero.realName = form.realName.value;
form.powers;
hero.powers = [];
for (let i = 0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}
// hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value); or like this
document.forms.hero.powers[0].checked = true; // makes the first box checked by default
// <input type='checkbox' value='Flight' name='powers' checked> or like this
form.category;
// form array looks like this [input, input, input, value: "Antihero"]
hero.category = form.category.value;
form.category[0].checked = true;
// or like this <input type='radio' name='type' value='Villain' checked>
hero.age = form.age.value;
form.city;
hero.city = form.city.value;
console.log(form.city.options[0].text); //  "Choose a City"
hero.origin = form.origin.value; // access the textarea
form.origin.value = 'Born as Kal-El on the planet Krypton...'; // to set value in the form directly or in the html directly

// to validate
form.addEventListener('submit', validate, false);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}
// to give feedback on validation
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

// if invalid it is best if form cannot be submitted
function disableSubmit(event) {
    if (event.target.value === '') {
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}
form.heroName.addEventListener('keyup', disableSubmit, false);