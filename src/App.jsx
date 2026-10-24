import { useDebugValue, useState } from "react";

function App()
{
  const [value,setValue]=useState("")
  return(
    <>
    <h2>onChange get value</h2>
    <input type="text"  value={value} placeholder="enter your name" onChange={(event)=>setValue(event.target.value)}/>
    <h3>{value}</h3>
    <button onClick={()=>setValue("")}>click</button>
    </>
  )
}
export default App;