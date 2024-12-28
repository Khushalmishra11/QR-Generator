
let qr = document.getElementById("qr");
let qr-img = document.getElementById("qr-img");
let input = document.getElementById("input");


function generate(){
    
    qr-Image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
}

const btn = document.getElementById("btn").onclick = generate();