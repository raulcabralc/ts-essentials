class Person {
  constructor(public name: string, public age: number) {}
}

const jane = new Person("Jane", 31);
console.log(`${jane.name} is ${jane.age} years old.`);
