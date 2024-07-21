"use client"
import React from 'react';

const ResetButton = ({ onReset }) => {
  return (
    <button className="mb-1 py-2 px-2 bg-sky-400 rounded hover:bg-sky-500 transition duration-200" onClick={onReset}>
      Reset Game
    </button>
  );
};

export default ResetButton;