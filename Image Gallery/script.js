let fullImgBox = document.getElementById("fullImgBox")
let img = document.getElementById("fullImg");
let closeImg = document.querySelector("#close");
let gallimg = document.querySelector("#galleryImg");


function OpenImg(pic) {
    fullImgBox.style.display = "flex";
    img.src = pic

}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

