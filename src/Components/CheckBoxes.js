import React from "react";
import CheckBox from "./CheckBox";
const CheckBoxes = (props) => {
  return (
    <div>
      <CheckBox text = "Lower Case" id="lowercase" setSetting ={props.setSetting} setting={props.setting}/>
      <CheckBox text = "Upper Case" id="upperCase" setSetting ={props.setSetting} setting={props.setting}/>
      <CheckBox text = "Number" id="number" setSetting ={props.setSetting} setting={props.setting}/>
      <CheckBox text = "Symbol" id="symbol" setSetting ={props.setSetting} setting={props.setting}/>
      </div>
  );
};

export default CheckBoxes;
