import { useState } from "react";

function App()
{
  const [fruit,setFruit]=useState("apple")
  return(
    <>
      <h1>use state in react</h1>
      <h5>{fruit}</h5>
      <button onClick={()=>setFruit("banana")}>change fruit</button>
    </>
  )
}
export default App;