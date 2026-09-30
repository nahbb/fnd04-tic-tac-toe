// 1. VARIABLES (To store game data)
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

// The 8 possible winning line index combinations on a 3x3 grid
const winLines = [, [3, 4, 5], [6, 7, 8], // Rows, [1, 4, 7], [2, 5, 8], // Columns, [2, 4, 6]             // Diagonals
];

const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');

// 2. FUNCTIONS (Reusable logic blocks)
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedIndex = parseInt(clickedCell.getAttribute('data-index'));

    // 4. CONDITIONALS: Stop if cell is taken or game is over
    if (board[clickedIndex] !== '' || !isGameActive) {
        return;
    }

    // Update data array and layout display text
    board[clickedIndex] = currentPlayer;
    clickedCell.innerText = currentPlayer;

    checkResult();
}

function checkResult() {
    let roundWon = false;

    // 3. LOOPS: Loop through all win combinations
    for (let i = 0; i < winLines.length; i++) {
        const combo = winLines[i];
        const a = board[combo[0]];
        const b = board[combo[1]];
        const c = board[combo[2]];

        if (a === '' || b === '' || c === '') {
            continue; 
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    // 4. CONDITIONALS: Handle game results
    if (roundWon) {
        statusDisplay.innerText = Player ${currentPlayer} Has Won! 🎉;
        isGameActive = false;
        return;
    }

    // Check for a tie game
    if (!board.includes('')) {
        statusDisplay.innerText = "Game ended in a tie! 🤝";
        isGameActive = false;
        return;
    }

    // Switch player using a ternary operator conditional
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerText = Player ${currentPlayer}'s turn;
}

// Attach event listeners to all 9 squares using a loop array method
cells.forEach(cell => cell.addEventListener
