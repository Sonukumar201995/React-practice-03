function App()
{
  const data=[{
    id:1,
    name:"sonu"
  },
  {
    id:2,
    name:"brue"
  }
]
  return(
    <>
    <h1>using map in table</h1>
    <table border="1">
      <thead>
        <th>id</th>
        <th>name</th>
      </thead>
      <tbody>
        {
          data.map((user,index)=>(
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}

export default App;