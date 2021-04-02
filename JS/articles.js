/* recuperer l'id de l'url */
const params = new URLSearchParams(document.location.search);
const id = params.get("id");
console.log(id);

console.log(recherchedinfocamera());



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