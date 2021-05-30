//function to get th id of each product in the url and the add to cart button
function getProductUrl() {
  const urlLoc = window.location.href;
  const url = new URL(urlLoc);
  const urlId = url.searchParams.get('id');
  //console.log(urlId);
  const button = document.querySelector('.add-to-cart-btn');
  button.setAttribute('id', urlId);
  return urlId;
}
//function to display the product details
function displayProductDetails() {
  const newUrl = getProductUrl();
  
  //displays the product image
  function displayProductImage(product) {
    const image = document.getElementById("produits");
    image.src = product.imageUrl;
    //console.log(product.imageUrl);
  }
  //displays the product name
  function displayProductName(product) {
    const title = document.querySelector("#name");
    title.innerHTML = product.name;
    //console.log(product.name);
  }
  //displays the product description
  function displayProductDescription(product) {
    const description = document.querySelector("#info");
    description.innerHTML = product.description;
    //console.log(product.description);
  }
  ////displays the product price
  function displayProductPrice(product) {
    const price = document.getElementById("price");
    price.innerHTML = product.price/100 + ',00'+ "€";
    //console.log(price.innerHTML);
  }
  //creating a choice option in html
  function varnishOption() {
    const firstOption = document.createElement("option");
    firstOption.setAttribute("disabled", "disabled");
    firstOption.setAttribute("selected", "true");
    firstOption.setAttribute("value", 0);
    firstOption.textContent = "Choisissez un vernis";
    option.appendChild(firstOption);
    //console.log(firstOption);
  }
  //displays the varnish available for each products
  function displayProductVarnish(product) {
    const furnitureVarnish = product.varnish;
    //console.log(product.varnish);
    furnitureVarnish.forEach((product) => {
    const varnishOption = document.createElement("option");
    varnishOption.setAttribute("value", 1);
    varnishOption.textContent = product;
    option.appendChild(varnishOption);
    })
  }
  //fetch the api url and the url with the product id for each product
  fetch("http://localhost:3000/api/furniture/" + newUrl)
    .then((response) => response.json())
    .then(furniture => {
      displayProductImage(furniture);
      displayProductName(furniture);
      displayProductDescription(furniture);
      displayProductPrice(furniture);
      varnishOption();
      displayProductVarnish(furniture);
    })
    .catch(error => console.log(error));
}
displayProductDetails();