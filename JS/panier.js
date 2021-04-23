
//var allarticles = recherchedinfocamera();
//var allarticleJSON = JSON.parse(allarticles);






let produitEnregistreDansLeLocalsrorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistreDansLeLocalsrorage);
produitEnregistreDansLeLocalsrorage.forEach(function(element, index, array) {
  console.log(index);
  console.log(element[0]);
  var onearticle = JSON.parse(recherchedinfocamera(element[0]));
  console.log(onearticle);
    //Récupération du container
    let container = document.getElementById("container")

    //Création d'une card (div qui contient un article) pour chaque article
    let card = document.createElement("div");

    //Création de l'image
    let image = document.createElement("img");
    image.setAttribute("src" , onearticle.imageUrl);

    //Création du titre
    let titre = document.createElement("h2");
    titre.innerText = onearticle.name;

    //Création du prix
    let prix = document.createElement("h3");
    let prixText = onearticle.price / 100;
    prixText = prixText + " €";
    prix.innerText = prixText;

    card.appendChild(image);
    card.appendChild(titre);
    card.appendChild(prix);
    container.appendChild(card);

  
// ajouter un bouton et un evenement click(sur le bouton) pour suprimer l'element dans le local storage



});



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
  }
  





  function recherchedinfocamera(id) {
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



  //---------------------------formulaire----------------------------------------

  document.getElementById("inscription").addEventListener("submit", function(e) {
   

    var erreur;
    var lastName = document.getElementById("lastname");
    var firstName = document.getElementById("firstname");
    var email = document.getElementById("email");
    var address = document.getElementById("address");
    var city = document.getElementById("city");

    var inputs = this.getElementsByTagName("input");

    if (!lastName.value) {
        erreur = "Veuillez renseigner un nom";
    }
    if (!firstName.value) {
      erreur = "Veuillez renseigner un prénom";
  }
    if (!email.value) {
        erreur = "Veuillez renseigner un email";
    }
    if (!address.value) {
      erreur = "Veuillez renseigner une adresse";
  }
  if (!city.value) {
    erreur = "Veuillez renseigner une ville";
}

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire envoyé');

    }


    
})

// sauvegarder les données formulaire dans le localstorage

function resultat(){
    let lastName = document.getElementById('lastname').value;
    let firstName = document.getElementById('firstname').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;



      sessionStorage.setItem('lastname', lastName);
      sessionStorage.setItem('firstname', firstName);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('address', address);
      sessionStorage.setItem('city', city);
}

// recuperation valeur de lutilisateur dans sessionstorage

let getName = document.getElementById('lastname').value = sessionStorage.getItem('lastname');
let getprenom = document.getElementById('firstname').value = sessionStorage.getItem('firstname');

// afichage message confirmation commande

let getConfirmation = document.getElementById('confirmation').innerHTML = "Confirmation de commande" + sessionStorage.getItem('lastname');