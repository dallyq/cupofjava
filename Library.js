class Library {
    constructor() {
        this.books = [];
        this.patrons = [];
    }

    addBook(book){
        this.books.push(book);
    }

    addPatron(patron) {
        this.patrons.push(patron);
    }

}