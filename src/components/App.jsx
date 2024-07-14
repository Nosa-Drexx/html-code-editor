import { useReducer } from "react";
import VerticallySplit from "./Vertical";
import LiveAction from "./UserSettings";
import { userLayoutPreference } from "./miniStore/minireducer";
import AnimatedDropdown from "./AnimatedDropdown";
import ConsoleLog from "./ConsoleLog";

function App() {
  const [perference, dispatchPerfercence] = useReducer(
    userLayoutPreference,
    <VerticallySplit />
  );

  return (
    <>
      <AnimatedDropdown />
      <LiveAction changeElementAlign={dispatchPerfercence} />
      {perference}
      <ConsoleLog />
    </>
  );
}

export default App;
