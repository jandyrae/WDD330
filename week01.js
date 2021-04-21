// this is the find and edit option, uses the input to recall the saved text
function loadStory() {
    var storyName = document.getElementById("name_input").value;
    var storyHTML = localStorage.getItem(storyName);
    document.getElementById("story_editor").value = storyHTML;
}

// this takes the text and saves it to the story name
function saveStory() {
    var storyName = document.getElementById("name_input").value;
    var storyHTML = document.getElementById("story_editor").value;
    localStorage.setItem(storyName, storyHTML);
}

//  this will display the story in the area assigned in the html
function displayStory() {
    var storyHTML = document.getElementById("story_editor").value;
    document.getElementById("story_display").innerHTML = storyHTML;
}