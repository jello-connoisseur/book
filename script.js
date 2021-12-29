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

addBookToLibrary();


function addBookToLibrary() {
    const submitBtn = document.getElementById('submit');
    
    submitBtn.addEventListener("click", (e) => {
    
        inputTitle = document.getElementById('title');
        inputAuthor = document.getElementById('author');
        inputPages = document.getElementById('pageCount');
        didRead = document.getElementById('read');
        myLibrary.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value, didRead.checked, myLibrary.length+1)); 

        e.preventDefault();
        displayBook();

        inputTitle.value = '';
        inputAuthor.value = '';
        inputPages.value = '';
        didRead.checked = false;

    })

}



function displayBook(){ 
    const displayedBook = document.createElement('div');
    displayedBook.classList.add('book');
    displayedBook.setAttribute('id', myLibrary[myLibrary.length-1].id);
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

    const removeButton = document.createElement('button');
    //removeButton.classList.add('bookContent');
    removeButton.classList.add('remove');
    removeButton.setAttribute('id', 'r'+myLibrary[myLibrary.length-1].id);
    removeButton.innerHTML = 'x';
    displayedBook.appendChild(removeButton);

    remove();
}

function remove(){
    const removes = document.querySelectorAll('.remove');

    removes.forEach((btn) => {
        btn.addEventListener("click", () => {
            let x = btn.id[1];
            const bookToBeDeleted = document.getElementById(x);
            cont.removeChild(bookToBeDeleted);            
            
        })
    })
}

// function removeBook(){
//     const remove = document.querySelectorAll('.remove');
//     remove.forEach((btn) => {
//         btn.addEventListener("click", () => {
//             console.log('hi');
//         })
//     })

// }


//addBookToLibrary();

