import { Aluno } from "./Aluno.js";
import { Animal } from "./Animal.js";
import { Professor } from "./Professor.js";

console.log('Aula 2 funcionou');

let animal1:Animal=new Animal('Drosofila','Mosca',0.5,['ar','lixo','comida'])

console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitate[0]);
console.log(animal1.getespecie);


animal1.nome='cachorro'
animal1.peso=30.8
animal1.habitate=['terra','jardin','brincar']
animal1.setespecie='Pit Bull'

console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitate[0]);
console.log(animal1.getespecie);

let animal2:Animal=new Animal('peixe','lambari',1.3,['agua doce','mar'])

console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitate);
console.log(animal2.getespecie);

animal2.nome='peixe'
animal2.peso=1.3
animal2.habitate=['mar','agua doce']
animal2.setespecie='Lambari'


let welliton: Aluno = new Aluno('Welliton Borges',29,[10,10,10])
console.log(welliton);

console.log(welliton.nome);
console.log(welliton.idade);
console.log(welliton.calcularMedia());
console.log(welliton.apresentar());

let professor : Professor = new Professor('Rubem Oliota',33,'Java',110,120)
console.log(Professor);
console.log(professor.nome);
console.log(professor.idade);
console.log(professor.disciplina);
console.log(professor.quantidadeHora);
console.log(professor.apresentar());








