import {
  HORIZONTAL,
  HORIZONTAL_REVERSE,
  VERTICAL,
  VERTICAL_REVERSE,
} from "./miniActions";

export function userLayoutPreference(state, action) {
  if (action.type === VERTICAL) {
    return action.payload;
  }
  if (action.type === VERTICAL_REVERSE) {
    return action.payload;
  }
  if (action.type === HORIZONTAL) {
    return action.payload;
  }
  if (action.type === HORIZONTAL_REVERSE) {
    return action.payload;
  }
  return state;
}
