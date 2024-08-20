let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

function handleCellClick(event) {
    const cell = event.target;
    const cellIndex = cell.id.split("-")[1];

    if (board[cellIndex] !== "") {
        return;
    }

    board[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    console.log(board);
}

document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

console.log("Tic Tac Toe script initialized!");
