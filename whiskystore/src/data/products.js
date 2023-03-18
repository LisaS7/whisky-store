import product1image from "./images/product1.png";
import product2image from "./images/product2.png";
import product3image from "./images/product3.png";
import product4image from "./images/product4.png";
import product5image from "./images/product5.png";
import product6image from "./images/product6.png";

export const products = [
  {
    id: 1,
    name: "Glenfiddich 21 Year Old",
    region: "Speyside",
    flavours: ["vanilla", "banana", "citrus", "spice"],
    price: 16900,
    abv: 40,
    size: 70,
    image: product1image,
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
    image: product2image,
  },
  {
    id: 3,
    name: "Tomatin 14 Year Old",
    region: "Highland",
    flavours: ["toffee", "oak", "honey", "almonds", "red berries"],
    price: 6300,
    abv: 46,
    size: 70,
    image: product3image,
  },
  {
    id: 4,
    name: "Bowmore 15 Year Old",
    region: "Islay",
    flavours: ["chocolate", "fruit", "smoke"],
    price: 6200,
    abv: 43,
    size: 70,
    image: product4image,
  },
  {
    id: 5,
    name: "Bunnahabhain 11 Year Old",
    region: "Islay",
    flavours: ["fruit", "smoke", "honey"],
    price: 4700,
    abv: 43,
    size: 70,
    image: product5image,
  },
  {
    id: 6,
    name: "GlenAllachie 15 Year Old",
    region: "Speyside",
    flavours: ["toffee", "vanilla", "butterscotch", "citrus"],
    price: 6600,
    abv: 46,
    size: 70,
    image: product6image,
  },
];
