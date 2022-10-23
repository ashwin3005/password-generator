import React, {useCallback} from 'react';

const CheckBox = (props) => {
  const handleChange = useCallback((event)=>{
    const newSettings = {...props.setting}
    newSettings[props.id] = event.target.checked;
    props.setSetting(newSettings);
  }, [props])

  return (
    <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultChecked={props.setting[props.id] ?? false}
      value=""
      id={"flexCheckDefault" + props.text}
      onChange={handleChange}
    />
    <label className="form-check-label" htmlFor={"flexCheckDefault" + props.text}>
        {props.text}
    </label>
  </div> );
}
 
export default CheckBox;