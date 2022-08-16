export class Professor{

public nome:string
public idade:number
public disciplina:string
private valorHora:number
public quantidadeHora:number

constructor(nome:string,idade:number,disciplina:string,valorHora:number,quantidaHora:number){
this.nome=nome
this.idade=idade
this.disciplina=disciplina
this.valorHora=valorHora
this.quantidadeHora=quantidaHora
}
public apresentar():string{
    return `Oi eu sou ${this.nome} e tenho ${this.idade} e ganho ${this.getvalorHora} por hora de aula ministrada` 
}

public calcularSalario():number{
    let salario:number = 0
    //falta terminar
  return salario
   };



public get getvalorHora():number{
    return this.valorHora
}

public set setvalorHora(valorHora:number){
    this.valorHora = valorHora
}


}



// nome
// idade
// disciplina
// valorHora
// quantidadeHoras