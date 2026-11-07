import { useTransition } from "react";

function App()
{
  const [pending,startTrasition]=useTransition();
  const handleButton=()=>{
    startTrasition(async()=>{
      await new Promise(res=>setTimeout(res,2000))

      console.log("Task completed")
    })
  }
  return(
    <>
    <h1>usetransition in react</h1>
    <button disabled={pending} onClick={handleButton}>{pending ? "loading...":"Click"} </button>
    </>
  )
}

export default App;