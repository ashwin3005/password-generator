import React, { useState } from "react";
import generatePassword from "../password";

export default function Textarea() {
  const [password, setPassword] = useState(null);
  const [length, setLength] = useState(8);
  const [rangeOutput, setrangeOutput] = useState(8);

  function onChange() {
    setLength(document.getElementById("rangeInput").value);
    setrangeOutput(document.getElementById("rangeInput").value);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    const copyButton = document.getElementById("copyButton");
    copyButton.innerText = "Copied!";
    setTimeout(() => {
      copyButton.innerText = "";
    }, 1500);
  };

  return (
    <div className="container d-flex flex-column h-100 justify-content-center align-items-center mt-4 ">
      <div class="card text-center">
        <div class="card-header">
          <h1 className="text-center">Random Password Generator</h1>
        </div>
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column w-50">
            <label class="form-label" for="customRange1">
              Password Length (8-32) :
              <span
                className="p-2 text-primary fs-5 font-weight-bold "
                id="amount"
                name="amount"
                for="rangeInput"
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
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {password == null ? (
              <h5>Please click generte button to generate new password</h5>
            ) : (
              <h5 className="d-flex flex-column justify-content-center align-items-center">
                Your Random Password is{" "}
                <h3 className="text-primary border p-2 rounded">{password}</h3>
              </h5>
            )}
          </div>

          <button
            onClick={() => setPassword(generatePassword(length))}
            type="button"
            class="btn btn-primary"
          >
            Generate
          </button>
        </div>
        <div class="card-footer text-muted">
          {password && (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <button
                onClick={handleCopy}
                type="button"
                class="btn btn-secondary btn-sm"
              >
                Copy Generated Password
              </button>
              <span id="copyButton" className="text-primary pt-2"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
