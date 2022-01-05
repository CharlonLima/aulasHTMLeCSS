function exercicio14 (objeto){
//Há loops proprio para percorrer objetos e para percorrer arrays
//O LOOP for of vai percorrer o array
//fruit é nome da variavel criada e objeto é o array
//O loop for in vai percorrer os objetos do array
    for(let fruit of objeto){
        for(let f in fruit){
        console.log(`${f} ${fruit[f]}`);
        }
}
    
}




exercicio14(
    [
    {
        nome:'Maçã',
        preço: 5,
    },
    {
        nome:'Banana',
        preço: 3,
    },
    {
        nome:'Melancia',
        preço: 1,
    },
    {
        nome:'Cupuaçu',
        preço: 4,
    },
]
);
