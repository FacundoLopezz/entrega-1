document.addEventListener("DOMContentLoaded",()=> {

let usuario = JSON.parse(localStorage.getItem("perfil"));
let dato= usuario.nick;
document.getElementById("perfil").innerHTML=  dato




let perfil = JSON.parse(localStorage.getItem('foto'));
  document.getElementById('foto2').src = perfil.imagen;

});

function salir(){

    localStorage.clear(); 
    signOut();
    location.href="index.html"; 
  }

  function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
    });
  }
  
  function onLoad(){
    gapi.load("auth2",function(){
    gapi.auth2.init();
    });
  }
     