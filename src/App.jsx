
import styled from "styled-components";

// Create styled component outside App()
const Heading = styled.h1`
  color: red;
  background-color: green;
`;

function App() {
  return (
    <>
      <Heading>Hello welcome to React</Heading>
    </>
  );
}

export default App;
