
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "sonu kumar",
    age: 31,
    city: "new delhi"
  });

  const handleName = (val) => {
    setData({ ...data, name: val });
  };

  return (
    <>
      <h1>Update Object in React</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={data.name}
        onChange={(e) => handleName(e.target.value)}
      />

      <h2>Name: {data.name}</h2>
      <h2>Age: {data.age}</h2>
      <h2>City: {data.city}</h2>
    </>
  );
}

export default App;
