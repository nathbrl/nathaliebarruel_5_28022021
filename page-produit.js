function getProductUrl() {
    const urlLoc = window.location.href;
    const url = new URL(urlLoc);
    const newUrl = url.searchParams.get('id');

  function displayProductImage(furniture) {
    const image = document.getElementById("produits");
    image.src = furniture.imageUrl;
  }

  function displayProductName(furniture) {
    const title = document.querySelector("#name");
    title.innerHTML = furniture.name;
  }

  function displayProductDescription(furniture) {
    const description = document.querySelector("#info");
    description.innerHTML = furniture.description;
  }

  function displayProductPrice(furniture) {
    const price = document.getElementById("price");
    price.innerHTML = furniture.price + "€";
  }

  function varnishOption() {
    const firstOption = document.createElement("option");
    firstOption.setAttribute("disabled", "disabled");
    firstOption.setAttribute("selected", "true");
    firstOption.setAttribute("value", 0);
    firstOption.textContent = "Choisissez un vernis";
    option.appendChild(firstOption);
  }

  function displayProductVarnish(furniture) {
    const furnitureVarnish = furniture.varnish;
    furnitureVarnish.forEach((furniture) => {
    const varnishOption = document.createElement("option");
    varnishOption.setAttribute("value", 1);
    varnishOption.textContent = furniture;
    option.appendChild(varnishOption);
    })
  }

  fetch("http://localhost:3000/api/furniture/" + newUrl)
    .then((response) => response.json())
    .then(furniture => {
      displayProductImage(furniture);
      displayProductName(furniture);
      displayProductDescription(furniture);
      displayProductPrice(furniture);
      varnishOption()
      displayProductVarnish(furniture);
    })
    .catch(error => console.log(error));
}
getProductUrl()