import User from "./User";

function App()
{

  function greet()
  {
    return "hello world"
  }
  return (
    <>
    <h2>jsx using function in react.js </h2>
    <h3>{greet()}</h3>
    
    <User/>
    </>
  )
}

export default App;