const cell = document.querySelectorAll(".cell");
cell.forEach(cell => {
    cell.innerHTML("x")
    cell.addEventListener("click",()=>{
        gameFlow()
    })
})

console.log(gameboard.grid)
gameboard.grid.forEach(element => console.log(element))


//game board module
const gameboard = (() => {
    let grid=new Array[9];
    
    const insertArray=(userSelection)=>{
        grid.push(userSelection)
    }
    return {
      insertArray,
    };
  })();

//control gameflow module
const gameFlow = (() => {
    //when component is clicked, push it to gameboard function
    const insertToArray = ()=> gameboard.insertArray("x")
    //it will be the other players turn
    const insertArray=(userSelection)=>{
        grid.push(userSelection)
    }
    return {
      insertArray,
    };
})();

function display_input(square){ 
    if ( player_one == 1 ){
        document.getElementById(square).innerHTML = "X";
        player_one = 0;
    } else {
        document.getElementById(square).innerHTML = "O";    
        player_one = 1;
    }   
}
//player factory function
const player = (sign) => {
    let _sign = sign;
    return Object.assign({}, sign);
}