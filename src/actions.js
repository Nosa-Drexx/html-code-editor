export const CHANGE_LIVE_ACTION = "CHANGE_LIVE_ACTION";
export const CHANGE_SUBMIT_CODE = "CHANGE_SUBMIT_CODE";
export const HTML_UPDATED = "HTML_UPDATED";
export const CSS_UPDATED = "CSS_UPDATED";
export const JAVASCRIPT_UPDATED = "JAVASCRIPT_UPDAED";

export function changeLiveAction(value) {
  return { type: CHANGE_LIVE_ACTION, payload: value };
}

export function codeUpdated(type, value) {
  return { type, payload: value };
}

export function changeSubmitCode(value) {
  return { type: CHANGE_SUBMIT_CODE, payload: value };
}
