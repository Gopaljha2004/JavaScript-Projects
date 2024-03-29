let generateOtp = document.querySelector("#generateBtn");

generateOtp.addEventListener("click" , () =>{
    const otpLength = 6;

    const otp = Math.floor(Math.random() * Math.pow(10 , otpLength));

    document.querySelector("#otpDisplay").innerText = otp;

})
window.addEventListener("load" , generateOtp)