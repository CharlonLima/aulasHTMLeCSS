
window.onload = function(){
    const lista = document.querySelector("#listaOrdenada");
    const btn = document.querySelector("#botao");
    let veiculos = ['ônibus', 'motocicleta', 'patinete', 'moto'];
    btn.addEventListener('click', function(){
        for(veic of veiculos){
            let li = document.createElement('li');
            lista.appendChild(li).textContent = veic;
        }


})}