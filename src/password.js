const alpha = 'abcdefghijklmnopqrstuvwxyz';
const upAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789'
const symbols = `!@#$%^&*`

export default function generatePassword(length){
    let password = '';


    // picks a random element from a string.
    function pickRandomElement(parameter){
        const r = parameter[Math.floor(Math.random() * parameter.length)];
        return r
    }

    // generating password of <length> digits
    for(let i=0; i<=length-1; i++){

        // random number between 0 to 25 for indexing
        let n = Math.random() * 26;
        n = Math.floor(n)

        // alphabet or number
        const listOfTypes = ["al","num","up_al","sym"];
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
    // let header = document.querySelector("h1");
    // header.innerText = `Random Password: ${password}`;

    //console.log(password);
}