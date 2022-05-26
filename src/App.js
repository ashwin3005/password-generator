import{
  useState
}from "react";

import generatePassword from "./password";
export default function App(){
  const [password, setPassword] = useState(null);
  const [length, setLength] = useState(0);
  return (
    <div>
      <label for="length">Length : </label>
      <input name="Length" onChange={(val) => setLength(val.target.value)} type="text" placeholder="Enter your length"></input>
      <h1>
        {(password == null) ? "Please click generte button to generate new password": `Your Random Password is: ${password}`}
      </h1>
      <button onClick={() => setPassword(generatePassword(length))}>Generate</button>
    </div>
  )
}