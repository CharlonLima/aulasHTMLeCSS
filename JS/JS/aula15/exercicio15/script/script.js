window.onload = function(){
    //PRIMERO DE TUDO VAMOS DEFINIR QUEM SÃO OS ELEMENTOS ALVOS, QUE SÃO 3
    //input text para entrada de dados, input button que é elemento botão,
    //e a div que irá receber os valores, portanto vamos criar tres variaveis
    //atribuindo os elementos do html as variaveis

    const tab = document.querySelector("#tabuada");
    const btn = document.querySelector("#Calcular");
    const resp = document.querySelector("#resposta");

    //AGORA VAMOS CRIAR O EVENTO de click NO BOTAO, E QUANDO O EVENTO OCORRER
    //SEJA EXECUTADA UMA FUNÇÃO anonima

    btn.addEventListener('click', function(){
        //A VARIAVEL NUMERO VAI RECEBER O VALOR QUE SERÁ DIGITADO NO FORMULARIO DE ENTRADA tab
        //O PARAMETRO .value irá capturar o valor que for digitado no formulario tab,
        //ESSE VALUE VEM DO ATRIBUTO VALUE="" QUE FICA NO INPUT DO FORMULARIO LÁ NO HTML
        //COMO O QUE SERÁ DIGITADO NO FORMULARIO SERÁ INICIALMENTE ENTENDIDO PELO JS COMO STRING
        //É PRECISO CONVERTER PARA NUMERO, DAÍ ENTRA O NUMBER
        let numero = Number(tab.value);
        let tabuada =0;
        
        //is Nan vai verificar se o que está em numero não é um numero
        //Se não for numero(e sim uma string) ele retorna true
        //Se for numero ele retorna false
        // e o if reconhece isso, se for true o if vai mandar para a primeira tarefa
        //"Digite um valor numérico valido";
        //se for false ele vai para loop tabuada
    if(isNaN(numero)){
        //Como div, section , nav não tem atributo do tipo value, precisamos usar
        //a propriedade .innerHTML, textContent permite que a gente pegue e envie o
        // conteudo de texto que estão neles
        //Nesse caso vamos enviar um texto
        resp.innerHTML = "Digite um valor numérico valido";
    } else{
        if(numero<1 || numero >10){
                resp.innerHTML = "Digite um valor entre 1 e 10";
        }   else{
            console.log(`Tabuada do ${numero}`);
            resp.innerHTML = `Tabuada do ${tab.value}`;
            while (tabuada<=10) {
                //O sinal de +antes do igual, vai receber o valor e concatenar
                //A tag br pula de linha
                resp.innerHTML += `<br> ${numero} x ${tabuada} = ${(numero*tabuada)}`;
                tabuada++;
            }
        }
    }  

    })












}