import React from 'react';
import './App.css';

function calculateWinner(squares: any): 'X' | 'O' | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


function getCurrentMove(squares: string[]): 'X' | 'O' {
    const moveNumber = squares.filter(Boolean).length;
    return moveNumber % 2 === 0 ? 'X' : 'O';
}

function App() {
    const [squares, setSquares] = React.useState(Array(9).fill(null));

    const winner = calculateWinner(squares);

    function selectedSquare(i: number) {
        if (winner || squares[i]) return;
        const squaresCopy = [...squares];
        squaresCopy[i] = getCurrentMove(squares);
        setSquares(squaresCopy);
    }

    function renderSquare(i: number) {
        return (
            <button className='square'
                    key={i}
                    onClick={() => selectedSquare(i)}>
                <span>
                    {squares[i]}
                </span>
            </button>
        );
    }

    return (
        <div className='App'>
            <h1>{winner ? `Winner: ${winner}` : 'Tic - Tac - Toe'}</h1>
            <div className='game-board'>
                {[...Array(9)].map((_, i) => renderSquare(i))}
            </div>
        </div>
    );
}

export default App;
