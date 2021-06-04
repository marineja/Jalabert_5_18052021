
fetch("http://localhost:3000/api/cameras/") //appel de l'API 
.then(res => res.json())
.then(res => {
  console.log(res);
  var allarticleJSON = res;
  console.log(allarticleJSON);

allarticleJSON.forEach(element => {
    console.log(element.name);
    let block = document.createElement("h4");
    block.setAttribute("class","card-header py-3");
    block.innerHTML = element.name;

    console.log(element.description);
    let blockdescription = document.createElement("div");
    blockdescription.setAttribute("class","descriptionarticles");
    blockdescription.innerHTML = element.description;

    console.log(element.price);
    let blockprix = document.createElement("div");
    blockprix.setAttribute("class","prix");
    blockprix.innerHTML = element.price;

    console.log(element.imageUrl);
    let blockimages = document.createElement("img");
    blockimages.setAttribute("class","imagecamera");
    blockimages.setAttribute("src",element.imageUrl);
    blockimages.innerHTML = element.imageUrl;

    let blockarticle = document.createElement ("a");
    blockarticle.setAttribute("class","onearticle");
    blockarticle.setAttribute("href","/pagearticle.html?id="+element._id)
    blockarticle.appendChild(block);
    blockarticle.appendChild(blockdescription);
    blockarticle.appendChild(blockprix);
    blockarticle.appendChild(blockimages);
    

    let balisehtmlarticles = document.getElementById("articles");
    balisehtmlarticles.appendChild(blockarticle);    
  

  

});
})




    




