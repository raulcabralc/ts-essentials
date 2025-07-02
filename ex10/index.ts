interface UserSchema {
  id: number;
  name: string;
}

class User10 implements UserSchema {
  constructor(public name: string, readonly id: number) {}
}

const userDog = new User10("Dog", 1);

console.log(userDog.id);

// userDog.id = 2;
