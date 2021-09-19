
document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
    if (resultObj.status === "ok")
    {
        categoriesArray = resultObj.data;
        showCategoriesList(categoriesArray);
        imagenes()
    }
});
getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
    if (resultObj.status === "ok")
    {
        comentariosArray = resultObj.data;
        comentarios(comentariosArray)
    }
})
});



//--------------------------------------------------------------------- Categorias


var categoriesArray = [];

function showCategoriesList(){

  
      let htmlContentToAppend = "";
      

          htmlContentToAppend += `
          <div class="list-group-item list-group-item-action">
              <div class="row">
                
                  <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="mb-1">`+ categoriesArray.name +`</h4>
                          <small class="text-muted">` + categoriesArray.soldCount + ` artículos</small>
                          <small class="text-muted">` + categoriesArray.currency + ` ` + categoriesArray.cost +`</small>
                      </div>
                     <p class="mb-1">`+ categoriesArray.description +`</p> 
                     
                  </div>
              </div>
          </div>
          `  
             
               document.getElementById("muestra").innerHTML = htmlContentToAppend;}


function imagenes(){
let imagenes=""
    for(category of categoriesArray.images){
        imagenes+=`;
         <img src=" `   + category  +  `" style="width:300px" >`
}

document.getElementById("imagenes").innerHTML = imagenes;

}




function comentarios(com){
let comentarios="";

for( com of comentariosArray){

comentarios += `
            <table class="text-center table ">
                     <tr>  
                       <td>`+ com.user+`</td>
                       <td>` + com.description + ` </td> 
                       <td>` +califico(com.score) + ` </td> 
                       <td> ` +com.dateTime +`</td>
                  </tr>
          </table>
          `  
}
               document.getElementById("comentarios").innerHTML = comentarios;}



 //---------------------------------------------------------------------------------------------------------------- Comentarios


let lista = []; 

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("enviar").addEventListener("click", () => {

    let persona = {}; 

     persona.comentario = document.getElementById("comentario").value; 
     persona.estrellas = parseInt(document.getElementById("estrellas").value);
     if (persona.comentario.trim() == "") {
        alert("Danos tu opinion");
    } else {
      lista.push(persona);
    }
    mostrar(lista);
   })})
   
   
   function mostrar (lista){  
    let tabla = document.getElementById("tabla"); //Obtengo el "tbody"
    let filas = "";

    for ( let persona of lista) {    
        filas +=`
        <table class="text-center table ">
         <tr>
               <td>`+ "tu nombre"  +`</td>
               <td> `+ persona.comentario +`</td>
               <td>` +califico(persona.estrellas)  + `</td> 
    
           </tr></tabla>`
    }
    tabla.innerHTML = filas;
    console.log(lista);
    
    }

    function califico(num){
  
        let estrellas = "";
        for (let i=1; i<=5; i++){
  
            if (i<=num ){  
  
                estrellas += '<i class="fas fa-car-side"></i>';
                
            }else {
                estrellas +='<i class="fas fa-car-crash"></i>';
            }
        }
        
    return estrellas;
    }
    