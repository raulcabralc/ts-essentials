// Variável: 10 | "Valor2" | true
// O literal restringe os valores que uma variável pode ter

let productPrice: 10 | 20 | 30;
let productName: "Apple" | "Avocado" | "Pineapple";

productPrice = 10;
// productPrice = 15
// Erro! productPrice não é 10, 20 ou 30

productName = "Avocado";
// productName = "Applee";
// Erro! productName não é "Apple", "Avocado" ou "Pineapple"
