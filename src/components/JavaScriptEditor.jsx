import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { javascriptUpdated } from "../store/actions";

function JavaScriptCodes() {
  const stateJavaScript = useSelector((state) => state.codes.javascript);
  const [state, setState] = useState(stateJavaScript);
  const dispatch = useDispatch();

  const textValue = (e) => {
    setState(e.target.value);

    dispatch(javascriptUpdated(state));
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
