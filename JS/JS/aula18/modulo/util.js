    function calcular (idProduto, resultado){
        const preco = document.querySelectorAll(`#${idProduto}>li`);
        const valorResultado = document.querySelector(`#${resultado}`);
        let totalzinho =0;
        //conforme o for of vai percorendo o preço ele vai jogando para variavel i
        for(let i of preco){
            totalzinho += Number(i.dataset.preco);
        }
        valorResultado.value = totalzinho;
    }
    //remover o elemento que for clicado pelo usuario e recalcular a soma
    function removerProdutos(id){
        const lista = document.querySelectorAll(`#${id}>li`);
        for(let produto of lista){
            produto.addEventListener('click', function(){

                //remove metodo herdado do prototype
                produto.remove();
                //toda vez que um elemento for removido ele precisa chamar a função novamente
                //para calcular o novo resultado
                calcular('produtos','somaTotal'); 
            });
        }
    }
    //exporta as funções definidas
export {calcular, removerProdutos};



