import React, {useCallback, useState, useMemo} from 'react';

const CheckBox = (props) => {
  const setting = useMemo(() => props.setting[props.id], [props.setting, props.id])
  const [minOcc, setMinOcc] = useState(1)

  const handleCheckChange = useCallback((event)=>{
    const newSettings = {...props.setting}
    newSettings[props.id] = {
      enabled: event.target.checked,
      minOccurrence: event.target.checked ? minOcc : 0,
    };
    props.setSetting(newSettings);
  }, [props, minOcc])

  const handleMinOccChange = useCallback((event)=>{
    console.log(event.target.value)
    const value = parseInt(event.target.value)
    setMinOcc(value)
    if(setting.enabled) {
      const newSettings = {...props.setting}
      newSettings[props.id] = {
        enabled: setting.enabled,
        minOccurrence: value,
      };
      props.setSetting(newSettings);
    }
  }, [props, setting, setMinOcc])

    return ( 
    <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultChecked={setting.enabled}
      id={props.id}
      onChange={handleCheckChange}
    />
    <label className="form-check-label" htmlFor={props.id}>
        {props.text}
    </label>
      {setting.enabled &&
      <input
          type="number"
          defaultValue={setting.minOccurrence}
          onChange={handleMinOccChange}
      />
      }
  </div> );
}
 
export default CheckBox;