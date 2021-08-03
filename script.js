// create players & their turns 
const playerFactor = (player, mark) => {

    // player turn here - track which cell they put it in
const playerTurn = (board, cell) => { 
    const index = board.cells.findIndex(position => position === cell);


}

    // logic about not putting in filled cell 


    return { player, mark, playerTurn }
}

const playerOne = playerFactor(1, "X");
const playerTwo = playerFactor(2, "O");

console.log(playerOne.player);
console.log(playerTwo.mark);



//  create gameboard MODULE
const gameboard = (function(){
    let boardArray = [
        // ["X", "O", "X"],
        // ["X", "O", "X"],
        // ["X", "O", "X"],
        "X", "", "X",
        "X", "", "X",
        "X", "O", "",
    ];

    let boardCells = Array.from(document.querySelectorAll(".cell"));
    
    // link each cell with index of array 
    const boardRender = () => {
        for (let i = 0; i < boardArray.length; i++) {
            boardCells[i].textContent = boardArray[i];
            }

    }
    // reset board 
    const resetBoard = () => {
        boardArray = [
        "", "", "",
        "", "", "",
        "", "", "",
        ]
    }
    
   
    // check win combos
    const checkWinningCombos = () => {
        const winningCombos = [
            0, 1, 2,
            3, 4, 5,
            6, 7, 8,
            0, 3, 6,
            1, 4, 7,
            2, 5, 8,
            0, 4, 8,
            2, 4, 6
        ]
    }
    
})();



// tracking flow of game, 
const trackGameFlow = (function () {

    const endGameDisplay = document.querySelector(".game-over");

})();





