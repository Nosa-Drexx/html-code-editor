import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeEditor from "@uiw/react-textarea-code-editor"; //for syntax highlighting
import { htmlUpdated } from "../store/actions";

function HtmlCodes() {
  const stateHtml = useSelector((state) => state.codes.html);
  const [state, setState] = useState(stateHtml);
  const dispatch = useDispatch();

  const textValue = (e) => {
    setState(e.target.value);

    dispatch(htmlUpdated(e.target.value));
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
