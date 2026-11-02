import { useState } from "react";

function App()
{

 const [color,setColor]=useState("red")
 

  return(
    <>
    <h1 style={{color}}>Styling :Inline style in react</h1>
    <button onClick={()=>setColor("yellow")}>change color</button>
    </>
  )
}

export default App;