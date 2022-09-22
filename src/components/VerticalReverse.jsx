import Split from "react-split";
import CssCodes from "./CssEditor";
import DisplayCodes from "./Display";
import HtmlCodes from "./HtmlEditor";
import JavaScriptCodes from "./JavaScriptEditor";

function VerticallyReverseSplit() {
  return (
    <>
      <Split
        sizes={[70, 30]}
        direction={"vertical"}
        style={{
          height: "95vh",
          display: "flex",
          flexFlow: "column nowrap",
        }}
        className="userLayout"
      >
        <div className="display-area">
          <DisplayCodes />
        </div>

        <Split
          minSize={8}
          className="editor-area"
          style={{
            display: "flex",
            flexFlow: "row nowrap",
          }}
        >
          <HtmlCodes />
          <CssCodes />
          <JavaScriptCodes />
        </Split>
      </Split>
    </>
  );
}

export default VerticallyReverseSplit;
