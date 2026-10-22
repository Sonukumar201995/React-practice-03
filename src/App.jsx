import { useState } from "react"

function App()
{
  const [count,setCount]=useState(0);
  const [display,setDisplay]=useState(true)
  return(
    <>
    <h1>multiple condition</h1>
    <h2>{count}</h2>
    <button onClick={()=>setDisplay(!display)}>toggle</button>
    <button onClick={()=>setCount(count+1)}>counter</button>

    
     { display ? <h3>sonu kumar</h3> :null}
       {
      count==0 ? <h2>condition 0</h2>
      :count==1 ? <h2>condition 1</h2>
      :<h2>other condition</h2>
    }
    </>
  )
}

export default App;