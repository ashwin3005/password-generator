import React from 'react';
import StrengthChecker from './StrengthChecker';
const PasswordDisplay = (props) => {
    return ( 
    <div>
      <h5 className="d-flex flex-column justify-content-center align-items-center">
      Your Random Password is{" "}</h5>
      <h3 className="text-primary border p-2 rounded">{props.password}</h3>
      <div className='mb-2'>
              <StrengthChecker password={props.password}/>
      </div>
    </div>
   );
}
 
export default PasswordDisplay;