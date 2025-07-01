const { mkdirSync, writeFileSync } = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cores = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",

  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
};

console.clear();

function createAula(aulaNum, aulaNome) {
  const aula = `aula${aulaNum} ${aulaNome}`;
  mkdirSync(aula);

  writeFileSync(`./${aula}/index.ts`, "");
}

function startApp() {
  console.log(
    cores.blue + "Iniciando criador de diretório para aula...\n" + cores.reset
  );
  rl.question(`${cores.yellow + cores.bright}Número:${cores.reset} `, (num) => {
    rl.question(
      `${cores.yellow + cores.bright}Tópico:${cores.reset} `,
      (name) => {
        createAula(num, name.toLowerCase());
        console.clear();
        console.log(
          `${cores.reset}\n${cores.green + cores.bright}✓${cores.reset} Aula ${
            cores.green + cores.bright
          }${num}${cores.reset} criada com o nome ${
            cores.green + cores.bright
          }${name}${cores.reset}!\n`
        );
        rl.close();
      }
    );
  });
}

startApp();
