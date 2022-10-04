export default function generatePassword(length){
    let password = '';
    
    // generating password of <length> digits
    for(let i=0; i<=length-1; i++){

        // alphabet or number
        const listOfTypes = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789",`!@#$%^&*`];
        const word = listOfTypes[Math.floor(Math.random() * listOfTypes.length)];
        
        password+=pickRandomElement(word);

    }

    return password;
}

function pickRandomElement(parameter){
    const r = parameter[Math.floor(Math.random() * parameter.length)];
    return r
}