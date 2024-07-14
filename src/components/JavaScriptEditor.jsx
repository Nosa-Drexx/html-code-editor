import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { javascriptUpdated } from "../store/actions";

import { Controlled as CodeMirror } from "react-codemirror2";

let uploadTimeout;

function JavaScriptCodes() {
  const stateJavaScript = useSelector((state) => state.codes.javascript);

  const [state, setState] = useState(stateJavaScript);
  const dispatch = useDispatch();

  const textValue = (editor, data, val) => {
    setState(val);
    const lastChar = val[val.length - 1];

    if (
      lastChar !== ";" &&
      lastChar !== "" &&
      lastChar !== " " &&
      lastChar !== "\n" &&
      lastChar !== "\r" &&
      lastChar !== ")" &&
      lastChar !== "]" &&
      lastChar !== "}"
    ) {
      editor.showHint({ completeSingle: false });
    }
    clearTimeout(uploadTimeout);
    //debounce before setting state.
    uploadTimeout = setTimeout(() => {
      dispatch(javascriptUpdated(val));
    }, 1000);
    dispatch(javascriptUpdated(state));
  };

  useEffect(() => {
    return () => {
      clearTimeout(uploadTimeout);
    };
  }, []);

  return (
    <div className="code-container-wrapper">
      <div className="code-container-title">
        <img
          src="/icons/javascript-icon.svg"
          width="30px"
          alt="javascript-icon"
          height={"30px"}
        />
        <div className="code-container-title-text"></div>
      </div>
      <div className="code-container">
        <CodeMirror
          value={state}
          onBeforeChange={textValue}
          options={{
            lineNumbers: true,
            mode: "javascript",
            theme: "material",
            extraKeys: { "Ctrl-Space": "autocomplete" },
            lineWrapping: true,
            smartIndent: true,
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            autocorrect: true,
          }}
          placeholder="Enter JavaScript code here"
        />
      </div>
    </div>
  );
}

export default JavaScriptCodes;
