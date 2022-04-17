const display=document.getElementById("contDisplay");
const numberContainer=document.getElementById("contNumbers");
const operatorContainer=document.getElementById("contOperators");
const operatorButtons=operatorContainer.children;
const equalsButton=document.getElementById("calculate");
const clearButton=document.getElementById("clear");

for(let i =0;i<=9;i++){ //create number buttons 0-9
    let numButton = document.createElement("button");
    numButton.innerText=i;
    numberContainer.appendChild(numButton);

    numButton.addEventListener("click",()=>display.innerText+=i);
}

for(let i=0;i<operatorButtons.length;i++){ //append the 'data-operator' attribute of buttons to the display div.
    operatorButtons[i].addEventListener("click",()=>display.innerText+=operatorButtons[i].dataset.operator)
};

function calculate(calculation) {
    return Function(`"use strict";return (${calculation})`)();
}

equalsButton.addEventListener("click",()=>{
    const answer = calculate(display.innerText);
    console.log(answer);
    display.innerText=answer;
});

clearButton.addEventListener("click",()=>display.innerText="");

