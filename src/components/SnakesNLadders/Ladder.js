// src/Ladder.js
import React from 'react';
import './style.css';

const Ladder = ({ rungs }) => {
  return (
    <div className="ladder">
      {rungs.map((rung, index) => (
        <div
          key={index}
          className="rung"
          style={{ backgroundColor: rung.color, height: rung.height }}
        />
      ))}
    </div>
  );
};

export default Ladder;
