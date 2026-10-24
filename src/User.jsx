
import { useState } from "react";

function User() {
  const [skill, setSkill] = useState([]);

  const handle = (event) => {
    console.log(event.target.value);

    if (event.target.checked) {
      setSkill([...skill, event.target.value]);
    } else {
      setSkill(
        skill.filter((item) => item !== event.target.value)
      );
    }
  };

  return (
    <>
      <input
        type="checkbox"
        onChange={handle}
        id="node"
        value="node"
      />
      <label htmlFor="node">Node</label>

      <h2>{skill.toString()}</h2>
    </>
  );
}

export default User;
