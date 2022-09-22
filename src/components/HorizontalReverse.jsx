import Split from "react-split";
import CssCodes from "./CssEditor";
import DisplayCodes from "./Display";
import HtmlCodes from "./HtmlEditor";
import JavaScriptCodes from "./JavaScriptEditor";

function HorizontallyReverseSplit() {
  return (
    <>
      <Split
        sizes={[70, 30]}
        direction={"horizontal"}
        style={{
          height: "95vh",
          display: "flex",
          flexFlow: "row nowrap",
        }}
        className="userLayout"
      >
        <div className="display-area">
          <DisplayCodes />
        </div>

        <Split
          minSize={8}
          direction={"vertical"}
          className="editor-area"
          style={{
            display: "flex",
            flexFlow: "column nowrap",
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

export default HorizontallyReverseSplit;
