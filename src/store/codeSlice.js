import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageItem, setLocalStorageItem } from "../utils/storage";

const codeBoxStorage = getLocalStorageItem("code-box");

const htmlFromLocalStorage = codeBoxStorage?.html ? codeBoxStorage.html : "";
const cssFromLocalStorage = codeBoxStorage?.css ? codeBoxStorage.css : "";
const javascriptFromLocalStorage = codeBoxStorage?.javascript
  ? codeBoxStorage.javascript
  : "";

const initialState = {
  html: htmlFromLocalStorage,
  css: cssFromLocalStorage,
  javascript: javascriptFromLocalStorage,
  liveAction: true,
  submitCode: false,
};

const updateLocalStorage = (state, payload, key) => {
  const codeBox = {
    html: state.html,
    css: state.css,
    javascript: state.javascript,
    [key]: payload,
  };
  setLocalStorageItem("code-box", codeBox);
};

export const codeSlice = createSlice({
  name: "codes",
  initialState,
  reducers: {
    updateHtml: (state, action) => {
      state.html = action.payload; // mutation because reduxtoolkit uses immer under the hooks which allows mutation
      updateLocalStorage(state, action.payload, "html");
    },
    updateCss: (state, action) => {
      state.css = action.payload;
      updateLocalStorage(state, action.payload, "css");
    },
    updateJavascript: (state, action) => {
      state.javascript = action.payload;
      updateLocalStorage(state, action.payload, "javascript");
    },
    liveActionUpdated: (state, action) => {
      state.liveAction = action.payload;
    },
    submitCodeUpdated: (state, action) => {
      state.submitCode = action.payload;
    },
  },
});
