import React, { useEffect } from "react";
import { animated, useSprings } from "react-spring";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import {
  setGuessedWord,
  setEngId,
  setRusId,
  getWordsFromServer
} from "./../../redux/action-creators/games";

const WordsGame = ({
  getWordsFromServer,
  engId,
  rusId,
  setGuessedWord,
  setEngId,
  setRusId,
  wordsEng,
  wordsRus
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
        margin: !item.guessed ? 0 : 0,
        marginBottom: !item.guessed ? 0 : 0
      }
    }))
  );

  const springsRus = useSprings(
    wordsRus.length,
    wordsRus.map(item => ({
      from: {
        opacity: 0
      },
      to: {
        opacity: !item.guessed ? 1 : 0,
        height: !item.guessed ? 50 : 0,
        marginTop: !item.guessed ? 0 : 0,
        marginBottom: !item.guessed ? 0 : 0,
        color: !item.guessed ? "black" : "white"
      }
    }))
  );

  const handleClick = code => {
    const lang = code.substring(0, 3);
    const id = code.substring(3, code.length);
    if (lang === "eng") {
      if (id === rusId) {
        setGuessedWord(id);
        setEngId("");
        setRusId("");
      } else {
        setEngId(id);
      }
    } else if (lang === "rus") {
      if (id === engId) {
        setGuessedWord(id);
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
      {/* {words.map(word => (
        <div className="row justify-content-center" key={word.engId}>
          <div className="col-3">
            <button
              name="eng"
              onClick={() => handleClick(`eng${word.engId}`)}
              className={`btn guess-word font-weight-bold mt-2 ${
                word.engId === engId ? "btn-success" : "btn-info"
              }`}
            >
              {word.eng}
            </button>
          </div>
          <div className="col-3 offset-2">
            <button
              name="rus"
              onClick={() => handleClick(`rus${word.rusId}`)}
              className={`btn guess-word font-weight-bold mt-2 ${
                word.rusId === rusId ? "btn-success" : "btn-primary"
              }`}
            >
              {word.rus}
            </button>
          </div>
        </div>
      ))} */}
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
  wordsRus: state.games.wordsRus
});

export default connect(
  mapStateToProps,
  { setGuessedWord, setEngId, setRusId, getWordsFromServer }
)(WordsGame);
