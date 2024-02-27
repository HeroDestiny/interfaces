// Faça um Programa que leia um vetor de 5 números inteiros e armazene-os num vetor.
// Armazene os números pares no vetor PAR e os números ÍMPARES no vetor ímpar. Imprima os
// três vetores.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];
let pares = [];
let impares = [];

function solicitarNumero(indice) {
    if (indice <  5) {
        readline.question(`Digite o número ${indice +  1}: `, (numero) => {
            numeros.push(parseInt(numero,  10));
            if (numero %  2 ===  0) {
                pares.push(numero);
            } else {
                impares.push(numero);
            }
            solicitarNumero(indice +  1);
        });
    } else {
        
        console.log("Números: " + numeros.join(", "));
        console.log("Pares: " + pares.join(", "));
        console.log("Ímpares: " + impares.join(", "));

        readline.close();
    }
}

solicitarNumero(0);
