import { useState } from "react";

function App()
{
  const [value,setValue]=useState("")
  const [pass,setPassword]=useState("")
  return(
    <>
    <h2>onChange get value</h2>
    <input type="text"  value={value} placeholder="enter your name" onChange={(event)=>setValue(event.target.value)}/>
    <h3>{value}</h3>
    <input type="password"  pass={pass} placeholder="enter your password" onChange={(event)=>setPassword(event.target.value)}/>
    <h3>{pass}</h3>
    <button onClick={()=>{setValue("");setPassword("")}}>click</button>
    </>
  )
}
export default App;