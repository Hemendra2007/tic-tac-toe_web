let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function handleCellClick(event) {
    const cell = event.target;
    const cellIndex = cell.id.split("-")[1];

    if (board[cellIndex] !== "" || !gameActive) {
        return;
    }

    board[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWin()) {
        displayWinner(currentPlayer);
        gameActive = false;
        return;
    }

    if (checkDraw()) {
        displayWinner("Draw");
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]            
    ];

    return winConditions.some(condition => {
        return condition.every(index => board[index] === currentPlayer);
    });
}

function checkDraw() {
    return board.every(cell => cell !== "");
}

function displayWinner(winner) {
    if (winner === "Draw") {
        alert("It's a draw!");
    } else {
        alert(`Player ${winner} wins!`);
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    document.querySelectorAll(".cell").forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("X", "O");
    });
}

document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

document.getElementById("resetButton").addEventListener("click", resetGame);

console.log("Tic Tac Toe game logic initialized!");
