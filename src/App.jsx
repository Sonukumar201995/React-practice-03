function App()
{
  function clickEvent()
  {
    console.log("click me !")

  }
  return(
    <>
    <h2>click event and function call</h2>
      <button onClick={clickEvent}>click</button>

    </>
  )
}
export default App;