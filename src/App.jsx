import { useFormStatus } from "react-dom";

function CustomerForm() {
  const { pending } = useFormStatus();

  console.log(pending);

  return (
    <>
      <h1>useFormStatus in React</h1>

      <input type="text" placeholder="Enter your name" />
      <br /><br />

      <input type="password" placeholder="Enter your password" />
      <br /><br />

      <button disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
    </>
  );
}

function App() {
  let handleForm = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submit");
  };

  return (
    <>
      <form action={handleForm}>
        <CustomerForm />
      </form>
    </>
  );
}

export default App;