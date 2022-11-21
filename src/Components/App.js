import React, { useCallback, useState } from "react";
import generatePassword from "../password";
import { usePersistedState } from "../hooks/usePersistedState";
import PasswordDisplay from "./PasswordDisplay";
import CheckBoxes from "./CheckBoxes";
import Tips from "./Tips";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "./Context/Theme";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
// import Button from 'react-bootstrap/Button';

export default function App() {
  const [theme, setTheme] = usePersistedState(
    "@password-generator/theme",
    "light"
  );
  const [password, setPassword] = useState(null);
  const [length, setLength] = useState(8);
  const [open, setOpen] = useState(false);
  const [setting, setSetting] = useState({
    lowercase: true,
    upperCase: false,
    number: false,
    symbol: false,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const generate = useCallback(() => {
    if (length < 4 || length > 32) {
      // If request is less than 4 characters or more than 32, return an error.
      setOpen(true);
      setPassword(null); // Clear previous password.
      setErrorMsg("Please enter length between 4-32"); // Provides error for error box.
    } else if (
      setting.lowercase === false &&
      setting.upperCase === false &&
      setting.number === false &&
      setting.symbol === false
    ) {
      // Else if User has not chosen at least 1 of the options.
      setOpen(true);
      setPassword(null); // Clear previous password.
      setErrorMsg("Please choose at least 1 option."); // Provides error for error box.
    } else {
      // Else user has asked for valid password length using at least 1 option.
      setPassword(null); // Clear previous password.
      setErrorMsg(""); // Erases previous error.
      setPassword(generatePassword(length, setting));
    }
  }, [setPassword, setErrorMsg, setOpen, length, setting]);

  const onChange = useCallback(
    (value) => {
      setLength(value);
    },
    [setLength]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} mb-5`} >
        <div className="flex-column d-flex w-60 align-items-center p-5">
          <ThemeToggle />
          <div className="card text-center">
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle> Error</DialogTitle>
              <DialogContent>
                <DialogContentText>{errorMsg}</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </DialogActions>
            </Dialog>
            <div className="card-header">
              <h1 className="text-center">Random Password Generator</h1>
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex flex-column w-50">
                <div className="row justify-content-center align-items-center">
                  <label
                    className="form-label d-flex h-100 w-100"
                    htmlFor="customRange1"
                  >
                    <span className="w-100">Password Length (4-32) :</span>
                  </label>
                  <input
                    className="text-primary fs-5 font-weight-bold w-50"
                    id="amount"
                    name="amount"
                    type="number"
                    max={32}
                    min={4}
                    value={length}
                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                    onBlur={(e) => {
                      let value = parseInt(e.target.value);
                      onChange(value);
                    }}
                  />
                </div>
                <input
                  type="range"
                  id="rangeInput"
                  name="rangeInput"
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                  min="4"
                  max="32"
                  value={length || 4}
                  className="my-3"
                // oninput="amount.value=rangeInput.value" // This was causing errors so I commented it out. The program seems to work okay without it.
                />

                <CheckBoxes setting={setting} setSetting={setSetting} />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                {password == null ? (
                  <h5 className="py-2 pt-3">
                    Click generate button for a new password
                  </h5>
                ) : (
                  <PasswordDisplay password={password} />
                )}
              </div>

              <button
                onClick={generate}
                type="button"
                className="btn btn-primary btn-lg"
              >
                Generate
              </button>
            </div>
          </div>
          <br />
          <br />
          <Tips />
        </div>
      </div>
      <div className="text-center p-5" > {/*padding 5*/}
        <a href="https://github.com/ashwin3005/password-generator" class="btn btn-success" role="button" >Contribute</a>
      </div>
    </ThemeContext.Provider>
  );
}
