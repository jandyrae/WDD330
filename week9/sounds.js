
function playSound(event) {
        // console.log(event.code);
        const audio = document.querySelector(`audio[data-key=${event.code}]`);
        const key = document.querySelector(`.key[data-key=${event.code}]`);
        // console.log(audio);
        if(!audio) return; // if wrong key is pressed stop the function.
        audio.currentTime = 0;
        audio.play();
        // console.log(key);
        key.classList.add('playing');

    }

function removeTransition(event) {
    // console.log(event);
    if (event.propertyName !== 'transform') return;
    // console.log(event.propertyName); 
    // console.log(this);
    this.classList.remove('playing');

}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound );





// this is an example of the function built in the event listener, above it is made into 
// it's own function and called in the listener on  line26
// window.addEventListener('keydown', function (event){
//     // console.log(event.code);
//     const audio = document.querySelector(`audio[data-key=${event.code}]`);
//     const key = document.querySelector(`.key[data-key=${event.code}]`);
//     // console.log(audio);
//     if(!audio) return; // if wrong key is pressed stop the function.
//     audio.currentTime = 0;
//     audio.play();
//     // console.log(key);
//     key.classList.add('playing');
//     // key.classList.remove('playing');
//     // key.classList.toggle('playing');
    
// });