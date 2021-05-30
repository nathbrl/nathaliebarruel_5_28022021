function displayFirstProduct(product) {
  //targeting the first product from the array and getting the infos (image, name and description)
  const furniture =  product[0];

  const image1 = document.querySelector('.image');
  image1.innerHtml = furniture.imageUrl;

  const name1 = document.querySelector('.name');
  name1.innerHTML = furniture.name;

  const desc1 = document.querySelector('.info');
  desc1.innerHTML = furniture.description;
}

function displaySecondProduct(product) {
  //targeting the second product from the array and getting the infos (image, name and description)
  const furniture = product[1];

  const image1 = document.querySelector('.image1');
  image1.innerHtml = furniture.imageUrl;

  const name1 = document.querySelector('.name1');
  name1.innerHTML = furniture.name;

  const desc1 = document.querySelector('.info1');
  desc1.innerHTML = furniture.description;
}

function displayThirdProduct(product) {
  //targeting the third product from the array and getting the infos (image, name and description)
  const furniture = product[2];

  const image1 = document.querySelector('.image2');
  image1.innerHtml = furniture.imageUrl;

  const name1 = document.querySelector('.name2');
  name1.innerHTML = furniture.name;

  const desc1 = document.querySelector('.info2');
  desc1.innerHTML = furniture.description;
}

function displayFourthProduct(product) {
  //targeting the fourth product from the array and getting the infos (image, name and description)
  const furniture = product[3];

  const image1 = document.querySelector('.image3');
  image1.innerHtml = furniture.imageUrl;

  const name1 = document.querySelector('.name3');
  name1.innerHTML = furniture.name;

  const desc1 = document.querySelector('.info3');
  desc1.innerHTML = furniture.description;
}

function displayFifthProduct(product) {
  //targeting the fifth product from the array and getting the infos (image, name and description)
  const furniture = product[4];
  const image1 = document.querySelector('.image4');
  image1.innerHtml = furniture.imageUrl;

  const name1 = document.querySelector('.name4');
  name1.innerHTML = furniture.name;

  const desc1 = document.querySelector('.info4');
  desc1.innerHTML = furniture.description;
}

//Using fetch to get url and all API data
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