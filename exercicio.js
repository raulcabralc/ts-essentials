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

function createExercício(exNum) {
  const exercicio = `ex${exNum}`;
  mkdirSync(exercicio);

  writeFileSync(`./${exercicio}/index.ts`, "");
}

function startApp() {
  console.log(
    cores.blue +
      "Iniciando criador de diretório para exercício...\n" +
      cores.reset
  );
  rl.question(`${cores.yellow + cores.bright}Número:${cores.reset} `, (num) => {
    createExercício(num);
    console.clear();
    console.log(
      `${cores.reset}\n${cores.green + cores.bright}✓${cores.reset} Exercício ${
        cores.green + cores.bright
      }${num}${cores.reset} criado!\n`
    );
    rl.close();
  });
}

startApp();
