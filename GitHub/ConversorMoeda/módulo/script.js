function conversorMoeda () {
    const real = document.querySelector("#real");
    const moedaEstrangeira = document.querySelector("#moedaEstrangeira");
    const dolar = document.querySelector("#dolar");
    const euro = document.querySelector("#euro");
    const clean = document.querySelector("#clean");
    
    dolar.addEventListener('click', async function () {
        try{
            if(real.value != ""){
            let site = "https://economia.awesomeapi.com.br/json/USD-BRL";
            let dadosFetch = await fetch(site);
            let dadosJson = await dadosFetch.json();
            for (let cotacao of dadosJson) {
                let valorDolar = cotacao["high"];
                let resultado = Number(real.value) / Number(valorDolar);
                moedaEstrangeira.value = resultado.toFixed(2);
            }
            moedaEstrangeira.style.backgroundColor = 'blue';
            moedaEstrangeira.style.color = 'white';
        } else{
            alert("Digite um valor no primeiro formulário para converter!");
            real.style.backgroundColor = 'orange';
            }
        } catch(error){
            alert("Não foi possível se conectar com o servidor. Tente novamente mais tarde.");
        }    
    });

    euro.addEventListener('click', async function () {
        try{
            if(real.value != ""){
            let site = "https://economia.awesomeapi.com.br/json/EUR-BRL";
            let dadosFetch = await fetch(site);
            let dadosJson = await dadosFetch.json();
            for (let cotacao of dadosJson) {
                let valorEuro = cotacao["high"];
                let resultado = Number(real.value) / Number(valorEuro);
                moedaEstrangeira.value = resultado.toFixed(2);
            }
            moedaEstrangeira.style.backgroundColor = 'black'
            moedaEstrangeira.style.transition = '1s';
            moedaEstrangeira.style.color = 'white';
        } else{
            alert("Digite um valor no primeiro formulário para converter!");
            real.style.backgroundColor = 'orange';
            }
        } catch(error){
            alert("Não foi possível se conectar com o servidor. Tente novamente mais tarde.");
        }   
    });

    real.addEventListener('click', function(){
        real.style.backgroundColor = 'white';
    })

    clean.addEventListener('click', function () {
        real.value = "";
        moedaEstrangeira.value = "";
        moedaEstrangeira.style.backgroundColor = 'white';
    });
}

export{conversorMoeda};