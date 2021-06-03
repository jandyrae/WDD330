const newComment = [{
    name: hikeName,
    date: new Date(),
    content: comment,
    type: hike
}];

export default class Comment {
    constructor(name, date, comment = [], type) {
        this.hikeName = name;
        this.date = date;
        this.content = comment;
        this.type = type;
        this.parentElement = document.getElementById('comments');
    }
    // class CommentModel {
    //     constructor(type) {
    //       this.type = type;
    //       this.comments = readFromLS(this.type) || [];
    //     }

    // start array
    // let comments = [];

    // get the comments fromthe array save to local storage
    getAllComments() {
        localStorage.setItem('newComment', JSON.stringify(newComment));
        console.log('saving to localStorage');
    }

    // display all comments from array
    renderCommentList() {
        let getComments = localStorage.getItem('newComment');
        console.log('getComments: ', JSON.parse(getComments));
        
    }

    // filter comments by hike
    filterCommentsByName(hikeName) {

    }

    // add listener to work with comment array
    addCommentListener() {

    }

    // call method to add a comment
    addComment(hikeName) {

    }

} // ends Comment class

