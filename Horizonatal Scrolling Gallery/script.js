let scrollContainer = document.querySelector(".container");
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");


scrollContainer.addEventListener("wheel" , (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})

nextBtn.addEventListener("click"  , () =>{
    scrollContainer.style.scrollBehavior = "smooth";
     scrollContainer.scrollLeft  += 900;
})

backBtn.addEventListener("click"  , () =>{
    scrollContainer.style.scrollBehavior = "smooth";
     scrollContainer.scrollLeft  -= 900;
})