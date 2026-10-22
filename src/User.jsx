
function User({user})
{
    return(

        <>
        <h1 style={{color:"red"}}>Name</h1>
        {
            user.map((value,index)=>(
                <h3 key={index} style={{color:"pink"}}>{value}</h3>
            ))
        }
        </>
    )
}

export default User;