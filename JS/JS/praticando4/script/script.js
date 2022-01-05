let nomes = ["Charlon", "Ana", "Lucas", "Jonatas", "Mariana"];
const Teste = (array, novoNome, indice)=>{
    document.write(`A quantidade de elementos do array é:. ${array.length}`);
    document.write(`Você escolheu o indice ${indice} que é o elemento:. ${array[indice]}`);
    array.push(novoNome);
    document.write(`A quantidade atual de elementos do array é de:. ${nomes.length}`);

}

Teste(nomes,"Joana",4);