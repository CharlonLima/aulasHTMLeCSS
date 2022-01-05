//let é a variavel e str é string o conteudo está dentro da crase
// let str = `Qualquer conteúdo!`;

//template String
// É uma forma de apresentar string `` shift+Botão Acento Crase
// cifrao e dentro das chaves  coloca o nome da variavel e
//ele concatena o conteudo sem a necessidade do sinal +
// let str2 = `Uma outra String ${str}`;

// console.log(str2);

//Arrays uma coleção de dados
//É constituido por elementos
//pode incorporar textos e numeros
//o tamanho nesse caso é 4 elementos
// posicao de uva é 0 e laranja é 2
// const frutas = ["Uva", "Banana", "Laranja", "Melancia"];
// // frutas[0] retorna de acordo com a posicao
// let euGosto = `Eu gosto de ${frutas[2]}`;

// console.log(euGosto);

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

//variavel colchetes
// cada item  tem um indice
const Pessoa = [ 
    "José",//posição 0
    23, // posição 1
    "Solteiro", //posição 2 
    "Bola", //posição 3
    1.70, //posição 4
    cores = ["azul", "preto", "vermelho", "salmão", "ocre"] //posição 5 tem array
    //dentro as cores tem posição azul 0, preto 1, vermelho 2, salmão 3, ocre 4
];

let key = 3; //crio variavel e atribuo posicao onde tem array(Varios elementos)
 key++;//Pega o numero que esta na variavel e soma +1 e dá 4 quatro e retorna a posição quatro ocre 
console.log(Pessoa[5][key]);//coloco a variavel e ele retorna o elementos com array salmão




//.length retorna o tamanho do array
console.log(Pessoa.length);

//e também o tamanho/quantidade de caracteres de uma string
console.log('Charlon'.length);

//retorna uma letra de palavra de acordo com a posição do colchetes
console.log('Charlon'[0]);


// Como cores tem varios elementos eu preciso definir outro
//numero para busca posicao das cores Chama se arraw bidimensional
//console.log(Pessoa[5][0]);

// const jose = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e sou ${Pessoa[2]}
// eu também gosto de jogar ${Pessoa[3]}. Minha altura é de ${Pessoa[4]}.`;

// //Função autoexecutavel
// (function(p){
// const jose = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e sou ${Pessoa[2]}
// eu também gosto de jogar ${Pessoa[3]}. Minha altura é de ${Pessoa[4]}.`;
// document.write(jose);
// })(Pessoa)


// console.log(jose);