"use strict";
// • Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
const multiplicacao = (a, b) => (a * b);
console.log(multiplicacao(3, 10));
const saudacao = (nome) => (`Olá, ${nome}. Tudo bem ?`);
console.log(saudacao('Renan'));
