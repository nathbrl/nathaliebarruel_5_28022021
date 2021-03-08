fetch("http://localhost:3000/api/furniture")
  .then(res => {
    if(res.ok){
      res.json().then(data => {
        img.src = data[0].imageUrl
      })
    } else{
      console.log("error");
    }
  })
  //.then(res => console.log(res)
  //.then(data => console.log(data))

const img = document.getElementById("produits");

/*{
  "varnish":[
     "Dark Oak",
     "Light Oak",
     "Mahogany"
  ],
  "_id":"5be9cc611c9d440000c1421e",
  "name":"Cross Table",
  "price":59900,
  "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "imageUrl":"http://localhost:3000/images/oak_1.jpg"
},

{
  "varnish":[
     "Dark Oak",
     "Light Oak"
  ],
  "_id":"5beaadda1c9d440000a57d98",
  "name":"Coffee Table",
  "price":89900,
  "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "imageUrl":"http://localhost:3000/images/oak_2.jpg"
},
{
  "varnish":[
     "Dark Oak",
     "Teak",
     "Mahogany"
  ],
  "_id":"5beaae361c9d440000a57d99",
  "name":"Dining Table (extendable)",
  "price":109900,
  "imageUrl":"http://localhost:3000/images/oak_3.jpg",
  "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
  "varnish":[
     "Light Oak",
     "Teak"
  ],
  "_id":"5beaaf2e1c9d440000a57d9a",
  "name":"Bench",
  "price":39900,
  "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "imageUrl":"http://localhost:3000/images/oak_4.jpg"
},
{
  "varnish":[
     "Dark Oak",
     "Mahogany"
  ],
  "_id":"5beab2061c9d440000a57d9b",
  "name":"Vintage Chair",
  "price":79900,
  "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "imageUrl":"http://localhost:3000/images/oak_5.jpg"
}*/