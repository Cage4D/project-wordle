import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput/GuessInput';
import UserGuesses from "../UserGuesses/UserGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import GameOverBanner from "../GameOverBanner/GameOverBanner"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameState] = React.useState("running")

  function addGuess(value) {
    const nextGuess = [...guesses, {label: value, id: crypto.randomUUID()}]
    setGuesses(nextGuess)
    if (value.toUpperCase() === answer) setGameState("won")
    else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost")
      return
    };
  }

  return (
    <>
      {gameStatus !== "running" && <GameOverBanner gameStatus={gameStatus} length={guesses.length} answer={answer}/>}
      <UserGuesses guesses={guesses} answer={answer}/>
      <GuessInput addGuess={addGuess} gameStatus={gameStatus}/>
    </>
  )
}

export default Game;
