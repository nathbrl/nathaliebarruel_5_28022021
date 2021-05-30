//Getting back the id order from the server
function getOrderData() {
    const urlLoc = window.location.href;
    const url = new URL(urlLoc);
    let orderId = document.querySelector('.ref');
    orderId.innerHTML += url.searchParams.get('orderId');

    const orderCost = document.querySelector('.order-price');
    let totalCost = localStorage.getItem('totalCost');
    orderCost.innerHTML += totalCost/100;
}
getOrderData();

//Clearing LocalStorage items 
localStorage.clear();


