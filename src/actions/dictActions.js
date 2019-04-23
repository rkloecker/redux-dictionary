import axios from "axios";
import {
  GET_WORDS,
  GET_WORD,
  ADD_WORD,
  UPDATE_WORD,
  DELETE_WORD,
  APPS_LOADING,
  CANCEL
} from "./types";

// for testing delay in api calls
// const pause = n => new Promise(r => setTimeout(r, n));

const API_URL = process.env.REACT_APP_URL;

export const getWords = () => async dispatch => {
  dispatch(setappsLoading());
  // await pause(1500);
  try {
    const json = await axios.get(`${API_URL}`);
    // console.log(json.data);
    if (json.data) {
      dispatch({
        type: GET_WORDS,
        payload: json.data
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getWord = id => async dispatch => {
  window.scrollTo(0, 0);
  try {
    const json = await axios.get(`${API_URL}/${id}`);
    // console.log(json);
    if (json.data) {
      dispatch({
        type: GET_WORD,
        payload: json.data
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addWord = word => async dispatch => {
  try {
    const json = await axios.post(`${API_URL}`, word);
    // console.log(json);
    dispatch({
      type: ADD_WORD,
      payload: json.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateWord = word => async dispatch => {
  try {
    const json = await axios.put(`${API_URL}/${word._id}`, word);
    // console.log(json);
    dispatch({
      type: UPDATE_WORD,
      payload: json.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteWord = id => async dispatch => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    // console.log(json);
    dispatch({
      type: DELETE_WORD,
      payload: id
    });
  } catch (error) {
    console.log(error);
  }
};

export const setappsLoading = () => {
  return {
    type: APPS_LOADING
  };
};

export const cancel = () => {
  return {
    type: CANCEL
  };
};
