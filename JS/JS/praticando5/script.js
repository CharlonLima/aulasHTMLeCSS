//Criação de Objetos
//É melhor utilizar objetos do que um monte de variaveis que sobrecarrega a memoria
//Com o this o interpretador entende automaticamente que é objeto
// function Pessoa(nome){
//  this.nome = nome;
//  }
// Pessoa.prototype.msg = function(){
//     alert("Olá "+ this.nome);
// }
// //Qualquer classe que seja pessoa vai herdar a propriedade que estiver no objeto prototype
// //Como
// let novaPessoa = new Pessoa ('José');
// let outraPessoa = new Pessoa('Maria');

// novaPessoa.msg();
// outraPessoa.msg();

// console.log(novaPessoa);

// novaPessoa.msg();
// console.log(novaPessoa.nome);


//CRIANDO NOVO OBJETO DE FORMA DIFERENTE
//Ao invés de usar a palavra reservada this usa a propria palavra Pessoa2.

// let Pessoa2 = {
//     'nome':'',
//     'idade':'',
// }
// Pessoa2.__proto__.msg = function(){
//     alert("Olá "+ Pessoa2.nome);
// }
// let P = Pessoa2;
// P.nome = "Charlon";
// P.msg();
// console.log(P);
// let P2 = Pessoa2;
// P2.nome = "Maria";
// P2.msg();



let nomes = {
    'nome':'',
}
nomes.__proto__.msg = function(){
    alert('Olá '+nomes.nome)
}
let n = nomes;
n.nome = "Larissa";
n.msg();
let n2 = nomes;
n2.nome = "Maria";
n2.msg();
let n3 = nomes;
n3.nome = "Charlon";
n3.msg();
let n4 = nomes;
n4.nome = "Ana";
n4.msg();


// let nome = "Maria";
// let nome2 = "Charlon";
// let nome3 = "Ana";
// (function msg() {
//     alert("Olá, "+nome);
//     alert("Olá "+nome2);
//     alert("Olá "+nome3);

// })()


