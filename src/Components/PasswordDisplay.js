import React from "react";
import StrengthChecker from "./StrengthChecker";
const useState = React.useState;

const PasswordDisplay = (props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = props.password;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div>
      <h5 className="d-flex pt-3 flex-column justify-content-center align-items-center">
        Your random password is
      </h5>
      <div className="input-group input-group-lg p-2">
        <input
          type="text"
          id="copyTarget"
          className="form-control text-primary fs-3 fw-bold font-monospace"
          value={copied ? "Copied" : props.password}
          ref={(node) => {
            if (node) node.style.setProperty("color", copied? "#05a603":"#0d6efd", "important");
          }}
          readOnly
        />
        <span
          id="copyButton"
          className="btn btn-primary d-flex flex-column justify-content-center align-items-center"
          title="Click to copy"
          style={{backgroundColor:(copied? "#05a603":"#0d6efd"),borderColor:(copied? "#05a603":"#0d6efd")}}
          onClick={copyToClipboard}
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-check-lg"
              viewBox="0 0 17 16"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 46 48"
            >
              <path d="M8.75 45.15q-1.6 0-2.775-1.175Q4.8 42.8 4.8 41.2V11.3h3.95v29.9H32.2v3.95Zm7-6.95q-1.65 0-2.825-1.175Q11.75 35.85 11.75 34.2V6.7q0-1.6 1.175-2.775Q14.1 2.75 15.75 2.75h21.5q1.6 0 2.775 1.175Q41.2 5.1 41.2 6.7v27.5q0 1.65-1.175 2.825Q38.85 38.2 37.25 38.2Zm0-4h21.5V6.7h-21.5v27.5Zm0 0V6.7v27.5Z"/>
              </svg>
          )}
        </span>
      </div>
      <div className="mb-2">
        <StrengthChecker password={props.password} />
      </div>
    </div>
  );
};

export default PasswordDisplay;
