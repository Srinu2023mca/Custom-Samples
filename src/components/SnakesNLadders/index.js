import React, { useState } from 'react';
import Board from './Board';

const snakes = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};

const ladders = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100,
};

const Game = () => {
  const [positions, setPositions] = useState({ player1: 1, player2: 1 });
  const [currentPlayer, setCurrentPlayer] = useState('player1');
  const [diceRoll, setDiceRoll] = useState(null);
  const [winner, setWinner] = useState(null);

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);

    let newPosition = positions[currentPlayer] + roll;

    if (newPosition > 100) {
      newPosition = positions[currentPlayer];
    } else if (snakes[newPosition]) {
      newPosition = snakes[newPosition];
    } else if (ladders[newPosition]) {
      newPosition = ladders[newPosition];
    }

    setPositions(prev => ({ ...prev, [currentPlayer]: newPosition }));

    if (newPosition === 100) {
      setWinner(currentPlayer);
    } else {
      setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1');
    }
  };

  return (
    <div>
      <h1>Snakes and Ladders</h1>
      <Board players={['player1', 'player2']} positions={positions} />
      <div className="dice-container">
        <div className="dice">{diceRoll}</div>
      </div>
      {winner ? (
        <h2>{winner} wins!</h2>
      ) : (
        <div>
          <button 
            onClick={rollDice} 
            disabled={currentPlayer !== 'player1'}
          >
            Player 1 Roll Dice
          </button>
          <button 
            onClick={rollDice} 
            disabled={currentPlayer !== 'player2'}
          >
            Player 2 Roll Dice
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
