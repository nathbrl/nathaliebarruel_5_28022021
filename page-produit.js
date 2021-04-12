// ID RECOVERING FROM URL
const urlLoc = window.location.href;
const url = new URL(urlLoc);
const link = url.searchParams.get('id');
//console.log(link);

// API REQUEST
const fetchFurniture = async() => {
  data = await fetch('http://localhost:3000/api/furniture/'+ link)
  .then(resp => resp.json())

    //ADDING IMAGE
    const image = document.getElementById('produits');
    image.src = data.imageUrl;
    //console.log(image);

    //ADDING FURNITURE NAME
    const title = document.querySelector('#name');
    title.innerHTML = data.name; 

    //ADDING VARNISH OPTION
    const firstOption = document.createElement('option');
    firstOption.setAttribute('disabled', 'disabled');
    firstOption.setAttribute('selected', "true");
    firstOption.setAttribute('value', 0 );
    firstOption.textContent = 'Choisissez un vernis';
    option.appendChild(firstOption);
    //console.log(firstOption);
        
    //LOOP FOR THE COLORS
    for(let i = 0; i < data.varnish.length; i++) {

        const varnishOption = document.createElement('option');
        varnishOption.setAttribute('value', 1);
        varnishOption.textContent = data.varnish[i];
        option.appendChild(varnishOption);
        //console.log(varnishOption);
    };    
    
    // ADDING DESCRIPTION
    const description = document.querySelector('#info');
    description.innerHTML = data.description;

    //ADDING PRICE
    const price = document.getElementById('price');
    price.innerHTML = data.price + '€';
};

fetchFurniture();