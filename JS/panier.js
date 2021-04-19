
let produitEnregistreDansLeLocalsrorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistreDansLeLocalsrorage);

// affichage des produits dans panier
//selection de la class qui va contenir le code html

const positionElement = document.querySelector("#container-produit-panier");
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
    //si le panier n'est pas vide message
}
