import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controlled as CodeMirror } from "react-codemirror2";
import { htmlUpdated } from "../store/actions";

let uploadTimeout;

function HtmlCodes() {
  const stateHtml = useSelector((state) => state.codes.html);
  const [state, setState] = useState(stateHtml);
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
      dispatch(htmlUpdated(val));
    }, 500);
    // dispatch(htmlUpdated(val));
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
          src="/icons/html-icon.svg"
          width="30px"
          alt="html-icon"
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
            mode: "xml",
            theme: "material",
            extraKeys: { "Ctrl-Space": "autocomplete" },
            lineWrapping: true,
            smartIndent: true,
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            autocorrect: true,
          }}
        />
      </div>
    </div>
  );
}

export default HtmlCodes;
