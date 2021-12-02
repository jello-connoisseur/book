let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(){
    const inputName = prompt("Name of the Book");
    const inputAuthor = prompt("Name of the Author");
    const inputPages = prompt("Page Count");
    const didRead = prompt("Read");
    myLibrary.push(new Book(inputName, inputAuthor, inputPages, didRead));
    console.table(myLibrary);
}
addBookToLibrary();

function displayLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
        const container = document.querySelector('#container');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = myLibrary[i];
        container.appendChild(content);
    }
}

displayLibrary();


