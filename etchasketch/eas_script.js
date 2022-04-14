canvasElement =document.getElementById("canvas")

for(let i =0;i<256;i++){
    let squareDiv = document.createElement("div"); 
    squareDiv.classList.add("finalBlock");
    canvasElement.appendChild(squareDiv);
}