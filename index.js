// alert('hello');

const myLibrary = [];

function Book(title, author, pages, read) {
  //the constructor
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

Book.prototype.toggleRead = function(){
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryElement = document.querySelector("#library");
  libraryElement.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.innerHTML = `
    <div class="card-block">
      <div class="card-header">
        <h3 class="title">${book.title}</h3>
        <h5 class="author">${book.author}</h5>
      </div>
      <div class="card-body">
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read ? "Read" : "Not read Yet"}</p>
        <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
        </div>
    </div>
    `;
    libraryElement.appendChild(bookElement);

  }
}

function removeBook(index){
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary(){
  // do stuff here. 
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, pages, read);
  console.log(newBook);

  myLibrary.push(newBook);
  render(); 
}

let newBookBtn = document.querySelector("#new-book-btn");


newBookBtn.addEventListener("click", function() {
  // alert("button works")
  let newBookForm = document.querySelector("#new-book-form");
  console.log(newBookForm);
  newBookForm.style.display = "flex";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
  event.preventDefault();
  addBookToLibrary();
})














// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. How you decide to display this form is up to you. For example, you may wish to have a form show in a sidebar or you may wish to explore dialogs and modals using the <dialog> tag. However you do this, you will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. This is where event.preventDefault(); will come in handy. Check out the documentation for event.preventDefault and see how you can solve this issue!

// Add a button on each book’s display to remove the book from the library.

// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// Add a button on each book’s display to change its read status.

// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
