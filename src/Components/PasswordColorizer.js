import {numChars, symbolsChars, upAlphaChars} from "../password";

const PasswordColorizer = (props) => {

return <span>{props.password.split('').map(c => {
        if(symbolsChars.indexOf(c) > -1) {
            return <span style={{color: 'red'}}>{c}</span>
        }
        if(numChars.indexOf(c) > -1) {
            return <span style={{color: 'green'}}>{c}</span>
        }
        if(upAlphaChars.indexOf(c) > -1) {
            return <span style={{color: 'orange'}}>{c}</span>
        }
        return c
    }
)}</span>

};

export default PasswordColorizer;