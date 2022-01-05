let nome = ["Charlon", "Lucas", "Suelem", "Ana", "Mariana"];
const nomes = (name, novoNome, index)=>{
    console.log("A quantidade de elementos do array é:..", name.length);
    console.log(`Você escolheu o indice ${index} que é o elemento ${name[index]}`);
    console.log(`O nome ${novoNome} foi inserido no array`);
    name.push(novoNome);
    console.log("A quantidade de elementos atual do array é de:..", name.length);
}
nomes (nome, "Mariana", 4);



