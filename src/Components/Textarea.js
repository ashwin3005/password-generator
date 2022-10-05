import React, { useState } from "react";
import generatePassword from "../password";
import CopyButton from "./CopyButton";
import PasswordDisplay from "./PasswordDisplay";
import CheckBoxes from "./CheckBoxes";


export default function Textarea() {
  const [password, setPassword] = useState(null);
  const [length, setLength] = useState(8);
  const [rangeOutput, setrangeOutput] = useState(8);
  const [setting , setSetting] = useState({upperCase:false,number:false,symbol:false});
  function onChange() {
    setLength(document.getElementById("rangeInput").value);
    setrangeOutput(document.getElementById("rangeInput").value);
  }

  

  return (
      <div className="container d-flex flex-column h-100 justify-content-center align-items-center mt-4">
        <div className="card text-center">
          <div className="card-header">
            <h1 className="text-center">Random Password Generator</h1>
          </div>
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column w-50">
              <label className="form-label" htmlFor="customRange1">
                Password Length (8-32) :
                <span
                  className="p-2 text-primary fs-5 font-weight-bold "
                  id="amount"
                  name="amount"
                  htmlFor="rangeInput"
                >
                  {rangeOutput}
                </span>
              </label>
              <input
                type="range"
                id="rangeInput"
                name="rangeInput"
                onChange={onChange}
                min="8"
                max="32"
                value={length || 8}
                className="my-3"
                oninput="amount.value=rangeInput.value"
              />
              
              <CheckBoxes setting={setting} setSetting={setSetting}/>

            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              {password == null ? (
                <h5>Please click generate button to generate new password</h5>
              ) : <PasswordDisplay password={password}/>}
            </div>
            
            <button
              onClick={() => setPassword(generatePassword(length,setting))}
              type="button"
              className="btn btn-primary"
            >
              Generate
            </button>
          </div>
          <div className="card-footer text-muted">
            {password && <CopyButton password={password}/>}
          </div>
        </div>
      </div>
  );
}
