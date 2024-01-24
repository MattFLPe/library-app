const bookContainer = document.querySelector("#container-books")

const myLibrary = [{
    title: "Brothers Karamazov",
    author: "Fyodor Dostoievski",
    pages: "824 pages",
    read: false
}, {
    title: "Crime and Punishment",
    author: "Fyodor Dostoievski",
    pages: "500 pages",
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


function bookDisplay(){
    return myLibrary.forEach((book) => {
        let container = document.querySelector("#container-books")
        let cardBook = document.querySelector(".card")
        let paraTitle = document.querySelector(".para-title");
        let paraAuthor = document.querySelector(".para-author");
        let paraPages = document.querySelector(".para-pages");
        
        paraTitle.innerHTML += `Title: ${book.title}`
        paraAuthor.innerHTML += `Author: ${book.author}`
        paraPages.innerHTML += `Pages: ${book.pages}`

        //paraTitle.innerHTML = book.title;
        /*
        let bookCard = document.createElement("p")
        bookCard.classList.add("title")
        bookCard.innerHTML += book.title;
        bookCard.appendChild(containerBooks)
        document.getElementsByClassName(".title").style.color = "black";
        */
      })
    }
    console.log(bookDisplay());

    function createBookItem() {
        
    }

    // Create click event to "New Book" button, which brings up the form to add new books
    let bookBtn = document.querySelector(".book-btn");
    bookBtn.addEventListener("click", function() {
        let bookForm = document.querySelector(".book-form");
        bookForm.style.display = "block";
    });