import React, { useState } from 'react'
import generatePassword from "./password";


export default function Textarea() {
  const [password, setPassword] = useState(null);
  const [length, setLength] = useState(0);
  const [rangeOutput, setrangeOutput] = useState(0)

  function onChange(){
    setLength(document.getElementById('rangeInput').value)
    setrangeOutput(document.getElementById('rangeInput').value)
  }

  return (
    <div className='container'>
      <h1 >password generator</h1>
      {/* <label for="length">Length : </label> */}
      {/* <input name="Length" onChange={(val) => setLength(val.target.value)} type="text" placeholder="Enter your length"></input> */}
      <label class="form-label" for="customRange1">Example range</label>
      <input type="range" id="rangeInput" name="rangeInput" onChange={onChange} min="0" max="20" 
        oninput="amount.value=rangeInput.value" />

      <output className='ml-4' id="amount" name="amount" for="rangeInput">{rangeOutput}</output>
      <h3>
        {(password == null) ? "Please click generte button to generate new password" : `Your Random Password is: ${password}`}
      </h3>
      <button onClick={() => setPassword(generatePassword(length))} type="button" class="btn btn-primary">Generate</button>
    </div>
  )
}
