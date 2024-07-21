import React from 'react';
import Cell from '../Cell/Cell';

const Column = ({ columnIndex, columnData, onDiscDrop }) => {
  return (
    <div className="column" onClick={() => onDiscDrop(columnIndex)}>
      {columnData.map((cell, rowIdx) => (
        <Cell key={rowIdx} cellState={cell} />
      ))}
    </div>
  );
};

export default Column;