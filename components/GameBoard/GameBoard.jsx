import React from 'react';
import Column from '../Column/Column'

const GameBoard = ({ rows, columns, boardState, onDiscDrop }) => {
  return (
    <div className="game-board">
      {Array(columns).fill(null).map((_, colIdx) => (
        <Column key={colIdx} columnIndex={colIdx} columnData={boardState[colIdx]} onDiscDrop={onDiscDrop} />
      ))}
    </div>
  );
};

export default GameBoard;