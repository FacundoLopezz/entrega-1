
document.addEventListener("DOMContentLoaded", function(e){});




function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); 
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); 
     // The ID token you need to pass to your backend:
     var id_token = googleUser.getAuthResponse().id_token;
     console.log("ID Token: " + id_token);
     location.href ="inicio.html";

     let usuario={}
     usuario.nombre=profile.getName();
     usuario.estado="conectado";
     localStorage.setItem('user',JSON.stringify(usuario));   
    sessionStorage.setItem('user',JSON.stringify(usuario)); 
   }



    let nick = document.getElementById("nick");
    let pass = document.getElementById("pass");
    let msj = document.getElementById("msj");
    let perfil={}

function verificar(){

if (nick.value.trim() ==='' || pass.value.trim()==='')
    {
        
        nick.classList.add("isInvalid"); 
        msj.innerHTML="Dato requerido";
        msj.style.color="red"; 
        msj.style.display="block"; 
      
        
    }else {   
        location.href ="inicio.html"; 

        perfil.nick = nick.value;
        perfil.pass = pass.value;
        
        localStorage.setItem('perfil',JSON.stringify(perfil)); 
        
        sessionStorage.setItem('perfil',JSON.stringify(perfil)); 
        
     
    }

} 

