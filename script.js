const containerBooks = document.querySelector("#container-books")

const myLibrary = [{
    title: "Brothers Karamazov",
    author: "Fyodor Dostoievski",
    pages: "824 pages",
    read: false
}];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = boolean(read);
}

function addBookToLibrary() {
    let title = document.querySelector(".title").value
    let bookNew = new bookNew ()
    myLibrary.push(bookNew);
}

/*
function bookDisplay(){
    myLibrary.map((book, index) => {
        const bookCard = document.createElement("div")
        bookCard.classList.add("card");
        bookCard.innerHTML += `<p>Title: ${book.title}</p>`

      })
    }

function createBookItem(book, index) {
    const bookCard = document.createElement("div")

}
    */
    let bookBtn = document.querySelector(".book-btn");
    bookBtn.addEventListener("click", function() {
        let bookForm = document.querySelector(".book-form");
        bookForm.style.display = "block";
    });