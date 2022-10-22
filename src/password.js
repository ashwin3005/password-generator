export const alphaChars = 'abcdefghijklmnopqrstuvwxyz';
export const upAlphaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const numChars = '0123456789'
export const symbolsChars = `!@#$%^&*`

const shuffleArray = array => {
    const newArr = [...array]
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

export default function generatePassword(length , setting){
    const arr = [];

    const listOfTypes = [];
    if(setting.lowercase.enabled) {
        listOfTypes.push("al");
        arr.push(...Array.from(
            {length: setting.lowercase.minOccurrence},
            () => pickRandomElement(alphaChars)
        ))
    }
    if(setting.upperCase.enabled) {
        listOfTypes.push("up_al");
        arr.push(...Array.from(
            {length: setting.upperCase.minOccurrence},
            () => pickRandomElement(upAlphaChars)
        ))
    }
    if(setting.symbol.enabled) {
        listOfTypes.push("sym");
        arr.push(...Array.from(
            {length: setting.symbol.minOccurrence},
            () => pickRandomElement(symbolsChars)
        ))
    }
    if(setting.number.enabled) {
        listOfTypes.push("num");
        arr.push(...Array.from(
            {length: setting.number.minOccurrence},
            () => pickRandomElement(numChars)
        ))
    }



  
    // generating password of <length> digits
    for(let i=arr.length; i<=length-1; i++){
        const type = listOfTypes[Math.floor(Math.random() * listOfTypes.length)];
        if(type === "al"){
            arr.push(pickRandomElement(alphaChars));
        }
        else if(type === "num"){
            arr.push(pickRandomElement(numChars));
        }
        else if(type === "up_al"){
            arr.push(pickRandomElement(upAlphaChars));
        }
        else if(type === "sym"){
            arr.push(pickRandomElement(symbolsChars));
        }
    }

    return shuffleArray(arr).join('');
}

function pickRandomElement(parameter){
    const r = parameter[Math.floor(Math.random() * parameter.length)];
    return r
}