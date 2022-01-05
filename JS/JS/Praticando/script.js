// if(prompt("Oi, Escreva qual operação Matemática você deseja fazer, multiplicar ou dividir")=="multiplicar"){
//  (function() {
//     let v1 = prompt("Digite o primeiro valor");
//     let v2 = prompt("Digite o segundo valor");
//     const resultadoMult = Number(v1)*Number(v2);
//     alert('O resultado da multicação é '+resultadoMult);
// })()   
// } else{(function () {
//     let v1 = prompt("Digite o primeiro valor");
//      let v2 = prompt("Digite o segundo valor");
//      const resultadoDivi = Number(v1)/Number(v2);
//     alert("O resultado da divisão é "+resultadoDivi);
// })()
// }

//FIM DO CODIGO ABAIXO

let x = prompt("Olá, escreva qual operação matematica você deseja fazer: somar, multiplicar, dividir, diminuir");
switch (x){
    case "somar":
        (function () {
           let v1 = prompt("Digite o primeiro valor") ;
           let v2 = prompt("Digite o segundo valor");
           const resultado = Number(v1)+Number(v2);
           alert("O resultado da soma é "+resultado);
        })()
    break;
    case "multiplicar":
        (function () {
           let v1 = prompt("Digite o primeiro valor") ;
           let v2 = prompt("Digite o segundo valor");
           const resultado = Number(v1)*Number(v2);
           alert("O resultado da multiplicação é "+resultado);
        })()
    break;
    case "dividir":
        (function () {
           let v1 = prompt("Digite o primeiro valor") ;
           let v2 = prompt("Digite o segundo valor");
           const resultado = Number(v1)/Number(v2);
           alert("O resultado da divisão é "+resultado);
        })()
    break;
    case "diminuir":
        (function () {
           let v1 = prompt("Digite o primeiro valor") ;
           let v2 = prompt("Digite o segundo valor");
           const resultado = Number(v1)-Number(v2);
           alert("O resultado da subtração é "+resultado);
        })()
    break;

}