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

    let htmlContentToAppend = "";
    for(let i = 0; i < categoriesArray.length; i++){
        let category =categoriesArray[i];
if (category.cost>= minimo && category.cost<=maximo ){

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ category.name +`</h4>
                        
                        <small class="text-muted">` + category.soldCount + ` artículos</small>
                        <small class="text-muted">` + category.currency + ` ` + category.cost +`</small>
                    </div>
                   <p class="mb-1">`+ category.description +`</p> 
                </div>
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
