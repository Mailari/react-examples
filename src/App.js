import { useState } from "react";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log({ email, password });
    setTimeout(() => {}, 20000);
  };

  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}> */}
      <input onChange={(event) => setEmail(event.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {/* </form> */}

      <p>Input is {email}</p>
    </div>
  );
}
