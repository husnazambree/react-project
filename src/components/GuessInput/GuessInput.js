import React from 'react';

function GuestInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event){
    event.preventDefault();

    if(tentativeGuess.length !== 5){
      alert('Please enter excatly 5 characters 💖');
      return;
    }

    // console.log({ tentativeGuess });

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
      required
      disabled={gameStatus !== 'running'}
      minLength={5}
      maxLength={5}
      value={tentativeGuess} onChange={(event) => { 
        const nextGuess = event.target.value.toUpperCase();
        setTentativeGuess(nextGuess);
      }} id="guess-input" type="text" />
    </form>
  );
}

export default GuestInput;
