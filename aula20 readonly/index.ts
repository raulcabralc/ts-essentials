class Movies {
  readonly id: number;
  name: string;
  constructor(readonly idMovie: number, name: string) {
    this.id = idMovie;
    this.name = name;
  }
}

let movie1 = new Movies(1, "Star Wars");
