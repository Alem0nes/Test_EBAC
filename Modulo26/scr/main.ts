let estaChovendo: boolean = false

let altura: number = 1.88
let idade: number = 33

const nameOfStudent: string = "Renan"

const friends: string[] = ['eduardo', "larissa", "caio"]
const tecno: Array<string> = ['html', 'css', 'typescript']
const days: ReadonlyArray<number> = [23, 11, 31] 

const list: [nome: string, estaEstudando: boolean, idade:number]= ['Renan', true, 33]

// Com a utilizacao do | a variavel pode aceitar dois tipos. 
let idadeDoRenan: number | string = 23
idadeDoRenan =  "vinte e tres anos"

//evitar usar o any
let dadosDaApi: any
dadosDaApi = 10
dadosDaApi = 'Dez'
dadosDaApi[5 + 5]
dadosDaApi= true

//---------------------------------------------------------------------------------------------------------------------

// tipagem de funcao 

function calculaArea(base:number, altura:number): number{
    return base * altura
}

const calculaArea2 = (base:number, altura:number): number => base * altura

function somar (...numbers:number[]): void{
    console.log(numbers)
}

//retorna dois tipos diferentes dentro de uma funcao
function test () : number | string {
    if (10 > 5) {
        return '10 is bigger than five'
    } else {
        return 5
    }
}

//------------------------------------------------------

//converter as variaveis, chamamos de casting

//namespace é como se fosse uma pasta virtual para podermos utilizar as mesmas variaveis, pois se abrirmos outros arquivos dentro da pasta o TypeScript nao permite usar a mesma variavel. 


namespace casting{
    let idade: any = 25;
    //para number
    (idade as number).toFixed();
    //para string
    (idade as string).length;
    //para array string
    (idade as string[]).forEach

//para converter nesse caso precisa primeiro passar para unknown e depois para o tipo de variavel que deseja.

}

//---------------------------------------------------------
namespace casting {
type alunos = {
    nome: string;
    curso?: string[]; //ponto de interrogacao serve para definir que esse campo pode estar faltando.
    idade: number;
}

const alunos: alunos[]= [
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
]

alunos.push({
    nome: 'Ingrid',
    curso: ['Economia'],
    idade: 29
})

const novoAluno: alunos = {
    nome: 'John',
    idade: 30
}

}