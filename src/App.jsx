import User from "./User";

function App()
{

 
  let a=10;
  let b=20;
  return (
    <>
    <h2>jsx using condition inside in react.js </h2>
    {a>b ? "a is greater":"b is greater"}
    <User/>
    </>
  )
}

export default App;