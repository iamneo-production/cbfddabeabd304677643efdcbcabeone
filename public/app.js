        // Initial game state
        let cells = ['', '', '', '', '', '', '', '', ''];
        let currentPlayer = 'X';
        let result = document.querySelector('.result');
        let btns = document.querySelectorAll('.cell');
        let conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        // Function to handle player moves
        const ticTacToe = (element, index) => {
            if (cells[index] === '' && !checkWinner()) {
                cells[index] = currentPlayer;
                element.textContent = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                result.textContent = `Player ${currentPlayer}'s turn`;
                if (checkWinner()) {
                    result.textContent = `Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`;
                    btns.forEach(btn => btn.removeEventListener('click', cellClick));
                }
            }
        };

        // Function to check for a winner
        const checkWinner = () => {
            for (let condition of conditions) {
                const [a, b, c] = condition;
                if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                    return true;
                }
            }
            return false;
        };

        // Function to reset the game
        const resetGame = () => {
            cells = ['', '', '', '', '', '', '', '', ''];
            currentPlayer = 'X';
            result.textContent = `Player ${currentPlayer}'s turn`;
            btns.forEach(btn => {
                btn.textContent = '';
                btn.addEventListener('click', cellClick);
            });
        };

        const cellClick = (event) => {
            const index = Array.from(btns).indexOf(event.target);
            ticTacToe(event.target, index);
        };

        btns.forEach(btn => btn.addEventListener('click', cellClick));
        document.querySelector('#reset').addEventListener('click', resetGame);