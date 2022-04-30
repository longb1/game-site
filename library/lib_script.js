const addBookBtn=document.getElementById("bookBtn");
const overlay = document.getElementById("overlay"); /*grey screen of popup */
const popup=document.getElementById("popupWindow");
const library = document.getElementById("container"); /*where books are displayed */
const submitFormBtn= document.getElementById("submitForm");

let myLibrary = []; 

addBookBtn.addEventListener('click',()=>{launchPopup(popup)});

overlay.addEventListener('click',()=>{closePopup(popup,overlay)});

function launchPopup(window){
  if (window==null) return; //if no window element found, then exit function.
  window.classList.add("active");
  overlay.classList.add("active");
}

function closePopup(window,overlay){
  if (window==null) return //if no window element found, then exit function.
  window.classList.remove("active")
  overlay.classList.remove("active")
}





submitFormBtn.addEventListener('click',submitForm);



class Book {
  constructor(author, title, pageNumber, hasBeenRead) {
    this.author = author;
    this.title = title;
    this.pageNumber = pageNumber;
    this.hasBeenRead = hasBeenRead;
  }
}
// Let person1 = new subClass(property1,property2,property3) 

function submitForm(){
  const author = document.getElementById('bookAuthor').value
  const title = document.getElementById('bookAuthor').value
  const pageNumber= document.getElementById('bookAuthor').value
  const hasBeenRead= document.getElementById('bookAuthor').value
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

