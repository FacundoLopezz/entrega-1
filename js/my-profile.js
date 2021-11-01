//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded",()=> {
    let usuario = JSON.parse(localStorage.getItem("perfil"));
    let dato= usuario.nick;
    document.getElementById("perfil").innerHTML=  dato
    document.getElementById("perfil1").innerHTML=  dato
    
    });
    
document.addEventListener("DOMContentLoaded", function(e){
 user=JSON.parse(localStorage.getItem("usuario"))
   if (localStorage.getItem("usuario")!=null){
    cuenta()
}})



     
    





function registros(){


    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let edad= document.getElementById("edad");
    let correo=document.getElementById("correo");
    let telefono=document.getElementById("telefono");
    
    let user={}
    user.nombre = nombre.value;
    user.apellido = apellido.value;
    user.edad = edad.value;
    user.correo = correo.value;
    user.telefono = telefono.value;
    
    
 if ( user.nombre ==='' ||user.apellido.trim() ==='' ||  user.edad.trim() ===''||user.correo.trim() ==='' ||user.telefono.trim() ==='' ){
    alert("campo vacio")
}else{

    localStorage.setItem('usuario',JSON.stringify(user)); 
    document.getElementById("nombre1").innerHTML = user.nombre;
    document.getElementById("apellido1").innerHTML = user.apellido;
    document.getElementById("edad1").innerHTML = user.edad;
    document.getElementById("correo1").innerHTML = user.correo;
    document.getElementById("telefono1").innerHTML = user.telefono;
}
   
}


function cuenta(){
    document.getElementById("nombre1").innerHTML = user.nombre;
    document.getElementById("apellido1").innerHTML = user.apellido;
    document.getElementById("edad1").innerHTML = user.edad;
    document.getElementById("correo1").innerHTML = user.correo;
    document.getElementById("telefono1").innerHTML = user.telefono;
}




