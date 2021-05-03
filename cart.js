/* 
1) sélectionner tous les bouttons 'add to cart'
2) les bouttons doivent réagir au click
3) retrouver l'id de chaque produit
*/
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartNumber = document.querySelector('sup .quantity');

addToCartButtons.forEach((product, i) => {
    addToCartButtons[i].addEventListener('click', () => {
        console.log('event');
        cartCount(product[i]);
    });
});

function cartCount() {
    let productCount = localStorage.getItem('cartCount');
    productCount = parseInt(productCount);

    if (productCount) {
        localStorage.setItem('cartCount', productCount + 1);
        cartNumber.textContent = productCount + 1;
    } else {
        localStorage.setItem('cartCount', 1);
        cartNumber.textContent = productCount = 1;
    }
}

function showCartCount() {
    let productCount = localStorage.getItem('cartCount');
    if (productCount) {
        cartNumber.textContent = productCount;
    }
}


