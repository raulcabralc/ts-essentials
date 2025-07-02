class UsersBank {
  public name: string;
  private balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }
}

const user2 = new UsersBank("Raul", 170000);
// user2.balance = 1;
