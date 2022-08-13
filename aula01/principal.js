let nome = "Welliton Borges";
let idade = 30;
console.log(nome);
$("<p>", {
    text: `Oi ${nome} vc tem ${idade} anos`
}).appendTo('body');
function test() {
    return 0;
}
function dado(nome, idade) {
    if (nome == 'Welliton Borges' && idade == 3) {
        return true;
    }
    else {
        return false;
    }
}
function somar(numA, numB) {
    return numA + numB;
}
