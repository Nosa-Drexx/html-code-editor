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
import { useEffect, useRef, useState } from "react";

function LiveAction({ changeElementAlign }) {
  const liveAction = useSelector((state) => state.codes.liveAction);
  const dispatch = useDispatch();
  const [showLayout, setShowLayout] = useState(false);
  const [rotateDeg, setRotateDeg] = useState(0);
  const [changeSyncIcon, setChangeSyncIconc] = useState(liveAction);
  const turnOnSyncRef = useRef(null);

  function changeActions() {
    dispatch(liveActionUpdated(!liveAction));
  }

  function formatCodes() {
    dispatch(submitCodeUpdated(true));
  }

  function changeAlignsToVertical() {
    setRotateDeg((prev) => (prev <= 180 ? 0 : 360));
    changeElementAlign({ type: VERTICAL, payload: <VerticallySplit /> });
  }
  function changeAlignsToHorizontal() {
    changeElementAlign({ type: HORIZONTAL, payload: <HorizontallySplit /> });
    setRotateDeg(270);
  }
  function changeAlignsToVerticalReverse() {
    changeElementAlign({
      type: VERTICAL_REVERSE,
      payload: <VerticallyReverseSplit />,
    });
    setRotateDeg(180);
  }

  function changeAlignsToHorizontalReverse() {
    changeElementAlign({
      type: HORIZONTAL_REVERSE,
      payload: <HorizontallyReverseSplit />,
    });
    setRotateDeg(90);
  }

  const turnOnSync = () => {
    const element = turnOnSyncRef.current;
    element.classList.add("rotate-sync");
    changeActions();
    setTimeout(() => {
      setChangeSyncIconc(!changeSyncIcon);
      element.classList.remove("rotate-sync");
    }, 1000);
  };

  useEffect(() => {
    const element = turnOnSyncRef.current;
    if (element) {
      element.classList.add("rotate-sync");
      setTimeout(() => {
        element.classList.remove("rotate-sync");
      }, 300);
    }
  }, []);

  return (
    <>
      <div className="UserSettingsContainer">
        <div className="logo-holder"></div>
        <div className="align-btns" onBlur={() => setShowLayout(false)}>
          <button
            className="layout-select-btn"
            onClick={() => setShowLayout(!showLayout)}
          >
            <img
              src="/icons/vertical-layout.png"
              alt="layout"
              width="15px"
              height={"15px"}
              style={{ transform: `rotate(${rotateDeg}deg)` }}
            />
          </button>
          <div className={`layout-btns ${showLayout ? "active" : ""}`}>
            <p>CHANGE VIEW</p>
            <div className="layout-container">
              <button
                onClick={changeAlignsToVertical}
                className={`vertical U-button ${
                  rotateDeg === 0 || rotateDeg === 360 ? "active-layout" : ""
                }`}
              ></button>

              <button
                onClick={changeAlignsToHorizontalReverse}
                className={`horizontal-reverse U-button ${
                  rotateDeg === 90 ? "active-layout" : ""
                }`}
              ></button>

              <button
                onClick={changeAlignsToVerticalReverse}
                className={`vertical-reverse U-button ${
                  rotateDeg === 180 ? "active-layout" : ""
                }`}
              ></button>

              <button
                onClick={changeAlignsToHorizontal}
                className={`horizontal U-button ${
                  rotateDeg === 270 ? "active-layout" : ""
                }`}
              ></button>
            </div>
          </div>

          <button className="run" onClick={formatCodes}>
            Run
          </button>
          <button onClick={turnOnSync} className="sync-btn" ref={turnOnSyncRef}>
            <img src="/icons/sync-icon.svg" alt="sync" width="20px" />
            <span
              className="sync-cancel"
              style={{
                opacity: `${liveAction ? 0 : 1}`,
                height: `${liveAction ? "0px" : "30px"}`,
              }}
            ></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default LiveAction;
