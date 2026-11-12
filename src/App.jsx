import { useId, useState } from "react";

function App() {
  const id = useId();
  const [name, setName] = useState("");

  return (
    <>
      <h1>useId in React</h1>

      <h3>Generated Unique ID: {id}</h3>

      <label htmlFor={id}>Enter Name:</label>

      <input
        type="text"
        id={id}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Your Name: {name}</h3>
    </>
  );
}

export default App;