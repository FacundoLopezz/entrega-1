
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



    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let msj = document.getElementById("msj");
    let usuario={}

function verificar(){

if (user.value.trim() ==='' || pass.value.trim()==='')
    {
        
        user.classList.add("isInvalid"); 
        msj.innerHTML="Dato requerido";
        msj.style.color="red"; 
        msj.style.display="block"; 
      
        
    }else {   
        location.href ="inicio.html"; 

        usuario.nombre = dato.value;
        usuario.estado ="conectado";

        localStorage.setItem('user',JSON.stringify(usuario)); 
        
        sessionStorage.setItem('user',JSON.stringify(usuario)); 
        
     
    }

} 

