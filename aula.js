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

function createAula(aulaNum, aulaNome) {
  const aula = aulaNome ? `aula${aulaNum} ${aulaNome}` : `aula${aulaNum}`;
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
        let errors = [];
        try {
          console.clear();

          if (!num) {
            errors.push(
              `É necessário ${cores.yellow + cores.bright}adicionar um número${
                cores.reset
              } para a ${cores.yellow + cores.bright}aula${cores.reset}.`
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
              } da aula deve ser um ${cores.yellow + cores.bright}número${
                cores.reset
              }.`
            );
            throw new Error();
          }

          createAula(num, name.toLowerCase());

          console.log(
            `${cores.reset}\n${cores.green + cores.bright}✔${
              cores.reset
            } Aula ${cores.green + cores.bright}${num}${cores.reset} criada${
              name
                ? ` com o nome ${cores.green + cores.bright}${name}${
                    cores.reset
                  }`
                : ""
            }!\n`
          );
        } catch (e) {
          console.log(
            name
              ? `\n${cores.red + cores.bright}✘${cores.reset} Falha ao criar ${
                  cores.red + cores.bright
                }aula${num} ${name}${cores.reset}!\n`
              : `\n${cores.red + cores.bright}✘${cores.reset} Falha ao criar ${
                  cores.red + cores.bright
                }aula${num}${cores.reset}!\n`
          );

          errors.forEach((error) => {
            console.log(
              `${cores.yellow + cores.bright}⚠ ${cores.reset} ${error}\n`
            );
          });
        }

        rl.close();
      }
    );
  });
}

startApp();
