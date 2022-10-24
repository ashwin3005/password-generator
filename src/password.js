const alpha = 'abcdefghijklmnopqrstuvwxyz';
const upAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789'
const symbols = `!@#$%^&*`

const shuffleArray = array => {
    const newArr = [...array]
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

const pickRandomByType = (type) => {
    if(type === "al"){
        return pickRandomElement(alpha);
    }
    else if(type === "num"){
        return pickRandomElement(num);
    }
    else if(type === "up_al"){
        return pickRandomElement(upAlpha);
    }
    else if(type === "sym"){
        return pickRandomElement(symbols);
    } else {
        throw new Error("Unknown type!")
    }
}

export default function generatePassword(length , setting){
    const arr = []

    const listOfTypes = [];
    if(setting.lowercase === true)
    listOfTypes.push("al");
    if(setting.upperCase === true)
    listOfTypes.push("up_al");
    if(setting.symbol ===true)
    listOfTypes.push("sym");
    if(setting.number === true)
    listOfTypes.push("num");

    for(let i=0; i<=listOfTypes.length-1; i++ ) {
        arr.push(pickRandomByType(listOfTypes[i]))
    }

    if (listOfTypes.length > 0) { // Checks if user has selected at least 1 of the options (lower case, upper case, number, or symbol).
        // generating password of <length> digits
        for(let i=arr.length; i<=length-1; i++){
            // alphabet or number
            const type = listOfTypes[Math.floor(Math.random() * listOfTypes.length)];
            arr.push(pickRandomByType(type))
        }
        return shuffleArray(arr).join('');
    } else { // Else no options are chosen (lower case, upper case, number, or symbol).
        alert("You must choose at least 1 of the options.")
    }
}

function pickRandomElement(parameter){
    const r = parameter[Math.floor(Math.random() * parameter.length)];
    return r
}