//Criação de Objetos
//É melhor utilizar objetos do que um monte de variaveis que sobrecarrega a memoria
//Com o this o interpretador entende automaticamente que é objeto
// function Pessoa(nome){
//  this.nome = nome;
//  }
// Pessoa.prototype.msg = function(){
//     alert("Olá "+ this.nome);
// }
//Qualquer classe que seja pessoa vai herdar a propriedade que estiver no objeto prototype
//Como se fosse classe no html css, onde crio só uma vez uma classe com formatação 
//e vou aplicando a classe em varios elementos, sem a necessidade de ir definindo
//as configurações como fonte, color etc para cada elemento
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



//CRIANDO NOVO OBJETO MAS COM ALGUMAS INFORMAÇÕES PRE DEFINIDAS
//UNINDO OBJETOS COM ARRAYS

let Pessoa3 = [
    {//o que esta
        'nome': 'Marcelo',
        'idade': 22,  //indice 0
        'sexo':'M'
    }, //virgula separa elementos do array
    {
        'nome': 'Charlon',
        'idade': 34,    //indice 1
        'sexo':'M'
    },
    {
        'nome': 'Marcos',
        'idade': 50,    //indice 1
        'sexo':'M'
    },
    {
        'nome': 'Ana',
        'idade': 30,    //indice 1
        'sexo':'F'
    },
]
let Npessoa = Pessoa3;
console.log(`Existem ${Npessoa.length} cadastradas`);
//1 é o indice e nome é elemento que quer retornar
console.log(Npessoa[1].nome);