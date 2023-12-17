const productData = [
  {
    name: "Zunkel Schwarz",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ad culpa quas nam minima odit, amet autem, iure harum nisi assumenda vitae ut maxime, id porro veritatis similique? Blanditiis, obcaecati",
    parent: "Furniture",
    children: "Chair",
    imageUrl: ["/product/1.jpg", "/product/1-2.jpg"],
    originalPrice: 80,
    discount: 33,
    price: 100,
    productClass: "Hot",
    stocks: [
      {
        size: ["L", "M", "S"],
        color: ["blue", "black", "white"],
        material: "scarlet",
        quantity: 100,
        sku: "D2300-3-2-1",
        imageUrl: ["/product/1.jpg", "/product/1-2.jpg"],
      },
    ],
  },
  {
    name: "Namaste Vase",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ad culpa quas nam minima odit, amet autem, iure harum nisi assumenda vitae ut maxime, id porro veritatis similique? Blanditiis, obcaecati",
    parent: "Furniture",
    children: "Vase",
    imageUrl: ["/product/2.jpg", "/product/2-2.jpg"],
    originalPrice: 80,
    discount: 0,
    price: 200.0,
    productClass: "Hot",
    stocks: [
      {
        size: ["L", "M", "S"],
        color: ["blue", "black", "white"],
        material: "ceramic",
        quantity: 100,
        sku: "D2300-3-2-2",
        imageUrl: ["/product/2.jpg", "/product/2-2.jpg"],
      },
    ],
  },
  {
    name: "Chair Oak Matt Lacquered",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ad culpa quas nam minima odit, amet autem, iure harum nisi assumenda vitae ut maxime, id porro veritatis similique? Blanditiis, obcaecati",
    parent: "Furniture",
    children: "Chair",
    imageUrl: ["/product/3.jpg", "/product/3-2.jpg"],
    originalPrice: 80,
    discount: 0,
    price: 150.0,
    productClass: "Hot",
    stocks: [
      {
        size: ["L", "M", "S"],
        color: ["blue", "black", "white"],
        material: "scarlet",
        quantity: 100,
        sku: "D2300-3-2-3",
        imageUrl: ["/product/3.jpg", "/product/3-2.jpg"],
      },
    ],
  },
  {
    name: "Amp Pendant Light Large",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ad culpa quas nam minima odit, amet autem, iure harum nisi assumenda vitae ut maxime, id porro veritatis similique? Blanditiis, obcaecati",
    parent: "Furniture",
    children: "Table",
    imageUrl: ["/product/5.jpg", "/product/5-2.jpg"],
    originalPrice: 80,
    discount: 7,
    price: 150.0,
    stocks: [
      {
        size: ["L", "M", "S"],
        color: ["blue", "black", "white"],
        material: "scarlet",
        quantity: 100,
        sku: "D2300-3-2-4",
        imageUrl: ["/product/5.jpg", "/product/5-2.jpg"],
      },
    ],
  },
  {
    name: "Bora Armchair",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ad culpa quas nam minima odit, amet autem, iure harum nisi assumenda vitae ut maxime, id porro veritatis similique? Blanditiis, obcaecati",
    parent: "Furniture",
    children: "Chair",
    imageUrl: ["/product/9.jpg", "/product/9-2.jpg", "/product/9-3.jpg"],
    originalPrice: 100,
    discount: 10,
    price: 90,
    stocks: [
      {
        size: ["L", "M", "S"],
        color: ["blue", "black", "white"],
        material: "scarlet",
        quantity: 100,
        sku: "D2300-3-2-4",
        imageUrl: ["/product/9.jpg", "/product/9-2.jpg", "/product/9-3.jpg"],
      },
    ],
  },
];

export default productData;
