function User({setUser})
{
  return(
    <>
    <h2>Enter user name</h2>
    <input type="text" onChange={(event)=>setUser(event.target.value)}/>
    <hr />
    </>
  )
}

export default User;