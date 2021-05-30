//Saving product ids in each product buttons
function savingProductId(products){
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            //console.log(button);
            const productId = button.id;
            //console.log(productId);
            const getProduct = products.filter(product => product._id == productId);
            //console.log(getProduct);
            productCount(getProduct[0]);
            cartTotalCost(getProduct[0]);
        });
    });
}
//Counting how many items are in cart
function productCount(product) {
    let productCount = localStorage.getItem('cartCount');
    productCount = parseInt(productCount);
    const productQuantity = document.querySelector('sup .quantity');

    let cartItem = localStorage.getItem('productsInCart');
    cartItem = JSON.parse(cartItem);

    if (productCount) {
        localStorage.setItem('cartCount', productCount + 1);
        productQuantity.textContent = productCount + 1;
    } else {
        localStorage.setItem('cartCount', 1);
        productQuantity.textContent = productCount = 1;
    }
    saveProductsToLocalStorage(product);
}
//Showing how many items are in cart
function showProductCount() {
    let productCount = localStorage.getItem('cartCount');
    const productQuantity = document.querySelector('sup .quantity');
    if (productCount) {
        productQuantity.textContent = productCount;
    }
}
//Saving products added to localstorage
function saveProductsToLocalStorage(product) {
    let cart = [];
    cart = JSON.parse(localStorage.getItem('productsInCart')) || [];
    cart.push(product);
    localStorage.setItem('productsInCart', JSON.stringify(cart));
}
//Calculating the total cost of the products in cart
function cartTotalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    localStorage.setItem('totalCost',cartCost - product.price);
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}
//Displays all the items added to the cart
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-list");
    let cartCost = localStorage.getItem('totalCost');
    const contactForm = document.querySelector('.wrapperForm');

    if(cartItems && productContainer) {
        contactForm.style.display = 'block';
        productContainer.innerHTML = '';
        cartItems.forEach(product => {
            productContainer.innerHTML += `
            <div class="cart-product">
                <img src="${product.imageUrl}" class="image">
                <div><span>${product.name}</span></div>
                <div class="price">${product.price/100},00€</div>
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="cart-total">
                    Total Panier: &nbsp;
                    ${cartCost/100},00€
                </h4>
            </div>
            <button class="suppress-btn"> Vider le panier </button>
        `;

    } else {
        productContainer.innerHTML += `<h1> Votre panier est vide </h1>`;
        contactForm.style.display = 'none';
    }
}
//Remove each localstorage keys and clear cart
function clearCart() {
    const clearCartButton = document.querySelector('.suppress-btn');
    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('productsInCart');
        localStorage.removeItem('totalCost');
        localStorage.removeItem('cartCount');
        window.location.reload();
    })
}
//Checking form inputs thanks to regex
function formValidity() {
    const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lastname');
    const city = document.getElementById('city');
    const address = document.getElementById('address');
    const email = document.getElementById('email');
    const form = document.getElementById('form-order');

    const regName = /^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/;
    const regAddress = /^([0-9]{1,3}(([,. ]?){1}[a-zA-Zàâäéèêëïîôöùûüç' ]+))$/;
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!firstName.value.match(regName)) {
            alert('le champ prénom contient des erreurs');
            window.location = 'page-panier.html';
        }
        if (!lastName.value.match(regName)) {
            alert('le champ nom contient des erreurs');
            window.location = 'page-panier.html';
        }
        if (!city.value.match(regName)) {
            alert('le champ ville contient des erreurs');
            window.location = 'page-panier.html';
        }
        if (!address.value.match(regAddress)) {
            alert('le champ addresse contient des erreurs');
            window.location = 'page-panier.html';
        }
        if (!email.value.match(regEmail)) {
            alert('le champ email contient des erreurs');
            window.location = 'page-panier.html';
        } else {
            sendOrder();
        }
    })
}
//Sending data from the form plus cart to the server
function sendOrder() {

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    const products = Object.values(cartItems).map((product) => {
        return product._id;
    });
    //console.log(products);
    
    const order = {
        contact: {
            firstName: firstName,
            lastName: lastName,
            city: city,
            address: address,
            email: email,
        },
        products: products,
    }

    fetch("http://localhost:3000/api/furniture/order", {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
        "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then(res => {
        const orderId = res.orderId;

        window.location = `page-confirmation.html?orderId=${orderId}`

    })
}

function fetchFurnitures() { 
    fetch("http://localhost:3000/api/furniture")
    .then((res) => res.json())
    .then(furniture => {
        savingProductId(furniture);
        showProductCount();
        displayCart();
        clearCart();
        formValidity();
    })
    .catch(error => console.log(error));
}

fetchFurnitures();