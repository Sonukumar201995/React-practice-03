
function App() {
  const collageData = [
    {
      collage: "IGNOU",
      website: "ignou@.com",
      city: "Delhi",
      student: [
        { name: "sonu" },
        { name: "brue" }
      ]
    },
    {
      collage: "DU",
      website: "du@com",
      city: "Delhi",
      student: [
        { name: "joke" },
        { name: "janny" }
      ]
    }
  ];

  return (
    <>
      <h1>Nested Loop</h1>
       <h1>collage name :</h1> 
      {collageData.map((value, index) => (
        <div key={index}>
          <h2>{value.collage}</h2>
          <p>Website: {value.website}</p>
          <p>City: {value.city}</p>

          <h3>Students Name</h3>

          {value.student.map((student, i) => (
            <p key={i}>{student.name}</p>
          ))}
        </div>
      ))}
    </>
  );
}

export default App;
