import User from "./User"
function App()
{
  const displayName=(name)=>{
    console.log(name)
  }
  return(
    <>
    <h1>pass function in component as props</h1>
   
    <User displayName={displayName} name="sonu kumar"/>
   
    </>
  )
}
export default App;