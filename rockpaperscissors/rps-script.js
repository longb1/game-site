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
function playRound(){
    let pc=pcPlay(1,4)
    let player=window.prompt("your pick")
    console.log('robot picks '+pc)
    console.log('player picks '+player)
    if ((pc === 'rock' && player === 'scissors') || (pc === 'paper' && player === 'rock')||(pc==='scissors'&&player==='paper')){
        console.log('u lose')
    } else if ((pc === 'rock' && player === 'paper') || (pc === 'paper' && player === 'scissors')||(pc==='scissors'&&player==='rock')) {
        console.log('u win')
    } else{
        console.log('draw')
    }
}
function playgame(){
    
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}
// playgame()