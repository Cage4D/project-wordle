import React from 'react';
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function UserGuesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => <p key={index} className="guess"><Guess answer={answer} letter={guesses[index] ? guesses[index].label: undefined}/></p>)}
    </div>
  )
}

export default UserGuesses;
