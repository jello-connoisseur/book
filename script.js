let myLibrary = [];
const cont = document.getElementById('container');

let inputTitle = '';
let inputAuthor = '';
let inputPages = '';
let didRead = '';
//constructor
function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id
}


function displayBook(){ 
    myLibrary.forEach((listing) => {
        const displayedBook = document.createElement('div');
        displayedBook.classList.add('book');
        cont.appendChild(displayedBook);
        
        const displayTitle = document.createElement('div');
        displayTitle.classList.add('bookContent');
        displayTitle.classList.add('title');
        displayTitle.innerHTML = listing.title;
        displayedBook.appendChild(displayTitle);

        const displayAuthor = document.createElement('div');
        displayAuthor.classList.add('bookContent');
        displayAuthor.classList.add('author');
        displayAuthor.innerHTML = listing.author;
        displayedBook.appendChild(displayAuthor);

        const displayPages = document.createElement('div');
        displayPages.classList.add('bookContent');
        displayPages.classList.add('pages');
        displayPages.innerHTML = listing.pages;
        displayedBook.appendChild(displayPages);

        //need to fix
        const displayRead = document.createElement('checkbox');
        displayRead.classList.add('bookContent');
        displayRead.classList.add('read');
        displayRead.innerHTML = listing.read;
        displayedBook.appendChild(displayRead);
    })
}

function addBookToLibrary() {
    const btn = document.querySelector('button');

    btn.addEventListener("click", (e) => {
        inputTitle = document.getElementById('title');
        inputAuthor = document.getElementById('author');
        inputPages = document.getElementById('pageCount');
        didRead = document.getElementById('read');
        myLibrary.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value, didRead.checked, myLibrary.length+1)); 
        e.preventDefault();

        const displayedBook = document.createElement('div');
        displayedBook.classList.add('book');
        cont.appendChild(displayedBook);
        
        const displayTitle = document.createElement('div');
        displayTitle.classList.add('bookContent');
        displayTitle.classList.add('title');
        displayTitle.innerHTML = myLibrary[myLibrary.length-1].title;
        displayedBook.appendChild(displayTitle);

        const displayAuthor = document.createElement('div');
        displayAuthor.classList.add('bookContent');
        displayAuthor.classList.add('author');
        displayAuthor.innerHTML = myLibrary[myLibrary.length-1].author;
        displayedBook.appendChild(displayAuthor);

        const displayPages = document.createElement('div');
        displayPages.classList.add('bookContent');
        displayPages.classList.add('pages');
        displayPages.innerHTML = myLibrary[myLibrary.length-1].pages;
        displayedBook.appendChild(displayPages);

        //need to fix
        const displayRead = document.createElement('checkbox');
        displayRead.classList.add('bookContent');
        displayRead.classList.add('read');
        displayRead.innerHTML = myLibrary[myLibrary.length-1].read;
        displayedBook.appendChild(displayRead);

        inputTitle.value = '';
        inputAuthor.value = '';
        inputPages.value = '';
        didRead.checked = false;
    })
}

console.log(addBookToLibrary());

