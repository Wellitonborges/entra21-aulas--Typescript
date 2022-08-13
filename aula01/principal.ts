let nome :string="Welliton Borges"

let idade:number=30
console.log(nome);

$("<p>",{
    text:`Oi ${nome} vc tem ${idade} anos`
}).appendTo('body')

function test(): number{
    return 0;
}

function dado(nome: string, idade: number): boolean{
    if (nome== 'Welliton Borges' && idade ==3) {
        return true;
    }else{
        return false;
    }
}

function somar (numA,numB ){
    return numA+numB
}