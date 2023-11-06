const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charsArray = chars.split("")
let passwordLength = 0;

const input = document.querySelector("input");
const generateButton = document.querySelector(".generate-button")
const searchBar = document.querySelector(".searchbar");
const message = document.querySelector(".message");
const password = document.querySelector("#password");
const copyButton = document.querySelector("#copy");

function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
}

const toggleButton = document.querySelector(".toggle-theme")

toggleButton.addEventListener("click", () => {
    setTheme();
    if(toggleButton.textContent === "light_mode"){
        toggleButton.textContent = "dark_mode";
        toggleButton.style.color = "white";
    } else {
        toggleButton.textContent = "light_mode";
        toggleButton.style.color = "black";
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

function checkLength (){
    passwordLength = Number(input.value);
    console.log(passwordLength)
    if (isNaN(passwordLength)){
        message.textContent = "Please introduce a number";
    } else if(passwordLength < 8){
        message.textContent = "Between 8 and 15"
    } else {
    message.textContent = "Generating...";
    generatePassword(passwordLength);
    }
}
generateButton.addEventListener("click", checkLength)
input.addEventListener("keypress", (e) => {
    console.log(e)
    if(e.key === "Enter"){
        checkLength();
    }
})

copyButton.addEventListener("click", () => {
    let copyText = password.textContent
    navigator.clipboard.writeText(copyText);
})
