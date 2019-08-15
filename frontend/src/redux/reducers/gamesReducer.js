import _ from "lodash";

import {
  GET_WORDS_FROM_SERVER,
  SET_GUESSED_WORD,
  SET_ENG_ID,
  SET_RUS_ID
} from "../action-creators/actionTypes";

const initialState = { engId: "", rusId: "", wordsEng: [], wordsRus: [] };

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_WORDS_FROM_SERVER:
      const engWords = [];
      const rusWords = [];

      payload.forEach(word => {
        engWords.push({ engId: word._id, eng: word.eng, guessed: false });
        rusWords.push({ rusId: word._id, rus: word.rus, guessed: false });
      });

      return {
        ...state,
        wordsEng: _.shuffle(engWords),
        wordsRus: _.shuffle(rusWords),
        engId: "",
        rusId: ""
      };
    case SET_GUESSED_WORD: {
      return {
        ...state,
        words: payload,
        wordsEng: state.wordsEng.map(word => {
          if (word.engId === payload) {
            word.guessed = true;
          }
          return word;
        }),
        wordsRus: state.wordsRus.map(word => {
          if (word.rusId === payload) {
            word.guessed = true;
          }
          return word;
        })
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
