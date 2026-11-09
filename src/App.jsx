
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const handleUser = () => {
    if (user.trim() === '') return;

    setUsers([...users, user]);
    setUser('');
  };

  // Derived States
  const total = users.length;

  const last = users[users.length - 1];

  const unique = [...new Set(users)].length;

  return (
    <>
      <h1>Derived State</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />

      <br />
      <br />

      <button onClick={handleUser}>Add User</button>

      <h3>Total Users: {total}</h3>
      <h3>Last User: {last || 'No user added'}</h3>
      <h3>Unique Users: {unique}</h3>

      {users.map((value, index) => (
        <h4 key={index}>{value}</h4>
      ))}
    </>
  );
}

export default App;
