window.onload = function(){
    //querySelector pega apenas o primeiro valor
    //querySelectorAll pega todos os elementos
    //Abaixo estamos definido quem é o nosso alvo que é id ulPai
    const ulPai = document.querySelectorAll("#ulPai");
    alert(ulPai);
    console.log(ulPai);
    //o elemento ulPai vai começar a mandar informações para o parametro lista
    //Quando o ulPai for clicado ele vai mandar informação para o parametro lista
    ulPai.forEach(function(lista){
        //O lista.addEventListener vai ver que tem um evento e vai verificar que evento que é
        //é de click mas quem será que vai ser clicado? dai passa o parametro lista para function no parametro elemento
        //e descubre quem foi clicado atraves do target
        lista.addEventListener('click', function(elemento){

            alert(elemento.target.innerHTML);
        })
    }
        


)}