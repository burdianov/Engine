import axios from "axios";

import {
  GET_WORDS_FROM_SERVER,
  SET_GUESSED_WORD,
  SET_ENG_ID,
  SET_RUS_ID,
  SET_GAME_OVER
} from "./actionTypes";

// get words from dictionary
export const getWordsFromServer = () => async dispatch => {
  try {
    const res = await axios.get("/api/user/dictionary");

    dispatch({
      type: GET_WORDS_FROM_SERVER,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};

// remove guessed word from redux state
export const setGuessedWord = wordId => async dispatch => {
  try {
    dispatch({
      type: SET_GUESSED_WORD,
      payload: wordId
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const setEngId = engId => async dispatch => {
  try {
    dispatch({
      type: SET_ENG_ID,
      payload: engId
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const setRusId = rusId => async dispatch => {
  try {
    dispatch({
      type: SET_RUS_ID,
      payload: rusId
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const setGameOver = () => async dispatch => {
  try {
    dispatch({
      type: SET_GAME_OVER
    });
  } catch (err) {
    console.error(err.message);
  }
};
