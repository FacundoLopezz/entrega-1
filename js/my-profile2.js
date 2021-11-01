
function convertir(img) {
   
    var canvas = document.createElement("canvas");
  

    var contexto = canvas.getContext("2d");
   
    var dataURL = canvas.toDataURL("image/jpeg");
    return dataURL;
  }

  document.addEventListener('DOMContentLoaded',function(){
  var imgbase64 = convertir(document.getElementById("img"));
  localStorage.imagen=imgbase64;
  
 
  console.log(imgbase64);
  });


  
  function previewFile() {
    let preview = document.getElementById('foto');
    let file    = document.querySelector('input[type=file]').files[0];
    let reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result; 
    
      
    }
  
    if (file) {
      reader.readAsDataURL(file);
     
    
    }
  }

  function guardar_foto(){
    let perfil = {};
     let foto_perfil=document.getElementById("foto").src;
     perfil.imagen =foto_perfil
     
     localStorage.setItem('foto',JSON.stringify( perfil)); 



     
  }






  document.addEventListener('DOMContentLoaded',()=>{

    let perfil = JSON.parse(localStorage.getItem('foto'));
    
   
    if (perfil != null){
        

      document.getElementById('foto1').src = perfil.imagen;
 
   
    }
   

  })