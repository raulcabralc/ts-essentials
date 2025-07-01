const { mkdirSync, writeFileSync } = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();

function createAula(aulaNum, aulaNome) {
  const aula = `aula${aulaNum} ${aulaNome}`;
  mkdirSync(aula);

  writeFileSync(`./${aula}/index.ts`, "");
}

console.log("Iniciando criador de diretório para aula...\n");
rl.question("Número: ", (num) => {
  rl.question("Tópico: ", (name) => {
    createAula(num, name);
    console.clear();
    console.log(`\nAula ${num} criada com o nome ${name}\n`);
    rl.close();
  });
});
