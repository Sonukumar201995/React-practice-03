import { useState } from "react";

function App()
{
  
  const [display,setDisplay]=useState(true)

  return(
    <>
      <h1>Toggel :- Hide and show</h1>
      <button onClick={()=>setDisplay(!display)}>toggle</button>
      {
        display ?<h5>sonu</h5> :null
      }
    </>
  )
}
export default App;