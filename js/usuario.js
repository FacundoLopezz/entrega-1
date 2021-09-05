document.addEventListener("DOMContentLoaded",()=> {
let usuario = JSON.parse(localStorage.getItem("user"));
document.getElementById("perfil").innerHTML=  usuario.nombre 


});