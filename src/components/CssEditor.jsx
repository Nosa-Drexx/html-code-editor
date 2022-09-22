import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { codeUpdated, CSS_UPDATED } from "../actions";
import CodeEditor from "@uiw/react-textarea-code-editor";

function CssCodes() {
  const stateCss = useSelector((state) => state.css);
  const [state, setState] = useState(stateCss);
  const dispatch = useDispatch();

  const textValue = (e) => {
    setState(e.target.value);

    dispatch(codeUpdated(CSS_UPDATED, e.target.value));
  };

  return (
    <>
      <CodeEditor
        value={state}
        language="css"
        className="css-editor editor"
        onChange={textValue}
        onBlur={textValue}
        placeholder="Css Styles"
        style={{ overflow: "auto" }}
      />
    </>
  );
}

export default CssCodes;
