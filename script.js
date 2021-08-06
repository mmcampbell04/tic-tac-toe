const playerFactory = (marker) => {
    return {
        marker
    }
}


const gameFlow = (() => {
    // invoke players
const playerOne = playerFactory("cross");
const playerTwo = playerFactory("circle");
let playerOneTurn

const boardCells = document.querySelectorAll('[data-cell]');

const startGame = () => {
    playerOneTurn = true;
    boardCells.forEach(cell => {
    cell.addEventListener("click", eventHandlers, { once: true })
    })
}


const eventHandlers = (e) => {
    const cell = e.target;
    const currentClass = playerOneTurn ? playerOne.marker : playerTwo.marker
    placeMarker(cell, currentClass)
    if(checkWinner(currentClass)) {
        gameOver(false);
    } else if (isDraw()) {
        gameOver(true)
    } else {  
        changeTurns();
    }
    
}

const placeMarker = (cell, currentClass) => {
    cell.classList.add(currentClass);
}

const changeTurns = () => {
    playerOneTurn = !playerOneTurn;
    
}

 // winning conditions
 const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const checkWinner = (currentClass) => {
    // if current class is inside each cell in each of the combo, then its a win 
    return winningCombos.some(combo => {
        return combo.every(index => {
            return boardCells[index].classList.contains(currentClass);
        })
    })

    
}

const isDraw = () => {
    return Array.from(boardCells).every(cell => {
        return cell.classList.contains(playerOne.marker) 
        || cell.classList.contains(playerTwo.marker)

    })
}

const winningMessageText = document.querySelector(".winning-message");
const gameOverMessage = document.querySelector(".game-over");

const gameOver = (draw) => {
    if (draw) {
        winningMessageText.innerText = "Draw!"
    }
    else {
        winningMessageText.innerText = `${playerOneTurn ? "Player X" : "Player O"} Wins!`
    }

    gameOverMessage.classList.add("show");
}

const resetBoard = () => {
    gameOverMessage.classList.remove("show");
    boardCells.forEach(cell => {
        cell.classList.remove(playerOne.marker);
        cell.classList.remove(playerTwo.marker);
        cell.removeEventListener("click", eventHandlers);
    })

    startGame()
    
}

const resetButton = document.querySelector("button");
    resetButton.addEventListener("click", resetBoard);



return {
    startGame,
    eventHandlers,
    placeMarker,
    changeTurns,
    checkWinner,
    isDraw,
    gameOver,
    resetBoard,

}

})();



gameFlow.startGame()
  
   






