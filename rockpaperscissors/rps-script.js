const playerPick=document.getElementById('playerChoice');
const pcPick=document.getElementById('pcChoice');
const playerSpan=document.getElementById("playerScore");
const pcSpan=document.getElementById("pcScore");
const result= document.createElement("h1");
let playerScore=0;
let pcScore=0;

const all_btn = document.querySelectorAll("button");
all_btn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        playRound(btn.id);
    });
});

function pcPlay(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    value= Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    if (value ==1) {
        return "rock"
    } else if (value ==2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(player){
    let pc=pcPlay(1,4)
    playerPick.innerText=`You: ${player}`
    pcPick.innerText=`Robot: ${pc}`
    if ((pc === 'rock' && player === 'scissors') || (pc === 'paper' && player === 'rock')||(pc==='scissors'&&player==='paper')){
        console.log('u lose');
        pcScore++;
        pcSpan.innerText=pcScore;
    } else if ((pc === 'rock' && player === 'paper') || (pc === 'paper' && player === 'scissors')||(pc==='scissors'&&player==='rock')) {
        console.log('u win');
        playerScore++;
        playerSpan.innerText=playerScore;
    } else{
        console.log('draw')
    }
    if(playerScore+pcScore==5){
        if(playerScore>pcScore){
            playerPick.innerText="player wins";
        }else{
            pcPick.innerText="machine wins";
        }
        playerScore=0;
        pcScore=0;
        playerSpan.innerText=playerScore;
        pcSpan.innerText=pcScore;
        
    }
}