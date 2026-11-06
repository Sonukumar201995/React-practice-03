function App()
{

  const handleform=(event)=>{
    event.preventDefault();

    const name=document.querySelector("#name").value;
    const pass=document.querySelector("#password").value
    console.log(name,pass);
  }
  return(
    <>
    <h1>uncontrolled component</h1>
    <form onSubmit={handleform}>
      <input type="text" placeholder="enter your name" id="name"/>
      <br />
      <br />
      <input type="password" placeholder="enter your password" id="password"/>
      <br />
      <br />
      <button type="submit">submit</button>
    </form>
    </>
  )
}

export default App;