import User from "./User";

function App()
{

 
 const data={
  name:"sonu",
  age:31,
  email:"sonu@gmail.com"
 }
  return (
    <>
      <h1>objec in react</h1>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
      <h2>{data.email}</h2>
    <User/>
    </>
  )
}

export default App;