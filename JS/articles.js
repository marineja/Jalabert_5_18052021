/* recuperer l'id de l'url */
const params = new URLSearchParams(document.location.search);
const id = params.get("id");
console.log(id);

console.log(recherchedinfocamera());



var allarticles = recherchedinfocamera();
console.log(allarticles);
var allarticleJSON = JSON.parse(allarticles);
console.log(allarticleJSON);

let blockarticle = document.createElement('div');

  console.log(allarticleJSON.name);
  let block = document.createElement("h4");
  block.setAttribute("class","card-header py-3");
  block.innerHTML = allarticleJSON.name;

  console.log(allarticleJSON.description);
  let blockdescription = document.createElement("div");
  blockdescription.setAttribute("class","descriptionarticles");
  blockdescription.innerHTML = allarticleJSON.description;

  console.log(allarticleJSON.price);
  let blockprix = document.createElement("div");
  blockprix.setAttribute("class","prix");
  blockprix.innerHTML = allarticleJSON.price;

  console.log(allarticleJSON.imageUrl);
  let blockimages = document.createElement("img");
  blockimages.setAttribute("class","imagecamera");
  blockimages.setAttribute("src",allarticleJSON.imageUrl);
 

  var blockselect = document.createElement('select');
  
  let optionduselect = document.createElement('option');
  optionduselect.innerHTML = "Choisissez votre lentille";
  optionduselect.setAttribute("value","");
  blockselect.appendChild(optionduselect);


  allarticleJSON.lenses.forEach(element => {
    console.log(element);
    let optionduselect = document.createElement('option');
    optionduselect.innerHTML = element;
    optionduselect.setAttribute("value",element);
    blockselect.appendChild(optionduselect);

    
  });

let boutonacheter = document.createElement('button');
boutonacheter.setAttribute("class", "boutonacheter");
boutonacheter.innerHTML = "acheter l'article";

/*ajouter evenement click*/
boutonacheter.addEventListener("click",function(){ 


alert("bonjour")






});
  

  let balisehtmlarticle = document.getElementById("descriptionarticle");
  balisehtmlarticle.appendChild(blockarticle);  
  blockarticle.appendChild(block);
  blockarticle.appendChild(blockdescription);
  blockarticle.appendChild(blockprix);
  blockarticle.appendChild(blockimages);  
  blockarticle.appendChild(blockselect);
  blockarticle.appendChild(boutonacheter);








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