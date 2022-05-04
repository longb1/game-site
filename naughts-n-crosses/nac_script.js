const cell = document.querySelectorAll(".cell");
cell.forEach(cell => {
    cell.addEventListener("click",(e)=>{
        cell.classList.add("o");
    })
})

let gameboard = {grid:['x','o','x','x','o','x','o','x','x']}

console.log(gameboard.grid)
gameboard.grid.forEach(element => console.log(element))

// const Player = (name, level) => {
// let health = level * 2;
// const getLevel = () => level;
// const getName  = () => name;
// const die = () => {
//     // uh oh
// };
// const damage = x => {
//     health -= x;
//     if (health <= 0) {
//     die();
//     }
// };
// const attack = enemy => {
//     if (level < enemy.getLevel()) {
//     damage(1);
//     console.log(`${enemy.getName()} has damaged ${name}`);
//     }
//     if (level >= enemy.getLevel()) {
//     enemy.damage(1);
//     console.log(`${name} has damaged ${enemy.getName()}`);
//     }
// };
// return {attack, damage, getLevel, getName};
// };


// const jimmie = Player('jim', 10);
// const badGuy = Player('jeff', 5);
// jimmie.attack(badGuy);



// calculator.add(3,5); // 8
// calculator.sub(6,2); // 4
// calculator.mul(14,5534); // 77476