const alpha = 'abcdefghijklmnopqrstuvwxyz';
const upAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789'
const symbols = `!@#$%^&*`

export default function generatePassword(length){
    let password = '';

    //let len = prompt("Enter length of your password ")
    //let len = document.getElementById("length").value;

    function randomElement(parameter){
        const r = parameter[Math.floor(Math.random() * parameter.length)];
        return r
    }

    // generating 8 digit password
    for(let i=0; i<=length-1; i++){

    // random number between 0 to 25 for indexing
    let n = Math.random() * 26;
    n = Math.floor(n)

    // alphabet or number
    const alnum = ["a","n","u","s"];
    const type = alnum[Math.floor(Math.random() * alnum.length)];

    if(type == "a"){
        password+=randomElement(alpha); 
    }
    else if(type == "n"){
        password+=randomElement(num);
    }
    else if(type == "u"){
        password+=randomElement(upAlpha);
    }
    else if(type == "s"){
        password+=randomElement(symbols);
    }

            
    }

    return password;
    // let header = document.querySelector("h1");
    // header.innerText = `Random Password: ${password}`;

    //console.log(password);
}