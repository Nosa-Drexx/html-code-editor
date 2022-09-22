import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { codeUpdated, HTML_UPDATED } from "../actions";
import CodeEditor from "@uiw/react-textarea-code-editor"; //for syntax highlighting

function HtmlCodes() {
  const stateHtml = useSelector((state) => state.html);
  const [state, setState] = useState(stateHtml);
  const dispatch = useDispatch();

  const textValue = (e) => {
    setState(e.target.value);

    dispatch(codeUpdated(HTML_UPDATED, e.target.value));
  };

  return (
    <>
      <CodeEditor
        value={state}
        language="xml"
        className="html-editor editor"
        onChange={textValue}
        onBlur={textValue}
        placeholder="HTML Markups"
        style={{ overflow: "auto" }}
      />
    </>
  );
}

export default HtmlCodes;
