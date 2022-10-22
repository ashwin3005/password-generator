import React, {useCallback} from 'react';

const CheckBox = (props) => {
  const handleChange = useCallback((event)=>{
    const newSettings = {...props.setting}
    newSettings[props.id] = event.target.checked;
    props.setSetting(newSettings);
  }, [props.id, props.setSetting, props.setting])

    return ( 
    <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultChecked={props.id === "lowercase"}
      value=""
      id={props.id}
      onChange={handleChange}
    />
    <label className="form-check-label" htmlFor={props.id}>
        {props.text}
    </label>
  </div> );
}
 
export default CheckBox;