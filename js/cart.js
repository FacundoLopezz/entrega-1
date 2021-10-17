

let cartArray =[];

document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CARRO).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            cartArray = resultObj.data;
            carro();
            
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

</tr>

  `  
id++      ; }      );
  


  document.getElementById("carrito").innerHTML = lista;
  sumar();}
    



  function sumar(){
    let precios = document.getElementsByClassName('precio'); 

    let cantidades = document.getElementsByTagName ('input');
    let total=0;
    
    for (let i=0; i< precios.length; i++){

  
        total+= parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value);

        document.getElementById('res'+i).innerHTML = parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value);
    }

 
    document.getElementById('total').innerHTML=(total).toFixed(2);
}