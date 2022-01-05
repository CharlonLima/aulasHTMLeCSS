//cria elementos quando o evento é realizado
window.onload = function(){
    const cxProduto = document.querySelector("#produto");
    const btnCadastrar = document.querySelector("#cadastrar");
    const lista = document.querySelector("#listaDeProdutos");

    btnCadastrar.addEventListener('click', function(){
        //createElement cria um elemento, nesse caso li da lista e
        //armazena na variavel lia
        let lia = document.createElement('li');
        //Agora onde esse elemento criado será colocado?R: lista
        //appendChild para colocar um elemento filho no elemento pai
        //textContent e value para colocar um texto no elemento
        lista.appendChild(lia).textContent = cxProduto.value;
        lista.appendChild(lia).setAttribute('class', 'listaDeFrutas');
        //setAttribute irá criar atributos da tag dinamicamente em consonância com o elemento filho
        //possui dois parametros, tipo de atributo (Que pode ser class ou id ou qualquer outro atributo)
        // e o nome do atributo



        
    })}