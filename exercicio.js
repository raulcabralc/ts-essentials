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
  red: "\x1b[31m",
  white: "\x1b[37m",
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
    let errors = [];

    try {
      if (!num) {
        errors.push(
          `É necessário ${cores.yellow + cores.bright}adicionar um número${
            cores.reset
          } para o ${cores.yellow + cores.bright}exercício${cores.reset}.`
        );
        throw new Error();
      }

      try {
        const numTry = Number(num);
        if (isNaN(numTry)) throw new Error();
      } catch (e) {
        errors.push(
          `O ${cores.yellow + cores.bright}número${
            cores.reset
          } do exercício deve ser um ${cores.yellow + cores.bright}número${
            cores.reset
          }.`
        );
        throw new Error();
      }

      createExercício(num);

      console.clear();

      console.log(
        `${cores.reset}\n${cores.green + cores.bright}✔${
          cores.reset
        } Exercício ${cores.green + cores.bright}${num}${cores.reset} criado!\n`
      );
    } catch (e) {
      console.clear();

      console.log(
        `\n${cores.red + cores.bright}✘${cores.reset} Falha ao criar ${
          cores.red + cores.bright
        }exercício${num}${cores.reset}!\n`
      );

      errors.forEach((error) => {
        console.log(
          `${cores.yellow + cores.bright}⚠ ${cores.reset} ${error}\n`
        );
      });
    }

    rl.close();
  });
}

startApp();
