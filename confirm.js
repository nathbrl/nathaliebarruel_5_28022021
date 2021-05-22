function getOrderId() {
    const urlLoc = window.location.href;
    const url = new URL(urlLoc);
    let orderId = document.querySelector('.ref');
    orderId.innerHTML += url.searchParams.get('orderId');

    //const orderPrice = document.querySelector('.order-price');
}
getOrderId();



