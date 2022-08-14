const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let rPassword = document.getElementById("right-password");
let lPassword = document.getElementById("left-password");
let counterSymb = 0;
let counterNumb = 0;

function passwordGenerator() {
    let passwordLeft = "";
    let passwordRight = "";
    let len = document.getElementById("length-input").value;
    if ( len <= 0 ) {
        alert("Please enter a number greater than 0. Setting default value of password length to 15.");
        len = 15;
    }
    for ( let i = 0; i < len; i++ ) {
        passwordLeft += characters[cleanRandomChar()];
        passwordRight += characters[cleanRandomChar()];
    }
    rPassword.textContent = passwordRight;
    lPassword.textContent = passwordLeft;
}

function getRandomChar(lower, upper) {
    let randomChar = Math.floor( Math.random() * (upper - lower + 1) );
    return randomChar;
}

function onOffSymbols() {
    counterSymb++;
    if ( counterSymb % 2 == 0 ) {
        document.getElementById("symbol-btn").textContent = "Off";
    } else {
        document.getElementById("symbol-btn").textContent = "On";
    }
}

function onOffNumbers() {
    counterNumb++;
    if ( counterNumb % 2 == 0 ) {
        document.getElementById("number-btn").textContent = "Off";
    }  else {
        document.getElementById("number-btn").textContent = "On";
    }
}

function cleanRandomChar() {
    let lower = 0;
    let upper = characters.length - 1;
    let len = characters.length;
    if (counterNumb % 2 == 0 && counterSymb % 2 == 0 ) {
        return getRandomChar(lower, upper);
    } else if (counterNumb % 2 != 0 && counterSymb % 2 != 0) {
        upper = characters.indexOf("0") - 1;
        return getRandomChar(lower, upper);
    } else if (counterSymb % 2 != 0 ) {
        upper = characters.indexOf("9");
        return getRandomChar(lower, upper);
    } else {
        lower = characters.indexOf("0");
        upper = characters.indexOf("9");
        let randChar = getRandomChar(0, len - 1);
        while (lower <= randChar && randChar <= upper) {
            randChar = getRandomChar(0, len - 1);
        }
        return randChar;
    }
}