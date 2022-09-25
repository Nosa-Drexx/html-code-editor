import { useDispatch, useSelector } from "react-redux";
import HorizontallySplit from "./Horizontal";
import HorizontallyReverseSplit from "./HorizontalReverse";
import VerticallySplit from "./Vertical";
import VerticallyReverseSplit from "./VerticalReverse";

import {
  HORIZONTAL,
  HORIZONTAL_REVERSE,
  VERTICAL,
  VERTICAL_REVERSE,
} from "./miniStore/miniActions";

import { liveActionUpdated, submitCodeUpdated } from "../store/actions";

function LiveAction({ changeElementAlign }) {
  const liveAction = useSelector((state) => state.codes.liveAction);
  const dispatch = useDispatch();

  function changeActions() {
    dispatch(liveActionUpdated(!liveAction));
  }

  function formatCodes() {
    dispatch(submitCodeUpdated(true));
  }

  function changeAlignsToVertical() {
    changeElementAlign({ type: VERTICAL, payload: <VerticallySplit /> });
  }
  function changeAlignsToHorizontal() {
    changeElementAlign({ type: HORIZONTAL, payload: <HorizontallySplit /> });
  }
  function changeAlignsToVerticalReverse() {
    changeElementAlign({
      type: VERTICAL_REVERSE,
      payload: <VerticallyReverseSplit />,
    });
  }

  function changeAlignsToHorizontalReverse() {
    changeElementAlign({
      type: HORIZONTAL_REVERSE,
      payload: <HorizontallyReverseSplit />,
    });
  }

  return (
    <>
      <div className="UserSettingsContainer" style={{ height: "10vh" }}>
        <div className="logo-holder"></div>
        <div className="align-btns">
          <button
            onClick={changeAlignsToVertical}
            className="vertical U-button"
          ></button>
          <button
            onClick={changeAlignsToVerticalReverse}
            className="vertical-reverse U-button"
          ></button>

          <button
            onClick={changeAlignsToHorizontal}
            className="horizontal U-button"
          ></button>

          <button
            onClick={changeAlignsToHorizontalReverse}
            className="horizontal-reverse U-button"
          ></button>

          <button className="run" onClick={formatCodes}>
            Run
          </button>

          <input
            type="checkbox"
            onChange={changeActions}
            checked={liveAction}
          />
        </div>
      </div>
    </>
  );
}

export default LiveAction;
