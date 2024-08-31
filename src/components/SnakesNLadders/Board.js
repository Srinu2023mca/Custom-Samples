import React from 'react';
import './style.css';

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

const Board = ({ players, positions }) => {
  const renderBoard = () => {
    const cells = [];
    for (let i = 100; i >= 1; i--) {
      const playerInCell = players.findIndex(player => positions[player] === i);
      const isSnake = Object.keys(snakes).includes(i.toString());
      const isLadder = Object.keys(ladders).includes(i.toString());
      
      cells.push(
        <div 
          key={i} 
          className={`cell ${isSnake ? 'snake' : ''} ${isLadder ? 'ladder' : ''}`}
        >
          {i}
          {playerInCell !== -1 && <div className={`player player-${playerInCell}`}></div>}
        </div>
      );
    }
    return cells;
  };

  return <div className="board">{renderBoard()}</div>;
};

export default Board;
