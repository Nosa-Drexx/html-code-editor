import { createAction } from "@reduxjs/toolkit";

//NOT NECCESSARY WITH REDUX TOOLKIT BUT DEFINING MY ACTIONS TO MAKE CODE NEATER

export const htmlUpdated = createAction("codes/updateHtml", (val) => ({
  payload: val,
}));

export const cssUpdated = createAction("codes/updateCss", (val) => ({
  payload: val,
}));

export const javascriptUpdated = createAction(
  "codes/updateJavascript",
  (val) => ({
    payload: val,
  })
);

export const liveActionUpdated = createAction(
  "codes/liveActionUpdated",
  (val) => ({
    payload: val,
  })
);

export const submitCodeUpdated = createAction(
  "codes/submitCodeUpdated",
  (val) => ({
    payload: val,
  })
);
