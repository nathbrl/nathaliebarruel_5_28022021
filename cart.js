let products;

// API REQUEST
const fetchProducts = async() => {
  products = await fetch ('http://localhost:3000/api/furniture')
    .then(res => res.json())

    // Bouton pour supprimer l'article
    let carts = document.querySelectorAll('.cart-btn');

    // Boucle pour ajouter un event au bouton ajouter au panier
    for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        //console.log('Votre article a bien été ajouté au panier');
        cartNumbers(products[i]);
        })
    }

    function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');

        if(productNumbers) {
            document.querySelector('.qty').textContent = productNumbers;
        }
    }
    //fonction pour savoir combien d'éléments sont ajoutés au panier
    function cartNumbers(products) {
        let productNumbers = localStorage.getItem('cartNumbers');
        //console.log(products);
        productNumbers = parseInt(productNumbers);

        if( productNumbers ) {
            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.qty').textContent = productNumbers + 1;
            } else {
            localStorage.setItem('cartNumbers', 1);
            document.querySelector('.qty').textContent = 1;
            }
            
        setItem(products)
    }
    
    function setItem(products) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        //console.log('my cartItems are', cartItems);

        if(cartItems != null) {

            if (cartItems[products.name] == undefined) {
                cartItems = {
                    ...cartItems,
                    [products.name]: products
                }
            }
            cartItems[products.name].inCart += 1;
        } else{
            products.inCart = 1;
            cartItems = {
                [products.name]: products
            }
        }
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    }
    onLoadCartNumbers();
};

fetchProducts();