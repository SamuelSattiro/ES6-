const alunos = [
    {nome: 'Samuel', nota: 9},
    {nome: 'Camila', nota: 5},
    {nome: 'Lais', nota: 7},
    {nome: 'Veras', nota: 2},
    {nome: 'Jéssica', nota: 4},
    {nome: 'Bruno', nota: 6},
]

function alunosAprovados(alunos) {
    return alunos.nota > 5
}

const aprovados = alunos.filter(alunosAprovados)

console.log(aprovados)