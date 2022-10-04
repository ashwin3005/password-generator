import React from 'react';

const PasswordDisplay = (props) => {
    return ( 
    <div>
      <h5 className="d-flex flex-column justify-content-center align-items-center">
      Your Random Password is{" "}</h5>
      <h3 className="text-primary border p-2 rounded">{props.password}</h3>
    </div>
   );
}
 
export default PasswordDisplay;