import React from 'react';

const CheckBox = (props) => {

  const setSetting =  props.setSetting;
  const setting = props.setting;
  const id = props.id;

  const handleChange = (event)=>{
    setting[id] = event.target.checked;
    setSetting(setting);  //why this doesn't do shit
  }
    return ( 
    <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
      onChange={handleChange}
    />
    <label className="form-check-label" htmlFor="flexCheckDefault">
        {props.text}
    </label>
  </div> );
}
 
export default CheckBox;