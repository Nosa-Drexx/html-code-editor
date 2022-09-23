import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  html: "",
  css: "",
  javascript: "",
  liveAction: true,
  submitCode: false,
};

export const codeSlice = createSlice({
  name: "codes",
  initialState,
  reducers: {
    updateHtml: (state, action) => {
      state.html = action.payload; // mutation because reduxtoolkit uses immer under the hooks which allows mutation
    },
    updateCss: (state, action) => {
      state.css = action.payload;
    },
    updateJavascript: (state, action) => {
      state.javascript = action.payload;
    },
    liveActionUpdated: (state, action) => {
      state.liveAction = action.payload;
    },
    submitCodeUpdated: (state, action) => {
      state.submitCode = action.payload;
    },
  },
});
