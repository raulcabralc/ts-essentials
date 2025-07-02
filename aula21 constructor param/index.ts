// Os parâmetros já iniciam a variável, sem a necessidade de declarar ela outra vez
class Test {
  // id: number;
  // name: string;
  constructor(
    public readonly id: number,
    public name: string,
    private _price: number /* Colocar um _ antes da propriedade privada */
  ) {
    // this.id = id;
    // this.name = name;
  }
}
