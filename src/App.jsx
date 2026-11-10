import { useState } from "react";

function App()
{
  const [data,setData]=useState(['sonu','bruice','anil','hello'])

  const updataData=(name)=>{
    const newData=[...data];
      newData[newData.length-1]=name;
      setData(newData);
  }
  return(
    <>
    <h1>update array in react</h1>
    <input type="text" onChange={(event)=>updataData(event.target.value)}/>
    {
      data.map((val,index)=>(
        <h2 key={index}>{val}</h2>
      ))
    }
    </>
  )
}

export default App;