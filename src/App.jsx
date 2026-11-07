import { useRef } from "react";
import User from "./User";

function App() {
  let inputRef = useRef(null);

  let updateInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.focus();
  };

  return (
    <>
      <h1>forwardRef in React</h1>

      <User ref={inputRef} />

      <button onClick={updateInput}>Click</button>
    </>
  );
}

export default App;