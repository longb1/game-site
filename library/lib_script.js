const addBookBtn=document.getElementById("bookBtn");
const overlay = document.getElementById("overlay"); /*grey screen of popup */
const popup=document.getElementById("popupWindow");
const closePopupBtn=document.getElementById("closePopup");
const library = document.getElementById("container"); /*where books are displayed */
const submitFormBtn= document.getElementById("submitForm");

let myLibrary = []; 

//Display Dialog Box Functionality

addBookBtn.addEventListener('click',()=>{launchPopup(popup)});
overlay.addEventListener('click',()=>{closePopup(popup)});
closePopupBtn.addEventListener('click',()=>{closePopup(popup)});

function launchPopup(window){
  if (window==null) return; //if no window element found, then exit function.
  window.classList.add("active");
  overlay.classList.add("active");
}

function closePopup(window){
  if (window==null) return //if no window element found, then exit function.
  window.classList.remove("active")
  overlay.classList.remove("active")
}

//Display Book Functionality

class Book {
  constructor(author, title, pageNumber, hasBeenRead) {
    this.author = author;
    this.title = title;
    this.pageNumber = pageNumber;
    this.hasBeenRead = hasBeenRead;
  }

  reading(){
    if(this.hasBeenRead =true){
      this.hadBeenRead==false;
    }else{
      this.hasBeenRead==true;
    }
  }
}

submitFormBtn.addEventListener('click',submitForm);

function submitForm(e){ //Take form inputs
  e.preventDefault();
  const author = document.querySelector("[data-bookAuthor]").value
  const title = document.querySelector("[data-bookTitle]").value
  const pageNumber= document.querySelector("[data-bookPages]").value
  const hasBeenRead= document.querySelector("[data-hasRead]").checked
  const newBook = new Book(author,title,pageNumber,hasBeenRead);
  myLibrary.push(newBook);

  document.forms[0].reset(); //wipe form inputs
  displayBookOnPage(author,title,pageNumber,hasBeenRead);
}


function displayBookOnPage(author,title,pageNumber,hasBeenRead){ //display form input on page
  let newTab= document.createElement("div"); //create div to attach to
  newTab.classList.add("books");
  newTab.innerText+=`Author:${author} Title:${title} PageNum:${pageNumber} Read?:${hasBeenRead}`;

  let removeBtn=document.createElement("button"); //button to remove book
  removeBtn.textContent="Remove";
  removeBtn.addEventListener("click",()=>{
    newTab.remove()
  })

  library.appendChild(newTab);
  newTab.appendChild(removeBtn)
    
}
