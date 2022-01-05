//LOOP LAÇO DE REPETIÇÃO

//Incremento ++
let n = 1;
n++;
n++;
                //0          //1     //2        //3
let frutas = ['Melancia', 'Banana', 'Uva', 'Nevascaranga'];
frutas.push('Jaca', 'Maçã');
// console.log(frutas[n]);



//for inicia o loop
//São 3 parametros para o loop
//O primeiro parametro é i=0 variavel i geralemente é a mais utilizada, porque lembra
//iteração ou incremento. mas o i no loop poderia ser o proprio n, ele já vai iniciar no indice zero
//ou seja já vai começar com melancia, se colocar 1 vai começar em banana, 2 uva e assim sucessivamente.
//O segundo parametro é a condição, i<=3 ou seja, até quando eu quero que ele "dê uma volta" e nesse caso
//em especifico incremente o valor para retornar o indice, enquanto i for maior ou igual a 3
//eu quero que ele "dê uma volta" e incremente o valor, e esse valor incrementado será usado para retornar a posiçao de uma fruta
//no array frutas[i] que por sua vez retornará o nome
//nesse caso em especifico é um array, e ele vai retornar o elementos do array de acordo com o valor incrementado
//O terceiro parametro é o que eu quero que ele faça enquanto a condição definida no
//segundo parametro for verdadeira, nesse caso i++ eu quero que ele incremente a variavel n,
//Resumindo tudo ele vai dando voltas, incrementando o valor enquanto a condição for verdadeira
//na primeira volta vai valer 0, na segunda 2, na terceira 3, e imprimindo o nome das frutas
// for(let i=0; i<=3; i++){
//     console.log(frutas[i]);
// }




//Mesmo loop de cima, mas ao invés de colocar um numero fixo, coloca length
//para contar quantos elementos tem no array
// for(let i=0; i<frutas.length; i++){
//     console.log(frutas[i]);
// }


//outro loop incrementa a partir do 1 até o 10
// for(let i=1; i<10; i++){
//     console.log(i);
// }

//Outro LOOP decrementa o 10 até o 0
// for(let i=10; i>0; i--){
//     console.log(i);
// }

//Outro loop incrementa o i e retorna as frutas de tras para frente
//-1 para tirar undefined
for(let i=(frutas.length-1); i>=0; i--){
    console.log(frutas[i]);
}