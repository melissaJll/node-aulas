import chalk from 'chalk';

console.log("Gerenciamento de pacotes");

let aluno = "João";
let idade = 48;

if (idade >= 18) {
    console.log(`${aluno} é`, chalk.blue( `maior de idade`));
}else{
    console.log(chalk.red(`${aluno} é menor  de idade`));
};

