

function User({displayName,name})
{
    return(
        <>
            <button onClick={()=>displayName(name)}>display</button>
        </>
    )
}

export default User;