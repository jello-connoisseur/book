let myLibrary = [];
const cont = document.getElementById('container');


//constructor

class Book {

    constructor (title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id
    }

    static readStatusToggle = function(){
        const readButton= document.getElementById('r'+ this.id)
        if (readButton.innerHTML === 'Read'){
            readButton.innerHTML = 'Want to Read';
        } else 
            readButton.innerHTML = 'Read';
    }

}




addBookToLibrary();
//myLibrary.readStatusToggle();

function addBookToLibrary() {
    const submitBtn = document.getElementById('submit');    
    submitBtn.addEventListener("click", (e) => {   
        let inputTitle = document.getElementById('title');
        let inputAuthor = document.getElementById('author');
        let inputPages = document.getElementById('pageCount');
        let didRead = document.getElementById('read');
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
    const displayRead = document.createElement('button');
    displayRead.classList.add('bookContent');
    displayRead.classList.add('read');
    displayRead.setAttribute("id", 'r'+myLibrary[myLibrary.length-1].id);
    if (myLibrary[myLibrary.length-1].read === true){
        displayRead.innerHTML = 'Read';
    } else displayRead.innerHTML = 'Want to Read';
    
    displayedBook.appendChild(displayRead);

    const removeButton = document.createElement('button');
    //removeButton.classList.add('bookContent');
    removeButton.classList.add('remove');
    removeButton.setAttribute('id', 'd'+myLibrary[myLibrary.length-1].id);
    removeButton.innerHTML = 'x';
    displayedBook.appendChild(removeButton);

    remove();

    toggle();

    
    
}

function toggle(){
    const toggles = document.querySelectorAll('.read')

    toggles.forEach((btn) => {
        btn.addEventListener("click", () => {
            
            let x = parseInt(btn.id[1]);
            const bookToBeToggled = myLibrary.findIndex((book) => book.id === x);
            myLibrary[bookToBeToggled].readStatusToggle();
        })
    })
}

function remove(){
    const removes = document.querySelectorAll('.remove');

    removes.forEach((btn) => {
        btn.addEventListener("click", () => {
            let x = btn.id[1];
            const bookToBeDeleted = document.getElementById(x);
            //const index = fruits.findIndex(fruit => fruit === "blueberries");
                   
            cont.removeChild(bookToBeDeleted); 
        })
    })
}




