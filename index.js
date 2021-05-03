function displayFirstProduct(product) {
  const furniture =  product[0];
  const id = product[0]._id;

  const image1 = document.querySelector('.image');
  image1.innerHtml = furniture.imageUrl;

  const name1 = document.querySelector('.name');
  name1.innerHTML = furniture.name;

  const varnish1 = document.querySelector('.varnish');
  varnish1.innerHTML = furniture.varnish;

  const desc1 = document.querySelector('.info');
  desc1.innerHTML = furniture.description;

  const price1 = document.querySelector('.price');
  price1.innerHTML = furniture.price + "€";
}

function displaySecondProduct(product) {
  const furniture = product[1];
  const id = product[1]._id;

  const image1 = document.querySelector('.image1');
  image1.innerHtml = furniture.imageUrl;

  const name1 = document.querySelector('.name1');
  name1.innerHTML = furniture.name;

  const varnish1 = document.querySelector('.varnish1');
  varnish1.innerHTML = furniture.varnish;

  const desc1 = document.querySelector('.info1');
  desc1.innerHTML = furniture.description;

  const price1 = document.querySelector('.price1');
  price1.innerHTML = furniture.price + "€";
}

function displayThirdProduct(product) {
  const furniture = product[2];
  const id = product[2]._id;

  const image1 = document.querySelector('.image2');
  image1.innerHtml = furniture.imageUrl;

  const name1 = document.querySelector('.name2');
  name1.innerHTML = furniture.name;

  const varnish1 = document.querySelector('.varnish2');
  varnish1.innerHTML = furniture.varnish;

  const desc1 = document.querySelector('.info2');
  desc1.innerHTML = furniture.description;

  const price1 = document.querySelector('.price2');
  price1.innerHTML = furniture.price + "€";
}

function displayFourthProduct(product) {
  const furniture = product[3];
  const id = product[3]._id;

  const image1 = document.querySelector('.image3');
  image1.innerHtml = furniture.imageUrl;

  const name1 = document.querySelector('.name3');
  name1.innerHTML = furniture.name;

  const varnish1 = document.querySelector('.varnish3');
  varnish1.innerHTML = furniture.varnish;

  const desc1 = document.querySelector('.info3');
  desc1.innerHTML = furniture.description;

  const price1 = document.querySelector('.price3');
  price1.innerHTML = furniture.price + "€";
}

function displayFifthProduct(product) {
  const furniture = product[4];
  const id = product[4]._id;

  const image1 = document.querySelector('.image4');
  image1.innerHtml = furniture.imageUrl;

  const name1 = document.querySelector('.name4');
  name1.innerHTML = furniture.name;

  const varnish1 = document.querySelector('.varnish4');
  varnish1.innerHTML = furniture.varnish;

  const desc1 = document.querySelector('.info4');
  desc1.innerHTML = furniture.description;

  const price1 = document.querySelector('.price4');
  price1.innerHTML = furniture.price + "€";
}

function fetchFurnitures() { 
  fetch("http://localhost:3000/api/furniture")
  .then((res) => res.json())
  .then(furniture => {
    displayFirstProduct(furniture);
    displaySecondProduct(furniture);
    displayThirdProduct(furniture);
    displayFourthProduct(furniture);
    displayFifthProduct(furniture);
  })
  .catch(error => console.log(error));
}
fetchFurnitures();