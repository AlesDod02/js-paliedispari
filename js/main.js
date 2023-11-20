
/*
//PARI O DISPARI

let evenOrOdd = prompt("Scegli pari o dispari?")
//console.log(evenOrOdd)
let number1 = parseInt(prompt("Scegli un numero da 1 a 5"))
//console.log(number1)
let number2 = generateRandomNumberZeroToMaxnumber(5)
let somma = number1 + number2
//console.log(generateRandomNumberZeroToTen)
console.log (somma)
let risultato = checkEvenOrOdd(somma, evenOrOdd)














//FUNZIONI
function generateRandomNumberZeroToMaxnumber(maxnumber) {
    let randomNumber = Math.floor(Math.random() * (maxnumber + 1));
    return randomNumber}

function checkEvenOrOdd(number, or) {
    if (number % 2 == 0 && or == "pari"){

    
    console.log("hai vinto")
}
else if (number % 2 == 0 && or == "dispari"){

    
    console.log("hai perso")
}
else if (number % 2 != 0 && or == "dispari"){

    
    console.log("vinto")
}
else{
    console.log("hai perso")
}    
} 
*/

// Palindroma
let wordSelected = prompt("inserisci una parola");
wordSelected = wordSelected.toLowerCase()


let palindromeCheck = checkPalindrome(wordSelected);

console.log(palindromeCheck);

function checkPalindrome(string) {

    let lenght = string.length;

    
    for (let i = 0; i < lenght  / 2; i++) {

       
        if (string[i] == string[ lenght -i - 1 ] ) {
            return "questa parola è palindroma";
        }
        else{
            return "questa parola non è palindroma"
        }
    }
    
}


