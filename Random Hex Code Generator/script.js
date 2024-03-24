let outputColor = document.querySelector("#output-color span");
let output = document.getElementById("output");
let genBtn = document.querySelector("#gen-btn")
let copyBtn = document.querySelector("#copy-btn");
let display = document.querySelector(".custom-alert");


let hexString = `0123456789acdef`;

let genHexCode = () => {
    let hexCode = "#";
    for (i = 0; i < 6; i++) {
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }

    output.value = hexCode
    outputColor.classList.remove("show-color");
    setTimeout(() => {
        outputColor.classList.add("show-color")
    }, 10);

    outputColor.style.backgroundColor = hexCode
}

window.onload = genHexCode;

genBtn.addEventListener("click", genHexCode);


copyBtn.addEventListener("click", () => {
    output.select();
    document.execCommand("copy");


    display.textContent = "Hex Code Copied";

    display.classList.add('active');
    setTimeout(() => {
        display.classList.remove('active');
    }, 2000);
});


