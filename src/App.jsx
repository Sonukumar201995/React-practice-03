function App()
{
  function fruit(name)
  {
    console.log(name)

  }
  return(
    <>
    <h2>Arrow function parameter funciton</h2>
      <button onClick={()=>fruit("apple")}>click</button>
        
    </>
  )
}
export default App;