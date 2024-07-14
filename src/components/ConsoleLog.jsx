import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VConsole from "vconsole";

const ConsoleLog = ({ consoleConfig = { theme: "dark" } }) => {
  const [vconsole, setVconsole] = useState(null);
  const stateJavaScript = useSelector((state) => state.codes.javascript);
  const { liveAction, submitCode } = useSelector((state) => ({
    liveAction: state.codes.liveAction,
    submitCode: state.codes.submitCode,
  }));

  const runConsole = () => {
    try {
      eval(stateJavaScript);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (vconsole && submitCode) {
      runConsole();
    }
  }, [submitCode]);

  useEffect(() => {
    if (vconsole && liveAction) {
      runConsole();
    }
  }, [stateJavaScript]);

  useEffect(() => {
    const vConsole = new VConsole(consoleConfig);
    const vConsoleBtn = document.getElementsByClassName("vc-switch")[0];
    if (vConsoleBtn) vConsoleBtn.innerHTML = "console";

    setVconsole(vConsole);
    return () => {
      if (vconsole) vconsole.destroy();
    };
  }, []);

  return <div className="console-tab"></div>;
};

export default ConsoleLog;
