const alpha = 'abcdefghijklmnopqrstuvwxyz';
const upAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789'
const symbols = `!@#$%^&*`

export default function generatePassword(length , setting){
    let password = '';
    const listOfTypes = [];
    if(setting.lowercase === true)
    listOfTypes.push("al");
    if(setting.upperCase === true)
    listOfTypes.push("up_al");
    if(setting.symbol ===true)
    listOfTypes.push("sym");
    if(setting.number === true)
    listOfTypes.push("num");
  
    // generating password of <length> digits
    for(let i=0; i<=length-1; i++){

        // alphabet or number

        const type = listOfTypes[Math.floor(Math.random() * listOfTypes.length)];

        if(type === "al"){
            password+=pickRandomElement(alpha); 
        }
        else if(type === "num"){
            password+=pickRandomElement(num);
        }
        else if(type === "up_al"){
            password+=pickRandomElement(upAlpha);
        }
        else if(type === "sym"){
            password+=pickRandomElement(symbols);
        }


    }

    return password;
}

function pickRandomElement(parameter){
    const r = parameter[Math.floor(Math.random() * parameter.length)];
    return r
}