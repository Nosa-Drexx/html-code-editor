import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { codeUpdated, JAVASCRIPT_UPDATED } from "../actions";
import CodeEditor from "@uiw/react-textarea-code-editor";

function JavaScriptCodes() {
  const stateJavaScript = useSelector((state) => state.javascript);
  const [state, setState] = useState(stateJavaScript);
  const dispatch = useDispatch();

  const textValue = (e) => {
    setState(e.target.value);

    dispatch(codeUpdated(JAVASCRIPT_UPDATED, e.target.value));
  };

  return (
    <>
      <CodeEditor
        value={state}
        language="js"
        className="javascript-editor editor"
        onChange={textValue}
        onBlur={textValue}
        placeholder="JavaScript Code"
        style={{ overflow: "auto" }}
      />
    </>
  );
}

export default JavaScriptCodes;
