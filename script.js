
class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    };

    toggleRead() {
        this.read = !this.read;
    };

};

class Interface {
    static addBookToLibrary(book) {

        const bookList = document.querySelector("#book-list")
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read ? "Read" : "Not read yet"}</td>
        <td><button class="toggle-read-btn" onclick="Interface.toggleRead(${myLibrary.indexOf(book)})">Toggle Read</button></td>
        <td><button class="remove-btn" onclick="Interface.removeBooks(${bookList.childElementCount - 1})">Remove Book</button></td>
        `

        bookList.appendChild(row)
    };

    static removeBooks(index) {
        myLibrary.splice(index, 1);
        Interface.bookDisplay();
    };

    static toggleRead(index) {
        
    }

    static bookDisplay() {
        const books = Store.getBooks();
        const bookList = document.querySelector("#book-list");
        bookList.innerHTML = "";
        books.forEach((book) => Interface.addBookToLibrary(book))
    };
};

class Store {
    static getBooks() {
        let books = [];
        if (localStorage.getItem('books') !== null) {
            books = JSON.parse(localStorage.getItem('books'));
        };
        return books;
    };

    static saveBooks(books) {
        localStorage.setItem('books', JSON.stringify(books));
    };
};

let myLibrary = Store.getBooks();
Interface.bookDisplay();


    // Create an event that sucessfully submits the form's information
    document.querySelector(".book-form").addEventListener("submit", function(event) {
        event.preventDefault();
    // Get form input values
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    // Create a Book object
    let newBook = new Book(title, author, pages, read);

    // Add the book to the library and update the display
    myLibrary.push(newBook);
    Interface.addBookToLibrary(newBook);
    Store.saveBooks(myLibrary);
    });