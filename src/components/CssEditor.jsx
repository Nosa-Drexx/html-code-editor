import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { cssUpdated } from "../store/actions";

function CssCodes() {
  const stateCss = useSelector((state) => state.codes.css);
  const [state, setState] = useState(stateCss);
  const dispatch = useDispatch();

  const textValue = (e) => {
    setState(e.target.value);

    dispatch(cssUpdated(e.target.value));
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
