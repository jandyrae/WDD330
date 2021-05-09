/*Event Handling*/
document.onclick = function (){ console.log('You clicked on the page!'); } // the older way of handling the event of onclick
document.body.addEventListener('click',doSomething); // without a node it is a global object (the whole window)
addEventListener('click', () => alert('You Clicked!')); // same without a node (whole page) with an anonymous function
function doSomething() {
    alert('You Clicked!');
    }
addEventListener('click',doSomething);
function doSomething(event){
    console.log(event.target); // << <p id='click'>Click On Me</p>
}
/* 
screenX and screenY properties show the number of pixels from the left and top of the screen 
clientX and clientY properties show the number of pixels from the left and top of the client that is being used
pageX and pageY properties show the number of pixels from the left and top, looking something like this
function doSomething(event){
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}
*/
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );
// mousedown
// mouseup
// click
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
} // be careful using click and dblclick!! 
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );
addEventListener('keydown',highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`)); // on key release
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`)); // on pressing a key
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`)); // on pressing a 'modifier' key

addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
            console.log('Action canceled!');
        }
    }); // checking to see if the c and ctrl were pressed simultaneously

    addEventListener('click', (event) => {
        if (event.shiftKey) {
            console.log('A Shifty Click!');
        }
    }); // checks to see if shift and mouseclick were both done

    /* 
    use touch events with caution many are not tried and tested and difficult to implement
    */
    const onceParagraph = document.getElementById('once');
    onceParagraph.addEventListener('click', remove);
    function remove(event) {
        console.log('Enjoy this while it lasts!');
        onceParagraph.style.backgroundColor = 'pink';
        onceParagraph.removeEventListener('click',remove);
    } // remove event listener


    const brokenLink = document.getElementById('broken');
    brokenLink.addEventListener('click',(event) => {
        event.preventDefault();
        console.log('Broken Link!');
    }); // stopping default behavior
    // default behaviour is bubbling
        ulElement = document.getElementById('list');
        liElement = document.querySelector('#list li');
        // ulElement.addEventListener('click', (event) =>
        // console.log('Clicked on ul') );
        // liElement.addEventListener('click', (event) =>
        // console.log('Clicked on li') );
    // capturing
        // ulElement.addEventListener('click', (event) =>
        // console.log('Clicked on ul'),true);
        // liElement.addEventListener('click', (event) =>
        // console.log('Clicked on li'),true);
        /*only one or the other of the above will work unless you do 
        it this way, separate event for both cases */
    // capturing
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);
// bubbling
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),false );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),false );