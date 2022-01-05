//Ferramentas importantes
//Usar Somente UM /a/g , /a/i  ou USaR os dois juntos  /a/gi
//O g é de global, ou seja, para que ele analise tudo e aplique o parametro
// em todos os carateres
//O i é de iq sensitive, ou seja para que ele não diferencie se é caixa baixa ou alta




//match() procura uma palavra em uma string e
//retorna o index( que é a posição da palavra ou letra) e algumas informações a mais
//espaço também é considerado um caractere
//Lembrando que o js diferencia mauiscula de miniscula
// let nome = "Charlon Afonso da Cruz Lima";
// console.log(nome.match("C"));


//search procura uma palavra em uma string e retorna apenas a posição
// let nome = "Charlon Afonso da Cruz Lima";
// console.log(nome.search(/c/i));



//Retorna caractere letra de uma string
// console.log(nome[0]+nome[1]+nome[2]+nome[3]+nome[4]+nome[5]+nome[6]+nome[7]);



//replace() Procura uma string e substitui uma string por outra

// let texto = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt
//  doloremque a at culpa tempore aut omnis numquam, 
//  ullam in excepturi harum similique nihil magnam
//  deleniti modi illum delectus quisquam.`
//O primeiro parametro é a string que será procurada e substituida e a segunda é o que
//será colocado no lugar
// let newTexto = texto.replace(/i/gi,"y");
//  console.log(newTexto);
//Por padrao só substitui a primeira ocorrencia de i e as outras não será substituida
// Para que ele substitua todos usa o g,
//e para que ele não diferencie mauiscula de minuscula usa o i
//E o caractere fica dentro de duas barras




//localeCompare() efetua uma comparação entre duas strings, Se for igual
//Ele irá retornar 0, se for diferente irá retornar 1

// let animal = "gato";
// let animal2 = "gato";
//Maiusculo ele não compara
// console.log(animal.localeCompare(/Gato/gi));



//toString irá converter qualquer valor em string

// let num = Number('10');
// console.log(num.toString());




//toLowerCase faz a conversão de uma string inteira para minusculo

// let texto = `Lorem, ipsum DOLOR sit amet consectetur adipisicing elit. Aspernatur sunt
// doloremque a at culpa tempore aut omnis numquam, 
// ullam in excepturi harum similique nihil magnam
// deleniti modi illum delectus quisquam.`
// console.log(texto.toLowerCase());


// let animal = 'gato';
// let animal2 = 'GATO';

// let cat1 = animal.toLowerCase();
// let cat2 = animal2.toLowerCase();
// console.log(cat1.localeCompare(cat2));
//A comparação dá verdadeira porque ele converteu as strings para caixa baixa




//toUpperCase() faz a conversão de uma string inteira para maiusculo

// let texto = `Lorem, ipsum DOLOR sit amet consectetur adipisicing elit. Aspernatur sunt
// doloremque a at culpa tempore aut omnis numquam, 
// ullam in excepturi harum similique nihil magnam
// deleniti modi illum delectus quisquam.`

// console.log(texto.toUpperCase());





//trim() remove espaços antes e depois da string especificada

// let texto = `       Lorem, ipsum DOLOR sit amet consectetur adipisicing elit. Aspernatur sunt
// oloremque a at culpa tempore aut omnis numquam, 
// ullam in excepturi harum similique nihil magnam
// deleniti modi illum delectus quisquam.       `;

// console.log(texto.trim());
// console.log(texto);




//NaN (Not a number) significa não é um numero

// let num = Number('akads');
// console.log(num);

// let num2 = Number("8i");
//se o usuario digitar i por engano o number ignorara a string e convertera o 8 entre aspas em numero
// console.log(isNaN(num2));
// isNaN pergunta se não é numero,
//se não for numero(mas sim string) ele retorna true,
//se for numero ele retorna false
//nesse caso o isNaN retornou true porque o number ignorara a string e convertera o 8 entre aspas em numero




// let num3 = 8;
// //o if detecta o true e false efetua a operação
// // 
// if(isNaN(num3)){
//     console.log("Isto não é um numero");
// } else{
//     console.log("Isto é um numero");
// }

// let num4 = 8;
// console.log(isNaN(num4));




//toFixed permite escolher quantas casas decimais apos a virgula
//e arredonda valor para cima

let valor = 2.786;
console.log(valor.toFixed(1));


//toLocaleString() formata um determinado valor para moeda

console.log(valor.toLocaleString('pt-br',{style:'currency', currency:'BRL'}));