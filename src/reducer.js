import {
  CHANGE_LIVE_ACTION,
  CHANGE_SUBMIT_CODE,
  CSS_UPDATED,
  HTML_UPDATED,
  JAVASCRIPT_UPDATED,
} from "./actions";

const initialState = {
  html: "",
  css: "",
  javascript: "",
  liveAction: true,
  submitCode: false,
};

export const reducer = (state = initialState, action) => {
  if (action.type === CHANGE_LIVE_ACTION) {
    return { ...state, liveAction: action.payload };
  }

  if (action.type === CHANGE_SUBMIT_CODE) {
    return { ...state, submitCode: action.payload };
  }

  if (action.type === HTML_UPDATED) {
    return { ...state, html: action.payload };
  }

  if (action.type === CSS_UPDATED) {
    return { ...state, css: action.payload };
  }

  if (action.type === JAVASCRIPT_UPDATED) {
    return { ...state, javascript: action.payload };
  }
  return state;
};
