// Faça um Programa que leia um vetor de 4 notas, mostre as notas e a média na tela.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas = [];

function solicitarNota(indice) {
    if (indice < 4) {
        readline.question(`Digite a nota ${indice + 1}: `, (nota) => {
            notas.push(parseFloat(nota));
            solicitarNota(indice + 1);
        });
    } else {

        let soma = 0;
        for (let i = 0; i < notas.length; i++) {
            soma += notas[i];
        }
        let media = soma / notas.length;

        console.log("Notas: " + notas.join(", "));
        console.log("Média: " + media.toFixed(2));

        readline.close();
    }
}

solicitarNota(0);
