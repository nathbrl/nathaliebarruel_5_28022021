let data;

// API REQUEST
const fetchData = async() => {
  data = await fetch ('http://localhost:3000/api/furniture')
    .then(res => res.json())
      console.log(data);
  data.forEach(element => {
    console.log(element.name);
    // IMAGE
  const image = data[0];
  const image1 = document.querySelector('.image');
    image1.innerHtml = image.imageUrl;
    //NAME
  const name = data[0];
  const name1 = document.querySelector('.name');
    name1.innerHTML = name.name;
    // VARNISH
  const varnish = data[0];
  const varnish1 = document.querySelector('.varnish');
  varnish1.innerHTML = varnish.varnish;
    // DESCRIPTION
  const desc = data[0];
  const desc1 = document.querySelector('.info');
    desc1.innerHTML = desc.description;
    // PRICE
  const price = data[0];
  const price1 = document.querySelector('.price');
    price1.innerHTML = price.price;
  })
  data.forEach(element => {
    image = data[1];
    image2 = document.querySelector('.image1').innerHtml = image.imageUrl;
    varnish = data[1];
    varnish2 = document.querySelector('.varnish1').innerHTML = varnish.varnish;
    desc = data[1];
    desc2 = document.querySelector('.info1').innerHTML = desc.description;
    price = data[1];
    price2 = document.querySelector('.price1').innerHTML = data[1].price;
    name = data[1];
    name2 = document.querySelector('.name1').innerHTML = data[1].name;
  })
  data.forEach(element => {
    image = data[2];
    image3 = document.querySelector('.image2').innerHtml = image.imageUrl;
    varnish = data[2];
    varnish3 = document.querySelector('.varnish2').innerHTML = varnish.varnish;
    desc = data[2];
    desc3 = document.querySelector('.info2').innerHTML = desc.description;
    price = data[2];
    price3 = document.querySelector('.price2').innerHTML = data[2].price;
    name = data[2];
    name3 = document.querySelector('.name2').innerHTML = data[2].name;
  })
  data.forEach(element => {
    image = data[3];
    image4 = document.querySelector('.image3').innerHtml = image.imageUrl;
    varnish = data[3];
    varnish4 = document.querySelector('.varnish3').innerHTML = varnish.varnish;
    desc = data[3];
    desc4 = document.querySelector('.info3').innerHTML = desc.description;
    price = data[3];
    price4 = document.querySelector('.price3').innerHTML = data[3].price;
    name = data[3];
    name4 = document.querySelector('.name3').innerHTML = data[3].name;
  })
  data.forEach(element => {
    image = data[4];
    image5 = document.querySelector('.image4').innerHtml = image.imageUrl;
    varnish = data[4];
    varnish5 = document.querySelector('.varnish4').innerHTML = varnish.varnish;
    desc = data[4];
    desc5 = document.querySelector('.info4').innerHTML = desc.description;
    price = data[4];
    price5 = document.querySelector('.price4').innerHTML = data[4].price;
    name = data[4];
    name5 = document.querySelector('.name4').innerHTML = data[4].name;
  });
};

fetchData();