import React from 'react';
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers"


function Guess({ letter, answer }) {
  const definedGuess = checkGuess(letter, answer)
  return (
    <>
      {range(5).map((_, index) => <span className={definedGuess ? `cell ${definedGuess[index].status}` : "cell"} key={index}>{letter ? letter[index] : undefined}</span>)}
    </>
  );
}

export default Guess;
