import User from "./User";

function App()
{

  let name="react js";
  let id=101

  return (
    <>
    <h2>welcome to react js series </h2>
    <h3>{name}</h3>
    <h3>{id}</h3>
    <User/>
    </>
  )
}

export default App;