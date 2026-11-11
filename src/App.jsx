import { useActionState } from "react";

function App()
{

  const handleSubmit=(preData,formData)=>{
        const name=formData.get('name');
        const password=formData.get('password');

        if(name && password)
        {
          return{
            message:'data submit'
          }
        }else
        {
          return{
            error:'data not submit'
          }
        }
  }

  const [data,action,pending]=useActionState(handleSubmit,undefined);
  console.log(data);
  return(
    <>
    <h1>useAction State in react</h1>
    <form action={action}>
      <input type="text" placeholder="Enter your name" name="name"/>
      <br /><br />

      <input type="password" placeholder="Enter your password" name="password"/>
      <br /><br />

      <button disabled={pending}>{pending ?"submitting....":"submit"}</button>

      {data?.error && <span style={{color:"red"}}>{data.error}</span>}
      {data?.message && <span style={{color:"green"}}>{data.message}</span>}
    </form>
    </>
  )
}

export default App