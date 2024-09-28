"use strict";
let estaChovendo = false;
let altura = 1.88;
let idade = 33;
const nameOfStudent = "Renan";
const friends = ['eduardo', "larissa", "caio"];
const tecno = ['html', 'css', 'typescript'];
const days = [23, 11, 31];
const list = ['Renan', true, 33];
// Com a utilizacao do | a variavel pode aceitar dois tipos. 
let idadeDoRenan = 23;
idadeDoRenan = "vinte e tres anos";
//evitar usar o any
let dadosDaApi;
dadosDaApi = 10;
dadosDaApi = 'Dez';
dadosDaApi[5 + 5];
dadosDaApi = true;
//---------------------------------------------------------------------------------------------------------------------
// tipagem de funcao 
function calculaArea(base, altura) {
    return base * altura;
}
const calculaArea2 = (base, altura) => base * altura;
function somar(...numbers) {
    console.log(numbers);
}
//retorna dois tipos diferentes dentro de uma funcao
function test() {
    if (10 > 5) {
        return '10 is bigger than five';
    }
    else {
        return 5;
    }
}
//------------------------------------------------------
//converter as variaveis, chamamos de casting
//namespace é como se fosse uma pasta virtual para podermos utilizar as mesmas variaveis, pois se abrirmos outros arquivos dentro da pasta o TypeScript nao permite usar a mesma variavel. 
var casting;
(function (casting) {
    let idade = 25;
    //para number
    idade.toFixed();
    //para string
    idade.length;
    //para array string
    idade.forEach;
    //para converter nesse caso precisa primeiro passar para unknown e depois para o tipo de variavel que deseja.
})(casting || (casting = {}));
//---------------------------------------------------------
(function (casting) {
    const alunos = [
        {
            nome: 'Carlos',
            curso: ['front-end', 'Back-end'],
            idade: 35
        },
        {
            nome: 'Larissa',
            curso: ['Escritora'],
            idade: 28
        }
    ];
    alunos.push({
        nome: 'Ingrid',
        curso: ['Economia'],
        idade: 29
    });
    const novoAluno = {
        nome: 'John',
        idade: 30
    };
})(casting || (casting = {}));
