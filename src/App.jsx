import { useEffect, useState } from "react";

function App()
{

  const[count,setCount]=useState(0);
  useEffect(()=>{
    console.log("hello world")
  },[])
  return(
    <>
    <h1>useEffect hook {count}</h1>
    <button onClick={()=>setCount(count+1)}>click me!</button>
    </>
  )
}
export default App;