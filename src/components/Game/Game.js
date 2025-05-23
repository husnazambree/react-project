import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { checkGuess } from '../../game-helpers';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
// import GameOverBanner from '../GameOverBanner/GameOverBanner';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import Keyboard from '../Keyboard';
import { checkGuess } from '../../game-helpers';
import { format } from 'prettier';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.log({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  console.log({ answer });

  // running, won, lost
  const [gameStatus, setGameStatus] = React.useState('running');

  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    // setGuesses([...guesses, tentativeGuess]);
    // console.log('Received guess ', tentativeGuess);

    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
  }

  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      {/* {gameStatus} */}
      {/* <GuessResults guesses={guesses} answer={answer} /> */}

      <GuessResults validatedGuesses={validatedGuesses} />
      <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />

      <Keyboard validatedGuesses={validatedGuesses} />

      {gameStatus === 'won' && (
        // <WonBanner numOfGuesses={guesses.length} />
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}

      {gameStatus === 'lost' && (
        // <LostBanner answer={answer} />
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}

      {/* {gameStatus !== 'running' && (
        <GameOverBanner gameStatus={gameStatus} numOfGuesses={guesses.length} answer={answer} />
      )} */}

      {/* {gameStatus !== 'running' && (
        <button onClick={() => window.location.reload()}>
          Play Again
        </button>
      )} */}
    </>
  );
}

export default Game;
