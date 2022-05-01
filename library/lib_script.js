const addBookBtn=document.getElementById("bookBtn");
const overlay = document.getElementById("overlay"); /*grey screen of popup */
const popup=document.getElementById("popupWindow");
const library = document.getElementById("container"); /*where books are displayed */
const submitFormBtn= document.getElementById("submitForm");

const removeBookBtn=document.getElementsByClassName("removeBook");

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

class Book {
  constructor(author, title, pageNumber, hasBeenRead) {
    this.author = author;
    this.title = title;
    this.pageNumber = pageNumber;
    this.hasBeenRead = hasBeenRead;
  }
}

submitFormBtn.addEventListener('click',submitForm);

// Let person1 = new subClass(property1,property2,property3) 

function submitForm(e){
  e.preventDefault();
  const author = document.querySelector("[data-bookAuthor]").value
  const title = document.querySelector("[data-bookTitle]").value
  const pageNumber= document.querySelector("[data-bookPages]").value
  const hasBeenRead= document.querySelector("[data-hasRead]").value

  const newBook = new Book(author,title,pageNumber,hasBeenRead);
  myLibrary.push(newBook);
  console.log(myLibrary);

  console.log(`${author}, ${title},${pageNumber},${hasBeenRead}`);
  document.forms[0].reset();
  displayBookOnPage(author,title,pageNumber,hasBeenRead);
}


function displayBookOnPage(author,title,pageNumber,hasBeenRead){
    let newTab= document.createElement("div"); //create div to attach to
    newTab.classList.add("books");
    library.appendChild(newTab);
    newTab.innerText+=`${author} ${title} ${pageNumber} ${hasBeenRead}`;
}

