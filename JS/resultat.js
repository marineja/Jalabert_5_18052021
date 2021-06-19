afficheOrderId();
function afficheOrderId (){
// rechercher l'order id dans le local storage(parse)

let products = JSON.parse(localStorage.getItem("products"));
console.log(products);

// afichage message confirmation commande

 let getConfirmation = document.getElementById('confirmation').innerHTML = "Votre numéro de commande:  " + products.orderId;

}



