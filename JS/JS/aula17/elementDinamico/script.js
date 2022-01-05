//A formula abaixo cria elemento li dinamicamente através do javascript
//e atribui os valores do array de objetos para cada li
//Tudo numa função autoexecutavel, ou seja, quando a pagina é carreagada tudo
//acontece automatico
window.onload = function(){
    //Criou um array de objetos
    let produtos = [

        {descrição:'Biscoito Mabel', preço: 2.50},
        {descrição:'Marmelada', preço: 5.60},
        {descrição:'Sabonete', preço: 3.50},
                    ]
    //fez mapeamento dos elementos do html                
    const listaProdutos = document.querySelector("#listaProdutos");
    const total = document.querySelector('#total');
    //Isso faz que a função seja autoexecutavel
    //Dois parenteses ()() para criar função autoexecutavel
    //Dentro do primeiro parenteses, crio arraw function ( ()=>{} )()
    

    ( ()=>{
        let totalzinho = 0;
        //for of irá ler o array
        //for in irá ler os objetos
        for(let pro of produtos){
            //const para criar elementos li na lista
            const filhoLi = document.createElement('li');
            for(listaP in pro){
                if (listaP == 'preço'){
                    //setAttribute para inseir o atributo data-preco no html
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP]);
                    totalzinho += pro[listaP];
                } else{
                   listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`; 
                }
            }
        }
        //coloca o preço dentro do formulario
        total.value = totalzinho.toFixed();
    } )(produtos)
    


}