import React from 'react';

const handleCopy = (password) => {
    navigator.clipboard.writeText(password);
    const copyButton = document.getElementById("copyButton");
    copyButton.innerText = "Copied!";
    setTimeout(() => {
      copyButton.innerText = "";
    }, 1500);
};


const CopyButton = (props) => {
    return (
    <div className="d-flex flex-column justify-content-center align-items-center">
    <button
      onClick={()=>handleCopy(props.password)}
      type="button"
      className="btn btn-secondary btn-sm"
    >
      Copy Generated Password
    </button>
    <span id="copyButton" className="text-primary pt-2"></span>
  </div>  
  );
}
 
export default CopyButton;