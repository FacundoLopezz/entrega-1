//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            showCategoriesList(categoriesArray);
        }
    });
});







var categoriesArray = [];
let minimo = document.getElementById("min").value;

let maximo = document.getElementById("max").value;




function showCategoriesList(){
if (minimo == ""){
    (minimo= 0)
}
if (maximo == ""){
    (maximo= 100000)
}   

    let htmlContentToAppend = `  
    <div id="listaestilo" class="container mt-12 m border">
      <div class="row "> `;

    for(let i = 0; i < categoriesArray.length; i++){
        let category =categoriesArray[i];
if (category.cost>= minimo && category.cost<=maximo ){

        htmlContentToAppend += `
       
           
 
     
           <div class="col-sm-4">
                <div >
                <br>
                    <img  style="max-width:100%;height:auto;" class="bd-placeholder-img card-img-top" src="` + category.imgSrc + `" alt="` + category.description + `" >
                </div>
                <div >
                    <div >
                    <a href="product-info.html">  <h4 >`+ category.name +`</h4></a>
                    <small >` + category.soldCount + ` artículos</small>
                        <p >` + category.currency + ` ` + category.cost +`</p>
                        
                    </div>
                   <p  class="card-text">`+ category.description +`</p> 
            </div>
            </div>
   
              
        
        `

       
    }
    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
}}


document.getElementById('aplicar').addEventListener('click',()=>{
    minimo =parseInt(document.getElementById("min").value);
    maximo =parseInt(document.getElementById("max").value);
    showCategoriesList(); 
  });




//---------------------------------------------orden ascendente y descendente
function ordenarPrecio (){

    categoriesArray.sort((a,b)=>{
        if (a.cost >b.cost){
            return 1;
        }
        if (a.cost < b.cost){
            return -1;
        }else{
            return 0;
        }

    });
    showCategoriesList(categoriesArray)

}

function ordenarPr (){
    ordenarPrecio(categoriesArray);
    
}



function ordenarPopularidad(){
    let nombre=[]
    categoriesArray.sort((a,b)=>{
        if (a.soldCount >b.soldCount){
            return 1;
        }
        if (a.soldCount < b.soldCount){
            return -1;
        }else{
            return 0;
        }

    });
    nombre=categoriesArray.reverse()
    showCategoriesList(nombre)
 
}

function ordenarPo (){ 
    ordenarPopularidad(categoriesArray); 
}

document.getElementById('popular').addEventListener('click',()=>{
    ordenarPo();
  });
document.getElementById('precio').addEventListener('click',()=>{
    ordenarPr();
});
