import {
  GET_WORDS_FROM_SERVER,
  REMOVE_GUESSED_WORD,
  SET_ENG_ID,
  SET_RUS_ID
} from '../action-creators/actionTypes';
import shuffle from '../../utils/shuffle';

const initialState = { engId: '', rusId: '', wordsEng: [], wordsRus: [] };

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_WORDS_FROM_SERVER:
      const engWords = [];
      const rusWords = [];
      payload.map(word => {
        engWords.push({ engId: word._id, eng: word.eng });
        rusWords.push({ rusId: word._id, rus: word.rus });
      });

      const shuffledEng = shuffle(engWords);
      const shuffledRus = shuffle(rusWords);

      return {
        ...state,
        wordsEng: shuffledEng,
        wordsRus: shuffledRus,
        engId: '',
        rusId: ''
      };
    case REMOVE_GUESSED_WORD: {
      return {
        ...state,
        words: payload,
        wordsEng: state.wordsEng.filter(word => word.engId !== payload),
        wordsRus: state.wordsRus.filter(word => word.rusId !== payload)
      };
    }
    case SET_ENG_ID: {
      return {
        ...state,
        engId: payload
      };
    }
    case SET_RUS_ID: {
      return {
        ...state,
        rusId: payload
      };
    }
    default:
      return state;
  }
};
