

let cartArray =[];

document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CARRO).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            cartArray = resultObj.data;
            carro();
           detalles();

        }
    });
    
    
    });



    function carro(){
    
      let lista="";
      let id =0
      
     
     
      cartArray.articles.forEach(element =>{
       let costo = element.unitCost
       if (element.currency=="UYU"){costo=costo/40} 
     
       lista+=   ` 
       <tr>  
       <td> <img src="`+element.src+`" id=carro ></td>
       <td>`+ element.name+`</td>
       <td>  <input value="`+element.count+ `" type ="number" id='cant${element}' onchange='sumar()' min="1" > </td> 
       <td > USD <span class='precio'>` + costo + `</span></td>
       <td><span  id='res${id}'> </span></td>
       <td><button class="btn btn-outline-danger">x</button>  </td>
     </tr>
       `  
     id++      ; }      );
       
     
     
       document.getElementById("carrito").innerHTML = lista;
       sumar();}
         
     
     
     
       function sumar(){
         let precios = document.getElementsByClassName('precio'); 
         let envios = document.getElementsByClassName("form-check-input");
         let cantidades = document.getElementsByTagName ('input');
       

         let total=0;
         
         for (let i=0; i< precios.length; i++ ) {
     
             total+= parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value);

             document.getElementById('res'+i).innerHTML = total;
             document.getElementById('ress'+i).innerHTML = total;


             for(let x=0; x<3; x++){
              if(envios[x].checked){
               total= total* parseFloat(envios[x].value);
             } }

             document.getElementById('total').innerHTML=(total).toFixed(2);
             document.getElementById('total1').innerHTML=(total).toFixed(2); 
            
         }
        
        
     }


















function detalles(){

  let lista="";
 let id =0
 


 cartArray.articles.forEach(element =>{
  let costo = element.unitCost
  if (element.currency=="UYU"){costo=costo/40} 

  lista+=   ` 

  <tr class="text-center table ">  

  <td class="emergente">`+ element.name+`</td>
  
  <td   class="emergente"> USD <span class='precio'>` + costo + `</span></td>
  <td class="emergente" colspan="2">USD <span  id='ress${id}'> </span></td>
 
</tr>

  `  
id++      ; }      );
  
  document.getElementById("carrito1").innerHTML = lista;
  
  sumar();  

}


function eliminar(){


}