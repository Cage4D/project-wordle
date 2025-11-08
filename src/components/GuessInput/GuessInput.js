import React from 'react';

function GuessInput({ addGuess, gameStatus }) {
  const [value, setValue] = React.useState("")
  return (
    <form className="guess-input-wrapper" onSubmit={event => {
      event.preventDefault()
      if (value.length !== 5) {
        window.alert("Your guess should be exactly 5 words")
        return
      }
      addGuess(value)
      setValue("")
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
      disabled={gameStatus !== "running"}
      required={true}
      id="guess-input" 
      type="text" 
      value={value}
      onChange={event => setValue(event.target.value.toUpperCase())}/>
    </form>
  );
}

export default GuessInput;
