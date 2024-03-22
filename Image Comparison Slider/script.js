let myImg = document.getElementById("my-img")


slider.addEventListener("input" , () =>{
let slider = document.getElementById("slider").value;
    myImg.style.clipPath = "polygon(0 0," + slider + "% 0," + slider + "% 100%, 0 100%)";
})