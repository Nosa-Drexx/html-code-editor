import Split from "react-split";
import CssCodes from "./CssEditor";
import DisplayCodes from "./Display";
import HtmlCodes from "./HtmlEditor";
import JavaScriptCodes from "./JavaScriptEditor";

function VerticallySplit() {
  return (
    <>
      <Split
        sizes={[40, 60]}
        direction={"vertical"}
        style={{
          height: "90vh",
          display: "flex",
          flexFlow: "column nowrap",
        }}
        className="userLayout"
      >
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

        <div className="display-area">
          <DisplayCodes />
        </div>
      </Split>
    </>
  );
}

export default VerticallySplit;
