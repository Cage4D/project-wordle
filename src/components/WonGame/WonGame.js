import React from 'react';

function WonGame({ length }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{length === 1 ? "1 guess" : `${length} guesses`}</strong>
      </p>
    </div>
  );
}

export default WonGame;
