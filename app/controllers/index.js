$.index.open();

var myBooks = Alloy.Collections.books;

//Default book data so that there is something in the app to start with.
var book = Alloy.createModel('books', {
	title : 'Great Expectations',
	author: 'Charles Dickens'
});

myBooks.add(book);

book.save();

function showBook (event) {
	var selectedBook = event.source; 
	// Grab book data from event to show in book details panel
	var args = {
		title : selectedBook.title,
		author: selectedBook.author
	};
	var bookview = Alloy.createController("bookdetails", args).getView(); //calls bookdetails view and opens it
	bookview.open();
};

function addBook(){
	// Opens the input form to add books to database
    var myAddBook = Alloy.createController("addbook",{}).getView();
    
    myAddBook.open();
}
