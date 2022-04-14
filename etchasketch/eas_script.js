canvasElement =document.getElementById("canvas")

var isToggling = false;

function enableToggle(e) {
  console.log('enableToggle')
  isToggling = true;

  if (e.target !== table) {
    toggle(e);
  }
}

function disableToggle() {
  console.log('disableToggle')
  isToggling = false;
}

function toggle(e) {
  if (isToggling === false) {
    return;
  }

  console.log('toggle:', e.target);

  e.target.classList.toggle('active');
}

function startGame() {
  table.onmousedown = enableToggle;

  for (var i = 0, il = tableEntry.length; i < il; i++) {
    tableEntry[i].onmouseenter = toggle; //changes color 
  }

  table.onmouseup = disableToggle;
}

startGame();

for(let i =1;i<=256;i++){
    let squareDiv = document.createElement("div");
    // squareDiv.innerText=i; 
    canvasElement.appendChild(squareDiv);
    squareDiv.addEventListener('mousedown', toggle(startDrawing));
}


