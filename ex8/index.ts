class MC {
  greet(event: string = "party"): string {
    return `Welcome to ${event}.`;
  }
}

const mc = new MC();
console.log(mc.greet("show"));
