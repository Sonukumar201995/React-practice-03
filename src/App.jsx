 import User from "./User";

function App()
{
  let name="sonu kuar"
  let age=31

  return(
    <>
    <h1>props  with variable in react</h1>
    <User username={name} userage={age}/>
    </>
  )
}

export default App;