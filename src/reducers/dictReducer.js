import {
  GET_WORDS,
  GET_WORD,
  ADD_WORD,
  UPDATE_WORD,
  DELETE_WORD,
  APPS_LOADING,
  CANCEL
} from "../actions/types";

const initialState = {
  words: [],
  single_word: null,
  loading: false,
  isUpdate: false, // for the editform vs addform
  errmsg: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WORDS:
      // console.log("get words was called");
      return {
        ...state,
        words: action.payload,
        loading: false
      };
    case GET_WORD:
      // console.log(action.payload);
      return {
        ...state,
        single_word: action.payload,
        isUpdate: true
      };
    case UPDATE_WORD:
      return {
        ...state,

        words: state.words.map(word => {
          return word._id === action.payload._id ? action.payload : word;
        }),
        isUpdate: false
      };
    case DELETE_WORD:
      // console.log("deleted");
      // console.log(action.payload);
      return {
        ...state,
        words: state.words.filter(word => word._id !== action.payload)
      };
    case ADD_WORD:
      return {
        ...state,
        words: [action.payload, ...state.words]
      };
    case APPS_LOADING:
      return {
        ...state,
        loading: true
      };
    case CANCEL:
      // console.log("cancelled");
      return {
        ...state,
        isUpdate: false
      };

    default:
      return state;
  }
}
