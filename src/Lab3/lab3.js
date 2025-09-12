console.log("lab3");

const pr1 = {
  name: "áo thun",
  price: 500,
  inStock: true,
};

const pr2 = {
  name: "áo sơ mi",
  price: 600,
  inStock: true,
};
const pr3 = {
  name: "áo chống nắng",
  price: 900,
  inStock: false,
};

const pr4 = {
  name: "quần kaki",
  price: 100,
  inStock: true,
};
const pr5 = {
  name: "áo pro",
  price: 100,
  inStock: true,
};

const products = [pr1, pr2, pr3, pr4, pr5];
console.log("original", products);

const firstProduct = products[0];
console.log("1.Sản phẩm đầu tiên có tên là:", firstProduct.name);

const products2 = [
  pr1,
  {
    name: pr2.name,
    price: 150,
    inStock: pr2.inStock,
  },
  pr3,
  pr4,
  pr5,
];
console.log("2.Update price pr2 = 150:", products2);

products.push({
  name: "quần jean",
  price: 200,
  inStock: true,
});
console.log("3.Add last product:", products);

products.pop();
console.log("4.Remove last product:", products);

console.log("5.---------");
products.forEach((item, index) => {
  console.log("Product name:", item.name);
});

console.log("----------");

const priceList = products.map((item, index) => {
  return item.price;
});
console.log("6.Price list:", priceList);

const inStockProducts = products.filter((item, index) => {
  return item.inStock === true;
});
console.log("7.In stock products:", inStockProducts);

console.log("8.-----");
for (let key in pr1) {
  console.log(key, pr1[key]);
}
