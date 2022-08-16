import { Aluno } from "./js/Aluno.js"
import { Pessoa } from "./js/Pessoa.js"

export class Professor extends Pessoa {

    public alunos: Array<Aluno>

    constructor(nome: string, idade: number, cidade: string, alunos: Array<Aluno>) {
        super(nome, idade, cidade)

        this.alunos = alunos

    }
    apresentar(): string {

        return ``
    }
    gerarBoletins(): Array<number> {

        let boletins: Array<number> = []
        this.alunos.forEach(aluno => {
            boletins.push(aluno.calcularMedia())
        });
        return boletins
    }
}