import React, { useEffect } from "react";
import _ from "lodash";
import { animated, useSprings, useSpring } from "react-spring";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import {
  setGuessedWord,
  setEngId,
  setRusId,
  getWordsFromServer,
  setGameOver
} from "./../../redux/action-creators/games";

const WordsGame = ({
  getWordsFromServer,
  engId,
  rusId,
  setGuessedWord,
  setEngId,
  setRusId,
  wordsEng,
  wordsRus,
  gameOver,
  setGameOver
}) => {
  useEffect(() => {
    getWordsFromServer();
  }, [getWordsFromServer]);

  const springsEng = useSprings(
    wordsEng.length,
    wordsEng.map(item => ({
      from: {
        opacity: 0
      },
      to: {
        opacity: !item.guessed ? 1 : 0,
        height: !item.guessed ? 50 : 0,
        marginTop: !item.guessed ? 5 : 0,
        color: !item.guessed ? "black" : "white"
      }
    }))
  );

  const springsRus = useSprings(
    wordsRus.length,
    wordsRus.map(item => ({
      from: {},
      to: {
        opacity: !item.guessed ? 1 : 0,
        height: !item.guessed ? 50 : 0,
        marginTop: !item.guessed ? 5 : 0,
        color: !item.guessed ? "black" : "white"
      }
    }))
  );

  const gameOverSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });

  const handleClick = code => {
    const lang = code.substring(0, 3);
    const id = code.substring(3, code.length);
    if (lang === "eng") {
      if (id === rusId) {
        setGuessedWord(id);
        const leftWords = _.filter(wordsEng, function(o) {
          return !o.guessed;
        }).length;

        if (leftWords === 0) {
          setGameOver();
        }
        setEngId("");
        setRusId("");
      } else {
        setEngId(id);
      }
    } else if (lang === "rus") {
      if (id === engId) {
        setGuessedWord(id);
        const leftWords = _.filter(wordsEng, function(o) {
          return !o.guessed;
        }).length;

        if (leftWords === 0) {
          setGameOver();
        }
        setEngId("");
        setRusId("");
      } else {
        setRusId(id);
      }
    }
  };

  return (
    <div className="page">
      <h1 className="text-center">Words</h1>
      {!gameOver && (
        <div className="cards">
          <div className="cards-row">
            {wordsEng.map((word, index) => (
              <animated.div
                key={word.eng}
                style={springsEng[index]}
                className={`card ${word.engId === engId ? "guessed-word" : ""}`}
                onClick={() => handleClick(`eng${word.engId}`)}
              >
                {word.eng}
              </animated.div>
            ))}
          </div>
          <div className="cards-row">
            {wordsRus.map((word, index) => (
              <animated.div
                key={word.rus}
                style={springsRus[index]}
                className={`card ${word.rusId === rusId ? "guessed-word" : ""}`}
                onClick={() => handleClick(`rus${word.rusId}`)}
              >
                {word.rus}
              </animated.div>
            ))}
          </div>
        </div>
      )}
      {gameOver && (
        <animated.div className="game-over" style={gameOverSpring}>
          <h1>Game Over</h1>
        </animated.div>
      )}
    </div>
  );
};

WordsGame.propTypes = {
  engId: PropTypes.string.isRequired,
  rusId: PropTypes.string.isRequired,
  setGuessedWord: PropTypes.func.isRequired,
  getWordsFromServer: PropTypes.func.isRequired,
  setEngId: PropTypes.func.isRequired,
  setRusId: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  engId: state.games.engId,
  rusId: state.games.rusId,
  wordsEng: state.games.wordsEng,
  wordsRus: state.games.wordsRus,
  gameOver: state.games.gameOver
});

export default connect(
  mapStateToProps,
  { setGuessedWord, setEngId, setRusId, getWordsFromServer, setGameOver }
)(WordsGame);
