let myLibrary = [];

//constructor
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//declare input value
let inputName = '';
let inputAuthor = '';
let inputPages = '';
let didRead = true;

//whensomeone clicks "add new book" button, take the user input values and push them into the array
const newBookBtn = document.querySelector('button');
newBookBtn.addEventListener('click', (e) => {
    //when user presses button, the page reloads. preventDefault() prevents the page from reloading
    e.preventDefault();
    insert();
});  

function insert(){
    inputName = document.getElementById("name");
    inputAuthor = document.getElementById("author");
    inputPages= document.getElementById("pageCount");
    didRead = document.getElementsByName("read");

    bookArray = [inputName, inputAuthor, inputPages, didRead].map(e => e.value);

    myLibrary.push(new Book (...bookArray));

    inputName.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    didRead= '';

    displayBook();
}

function displayBook(){
    const container = document.querySelector('#container');

    const bookNumber = document.createElement('div');
    bookNumber.classList.add('bookNumber');
    bookNumber.textContent = 'Book '+ myLibrary.length;
    bookNumber.setAttribute ('style', 'border: 2px solid; background: yellow; padding: 5px; margin: 5px');
    container.appendChild(bookNumber);

    for (var key in myLibrary[myLibrary.length-1]){
        const bookDisplay = document.createElement('div');
        bookDisplay.classList.add('bookDisplay');
        bookDisplay.textContent = `${key}: ${myLibrary[myLibrary.length-1][key]}`;
        bookNumber.appendChild(bookDisplay);
    }
}








