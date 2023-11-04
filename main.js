const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charsArray = chars.split("")
let passwordLength = 0;

const input = document.querySelector("input");
const searchBar = document.querySelector(".searchbar");
const message = document.querySelector(".message");
const password = document.querySelector("#password");

input.addEventListener("change", () =>{
    passwordLength = Number(input.value);
    if (isNaN(passwordLength)){
        message.removeAttribute("class");
        message.classList.add("error");
        message.textContent = "Please introduce a number";
    } else if(passwordLength < 8 || passwordLength > 15){
        message.removeAttribute("class");
        message.classList.add("error");
        message.textContent = "Please introduce desired number of characters"
    } else {
    message.removeAttribute("class");
    message.classList.add("generating");
    message.textContent = "Generating...";
    generatePassword(passwordLength);
    }
})

function generatePassword(passwordLength){
    let generatedPassword = "";
    let char = "";
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.round(Math.random() * 72);
        char = charsArray[randomNumber]
        if(char === undefined){
            char = ""
        }
        console.log(char)
        generatedPassword += char
    }
    password.textContent = generatedPassword
}
