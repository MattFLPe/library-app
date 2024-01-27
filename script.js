const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    bookDisplay();
}

function removeBooks(index) {
    myLibrary.splice(index, 1);
    bookDisplay();
}

// Loop through the array and displays each book on a table
function bookDisplay(){
    let library = document.querySelector("#library")
    library.innerHTML = "";
        for (let i = 0; i < myLibrary.length; i++){
            let book = myLibrary[i];
            let bookTable = document.createElement("div");
            library.appendChild(bookTable)
            bookTable.innerHTML = `
            <div class="container">
                <div class="card">
                    <p>${book.title}</p>
                    <p>by ${book.author}</p>
                    <p>${book.pages} pages</p>
                    <p>${book.read ? "Read" : "Not read yet"}</p>
                    <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
                    <button class="remove-btn" onclick="removeBooks(${i})">Remove Book</button>
                </div>
            </div>
            `
        }
      }

function addBookToLibrary() {
    let title = document.querySelector("#title").value
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let bookNew = new Book(title, author, pages, read);
    myLibrary.push(bookNew);
    bookDisplay();
}



    // Create click event to "New Book" button, which brings up the form to add new books
    let bookBtn = document.querySelector(".book-btn");
    bookBtn.addEventListener("click", function() {
        let bookForm = document.querySelector(".book-form");
        bookForm.style.display = "block";
    });
    // Create an event that sucessfully submits the form's information
    document.querySelector(".book-form").addEventListener("submit", function(event) {
        event.preventDefault();
        addBookToLibrary();
    })