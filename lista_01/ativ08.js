// Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação
// e os números.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];
let soma =  0;
let multiplicacao =  1;

function solicitarNumero(indice) {
    if (indice <   5) {
        readline.question(`Digite o número ${indice +   1}: `, (numero) => {
            numeros.push(parseInt(numero,   10));
            soma += parseInt(numero,   10);
            multiplicacao *= parseInt(numero,   10);
            solicitarNumero(indice +   1);
        });
    } else {

        console.log("Números: " + numeros.join(", "));
        console.log("Soma: " + soma);
        console.log("Multiplicação: " + multiplicacao);

        readline.close();
    }
}

solicitarNumero(0);
