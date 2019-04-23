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

const API_URL = process.env.REACT_APP_URL;

export const getWords = () => dispatch => {
  dispatch(setappsLoading());
  // scroll to form

  axios
    .get(`${API_URL}`)
    .then(res => {
      // console.log("getWords was called successfully");
      if (res.data) {
        dispatch({
          type: GET_WORDS,
          payload: res.data
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const getWord = id => dispatch => {
  window.scrollTo(0, 0);
  axios
    .get(`${API_URL}/${id}`)
    .then(res => {
      if (res.data) {
        // console.log("getWord was caled in action");
        // console.log(res.data);
        dispatch({
          type: GET_WORD,
          payload: res.data
        });
        // } else {
        //   dispatch({
        //     type: GET_ERROR,
        //     payload: "could not get single word"
        //   });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const addWord = word => dispatch => {
  axios
    .post(`${API_URL}`, word)
    .then(res =>
      dispatch({
        type: ADD_WORD,
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err);
    });
};

export const updateWord = word => dispatch => {
  axios
    .put(`${API_URL}/${word._id}`, word)
    .then(res => {
      dispatch({
        type: UPDATE_WORD,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteWord = id => dispatch => {
  axios
    .delete(`${API_URL}/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_WORD,
        payload: id
      })
    )
    .catch(err => {
      console.log(err);
    });
};

export const setappsLoading = () => {
  return {
    type: APPS_LOADING
  };
};

// export const getError = () => {
//   return {
//     type: GET_ERROR
//   };
// };

export const cancel = () => {
  return {
    type: CANCEL
  };
};
