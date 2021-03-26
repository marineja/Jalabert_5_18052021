

var allarticles = recherchedinfocamera();
console.log(allarticles);
var allarticleJSON = JSON.parse(allarticles);
console.log(allarticleJSON);

allarticleJSON.forEach(element => {
    console.log(element.name);
    let block = document.createElement("div");
    block.setAttribute("class","nomarticle");
    block.innerHTML = element.name;

    console.log(element.description);
    let blockdescription = document.createElement("div");
    blockdescription.setAttribute("class","descriptionarticles");
    blockdescription.innerHTML = element.description;

    console.log(element.price);
    let blockprix = document.createElement("div");
    blockprix.setAttribute("class","prixarticle");
    blockprix.innerHTML = element.price;

    console.log(element.imageUrl);
    let blockimages = document.createElement("img");
    blockimages.setAttribute("class","imagecamera");
    blockimages.setAttribute("src",element.imageUrl);
    blockimages.innerHTML = element.imageUrl;

    

    let balisehtmlarticles = document.getElementById("articles");
    balisehtmlarticles.appendChild(block);
    balisehtmlarticles.appendChild(blockdescription);
    balisehtmlarticles.appendChild(blockprix);
    balisehtmlarticles.appendChild(blockimages);
    
  

  

});


// fonction ajax pour aller chercher l'API 

function recherchedinfocamera() {
    var articles;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      articles = this.responseText;
      }
    };
    xhttp.open("GET", "http://localhost:3000/api/cameras", false);
    xhttp.send();
    return articles;
  }