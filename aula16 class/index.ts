class Users {
  name: string;
  balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }
}

const userRaul = new Users("Raul", 170000);
