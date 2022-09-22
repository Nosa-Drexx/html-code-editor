import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSubmitCode } from "../actions";

function DisplayCodes() {
  const { html, css, javascript, liveAction, submitCode } = useSelector(
    (state) => ({
      html: state.html,
      css: state.css,
      javascript: state.javascript,
      liveAction: state.liveAction,
      submitCode: state.submitCode,
    })
  );
  const [codeToDisplay, setCodeToDisplay] = useState({
    html: html,
    css: css,
    javascript: javascript,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!liveAction) {
      setCodeToDisplay((e) => ({ ...e }));
    }
    if (submitCode || liveAction) {
      setCodeToDisplay({ html: html, css: css, javascript: javascript });
      if (submitCode) dispatch(changeSubmitCode(false));
    }
  }, [liveAction, html, submitCode, css, javascript, dispatch]);

  const ArrangeCode = `<head><style>${codeToDisplay.css}</style></head><body>${codeToDisplay.html}<script>${codeToDisplay.javascript}</script></body>`;

  const AllCodes = `data:text/html;charset=utf-8,${encodeURI(ArrangeCode)}`;

  return (
    <>
      <iframe
        src={AllCodes}
        title="A display screen for result of codes"
        className="Display-editor"
      />
    </>
  );
}

export default memo(DisplayCodes);
