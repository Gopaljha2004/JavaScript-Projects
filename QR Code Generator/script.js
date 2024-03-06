let QRapi = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let Img = document.querySelector(".imgBox")
let QRimg = document.getElementById("qrImg")
let QRtext = document.getElementById("qrText")




function generateQr () {

    if(QRtext.value.length > 0){
   QRimg.src = QRapi + QRtext.value;
   Img.classList.add("show-img");
    }
    else{
        QRtext.classList.add("error")
        setTimeout(() =>{
            QRtext.classList.remove("error")
        
        } , 1000)
    }
}






