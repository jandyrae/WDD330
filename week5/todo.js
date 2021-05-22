
// add line items on a button click to list
function addItemToList(){
const item = document.createElement("li");
item.classList.add('items');
item.addEventListener('onclick', event => {
    item.innerHTML = `
    <input type="checkbox" name="checkitem" class="checkItem" > 
    <input type="text" id="addItem" placeholder="buy groceries" >
    <button id="finished" onclick="checkOff();">Remove</button><br>
    `;
});
return item;
}

function checkOff (){

}

// item.setAttribute("");


function removeItem() {
    // logic to remove checked item
}

function orderItems(){
    
}

// Create a "close" button and append it to each list item
let mylist = document.getElementsByTagName("li");
for (let i = 0; i < mylist.length; i++) {
  let div = document.createElement("div");
  let txt = document.createTextNode("X");
  div.className = "close";
  div.appendChild(txt);
  mylist[i].appendChild(div);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'li') {
    e.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button
function newItem() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    let div = document.createElement("div");
    let txt = document.createTextNode("X");
    div.className = "close";
    div.appendChild(txt);
    li.appendChild(div);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
