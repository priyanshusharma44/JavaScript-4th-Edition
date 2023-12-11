let cells = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset-button");
let arrow = document.createElement("div");
arrow.className = "arrow";
document.body.appendChild(arrow);

// Determine whose turn to play (X or O)
let turnO = true;

// Win patterns
const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (!cell.innerText) { // Check if the cell is empty before updating
            cell.innerText = turnO ? "O" : "X";
            cell.disabled = true;
            turnO = !turnO; // Switch turns

            // Check for a win
            if (checkWin()) {
                displayWinner(cell.innerText);
            }
        }
    });
});

// Reset button functionality
reset.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.innerText = "";
        cell.disabled = false;
    });
    arrow.style.display = "none"; // Hide arrow on reset
});

// Function to check for a win
function checkWin() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            cells[a].innerText &&
            cells[a].innerText === cells[b].innerText &&
            cells[a].innerText === cells[c].innerText
        ) {
            showArrow(cells[a], cells[b], cells[c]);
            return true;
        }
    }
    return false;
}

// Function to display winner and show modal
function displayWinner(winner) {
    const modal = document.getElementById("myModal");
    const winnerText = document.getElementById("winnerText");
    winnerText.innerText = `${winner} wins!`;
    modal.style.display = "block";

    const closeBtn = document.querySelector(".close");
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

// Function to show arrow
function showArrow(cell1, cell2, cell3) {
    const centerX = (cell1.offsetLeft + cell2.offsetLeft + cell3.offsetLeft) / 3;
    const centerY = (cell1.offsetTop + cell2.offsetTop + cell3.offsetTop) / 3;

    arrow.style.left = centerX + "px";
    arrow.style.top = centerY + "px";
    arrow.style.display = "block";
}