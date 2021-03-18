
// Récupération id dans l'url
var url_string = window.location.href;
var url = new URL(url_string);
var link = url.searchParams.get('id');
//console.log(link);

// API request
const fetchId = async() => {
  data = await fetch('http://localhost:3000/api/furniture/'+ link)
  .then(resp => resp.json())
  //console.log(data)
  .then(data => {

    //Ajout de l'image
    let image = document.getElementById('produits');
    image.src = data.imageUrl
    //console.log(image);

    //Ajout du modèle  PROBLEME AVEC LE NAME
    let title = document.querySelector('#name');
    title.innerHTML = data.name; 

    //Ajout du choix de vernis + Ajout de l'élément option
    let firstOption = document.createElement('option');
    firstOption.setAttribute('disabled', 'disabled');
    firstOption.setAttribute('selected', "true");
    firstOption.setAttribute('value', 0 );
    firstOption.textContent = 'Choisissez votre vernis';
    option.appendChild(firstOption);
    //console.log(firstOption);
        
    //boucle pour récupérer les couleurs disponibles
    for(let i = 0; i < data.varnish.length; i++) {

        let varnishOption = document.createElement('option');
        varnishOption.setAttribute('value', 1);
        varnishOption.textContent = data.varnish[i];
        option.appendChild(varnishOption);
        //console.log(varnishOption);
    };                      

    // Ajout de la description
    let description = document.querySelector('#info');
    description.innerHTML = data.description;

    //Ajout du prix
    let price = document.getElementById('price');
    price.innerHTML = data.price + '€';
    
  });
};

fetchId();