import { Pessoa } from "./js/Pessoa.js";
export class Professor extends Pessoa {
    constructor(nome, idade, cidade, alunos) {
        super(nome, idade, cidade);
        this.alunos = alunos;
    }
    apresentar() {
        return ``;
    }
    gerarBoletins() {
        let boletins = [];
        this.alunos.forEach(aluno => {
            boletins.push(aluno.calcularMedia());
        });
        return boletins;
    }
}
