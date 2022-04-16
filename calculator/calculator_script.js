const display=document.getElementById("contDisplay");
const numberContainer=document.getElementById("contNumbers");
const operatorContainer=document.getElementById("contOperators");
const equalsButton=document.getElementById("calculate");
const operatorButtons=operatorContainer.children;

for(let i =0;i<=9;i++){ //add number button elements to number container
    let numButton = document.createElement("button");
    numButton.innerText=i;
    numberContainer.appendChild(numButton);

    numButton.addEventListener("click",()=>display.innerText+=i);
}



for(let i=0;i<operatorButtons.length;i++){
    operatorButtons[i].addEventListener("click",()=>display.innerText+=operatorButtons[i].dataset.operator)
}

equalsButton.addEventListener("click",function calculate(){
    console.log("results here");
})