// for(let x=0; x<10; x++){
//     console.log(`O valor da iteração ${x} o x mais ele mesmo ${x++}`);
// }



// for(let x=0; x<10; x++){
//     console.log(`O valor da iteração ${x}`);
// }



// let i =2;
// for(let x=0; x<10; x++){
//     console.log(`O valor da iteração ${x} o x mais ele mesmo ${i++}`);
// }



// let Pessoas = {
//     nome:"Steve Rogers",
//     idade: 90,
//     heroi: "Capitão América",
// }
//Retorna todos os elementos de uma vez for in
//trabalha com objetos
// for(let propriedades in Pessoas){
//     console.log(Pessoas[propriedades]);
// }
//Retorna apenas o elemento escolhido nesse caso nome de uma vez for in
// for(let propriedades in Pessoas){
//     console.log(Pessoas.nome);
// }  


//for of trabalha com array
// let frutas = ["Melancia", "Manga", "Banana", "Uva"];
// for(let nomeFruta of frutas){
//     console.log(nomeFruta);
// }
// for(let x=0; x<frutas.length; x++){
//     console.log(`O nome da fruta é ${frutas[x]}`);
// }



//array de objetos
//todas as propriedades do objeto devem ser separadas por virgula
let Herois = [
    {
        IdentidadeSecreta:"Steve Rogers",
        heroi: "Capitão América",
     },
     {
        IdentidadeSecreta:"Tony Stark",
        heroi: "Homem de Ferro",
    }
     
];
Herois.push({IdentidadeSecreta:"Diana", heroi:"Mulher Maravilha"});
Herois.push({IdentidadeSecreta:"Bruce Bener", heroi:"Hulk"});
// let marvel = Herois[0].IdentidadeSecreta;
// console.log(marvel);

//for in dentro de for of
//O primeiro for nos tras os objetos, mas ele não le diretamente os objetos
//Quem le os objetos é o for in
for(let marvel of Herois){
    //console.log(marvel);
    for(let m in marvel){
       console.log(`${m} -> ${marvel[m]}`);
   }
}