// import Skill from './Skill'

import { useState } from "react";

function App()
{
  const [gender,setGender]=useState('');
  const [city,setCity]=useState("")
  return(
    <>
    <h2>handle radion button</h2>
    <h3>Gender :{gender}</h3>
    <input type="radio" onChange={(event)=>setGender(event.target.value)} name='male' value={'male'} 
    checked={gender=='male'} id="male"/>
    <label htmlFor="male">Male</label>

    <input type="radio" onChange={(event)=>setGender(event.target.value)} name='female' value={'female'} 
    checked={gender=='female'} id="female"/>
    <label htmlFor="female">Female</label>


    <h1>selct city :{city}</h1>
    <select onChange={(event)=>setCity(event.target.value)} defaultValue={'noida'}>
      <option value="delhi">Delhi</option>
      <option value="noida">Noida</option>
      <option value="gurugram">Gurugram</option>
    </select>
    </>
  )
}

export default App;