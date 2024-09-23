// Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
// Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

class aluno{
    constructor (nome, nota, classe, aprovado){
        this.nome = nome,
        this.nota = nota,
        this.classe = classe,
        this.aprovado = nota >= 6 ? "aprovado" : "reprovado";
    }
}


// let aluno0 = new aluno ("Renan", 7, "8A");
// let aluno1 = new aluno ("Eduardo", 10, "8A");
// let aluno2 = new aluno("Larissa", 10, "8A")

const alunosBancoDeDados = [
    { nome: "Renan", nota: 7, classe: "8A" },
    { nome: "Larissa", nota: 10, classe: "8A" },
    { nome: "Eduardo", nota: 10, classe: "8A" },
    { nome: "Ana", nota: 8, classe: "8A" },
    { nome: "Bruno", nota: 9, classe: "8A" },
    { nome: "Carla", nota: 5, classe: "8A" }, 
    { nome: "Diego", nota: 4, classe: "8A" }, 
    { nome: "Fernanda", nota: 10, classe: "8A" },
    { nome: "Gustavo", nota: 7, classe: "8A" },
    { nome: "Helena", nota: 9, classe: "8A" },
    { nome: "Igor", nota: 6, classe: "8A" },
    { nome: "Júlia", nota: 8, classe: "8A" },
    { nome: "Karina", nota: 10, classe: "8A" },
    { nome: "Lucas", nota: 7, classe: "8A" },
    { nome: "Mariana", nota: 9, classe: "8A" },
    { nome: "Natália", nota: 5, classe: "8A" },
    { nome: "Otávio", nota: 8, classe: "8A" },
    { nome: "Paulo", nota: 10, classe: "8A" },
    { nome: "Quésia", nota: 7, classe: "8A" },
    { nome: "Rafael", nota: 9, classe: "8A" },
    { nome: "Sofia", nota: 6, classe: "8A" },
    { nome: "Tiago", nota: 10, classe: "8A" },
    { nome: "Vanessa", nota: 8, classe: "8A" },
    { nome: "William", nota: 7, classe: "8A" },
    { nome: "Yasmin", nota: 9, classe: "8A" },
    { nome: "Zé", nota: 6, classe: "8A" },
    { nome: "André", nota: 10, classe: "8A" },
    { nome: "Bianca", nota: 8, classe: "8A" },
    { nome: "Claudio", nota: 9, classe: "8A" },
    { nome: "Daniela", nota: 5, classe: "8A" },
    { nome: "Elias", nota: 4, classe: "8A" }, 
    { nome: "Fábio", nota: 6, classe: "8A" },
    { nome: "Gabriel", nota: 8, classe: "8A" },
    { nome: "Isabella", nota: 9, classe: "8A" },
    { nome: "João", nota: 7, classe: "8A" },
    { nome: "Karol", nota: 10, classe: "8A" },
    { nome: "Alex", nota: 8, classe: "8B" },
    { nome: "Bianca", nota: 7, classe: "8B" },
    { nome: "Carlos", nota: 10, classe: "8B" },
    { nome: "Diana", nota: 6, classe: "8B" },
    { nome: "Edson", nota: 9, classe: "8B" },
    { nome: "Fernanda", nota: 8, classe: "8B" },
    { nome: "Gustavo", nota: 7, classe: "8B" },
    { nome: "Helena", nota: 10, classe: "8B" },
    { nome: "Igor", nota: 5, classe: "8B" }, 
    { nome: "Juliana", nota: 9, classe: "8B" },
    { nome: "Karla", nota: 10, classe: "8B" },
    { nome: "Leon", nota: 4, classe: "8B" }, 
    { nome: "Marta", nota: 8, classe: "8B" },
    { nome: "Natan", nota: 9, classe: "8B" },
    { nome: "Olga", nota: 6, classe: "8B" },
    { nome: "Paulo", nota: 10, classe: "8B" },
    { nome: "Quintana", nota: 7, classe: "8B" },
    { nome: "Ramon", nota: 8, classe: "8B" },
    { nome: "Sérgio", nota: 10, classe: "8B" },
    { nome: "Tatiane", nota: 5, classe: "8B" }, 
    { nome: "Ulisses", nota: 9, classe: "8B" },
    { nome: "Vinícius", nota: 6, classe: "8B" },
    { nome: "Wesley", nota: 10, classe: "8B" },
    { nome: "Xuxa", nota: 8, classe: "8B" },
    { nome: "Yara", nota: 7, classe: "8B" },
    { nome: "Zito", nota: 5, classe: "8B" }
]

const alunos = alunosBancoDeDados.map(data => new aluno (data.nome, data.nota, data.classe))

alunos.forEach(alunos => console.log(alunos))

// -------------------------------------------------------------------------

const alunosAprovados = () => {
    const aprovados = [];

    alunosBancoDeDados.forEach(aluno => {
        if (aluno.nota >= 6){
            aprovados.push(aluno.nome);
        }
    })
    return aprovados 
}

console.log(alunosAprovados())

// -------------------------------------------------------------------------

const classeAprovados = () => {
    const aprovados8A = [];
    const aprovados8B = [];

    alunosBancoDeDados.forEach(aluno => {
        if (aluno.nota >= 6) {
            if (aluno.classe === "8A"){
                aprovados8A.push (aluno.nome);
            } else if (aluno.classe === "8B"){
                aprovados8B.push (aluno.nome)
            }
        }
    })
    return{
        aprovados8A,
        aprovados8B,
        totalAprovados8A: aprovados8A.length,
        totalAprovados8B: aprovados8B.length 
    }
}

console.log(classeAprovados())



