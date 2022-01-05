// function verificaMaiorNum(num1, num2){
//     if(num1>=num2){
//         if(num1==num2){
//             console.log("O número "+num1+" é igual ao número ao "+num2);
//         } else{
//             console.log("O número "+num1+" é maior que o número ao "+num2);
//         }
//     } else{
//         console.log("O número "+num1+" é menor que o número ao "+num2);
//     }
// }
//A função acima não é auto executavel, ela precisa ser chamada
//Para isso serve a linha de código abaixo verificaMaiorNum(20, 3);
//verificaMaiorNum(20, 3);
// //a linha de codigo abaixo chama a função//  
// verficaMaiorNum(9000,1000);


// //Função auto executavel
// (function(){
// seu codigo   
// }

// function teste(){
//     let nome ="Marcelo";

//Use o return para retornar o valor que está na variável let que nesse caso é Marcelo
//sem o código return nome; no console retornará undefined
//o return deve se a ultima instrução do codigo, mais nada embaixo
//
//
//     return nome;
// }
// console.log(teste());

//Perceba que apenas colocou o return com nome
// let msg = (nome)=>{ return nome};
// console.log(msg('José'));

//arrow functions não precisa usar tag return
// ()=>{}
//
// let msg = ()=>{
//     alert("Estou feliz da vida com JS");
// }
// a linha de codigo abaixo chama a função//  
// msg();


// console.log( teste() );
//teste();
//let msg = (nome)=>{ return nome};
// console.log( msg("José"));




//Função auto executavel
/*Para abrir uma função auto executavel siga os seguintes passos
1°abre dois pares de parenteses, um do lado do outro: ()()
2°Dentro do primeiro parenteses, escreva function e pressione tab. PRONTO.
// (function(){
//     alert("Esta função me chamou sozinha");
// })()



// (function(produto, preco){
    //produto e preço são os parametros
//     alert("O produto é "+produto+" e o preço é de R$ "+preco);
// })("Biscoito", 2.35) use ponto não a virgula
//"Biscoito" e 2.35 são os valores atribuidos aos parametros produto e preço respectivamente
//Se não colocar a funçao nao funcionará






let v1 = prompt("Digite o valor 1");
let v2 = prompt("Digite o valor 2");
//Quando o prompt recebe um numero o JS entende como string
// Para tanto é necessário usar Number
const soma = (valor1, valor2)=>{
    /*Use Number ou parseInt(Para numeros inteiros) parseFloat(Para numeros decimais)
    para que o java script entenda que o valor inserido no prompt
    não é string, mas sim número*/
//     let resultado = Number(valor1)+Number(valor2);
//     console.log(resultado);
// }
// soma(v1, v2);