function makeList(){
const links = [{
        label: "Week1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week4 notes",
        url: "week4/index.html"
    },
    {
        label: "Week5 notes",
        url: "week5/index.html"
    },
    {
        label: "Week6 notes",
        url: "week6/index.html"
    },
    {
        label: "Week7 notes",
        url: "week7/index.html"
    },
    {
        label: "Week8 notes",
        url: "week8/index.html"
    },
    {
        label: "Week9 notes",
        url: "week9/index.html"
    },
    {
        label: "Week10 notes",
        url: "week10/index.html"
    },
    {
        label: "Week11 notes",
        url: "week11/index.html"
    },
    {
        label: "Week12 notes",
        url: "week12/index.html"
    },
    {
        label: "Week13 notes",
        url: "week13/index.html"
    }
], 
listContainer = document.createElement('div'),
listElement = document.createElement('ol'),
numListItems = links.length,
listItem,
i;
for (i = 0; i < numListItems; i++) {
//create line items, populate them, and add list item to list element
    listItem = document.createElement('li');
    listItem.innerHTML = links[i];
    listElement.appendChild(listItem);
    
}
}
makeList();