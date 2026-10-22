 import User from "./User";

function App()
{
  const user=["hello","welcome","sonu","january","mondya"]
 
  return(
    <>
    <h1>props  with Array in react</h1>
    <User user={user}/>
    </>
  )
}

export default App;