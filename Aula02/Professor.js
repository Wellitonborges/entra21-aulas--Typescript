export class Professor {
    constructor(nome, idade, disciplina, valorHora, quantidaHora) {
        this.nome = nome;
        this.idade = idade;
        this.disciplina = disciplina;
        this.valorHora = valorHora;
        this.quantidadeHora = quantidaHora;
    }
    apresentar() {
        return `Oi eu sou ${this.nome} e tenho ${this.idade} e ganho ${this.getvalorHora} por hora de aula ministrada`;
    }
    calcularSalario() {
        let salario = 0;
        //falta terminar
        return salario;
    }
    ;
    get getvalorHora() {
        return this.valorHora;
    }
    set setvalorHora(valorHora) {
        this.valorHora = valorHora;
    }
}
// nome
// idade
// disciplina
// valorHora
// quantidadeHoras
