
var allarticles = recherchedinfocamera();
var allarticleJSON = JSON.parse(allarticles);






let produitEnregistreDansLeLocalsrorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistreDansLeLocalsrorage);

// affichage des produits dans panier
//selection de la class qui va contenir le code html

const positionElement = document.querySelector("#descriptionarticle");
console.log( positionElement);

//si panier vide message

if (produitEnregistreDansLeLocalsrorage === null){
const panierVide = `
    <div class="lecontainer-vide">
        <div>Le panier est vide</div>
    </div>
    `;
    positionElement.innerHTML = panierVide;
  } else{
    //si le panier n'est pas vide message afficher les produits dans le localstorage
    let structureProduitPanier = [];
    for (i = 0; i < produitEnregistreDansLeLocalsrorage.length; i++ ){
        structureProduitPanier = structureProduitPanier + `
        <div id="descriptionarticle">${produitEnregistreDansLeLocalsrorage[i].name.price.description.imageUrl}</div>
        `;}
        
        if (i == produitEnregistreDansLeLocalsrorage.length){
        // injection HTML dans la page panier
        positionElement.innerHTML = structureProduitPanier;
      }

        
        

    }













  function recherchedinfocamera() {
    var articles;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      articles = this.responseText;
      }
    };
    xhttp.open("GET", "http://localhost:3000/api/cameras/"+id, false);
    xhttp.send();
    return articles;
  }