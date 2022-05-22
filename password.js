let alpha = 'abcdefghijklmnopqrstuvwxyz';
let password = '';


// generating 8 digit password
for(let i=0; i<=7; i++){

    // random number between 0 to 25 for indexing
    let n = Math.random() * 26;
    n = Math.floor(n)

    // alphabet or number
    const alnum = ["a","n"];
    const randomElement = alnum[Math.floor(Math.random() * alnum.length)];

    // random numer between 0 to 9
    let rannum = Math.random() * 10;
    rannum = Math.floor(rannum)

    if(randomElement == "a"){
        password+=alpha[n]; 
    }else{
        password+=rannum;
    }
           
}
let header = document.querySelector("h1");
header.innerText = `Random Password: ${password}`;

//console.log(password);