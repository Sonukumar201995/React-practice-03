 import User from "./User";

function App()
{
  const user={
    name:"sonu",
    age:31,
    email:"sonu@gmail.com"
  }

  return(
    <>
    <h1>props  with object in react</h1>
    <User user={user}/>
    </>
  )
}

export default App;