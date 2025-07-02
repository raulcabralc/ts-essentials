interface CartItem {
  id: number;
  title: string;
  variantId?: number;
}

function addToCart(item: CartItem) {
  console.log(`Adding ${item} to cart.`);
}

addToCart({ id: 1, title: "Shoes" });
