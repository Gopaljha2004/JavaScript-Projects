
function colors() {
    let red  = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    let output = document.getElementById("output");

    
    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    
    output.innerHTML = "rgb(" + red + "," + green + "," + blue  + ")";
}



