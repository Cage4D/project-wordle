import React from 'react';
import WonGame from "../WonGame/WonGame";
import LostGame from "../LostGame/LostGame";

function GameOverBanner({ gameStatus, length, answer }) {
  return (
    <>
      {gameStatus === "lost" ? <LostGame answer={answer}/> : <WonGame length={length}/> }
    </>
  );
}

export default GameOverBanner;
