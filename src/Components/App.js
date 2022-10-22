import React, { useState, useCallback } from "react";
import generatePassword from "../password";
import PasswordDisplay from "./PasswordDisplay";
import CheckBoxes from "./CheckBoxes";
import Tips from "./Tips";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "./Context/Theme";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

export default function App() {
  const [theme, setTheme] = useState("light");
  const [password, setPassword] = useState(null);
  const [length, setLength] = useState(8);
  const [open, setOpen] = useState(false);
  const [setting, setSetting] = useState({
    lowercase: {
      enabled: true,
      minOccurrence: 0,
    },
    upperCase: {
      enabled: false,
      minOccurrence: 0,
    },
    number: {
      enabled: false,
      minOccurrence: 0,
    },
    symbol: {
      enabled: false,
      minOccurrence: 0,
    },
  });
  function myFunction() {
    if (length < 8 || length > 32) {
      setOpen(true);
      console.log(length);
    }
    else {
      setPassword(generatePassword(length, setting));
    }
  }
  const onChange = useCallback((to, d = setting) => {
    console.log(to)
    console.log(d)
    const newLength =
        Math.max(
            d.number.minOccurrence +
            d.symbol.minOccurrence +
            d.lowercase.minOccurrence +
            d.upperCase.minOccurrence,
          to
        )
    setLength(newLength);
  },[setLength, setting])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        <div className="flex-column d-flex w-60 align-items-center p-5">
          <ThemeToggle />
          <div className="card text-center">
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle> Error</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter length between 8-32
                </DialogContentText>
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
                    <span className="w-100">Password Length (8-32) :</span>
                  </label>
                  <input
                    className="text-primary fs-5 font-weight-bold w-50"
                    id="amount"
                    name="amount"
                    type="number"
                    max={32}
                    min={8}
                    value={length}

                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                    onBlur={(e) => {
                      let value = parseInt(e.target.value);
                      onChange(value)
                    }}
                  />
                </div>
                <input
                  type="range"
                  id="rangeInput"
                  name="rangeInput"
                  onChange={(e) => {onChange(e.target.value)}}
                  min="8"
                  max="32"
                  value={length || 8}
                  className="my-3"
                />

                <CheckBoxes setting={setting} setSetting={(d) => {setSetting(d); onChange(length, d)}} />
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
                onClick={myFunction}
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
    </ThemeContext.Provider>
  );
}
