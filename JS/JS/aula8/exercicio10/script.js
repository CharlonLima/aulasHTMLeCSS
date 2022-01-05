function valorIMC(nome, altura, peso){

a = Number(altura);
p = Number(peso);


let imc = p/ (a*2)
document.write("Nome:. ", nome);
document.write("Altura:. ", altura);
document.write("Peso:. ", peso);
document.write("IMC:. ", imc);
}
pesoPessoa = prompt("Digite seu peso");
alturaPessoa = prompt("Digite sua altura");
nomePessoa = prompt("Digite seu nome");
valorIMC(nomePessoa, alturaPessoa, pesoPessoa);
