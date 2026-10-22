import { useState } from "react";
import User from "./User";

function App()
{
  const [user,setUser]=useState("sonu kumar")
  return(
    <>
    <h1>props with onlick</h1>
    {
      user && <User name={user}/>
    }
    <button onClick={()=>setUser("brue")}>update</button>
    </>
  )
}

export default App;