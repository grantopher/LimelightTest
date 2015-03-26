var args = arguments[0] || {};

var myBooks = Alloy.Collections.books; // Get book collection from App Main

function addBook() {
	// Pull book data from input form
	var book = Alloy.createModel('books', {
		title: $.titleInput.value,
		author: $.titleInput.value
	});
	
	myBooks.add(book);
	book.save();
	
	//Close the window
	$.addbook.close();
}
