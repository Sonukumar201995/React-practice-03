import User from "./User";

function App()
{

 
  let a=10;
  let b=5;
  return (
    <>
    <h2>jsx using condition inside in react.js </h2>
    {a>b ? "a is greater":"b is greater"}
    <h4>addition :{a+b}</h4>
    <h4>subtraction :{a-b}</h4>
    <h4>multiplication :{a*b}</h4>
    <h4>subtraction :{a-b}</h4>
    <User/>
    </>
  )
}

export default App;