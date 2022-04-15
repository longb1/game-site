canvasElement =document.getElementById("canvas")

colourDefault=document.querySelector('[data-colour="black"]');
colourRubber=document.querySelector('[data-colour="white"]');
colourCustom=document.querySelector('[data-colour="custom"]');

let isToggling = false;

function enableToggle(e) {
  isToggling = true;
  e.preventDefault()
  e.target.style.backgroundColor='red';
}

function disableToggle() {
  isToggling = false;
}

function toggle(e) {
  e.onmouseenter=disableToggle;
  if (isToggling === false) {
    return;
  }
  e.target.style.backgroundColor='red';
}

for(let i =1;i<=256;i++){
    let squareDiv = document.createElement("div");
    canvasElement.appendChild(squareDiv);

    squareDiv.onmousedown=enableToggle;
    squareDiv.onmouseenter=toggle;
    squareDiv.onmouseup=disableToggle;
    
}

colourDefault.addEventListener("click",()=>{
  let allElements=canvasElement.children;
  Array.from(allElements).forEach(element => {
    element.style.backgroundColor='white'
  });
});


