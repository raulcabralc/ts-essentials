class Furniture {
  constructor(protected manufacturer: string = "IKEA") {}
}

class Desk extends Furniture {
  kind() {
    console.log(`This is a desk made by ${super.manufacturer}.`);
  }
}

class Chair extends Furniture {
  kind() {
    console.log(`This is a desk made by ${super.manufacturer}.`);
  }
}

const desk = new Desk();
desk.kind();

const chair = new Chair("Ferreira Costa");
chair.kind();
