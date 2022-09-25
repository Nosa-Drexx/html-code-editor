import Split from "react-split";
import CssCodes from "./CssEditor";
import DisplayCodes from "./Display";
import HtmlCodes from "./HtmlEditor";
import JavaScriptCodes from "./JavaScriptEditor";

function HorizontallySplit() {
  return (
    <>
      <Split
        sizes={[35, 65]}
        direction={"horizontal"}
        style={{
          height: "90vh",
          display: "flex",
          flexFlow: "row nowrap",
        }}
        className="userLayout"
      >
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

        <div className="display-area">
          <DisplayCodes />
        </div>
      </Split>
    </>
  );
}

export default HorizontallySplit;
