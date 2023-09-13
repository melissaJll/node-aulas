import {soma, multiplica, divide, subtrai} from "./modulos/funcoes.mjs";
//importando em um ´nico recurso


let resultadoSoma = soma(10,50);
let resultadoMultiplica = multiplica(2,10);
let resultadodivide = divide(2,10);
let resultadosubtrai = subtrai(2,10);

console.log(`soma é: ${resultadoSoma}`)
console.log(`multiplicação é: ${resultadoMultiplica}`)
console.log(`o resultado da divisão é ${resultadodivide} `);
console.log(`o resultado da subtração é ${resultadosubtrai}`);
