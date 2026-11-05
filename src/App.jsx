import { useRef } from "react";

function App()
{

  const inputRef=useRef(null);
  const handle=()=>{
    inputRef.current.focus();
    inputRef.current.style.color='green'
    inputRef.current.placeholder='password'
    // inputRef.current.value='123'
  }
  return(
    <>
    <h1>useRef Hook</h1>
    <input type="text" placeholder="enter your name" ref={inputRef}/>
    <button onClick={handle}>focus</button>
    </>
  )
}

export default App;