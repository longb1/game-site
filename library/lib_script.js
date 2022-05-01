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

class Book {
  constructor(author, title, pageNumber, hasBeenRead) {
    this.author = author;
    this.title = title;
    this.pageNumber = pageNumber;
    this.hasBeenRead = hasBeenRead;
  }
}

submitFormBtn.addEventListener('click',submitForm);


function submitForm(e){
  e.preventDefault();
  const author = document.querySelector("[data-bookAuthor]").value
  const title = document.querySelector("[data-bookTitle]").value
  const pageNumber= document.querySelector("[data-bookPages]").value
  const hasBeenRead= document.querySelector("[data-hasRead]").value

  const newBook = new Book(author,title,pageNumber,hasBeenRead);
  myLibrary.push(newBook);

  document.forms[0].reset(); //wipe form inputs
  displayBookOnPage(author,title,pageNumber,hasBeenRead);
}


function displayBookOnPage(author,title,pageNumber,hasBeenRead){
    let newTab= document.createElement("div"); //create div to attach to
    newTab.classList.add("books");
    newTab.innerText+=`${author} ${title} ${pageNumber} ${hasBeenRead}`;

    let removeBtn=document.createElement("button"); //create button
    removeBtn.textContent="Remove Book"; //button text
    removeBtn.addEventListener("click",()=>{ //event listernet
      newTab.remove()
    })

    library.appendChild(newTab);
    newTab.appendChild(removeBtn)
    
}
