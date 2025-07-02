class UserBank {
  name: string;
  balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  depositCash(amount: number) {
    this.balance += amount;
  }
}

const user1 = new UserBank("Raul", 170000);
user1.depositCash(30);
