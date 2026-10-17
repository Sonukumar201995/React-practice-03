import User from "./User";

function App()
{

let data=["sonu","brue","hello","sam"]
  return (
    <>
      <h1>array in react</h1>
      {
        data.map((value,index)=>(
          <h3 key={index}>{value}</h3>
        ))
      }
    <User/>
    </>
  )
}

export default App;