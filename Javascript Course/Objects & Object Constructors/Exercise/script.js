function Book(title, author, pages, alreadyRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    let alreadyRead = false;
    this.alreadyRead = alreadyRead;

    let info = function(book) {
        if (/*variable*/) {
            return Book;
        }
        else {
            return ("Invalid book!");
        }
    };
    
    Book.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
    return theHobbit.info();
}