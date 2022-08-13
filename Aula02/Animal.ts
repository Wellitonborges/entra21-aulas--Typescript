export class Animal {
    // atributos

    private especie: string
    public nome: string
    public peso: number
    public habitate: Array<string>

    //construtor
    constructor(

        especie: string,
        nome: string,
        peso: number,
        habitate: Array<string>

    ) {
        this.especie = especie
        this.nome = nome
        this.peso = peso
        this.habitate = habitate
    }


    //metodos


public get getespecie() : string {
    return this.especie
}

public set setespecie(especie : string) {
    this.especie = especie;
}



}