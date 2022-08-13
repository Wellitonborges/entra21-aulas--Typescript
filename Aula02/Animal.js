export class Animal {
    //construtor
    constructor(especie, nome, peso, habitate) {
        this.especie = especie;
        this.nome = nome;
        this.peso = peso;
        this.habitate = habitate;
    }
    //metodos
    get getespecie() {
        return this.especie;
    }
    set setespecie(especie) {
        this.especie = especie;
    }
}
