import { Professor } from "./Professor.js"

export class Diretor{
    public nome:string
    public idade:number
    public cidade:string
    public professor:Array<Professor>

    constructor(nome:string,idade:number,cidade:string,professor:Array<Professor>){

        this.nome = nome
        this.idade = idade
        this.cidade = cidade
        this.professor = professor
    }
    apresentar(): string {

        return ``
    }
    gerarDesenpenho(): string {

        return ``
    }

}