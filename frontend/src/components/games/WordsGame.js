import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  removeGuessedWord,
  setEngId,
  setRusId,
  getWordsFromServer
} from './../../redux/action-creators/games';

const WordsGame = ({
  getWordsFromServer,
  engId,
  rusId,
  removeGuessedWord,
  setEngId,
  setRusId,
  wordsEng,
  wordsRus
}) => {
  useEffect(() => {
    getWordsFromServer();
  }, []);

  let words = [];

  for (let i = 0; i < wordsEng.length; i++) {
    words.push({ ...wordsEng[i], ...wordsRus[i] });
  }

  const handleClick = code => {
    const lang = code.substring(0, 3);
    const id = code.substring(3, code.length);
    if (lang === 'eng') {
      if (id === rusId) {
        removeGuessedWord(id);
        setEngId('');
        setRusId('');
      } else {
        setEngId(id);
      }
    } else if (lang === 'rus') {
      if (id === engId) {
        removeGuessedWord(id);
        setEngId('');
        setRusId('');
      } else {
        setRusId(id);
      }
    }
  };

  return (
    <div className='text-center'>
      <h1 className='text-center'>Words</h1>

      {words.map(word => (
        <div className='row' key={word.engId}>
          <div className='col-3'>
            <button
              name='eng'
              onClick={() => handleClick(`eng${word.engId}`)}
              className={`btn w-75 font-weight-bold mt-2 ${
                word.engId === engId ? 'btn-success' : 'btn-info'
              }`}
            >
              {word.eng}
            </button>
          </div>
          <div className='col-3'>
            <button
              name='rus'
              onClick={() => handleClick(`rus${word.rusId}`)}
              className={`btn w-75 font-weight-bold mt-2 ${
                word.rusId === rusId ? 'btn-success' : 'btn-primary'
              }`}
            >
              {word.rus}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

WordsGame.propTypes = {
  engId: PropTypes.string.isRequired,
  rusId: PropTypes.string.isRequired,
  removeGuessedWord: PropTypes.func.isRequired,
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
  { removeGuessedWord, setEngId, setRusId, getWordsFromServer }
)(WordsGame);
