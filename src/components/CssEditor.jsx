import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cssUpdated } from "../store/actions";

import { Controlled as CodeMirror } from "react-codemirror2";

let uploadTimeout;

function CssCodes() {
  const stateCss = useSelector((state) => state.codes.css);
  const [state, setState] = useState(stateCss);
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
      dispatch(cssUpdated(val));
    }, 500);
    // dispatch(cssUpdated(val));
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
          src="/icons/css-icon.svg"
          width="30px"
          alt="css-icon"
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
            mode: "css",
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

export default CssCodes;
