let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

myLibrary.push(new Book ("Bel Ami", "Guy de Maupassant", 394, true));
myLibrary.push(new Book ("The Masterpiece", "Emile Zola", 400, true));
myLibrary.push(new Book ("Nana", "Emile Zola", 387, false));

function addBookToLibrary(){
    const newBookBtn = document.querySelector('button');

    newBookBtn.addEventListener('click', () => {
        const inputName = prompt("Name of the Book");
        const inputAuthor = prompt("Name of the Author");
        const inputPages = prompt("Page Count");
        const didRead = prompt("Read");
        myLibrary.push(new Book(inputName, inputAuthor, inputPages, didRead));
    });

}
addBookToLibrary();



const container = document.querySelector('#container');

function displayLibrary(){
    myLibrary.forEach((item, index) => {
        const bookNumber = document.createElement('div');
        //add a class to bookNumber
        bookNumber.classList.add('bookNumber');
        //add content to bookNumber
        bookNumber.textContent = 'Book ' + (index+1);
        //add style to bookNumber
        bookNumber.setAttribute ('style', 'border: 2px solid; background: yellow; padding: 5px; margin: 5px');
        //append it to parent
        container.appendChild(bookNumber);
        for (var key in item){
            const bookDisplay = document.createElement('div');
            bookDisplay.classList.add('bookDisplay');
            bookDisplay.textContent = `${key}: ${item[key]}`;
            bookNumber.appendChild(bookDisplay);
        }

    });    
}




