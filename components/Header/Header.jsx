import React from 'react';

const Header = ({ currentPlayer, gameStatus }) => {
  return (
    <header className="header">
      <h1>Connect4</h1>
      <p>Current Player: {(() => {
        if (currentPlayer == 1){
            return("Red");
        }
        return ("Blue");
        })()}</p>
      <p>{gameStatus}</p>
    </header>
  );
};

export default Header;