const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function bookDisplay(){
    let library = document.querySelector("#library")
        for (let i = 0; i < myLibrary.length; i++){
            let book = myLibrary[i];
            let bookTable = document.createElement("div");
            library.appendChild(bookTable)
            bookTable.innerHTML = `
            <table>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Read</th>
            </tr>
            <tr>
                <td id="title">${book.title}</td>
                <td id="author">${book.author}</td>
                <td id="pages">${book.pages}</td>
                <td id="read">${book.read ? "Read" : "Not read yet"}</td>
            </tr>
            <button></button>
        </table>`
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

    document.querySelector(".book-form").addEventListener("submit", function(event) {
        event.preventDefault();
        addBookToLibrary();
    })