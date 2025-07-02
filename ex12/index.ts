class Animal {
  constructor(public name: string) {}

  move(meters: number) {
    console.log(`${this.name} moved ${meters} meters.`);
  }
}

class Snake extends Animal {
  move(meters: number) {
    console.log("Slithering...");
    super.move(meters);
  }
}

class Horse extends Animal {
  move(meters: number) {
    console.log("Galloping...");
    super.move(meters);
  }
}

const sammy = new Snake("Sammy");
sammy.move(5);

const juan = new Horse("Juan");
juan.move(34);
