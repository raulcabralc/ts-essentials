class PersonBase1 {
  constructor(public name: string, public age: number) {}

  get greet() {
    return `Name: ${this.name} | Age: ${this.age}`;
  }
}

class Clients1 extends PersonBase1 {
  override get greet() {
    return "CLIENT | " + super.greet;
  }
}

class Staff extends PersonBase1 {
  override get greet() {
    return "STAFF | " + super.greet;
  }
}

let person = new PersonBase1("Larissa", 38);
let client = new Clients1("Raul", 18);
let staff = new Staff("Cecília", 8);
console.log(staff.greet);
