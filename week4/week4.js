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
input.addEventListener('change', () => alert('changed'), false);
// can use JavaScript to intercept the form before it’s sent by adding a submit event listener
form.addEventListener ('submit', search, false);
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
input.addEventListener('focus', function(){ // focus could also be set to blur as example below
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

//  **** I prefer to use placeholder in the html form

// input.addEventListener('blur', function(){
//     if(input.value === '') {
//         input.value = 'Search Here';
//     } }, false);
