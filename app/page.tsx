"use client"
import React, { useState } from 'react';
import GameBoard from '../components/GameBoard/GameBoard';
import Header from '../components/Header/Header';
import ResetButton from '../components/ResetButton/ResetButton';
import Footer from '../components/Footer/Footer';

const rows = 6;
const columns = 7;

const initializeBoard = () => {
  return Array(columns).fill(null).map(() => Array(rows).fill(null));
};

const checkWinner = (board: any[][], player: number) => {
  const rows = board[0].length;
  const columns = board.length;

  // Horizontal Check
  for (let j = 0; j < rows - 3; j++) {
    for (let i = 0; i < columns; i++) {
      if (
        board[i][j] === player &&
        board[i][j + 1] === player &&
        board[i][j + 2] === player &&
        board[i][j + 3] === player
      ) {
        return true;
      }
    }
  }

  // Vertical Check
  for (let i = 0; i < columns - 3; i++) {
    for (let j = 0; j < rows; j++) {
      if (
        board[i][j] === player &&
        board[i + 1][j] === player &&
        board[i + 2][j] === player &&
        board[i + 3][j] === player
      ) {
        return true;
      }
    }
  }

  // Ascending Diagonal Check
  for (let i = 3; i < columns; i++) {
    for (let j = 0; j < rows - 3; j++) {
      if (
        board[i][j] === player &&
        board[i - 1][j + 1] === player &&
        board[i - 2][j + 2] === player &&
        board[i - 3][j + 3] === player
      ) {
        return true;
      }
    }
  }

  // Descending Diagonal Check
  for (let i = 3; i < columns; i++) {
    for (let j = 3; j < rows; j++) {
      if (
        board[i][j] === player &&
        board[i - 1][j - 1] === player &&
        board[i - 2][j - 2] === player &&
        board[i - 3][j - 3] === player
      ) {
        return true;
      }
    }
  }

  return false;
};

const Home = () => {
  const [boardState, setBoardState] = useState(initializeBoard());
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameStatus, setGameStatus] = useState('Game In-Progress');
  const [gameOver, setGameOver] = useState(false);

  const handleDiscDrop = (columnIndex:number) => {
    if (gameOver === true) {
      return;
    }
    const newBoardState = boardState.map(column => column.slice());
    for (let row = 0; row < rows; row++) {
      if (!newBoardState[columnIndex][row]) {
        newBoardState[columnIndex][row] = currentPlayer;
        break;
      }
    }

    if (checkWinner(newBoardState, currentPlayer)) {
      setGameOver(true);
      setGameStatus(`Player ${(() => {
        if (currentPlayer == 1){
            return (
                "Red"
            )
        }
        return "Blue";
        })()} wins!`);
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
    setBoardState(newBoardState);
  };

  const handleReset = () => {
    setGameOver(false);
    setBoardState(initializeBoard());
    setCurrentPlayer(1);
    setGameStatus('Game is ongoing');
  };

  return (
    <div className="container mx-auto p-4">
      <Header currentPlayer={currentPlayer} gameStatus={gameStatus} />
      <GameBoard rows={rows} columns={columns} boardState={boardState} onDiscDrop={handleDiscDrop} />
      <ResetButton onReset={handleReset} />
      <Footer />
    </div>
  );
};

export default Home;