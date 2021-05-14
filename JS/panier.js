

let produitEnregistreDansLeLocalsrorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitEnregistreDansLeLocalsrorage);
produitEnregistreDansLeLocalsrorage.forEach(function(element, index, array) {
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

    //Création corbeille
    let blocksupression = document.createElement("button");
    blocksupression.setAttribute("class","suprimerarticle");
    let corbeille = document.createElement("i");
    corbeille.setAttribute("class","fas fa-trash-alt");
    corbeille.addEventListener('click', function(){
      let newtable = array;
      newtable.splice(index, 1);
      let newtablestring = JSON.stringify(newtable);
      localStorage.setItem("produit", newtablestring);
      window.location.href = "panier.html";


    });

    card.appendChild(image);
    card.appendChild(titre);
    card.appendChild(prix);
    card.appendChild(blocksupression);
    blocksupression.appendChild(corbeille);
    container.appendChild(card);
  


  

})
//-----------------------bouton vier le panier----------------------------------------------------
let viderpanier = document.getElementById("viderpanier");

let boutonviderlepanier = document.createElement("button");
boutonviderlepanier.setAttribute("class", "suprimerlesarticles");
boutonviderlepanier.innerHTML = "vider le panier";


viderpanier.appendChild(boutonviderlepanier);

// ajouter un bouton et un evenement click(sur le bouton) pour suprimer l'element dans le local storage

const suprimerlesarticles = document.querySelector(".suprimerlesarticles");

suprimerlesarticles.addEventListener('click', (e) => {
  e.preventDefault;
  localStorage.removeItem("produit");
  alert("le panier à était vidé")

  //rechargement de la page panier
  window.location.href = "panier.html";

});

// --------------------------------------------------bouton corbeille-----------------------------------
// selection de toutes les corbeilles
let suprimerarticle = document.querySelectorAll(".suprimerarticle")



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
  };
  





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

  document.getElementById("commander").addEventListener("click", function(e) {
   

  
      var lastName = document.getElementById("lastname").value;
      var firstName = document.getElementById("firstname").value;
      var email = document.getElementById("email").value;
      var address = document.getElementById("address").value;
      var city = document.getElementById("city").value;

      //Regex
      var lastNameRegex = /^[a-zA-Z]/;
      var firstNameRegex = /^[a-zA-Z]/;
      var adressRegex = /([0-9]*) ?([a-zA-Z,\. ]*)/g;
      var emailRegex = /.+@.+\..+/;
      var cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

      var inputs = this.getElementsByTagName("input");

        if (lastNameRegex.test(lastName) == false) {
            alert ("Veuillez renseigner un nom valide"); 
            return false;
        }
        if (firstNameRegex.test(firstName) == false) {
          alert ("Veuillez renseigner un prénom valide"); 
          return false;
        }
        if (adressRegex.test(address) == false) {
          alert ("Veuillez renseigner une adresse valide"); 
          return false;
        }
        if (emailRegex.test(email) == false) {
          alert ("Veuillez renseigner un mail valide"); 
          return false;
        }
        if (cityRegex.test(city) == false) {
          alert ("Veuillez renseigner une ville valide"); 
          return false;
        }

    var contact = {
       lastName : document.getElementById('lastname').value,
       firstName : document.getElementById('firstname').value,
       email : document.getElementById('email').value,
       address : document.getElementById('address').value,
       city : document.getElementById('city').value

    }
    var order = {
      "contact" : contact,
      "products" : produitEnregistreDansLeLocalsrorage.map(el => el[0]) // initialise une variable el et dedans dans chaque element on recupere l'id
    }
    console.log(order);
// requete ajax post 
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/api/cameras/order", false);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 201) {
     // console.log(this.responseText);// stinggifier et enregistrer dans le localstorage ensuite faire une redirection vers la page resultat
      localStorage.setItem("products",this.responseText);
      window.location.href = "resultats.html";
      }
    };
    
    xhttp.send(JSON.stringify(order));


  });
    


    




