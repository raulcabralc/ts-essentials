interface Item {
  name: string;
  price: number;

  itemPurchased(msg: string): void;
}

let product1: Item;

product1 = {
  name: "Apple",
  price: 8,
  itemPurchased(message) {
    console.log(message);
  },
};
