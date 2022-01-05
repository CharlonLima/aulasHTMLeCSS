//precisa ser inteiro (não float) não negativo
let m = 1;

try{
    //try tenta executar os codigos que está dentro do seu escopo se der erro
    //exibe a mensagem que está no throw new Error
    if(typeof m != 'number') throw new Error("Digite um número!");
    if(m < 0) throw new Error("O número não pode ser negativo!");
    //operador modi verifica se há resto de divisão
    if(m % 1 !==0) throw new Error("Digite um número inteiro!");
} catch(error){
    //Se der erro executa um codigo com a mensagem de erro
    //Se não der erro não vai exibir nada
    console.log(`O erro é:. ${error}`);
}   finally{
    //Vai acontecer de qualquer jeito, dando erro ou não
    console.log("Cheguei no finally");
}