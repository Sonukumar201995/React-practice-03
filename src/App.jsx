import { useState } from "react";
import User from './User';
import Display from "./Display"

function App()
{
  const [user,setUser]=useState();
  return(
    <>
    <h1>lifting state up in react</h1>
    <User setUser={setUser}/>
    <Display user={user}/>
    </>
  )
}

export default App;