// let m = false;
//typeof retorna se o valor que está na variavel é uma string, boolean, number
//console.log(typeof m);

// if(typeof m ==='number'){
//     console.log(`O dado informado é number ${m}`)
// } else{
//     console.log(`O dado informado não é number ${m} ${typeof m}`);
// }

//window.onload para manipular o doom
window.onload=function(){
    //.getElementById('btn') captura um elemento pelo id É MELHOR PARA NUMERO
    const botao = document.getElementById('btn');
    //querySelector captura um elemento pelo id
    const txtBox = document.querySelector("#txtBox");
    const caixa = document.querySelector("#caixa");
    //.addEventListener adiciona um evento e executa uma função quando o evento acontece
    botao.addEventListener('click', function(){
        //alert(botao.value);
        //alert(txtBox.value);
        //innerHTML permite que escreva na div,
        //caixa.innerHTML = txtBox.value;
        //para que o valor adicionado não substitua o já escrito anteriormente
        caixa.innerHTML += ' '+txtBox.value +' ';
    })
    // console.log(botao);
}