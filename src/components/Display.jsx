import { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitCodeUpdated } from "../store/actions";

let htmlDoc;

function DisplayCodes() {
  const { html, css, javascript, liveAction, submitCode } = useSelector(
    (state) => ({
      html: state.codes.html,
      css: state.codes.css,
      javascript: state.codes.javascript,
      liveAction: state.codes.liveAction,
      submitCode: state.codes.submitCode,
    })
  );
  const [codeToDisplay, setCodeToDisplay] = useState({
    html: html,
    css: css,
    javascript: javascript,
  });
  const dispatch = useDispatch();
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const id = "codebox_root_main";
      const elemeExist = document.getElementById(id);
      if (elemeExist) document.body.removeChild(elemeExist);
      htmlDoc = document.createElement("div");
      document.body.appendChild(htmlDoc);
      htmlDoc.style.display = "none";
      htmlDoc.style.visibility = "hidden";
      htmlDoc.id = id;
      htmlDoc.innerHTML = html;
    }
  }, []);

  useEffect(() => {
    if (!liveAction) {
      setCodeToDisplay((e) => ({ ...e }));
    }
    if (submitCode || liveAction) {
      setCodeToDisplay({ html: html, css: css, javascript: javascript });
      htmlDoc.innerHTML = html;
      if (submitCode) dispatch(submitCodeUpdated(false));
    }
  }, [liveAction, html, submitCode, css, javascript, dispatch]);

  const ArrangeCode = `<head><style>${codeToDisplay.css}</style></head><body>${codeToDisplay.html}<script>${codeToDisplay.javascript}</script></body>`;

  const AllCodes = `data:text/html;charset=utf-8,${encodeURI(ArrangeCode)}`;

  return (
    <>
      <iframe
        ref={iframeRef}
        src={AllCodes}
        title="A display screen for result of codes"
        className="Display-editor"
      />
    </>
  );
}

export default memo(DisplayCodes);
