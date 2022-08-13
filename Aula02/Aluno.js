export class Aluno {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    apresentar() {
        return `OLá meu nome é ${this.nome} er tenho ${this.idade} anos `;
    }
    calcularMedia() {
        let soma = 0;
        this.notas.forEach(nota => {
            soma += nota;
        });
        return soma / this.notas.length;
        //return this.nota.reduce((anterior,posterior)=>anterior+posterior,0)/this.nota.length
    }
}
