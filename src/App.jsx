
import { useRef } from "react";

function App() {
  const inputref = useRef(null);

  const togglehandle = () => {
    if (inputref.current.style.display != "none") {
      inputref.current.style.display = "none";
    } else {
      inputref.current.style.display = "inline";
    }
  };

  return (
    <>
      <h1>Hide and Show Practice</h1>
      <h2 ref={inputref}>Sonu Kumar</h2>
      <button onClick={togglehandle}>Toggle</button>

      
    </>
  );
}

export default App;
