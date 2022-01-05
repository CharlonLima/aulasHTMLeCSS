//Arrays MANIPULAÇÃO

//.concat() junta dois ou mais arrays
// let nome = ["Marcelo", "Suelem", "Raphael", "Voce", "Nós Todos"];
// let nome2 =["Pedro", "Paulo", "Maria", "Samanta"];
// //O ponto significa que vem metodo ou propriedade ou ação
// let todosNomes = nome.concat(nome2);
// console.log(nome);
// console.log(nome2);
// console.log(todosNomes);
// let qtdArrayNome = `O array nomes possui ${nome.length} elementos`;
// console.log(qtdArrayNome);



//indexOf() Procura um determinado elemento de uma array, e retorna a posição
            //0        //1      //2        //3
//se não tiver no array ele retorna -1
// let nome2 =["Pedro", "Paulo", "Maria", "Samanta"];
//console.log(nome2.indexOf("Maria"));

// let buscaNome ="José";

// if(nome2.indexOf(buscaNome) !=(-1) ){
//     alert(`Eu encontrei o ${buscaNome} e está na posição ${nome2.indexOf(buscaNome)}`);
// } else{
//     alert(`Eu não encontrei o ${buscaNome}`);
// }


//join() transforma elementos de uma array em uma string

// let nome2 =["Pedro", "Paulo", "Maria", "Samanta"];

// console.log(nome2);
// console.log(nome2.join());



//push () insere o ultimo elementos no fim de um array
//perceba que o array frutas está vazio
// let frutas = [];
// frutas.push("Maça","Banana");
// console.log(frutas);
//Segue abaixo um exemplo de como usar o push
// o if procura se o termo esta na lista, se não tiver ele adiciona 
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// let insertFruta = "Amora";
// if(frutas.indexOf(insertFruta)==-1){
//     console.log(`A fruta ${insertFruta} não está na lista`);
//     frutas.push(insertFruta);
// }   else{
//     console.log(`A Fruta ${insertFruta} já está na lista`);
// }console.log(frutas);



//pop() remove o ultimo elemento de um array
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// frutas.pop();
// console.log(frutas);


//reverse() inverte a ordem dos elementos de um array
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// frutas.reverse();
// console.log(frutas);
// console.log(frutas[0]);



//shift () remove o primeiro elemento de um array
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// frutas.shift();
// console.log(frutas);



//sort () ordena elementos de um array em ordem crescente
//Com numeros não é muito preciso
// let numeros = [200, 2, 1, 189, 67];
//Com letras é mais preciso
// let alfa = ['n', 'p', 'c', 'a', 'b','j'];
// alfa.sort();
// console.log(alfa);



//toString () Converte uma array em uma string e retorna  esta string
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];
// console.log(frutas.toString());



//unshift() Insere um elemento no inicio do array

// splice () corta ou remove um elemento do array em um ponto indicado
let nomes = ["Mariana", "Patati Patatá", "Xuxa", "Balão Mágico"];
//splice(indiceOuPosicao A PARTIR do elemento que quer remover,
//Quantidade de elementos que quer que remova DEPOIS DA POSIÇÃO)
let novaLista = nomes.splice(2,1);


//Segue abaixo um codigo que remove um item de acordo com a posição
//do termo armazenado no indice, e o valor do indice é colocado dentro
// do splice e o termo é removido
// let nomes1 = ["Mariana", "Patati Patatá", "Xuxa", "Balão Mágico"];
// let indice = nomes1.indexOf("Balão Mágico");
// let novaLista2 = nomes1.splice(indice,1);

// console.log(nomes1);