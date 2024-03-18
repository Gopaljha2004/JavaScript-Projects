let btn = document.querySelector("button");
let passwordBox = document.getElementById("Password");
let copy = document.querySelector("#copyIcon");
let copyDisplay = document.querySelector(".displayMessage");

const lenght = 12;

const upperCase = `ABCDEFGHIJKLMPQRSTUVWXYZ`;
const lowerCase = `abcdefghijklmpqrstuvwxyz`;
const number = `1234567890`;
const symbols = `!@#$%&`;

const allCharacters = upperCase + lowerCase + number + symbols;


const display = btn.addEventListener("click", () => {
    let password = " "
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (lenght > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passwordBox.value = password
});


const copyPassword = copy.addEventListener("click", () => {
    passwordBox.select();
    document.execCommand("copy");


    copyDisplay.textContent = "Copied";

    copyDisplay.classList.add('active');
    setTimeout(() => {
        copyDisplay.classList.remove('active');
    }, 2000);

});

