// Create a close button and append it to each list item
let mylist = document.getElementsByTagName('LI');
for (let i = 0; i < mylist.length; i++) {
  let div = document.createElement('DIV');
  let txt = document.createTextNode('X');
  div.className = 'close';
  // div.id = 'checked';
  div.appendChild(txt);
  mylist[i].appendChild(div);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = 'none';
  }
}

// click on li to cross out list item
let cross = document.getElementsByClassName('checked');
for (let i = 0; i < cross.length; i++) {
  cross[i].onclick = function () {
    let div = this.parentElement;
    div.style.textDecoration = 'line-through';
  }
}

// Add a 'checked' class when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function (event) {
  if (event.target.tagName == 'LI') {
    event.target.classList.toggle('checked'); // tried to toggle
  }
}, false);


// Create a new list item when clicking on the 'Add' button
function newItem() {
  let li = document.createElement('LI');
  let inputValue = document.getElementById('myInput').value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') { // if no text added display warning
    document.getElementById('warning').style.display = 'block';
  } else { // add to list li and remove warning
    document.getElementById('myUL').appendChild(li);
    document.getElementById('warning').style.display = 'none';
  }
  document.getElementById('myInput').value = '';

  let div = document.createElement('DIV');
  let txt = document.createTextNode('X');
  div.className = 'close';
  div.appendChild(txt);
  li.appendChild(div);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = 'none';
    }
  }
}

function tasksLeft() {
  let done = document.querySelectorAll('li');
  done.forEach((item) => {
    if (item.classList == 'checked') {
      console.log(item);
      item.parentElement.removeChild(item); // 
    }
  });
}

function showAll() {
  let all = document.querySelector('li');
  all.forEach((item) => {
    if (all.classList == 'checked' || all.classList == 'close') {
      // show hidden and active from localstorage
      // all.parentElement.
    }
  });
}

// to display how many items are on the list
let count = '';
count = document.querySelectorAll('li');
let total = count.length;
console.log(total); // shows in browser
document.getElementById('count').innerHTML = 'You have ' + total + ' tasks left.';