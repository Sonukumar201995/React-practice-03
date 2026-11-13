import useToggle from "./UseToggle";

function App()
{
  const[value,setValue]=useToggle(true);
  return(
    <>
    <h1>make custom hook in react</h1>
    <button onClick={()=>setValue()}>toggle</button>
    <button onClick={()=>setValue(false)}>hide</button>
    <button onClick={()=>setValue(true)}>show</button>
    {
      value ? <h2>custom hook</h2> :null
    }
    </>
  )
}
export default App;