import React from 'react';

const Cell = ({ cellState }) => {
  return (
    <div className={`cell ${cellState === 1 ? 'player1' : cellState === 2 ? 'player2' : ''}`}>
    </div>
  );
};

export default Cell;