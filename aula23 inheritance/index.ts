class PersonBase {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(`Name: ${this.name} | Age: ${this.age}`);
  }
}

class Clients extends PersonBase {
  balance() {
    console.log(`${this.name} balance: R$xxx.xx`);
  }
}

let client1 = new Clients("Raul", 18);
client1.balance();
