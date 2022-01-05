//While LOOP
//Vai executando o codigo enquanto a condição não for verdadeira/atendida
//Quando a condição for atendida/verdadeira, ele para de executar o codigo
// let loop =0;
// let cores =["Vermelho", "Verde"];
//No while nos incrementamos a variavel dentro das chaves, diferentemente
//do for onde incrementamos dentro dos parenteses
// while(loop<cores.length){
//  console.log(cores[loop]);
//  loop++;
// }



//Do While LOOP
//Enquanto a condição for atendida, ele vai executar o codigo
//Quando a condição não for atendida/ não for verdadeira, ele para de executar o codigo

let teste=0;

do{
    teste = Number(prompt("Digite 0 para sair"));
    switch(teste){
        case 0:
            alert("Saindo do Sistema");
        break;    
        case 1:
            alert("Cadastrando");
        break;
        case 2:
            alert("Consultando");
        break;
        default:
            alert("Opção Inválida");
        break;
    }
} while(teste!=0)