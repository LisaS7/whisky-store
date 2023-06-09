use whisky_store;
db.dropDatabase();

db.whiskies.insertMany([
  {
    id: 1,
    name: "Glenfiddich 21 Year Old",
    region: "Speyside",
    flavours: ["vanilla", "banana", "citrus", "spice"],
    price: 16900,
    abv: 40,
    size: 70,
    image: "https://whisky-product-images.s3.eu-west-2.amazonaws.com/product1.png",
  },
  {
    id: 2,
    name: "Smokehead Unfiltered Single Malt",
    region: "Islay",
    flavours: [
      "ginger",
      "vanilla",
      "malt",
      "smoke",
      "black pepper",
      "chocolate",
    ],
    price: 3700,
    abv: 46,
    size: 70,
    image: "https://whisky-product-images.s3.eu-west-2.amazonaws.com/product2.png",
  },
  {
    id: 3,
    name: "Tomatin 14 Year Old",
    region: "Highland",
    flavours: ["toffee", "oak", "honey", "almonds", "red berries"],
    price: 6300,
    abv: 46,
    size: 70,
    image: "https://whisky-product-images.s3.eu-west-2.amazonaws.com/product3.png",
  },
  {
    id: 4,
    name: "Bowmore 15 Year Old",
    region: "Islay",
    flavours: ["chocolate", "fruit", "smoke"],
    price: 6200,
    abv: 43,
    size: 70,
    image: "https://whisky-product-images.s3.eu-west-2.amazonaws.com/product4.png",
  },
  {
    id: 5,
    name: "Bunnahabhain 11 Year Old",
    region: "Islay",
    flavours: ["fruit", "smoke", "honey"],
    price: 4700,
    abv: 43,
    size: 70,
    image: "https://whisky-product-images.s3.eu-west-2.amazonaws.com/product5.png",
  },
  {
    id: 6,
    name: "GlenAllachie 15 Year Old",
    region: "Speyside",
    flavours: ["toffee", "vanilla", "butterscotch", "citrus"],
    price: 6600,
    abv: 46,
    size: 70,
    image: "https://whisky-product-images.s3.eu-west-2.amazonaws.com/product6.png",
  },
]);
