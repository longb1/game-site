const addBookBtn=document.getElementById("bookBtn"); //get button
const library = document.getElementById("container");
let myLibrary = []; 

addBookBtn.addEventListener('click',displayBookOnPage);

class Book {
  constructor(author, title, pageNumber, hasBeenRead) {
    this.author = author;
    this.title = title;
    this.pageNumber = pageNumber;
    this.hasBeenRead = hasBeenRead;
  }
}

function addBookToLibrary(){
    const userInput=prompt('Enter a book into your library.');
    myLibrary.push(userInput);
    console.log(myLibrary);
    return userInput
}

function displayBookOnPage(){
    const book=addBookToLibrary() //get user input
    let newTab= document.createElement("div"); //create div to attach to
    newTab.classList.add("books");
    library.appendChild(newTab);
    newTab.innerText+=`${book}`;
}

