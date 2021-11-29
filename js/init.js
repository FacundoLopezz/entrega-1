const CATEGORIES_URL = "http://localhost:3000/lista";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "http://localhost:3000/productos";
const PRODUCT_INFO_URL = "http://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "http://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "http://localhost:3000/cart";
const CARRO="https://japdevdep.github.io/ecommerce-api/cart/654.json";


/*const CART_BUY_URL = "http://localhost:3000/cart";
const PRODUCTS_URL = "http://localhost:3000/productos";
const CATEGORIES_URL = "http://localhost:3000/lista"; */

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

function onLoad(){
  gapi.load("auth2",function(){
  gapi.auth2.init();
  });
}


function signOut(){
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function(){
  });
}

function salir(){

  localStorage.clear(); 
  signOut();
  location.href="index.html"; 
}

document.addEventListener("DOMContentLoaded", function(e){
});