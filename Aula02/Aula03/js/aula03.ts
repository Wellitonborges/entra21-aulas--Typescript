import { Diretor } from "../Diretor.js";
import { Professor } from "../Professor.js";
import { Aluno } from "./Aluno.js";

let fulano: Aluno = new Aluno('Welliton', 30, 'Jaragua do sul', [8, 9, 8, 5])

let alonoTeste: Aluno = new Aluno('Pedrinho', 18, 'Tilambuco', [7, 8, 9])

fulano.nome
fulano.cidade
fulano.idade

console.log(fulano.nome,
    fulano.cidade,
    fulano.idade);


console.log(fulano.apresentar());
console.log(fulano.calcularMedia);

console.log(alonoTeste.apresentar);
console.log(alonoTeste.calcularMedia);

let professor1: Professor = new Professor('Oliota', 33, 'Blumenau', [fulano, alonoTeste])

let Diretor1: Diretor = new Diretor('Jão', 35, 'Blumenau', [professor1])