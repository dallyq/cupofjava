class Library {
    constructor() {
        this.books = [];
        this.patrons = [];
        this.dailyFine = .1;
    }

    addBook(book){
        this.books.push(book);
    }

    addPatron(patron) {
        this.patrons.push(patron);
    }

    chargeFines() {
        const now = new Date();

        const latePatrons = this.patrons.filter(patron => 
            (patron.currentBook !== null && patron.currentBook.dueDate < now)
        );

        for (let patron of latePatrons) {
            const daysLate = Math.floor( (now.getTime() - patron.currentBook.dueDate.getTime()) / (1000 * 60 * 60 * 24));
            patron.balance += this.dailyFine * daysLate;
        }
    }


}