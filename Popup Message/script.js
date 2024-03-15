let submitBtn = document.querySelector("#submit");
let okBtn = document.querySelector("#popbtn");
let popUp = document.querySelector("#popup");


submitBtn.addEventListener("click" , () =>{
    popUp.classList.add("open-popup");
});

okBtn.addEventListener("click" , () =>{
   popUp.classList.remove("open-popup");

});
