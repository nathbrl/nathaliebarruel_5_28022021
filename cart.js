let furnitures;
// API request
const fetchFurnitures = async() => {
    furnitures = await fetch('http://localhost:3000/api/furniture')
    .then(resp => resp.json())
};
  
  // SELECTION OF EVERY 'add to cart' BUTTON
const carts = document.querySelectorAll('.cart-btn');
  
  // LOOP FOR EACH ITEMS ADDED IN OUR CART
for (let i = 0; i < carts.length; i++){
      carts[i].addEventListener('click', (e) => {
      //console.log('Votre article a bien été ajouté au panier');
      cartNumbers(furnitures[i]);
      //console.log(furnitures);
      totalCost(furnitures[i])
      })
}
  // PRODUCTS THAT ARE IN OUR LOCALSTORAGE
function onLoadCartNumbers() {
    const productNumbers = localStorage.getItem('cartNumbers');
      // MATCHING NUMBER OF PRODUCT IN CART AND IN LOCALSTORAGE 
      if(productNumbers) {
          document.querySelector('.qty').textContent = productNumbers;
      }
}
  //HOW MANY ITEMS I HAVE IN CART
function cartNumbers(furnitures) {
      //console.log('the product clicked is', product);
      productNumbers = localStorage.getItem('cartNumbers');
      productNumbers = parseInt(productNumbers);
  
      // ADDING THE NEW ITEM ADDED TO CART
      if(productNumbers) {
          localStorage.setItem('cartNumbers', productNumbers + 1);
          document.querySelector('.qty').textContent = productNumbers + 1;
      } else {
          localStorage.setItem('cartNumbers', 1);
          document.querySelector('.qty').textContent = 1;
    }
              
    setItems(furnitures)
}
    // ADDING ITEMS TO LOCALSTORAGE
function setItems(furnitures) {  
      // INITIALISATION OF PRODUCT
      const cart = [];
      // Parse the serialized data back into an aray of objects
      cart = JSON.parse(localStorage.getItem('productAdded')) || [];
      // Push the new data
      cart.push(furnitures);
      console.log(furnitures);
      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem('productAdded', JSON.stringify(cart));
}
  
  // TOTAL CART COST CALCULATION
function totalCost(article) {
      //console.log('the product price is', article.price);
      const cartCost = localStorage.getItem('totalCost');
      //console.log('my cartcost is', cartCost);
  
      if (cartCost != null) {
          cartCost = parseInt(cartCost);
          localStorage.setItem('totalCost', cartCost + article.price);
      } else {
          // prix total des articles dans le local storage
          localStorage.setItem('totalCost', article.price);
    }
}
  
  // DISPLAY ARTICLE IN CART PAGE
function displayCart() {
    let cartItems = localStorage.getItem('productAdded');
    cartItems = JSON.parse(cartItems);
    //console.log(cartItems);
  
    const pageArticle = document.querySelector('.products');
    const cartCost = localStorage.getItem('totalCost');
  
    if (cartItems && pageArticle) {
        pageArticle.innerHTML = '';
        Object.values(cartItems).map(products => {
            pageArticle.innerHTML += `
            <div class="product">
                <div class="image-url">
                    <img src="${products.imageUrl}" class="image">
                </div>
                <span>${products.name}</span>
                <div class="price">
                    ${products.price} € 
                    <button class="remove">Remove</button>
                </div>
            </div>
            `
        });
  
        pageArticle.innerHTML += `
            <div class = "cart-total">
                <h3 class="total-item">
                    Total Panier
                </h3>
                <h3 class="total-cart">
                    ${cartCost}€
                </h3>
                `
    }
}

/*// TEST FORM INPUTS

// FORM INPUT RECOVERY FROM DOM
function testValidity() {

}*/

displayCart();

onLoadCartNumbers();

fetchFurnitures();