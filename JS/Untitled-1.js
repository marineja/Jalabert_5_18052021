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

    // fonction fetch pour appeller l'api
    function recherchedinfocamera(){
        fetch("http://localhost:3000/api/cameras/") //Rappel notre api 
        .then((response) => response.json())
        .then(response => console.log(response));
       
      }
     
      // fonction fetch pour appeller l'api
function recherchedinfocamera(){
  var response;
  var articles = response.json(); 
  fetch("http://localhost:3000/api/cameras/") //appel de l'API 
  .then(response => response.json()) 
  .then(function(response) {
    console.log(response)
    return articles;
  })
  .then(response => console.log(response))
  