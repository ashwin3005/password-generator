import {numChars, symbolsChars, upAlphaChars} from "../password";

const PasswordColorizer = (props) => {

return <span>{props.password.split('').map((c, idx) => {
        if(symbolsChars.indexOf(c) > -1) {
            return <span key={idx} style={{color: 'red'}}>{c}</span>
        }
        if(numChars.indexOf(c) > -1) {
            return <span key={idx} style={{color: 'green'}}>{c}</span>
        }
        if(upAlphaChars.indexOf(c) > -1) {
            return <span key={idx} style={{color: 'orange'}}>{c}</span>
        }
        return c
    }
)}</span>

};

export default PasswordColorizer;